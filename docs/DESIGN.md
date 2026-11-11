# Design Guide

## Visual Direction

The site combines scrapbook-like photography, large Jacquard display type,
muted paper-inspired backgrounds, and restrained editorial layouts. Preserve
that tactile, personal character when adding pages or components.

## Typography

- `Jacquard24` is reserved for large display headings and expressive actions.
- `JTDisplay` is used for section headings, navigation, labels, and metadata.
- `GoudyBookletter1911` is the primary reading face.
- Maintain generous line height and avoid long all-caps passages.

## Color and Surfaces

Use the tokens defined in `src/styles/global.css` rather than introducing
one-off colors. Plum, clay, moss, slate, bronze, and teal provide section
accents. Text must remain readable against the paper texture and photography.

## Layout

- Image-led pages may use full-width heroes.
- Reading pages use the centered `page-default` shell.
- Home sections may retain the stepped left-to-right rhythm, but must never
  create horizontal scrolling or clip interactive content.
- Preserve intrinsic image dimensions or an explicit aspect ratio.
- At mobile widths, controls must remain touchable and content must fit without
  horizontal scrolling.

## Interaction and Accessibility

- Use native links, buttons, and form controls.
- Every interactive element needs a visible `:focus-visible` state.
- Keep one descriptive `h1` per page and maintain heading order.
- Decorative images use empty alt text; informative images describe the
  relevant subject without repeating adjacent copy.
- New motion must respect `prefers-reduced-motion`.
- Do not add hover-only functionality or interaction that depends on precise
  pointer movement.

## Media

- Prefer WebP for photographs and efficient web video for motion.
- Do not ship source media, editing files, or multi-megabyte originals from
  `public/`.
- Third-party embeds should be lazy-loaded and included only when they add
  meaningful portfolio value.
