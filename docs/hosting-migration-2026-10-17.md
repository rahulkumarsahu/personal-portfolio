# Portfolio hosting migration — 17 October 2026

Production: https://rahulkumarsahu.github.io/personal-portfolio/

The owner authorized making only `rahulkumarsahu/personal-portfolio` public so
the site can use GitHub Pages on the free plan. The System Design Atlas repository
remains private and its website remains on Vercel.

## Deployment

- Site revision: `a1f618f279575879664dac3f4f2750ca48fc38a5`.
- Successful build and Pages deployment:
  https://github.com/rahulkumarsahu/personal-portfolio/actions/runs/39043651048.
- `.github/workflows/pages.yml` builds on relevant pushes to `main` and supports
  manual dispatch. Documentation-only pushes do not rebuild the unchanged site.
- The Node.js 24 build runs the existing quality checks and publishes only
  `dist/`. The static output is approximately 3.3 MiB. Uploaded deployment
  artifacts have a one-day retention period; unnecessary dependency caches are
  disabled. This describes the artifact, not a measured billing reduction.
- Official Actions are pinned to release commits. Deployment uses Pages/OIDC
  permissions; no personal deployment token or additional hosting account is used.
- Page content, styles, illustrations and résumé were preserved. Canonical,
  structured-data, social-image, sitemap and robots URLs use the new base path.
  Legacy HTML URLs still redirect to their corresponding homepage sections.
- The custom 404 has a `/personal-portfolio/` base so nested missing URLs can load
  styles and return to the portfolio correctly.

## Verification

- `npm ci --ignore-scripts` and `npm run check` passed: nine HTML pages, 71 local
  references, SEO metadata, accessibility basics and existing performance budgets.
- `npm run verify:deployment` passed against the public site: nine HTML pages and
  12 referenced supporting files matched the local build by SHA-256, including
  stylesheet/script/image/résumé delivery, plus a nested HTTP 404 recovery page.
- Local and production browser runs each passed 18 route checks at 390px and
  1440px: content pages, decoded images, four legacy redirects, nested custom 404,
  mobile menu Escape/focus return, no page overflow, no page errors and no failed
  local resources. Reports: `hosting-local-browser.json` and
  `hosting-production-browser.json`. Screenshots are local review artifacts and
  are not included in the published site or repository.
- These checks establish build and delivery behavior, not production field
  performance or a guarantee about future quota usage.

## Vercel retirement

- Disconnected automatic deployments for the portfolio before pushing the
  migration, preserving its old deployment until the new site was verified.
- Then removed only `rahul-kumar-portfolio`, project
  `prj_dRKn88oiM2kZWKA9qv5VrF6zl9Vm`, including its deployments and hosting settings.
- Verified the old `https://rahul-kumar-portfolio-flax.vercel.app/` returns 404.
  The old Vercel URL no longer redirects; use the new GitHub Pages address.
- Verified Vercel now lists only `system-design-atlas` and the blog still returns
  HTTP 200. Its private repository visibility was not changed.
- Source code remains on GitHub and can be redeployed if needed. Obsolete local
  Vercel link metadata was moved into a temporary backup, rather than deleted.
  Local environment files and the original uncommitted portrait files were left
  untouched and were not published by this migration.

The owner separately approved updating the blog's shared portfolio link to the
new URL; its publishing remains independent from this portfolio workflow.
