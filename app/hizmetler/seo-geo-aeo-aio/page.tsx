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

const answers=[
  ["SEO, GEO, AEO ve AIO arasındaki fark nedir?","SEO organik arama görünürlüğünü; GEO üretken yapay zekâ sistemlerinde kaynak olma ihtimalini; AEO doğrudan cevap üretilebilen içerik yapısını; AIO ise AI destekli keşif ve içerik anlaşılabilirliğini birlikte ele alır."],
  ["Yapay zekâ aramalarında görünürlük garanti edilir mi?","Hayır. Hiçbir ajans belirli bir yapay zekâ cevabında veya sıralamada yer almayı garanti edemez. Biz teknik erişilebilirliği, açık entity ilişkilerini, doğrulanabilir kanıtları ve kaynak değeri yüksek içerikleri güçlendiririz."],
  ["Çalışma yalnızca içerik üretmekten mi oluşur?","Hayır. Teknik SEO, bilgi mimarisi, schema, iç linkleme, sayfa deneyimi, konu kümeleri, marka sinyalleri ve ölçüm birlikte ele alınır. İçerik bu sistemin yalnızca bir katmanıdır."],
  ["Sonuçlar nasıl ölçülür?","Google Search Console ve GA4 üzerinden organik sorgular, görünürlük, tıklama ve dönüşüm sinyalleri izlenir; AI görünürlüğü ise kaynak atıfları, marka sorguları ve ilgili cevap yüzeylerinde düzenli gözlemle takip edilir."]
];

const faqSchema={
  "@context":"https://schema.org",
  "@type":"FAQPage",
  mainEntity:answers.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))
};

export default function VisibilityPage(){
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("SEO, GEO, AEO ve AIO","Teknik SEO, içerik mimarisi, yapılandırılmış veri ve yapay zekâ destekli arama görünürlüğü.","/hizmetler/seo-geo-aeo-aio"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"SEO, GEO, AEO & AIO",path:"/hizmetler/seo-geo-aeo-aio"}]),
      faqSchema
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
    <section className="service-essentials shell" aria-labelledby="visibility-answers-title">
      <div className="service-essentials-head">
        <div><p className="section-index">SIK SORULANLAR</p><h2 id="visibility-answers-title">Arama ve AI görünürlüğü hakkında net cevaplar.</h2></div>
        <p>İçeriği anahtar kelime tekrarına boğmak yerine, kullanıcıların gerçek sorularını açık ve doğrulanabilir cevaplarla ele alıyoruz. İlgili teknik ihtiyaçlar için <a href="/hizmetler/web-tasarim">web tasarım</a> ve <a href="/hizmetler/e-ticaret">e-ticaret</a> altyapısını da aynı sistem içinde değerlendiriyoruz.</p>
      </div>
      <div className="service-essentials-grid">
        {answers.map(([question,answer])=><article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
      </div>
    </section>
    <section className="service-cta shell"><p className="section-index">GÖRÜNÜRLÜK MİMARİSİ</p><h2>Markanızın bugün nasıl bulunduğunu ve nerede eksik kaldığını birlikte inceleyelim.</h2><a href="/iletisim">Görünürlük analizi konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}