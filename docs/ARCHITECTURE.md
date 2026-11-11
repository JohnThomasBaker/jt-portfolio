# Architecture

## Overview

JT Portfolio is a statically generated Astro 7 site running on Node.js 24.
Content is rendered from
Astro pages and small TypeScript data modules; there is no CMS, database, or
server-side application layer.

The production build command is `npm run build`, which writes the static site
to `dist/`.

## Important Directories

- `src/pages/` contains file-based routes.
- `src/layouts/` contains the shared page shell.
- `src/components/` contains reusable Astro components.
- `src/data/` is the source of truth for music and news entries.
- `src/styles/` contains site-wide CSS.
- `public/` contains images, fonts, icons, and other static assets.

There is currently no Astro content collection (`src/content/`).

## Routes

| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Home, biography, featured media, projects, and news |
| `/music` | `src/pages/music.astro` | Filterable music catalogue |
| `/music/[slug]` | `src/pages/music/[slug].astro` | Statically generated work detail pages |
| `/lessons` | `src/pages/lessons.astro` | Teaching information and lesson inquiry form |
| `/news` | `src/pages/news.astro` | News index |
| `/news/[slug]` | `src/pages/news/[slug].astro` | Statically generated news detail pages |
| `/me` | `src/pages/me.astro` | About/contact page |

Dynamic music and news routes use Astro `getStaticPaths()` and are generated
at build time from records whose `published` flag is `true`. Draft records stay
editable in the data modules without creating public routes.

## Shared Layout and Components

`src/layouts/BaseLayout.astro` is the active shared layout. It provides page
metadata, global navigation, footer, Astro view transitions, and shared
client-side behavior such as reveal animations and hero/nav interaction.

`src/components/FadeIn.astro` supplies declarative data attributes used by the
layout reveal-animation script.

Legacy Astro starter files are retained only under `source-assets/unused-starter/`
and are not part of the application or deployed output. Build new features from
`BaseLayout` and the current page patterns.

## Content and Data Flow

Music content is defined in `src/data/music.ts` as `MusicPiece` objects. The
music index, home-page project list, and individual work routes all read from
the exported `pieces` array.

```text
src/data/music.ts
  -> home featured projects
  -> /music catalogue
  -> /music/[slug] detail pages
```

News content is defined in `src/data/news.ts` as `NewsPost` objects. The home
page, news index, and individual news routes all read from the exported `posts`
array.

```text
src/data/news.ts
  -> home news preview
  -> /news index
  -> /news/[slug] detail pages
```

Keep each work or post in its data module instead of duplicating its metadata
across pages. Associated files belong in `public/` and should be referenced by
root-relative URLs such as `/images/example.jpg`.

## Styling and Browser Behavior

`src/styles/global.css` contains the shared font faces, color tokens, layout,
navigation, cards, and responsive rules. `BaseLayout.astro` also contains
layout-level styles and scripts. Individual pages may use scoped `<style>` and
`<script>` blocks for behavior that belongs only to that route.

The site uses plain CSS and browser APIs; there is no CSS framework or
client-side JavaScript framework. Scripts that need to survive Astro view
transitions should initialize on `astro:page-load` and clean up listeners on
`astro:before-swap` when appropriate.

The lessons form submits URL-encoded data to FormSubmit and includes a required
acknowledgement of that third-party delivery path. It must be activated and
verified from the staging deployment before production launch. Newsletter data
collection is disabled until a dedicated mailing-list provider is selected.

## Verification and Automation

- `npm run check` runs Astro and TypeScript diagnostics.
- `npm run build` writes the static site to `dist/`.
- `npm run check:links` verifies root-relative links and assets in generated
  HTML.
- `npm run verify` runs all three checks in sequence.
- `.github/workflows/ci.yml` runs verification and the production dependency
  audit for pushes and pull requests.
- `.nvmrc` and the `engines` field record the supported Node.js runtime.

## Architectural Conventions

- Keep the site statically generated unless a feature specifically requires a
  server runtime.
- Treat `src/data/music.ts` and `src/data/news.ts` as the current content source
  of truth.
- Reuse `BaseLayout.astro`, `FadeIn.astro`, and existing CSS patterns before
  adding a new abstraction or dependency.
- Keep route-specific presentation close to its Astro page and shared visual
  rules in `src/styles/global.css`.
- Run `npm run build` after changes to verify all static routes render.
