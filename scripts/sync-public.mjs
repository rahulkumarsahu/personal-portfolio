import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const publicRoot = resolve(root, "public");
const publicAssets = resolve(publicRoot, "assets");

await rm(publicAssets, { recursive: true, force: true });
await mkdir(resolve(publicAssets, "css"), { recursive: true });
await mkdir(resolve(publicAssets, "js"), { recursive: true });
await mkdir(resolve(publicAssets, "docs"), { recursive: true });
await mkdir(resolve(publicAssets, "images", "portfolio"), { recursive: true });

await Promise.all([
  cp(resolve(root, "assets", "css", "portfolio.css"), resolve(publicAssets, "css", "portfolio.css")),
  cp(resolve(root, "assets", "css", "case-study.css"), resolve(publicAssets, "css", "case-study.css")),
  cp(resolve(root, "assets", "js", "portfolio.js"), resolve(publicAssets, "js", "portfolio.js")),
  cp(resolve(root, "assets", "docs", "Rahul_Kumar_Resume_JPMC.pdf"), resolve(publicAssets, "docs", "Rahul_Kumar_Resume_JPMC.pdf")),
  cp(resolve(root, "assets", "images", "favicon-rahul.png"), resolve(publicAssets, "images", "favicon-rahul.png")),
  cp(resolve(root, "assets", "images", "portfolio", "rahul-kumar.jpg"), resolve(publicAssets, "images", "portfolio", "rahul-kumar.jpg")),
  cp(resolve(root, "assets", "images", "portfolio", "rahul-kumar-illustrated.png"), resolve(publicAssets, "images", "portfolio", "rahul-kumar-illustrated.png"))
]);

const staticPages = [
  "index.html",
  "404.html",
  "case-study-cicd.html",
  "case-study-mcp.html",
  "case-study-cloud.html",
  "projects.html",
  "experience.html",
  "techstack.html",
  "education.html"
];

await Promise.all(
  staticPages.map((page) => cp(resolve(root, page), resolve(publicRoot, page)))
);
