import { ArrowUpRight } from "lucide-react";

const serviceLinks = [
  ["Web tasarım & geliştirme","/hizmetler/web-tasarim"],
  ["E-ticaret sistemleri","/hizmetler/e-ticaret"],
  ["ikas kurulum & destek","/ikas"],
  ["SEO, GEO, AEO & AIO","/hizmetler/seo-geo-aeo-aio"],
  ["AI otomasyon","/hizmetler/ai-otomasyon"],
  ["Dijital reklam","/hizmetler/dijital-reklam"],
  ["Dijital güvenlik","/hizmetler/dijital-guvenlik"],
];

const legalLinks = [
  ["Gizlilik politikası","/gizlilik-politikasi"],
  ["KVKK aydınlatma metni","/kvkk"],
  ["Çerez politikası","/cerez-politikasi"],
  ["Kullanım koşulları","/kullanim-kosullari"],
];

export function SiteFooter() {
  return (
    <footer className="mega-footer">
      <div className="shell footer-cta">
        <div><p>YENİ BİR PROJE Mİ VAR?</p><h2>Markanız için daha güçlü{" "}<br /><em>bir dijital sistem</em>{" "}kuralım.</h2></div>
        <a className="footer-mail" href="/iletisim"><span>Projeyi konuşalım</span><strong>info@olivon.com.tr</strong><ArrowUpRight /></a>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand"><div className="footer-brand-lockup"><span className="brand-mark">O</span><strong>OLIVON</strong></div><p>Strateji, tasarım, e-ticaret, görünürlük, otomasyon ve güvenliği tek sistemde buluşturan bağımsız dijital büyüme stüdyosu.</p><div className="footer-partners"><img src="/partners/shopify.svg" alt="Shopify çözüm ortağı" loading="lazy" /><img src="/partners/ikas.svg" alt="ikas çözüm ortağı" loading="lazy" /></div></div>
        <div className="footer-column footer-services"><h3>Uzmanlıklar</h3>{serviceLinks.map(([label,href]) => <a href={href} key={href}>{label}</a>)}</div>
        <div className="footer-column footer-discover"><h3>Keşfedin</h3><a href="/hakkimizda">Hakkımızda</a><a href="/referanslar">Vaka çalışmaları</a><a href="/fiyatlandirma">Fiyatlandırma yaklaşımı</a><a href="/blog">Blog</a><a href="/sss">SSS</a><a href="/iletisim">İletişim</a></div>
        <div className="footer-column footer-legal-desktop"><h3>Yasal</h3>{legalLinks.map(([label,href]) => <a href={href} key={href}>{label}</a>)}</div>
        <details className="footer-legal-mobile">
          <summary>Yasal <span aria-hidden="true">+</span></summary>
          <div>{legalLinks.map(([label,href]) => <a href={href} key={href}>{label}</a>)}</div>
        </details>
      </div>
      <div className="shell footer-premium-band">
        <div><span>E-TİCARET</span><strong>ikas, Shopify & WooCommerce</strong><p>Platform seçiminden entegrasyon ve satış deneyimine kadar tek proje mimarisi.</p></div>
        <div><span>GÜVENLİK</span><strong>Cloudflare odaklı güvenlik</strong><p>Performans, SSL, WAF, bot kontrolü ve güvenli trafik yönetimi.</p></div>
        <div><span>TÜRKİYE</span><strong>Kayseri merkezli, ulusal çalışma</strong><p>Türkiye genelindeki markalarla uzaktan yürütülebilen net proje akışı.</p></div>
      </div>
      <div className="shell footer-signature" aria-hidden="true">
        <div className="footer-signature-brand"><span className="brand-mark footer-signature-orb">O</span><span className="footer-signature-word">OLIVON</span></div>
        <small>STRATEJİ · TİCARET · TEKNOLOJİ · GÜVENLİK</small>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Olivon. Tüm hakları saklıdır.</span><span>Kayseri · Türkiye</span><a href="mailto:info@olivon.com.tr">info@olivon.com.tr</a></div>
    </footer>
  );
}
