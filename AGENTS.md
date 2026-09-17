# JT Portfolio

## Purpose

This is JT Baker's personal portfolio website.

The primary purpose is to present JT's work as a composer and musician in a
clean, distinctive, professional way.

The site should prioritize:
1. Music and compositions
2. Clear information about individual works
3. Audio/video/media
4. JT's identity as a composer
5. Simple navigation and fast loading

## Tech

- Astro
- [add whatever CSS system you're using]
- [add any JS libraries]
- Static site unless there is a specific reason otherwise

## General Rules

- Preserve the existing visual language unless explicitly asked to redesign it.
- Prefer simple Astro/HTML/CSS solutions over adding dependencies.
- Reuse existing components before creating new ones.
- Do not duplicate styles unnecessarily.
- Do not change unrelated parts of the site when implementing a request.
- Keep components understandable enough that JT can edit them manually.
- Avoid unnecessary abstraction.
- Check existing architecture before creating a new component or pattern.

## Before Making Changes

1. Inspect the relevant existing files.
2. Determine whether an existing component/style already handles the problem.
3. Make the smallest coherent change.
4. Check for unintended effects elsewhere.
5. Run the appropriate build/check command.

## Documentation

See:
- `docs/ARCHITECTURE.md` for how the site is organized.
- `docs/DESIGN.md` for visual/design rules.
- `docs/CONTENT.md` for content structure and terminology.

## Plans, Rundowns, and Reports

When JT asks for a plan, rundown, report, audit, assessment, roadmap, or similar
project analysis:

1. Write the result as a clear itemized list.
2. Save it in the `PROJECTREPORTS/` directory.
3. Never save these documents in the project root or in a second reports folder.
4. Before creating a new document, inspect every numbered `.md` file already in
   `PROJECTREPORTS/`.
5. Choose one greater than the highest existing numeric prefix, even if an earlier
   number is missing.
6. Prefix the filename with that zero-padded three-digit number, for example
   `004-DESCRIPTIVE-REPORT-NAME.md`.
7. Use a concise, descriptive, uppercase filename after the number.
8. Never renumber an existing document or reuse an existing number.
9. If a relevant document already exists for the same initiative, update that
   document instead of creating a near-duplicate.
10. When updating an existing document, retain its original number and filename.
    Create a newly numbered document only for a genuinely distinct deliverable.
11. Tell JT the numbered filepath after saving or updating it.
12. Keep the document useful as an ongoing checklist by recording decisions,
   dependencies, verification steps, and completion status where appropriate.

## Keeping Documentation Current

When a change materially alters the architecture, content model, or an
established design convention, update the relevant document in `docs/`.

Do not update documentation for trivial implementation changes.

If the code and documentation disagree, investigate which represents
the current intended behavior rather than silently assuming either is correct.
