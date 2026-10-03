# Site Improvement Plan

## Decisions

- [x] Do not create a Store page or add Store to the main navigation.
- [x] Use `/music` as the catalogue and score-purchasing path.
- [x] Link purchasable scores directly to their Gumroad product pages.
- [x] Do not invent missing content or claim unavailable formats are available.
- [x] Use **JT Baker** as the public professional identity; conversational copy may use **JT**.
- [x] Publish `johnthomasbaker19@gmail.com` as the general contact address.
- [x] Keep draft news articles unpublished and show a coming-soon state until real articles are ready.

## 1. Establish a Safe Baseline

- [x] Review existing modified and untracked files before editing.
- [x] Run the current production build and record the generated-site size.
- [x] Identify referenced assets, fonts, components, styles, and scripts.

## 2. Complete the Music and Purchase Journey

- [x] Remove the unused Store constant and Store navigation entry.
- [x] Keep Gumroad product URLs in `src/data/music.ts`.
- [x] Show **Buy score on Gumroad** for works with a Gumroad URL.
- [x] Clearly handle works that do not yet have a purchase URL.
- [x] Remove unsupported catalogue and format claims.
- [x] Hide empty catalogue categories until they contain records.
- [ ] Render work images on detail pages and use them for project thumbnails.
- [x] Make filtering hide complete work links from keyboard navigation.
- [x] Normalize instrumentation formatting and terminology.
- [x] Do not add a cart, checkout, Store route, or separate storefront.

## 3. Fix Navigation and Accessibility

- [x] Add a skip link and visible keyboard focus styles.
- [x] Mark the current navigation item with `aria-current="page"`.
- [x] Implement music filters as ordinary accessible buttons.
- [x] Convert the portrait control to a native button.
- [x] Correct the home-page heading hierarchy.
- [x] Strengthen form focus treatment.
- [x] Remove global horizontal-wheel interception unless testing justifies it.
- [x] Add image dimensions or aspect ratios to reduce layout movement.
- [ ] Preserve and test reduced-motion behavior.

## 4. Improve Performance and Clean Assets

- [x] Resize oversized photographs and create modern image variants.
- [x] Retain only webfonts used by the deployed site in `public/`.
- [x] Preserve required font licences.
- [x] Move confirmed-unused public ZIPs, font sources, and starter assets out of the deployed tree.
- [x] Preserve the active YouTube section and remove dormant featured-audio code.
- [x] Rebuild and compare the final site size with the baseline.

## 5. Complete the Professional Site Shell

- [x] Add a branded 404 page.
- [ ] Improve the footer structure for professional and contact links.
- [x] Publish the confirmed email in the footer and as the lesson-form fallback.
- [ ] Distinguish listening, score purchase, licensing, and lesson actions.

## 6. Add Metadata and Discovery Support

- [x] Add favicon links and improve page titles and descriptions.
- [x] Add Open Graph and Twitter/X card metadata.
- [ ] Add a reusable social-sharing image fallback.
- [ ] Add `robots.txt` and sitemap generation.
- [ ] Add suitable Person, MusicComposition, and Article structured data.
- [ ] Configure canonical URLs after the production domain is confirmed.

## 7. Improve Content Handling

- [x] Store machine-readable ISO news dates.
- [ ] Render descriptions, media, images, and purchase links consistently.
- [ ] Hide absent optional content instead of showing placeholders.
- [x] Keep the TypeScript data files as the editable sources of truth.

## 8. Finish Repository Hygiene

- [ ] Replace the Astro starter README with project-specific instructions.
- [x] Document plain CSS and browser JavaScript in `AGENTS.md`.
- [ ] Populate the design and content documentation.
- [ ] Add an Astro type/check command.
- [ ] Add lightweight CI for checks and the production build.
- [x] Run dependency, link, route, and markup checks where practical.

## 9. Verify the Result

- [ ] Run Astro checking, the production build, and `git diff --check`.
- [x] Smoke-test every generated route and internal link.
- [ ] Review keyboard navigation, focus visibility, and reduced motion.
- [ ] Test representative mobile and desktop widths.
- [ ] Compare generated-site size before and after optimization.
- [x] Review every changed file for unintended effects.

## Owner Inputs and External Verification

- [x] Confirm the public professional name.
- [ ] Confirm the production domain and hosting provider.
- [x] Supply the public contact address.
- [ ] Supply program notes, biography, recordings, artwork, news, and missing
  Gumroad links.
- [ ] Verify Gumroad products, pricing, rights, and mobile checkout.
- [x] Confirm publication rights for all media and fonts.
- [ ] Test physical iOS/Android devices and the deployed lesson form.
- [ ] Approve committing, pushing, and production deployment.

## Progress Log

- 2026-09-17: Established a clean baseline: 15 generated routes and a 52 MB
  `dist/` directory.
- 2026-09-17: Completed the first accessibility, catalogue, metadata, content-
  handling, and site-shell batch described above.
- 2026-09-17: Verification passed: production build (16 routes),
  `git diff --check`, and an internal-link scan across all 17 generated HTML
  files. Generated size remains 52 MB; asset optimization is still pending.
- 2026-10-02: Confirmed JT Baker as the public identity and the Gmail address
  as the public contact. Draft news detail routes were unpublished and replaced
  with a coming-soon state; a form fallback and footer email were added.
- 2026-10-02: Converted active photography to sized WebP assets, added intrinsic
  image dimensions, and moved source-only fonts, originals, ZIPs, and starter
  files outside `public/`. The production build fell from 52 MB to 1.7 MB while
  all original assets remain preserved in `source-assets/`.
