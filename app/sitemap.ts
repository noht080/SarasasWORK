import type { MetadataRoute } from "next";

/**
 * Sitemap for Google Search Console.
 * Next.js automatically serves this at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sarasas-work.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
