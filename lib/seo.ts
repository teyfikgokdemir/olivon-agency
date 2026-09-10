export const SITE_URL = "https://olivon.com.tr";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: "Olivon",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/images/olivon-og.webp`,
  email: "info@olivon.com.tr",
  contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "info@olivon.com.tr", availableLanguage: ["tr"] },
  description: "Web tasarım, e-ticaret, ikas, SEO, GEO, AEO, AIO, AI otomasyon ve dijital güvenlik alanlarında çalışan dijital büyüme stüdyosu.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kayseri",
    addressCountry: "TR",
  },
  areaServed: { "@type": "Country", name: "Türkiye" },
  knowsAbout: [
    "Web tasarım",
    "E-ticaret",
    "ikas",
    "Shopify",
    "WooCommerce",
    "SEO",
    "GEO",
    "AEO",
    "AIO",
    "Yapay zekâ otomasyonu",
    "Dijital güvenlik",
    "Cloudflare",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Olivon",
  inLanguage: "tr-TR",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Türkiye" },
  };
}
