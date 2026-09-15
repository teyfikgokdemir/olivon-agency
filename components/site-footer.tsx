"use client";

import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";

const localized = {
  en: { kicker:"NEW PROJECT?", title:"Let’s build a stronger digital system for your brand.", cta:"Start a project", about:"Independent digital growth studio connecting strategy, commerce, visibility, automation and security.", expertise:"Capabilities", discover:"Discover", work:"Work", contact:"Contact", rights:"All rights reserved.", location:"Kayseri · Türkiye", band:["CROSS-BORDER COMMERCE","Shopify, ikas & WooCommerce","SECURITY","Cloudflare-first security","INTERNATIONAL","Built in Türkiye, working across markets"] },
  de: { kicker:"NEUES PROJEKT?", title:"Lassen Sie uns ein stärkeres digitales System für Ihre Marke aufbauen.", cta:"Projekt besprechen", about:"Unabhängiges Digitalstudio für Strategie, E-Commerce, Sichtbarkeit, Automatisierung und Sicherheit.", expertise:"Leistungen", discover:"Entdecken", work:"Referenzen", contact:"Kontakt", rights:"Alle Rechte vorbehalten.", location:"Kayseri · Türkiye", band:["E-COMMERCE","Shopify, ikas & WooCommerce","SICHERHEIT","Cloudflare-orientierte Sicherheit","DACH & INTERNATIONAL","Aus Türkiye, für internationale Märkte"] },
  fr: { kicker:"NOUVEAU PROJET ?", title:"Construisons un système digital plus fort pour votre marque.", cta:"Parler du projet", about:"Studio indépendant réunissant stratégie, e-commerce, visibilité, automatisation et sécurité.", expertise:"Expertises", discover:"Découvrir", work:"Réalisations", contact:"Contact", rights:"Tous droits réservés.", location:"Kayseri · Türkiye", band:["E-COMMERCE","Shopify, ikas & WooCommerce","SÉCURITÉ","Sécurité centrée sur Cloudflare","INTERNATIONAL","Basé en Türkiye, actif sur plusieurs marchés"] },
} as const;

const serviceLinks = ["E-commerce", "Web design", "SEO · GEO · AEO · AIO", "Automation", "Digital security"];

export function SiteFooter() {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0] as Locale;
  const locale = locales.includes(first) ? first : null;

  if (locale) {
    const text = localized[locale];
    return (
      <footer className="mega-footer">
        <div className="shell footer-cta">
          <div><p>{text.kicker}</p><h2>{text.title}</h2></div>
          <a className="footer-mail" href={`/${locale}#contact`}><span>{text.cta}</span><strong>info@olivon.com.tr</strong><ArrowUpRight /></a>
        </div>
        <div className="shell footer-grid">
          <div className="footer-brand"><div className="footer-brand-lockup"><span className="brand-mark">O</span><strong>OLIVON</strong></div><p>{text.about}</p><div className="footer-partners"><img src="/partners/shopify.svg" alt="Shopify" loading="lazy" /><img src="/partners/ikas.svg" alt="ikas" loading="lazy" /></div></div>
          <div className="footer-column footer-services"><h3>{text.expertise}</h3>{serviceLinks.map(label => <a href={`/${locale}#services`} key={label}>{label}</a>)}</div>
          <div className="footer-column footer-discover"><h3>{text.discover}</h3><a href={`/${locale}#approach`}>{text.work}</a><a href={`/${locale}#contact`}>{text.contact}</a></div>
        </div>
        <div className="shell footer-premium-band">
          <div><span>{text.band[0]}</span><strong>{text.band[1]}</strong></div><div><span>{text.band[2]}</span><strong>{text.band[3]}</strong></div><div><span>{text.band[4]}</span><strong>{text.band[5]}</strong></div>
        </div>
        <div className="shell footer-signature" aria-hidden="true"><div className="footer-signature-brand"><span className="brand-mark footer-signature-orb">O</span><span className="footer-signature-word">OLIVON</span></div><small>STRATEGY · COMMERCE · TECHNOLOGY · SECURITY</small></div>
        <div className="shell footer-bottom"><span>© 2026 Olivon. {text.rights}</span><span>{text.location}</span><a href="mailto:info@olivon.com.tr">info@olivon.com.tr</a></div>
      </footer>
    );
  }

  const trServices = [["Web tasarım & geliştirme","/hizmetler/web-tasarim"],["E-ticaret sistemleri","/hizmetler/e-ticaret"],["ikas kurulum & destek","/ikas"],["SEO, GEO, AEO & AIO","/hizmetler/seo-geo-aeo-aio"],["AI otomasyon","/hizmetler/ai-otomasyon"],["Dijital reklam","/hizmetler/dijital-reklam"],["Dijital güvenlik","/hizmetler/dijital-guvenlik"]];
  const legalLinks = [["Gizlilik politikası","/gizlilik-politikasi"],["KVKK aydınlatma metni","/kvkk"],["Çerez politikası","/cerez-politikasi"],["Kullanım koşulları","/kullanim-kosullari"]];
  return (
    <footer className="mega-footer">
      <div className="shell footer-cta"><div><p>YENİ BİR PROJE Mİ VAR?</p><h2>Markanız için daha güçlü <br /><em>bir dijital sistem</em> kuralım.</h2></div><a className="footer-mail" href="/iletisim"><span>Projeyi konuşalım</span><strong>info@olivon.com.tr</strong><ArrowUpRight /></a></div>
      <div className="shell footer-grid">
        <div className="footer-brand"><div className="footer-brand-lockup"><span className="brand-mark">O</span><strong>OLIVON</strong></div><p>Strateji, tasarım, e-ticaret, görünürlük, otomasyon ve güvenliği tek sistemde buluşturan bağımsız dijital büyüme stüdyosu.</p><div className="footer-partners"><img src="/partners/shopify.svg" alt="Shopify çözüm ortağı" loading="lazy" /><img src="/partners/ikas.svg" alt="ikas çözüm ortağı" loading="lazy" /></div></div>
        <div className="footer-column footer-services"><h3>Uzmanlıklar</h3>{trServices.map(([label,href]) => <a href={href} key={href}>{label}</a>)}</div>
        <div className="footer-column footer-discover"><h3>Keşfedin</h3><a href="/hakkimizda">Hakkımızda</a><a href="/referanslar">Vaka çalışmaları</a><a href="/fiyatlandirma">Fiyatlandırma yaklaşımı</a><a href="/blog">Blog</a><a href="/sss">SSS</a><a href="/iletisim">İletişim</a></div>
        <div className="footer-column footer-legal-desktop"><h3>Yasal</h3>{legalLinks.map(([label,href]) => <a href={href} key={href}>{label}</a>)}</div>
      </div>
      <div className="shell footer-premium-band"><div><span>E-TİCARET</span><strong>ikas, Shopify & WooCommerce</strong></div><div><span>GÜVENLİK</span><strong>Cloudflare odaklı güvenlik</strong></div><div><span>TÜRKİYE</span><strong>Kayseri merkezli, ulusal çalışma</strong></div></div>
      <div className="shell footer-signature" aria-hidden="true"><div className="footer-signature-brand"><span className="brand-mark footer-signature-orb">O</span><span className="footer-signature-word">OLIVON</span></div><small>STRATEJİ · TİCARET · TEKNOLOJİ · GÜVENLİK</small></div>
      <div className="shell footer-bottom"><span>© 2026 Olivon. Tüm hakları saklıdır.</span><span>Kayseri · Türkiye</span><a href="mailto:info@olivon.com.tr">info@olivon.com.tr</a></div>
    </footer>
  );
}
