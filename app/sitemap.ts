import type { MetadataRoute } from "next";

const base = "https://olivon.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: "2026-09-10", changeFrequency: "weekly", priority: 1 },
    { url: `${base}/hizmetler`, lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ikas`, lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/hizmetler/e-ticaret`, lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hizmetler/web-tasarim`, lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hizmetler/seo-geo-aeo-aio`, lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/hizmetler/ai-otomasyon`, lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/referanslar`, lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: "2026-09-09", changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/iletisim`, lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sss`, lastModified: "2026-09-10", changeFrequency: "monthly", priority: 0.8 },

    { url: `${base}/blog/pazaryeri-mi-kendi-e-ticaret-siteniz-mi`, lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/shopify-ikas-woocommerce-nasil-secilir`, lastModified: "2026-09-07", changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/yapay-zeka-aramalarinda-marka-gorunurlugu`, lastModified: "2026-09-04", changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/e-ticaret-sitesinde-guvenlik-kontrol-listesi`, lastModified: "2026-09-01", changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/blog/donusum-odakli-web-sitesi-ne-demek`, lastModified: "2026-08-28", changeFrequency: "monthly", priority: 0.75 },

    { url: `${base}/gizlilik-politikasi`, lastModified: "2026-09-10", changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/kvkk`, lastModified: "2026-09-10", changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/cerez-politikasi`, lastModified: "2026-09-10", changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/kullanim-kosullari`, lastModified: "2026-09-10", changeFrequency: "yearly", priority: 0.2 },
  ];
}
