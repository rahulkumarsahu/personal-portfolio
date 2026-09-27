import { readFile, stat } from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";

const projectRoot = process.cwd();
const siteRoot = resolve(projectRoot, "dist");
const siteUrl = "https://rahul-kumar-portfolio-flax.vercel.app/";
const basePath = "/";

const contentPages = [
  "index.html",
  "case-study-cicd.html",
  "case-study-mcp.html",
  "case-study-cloud.html",
];

const redirectPages = [
  "projects.html",
  "experience.html",
  "techstack.html",
  "education.html",
];

const htmlPages = [...contentPages, ...redirectPages, "404.html"];
const errors = [];
let checkedReferences = 0;

function check(condition, message) {
  if (!condition) errors.push(message);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasMeta(html, key, value) {
  const tagPattern = new RegExp(`<meta\\b[^>]*(?:name|property)=["']${escapeRegExp(key)}["'][^>]*>`, "i");
  const tag = html.match(tagPattern)?.[0] || "";
  return value ? new RegExp(`content=["']${escapeRegExp(value)}["']`, "i").test(tag) : /content=["'][^"']+["']/i.test(tag);
}

function idsIn(html) {
  return [...html.matchAll(/\sid=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function localReference(value, currentPage) {
  const [pathWithQuery, hash = ""] = value.split("#", 2);
  let pathname = pathWithQuery.split("?", 1)[0];

  if (!pathname) return { outputPath: resolve(siteRoot, currentPage), hash };
  if (pathname.startsWith(basePath)) pathname = pathname.slice(basePath.length);
  else if (pathname.startsWith("/")) pathname = pathname.slice(1);

  const outputPath = resolve(dirname(resolve(siteRoot, currentPage)), decodeURIComponent(pathname));
  return { outputPath, hash };
}

async function fileExists(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

const htmlByPage = new Map(
  await Promise.all(
    htmlPages.map(async (page) => [page, await readFile(resolve(siteRoot, page), "utf8")]),
  ),
);

for (const [page, html] of htmlByPage) {
  check(/^<!doctype html>/i.test(html.trimStart()), `${page}: missing HTML doctype`);
  check(/<html\b[^>]*\blang=["']en["']/i.test(html), `${page}: missing English language declaration`);
  check(/<meta\b[^>]*charset=/i.test(html), `${page}: missing charset`);
  check(hasMeta(html, "viewport"), `${page}: missing viewport metadata`);
  check((html.match(/<title\b/gi) || []).length === 1, `${page}: expected exactly one title`);

  const pageIds = idsIn(html);
  check(new Set(pageIds).size === pageIds.length, `${page}: contains duplicate element IDs`);

  for (const tag of html.match(/<a\b[^>]*target=["']_blank["'][^>]*>/gi) || []) {
    check(/rel=["'][^"']*(?:noopener|noreferrer)[^"']*["']/i.test(tag), `${page}: external new-tab link is missing a safe rel attribute`);
  }

  for (const tag of html.match(/<img\b[^>]*>/gi) || []) {
    check(/\balt=["'][^"']*["']/i.test(tag), `${page}: image is missing alt text`);
    check(/\bwidth=["']\d+["']/i.test(tag), `${page}: image is missing an intrinsic width`);
    check(/\bheight=["']\d+["']/i.test(tag), `${page}: image is missing an intrinsic height`);
  }

  const rawReferences = [
    ...[...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]),
    ...[...html.matchAll(/\bsrcset=["']([^"']+)["']/gi)].flatMap((match) =>
      match[1].split(",").map((entry) => entry.trim().split(/\s+/, 1)[0]),
    ),
  ];

  for (const reference of rawReferences) {
    if (!reference || /^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(reference)) continue;

    checkedReferences += 1;
    const { outputPath, hash } = localReference(reference, page);
    check(outputPath === siteRoot || outputPath.startsWith(`${siteRoot}${sep}`), `${page}: unsafe local path ${reference}`);
    check(await fileExists(outputPath), `${page}: broken local reference ${reference}`);

    if (hash && outputPath.endsWith(".html") && await fileExists(outputPath)) {
      const targetPage = relative(siteRoot, outputPath);
      const targetHtml = htmlByPage.get(targetPage) || await readFile(outputPath, "utf8");
      check(idsIn(targetHtml).includes(decodeURIComponent(hash)), `${page}: missing anchor target ${reference}`);
    }
  }
}

for (const page of contentPages) {
  const html = htmlByPage.get(page);
  check((html.match(/<h1\b/gi) || []).length === 1, `${page}: expected exactly one h1`);
  check(hasMeta(html, "description"), `${page}: missing meta description`);
  check(hasMeta(html, "robots", "index, follow, max-image-preview:large"), `${page}: missing indexable robots metadata`);
  check(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']https:\/\//i.test(html), `${page}: missing HTTPS canonical URL`);
  check(hasMeta(html, "og:title"), `${page}: missing Open Graph title`);
  check(hasMeta(html, "og:description"), `${page}: missing Open Graph description`);
  check(hasMeta(html, "og:url"), `${page}: missing Open Graph URL`);
  check(hasMeta(html, "og:image"), `${page}: missing Open Graph image`);
  check(hasMeta(html, "og:image:width", "1200"), `${page}: Open Graph image width must be 1200`);
  check(hasMeta(html, "og:image:height", "630"), `${page}: Open Graph image height must be 630`);
  check(hasMeta(html, "og:image:alt"), `${page}: missing Open Graph image alt text`);
  check(hasMeta(html, "twitter:card", "summary_large_image"), `${page}: Twitter card must use the large image format`);
  check(hasMeta(html, "twitter:image"), `${page}: missing Twitter image`);
  check(/<a\b[^>]*class=["'][^"']*skip-link/i.test(html), `${page}: missing skip-to-content link`);

  const structuredData = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  check(structuredData.length > 0, `${page}: missing JSON-LD structured data`);
  for (const block of structuredData) {
    try {
      JSON.parse(block[1]);
    } catch (error) {
      errors.push(`${page}: invalid JSON-LD (${error.message})`);
    }
  }
}

for (const page of redirectPages) {
  check(hasMeta(htmlByPage.get(page), "robots", "noindex, follow"), `${page}: legacy redirect must be noindex, follow`);
}

check(hasMeta(htmlByPage.get("404.html"), "robots", "noindex"), "404.html: missing noindex metadata");

const sitemap = await readFile(resolve(siteRoot, "sitemap.xml"), "utf8");
for (const page of contentPages) {
  const url = page === "index.html" ? siteUrl : `${siteUrl}${page}`;
  check(sitemap.includes(`<loc>${url}</loc>`), `sitemap.xml: missing ${url}`);
}

const robots = await readFile(resolve(siteRoot, "robots.txt"), "utf8");
check(robots.includes(`Sitemap: ${siteUrl}sitemap.xml`), "robots.txt: missing absolute sitemap URL");

const sizeBudgets = {
  "assets/css/portfolio.css": 100_000,
  "assets/js/portfolio.js": 50_000,
  "assets/images/portfolio/rahul-kumar-1280.avif": 250_000,
  "assets/images/portfolio/rahul-kumar-1280.webp": 350_000,
  "assets/images/portfolio/rahul-kumar-illustrated.avif": 100_000,
  "assets/images/portfolio/rahul-kumar-illustrated.webp": 100_000,
  "assets/images/portfolio/social-preview.jpg": 200_000,
  "assets/images/portfolio/case-study-cicd-social.jpg": 200_000,
  "assets/images/portfolio/case-study-mcp-social.jpg": 200_000,
  "assets/images/portfolio/case-study-cloud-social.jpg": 200_000,
};

for (const [file, budget] of Object.entries(sizeBudgets)) {
  const size = (await stat(resolve(siteRoot, file))).size;
  check(size <= budget, `${file}: ${size} bytes exceeds the ${budget}-byte performance budget`);
}

check(!htmlByPage.get("index.html").includes("social-preview.png"), "index.html: references the retired PNG social preview");
check(htmlByPage.get("index.html").includes("image/avif"), "index.html: missing AVIF responsive images");
check(htmlByPage.get("index.html").includes("image/webp"), "index.html: missing WebP responsive images");

if (errors.length) {
  console.error(`Quality checks failed with ${errors.length} issue${errors.length === 1 ? "" : "s"}:`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Quality checks passed: ${htmlPages.length} HTML pages, ${checkedReferences} local references, SEO metadata, accessibility basics, and performance budgets.`);
}
