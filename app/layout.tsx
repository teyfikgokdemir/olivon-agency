import type { Metadata } from "next";
import Script from "next/script";
import { CansuSourceBeacon } from "@/components/cansu-source-beacon";
import { CookieConsent } from "@/components/cookie-consent";
import { FeaturedCasesController } from "@/components/featured-cases-controller";
import { FloatingActions } from "@/components/floating-actions";
import { GoogleAnalytics } from "@/components/google-analytics";
import { MotionController } from "@/components/motion-controller";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";
import "./elite-pages.css";
import "./services-v2.css";
import "./contact-faq.css";
import "./home-trust-fix.css";
import "./mobile-qa.css";
import "./home-programs.css";
import "./desktop-qa.css";
import "./brand-orb.css";
import "./platform-strip-premium.css";
import "./security-premium.css";
import "./footer-signature-premium.css";
import "./visibility-system.css";
import "./inner-pages-premium.css";
import "./inner-pages-mobile-final.css";
import "./motion-premium.css";
import "./featured-cases-flow.css";
import "./i18n.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://olivon.com.tr"),
  title: { default: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri", template: "%s | Olivon" },
  description: "Türkiye'deki markalar için premium web tasarım, e-ticaret, SEO, GEO, otomasyon ve dijital güvenlik çözümleri.",
  alternates: { canonical: "/", languages: { "tr-TR": "/", en: "/en", "de-DE": "/de", "fr-FR": "/fr", "x-default": "/" } },
  applicationName: "Olivon",
  authors: [{ name: "Olivon", url: "https://olivon.com.tr" }],
  creator: "Olivon",
  publisher: "Olivon",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: { type:"website", locale:"tr_TR", siteName:"Olivon", title:"Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri", description:"Web, e-ticaret, SEO, GEO, AEO, AIO, otomasyon, dijital reklam ve güvenlik hizmetlerini tek büyüme sistemi içinde yönetin.", url:"https://olivon.com.tr", images:[{url:"/images/olivon-og.webp",width:1200,height:630,alt:"Olivon dijital büyüme stüdyosu"}] },
  twitter: { card:"summary_large_image", title:"Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri", description:"Web, e-ticaret, görünürlük, otomasyon, reklam ve güvenlik için bütünleşik dijital büyüme sistemi.", images:["/images/olivon-og.webp"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="antialiased">
        <Script id="olivon-document-language" strategy="beforeInteractive">{`
          (function(){
            var first=(location.pathname.split('/').filter(Boolean)[0]||'tr').toLowerCase();
            document.documentElement.lang=(first==='en'||first==='de'||first==='fr')?first:'tr';
          })();
        `}</Script>
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <GoogleAnalytics />
        <CansuSourceBeacon />
        <SiteHeader />
        <MotionController />
        <FeaturedCasesController />
        {children}
        <FloatingActions />
        <CookieConsent />
      </body>
    </html>
  );
}
