import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const base = new URL(process.argv[2] || "https://rahulkumarsahu.github.io/personal-portfolio/");
assert(base.pathname.endsWith("/"), "The deployment base must end in a slash.");
const pages = ["index.html", "case-study-cicd.html", "case-study-mcp.html", "case-study-cloud.html", "projects.html", "experience.html", "education.html", "techstack.html", "404.html"];
const resources = new Map();
const digest = bytes => createHash("sha256").update(bytes).digest("hex");

async function verifyFile(path) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  const expected = await readFile(new URL(`../dist/${path}`, import.meta.url));
  const actual = Buffer.from(await response.arrayBuffer());
  assert.equal(digest(actual), digest(expected), `${path}: does not match this built revision`);
  return actual.toString("utf8");
}

for (const page of pages) {
  const html = await verifyFile(page);
  const references = [
    ...[...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map(match => match[1]),
    ...[...html.matchAll(/\bsrcset=["']([^"']+)["']/gi)].flatMap(match => match[1].split(",").map(item => item.trim().split(/\s+/)[0])),
  ];
  for (const reference of references) {
    const url = new URL(reference, new URL(page, base));
    if (url.origin !== base.origin || !url.pathname.startsWith(base.pathname)) continue;
    let path = decodeURIComponent(url.pathname.slice(base.pathname.length));
    if (!path || path.endsWith("/")) path += "index.html";
    if (!pages.includes(path)) resources.set(path, true);
  }
}
resources.set("sitemap.xml", true);
resources.set("robots.txt", true);
for (const path of resources.keys()) await verifyFile(path);

const missing = await fetch(new URL("missing/nested-page/", base), { signal: AbortSignal.timeout(30000) });
assert.equal(missing.status, 404, "A missing route must return HTTP 404");
const errorPage = await missing.text();
assert(errorPage.includes('<base href="/personal-portfolio/"'), "404 must resolve assets from the portfolio root");
assert(errorPage.includes('href="index.html"'), "404 must provide a working return link");

console.log(`Verified ${pages.length} HTML pages, ${resources.size} supporting files, exact build hashes, and a nested custom 404 on ${base.href}`);
