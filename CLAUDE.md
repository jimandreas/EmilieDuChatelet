# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development server (live reload, drafts included)
hugo server -D

# Production build (outputs to public/)
hugo

# Build with verbose output for debugging
hugo --verbose

# New content
hugo new docs/fire/new-work/_index.md
```

Hugo v0.100.0+ is required. No npm/Node build step — CSS and JS are hand-authored vanilla files.

## Architecture

This is a **Hugo static site** with a hybrid content model:

- **Hugo Markdown** (`content/`) handles structural/narrative pages (home, section overviews). Hugo builds these through the `themes/minimal/` layouts.
- **Pre-built static HTML** (`static/fire/*.html`) holds the scholarly parallel readers. These are complex, hand-crafted bilingual editions that live outside Hugo's templating pipeline entirely. Hugo copies them unchanged into `public/`.

The separation is intentional: parallel readers need rich, custom markup that Hugo's Markdown-to-HTML pipeline can't express cleanly.

## Two-Tier Styling

**`themes/minimal/static/css/style.css`** — base Hugo theme. Minimal CSS for the site chrome (nav, typography, light/dark via `prefers-color-scheme`). Max-width 800px container.

**`static/css/chatelet.css`** — parallel reader theme. 23KB of bespoke parchment/vellum aesthetic using CSS Custom Properties. Google Fonts: Cormorant Garamond (display), IM Fell English (body). All color decisions must maintain WCAG AA contrast. Light mode uses warm parchment `#f9f5eb`; dark mode uses deep vellum `#1e1810`. The parallel two-column grid stacks to single-column below 900px.

## JavaScript

`static/js/chatelet.js` — single vanilla IIFE, no dependencies. Handles:
- Dark mode toggle with `localStorage` persistence + OS `prefers-color-scheme` detection
- View mode toggle (Parallel / English-only / French-only) stored in `localStorage`
- ToC active-section tracking via `IntersectionObserver`

This file is loaded only by the `static/fire/*.html` parallel readers, not by Hugo-generated pages.

## Parallel Reader HTML Structure

The `static/fire/chatelet.html` and `static/fire/voltaire.html` files share a consistent structure:
- Breadcrumb nav + dark-mode toggle button (injected by JS if absent)
- Sidebar ToC with `<a href="#section-id">` anchors
- Two-column grid: `.fr-col` (French original) and `.en-col` (English translation)
- Page markers linking to source scans on Gallica (BnF)
- View toggle buttons switching CSS classes on `<body>`

When editing these files directly (not via Hugo), use absolute paths for all internal links (`/css/chatelet.css`, `/js/chatelet.js`, not relative paths) because they're served from `public/fire/`.

## Content Model

- `content/_index.md` — home page biography and project introduction
- `content/docs/fire/_index.md` — overview of the 1738 fire prize competition and links to the parallel readers
- `static/fire/` — the actual bilingual editions (HTML, not Markdown)

All links between Hugo content and the static readers use absolute root-relative paths (e.g., `/fire/chatelet.html`).

## Deployment

Site deploys to GitHub Pages at `https://jimandreas.github.io/EmilieDuChatelet/`. The `baseURL` in `config/_default/hugo.toml` must match this path. The `public/` directory is the build artifact.
