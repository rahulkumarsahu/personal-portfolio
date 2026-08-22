# Rahul Kumar — Portfolio

A modern portfolio for Rahul Kumar, Senior Backend Engineer (SDE3), focused on distributed systems, cloud platforms, CI/CD, and AI-assisted developer tooling.

The site is intentionally built with plain HTML, CSS, and JavaScript. Node.js is used only for the dependency-free local server and production build, keeping self-hosting portable and maintenance-light.

## Experience

- One-page professional narrative with selected work, experience, expertise, recognition, writing, and contact
- Three in-depth engineering case studies
- Responsive navigation and layouts for desktop, tablet, and mobile
- Subtle scroll, hover, and system-status animation with reduced-motion support
- Production metadata, social preview, résumé, and legacy-page redirects

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
