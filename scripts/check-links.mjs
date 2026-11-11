import { readdir, readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const distDir = resolve("dist");

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : path;
  }));
  return files.flat();
}

function targetFor(url) {
  const pathname = decodeURI(url.split(/[?#]/, 1)[0]);
  if (pathname === "/") return join(distDir, "index.html");
  const relative = pathname.replace(/^\//, "");
  return /\.[a-z0-9]+$/i.test(relative)
    ? join(distDir, relative)
    : join(distDir, relative, "index.html");
}

const htmlFiles = (await walk(distDir)).filter((file) => file.endsWith(".html"));
const failures = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const urls = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const url of urls) {
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    try {
      await stat(targetFor(url));
    } catch {
      failures.push(`${file.replace(`${distDir}/`, "")}: ${url}`);
    }
  }
}

if (failures.length) {
  console.error("Broken internal links or assets:\n" + failures.join("\n"));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} generated HTML files.`);
