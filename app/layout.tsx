import type { Metadata } from "next";
import Script from "next/script";
import { FloatingActions } from "@/components/floating-actions";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";
import "./elite-pages.css";
import "./services-v2.css";
import "./references-v2.css";
import "./contact-faq.css";
import "./blog-index-v2.css";
import "./blog-v2.css";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://olivon.com.tr"),
  title: {
    default: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
    template: "%s | Olivon",
  },
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
        <Script id="olivon-conversion-events" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(event) {
              var link = event.target && event.target.closest ? event.target.closest('a') : null;
              if (!link || typeof window.gtag !== 'function') return;
              var href = link.getAttribute('href') || '';
              var eventName = '';
              if (/wa\.me|whatsapp/i.test(href)) eventName = 'whatsapp_click';
              else if (href.indexOf('mailto:') === 0) eventName = 'email_click';
              else if (href.indexOf('tel:') === 0) eventName = 'phone_click';
              else if (href === '/iletisim' || href.indexOf('/iletisim?') === 0) eventName = 'contact_cta_click';
              else if (href.indexOf('/referanslar') === 0) eventName = 'case_study_click';
              else if (href.indexOf('/hizmetler/') === 0 || href === '/hizmetler') eventName = 'service_detail_click';
              if (!eventName) return;
              window.gtag('event', eventName, {
                link_url: href,
                link_text: (link.textContent || '').trim().slice(0, 80)
              });
            }, { passive: true });
          `}
        </Script>
        <Script src="https://teyfikgokdemir.com/cansu-source-beacon.js" data-site="olivon-agency" strategy="afterInteractive" />
        <SiteHeader />{children}<FloatingActions />
      </body>
    </html>
  );
}
