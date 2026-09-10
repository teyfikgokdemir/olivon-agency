import type { Metadata } from "next";
import { FloatingActions } from "@/components/floating-actions";
import { SiteHeader } from "@/components/site-header";
import { GoogleAnalytics } from "@/components/google-analytics";
import "./globals.css";
import "./brand-overrides.css";
import "./nav-hotfix.css";
import "./services-v2.css";
import "./references-v2.css";
import "./blog-v2.css";
import "./blog-index-v2.css";
import "./global-header-fix.css";

const siteTitle = "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri";
const siteDescription = "Web tasarım, e-ticaret, SEO, GEO, AI görünürlüğü ve dijital güvenlik çözümleriyle markanızı büyüten dijital sistemler kuruyoruz.";

export const metadata: Metadata = {
  metadataBase: new URL("https://olivon.com.tr"),
  title: siteTitle,
  description: siteDescription,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://olivon.com.tr",
    siteName: "Olivon",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/olivon-og.webp",
        width: 1200,
        height: 630,
        alt: "Olivon dijital büyüme, e-ticaret, SEO ve web teknolojileri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/olivon-og.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preload" as="image" href="/images/hero/olivon-hero-main.webp" type="image/webp" fetchPriority="high" />
      </head>
      <body className="antialiased">
        <div className="root-site-header"><SiteHeader /></div>
        {children}
        <FloatingActions />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
