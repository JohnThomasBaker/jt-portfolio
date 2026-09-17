# Site Improvement Plan

## Decisions

- [x] Do not create a Store page or add Store to the main navigation.
- [x] Use `/music` as the catalogue and score-purchasing path.
- [x] Link purchasable scores directly to their Gumroad product pages.
- [x] Do not invent missing content or claim unavailable formats are available.

## 1. Establish a Safe Baseline

- [ ] Review existing modified and untracked files before editing.
- [ ] Run the current production build and record the generated-site size.
- [ ] Identify referenced assets, fonts, components, styles, and scripts.

## 2. Complete the Music and Purchase Journey

- [ ] Remove the unused Store constant and Store navigation entry.
- [ ] Keep Gumroad product URLs in `src/data/music.ts`.
- [ ] Show **Buy score on Gumroad** for works with a Gumroad URL.
- [ ] Clearly handle works that do not yet have a purchase URL.
- [ ] Remove unsupported catalogue and format claims.
- [ ] Hide empty catalogue categories until they contain records.
- [ ] Render work images on detail pages and use them for project thumbnails.
- [ ] Make filtering hide complete work links from keyboard navigation.
- [ ] Normalize instrumentation formatting and terminology.
- [ ] Do not add a cart, checkout, Store route, or separate storefront.

## 3. Fix Navigation and Accessibility

- [ ] Add a skip link and visible keyboard focus styles.
- [ ] Mark the current navigation item with `aria-current="page"`.
- [ ] Implement music filters as ordinary accessible buttons.
- [ ] Convert the portrait control to a native button.
- [ ] Correct the home-page heading hierarchy.
- [ ] Strengthen form focus treatment.
- [ ] Remove global horizontal-wheel interception unless testing justifies it.
- [ ] Add image dimensions or aspect ratios to reduce layout movement.
- [ ] Preserve and test reduced-motion behavior.

## 4. Improve Performance and Clean Assets

- [ ] Resize oversized photographs and create modern image variants.
- [ ] Retain only webfonts used by the deployed site in `public/`.
- [ ] Preserve required font licences.
- [ ] Remove confirmed-unused public ZIPs, font sources, and starter assets.
- [ ] Remove dead YouTube and dormant featured-audio code.
- [ ] Rebuild and compare the final site size with the baseline.

## 5. Complete the Professional Site Shell

- [ ] Add a branded 404 page.
- [ ] Improve the footer structure for professional and contact links.
- [ ] Add a contact path after a public address is supplied.
- [ ] Distinguish listening, score purchase, licensing, and lesson actions.

## 6. Add Metadata and Discovery Support

- [ ] Add favicon links and improve page titles and descriptions.
- [ ] Add Open Graph and Twitter/X card metadata.
- [ ] Add a reusable social-sharing image fallback.
- [ ] Add `robots.txt` and sitemap generation.
- [ ] Add suitable Person, MusicComposition, and Article structured data.
- [ ] Configure canonical URLs after the production domain is confirmed.

## 7. Improve Content Handling

- [ ] Store machine-readable ISO news dates.
- [ ] Render descriptions, media, images, and purchase links consistently.
- [ ] Hide absent optional content instead of showing placeholders.
- [ ] Keep the TypeScript data files as the editable sources of truth.

## 8. Finish Repository Hygiene

- [ ] Replace the Astro starter README with project-specific instructions.
- [ ] Document plain CSS and browser JavaScript in `AGENTS.md`.
- [ ] Populate the design and content documentation.
- [ ] Add an Astro type/check command.
- [ ] Add lightweight CI for checks and the production build.
- [ ] Run dependency, link, route, and markup checks where practical.

## 9. Verify the Result

- [ ] Run Astro checking, the production build, and `git diff --check`.
- [ ] Smoke-test every generated route and internal link.
- [ ] Review keyboard navigation, focus visibility, and reduced motion.
- [ ] Test representative mobile and desktop widths.
- [ ] Compare generated-site size before and after optimization.
- [ ] Review every changed file for unintended effects.

## Owner Inputs and External Verification

- [ ] Confirm the public professional name and production domain.
- [ ] Supply the public contact address.
- [ ] Supply program notes, biography, recordings, artwork, news, and missing
  Gumroad links.
- [ ] Verify Gumroad products, pricing, rights, and mobile checkout.
- [ ] Confirm publication rights for all media and fonts.
- [ ] Test physical iOS/Android devices and the deployed lesson form.
- [ ] Approve committing, pushing, and production deployment.
