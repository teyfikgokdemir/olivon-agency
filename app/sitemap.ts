import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://olivon.com.tr";
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hizmetler`, lastModified: now, changeFrequency: "weekly", priority: .9 },
    { url: `${base}/hizmetler/e-ticaret`, lastModified: now, changeFrequency: "monthly", priority: .9 },
    { url: `${base}/hizmetler/web-tasarim`, lastModified: now, changeFrequency: "monthly", priority: .9 },
    { url: `${base}/hizmetler/seo-geo-aeo-aio`, lastModified: now, changeFrequency: "weekly", priority: .9 },
    { url: `${base}/referanslar`, lastModified: now, changeFrequency: "monthly", priority: .8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: .8 },
    { url: `${base}/gizlilik-politikasi`, lastModified: now, changeFrequency: "yearly", priority: .2 },
    { url: `${base}/kvkk`, lastModified: now, changeFrequency: "yearly", priority: .2 },
    { url: `${base}/cerez-politikasi`, lastModified: now, changeFrequency: "yearly", priority: .2 },
    { url: `${base}/kullanim-kosullari`, lastModified: now, changeFrequency: "yearly", priority: .2 },
  ];
}
