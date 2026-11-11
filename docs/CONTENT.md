# Content Guide

## Public Identity and Voice

- Use **JT Baker** as the professional name. Conversational first-person copy
  may use **JT**.
- Describe JT as a composer, percussionist, snare drummer, and teacher only
  where the page context supports those roles.
- Keep the voice direct and personal without sacrificing clear grammar,
  attribution, or factual precision.

## Music Records

`src/data/music.ts` is the source of truth. A work may use `published: true`
only when all public claims are reviewed and the page has:

- a final title, year, category, and instrumentation;
- an approved program note without placeholder language;
- confirmed composer/arranger attribution;
- confirmed permission to publish any arrangement or copyrighted media;
- a correct Gumroad URL, or an intentional unavailable-score message;
- accurate alt text and credits for every public image;
- media embeds only when the linked recording is approved.

Drafts remain in the data file with `published: false`. Draft assets belong in
`source-assets/`, not `public/`.

## News Records

`src/data/news.ts` stores drafts. Set `published: true` only after the title,
excerpt, ISO date, display date, body, links, and media are approved. The news
index remains a coming-soon page while no posts are published.

## Editorial Checks

- Use sentence case for prose and preserve official work/organization names.
- Expand uncommon abbreviations on first use.
- Format instrumentation consistently.
- Verify time-sensitive roles, tours, locations, education, and availability
  before every release.
- Never publish placeholder phrases such as “Program note coming soon.”
- Test every purchase, social, media, and contact destination before launch.

## Forms and Personal Data

The lesson form currently sends through FormSubmit to JT's public email. Keep
the disclosure and required acknowledgement visible. Do not add newsletter
collection until JT chooses a provider with subscriber management and an
unsubscribe workflow.
