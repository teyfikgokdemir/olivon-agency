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

const layers = [
  ["Altyapı seçimi","İş modeline göre Shopify, ikas veya WooCommerce seçimini; maliyet, operasyon ve büyüme hedefleriyle birlikte değerlendiririz."],
  ["Satın alma deneyimi","Kategori, ürün, sepet ve ödeme akışını müşterinin karar vermesini kolaylaştıracak biçimde kurgularız."],
  ["Entegrasyonlar","Ödeme, kargo, ERP ve pazaryeri bağlantılarını operasyonun tek merkezden yönetilebilmesi için planlarız."],
  ["Ölçüm ve gelişim","Yayından sonra dönüşüm, sepet, trafik ve kârlılık verilerini izlenebilir hale getiririz."]
];

const ecommerceFaq = [
  {
    question: "Shopify, ikas ve WooCommerce arasında nasıl seçim yapılır?",
    answer: "Doğru platform; ürün sayısı, operasyon ekibi, entegrasyon ihtiyacı, toplam sahip olma maliyeti, içerik yönetimi ve büyüme planına göre seçilir. Tek başına tema görünümü veya aylık paket fiyatı sağlıklı karar vermek için yeterli değildir."
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

export default function EcommercePage(){return <main className="inner-page services-page">
<StructuredData data={[
  serviceSchema("E-ticaret sistemleri","Shopify, ikas ve WooCommerce kurulum, entegrasyon ve dönüşüm hizmetleri.","/hizmetler/e-ticaret"),
  breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"E-ticaret",path:"/hizmetler/e-ticaret"}]),
  faqSchema
]} />
<section className="inner-hero shell services-hero"><p className="section-index">E-TİCARET SİSTEMLERİ</p><h1>Mağaza kurmak değil,<br/><em>satın alma sistemi kurmak.</em></h1><p>Shopify, ikas ve WooCommerce projelerinde vitrini, operasyonu, entegrasyonları ve ölçümü aynı ticari sistem içinde ele alıyoruz.</p></section>
<section className="service-detail-grid shell">{layers.map(item=><article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>Shopify · ikas · WooCommerce</li></ul></article>)}</section>
<ServiceEssentials audience={["Yeni e-ticaret mağazası kuracak markalar","Mevcut mağazasını yeniden yapılandıracak ekipler","Pazaryeri bağımlılığını azaltmak isteyen işletmeler"]} deliverables={["Platform ve bilgi mimarisi","Kategori/ürün ve satın alma akışı","Ödeme, kargo, ERP ve pazaryeri entegrasyon planı","GA4 ve temel dönüşüm ölçümü"]} process={["Teşhis ve platform kararı","Mimari, tasarım ve içerik","Geliştirme ve entegrasyon","Test, yayın ve gelişim planı"]} fitNote="Sadece en ucuz paket fiyatını arayan projelerden çok, satış operasyonunu ve müşteri deneyimini birlikte geliştirmek isteyen markalar için uygundur."/>
<section className="service-essentials shell" aria-labelledby="ecommerce-answers-title">
  <div className="service-essentials-head">
    <p className="section-index">E-TİCARET KARARLARI</p>
    <h2 id="ecommerce-answers-title">Altyapı kararını tema görünümünden daha derinde ele alıyoruz.</h2>
    <p>Platform seçimi, mobil UX, entegrasyon ve ölçüm birlikte düşünülmediğinde mağaza çalışır görünse bile operasyon ve dönüşüm tarafında hızla sınır oluşabilir.</p>
  </div>
  <div className="service-essentials-grid">
    {ecommerceFaq.map(item => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
  </div>
  <p className="service-duration"><strong>İlgili çalışmalar:</strong> ikas projeleri için <a href="/ikas">ikas kurulum ve destek</a>, marka deneyimi için <a href="/hizmetler/web-tasarim">web tasarım ve geliştirme</a>, yayınlanmış örnekler için <a href="/referanslar">vaka çalışmalarını</a> inceleyebilirsiniz.</p>
</section>
<section className="service-cta shell"><p className="section-index">TİCARET MİMARİSİ</p><h2>Altyapınızı satış hedefiniz ve operasyonunuzla birlikte değerlendirelim.</h2><a href="/iletisim">E-ticaret projesini konuşalım <ArrowUpRight size={18}/></a></section><SiteFooter/></main>}
