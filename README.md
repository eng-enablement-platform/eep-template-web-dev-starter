# eep-template-web-dev-starter

A simple, mobile-first HTML, CSS and JavaScript scaffold for learning and quick prototyping.
Part of the Engineering Enablement Platform (EEP) template set — no build step, no framework, just clean modern foundations.

## Structure

```
index.html          Semantic HTML5 markup
css/
  styles.css        Mobile-first styles: custom properties, Grid, clamp()
js/
  menu.js           Hamburger menu — ES module, JSDoc documented
public/
  eep-logo-full.svg Hero logo (wordmark + full name)
  eep-logo-nav.svg  Compact nav/favicon mark
```

HTML, CSS and JavaScript are kept in separate files — no single-file monolith.

## Running it

The JavaScript uses ES modules, which browsers only load over HTTP (not `file://`).
Serve the folder with any static server and open the printed URL:

```
python3 -m http.server 8000
```

Then visit http://localhost:8000 and edit the files — refresh to see changes.

## What it demonstrates

- **Mobile-first CSS** — base styles target small screens; `min-width` media queries enhance larger viewports.
- **Responsive grid** — cards use `auto-fit` + `minmax()` and reflow with no breakpoints.
- **Modern JavaScript** — an ES module with JSDoc and accessible `aria-expanded` state.
- **Semantic, accessible markup** — landmarks, focus styles, and `prefers-reduced-motion` support.
