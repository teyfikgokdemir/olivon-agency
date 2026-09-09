import type { Metadata } from "next";
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
