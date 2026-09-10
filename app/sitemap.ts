import type { MetadataRoute } from "next";

const base = "https://olivon.com.tr";
const updated = "2026-09-10";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
    { url: `${base}/referanslar/oyku-baby-store`, lastModified: updated, changeFrequency: "monthly", priority: 0.82 },
    { url: `${base}/referanslar/bailas-kids`, lastModified: updated, changeFrequency: "monthly", priority: 0.82 },
    { url: `${base}/referanslar/favorim-kids`, lastModified: updated, changeFrequency: "monthly", priority: 0.82 },
    { url: `${base}/hakkimizda`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/fiyatlandirma`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/iletisim`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/sss`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: "2026-09-09", changeFrequency: "weekly", priority: 0.82 },

    { url: `${base}/blog/pazaryeri-mi-kendi-e-ticaret-siteniz-mi`, lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.76 },
    { url: `${base}/blog/shopify-ikas-woocommerce-nasil-secilir`, lastModified: "2026-09-07", changeFrequency: "monthly", priority: 0.76 },
    { url: `${base}/blog/yapay-zeka-aramalarinda-marka-gorunurlugu`, lastModified: "2026-09-04", changeFrequency: "monthly", priority: 0.76 },
    { url: `${base}/blog/e-ticaret-sitesinde-guvenlik-kontrol-listesi`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.76 },
    { url: `${base}/blog/donusum-odakli-web-sitesi-ne-demek`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.76 },

    { url: `${base}/gizlilik-politikasi`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/kvkk`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cerez-politikasi`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/kullanim-kosullari`, lastModified: updated, changeFrequency: "yearly", priority: 0.2 },
  ];
}
