import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { caseStudies } from "@/lib/case-studies";

const base = "https://olivon.com.tr";
const updated = "2026-09-13";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hizmetler`, lastModified: updated, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/ikas`, lastModified: updated, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/hizmetler/e-ticaret`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hizmetler/web-tasarim`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hizmetler/seo-geo-aeo-aio`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hizmetler/ai-otomasyon`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hizmetler/dijital-reklam`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hizmetler/dijital-guvenlik`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/referanslar`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hakkimizda`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/fiyatlandirma`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iletisim`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/sss`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: updated, changeFrequency: "weekly", priority: 0.82 },
    { url: `${base}/gizlilik-politikasi`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/kvkk`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cerez-politikasi`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/kullanim-kosullari`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
  ];

  const caseRoutes: MetadataRoute.Sitemap = caseStudies.map(item => ({
    url: `${base}/referanslar/${item.slug}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority: 0.82,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map(article => ({
    url: `${base}/blog/${article.slug}`,
    lastModified: article.dateISO,
    changeFrequency: "monthly",
    priority: 0.76,
  }));

  return [...staticRoutes, ...caseRoutes, ...articleRoutes];
}
