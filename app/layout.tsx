import type { Metadata, Viewport } from "next";
import { FloatingActions } from "@/components/floating-actions";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./brand-overrides.css";
import "./nav-hotfix.css";
import "./services-v2.css";
import "./references-v2.css";
import "./blog-v2.css";
import "./blog-index-v2.css";
import "./global-header-fix.css";

const siteUrl = "https://olivon.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
    template: "%s | Olivon",
  },
  description: "Olivon; web tasarım, Shopify, ikas, WooCommerce, teknik SEO, GEO, AEO, AIO ve dijital güvenlik alanlarında markalar için ölçülebilir dijital sistemler kurar.",
  applicationName: "Olivon",
  authors: [{ name: "Olivon" }],
  creator: "Olivon",
  publisher: "Olivon",
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Olivon",
    title: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
    description: "Web, e-ticaret, görünürlük ve güvenlik altyapısını tek bir büyüme sistemi olarak tasarlayan dijital stüdyo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
    description: "Web, e-ticaret, SEO, GEO, AEO, AIO ve dijital güvenlik için bütünleşik sistemler.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0908",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Olivon",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  email: "info@olivon.com.tr",
  description: "Web, e-ticaret, SEO, GEO, AEO, AIO ve dijital güvenlik çözümleri geliştiren Türkiye merkezli dijital stüdyo.",
  areaServed: { "@type": "Country", name: "Türkiye" },
  knowsAbout: ["Web tasarım", "E-ticaret", "Shopify", "ikas", "WooCommerce", "Teknik SEO", "GEO", "AEO", "AIO", "Cloudflare", "Dijital güvenlik"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Olivon",
  inLanguage: "tr-TR",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <div className="root-site-header"><SiteHeader /></div>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
