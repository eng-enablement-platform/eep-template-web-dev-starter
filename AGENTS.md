# AGENTS instructions

Rules only. This is how we work - follow it.

## Philosophy

Simple prototyping project.

## Code Standards

- No build step, no framework - plain HTML, CSS and JavaScript.
- Mobile-first CSS: base styles target small screens, `min-width` media queries enhance upward.
- JavaScript is ES modules (`type="module"`), documented with JSDoc.
- Keep HTML, CSS and JS in their own files - no single-file monolith.
- Accessibility matters: keep ARIA state (e.g. `aria-expanded`) in sync with behaviour.

## Quick Reference

| Concern      | Location    | Convention                                        |
| ------------ | ----------- | ------------------------------------------------- |
| Markup       | `index.html`| Semantic HTML, accessible landmarks and ARIA      |
| Styles       | `css/`      | Mobile-first, single stylesheet, CSS Grid layouts |
| Scripts      | `js/`       | ES modules with JSDoc, one concern per file       |
| Static assets| `public/`   | SVG logos and icons referenced from HTML          |
