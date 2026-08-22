import type { Metadata } from "next";
import "../assets/css/portfolio.css";

const portfolioOrigin = "https://rahulkumarsahu.github.io/personal-portfolio/";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioOrigin),
  title: "Rahul Kumar — Senior Backend Engineer",
  description:
    "Rahul Kumar is a Senior Backend Engineer building resilient distributed systems, cloud platforms, and developer tooling.",
  alternates: { canonical: portfolioOrigin },
  openGraph: {
    type: "website",
    title: "Rahul Kumar — Senior Backend Engineer",
    description: "Distributed systems, cloud platforms, and developer tooling built for scale.",
    url: portfolioOrigin,
    images: [{ url: "/og.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar — Senior Backend Engineer",
    description: "Distributed systems, cloud platforms, and developer tooling built for scale.",
    images: ["/og.png"]
  },
  icons: {
    icon: [{ url: "/assets/images/favicon-rahul.png", type: "image/png", sizes: "128x128" }],
    apple: [{ url: "/assets/images/portfolio/rahul-kumar-illustrated.png", sizes: "640x640" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
