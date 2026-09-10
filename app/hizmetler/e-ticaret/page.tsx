import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "E-Ticaret Ajansı | Shopify, ikas & WooCommerce Kurulum",
  description: "Shopify, ikas ve WooCommerce mağaza kurulumu; kategori, ürün, ödeme, kargo, ERP, pazaryeri, ölçüm ve dönüşüm mimarisi için uçtan uca e-ticaret hizmeti.",
  alternates: { canonical: "/hizmetler/e-ticaret" },
  openGraph:{title:"E-Ticaret Sistemleri | Shopify, ikas & WooCommerce",description:"Kurulumdan satış operasyonuna kadar e-ticaret sistemi tasarımı.",url:"/hizmetler/e-ticaret",type:"website"}
};
const layers=[["Altyapı seçimi","İş modeline göre Shopify, ikas veya WooCommerce seçimini; maliyet, operasyon ve büyüme hedefleriyle birlikte değerlendiririz."],["Satın alma deneyimi","Kategori, ürün, sepet ve ödeme akışını müşterinin karar vermesini kolaylaştıracak biçimde kurgularız."],["Entegrasyonlar","Ödeme, kargo, ERP ve pazaryeri bağlantılarını operasyonun tek merkezden yönetilebilmesi için planlarız."],["Ölçüm ve gelişim","Yayından sonra dönüşüm, sepet, trafik ve kârlılık verilerini izlenebilir hale getiririz."]];
export default function EcommercePage(){return <main className="inner-page services-page">
<StructuredData data={[serviceSchema("E-ticaret sistemleri","Shopify, ikas ve WooCommerce kurulum, entegrasyon ve dönüşüm hizmetleri.","/hizmetler/e-ticaret"),breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"E-ticaret",path:"/hizmetler/e-ticaret"}])]} />
<section className="inner-hero shell services-hero"><p className="section-index">E-TİCARET SİSTEMLERİ</p><h1>Mağaza kurmak değil,<br/><em>satın alma sistemi kurmak.</em></h1><p>Shopify, ikas ve WooCommerce projelerinde vitrini, operasyonu, entegrasyonları ve ölçümü aynı ticari sistem içinde ele alıyoruz.</p></section>
<section className="service-detail-grid shell">{layers.map(item=><article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>Shopify · ikas · WooCommerce</li></ul></article>)}</section>
<ServiceEssentials audience={["Yeni e-ticaret mağazası kuracak markalar","Mevcut mağazasını yeniden yapılandıracak ekipler","Pazaryeri bağımlılığını azaltmak isteyen işletmeler"]} deliverables={["Platform ve bilgi mimarisi","Kategori/ürün ve satın alma akışı","Ödeme, kargo, ERP ve pazaryeri entegrasyon planı","GA4 ve temel dönüşüm ölçümü"]} process={["Teşhis ve platform kararı","Mimari, tasarım ve içerik","Geliştirme ve entegrasyon","Test, yayın ve gelişim planı"]} fitNote="Sadece en ucuz paket fiyatını arayan projelerden çok, satış operasyonunu ve müşteri deneyimini birlikte geliştirmek isteyen markalar için uygundur."/>
<section className="service-cta shell"><p className="section-index">TİCARET MİMARİSİ</p><h2>Altyapınızı satış hedefiniz ve operasyonunuzla birlikte değerlendirelim.</h2><a href="/iletisim">E-ticaret projesini konuşalım <ArrowUpRight size={18}/></a></section><SiteFooter/></main>}