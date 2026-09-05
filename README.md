# Rahul Kumar — Portfolio

A modern portfolio for Rahul Kumar, Senior Backend Engineer (SDE3), focused on distributed systems, cloud platforms, CI/CD, and AI-assisted developer tooling.

The site is intentionally built with plain HTML, CSS, and JavaScript. Node.js is used only for the dependency-free local server and production build, keeping self-hosting portable and maintenance-light.

## Experience

- One-page professional narrative with selected work, experience, expertise, recognition, writing, and contact
- Three in-depth engineering case studies
- Responsive navigation and layouts for desktop, tablet, and mobile
- Subtle scroll, hover, and system-status animation with reduced-motion support
- Responsive AVIF/WebP portraits with safe image fallbacks
- Search metadata, ProfilePage and TechArticle structured data, sitemap, and robots policy
- Unique 1200×630 social cards for the homepage and every case study
- Automated link, metadata, accessibility-basics, and performance-budget checks
- Résumé and legacy-page redirects

## Local development

```sh
nvm use
npm ci
npm run dev
```

Open `http://localhost:4173/`.

Create the production artifact with:

```sh
npm run build
```

The deployable static site is written to `dist/`. GitHub Pages deployment runs through `.github/workflows/pages.yml` on Node.js 24.

Run the same production quality gate used by pull requests and deployment:

```sh
npm run check
```
