import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "E-Ticaret Ajansı | Kurulum, Entegrasyon & Platform Taşıma",
  description: "ikas, Shopify, WooCommerce, IdeaSoft, Ticimax, T-Soft ve diğer e-ticaret altyapılarında kurulum, platform taşıma, entegrasyon, SEO ve dönüşüm mimarisi.",
  alternates: { canonical: "/hizmetler/e-ticaret" },
  openGraph:{title:"E-Ticaret Sistemleri | Kurulum & Platform Taşıma",description:"Yerli ve global e-ticaret altyapılarında kurulumdan platform geçişine ve satış operasyonuna kadar uçtan uca sistem tasarımı.",url:"/hizmetler/e-ticaret",type:"website"}
};

const layers = [
  ["Altyapı seçimi","İş modeline göre SaaS, açık kaynak veya özel e-ticaret altyapılarını; maliyet, operasyon, entegrasyon ve büyüme hedefleriyle birlikte değerlendiririz."],
  ["Platform taşıma","ikas, Shopify, WooCommerce, IdeaSoft, Ticimax, T-Soft ve benzeri altyapılar arasında geçişi; ürün verisi, kategori yapısı, URL yönlendirmeleri, entegrasyonlar ve yayın kontrolüyle birlikte planlarız."],
  ["Satın alma deneyimi","Kategori, ürün, sepet ve ödeme akışını müşterinin karar vermesini kolaylaştıracak biçimde kurgularız."],
  ["Entegrasyonlar","Ödeme, kargo, ERP ve pazaryeri bağlantılarını operasyonun tek merkezden yönetilebilmesi için planlarız."],
  ["Ölçüm ve gelişim","Yayından sonra dönüşüm, sepet, trafik ve kârlılık verilerini izlenebilir hale getiririz."]
];

