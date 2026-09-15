import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "about",
    "services",
    "technologies",
    "insights",
    "contact",
    "privacy",
    "cookies",
    "terms",
    "accessibility",
  ];

  return pages.map((page) => ({
    url: `https://kl-tech.co.uk/${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.7,
  }));
}
