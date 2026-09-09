import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "SEO, GEO, AEO & AIO Danışmanlığı",
  description: "Google aramalarından yapay zekâ cevap motorlarına kadar markanızın bulunabilirliğini ve doğru anlaşılmasını güçlendiren teknik SEO, GEO, AEO ve AIO çalışmaları.",
  alternates: { canonical: "/hizmetler/seo-geo-aeo-aio" },
};

const layers = [
  ["Teknik temel", "Tarama, indeksleme, performans, semantik HTML, canonical, sitemap ve yapılandırılmış veri katmanını düzenleriz."],
  ["Arama niyeti", "İnsanların gerçekten sorduğu soruları, satın alma niyetlerini ve konu kümelerini sayfa mimarisine dönüştürürüz."],
  ["Cevap motorları", "İçeriğin Google'ın yanı sıra yapay zekâ destekli arama ve cevap sistemleri tarafından açık biçimde anlaşılmasını hedefleriz."],
  ["Otorite & kanıt", "Marka, hizmet, uzmanlık ve referans sinyallerini tutarlı bir entity yapısında birbirine bağlarız."],
];

export default function VisibilityPage() {
  return <main className="inner-page services-page">
    <header className="inner-nav shell"><Link className="brand" href="/"><span className="brand-mark">O</span><span>OLIVON</span></Link><Link href="/hizmetler">Tüm hizmetler</Link></header>
    <section className="inner-hero shell services-hero">
      <p className="section-index">SEO · GEO · AEO · AIO</p>
      <h1>Aranmak yetmez.<br /><em>Doğru kaynak olarak anlaşılmak gerekir.</em></h1>
      <p>Arama motorlarında, yerel sonuçlarda ve yapay zekâ destekli cevap sistemlerinde markanızın ne yaptığını açık, tutarlı ve doğrulanabilir hale getiriyoruz.</p>
    </section>
    <section className="service-detail-grid shell">
      {layers.map((item,index)=><article className="service-detail-card" key={item[0]}><span>{String(index+1).padStart(2,"0")}</span><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>Ölçülebilir ve sürdürülebilir yapı</li></ul></article>)}
    </section>
    <section className="service-cta shell"><p className="section-index">GÖRÜNÜRLÜK MİMARİSİ</p><h2>Markanızın bugün nasıl bulunduğunu ve nerede eksik kaldığını birlikte inceleyelim.</h2><a href="mailto:info@olivon.com.tr">Görünürlük analizi konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter />
  </main>;
}
