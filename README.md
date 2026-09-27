# Rahul Kumar — Portfolio

A modern portfolio for Rahul Kumar, Senior Backend Engineer (SDE3), focused on distributed systems, cloud platforms, CI/CD, and AI-assisted developer tooling.

The site is intentionally built with plain HTML, CSS, and JavaScript. Node.js is used only for the dependency-free local server and production build, keeping self-hosting portable and maintenance-light.

## Experience

- One-page professional narrative with selected work, experience, expertise, recognition, writing, and contact
- Three in-depth engineering case studies
- Responsive navigation and layouts for desktop, tablet, and mobile
- Visible content, restrained hover feedback, and reduced-motion support
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

The deployable static site is written to `dist/`. Vercel builds and validates the site on Node.js 24 using `npm run check`, then serves `dist/`. GitHub Actions workflows have been removed.

Run the production quality gate before deployment:

```sh
npm run check
```

## Deploy

Production: https://rahul-kumar-portfolio.vercel.app/

```sh
vercel deploy --prod --scope kcoding-geek
```

The portfolio links to The System Design Atlas, and the blog links back to this portfolio.
Keep credentials and generated Vercel files out of Git.

### Design verification

Impeccable guided the refinement of the existing dark-and-lime visual system.
The portrait, résumé, experience, recognition, and case-study content are retained.
Desktop and mobile navigation, section jumps, and case-study layouts were checked in the browser.
The detector's container-padding warnings on full-bleed imagery, section bands, and
already-padded child cards are intentional structural exceptions, not text against a boundary.
Existing professional claims were preserved rather than rewritten to satisfy keyword heuristics.
