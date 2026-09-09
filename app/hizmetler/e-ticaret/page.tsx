import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "E-Ticaret Sistemleri | Shopify, ikas & WooCommerce",
  description: "Shopify, ikas ve WooCommerce için mağaza kurulumu, dönüşüm mimarisi, ödeme, kargo, ERP ve pazaryeri entegrasyonları.",
  alternates: { canonical: "/hizmetler/e-ticaret" },
};

const layers = [
  ["Altyapı seçimi", "İş modeline göre Shopify, ikas veya WooCommerce seçimini; maliyet, operasyon ve büyüme hedefleriyle birlikte değerlendiririz."],
  ["Satın alma deneyimi", "Kategori, ürün, sepet ve ödeme akışını müşterinin karar vermesini kolaylaştıracak biçimde kurgularız."],
  ["Entegrasyonlar", "Ödeme, kargo, ERP ve pazaryeri bağlantılarını operasyonun tek merkezden yönetilebilmesi için planlarız."],
  ["Ölçüm & gelişim", "Yayından sonra dönüşüm, sepet, trafik ve kârlılık verilerini izlenebilir hale getiririz."],
];

export default function EcommercePage(){return <main className="inner-page services-page">
<header className="inner-nav shell"><Link className="brand" href="/"><span className="brand-mark">O</span><span>OLIVON</span></Link><Link href="/hizmetler">Tüm hizmetler</Link></header>
<section className="inner-hero shell services-hero"><p className="section-index">E-TİCARET SİSTEMLERİ</p><h1>Mağaza kurmak değil,<br/><em>satın alma sistemi kurmak.</em></h1><p>Teknolojiyi vitrinden operasyona kadar aynı ticari hedef etrafında topluyoruz.</p></section>
<section className="service-detail-grid shell">{layers.map((item,index)=><article className="service-detail-card" key={item[0]}><span>{String(index+1).padStart(2,"0")}</span><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>Shopify · ikas · WooCommerce</li></ul></article>)}</section>
<section className="service-cta shell"><p className="section-index">TİCARET MİMARİSİ</p><h2>Altyapınızı satış hedefiniz ve operasyonunuzla birlikte değerlendirelim.</h2><a href="mailto:info@olivon.com.tr">E-ticaret projesini konuşalım <ArrowUpRight size={18}/></a></section><SiteFooter/></main>}