const ecommerceFaq = [
  {
    question: "Hangi e-ticaret altyapılarıyla çalışıyorsunuz?",
    answer: "ikas, Shopify, WooCommerce, IdeaSoft, Ticimax ve T-Soft başta olmak üzere PlatinMarket, OpenCart, PrestaShop, Magento/Adobe Commerce ve benzeri sistemlerde proje kapsamını kaynak ve hedef platformun teknik imkânlarına göre değerlendiriyoruz. Özel yazılım veya daha az yaygın altyapılar için önce veri, API ve dışa aktarma olanaklarını inceliyoruz."
  },
  {
    question: "Mevcut e-ticaret altyapımdan başka bir sisteme geçebilir miyim?",
    answer: "Evet. Kaynak ve hedef platformun veri modeli analiz edilerek ürün, kategori, varyant, görsel ve içerik alanları eşleştirilir; SEO açısından eski-yeni URL haritası, gerekli 301 yönlendirmeleri, canonical, sitemap, robots ve index kontrolleri geçiş planına dahil edilir."
  },
  {
    question: "Sadece pazaryerinde satış yapıyorum. Ürünleri kendi web siteme taşıyabilir miyim?",
    answer: "Uygun dışa aktarım, entegrasyon veya veri kaynağı bulunduğunda ürün kataloğu yeni e-ticaret sitesine aktarılabilir. Kendi sitenizde kategori yapısı, ürün içeriği, SEO, marka dili, ödeme, kargo ve ölçüm akışı pazaryerinden bağımsız olarak yeniden kurgulanmalıdır."
  },
  {
    question: "E-ticaret projesinde sadece tasarım mı yapıyorsunuz?",
    answer: "Hayır. Bilgi mimarisi, kategori ve ürün yapısı, mobil satın alma deneyimi, ödeme, kargo, ERP, pazaryeri bağlantıları, temel teknik SEO ve dönüşüm ölçümü aynı proje kapsamı içinde değerlendirilir."
  },
  {
    question: "Mevcut e-ticaret sitesi yeniden yapılandırılabilir mi?",
    answer: "Evet. Mevcut mağaza teknik yapı, kullanıcı yolculuğu, mobil deneyim, entegrasyonlar ve ölçüm açısından incelenir; platform değişimi gerekip gerekmediği teşhis sonrasında belirlenir."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ecommerceFaq.map(item => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function EcommercePage(){return <main className="inner-page services-page ecommerce-page">
<StructuredData data={[
  serviceSchema("E-ticaret sistemleri","Yerli ve global e-ticaret altyapılarında kurulum, platform taşıma, entegrasyon ve dönüşüm hizmetleri.","/hizmetler/e-ticaret"),
  breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"E-ticaret",path:"/hizmetler/e-ticaret"}]),
  faqSchema
]} />
<style>{`
  @media(min-width:1200px){
    .ecommerce-page .service-essentials-head{
      display:flex!important;
      flex-direction:column!important;
      align-items:center!important;
      justify-content:center!important;
      width:100%!important;
      max-width:1700px!important;
      margin:0 auto!important;
      text-align:center!important;
      gap:0!important;
    }
    .ecommerce-page .service-essentials-head .section-index{
      display:block!important;
      width:auto!important;
      margin:0 0 24px!important;
      text-align:center!important;
    }
    .ecommerce-page .service-essentials-head h2{
      display:block!important;
      width:auto!important;
      max-width:1500px!important;
      margin:0 auto!important;
      padding:0!important;
      align-self:center!important;
      font-size:clamp(38px,2.75vw,50px)!important;
      line-height:1.02!important;
      letter-spacing:-.045em!important;
      text-align:center!important;
      white-space:nowrap!important;
      text-wrap:nowrap!important;
    }
    .ecommerce-page .service-essentials-head>p:last-child{
      width:auto!important;
      margin:26px auto 0!important;
      font-size:clamp(16px,1.02vw,19px)!important;
      line-height:1.5!important;
      text-align:center!important;
      text-wrap:balance!important;
    }
    .ecommerce-page .service-detail-grid + .service-essentials .service-essentials-head>p:last-child,
    .ecommerce-page #ecommerce-answers-title + p{
      max-width:none!important;
      white-space:nowrap!important;
      text-wrap:nowrap!important;
    }
    .ecommerce-page #platform-migration-title + p{
      max-width:1540px!important;
      white-space:normal!important;
      text-wrap:balance!important;
    }
  }
`}</style>
<section className="inner-hero shell services-hero"><p className="section-index">E-TİCARET SİSTEMLERİ</p><h1>Mağaza kurmak değil,<br/><em>satın alma sistemi kurmak.</em></h1><p>Yerli ve global e-ticaret altyapılarında vitrini, operasyonu, entegrasyonları, platform geçişini ve ölçümü aynı ticari sistem içinde ele alıyoruz.</p></section>
<section className="service-detail-grid shell">{layers.map(item=><article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>SaaS · açık kaynak · özel altyapılar</li></ul></article>)}</section>
<ServiceEssentials audience={["Yeni e-ticaret mağazası kuracak markalar","Mevcut mağazasını yeniden yapılandıracak ekipler","Farklı bir e-ticaret altyapısına geçiş planlayan markalar","Pazaryeri bağımlılığını azaltıp kendi satış kanalını kurmak isteyen işletmeler"]} deliverables={["Platform ve bilgi mimarisi","Kategori/ürün ve satın alma akışı","Platform taşıma ve veri eşleştirme planı","Ödeme, kargo, ERP ve pazaryeri entegrasyon planı","GA4 ve temel dönüşüm ölçümü"]} process={["Teşhis ve platform kararı","Mimari, tasarım ve içerik","Geliştirme, veri taşıma ve entegrasyon","Test, yayın ve gelişim planı"]} fitNote="En ucuz paketi değil; satış operasyonu, platform mimarisi ve müşteri deneyimini birlikte geliştirmek isteyen markalar için uygundur."/>
<section className="service-essentials shell" aria-labelledby="platform-migration-title">
  <div className="service-essentials-head">
    <p className="section-index">PLATFORM DEĞİŞİMİ</p>
    <h2 id="platform-migration-title">Altyapınız ne olursa olsun, kontrollü geçiş.</h2>
    <p>ikas, Shopify, WooCommerce, IdeaSoft, Ticimax, T-Soft ve diğer e-ticaret sistemleri arasında geçişi yalnızca ürünleri içe aktarmak olarak görmüyoruz. Veri bütünlüğü, eski ve yeni URL’ler, organik görünürlük, ödeme ve kargo akışları, entegrasyonlar ve yayın sonrası kontroller aynı geçiş planının parçalarıdır.</p>
  </div>
  <div className="service-duration"><strong>Özel hizmet:</strong> Veri, SEO ve entegrasyon katmanlarını içeren kapsamlı geçiş modeli için <a href="/hizmetler/platform-tasima">e-ticaret platform taşıma hizmetini</a> inceleyin.</div>
</section>
<section className="service-essentials shell" aria-labelledby="ecommerce-answers-title">
  <div className="service-essentials-head">
    <p className="section-index">E-TİCARET KARARLARI</p>
    <h2 id="ecommerce-answers-title">Altyapı kararını görünümün ötesinde ele alıyoruz.</h2>
    <p>Platform seçimi, taşıma planı, mobil UX, entegrasyon ve ölçüm birlikte düşünülmediğinde mağaza çalışır görünse bile operasyon ve dönüşüm tarafında sınır oluşabilir.</p>
  </div>
  <div className="service-essentials-grid">
    {ecommerceFaq.map(item => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
  </div>
  <p className="service-duration"><strong>İlgili çalışmalar:</strong> platform değişimi için <a href="/hizmetler/platform-tasima">e-ticaret platform taşıma</a>, ikas projeleri için <a href="/ikas">ikas kurulum ve destek</a>, marka deneyimi için <a href="/hizmetler/web-tasarim">web tasarım ve geliştirme</a>, yayınlanmış örnekler için <a href="/referanslar">vaka çalışmalarını</a> inceleyebilirsiniz.</p>
</section>
<section className="service-cta shell"><p className="section-index">TİCARET MİMARİSİ</p><h2>Altyapınızı satış hedefiniz ve operasyonunuzla birlikte değerlendirelim.</h2><a href="/iletisim">E-ticaret projesini konuşalım <ArrowUpRight size={18}/></a></section><SiteFooter/></main>}
