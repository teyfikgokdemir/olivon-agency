import { ArrowUpRight } from "lucide-react";

const serviceLinks = ["Web & marka deneyimi", "E-ticaret sistemleri", "Kârlılık analizi", "SEO, GEO, AEO & AIO", "Dijital güvenlik"];

export function SiteFooter() {
  return (
    <footer className="mega-footer">
      <div className="shell footer-cta">
        <div><p>YENİ BİR PROJE Mİ VAR?</p><h2>Markanız için daha güçlü<br /><em>bir dijital sistem</em> kuralım.</h2></div>
        <a className="footer-mail" href="mailto:info@olivon.com.tr"><span>Projeyi konuşalım</span><strong>info@olivon.com.tr</strong><ArrowUpRight /></a>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand"><div className="footer-brand-lockup"><span className="brand-mark">O</span><strong>OLIVON</strong></div><p>Strateji, tasarım, e-ticaret, büyüme ve güvenliği tek sistemde buluşturan bağımsız dijital ajans.</p><div className="footer-partners"><img src="/partners/shopify.svg" alt="Shopify çözüm ortağı" /><img src="/partners/ikas.svg" alt="ikas çözüm ortağı" /></div></div>
        <div><h3>Uzmanlıklar</h3>{serviceLinks.map(link => <a href="/hizmetler" key={link}>{link}</a>)}</div>
        <div><h3>Keşfedin</h3><a href="/#yaklasim">Yaklaşım</a><a href="/#surec">Çalışma süreci</a><a href="/#karlilik">Kârlılık laboratuvarı</a><a href="/blog">Blog</a><a href="/#iletisim">İletişim</a></div>
        <div><h3>Yasal</h3><a href="/gizlilik-politikasi">Gizlilik politikası</a><a href="/kvkk">KVKK aydınlatma metni</a><a href="/cerez-politikasi">Çerez politikası</a><a href="/kullanim-kosullari">Kullanım koşulları</a></div>
      </div>
      <div className="shell footer-premium-band">
        <div><span>PARTNER</span><strong>Shopify & ikas partner yaklaşımı</strong><p>Kurulumdan satış operasyonuna kadar tek elden e-ticaret sistemi.</p></div>
        <div><span>GÜVENLİK</span><strong>Cloudflare güvenlik katmanı</strong><p>Performans, SSL, bot kontrolü ve güvenli trafik yönetimi.</p></div>
        <div><span>TÜRKİYE</span><strong>Türkiye odaklı büyüme dili</strong><p>Kayseri merkezli, ulusal ölçekte anlaşılır ve güven veren ajans deneyimi.</p></div>
      </div>
      <div className="shell footer-signature" aria-hidden="true"><span>OLIVON</span><small>STRATEJİ · TİCARET · TEKNOLOJİ · GÜVENLİK</small></div>
      <div className="shell footer-bottom"><span>© 2026 Olivon. Tüm hakları saklıdır.</span><span>Kayseri · Türkiye</span><a href="mailto:info@olivon.com.tr">info@olivon.com.tr</a></div>
    </footer>
  );
}
