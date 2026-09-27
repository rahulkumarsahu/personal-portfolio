import { access, cp, mkdir, rm } from "node:fs/promises";
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
  "robots.txt",
  "sitemap.xml",
];

const requiredAssets = [
  "assets/css/portfolio.css",
  "assets/css/case-study.css",
  "assets/js/portfolio.js",
  "assets/docs/Rahul_Kumar_Resume_JPMC.pdf",
  "assets/images/favicon-rahul.png",
  "assets/images/portfolio/rahul-kumar.jpg",
  "assets/images/portfolio/rahul-kumar-illustrated.png",
  "assets/images/portfolio/rahul-kumar-640.avif",
  "assets/images/portfolio/rahul-kumar-640.webp",
  "assets/images/portfolio/rahul-kumar-1280.avif",
  "assets/images/portfolio/rahul-kumar-1280.webp",
  "assets/images/portfolio/rahul-kumar-illustrated.avif",
  "assets/images/portfolio/rahul-kumar-illustrated.webp",
  "assets/images/portfolio/social-preview.jpg",
  "assets/images/portfolio/case-study-cicd-social.jpg",
  "assets/images/portfolio/case-study-mcp-social.jpg",
  "assets/images/portfolio/case-study-cloud-social.jpg",
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

console.log(`Static portfolio built in ${outputRoot}`);
