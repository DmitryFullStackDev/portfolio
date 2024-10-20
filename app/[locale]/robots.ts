import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en/", "/ru/", "/en/gallery", "/ru/gallery"],
      disallow: [],
    },
    sitemap: [
      "http://localhost:3000/en/sitemap.xml",
      "http://localhost:3000/ru/sitemap.xml",
    ],
  };
}
