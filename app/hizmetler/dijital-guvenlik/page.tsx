import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dijital Güvenlik | Cloudflare, WAF, DDoS & Bot Koruması",
  description: "Cloudflare, WAF, DDoS koruması, bot yönetimi, erişim politikaları, SSL ve izleme katmanlarıyla web ve e-ticaret altyapınızı güçlendirin.",
  alternates: { canonical: "/hizmetler/dijital-guvenlik" },
  openGraph: { title: "Web & E-Ticaret Güvenliği | Olivon", description: "Satış sürekliliğini koruyan Cloudflare odaklı güvenlik ve trafik yönetimi.", url: "/hizmetler/dijital-guvenlik", type: "website" },
};

const layers = [
  ["Saldırı yüzeyi", "Gereksiz açıkları, yönetim erişimlerini, eski bileşenleri ve riskli trafik yüzeylerini azaltmaya odaklanırız."],
  ["WAF & DDoS", "Cloudflare güvenlik katmanlarını uygulamanın gerçek trafik ve iş modeline göre yapılandırırız."],
  ["Bot & erişim", "Bot kontrolü, hız sınırlama ve gerektiğinde rol, IP veya Zero Trust erişim politikalarını planlarız."],
  ["İzleme & süreklilik", "Yedekleme, olay görünürlüğü, kritik yönlendirmeler ve temel geri dönüş senaryolarını çalışma planına dahil ederiz."],
];

const answers = [
  ["Cloudflare tek başına web sitesini tamamen güvenli yapar mı?", "Hayır. Cloudflare güçlü bir ağ, WAF, DDoS ve trafik kontrol katmanı sağlar; ancak uygulama açıkları, zayıf yönetici hesapları, güncel olmayan yazılımlar ve hatalı erişim politikaları ayrıca ele alınmalıdır."],
  ["WAF ve DDoS koruması arasındaki fark nedir?", "WAF uygulama katmanındaki şüpheli web isteklerini filtrelemeye odaklanır. DDoS koruması ise hizmeti erişilemez hale getirmeyi amaçlayan yoğun ve kötü niyetli trafik dalgalarını sınırlandırmaya yardımcı olur."],
  ["Bot trafiğini tamamen engellemek doğru mu?", "Genellikle hayır. Arama motoru botları, ödeme ve entegrasyon servisleri gibi meşru otomatik trafik korunmalıdır. Amaç tüm botları kapatmak değil; kötü niyetli veya kaynak tüketen trafiği doğru sinyallerle ayırmaktır."],
  ["Güvenlik çalışması satış performansını etkiler mi?", "Yanlış yapılandırılan kurallar gerçek müşterileri veya ödeme akışlarını engelleyebilir. Bu yüzden değişiklikleri kontrollü uygular, kritik kullanıcı yollarını test eder ve güvenliği performans ile satış sürekliliğiyle birlikte değerlendiririz."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: answers.map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text },
  })),
};

export default function SecurityPage() {
  return <main className="inner-page services-page security-page">
    <StructuredData data={[
      serviceSchema("Dijital güvenlik","Cloudflare, WAF, DDoS, bot kontrolü, erişim güvenliği ve web sürekliliği hizmetleri.","/hizmetler/dijital-guvenlik"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"Dijital güvenlik",path:"/hizmetler/dijital-guvenlik"}]),
      faqSchema,
    ]}/>
    <style>{`
      @media(min-width:1001px){
        .security-page .service-detail-grid + .service-essentials .service-essentials-head{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;width:100%!important;max-width:1700px!important;margin:0 auto!important;text-align:center!important;gap:0!important}
        .security-page .service-detail-grid + .service-essentials .service-essentials-head .section-index{margin:0 0 24px!important;text-align:center!important}
        .security-page .service-detail-grid + .service-essentials .service-essentials-head h2{width:fit-content!important;max-width:100%!important;margin:0 auto!important;font-size:clamp(44px,3.45vw,60px)!important;line-height:1!important;letter-spacing:-.052em!important;text-align:center!important;white-space:nowrap!important;text-wrap:nowrap!important}
        .security-page .service-detail-grid + .service-essentials .service-essentials-head>p:last-child{max-width:1540px!important;margin:26px auto 0!important;font-size:clamp(16px,1.02vw,19px)!important;line-height:1.55!important;text-align:center!important;text-wrap:balance!important}
      }
    `}</style>
    <section className="inner-hero shell services-hero"><p className="section-index">DİJİTAL GÜVENLİK</p><h1>Güven, tasarımdan önce<br/><em>altyapıda başlar.</em></h1><p>Web ve e-ticaret varlıklarında güvenliği yalnızca saldırı engelleme değil; erişim, trafik yönetimi, performans ve satış sürekliliği olarak ele alıyoruz.</p></section>
    <section className="service-detail-grid shell">{layers.map(item=><article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>Cloudflare odaklı katmanlı yaklaşım</li></ul></article>)}</section>
    <ServiceEssentials audience={["E-ticaret sitesinde bot veya kötü trafik sorunu yaşayan markalar","Cloudflare güvenlik ayarlarını profesyonelce yapılandırmak isteyen ekipler","Yönetim erişimi ve satış sürekliliğini güçlendirmek isteyen işletmeler"]} deliverables={["Risk ve trafik yüzeyi analizi","WAF, DDoS ve bot kural planı","Erişim güvenliği ve SSL kontrolü","İzleme ve süreklilik kontrol listesi"]} process={["Mevcut yapı ve risk analizi","Kural ve erişim tasarımı","Kontrollü uygulama","Test, izleme ve iyileştirme"]} fitNote="Güvenlik hiçbir zaman mutlak garanti değildir. Amaç riski azaltmak, görünürlüğü artırmak ve kesinti veya ihlal etkisini sınırlandıran katmanlı bir yapı kurmaktır."/>
    <section className="service-essentials shell" aria-labelledby="security-answers-title">
      <div className="service-essentials-head">
        <div><p className="section-index">SIK SORULANLAR</p><h2 id="security-answers-title">Web ve e-ticaret güvenliği hakkında net cevaplar.</h2></div>
        <p>Güvenlik kararlarını tek bir araç veya eklenti üzerinden vermiyoruz. <a href="/hizmetler/web-tasarim">web altyapısı</a>, <a href="/hizmetler/e-ticaret">e-ticaret akışları</a> ve <a href="/hizmetler/ai-otomasyon">otomasyon süreçleri</a> birlikte değerlendirilerek gerçek risk yüzeyi belirleniyor.</p>
      </div>
      <div className="service-essentials-grid">
        {answers.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
      </div>
    </section>
    <section className="service-cta shell"><p className="section-index">GÜVENLİK CHECK-UP</p><h2>Web varlığınızın trafik, erişim ve güvenlik katmanlarını birlikte inceleyelim.</h2><a href="/iletisim">Güvenlik projesini konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}
