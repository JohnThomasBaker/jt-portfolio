# Site Improvement Plan

## Pre-Publication Checklist — 2026-11-11

Current release status: **the local build is staging-ready; not approved for a
production launch**. The security, build, type-checking, draft-publication,
asset-size, metadata, accessibility-baseline, and automation blockers are
resolved on the `prelaunch-staging` branch. A staging deployment still depends
on JT choosing the domain and host. Production also depends on JT's content and
rights decisions, deployed-form/device testing, and final approval.

### JT's Checklist

- [ ] Choose the production domain and static hosting provider, and provide the
  domain/host details needed for canonical URLs, DNS, and deployment.
- [ ] Decide which of the 12 music entries are genuinely ready to be public.
  Supply final program notes for **Chrysalis**, **Denton Halftime**, and the four
  arrangements, or approve hiding those entries until they are finished.
- [ ] Supply or select representative artwork for four published works. The site
  now renders each work's configured image consistently; **Declaration of
  Two-Handed Independence** has a real image while the other four public works
  intentionally show the branded placeholder.
- [ ] Supply recordings or performance videos for the works that should have
  media. Every `media` array is currently empty.
- [ ] Correct/confirm all score destinations and availability. In particular,
  **Carceri d'Invenzione currently links to the Monolith Gumroad product**;
  **The Sons and Daughters of Charles Edward Greene** and **Denton Halftime**
  have no purchase link.
- [ ] Confirm that the John Cage and Ichiko Aoba arrangements may be published,
  promoted, streamed, and/or sold, and identify any required credits or licence
  language. Do not publish those pages until rights and attribution are settled.
- [ ] Review the biography and time-sensitive claims for accuracy, including the
  2026 *Blast!* tour, SCV role, Bowling Green study plans, location, and band
  description. Decide whether the casual opening lines on `/me` should remain.
- [ ] Decide whether to launch News now, keep the current coming-soon page, or
  remove it from navigation until real articles exist.
- [ ] Choose a real mailing-list service or approve removing the newsletter form.
  The current FormSubmit form emails each signup to Gmail; it is not a subscriber
  database and provides no unsubscribe/list-management workflow.
- [ ] Decide what privacy disclosure and retention policy should accompany the
  newsletter and lesson forms, which collect email, phone, location, and message
  data through a third party.
- [ ] Confirm publication rights for every final photo, animated image, video,
  recording, font, and logo used in the release.
- [ ] After a staging deploy, activate and test FormSubmit if it is retained,
  verify that lesson inquiries and signup messages arrive, and check spam/junk
  handling.
- [ ] Test the staging site on a physical iPhone/iPad and Android device,
  especially the logo-triggered navigation, music filters, embeds, forms, and
  long composition titles.
- [ ] Approve the final staging site, then approve the production deployment and
  DNS change.

### Codex Checklist

- [x] Upgrade to Astro 7 and Node 24 LTS. The production dependency audit now
  reports zero vulnerabilities.
- [x] Install `@astrojs/check` and TypeScript, add a check script, and resolve all
  diagnostics.
- [x] Add CI that runs the type check, production build, dependency audit policy,
  and internal-link checks for every push/PR.
- [x] Clean the music data and URLs: replace apostrophes and uppercase letters in
  slugs with stable lowercase URL-safe slugs, add redirects if any old URL has
  already been shared, normalize titles/credits/instrumentation, and prevent
  draft records from generating public pages.
- [x] Render selected work artwork on catalogue, home, and detail pages; replace
  the blank `.thumb` blocks; and make missing optional media disappear cleanly.
- [x] Copyedit the biography and program notes for the currently published works;
  retain owner review for time-sensitive and factual claims.
- [x] Reduce the deploy from **60 MB to 1.9 MB**. Archive unreleased originals and
  replace the published animated GIF with a lightweight still image.
- [x] Configure the production `site` URL in Astro and add canonical URLs, an
  XML sitemap, `robots.txt`, complete Open Graph/Twitter metadata, a social-share
  image, and appropriate Person/MusicComposition structured data. These activate
  from the host's `SITE_URL`; JT still needs to supply the final URL.
- [x] Remove the misleading newsletter capture until a real provider is selected;
  add a clear third-party delivery acknowledgement to the lesson form.
- [ ] Add checked-in deployment configuration for the selected host, document the
  build (`npm run build`) and output (`dist`) settings, and replace the Astro
  starter README with project-specific editing and deployment instructions.
  Documentation is complete; host-specific configuration awaits JT's host choice.
- [x] Populate `docs/CONTENT.md` and `docs/DESIGN.md` so future edits preserve the
  intended content rules and visual system.
- [x] Fix verified layout issues, including horizontal overflow visible in the
  1440 px home-page review, then test representative mobile, tablet, laptop, and
  wide desktop widths.
- [ ] Perform final accessibility QA: keyboard-only navigation, visible focus,
  reduced motion, heading/landmark structure, form errors, iframe titles,
  contrast, and screen-reader smoke testing. Automated Lighthouse accessibility
  is 100 and reduced-motion rendering passed; physical screen-reader and complete
  keyboard testing remain external checks.
- [ ] Perform final browser and production QA: Chrome, Firefox, Safari, mobile
  browsers, all internal routes and outbound links, 404 behavior, embeds,
  Gumroad destinations, form delivery, metadata previews, sitemap/robots, and
  performance checks.
- [ ] Produce a clean release commit/tag and staging deploy for JT's approval;
  publish only after the owner checklist's blocking inputs are complete.

