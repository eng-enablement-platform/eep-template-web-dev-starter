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

No build step — all you need is VS Code and its dev server.

1. Open VS Code and install the **Live Server** extension (by Ritwick Dey).
2. Clone this repo and open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.

The JavaScript uses ES modules, which browsers only load over HTTP (not `file://`),
so Live Server does the serving for you. It opens the page in your browser and
reloads automatically whenever you save — edit the files and watch it update.

That's the whole point: get VS Code, clone the repo, spin up the dev server, and
explore, learn and prototype as much as you like.

## What it demonstrates

- **Mobile-first CSS** — base styles target small screens; `min-width` media queries enhance larger viewports.
- **Responsive grid** — cards use `auto-fit` + `minmax()` and reflow with no breakpoints.
- **Modern JavaScript** — an ES module with JSDoc and accessible `aria-expanded` state.
- **Semantic, accessible markup** — landmarks, focus styles, and `prefers-reduced-motion` support.
