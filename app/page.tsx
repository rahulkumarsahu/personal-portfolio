import homepageHtml from "../index.html?raw";

function extractBody(html: string) {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!match) throw new Error("Portfolio body could not be extracted");
  return match[1].replace(/<script[\s\S]*?<\/script>/gi, "");
}

const portfolioBody = extractBody(homepageHtml);

export default function HomePage() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: portfolioBody }} />
      <script type="module" src="/assets/js/portfolio.js"></script>
    </>
  );
}
