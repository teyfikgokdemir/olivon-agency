import type { Metadata } from "next";
import { ArrowUpRight,CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema,serviceSchema } from "@/lib/seo";

export const metadata:Metadata={
  title:"Web Tasarım Ajansı | Kurumsal Web & Dönüşüm Odaklı Geliştirme",
  description:"Kurumsal web sitesi, landing page, mobil UX, Core Web Vitals, teknik SEO ve dönüşüm odaklı özel web tasarım ve geliştirme hizmetleri.",
  alternates:{canonical:"/hizmetler/web-tasarim"},
  openGraph:{title:"Web Tasarım & Geliştirme | Olivon",description:"Marka algısı, mobil deneyim, performans ve dönüşümü aynı web sisteminde birleştiren özel web projeleri.",url:"/hizmetler/web-tasarim",type:"website"}
};

const layers=[
  ["Marka deneyimi","Hazır kalıp estetiği yerine markanın konumu, müşterisi ve ticari hedefinden çıkan özgün bir arayüz dili kurarız."],
  ["Mobil öncelik","Mobil deneyimi masaüstünün küçültülmüş kopyası olarak değil; 360–430 px ekranlarda okunabilirlik, dokunma alanları ve içerik önceliğiyle ayrı ele alırız."],
  ["Performans","Core Web Vitals, görsel optimizasyonu, kod yükü, font kullanımı ve teknik mimariyi kullanıcı deneyiminin parçası kabul ederiz."],
  ["Dönüşüm","CTA, içerik hiyerarşisi, güven sinyalleri ve kullanıcı yolculuğunu ziyaretçiyi doğru aksiyona taşıyacak şekilde kurgularız."]
];

const faq=[
  ["Kurumsal web sitesi ile hazır tema arasındaki fark nedir?","Hazır tema, mevcut bir görsel ve teknik iskeletin uyarlanmasıdır. Özel web projesinde bilgi mimarisi, mobil davranış, içerik hiyerarşisi, performans ve dönüşüm akışı markanın hedeflerine göre birlikte tasarlanır."],
  ["Mobil uyumluluk projede nasıl ele alınıyor?","Mobil görünüm sonradan küçültülen bir masaüstü tasarımı değildir. Başlık kırılımları, kart yüksekliği, menü, CTA, görsel oranı ve dokunma alanları küçük ekranlarda ayrı test edilir."],
  ["Web tasarım teknik SEO'yu da kapsıyor mu?","Temel teknik SEO; semantik HTML, heading hiyerarşisi, metadata, canonical, sitemap, performans ve yapılandırılmış veri hazırlığını kapsar. Daha derin içerik ve arama görünürlüğü çalışmaları SEO, GEO, AEO ve AIO hizmetiyle genişletilir."],
  ["E-ticaret sitesi de geliştiriyor musunuz?","Evet. Shopify, ikas ve WooCommerce projelerinde web deneyimini ödeme, ürün, kategori ve entegrasyon mimarisiyle birlikte ele alıyoruz."]
];

const faqSchema={
  "@context":"https://schema.org",
  "@type":"FAQPage",
  mainEntity:faq.map(([question,answer])=>({
    "@type":"Question",
    name:question,
    acceptedAnswer:{"@type":"Answer",text:answer}
  }))
};

export default function WebDesignPage(){
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("Web tasarım ve geliştirme","Kurumsal web, landing page, mobil UX, Core Web Vitals, teknik SEO ve dönüşüm odaklı geliştirme.","/hizmetler/web-tasarim"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"Web tasarım",path:"/hizmetler/web-tasarim"}]),
      faqSchema
    ]}/>

    <section className="inner-hero shell services-hero">
      <p className="section-index">WEB TASARIM VE GELİŞTİRME</p>
      <h1>İyi görünmek başlangıç.<br/><em>İyi çalışmak standart.</em></h1>
      <p>Marka algısı, mobil deneyim, performans, erişilebilirlik, teknik SEO ve dönüşümü aynı web sisteminde birleştiriyoruz.</p>
    </section>

    <section className="service-detail-grid shell">
      {layers.map(item=><article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>Tasarım ve teknoloji tek süreçte</li></ul></article>)}
    </section>

    <ServiceEssentials
      audience={["Kurumsal algısını yenilemek isteyen markalar","Daha hızlı ve mobilde güçlü bir site isteyen ekipler","Lead ve satış odaklı landing page ihtiyacı olan işletmeler"]}
      deliverables={["Bilgi mimarisi ve içerik hiyerarşisi","Özgün responsive arayüz","Core Web Vitals ve teknik SEO temeli","CTA ve GA4 dönüşüm ölçüm yapısı"]}
      process={["İçerik ve hedef analizi","UX/UI tasarım","Frontend geliştirme","Mobil, performans ve yayın testleri"]}
      fitNote="Hazır tema üzerinde yalnızca görsel rötuş isteyen projeler yerine, marka ve ticari hedefe göre yeniden düşünülmesi gereken web deneyimleri için tasarlanmıştır."
    />

    <section className="service-essentials shell" aria-labelledby="web-faq-title">
      <div className="service-essentials-head">
        <p className="section-index">SIK SORULANLAR</p>
        <h2 id="web-faq-title">Web projesine başlamadan önce bilinmesi gerekenler.</h2>
        <p>Arayüz, performans ve görünürlük kararlarını proje başında birlikte ele alıyoruz.</p>
      </div>
      <div className="service-essentials-grid">
        {faq.slice(0,3).map(([question,answer])=><article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
      </div>
      <p className="service-duration"><strong>E-ticaret veya görünürlük ihtiyacı varsa:</strong> <a href="/hizmetler/e-ticaret">E-ticaret sistemleri</a> ve <a href="/hizmetler/seo-geo-aeo-aio">SEO, GEO, AEO & AIO</a> çalışmalarını aynı proje mimarisine bağlayabiliyoruz. Yayınlanmış işleri <a href="/referanslar">vaka çalışmalarında</a> inceleyebilirsiniz.</p>
    </section>

    <section className="service-cta shell"><p className="section-index">DİJİTAL DENEYİM</p><h2>Markanızın web deneyimini daha güçlü bir sisteme dönüştürelim.</h2><a href="/iletisim">Web projesini konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}
