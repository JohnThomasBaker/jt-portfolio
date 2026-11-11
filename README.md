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
`dist/`. Before deploying, configure the final public URL as Astro's `site`
value in `astro.config.mjs`, add the selected host's checked-in configuration,
and run:

```sh
npm ci
npm run verify
npm run audit
```

Production deployment and DNS changes require JT's approval.
