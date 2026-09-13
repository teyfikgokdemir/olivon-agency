import type { Metadata } from "next";
import Script from "next/script";
import { FloatingActions } from "@/components/floating-actions";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./home-trust-fix.css";
import "./mobile-qa.css";
import "./home-programs.css";
import "./desktop-qa.css";
import "./brand-orb.css";
import "./platform-strip-premium.css";
import "./security-premium.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://olivon.com.tr"),
  title: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
  description: "Türkiye'deki markalar için premium web tasarım, e-ticaret, SEO, GEO, otomasyon ve dijital güvenlik çözümleri.",
  alternates: { canonical: "/" },
  applicationName: "Olivon",
  authors: [{ name: "Olivon", url: "https://olivon.com.tr" }],
  creator: "Olivon",
  publisher: "Olivon",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Olivon",
    title: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
    description: "Web, e-ticaret, SEO, GEO, AEO, AIO, otomasyon, dijital reklam ve güvenlik hizmetlerini tek büyüme sistemi içinde yönetin.",
    url: "https://olivon.com.tr",
    images: [{ url: "/images/olivon-og.webp", width: 1200, height: 630, alt: "Olivon dijital büyüme stüdyosu" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
    description: "Web, e-ticaret, görünürlük, otomasyon, reklam ve güvenlik için bütünleşik dijital büyüme sistemi.",
    images: ["/images/olivon-og.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VJ2PP2LG1N" strategy="afterInteractive" />
        <Script id="olivon-ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VJ2PP2LG1N');
          `}
        </Script>
        <Script src="https://teyfikgokdemir.com/cansu-source-beacon.js" data-site="olivon-agency" strategy="afterInteractive" />
        <SiteHeader />{children}<FloatingActions />
      </body>
    </html>
  );
}
