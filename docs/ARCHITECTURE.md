# Architecture

## Overview

JT Portfolio is a statically generated Astro site. Content is rendered from
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
at build time from their corresponding data modules.

## Shared Layout and Components

`src/layouts/BaseLayout.astro` is the active shared layout. It provides page
metadata, global navigation, footer, Astro view transitions, and shared
client-side behavior such as reveal animations and hero/nav interaction.

`src/components/FadeIn.astro` supplies declarative data attributes used by the
layout reveal-animation script.

`src/layouts/Layout.astro` and `src/components/Welcome.astro` are unused Astro
starter files. Do not build new site features on them; prefer `BaseLayout` and
the current page patterns.

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

The lessons form uses Netlify Forms markup and submits URL-encoded data to `/`.
It depends on deployment to Netlify (or compatible handling) for successful
production submissions.

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