### Audit Evidence

- [x] `npm run build` passed on 2026-11-11 and generated 18 pages.
- [x] Git worktree was clean; branch `main` matched `origin/main` at commit
  `35060f0`.
- [x] `git diff --check` passed.
- [x] Desktop home and mobile music-page screenshots were reviewed.
- [x] Generated output measured 60 MB; the largest file was the 32 MB MOV.
- [x] `npm audit --omit=dev` identified the release-blocking dependency findings.
- [x] `astro check` was attempted and confirmed the missing check dependencies.
- [x] Astro 7 verification now passes with zero diagnostics, 11 intentionally
  published pages, and no broken generated internal links.
- [x] Production dependency audit now reports zero vulnerabilities.
- [x] Generated output now measures 1.9 MB.
- [x] A domain-configured build generated correct canonical, Open Graph,
  `robots.txt`, sitemap-index, and sitemap page URLs.
- [x] Lighthouse on the local production preview scored Performance 82,
  Accessibility 100, Best Practices 100, and SEO 100, with CLS 0 and TBT 0 ms.

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
- [x] Render work images on detail pages and use them for project thumbnails.
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
- [x] Preserve and test reduced-motion behavior.

## 4. Improve Performance and Clean Assets

- [x] Resize oversized photographs and create modern image variants.
- [x] Retain only webfonts used by the deployed site in `public/`.
- [x] Preserve required font licences.
- [x] Move confirmed-unused public ZIPs, font sources, and starter assets out of the deployed tree.
- [x] Preserve the active YouTube section and remove dormant featured-audio code.
- [x] Rebuild and compare the final site size with the baseline.

## 5. Complete the Professional Site Shell

- [x] Add a branded 404 page.
- [x] Improve the footer structure for professional and contact links.
- [x] Publish the confirmed email in the footer and as the lesson-form fallback.
- [x] Distinguish listening, score purchase, contact, and lesson actions.

## 6. Add Metadata and Discovery Support

- [x] Add favicon links and improve page titles and descriptions.
- [x] Add Open Graph and Twitter/X card metadata.
- [x] Add a reusable social-sharing image fallback.
- [x] Add `robots.txt` and sitemap generation. Sitemap output activates when the
  deployment provides `SITE_URL`.
- [x] Add suitable Person and MusicComposition structured data. Article data will
  be added when the first article is approved.
- [x] Configure canonical URL generation from the deployment's `SITE_URL`. The
  final domain value still awaits JT's decision.

## 7. Improve Content Handling

- [x] Store machine-readable ISO news dates.
- [x] Render descriptions, media, images, and purchase links consistently.
- [x] Hide absent optional content and prevent draft records from generating
  public routes.
- [x] Keep the TypeScript data files as the editable sources of truth.

## 8. Finish Repository Hygiene

- [x] Replace the Astro starter README with project-specific instructions.
- [x] Document plain CSS and browser JavaScript in `AGENTS.md`.
- [x] Populate the design and content documentation.
- [x] Add an Astro type/check command.
- [x] Add lightweight CI for checks and the production build.
- [x] Run dependency, link, route, and markup checks where practical.

## 9. Verify the Result

- [x] Run Astro checking, the production build, and `git diff --check`.
- [x] Smoke-test every generated route and internal link.
- [ ] Review keyboard navigation, focus visibility, and reduced motion. Focus and
  reduced-motion implementations passed code/visual review; a complete manual
  keyboard route remains for deployed staging.
- [x] Test representative mobile, tablet, laptop, and desktop widths.
- [x] Compare generated-site size before and after optimization (60 MB to 1.9 MB).
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
- 2026-11-11: Started the autonomous prelaunch pass on `prelaunch-staging`.
  Upgraded Astro 5 to Astro 7 and Node 20 to Node 24 LTS; added type checking,
  CI, generated-link validation, runtime documentation, and a zero-vulnerability
  production audit. Draft and rights-pending music routes are no longer
  generated, the incorrect Carceri Gumroad link is disabled, and unsafe slugs
  are normalized.
- 2026-11-11: Removed the misleading newsletter form pending selection of a real
  mailing-list provider, added a FormSubmit disclosure to the lesson form,
  implemented conditional canonical/social/structured metadata, added
  `robots.txt`, populated design/content documentation, fixed desktop horizontal
  overflow, and reduced the generated release from 60 MB to 1.9 MB.
- 2026-11-11: Replaced eager YouTube, Instagram, and TikTok embeds with
  click-to-load local previews. Lighthouse improved from 96 to 100 for
  accessibility and from 77 to 100 for best practices; the toolbar-free local
  audit also scored 100 for SEO. All four published Gumroad products and the
  three public social destinations returned HTTP 200.
- 2026-11-11: Completed responsive visual review of Home, Music, Lessons, About,
  a long-title work page, and the image-heavy Declaration page. The local
  production Lighthouse audit scored 82 performance, 100 accessibility, 100
  best practices, and 100 SEO, with zero layout shift and zero total blocking
  time in the final run. Converted CSS hero backgrounds to preloadable HTML
  images and shortened non-essential reveal transitions.
- 2026-11-11: Completed the local staging build. Astro 7/Node 24 checks, internal
  links, production audit, conditional canonical/sitemap output, reduced-motion
  rendering, responsive visual QA, and Lighthouse all passed. Remaining launch
  work requires the final domain/host and owner/external approvals listed above.
