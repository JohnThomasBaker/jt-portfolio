  ## Execution plan

  ### 1. Establish a safe baseline

  - Review the five existing modified files so I preserve your current work.
  - Run the current production build and record the generated size.
  - Check which assets and styles are actually referenced before removing anything.

  ### 2. Make Music the complete catalogue and sales path

  - Remove the unused Store constant and navigation entry.
  - Keep Gumroad URLs in src/data/music.ts.
  - Show a clear “Buy score on Gumroad” action on each eligible work page.
  - Indicate score availability on catalogue cards where useful.
  - For works without a Gumroad URL, omit the purchase button or say “Score not currently available.”
  - Remove claims that every score or format is available.
  - Hide empty Arrangements and Misc filters until records exist.
  - Render each work’s image on its detail page and use it for catalogue/home thumbnails.
  - Correct filtering so the entire hidden link is removed from keyboard and accessibility navigation.
  - Normalize instrumentation and terminology.

  No cart, local checkout, Store route, or jtsounds.com navigation will be added.

  ### 3. Fix navigation and accessibility

  - Add a skip link.
  - Add visible keyboard focus throughout the site.
  - Mark the current navigation item with aria-current.
  - Convert the music filters to ordinary accessible buttons.
  - Convert the portrait interaction to a native button.
  - Correct the home-page heading hierarchy.
  - Improve form focus treatment.
  - remove the global horizontal-wheel interception unless it has a necessary, demonstrable purpose.
  - Add explicit image dimensions or aspect ratios to reduce layout movement.
  - Preserve the site’s reduced-motion behavior.

  ### 4. Improve performance and clean assets

  - Resize and convert the oversized lesson and portfolio images to WebP.
  - Generate appropriately sized versions instead of serving multi-megabyte originals.
  - Retain only the webfonts actually used by the site in public/.
  - Preserve required font licences.
  - Remove public ZIPs, font-development sources, starter assets, and confirmed-unused files.
  - Remove dead YouTube and featured-audio code.
  - Rebuild and compare dist size before and after.

  I’ll verify references first so active images or fonts are not accidentally removed.

  ### 5. Complete the professional site shell

  - Add a branded 404 page.
  - Improve the footer structure so it can accommodate contact and professional links later.
  - Create a general contact path only after an address is available; I will not invent or expose one.
  - Structure calls to action around:
      - Listen/watch
      - Buy score
      - Performance or licensing inquiry
      - Lessons

  ### 6. Add metadata and discovery support

  - Add favicon links.
  - Improve titles and descriptions using “JT Baker” unless you later choose a different public name.
  - Add Open Graph and Twitter-card metadata.
  - Add a reusable social-sharing image fallback.
  - Add robots.txt.
  - Add sitemap support.
  - Add appropriate Person, MusicComposition, and Article structured data.
  - Configure canonical URLs once the production portfolio domain can be verified.

  ### 7. Improve the content model without inventing content

  - Add machine-readable ISO news dates.
  - Make music media, images, descriptions, and purchase links render consistently.
  - Ensure missing optional content disappears cleanly instead of showing placeholders.
  - Keep the existing TypeScript data files as the editable source of truth.
  - Do not fabricate program notes, biography facts, recordings, news, credentials, or product links.

  ### 8. Finish repository hygiene

  - Replace the Astro starter README with project-specific setup and editing instructions.
  - Correct the AGENTS.md Tech section to say plain CSS and browser JavaScript.
  - Document the resulting design and content conventions.
  - Add astro check.
  - Add a lightweight CI workflow that runs checking and the production build.
  - Run dependency, link, route, and markup checks where practical.

  ### 9. Verification

  I’ll finish with:

  - astro check
  - Production build
  - git diff --check
  - Route smoke tests
  - Keyboard-navigation review
  - Reduced-motion review
  - Responsive browser checks
  - Broken internal-link check
  - Generated-site size comparison
  - Review of every changed file
