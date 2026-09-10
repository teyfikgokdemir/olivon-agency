import type { Metadata } from "next";
import { ArrowUpRight,CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema,serviceSchema } from "@/lib/seo";

export const metadata:Metadata={
  title:"SEO, GEO, AEO & AIO | Google ve AI Arama Görünürlüğü",
  description:"Teknik SEO, içerik mimarisi, entity sinyalleri, yapılandırılmış veri ve konu otoritesiyle Google ve yapay zekâ destekli aramalarda bulunabilirliği güçlendirin.",
  alternates:{canonical:"/hizmetler/seo-geo-aeo-aio"},
  openGraph:{title:"SEO, GEO, AEO & AIO | Olivon",description:"Google ve AI destekli aramalarda daha anlaşılır, taranabilir ve güvenilir dijital varlıklar.",url:"/hizmetler/seo-geo-aeo-aio",type:"website"}
};

const layers=[
  ["Teknik görünürlük","Tarama, indeksleme, performans, semantik HTML, canonical, sitemap ve yapılandırılmış veri katmanını düzenleriz."],
  ["Arama niyeti","İnsanların gerçekten sorduğu soruları, satın alma niyetlerini ve konu kümelerini sayfa mimarisine dönüştürürüz."],
  ["Cevap motorları","İçeriğin Google'ın yanı sıra yapay zekâ destekli arama ve cevap sistemleri tarafından açık biçimde anlaşılmasını hedefleriz."],
  ["Otorite ve kanıt","Marka, hizmet, uzmanlık, referans ve kaynak sinyallerini tutarlı bir entity yapısında birbirine bağlarız."]
];

export default function VisibilityPage(){
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("SEO, GEO, AEO ve AIO","Teknik SEO, içerik mimarisi, yapılandırılmış veri ve yapay zekâ destekli arama görünürlüğü.","/hizmetler/seo-geo-aeo-aio"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"SEO, GEO, AEO & AIO",path:"/hizmetler/seo-geo-aeo-aio"}])
    ]}/>
    <section className="inner-hero shell services-hero">
      <p className="section-index">SEO · GEO · AEO · AIO</p>
      <h1>Arama görünürlüğünden<br/><em>kaynak olarak seçilmeye.</em></h1>
      <p>Markanızın yalnızca bulunmasını değil; Google ve yapay zekâ destekli arama sistemleri tarafından doğru bağlamda anlaşılmasını sağlayan teknik ve içerik temeli kuruyoruz.</p>
    </section>
    <section className="service-detail-grid shell">
      {layers.map(item=><article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>Temel SEO + içerik + kanıt sistemi</li></ul></article>)}
    </section>
    <ServiceEssentials
      audience={["Organik görünürlüğünü büyütmek isteyen markalar","AI destekli aramalarda daha doğru anlaşılmak isteyen işletmeler","Teknik SEO ve içerik yapısı dağınık olan siteler"]}
      deliverables={["Teknik SEO ve indekslenebilirlik denetimi","Arama niyeti ve konu kümesi mimarisi","Schema, entity ve iç link yapısı","Ölçüm ve gelişim öncelikleri"]}
      process={["Teknik ve içerik teşhisi","Arama niyeti haritalama","Uygulama ve içerik üretimi","Search Console/GA4 üzerinden gelişim takibi"]}
      fitNote="Bu çalışma bir 'AI sıralama garantisi' değildir. Temel SEO, erişilebilir içerik, güvenilir marka sinyalleri ve doğrulanabilir kaynak yapısını güçlendirir."
    />
    <section className="service-cta shell"><p className="section-index">GÖRÜNÜRLÜK MİMARİSİ</p><h2>Markanızın bugün nasıl bulunduğunu ve nerede eksik kaldığını birlikte inceleyelim.</h2><a href="/iletisim">Görünürlük analizi konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}