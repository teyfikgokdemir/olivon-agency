import type { Metadata } from "next";
import { FloatingActions } from "@/components/floating-actions";
import { SiteHeader } from "@/components/site-header";
import { GoogleAnalytics } from "@/components/google-analytics";
import { CookieConsent } from "@/components/cookie-consent";
import { StructuredData } from "@/components/structured-data";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";
import "./brand-overrides.css";
import "./nav-hotfix.css";
import "./services-v2.css";
import "./references-v2.css";
import "./blog-v2.css";
import "./blog-index-v2.css";
import "./global-header-fix.css";
import "./contact-faq.css";
import "./elite-pages.css";

const siteTitle = "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri";
const siteDescription = "Web tasarım, e-ticaret, ikas, SEO, GEO, AEO, AIO, AI otomasyon ve dijital güvenlik çözümleriyle markanız için ölçülebilir dijital sistemler kuruyoruz.";

export const metadata: Metadata = {
  metadataBase: new URL("https://olivon.com.tr"),
  title: { default: siteTitle, template: "%s | Olivon" },
  description: siteDescription,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://olivon.com.tr",
    siteName: "Olivon",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/images/olivon-og.webp", width: 1200, height: 630, alt: "Olivon dijital büyüme, e-ticaret, SEO ve web teknolojileri" }],
  },
  twitter: { card: "summary_large_image", title: siteTitle, description: siteDescription, images: ["/images/olivon-og.webp"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <div className="root-site-header"><SiteHeader /></div>
        {children}
        <FloatingActions />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
