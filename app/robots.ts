import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://olivon.com.tr/sitemap.xml",
    host: "https://olivon.com.tr",
  };
}
