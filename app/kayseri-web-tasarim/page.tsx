import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kayseri Web Tasarım Ajansı | Kurumsal Web & Dönüşüm",
  description: "Kayseri merkezli işletmeler için kurumsal web tasarım, mobil UX, teknik SEO, Core Web Vitals ve dönüşüm odaklı web geliştirme hizmetleri.",
  alternates: { canonical: "/kayseri-web-tasarim" },
  openGraph: { title: "Kayseri Web Tasarım | Olivon", description: "Kayseri'deki markalar için mobil, hızlı ve ölçülebilir web deneyimleri.", url: "/kayseri-web-tasarim", type: "website" },
};

const items = [
  ["Kurumsal güven", "Hizmet, uzmanlık, referans ve iletişim sinyallerini ziyaretçinin karar sürecine göre açık bir bilgi mimarisinde toplarız."],
  ["Mobil deneyim", "Kayseri'deki yerel hizmet aramalarının önemli bölümü mobilde başlar. Menü, CTA, form, telefon ve WhatsApp akışını küçük ekranlar için ayrı test ederiz."],
  ["Yerel görünürlük", "Sayfa başlıkları, içerik, LocalBusiness/Organization sinyalleri, Google Business Profile bağlantıları ve teknik SEO aynı marka kimliğiyle çalışmalıdır."],
  ["Ölçüm", "Form, e-posta, WhatsApp ve ana CTA etkileşimlerini GA4 olaylarıyla ayırarak hangi sayfanın talep ürettiğini izlenebilir hale getiririz."],
] as const;

export default function KayseriWebTasarimPage() {
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("Kayseri web tasarım ve geliştirme", "Kayseri merkezli işletmeler için kurumsal web tasarım, mobil UX, teknik SEO ve dönüşüm odaklı geliştirme.", "/kayseri-web-tasarim"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Kayseri Web Tasarım",path:"/kayseri-web-tasarim"}]),
    ]} />
    <section className="inner-hero shell services-hero">
      <p className="section-index">KAYSERİ WEB TASARIM</p>
      <h1>Yerel güveni,<br/><em>dijital tercihe dönüştürün.</em></h1>
      <p>Kayseri merkezli markalar ve hizmet işletmeleri için yalnızca iyi görünen değil; mobilde çalışan, Google tarafından anlaşılabilen ve gerçek talebi ölçebilen web siteleri geliştiriyoruz.</p>
    </section>
    <section className="service-detail-grid shell">
      {items.map(([title,text]) => <article className="service-detail-card" key={title}><h2>{title}</h2><p>{text}</p><ul><li><CheckCircle2 size={16}/>Tasarım · teknik SEO · ölçüm</li></ul></article>)}
    </section>
    <section className="service-essentials shell">
      <div className="service-essentials-head"><p className="section-index">KİMLER İÇİN?</p><h2>Kayseri'de müşterinin sizi araştırdığı anda güçlü görünmek isteyen işletmeler.</h2><p>Kurumsal firmalar, üreticiler, hizmet işletmeleri ve e-ticaret markaları için mevcut siteyi iyileştirme veya sıfırdan yeniden kurulum kapsamı çıkarıyoruz.</p></div>
      <div className="service-essentials-grid">
        <article><h3>Mevcut siteniz varsa</h3><p>Mobil davranış, hız, içerik mimarisi, local SEO, CTA ve ölçüm katmanını denetler; yeniden kurulum gerekip gerekmediğini ayırırız.</p></article>
        <article><h3>Yeni site kurulacaksa</h3><p>Sayfa mimarisi, içerik, tasarım, geliştirme, schema, Search Console ve GA4 temellerini tek teslim planında toplarız.</p></article>
        <article><h3>E-ticaret de gerekiyorsa</h3><p>Web tasarımını ürün, ödeme, kargo, platform ve satış operasyonuyla birlikte değerlendiririz.</p></article>
      </div>
    </section>
    <section className="service-cta shell"><p className="section-index">KAYSERİ · TÜRKİYE</p><h2>Mevcut sitenizi veya yeni proje hedefinizi birlikte değerlendirelim.</h2><a href="/iletisim">Proje briefini gönderin <ArrowUpRight size={18}/></a></section>
    <SiteFooter />
  </main>;
}
