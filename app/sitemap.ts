import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { caseStudies } from "@/lib/case-studies";
import { intlArticles } from "@/lib/intl-articles";
import { intlPageKeys, intlPages, localizedPath, type IntlPageKey } from "@/lib/intl-pages";
import { locales } from "@/lib/i18n";

const base = "https://olivon.com.tr";
const updated = "2026-09-16";

const languageAlternates = {
  "tr-TR": `${base}/`,
  en: `${base}/en`,
  "de-DE": `${base}/de`,
  "fr-FR": `${base}/fr`,
  "x-default": `${base}/`,
};

const blogAlternates = {
  "tr-TR": `${base}/blog`,
  en: `${base}/en/blog`,
  "de-DE": `${base}/de/blog`,
  "fr-FR": `${base}/fr/blog`,
  "x-default": `${base}/blog`,
};

const trEquivalent: Record<IntlPageKey, string> = {
  services: "/hizmetler", ecommerce: "/hizmetler/e-ticaret", search: "/hizmetler/seo-geo-aeo-aio", web: "/hizmetler/web-tasarim", security: "/hizmetler/dijital-guvenlik", work: "/referanslar", faq: "/sss", contact: "/iletisim",
};

function alternatesFor(key: IntlPageKey) {
  return {
    "tr-TR": `${base}${trEquivalent[key]}`,
    en: `${base}${localizedPath("en", key)}`,
    "de-DE": `${base}${localizedPath("de", key)}`,
    "fr-FR": `${base}${localizedPath("fr", key)}`,
    "x-default": `${base}${trEquivalent[key]}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: updated, changeFrequency: "weekly", priority: 1, alternates: { languages: languageAlternates } },
    { url: `${base}/en`, lastModified: updated, changeFrequency: "weekly", priority: 0.92, alternates: { languages: languageAlternates } },
    { url: `${base}/de`, lastModified: updated, changeFrequency: "weekly", priority: 0.92, alternates: { languages: languageAlternates } },
    { url: `${base}/fr`, lastModified: updated, changeFrequency: "weekly", priority: 0.92, alternates: { languages: languageAlternates } },
    { url: `${base}/hizmetler`, lastModified: updated, changeFrequency: "monthly", priority: 0.95, alternates: { languages: alternatesFor("services") } },
    { url: `${base}/ikas`, lastModified: updated, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/hizmetler/e-ticaret`, lastModified: updated, changeFrequency: "monthly", priority: 0.9, alternates: { languages: alternatesFor("ecommerce") } },
    { url: `${base}/hizmetler/platform-tasima`, lastModified: updated, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hizmetler/web-tasarim`, lastModified: updated, changeFrequency: "monthly", priority: 0.9, alternates: { languages: alternatesFor("web") } },
    { url: `${base}/hizmetler/seo-geo-aeo-aio`, lastModified: updated, changeFrequency: "monthly", priority: 0.9, alternates: { languages: alternatesFor("search") } },
    { url: `${base}/hizmetler/ai-otomasyon`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hizmetler/dijital-reklam`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hizmetler/dijital-guvenlik`, lastModified: updated, changeFrequency: "monthly", priority: 0.85, alternates: { languages: alternatesFor("security") } },
    { url: `${base}/referanslar`, lastModified: updated, changeFrequency: "monthly", priority: 0.9, alternates: { languages: alternatesFor("work") } },
    { url: `${base}/hakkimizda`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/fiyatlandirma`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iletisim`, lastModified: updated, changeFrequency: "monthly", priority: 0.85, alternates: { languages: alternatesFor("contact") } },
    { url: `${base}/sss`, lastModified: updated, changeFrequency: "monthly", priority: 0.8, alternates: { languages: alternatesFor("faq") } },
    { url: `${base}/blog`, lastModified: updated, changeFrequency: "weekly", priority: 0.82, alternates: { languages: blogAlternates } },
    { url: `${base}/en/blog`, lastModified: updated, changeFrequency: "weekly", priority: 0.8, alternates: { languages: blogAlternates } },
    { url: `${base}/de/blog`, lastModified: updated, changeFrequency: "weekly", priority: 0.8, alternates: { languages: blogAlternates } },
    { url: `${base}/fr/blog`, lastModified: updated, changeFrequency: "weekly", priority: 0.8, alternates: { languages: blogAlternates } },
    { url: `${base}/gizlilik-politikasi`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/kvkk`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cerez-politikasi`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/kullanim-kosullari`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
  ];

  const localizedRoutes: MetadataRoute.Sitemap = locales.flatMap(locale => intlPageKeys.map(key => ({
    url: `${base}${localizedPath(locale, key)}`,
    lastModified: updated,
    changeFrequency: "monthly" as const,
    priority: ["services","ecommerce","search"].includes(key) ? 0.88 : 0.78,
    alternates: { languages: alternatesFor(key) },
  })));

  const caseRoutes: MetadataRoute.Sitemap = caseStudies.map(item => ({ url:`${base}/referanslar/${item.slug}`, lastModified:updated, changeFrequency:"monthly", priority:0.82 }));
  const localizedCaseRoutes: MetadataRoute.Sitemap = locales.flatMap(locale => caseStudies.map(item => ({ url:`${base}/${locale}/${intlPages[locale].work.slug}/${item.slug}`, lastModified:updated, changeFrequency:"monthly" as const, priority:0.8 })));
  const articleRoutes: MetadataRoute.Sitemap = articles.map(article => ({ url:`${base}/blog/${article.slug}`, lastModified:article.dateISO, changeFrequency:"monthly", priority:0.76 }));
  const localizedArticleRoutes: MetadataRoute.Sitemap = locales.flatMap(locale => intlArticles[locale].map(article => ({ url:`${base}/${locale}/blog/${article.slug}`, lastModified:article.dateISO, changeFrequency:"monthly" as const, priority:0.74 })));

  return [...staticRoutes, ...localizedRoutes, ...caseRoutes, ...localizedCaseRoutes, ...articleRoutes, ...localizedArticleRoutes];
}
