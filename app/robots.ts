import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
      },
    ],
    sitemap: "https://olivon.com.tr/sitemap.xml",
    host: "olivon.com.tr",
  };
}
