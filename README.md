# JT Portfolio

Static portfolio site for composer and percussionist JT Baker. Built with
Astro, plain CSS, and browser JavaScript.

## Requirements

- Node.js 24 (the exact development version is recorded in `.nvmrc`)
- npm

With nvm installed:

```sh
nvm use
npm ci
```

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Run Astro and TypeScript diagnostics |
| `npm run build` | Generate the static site in `dist/` |
| `npm run check:links` | Check generated internal links and assets |
| `npm run verify` | Run checking, build, and link validation |
| `npm run audit` | Check production dependencies for advisories |
| `npm run preview` | Preview the generated production build |

## Editing Content

- Music records live in `src/data/music.ts`.
- News drafts live in `src/data/news.ts`.
- Set `published: true` only when an entry is approved for the public site.
- Put deployable images and fonts in `public/` and reference them with paths
  beginning with `/`.
- Keep originals, working files, and unreleased media in `source-assets/`.

Do not invent program notes, credits, purchase links, dates, or rights status.
See `docs/CONTENT.md` for the publication checklist.

## Deployment

The production build command is `npm run build`; the publish directory is
`dist/`. Set `SITE_URL` to the final public origin (for example,
`https://www.example.com`) in the hosting provider's environment. Production
builds with `SITE_URL` automatically include canonical URLs, absolute social
metadata, `robots.txt` sitemap discovery, and an XML sitemap. Builds without it
remain safe for local previews and do not publish false canonical URLs.

After configuring the selected host, run:

```sh
npm ci
npm run verify
npm run audit
```

Production deployment and DNS changes require JT's approval.
