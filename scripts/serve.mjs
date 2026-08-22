import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const argumentsList = process.argv.slice(2);

function readOption(name, fallback) {
  const optionIndex = argumentsList.indexOf(name);
  return optionIndex >= 0 && argumentsList[optionIndex + 1]
    ? argumentsList[optionIndex + 1]
    : fallback;
}

const host = readOption("--host", process.env.HOST || "127.0.0.1");
const port = Number(readOption("--port", process.env.PORT || "4173"));
const siteRoot = resolve(process.cwd(), "dist");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

function getRelativePath(requestUrl) {
  const requestPath = decodeURIComponent(new URL(requestUrl, "http://localhost").pathname);
  const basePath = "/personal-portfolio";
  const strippedPath = requestPath === basePath
    ? "/"
    : requestPath.startsWith(`${basePath}/`)
      ? requestPath.slice(basePath.length)
      : requestPath;

  return strippedPath === "/" ? "index.html" : strippedPath.replace(/^\/+/, "");
}

async function resolveFile(requestUrl) {
  const relativePath = getRelativePath(requestUrl);
  let filePath = resolve(siteRoot, relativePath);

  if (filePath !== siteRoot && !filePath.startsWith(`${siteRoot}${sep}`)) {
    throw new Error("Invalid path");
  }

  try {
    const fileStats = await stat(filePath);
    if (fileStats.isDirectory()) {
      filePath = resolve(filePath, "index.html");
      return { filePath, fileStats: await stat(filePath), statusCode: 200 };
    }
    return { filePath, fileStats, statusCode: 200 };
  } catch {
    const fallbackPath = resolve(siteRoot, "404.html");
    return { filePath: fallbackPath, fileStats: await stat(fallbackPath), statusCode: 404 };
  }
}

const server = createServer(async (request, response) => {
  if (!request.url || !["GET", "HEAD"].includes(request.method || "")) {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  try {
    const { filePath, fileStats, statusCode } = await resolveFile(request.url);
    response.writeHead(statusCode, {
      "Cache-Control": "no-store",
      "Content-Length": fileStats.size,
      "Content-Type": contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Bad Request");
  }
});

server.listen(port, host, () => {
  console.log(`Local: http://${host}:${port}/`);
});

process.on("SIGINT", () => server.close(() => process.exit(0)));
process.on("SIGTERM", () => server.close(() => process.exit(0)));
