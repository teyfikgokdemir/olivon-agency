import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
  description: "Türkiye'deki markalar için premium web tasarım, e-ticaret, SEO, GEO, otomasyon ve dijital güvenlik çözümleri.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <div className="root-site-header"><SiteHeader /></div>
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
