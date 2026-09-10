import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dijital Reklam & Marka Pazarlama | Meta, Google ve Pazaryeri",
  description: "Meta, Google ve pazaryeri kampanyalarında ölçüm, kreatif, teklif stratejisi, dönüşüm takibi ve kârlılık odaklı dijital reklam yönetimi.",
  alternates: { canonical: "/hizmetler/dijital-reklam" },
  openGraph: { title: "Dijital Reklam & Marka Pazarlama | Olivon", description: "Trafik değil, ölçülebilir ticari sonuç ve marka güveni odaklı reklam sistemi.", url: "/hizmetler/dijital-reklam", type: "website" },
};

const layers = [
  ["Ölçüm temeli", "Reklam bütçesini büyütmeden önce GA4, dönüşüm olayları, kampanya hedefleri ve temel raporlama yapısını netleştiririz."],
  ["Kampanya mimarisi", "Kanal, hedef kitle, teklif ve ürün gruplarını markanın ticari hedefiyle eşleştiririz."],
  ["Kreatif sistem", "Görsel ve metin üretimini tekil reklamlar yerine test edilebilir kreatif varyasyonları olarak planlarız."],
  ["Kârlılık kontrolü", "ROAS tek başına yeterli değildir; brüt marj, iade, sepet, komisyon ve operasyon maliyetlerini birlikte değerlendiririz."],
];

export default function DigitalAdsPage() {
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("Dijital reklam ve marka pazarlama","Meta, Google ve pazaryeri reklamlarında ölçüm, kreatif ve kârlılık odaklı kampanya yönetimi.","/hizmetler/dijital-reklam"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"Dijital reklam",path:"/hizmetler/dijital-reklam"}])
    ]}/>
    <section className="inner-hero shell services-hero"><p className="section-index">DİJİTAL REKLAM & MARKA PAZARLAMA</p><h1>Daha fazla trafik değil.<br/><em>Daha sağlıklı büyüme.</em></h1><p>Meta, Google ve pazaryeri reklamlarını; ölçüm, kreatif, teklif stratejisi ve gerçek ticari maliyetlerle birlikte yönetiyoruz.</p></section>
    <section className="service-detail-grid shell">{layers.map(item=><article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>Ölçüm ve kârlılık odağı</li></ul></article>)}</section>
    <ServiceEssentials audience={["Reklam bütçesini daha ölçülebilir yönetmek isteyen markalar","Kreatif ve medya satın almayı aynı sistemde ele almak isteyen ekipler","Pazaryeri ve kendi sitesi arasında kanal kârlılığını karşılaştırmak isteyen işletmeler"]} deliverables={["Dönüşüm ve ölçüm planı","Kampanya/kanal mimarisi","Kreatif test çerçevesi","Kârlılık ve optimizasyon raporu"]} process={["Hedef ve veri analizi","Ölçüm doğrulama","Kampanya/kreatif kurulum","Test, raporlama ve optimizasyon"]} fitNote="Yalnızca gösterim veya takipçi sayısını büyütme hedefi yerine, ticari sonuç ve ölçüm disiplinini önemseyen markalar için uygundur."/>
    <section className="service-cta shell"><p className="section-index">REKLAM ANALİZİ</p><h2>Mevcut kampanya yapınızı, ölçümünüzü ve kârlılık varsayımlarınızı birlikte inceleyelim.</h2><a href="/iletisim">Reklam projesini konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}
