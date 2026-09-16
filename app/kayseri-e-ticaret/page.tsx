import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kayseri E-Ticaret Danışmanlığı | ikas, Shopify & WooCommerce",
  description: "Kayseri'deki markalar için e-ticaret kurulumu, platform seçimi, ikas, Shopify, WooCommerce, platform taşıma, entegrasyon ve ölçüm danışmanlığı.",
  alternates: { canonical: "/kayseri-e-ticaret" },
  openGraph: { title: "Kayseri E-Ticaret Sistemleri | Olivon", description: "Kayseri merkezli markalar için mağaza kurulumu, platform geçişi ve satış operasyonu.", url: "/kayseri-e-ticaret", type: "website" },
};

const items = [
  ["Platform kararı", "ikas, Shopify ve WooCommerce başta olmak üzere altyapıyı ürün sayısı, entegrasyon ihtiyacı, ekip kapasitesi ve büyüme hedeflerine göre değerlendiririz."],
  ["Mağaza mimarisi", "Kategori, ürün, varyant, koleksiyon, sepet ve ödeme yolculuğunu müşterinin karar sürecine göre düzenleriz."],
  ["Entegrasyonlar", "Ödeme, kargo, ERP, pazaryeri ve analitik bağlantılarını satış operasyonunun gerçek ihtiyaçlarına göre planlarız."],
  ["Platform taşıma", "Mevcut sistemden yeni altyapıya geçişte ürün verisi, URL yönlendirmeleri, canonical, sitemap ve yayın sonrası kontrolleri birlikte yürütürüz."],
] as const;

export default function KayseriEcommercePage() {
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("Kayseri e-ticaret danışmanlığı", "Kayseri merkezli markalar için e-ticaret kurulumu, platform seçimi, taşıma, entegrasyon ve ölçüm hizmetleri.", "/kayseri-e-ticaret"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Kayseri E-Ticaret",path:"/kayseri-e-ticaret"}]),
    ]} />
    <section className="inner-hero shell services-hero">
      <p className="section-index">KAYSERİ E-TİCARET</p>
      <h1>Mağazadan fazlası.<br/><em>Yönetilebilir satış sistemi.</em></h1>
      <p>Kayseri'deki üretici, perakendeci ve markalar için e-ticaret altyapısını ürün yönetimi, ödeme, kargo, pazaryeri, SEO ve ölçüm katmanlarıyla birlikte kuruyoruz.</p>
    </section>
    <section className="service-detail-grid shell">
      {items.map(([title,text]) => <article className="service-detail-card" key={title}><h2>{title}</h2><p>{text}</p><ul><li><CheckCircle2 size={16}/>Operasyon · satış · görünürlük</li></ul></article>)}
    </section>
    <section className="service-essentials shell">
      <div className="service-essentials-head"><p className="section-index">DOĞRU BAŞLANGIÇ</p><h2>Yeni mağaza, yeniden yapılandırma veya kontrollü platform geçişi.</h2><p>Önce mevcut sistemi ve operasyonu inceler, ardından gereksiz geliştirme kalemleri yerine satış sürecini gerçekten taşıyacak kapsamı çıkarırız.</p></div>
      <div className="service-essentials-grid">
        <article><h3>Yeni e-ticaret</h3><p>Platform, ürün mimarisi, ödeme, kargo, temel SEO ve analitik katmanını yayına hazır tek sistem olarak planlarız.</p></article>
        <article><h3>Mevcut mağaza</h3><p>Mobil UX, ürün keşfi, teknik SEO, ölçüm ve entegrasyon sorunlarını denetleyip iyileştirme önceliklerini çıkarırız.</p></article>
        <article><h3>Platform değişimi</h3><p>IdeaSoft, Ticimax, T-Soft veya başka bir altyapıdan geçişte veri ve organik görünürlüğü birlikte koruyan taşıma planı oluştururuz.</p></article>
      </div>
    </section>
    <section className="section-inline-cta shell"><a href="/referanslar">Yayınlanmış e-ticaret çalışmalarını inceleyin <ArrowUpRight size={17}/></a></section>
    <section className="service-cta shell"><p className="section-index">KAYSERİ · TÜRKİYE</p><h2>E-ticaret altyapınızı satış modelinizle birlikte değerlendirelim.</h2><a href="/iletisim">E-ticaret projesini konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter />
  </main>;
}
