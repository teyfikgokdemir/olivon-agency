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
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@olivon.com.tr",
    availableLanguage: ["tr", "en", "de", "fr"],
  },
  description: "Olivon is a digital growth studio for web design, e-commerce, SEO, GEO, AEO, AIO, AI automation and digital security, serving brands in Türkiye and international markets.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kayseri",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "Country", name: "Türkiye" },
    { "@type": "Country", name: "Germany" },
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: "Europe" },
  ],
  knowsAbout: [
    "Web design",
    "E-commerce",
    "ikas",
    "Shopify",
    "WooCommerce",
    "SEO",
    "GEO",
    "AEO",
    "AIO",
    "AI automation",
    "Digital security",
    "Cloudflare",
    "Cross-border e-commerce",
    "E-commerce migration",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Olivon",
  inLanguage: ["tr-TR", "en", "de-DE", "fr-FR"],
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
  const pageUrl = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name,
    serviceType: name,
    description,
    url: pageUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Türkiye" },
  };
}
