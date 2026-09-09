import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "ikas Partner | Kurulum, Tasarım, Entegrasyon & Destek",
  description: "Olivon ikas partner olarak mağaza kurulumu, tema düzenleme, ürün-kategori yapısı, sanal POS, kargo, pazaryeri, ERP ve e-ihracat süreçlerinde uçtan uca destek sunar.",
  alternates: { canonical: "/ikas" },
};

const services = [
  ["Strateji", "Ürün, hedef kitle, kategori yapısı ve satış hedeflerine göre ikas yol haritasını çıkarırız."],
  ["Görsel destek", "Ürün görseli, slider, banner ve kampanya tasarımlarını kurumsal kimliğe uygun şekilde yayına alırız."],
  ["Kargo entegrasyonu", "Çalışacağınız kargo şirketleriyle sipariş akışını hızlı ve güvenli çalışacak şekilde bağlarız."],
  ["E-ihracat çözümleri", "Yurt dışı satış planı, dil ve para birimi, lojistik ve pazaryeri adımlarını kurgularız."],
  ["Front-end & back-end", "Tema düzenleme, özel alanlar, performans ve ihtiyaç duyulan teknik geliştirmeleri tamamlarız."],
  ["Sabit sayfalar", "Hakkımızda, iletişim, sözleşmeler, SSS, kampanya ve landing page içeriklerini hazırlarız."],
  ["Sanal POS entegrasyonu", "Banka veya ödeme altyapılarıyla ödeme alma süreçlerini doğru şekilde yapılandırırız."],
  ["ikas check-up", "Mevcut mağazanızı teknik, içerik, UX ve satış akışı açısından analiz ederek uygulanabilir iyileştirme planı çıkarırız."],
  ["Kategori & ürün girişi", "Kategori ağacı, ürün içeriği ve SEO uyumlu yayına alma sürecini yönetiriz."],
  ["Pazaryeri entegrasyonu", "Trendyol, Hepsiburada, N11, Amazon, Beymen, Çiçeksepeti, Pazarama ve Etsy bağlantılarını planlarız."],
  ["ERP entegrasyonu", "E-ticaret altyapınız, stok, muhasebe ve pazaryeri operasyonlarınız arasında sağlıklı veri akışı kurarız."],
  ["Tema & satış optimizasyonu", "Tema, kampanya alanları, ürün vitrinleri ve satın alma akışını satışa hazır hale getiririz."],
];

export default function IkasPage() {
  return (
    <main className="inner-page services-page">
      <header className="inner-nav shell">
        <Link className="brand" href="/"><span className="brand-mark">O</span><span>OLIVON</span></Link>
        <Link href="/">Ana sayfa</Link>
      </header>
      <section className="inner-hero shell services-hero">
        <p className="section-index">OLIVON × İKAS</p>
        <h1>ikas mağazanızı kurmuyoruz sadece.<br /><em>Satışa hazır hale getiriyoruz.</em></h1>
        <p>ikas partner olarak stratejiden tasarıma, ürün yapısından entegrasyonlara ve yayından sonraki iyileştirmelere kadar mağazanın tamamını ele alıyoruz.</p>
      </section>
      <section className="service-detail-grid shell">
        {services.map((service, index) => (
          <article className="service-detail-card" key={service[0]}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{service[0]}</h2>
            <p>{service[1]}</p>
            <ul><li><CheckCircle2 size={16} />ikas partner desteği</li></ul>
          </article>
        ))}
      </section>
      <section className="service-cta shell">
        <p className="section-index">İKAS PROJENİZ</p>
        <h2>Yeni mağaza, yeniden yapılandırma veya mevcut mağaza check-up'ı için başlayalım.</h2>
        <a href="mailto:info@olivon.com.tr">ikas projesini konuşalım <ArrowUpRight size={18} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
