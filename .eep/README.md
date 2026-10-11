# {{projectName}}

> Bootstrapped with [create-eep](https://github.com/eng-enablement-platform/create-eep) from the [`{{templateName}}`](https://github.com/eng-enablement-platform/eep-template-web-dev-starter) template.

A mobile-first HTML, CSS and JavaScript project

## Quick start

1. Open this folder in [VS Code](https://code.visualstudio.com/) and install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Right-click `index.html` and choose **Open with Live Server**.

Edit `index.html`, `css/styles.css` or `js/` and the browser reloads automatically.

## Project structure

| Path         | What it holds                                           |
| ------------ | ------------------------------------------------------- |
| `index.html` | The page - semantic HTML with accessible landmarks      |
| `css/`       | Styles - mobile-first, CSS Grid layouts                 |
| `js/`        | ES modules, one concern per file, documented with JSDoc |
| `public/`    | Static assets (images, icons)                           |
| `AGENTS.md`  | Conventions for humans and AI agents working here       |

## Deploying to GitHub Pages

Every push to `main` deploys the site via [`.github/workflows/pages.yml`](.github/workflows/pages.yml).

One-time setup: once the project is on GitHub, go to **Settings -> Pages** and set **Source** to **GitHub Actions**.
