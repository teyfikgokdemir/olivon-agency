import { ArrowUpRight } from "lucide-react";

const serviceLinks = ["Web & marka deneyimi", "E-ticaret sistemleri", "Kârlılık analizi", "SEO, GEO, AEO & AIO", "Dijital güvenlik"];

export function SiteFooter() {
  return (
    <footer className="mega-footer">
      <div className="shell footer-cta">
        <p>İYİ BİR PROJE, DOĞRU BİR SORUYLA BAŞLAR.</p>
        <a href="mailto:info@olivon.com.tr">Birlikte neyi değiştirebiliriz? <ArrowUpRight /></a>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand"><span className="brand-mark">O</span><strong>OLIVON</strong><p>Türkiye’den markalar için strateji, tasarım, teknoloji ve güvenlik.</p><div className="footer-partners"><img src="/partners/shopify.svg" alt="Shopify çözüm ortağı" /><img src="/partners/ikas.svg" alt="ikas çözüm ortağı" /></div></div>
        <div><h3>Uzmanlıklar</h3>{serviceLinks.map(link => <a href="/#cozumler" key={link}>{link}</a>)}</div>
        <div><h3>Keşfedin</h3><a href="/#yaklasim">Yaklaşım</a><a href="/#surec">Çalışma süreci</a><a href="/#karlilik">Kârlılık laboratuvarı</a><a href="/blog">İçgörüler</a><a href="/#iletisim">İletişim</a></div>
        <div><h3>Yasal</h3><a href="/gizlilik-politikasi">Gizlilik politikası</a><a href="/kvkk">KVKK aydınlatma metni</a><a href="/cerez-politikasi">Çerez politikası</a><a href="/kullanim-kosullari">Kullanım koşulları</a></div>
      </div>
      <div className="shell footer-wordmark">OLIVON</div>
      <div className="shell footer-bottom"><span>© 2026 Olivon. Tüm hakları saklıdır.</span><span>İstanbul · Türkiye</span><a href="mailto:info@olivon.com.tr">info@olivon.com.tr</a></div>
    </footer>
  );
}
