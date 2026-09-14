import type { Metadata } from "next";
import { ArrowUpRight,CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema,serviceSchema } from "@/lib/seo";

export const metadata:Metadata={
  title:"ikas Partner Hizmetleri | Kurulum, Tasarım, Entegrasyon & Destek",
  description:"ikas mağaza kurulumu, tema düzenleme, ürün-kategori, sanal POS, kargo, pazaryeri, ERP, e-ihracat, görsel destek ve check-up hizmetleri.",
  alternates:{canonical:"/ikas"},
  openGraph:{title:"ikas Kurulum & Destek | Olivon",description:"Yeni veya mevcut ikas mağazanızı stratejiden entegrasyona satışa hazır hale getirin.",url:"/ikas",type:"website"}
};

const services=[
  {slug:"strateji",title:"Strateji",text:"Ürün, hedef kitle, kategori yapısı ve satış hedeflerine göre ikas yol haritasını çıkarırız."},
  {slug:"gorsel-destek",title:"Görsel destek",text:"Ürün görseli, slider, banner ve kampanya tasarımlarını kurumsal kimliğe uygun şekilde yayına alırız."},
  {slug:"kargo-entegrasyonu",title:"Kargo entegrasyonu",text:"Çalışacağınız kargo şirketleriyle sipariş akışını hızlı ve güvenli çalışacak şekilde bağlarız."},
  {slug:"e-ihracat-cozumleri",title:"E-ihracat çözümleri",text:"Yurt dışı satış planı, dil ve para birimi, lojistik ve pazaryeri adımlarını kurgularız."},
  {slug:"front-end-back-end",title:"Front-end & back-end",text:"Tema düzenleme, özel alanlar, performans ve ihtiyaç duyulan teknik geliştirmeleri tamamlarız."},
  {slug:"sabit-sayfalar",title:"Sabit sayfalar",text:"Hakkımızda, iletişim, sözleşmeler, SSS, kampanya ve landing page içeriklerini hazırlarız."},
  {slug:"sanal-pos-entegrasyonu",title:"Sanal POS entegrasyonu",text:"Banka veya ödeme altyapılarıyla ödeme alma süreçlerini doğru şekilde yapılandırırız."},
  {slug:"ikas-check-up",title:"ikas check-up",text:"Mevcut mağazanızı teknik, içerik, UX ve satış akışı açısından analiz ederek uygulanabilir iyileştirme planı çıkarırız."},
  {slug:"kategori-urun-girisi",title:"Kategori & ürün girişi",text:"Kategori ağacı, ürün içeriği ve SEO uyumlu yayına alma sürecini yönetiriz."},
  {slug:"pazaryeri-entegrasyonu",title:"Pazaryeri entegrasyonu",text:"Trendyol, Hepsiburada, N11, Amazon, Beymen, Çiçeksepeti, Pazarama ve Etsy bağlantılarını planlarız."},
  {slug:"erp-entegrasyonu",title:"ERP entegrasyonu",text:"E-ticaret altyapınız, stok, muhasebe ve pazaryeri operasyonlarınız arasında sağlıklı veri akışı kurarız."},
  {slug:"tema-satis-optimizasyonu",title:"Tema & satış optimizasyonu",text:"Tema, kampanya alanları, ürün vitrinleri ve satın alma akışını satışa hazır hale getiririz."},
];

export default function IkasPage(){
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("ikas kurulum ve destek","ikas mağaza kurulumu, tema, ürün-kategori, POS, kargo, ERP, pazaryeri ve e-ihracat desteği.","/ikas"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"ikas",path:"/ikas"}])
    ]}/>
    <style>{`
      @media(min-width:1001px){
        .ikas-final-cta{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important}
        .ikas-final-cta .section-index{text-align:center!important}
        .ikas-final-cta h2{width:auto!important;max-width:100%!important;margin:16px auto 24px!important;font-size:clamp(32px,2.2vw,40px)!important;line-height:1.05!important;text-align:center!important;white-space:nowrap!important;text-wrap:nowrap!important}
      }
    `}</style>
    <section className="inner-hero shell services-hero"><p className="section-index">OLIVON × İKAS</p><h1>ikas mağazanızı kurmuyoruz sadece.<br/><em>Satışa hazır hale getiriyoruz.</em></h1><p>Yeni kurulumdan mevcut mağaza check-up’ına; ürün yapısı, görsel, entegrasyon ve operasyon tarafını birlikte ele alıyoruz.</p></section>
    <section className="service-detail-grid shell">{services.map(service=><article className="service-detail-card" id={service.slug} key={service.slug}><h2>{service.title}</h2><p>{service.text}</p><ul><li><CheckCircle2 size={16}/>ikas proje kapsamına göre uygulanır</li></ul></article>)}</section>
    <ServiceEssentials
      audience={["Yeni ikas mağazası kuracak markalar","Mevcut ikas mağazasını yeniden düzenleyecek işletmeler","POS, kargo, ERP veya pazaryeri entegrasyonu ihtiyacı olan ekipler"]}
      deliverables={["Kurulum ve tema düzeni","Ürün/kategori ve sabit sayfa yapısı","POS, kargo, ERP ve pazaryeri entegrasyon planı","Check-up ve iyileştirme listesi"]}
      process={["İhtiyaç ve operasyon analizi","Mağaza mimarisi ve içerik","Kurulum/entegrasyon","Test, yayın ve destek planı"]}
      fitNote="Kapsam; ürün hacmi, entegrasyon sayısı ve özel geliştirme ihtiyacına göre belirlenir. Tek paket yerine açık teslim listesiyle ilerleriz."
    />
    <section className="service-cta shell ikas-final-cta"><p className="section-index">İKAS PROJENİZ</p><h2>Yeni mağaza veya check-up için doğru kapsamı çıkaralım.</h2><a href="/iletisim">ikas projesini konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}