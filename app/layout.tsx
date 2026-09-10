import type { Metadata } from "next";
import Script from "next/script";
import { FloatingActions } from "@/components/floating-actions";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
  description: "Türkiye'deki markalar için premium web tasarım, e-ticaret, SEO, GEO, otomasyon ve dijital güvenlik çözümleri.",
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
        <SiteHeader />{children}<FloatingActions />
      </body>
    </html>
  );
}
