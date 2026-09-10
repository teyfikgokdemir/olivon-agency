import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fiyatlandırma & Çalışma Modeli",
  description: "Olivon web, e-ticaret, ikas, SEO ve dijital büyüme projelerinde fiyatlandırmanın nasıl belirlendiğini, kapsam seviyelerini ve teklif sürecini inceleyin.",
  alternates: { canonical: "/fiyatlandirma" },
};

const models=[
  ["Check-up & analiz","Mevcut site, mağaza veya görünürlük yapısındaki sorunları ve öncelikleri belirlemek isteyen markalar için.","Analiz raporu","Önceliklendirilmiş aksiyon listesi","Uygulama yol haritası"],
  ["Kurulum & yeniden yapılandırma","Yeni bir web/e-ticaret sistemi kurmak veya mevcut yapıyı kapsamlı biçimde yenilemek isteyen markalar için.","Strateji ve mimari","Tasarım/geliştirme","Entegrasyon ve yayına alma"],
  ["Sürekli büyüme & destek","Yayındaki sistemini düzenli geliştirmek, ölçmek ve operasyonel desteği sürdürmek isteyen markalar için.","Periyodik iyileştirme","Teknik ve içerik desteği","Ölçüm ve önceliklendirme"],
];

export default function PricingPage(){
 const schema={"@context":"https://schema.org","@type":"WebPage",name:"Olivon Fiyatlandırma ve Çalışma Modeli",url:`${SITE_URL}/fiyatlandirma`};
 return <main className="inner-page pricing-page">
  <StructuredData data={[schema,breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Fiyatlandırma",path:"/fiyatlandirma"}])]} />
  <section className="inner-hero shell pricing-hero"><p className="section-index">FİYATLANDIRMA & ÇALIŞMA MODELİ</p><h1>Tek paket fiyat değil.<br/><em>Net kapsam, net teklif.</em></h1><p>E-ticaret entegrasyon sayısı, içerik hacmi, özel geliştirme, ürün/kategori yapısı ve mevcut altyapının durumu proje maliyetini doğrudan değiştirir. Bu nedenle gerçek ihtiyacı görmeden yanıltıcı sabit fiyat yayınlamıyoruz.</p></section>
  <section className="pricing-models shell">{models.map((m,i)=><article key={m[0]}><span>{String(i+1).padStart(2,"0")}</span><h2>{m[0]}</h2><p>{m[1]}</p><ul>{m.slice(2).map(x=><li key={x}><CheckCircle2 size={16}/>{x}</li>)}</ul></article>)}</section>
  <section className="pricing-clarity shell"><div><p className="section-index">TEKLİF NASIL OLUŞUR?</p><h2>Fiyatı belirleyen unsurları baştan görünür hale getiriyoruz.</h2></div><div className="pricing-factors"><span>Sayfa ve şablon sayısı</span><span>Ürün/kategori hacmi</span><span>Özel tasarım seviyesi</span><span>Kargo, POS, ERP ve pazaryeri entegrasyonları</span><span>İçerik ve görsel üretim ihtiyacı</span><span>SEO ve ölçüm kapsamı</span><span>Çoklu dil / e-ihracat</span><span>Bakım ve sürekli destek</span></div></section>
  <section className="pricing-note shell"><strong>Neden rakam yazmıyoruz?</strong><p>Bir kurumsal landing page ile çoklu entegrasyon içeren e-ticaret dönüşüm projesini aynı “başlangıç fiyatı” altında göstermek şeffaf değildir. İlk görüşmeden sonra teslim kapsamı, varsayımlar, hariç tutulan işler ve takvimle birlikte teklif sunuyoruz.</p></section>
  <section className="service-cta shell"><p className="section-index">KAPSAM ÇIKARALIM</p><h2>İhtiyacınızı paylaşın; hangi çalışma modelinin doğru olduğunu birlikte belirleyelim.</h2><a href="/iletisim">Proje briefini gönderin <ArrowUpRight size={18}/></a></section>
  <SiteFooter/>
 </main>;
}
