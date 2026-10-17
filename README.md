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

The deployable static site is written to `dist/`. GitHub Actions builds and
validates the site on Node.js 24 using `npm run check`, then publishes only
`dist/` to GitHub Pages. No hosting credentials or Vercel account are required.

Run the production quality gate before deployment:

```sh
npm run check
```

## Deploy

Production: https://rahulkumarsahu.github.io/personal-portfolio/

Push to `main` to deploy automatically, or run **Publish portfolio to GitHub
Pages** manually from the repository's Actions tab. The repository's Pages source
is **GitHub Actions**. Official actions are pinned to reviewed release commits;
the build has read-only repository access and the deployment uses a short-lived
GitHub identity rather than a personal access token. Uploaded Pages artifacts
are retained for one day.

The repository is public so GitHub Pages can host it on the free plan. Local
environment files and generated hosting settings remain ignored. Existing
relative links work under `/personal-portfolio/`, including the legacy-page
redirects. Metadata, social-image URLs and the sitemap use the new production URL.

Test the production base path locally at
`http://localhost:4173/personal-portfolio/`. The custom 404 uses an explicit base
path so its recovery link and styles also work for nested missing URLs.

After the Actions deployment succeeds, `npm run verify:deployment` checks the
live pages and referenced assets against the local build, including a nested
custom 404. Run `npm run check` first to build the exact revision being verified.

The portfolio links to The System Design Atlas, and the blog links back to this portfolio.
Keep credentials and generated hosting files out of Git. The System Design Atlas
blog continues to be hosted separately on Vercel.

### Design verification

Impeccable guided the refinement of the existing dark-and-lime visual system.
The portrait, résumé, experience, recognition, and case-study content are retained.
Desktop and mobile navigation, section jumps, and case-study layouts were checked in the browser.
The detector's container-padding warnings on full-bleed imagery, section bands, and
already-padded child cards are intentional structural exceptions, not text against a boundary.
Existing professional claims were preserved rather than rewritten to satisfy keyword heuristics.
