import { access, cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const outputRoot = resolve(projectRoot, "dist");

const pages = [
  "index.html",
  "404.html",
  "case-study-cicd.html",
  "case-study-mcp.html",
  "case-study-cloud.html",
  "projects.html",
  "experience.html",
  "techstack.html",
  "education.html",
];

const requiredAssets = [
  "assets/css/portfolio.css",
  "assets/css/case-study.css",
  "assets/js/portfolio.js",
  "assets/docs/Rahul_Kumar_Resume_JPMC.pdf",
  "assets/images/favicon-rahul.png",
  "assets/images/portfolio/rahul-kumar.jpg",
  "assets/images/portfolio/rahul-kumar-illustrated.png",
  "assets/images/portfolio/social-preview.png",
];

await Promise.all(
  [...pages, ...requiredAssets].map((file) => access(resolve(projectRoot, file))),
);

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

await Promise.all([
  ...pages.map((page) => cp(resolve(projectRoot, page), resolve(outputRoot, page))),
  cp(resolve(projectRoot, "assets"), resolve(outputRoot, "assets"), { recursive: true }),
]);

await writeFile(resolve(outputRoot, ".nojekyll"), "");

console.log(`Static portfolio built in ${outputRoot}`);
