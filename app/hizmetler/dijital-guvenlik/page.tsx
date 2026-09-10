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
  ["Bot & erişim", "Bot kontrolü, hız sınırlama ve gerektiğinde rol/IP/Zero Trust erişim politikalarını planlarız."],
  ["İzleme & süreklilik", "Yedekleme, olay görünürlüğü, kritik yönlendirmeler ve temel geri dönüş senaryolarını çalışma planına dahil ederiz."],
];

export default function SecurityPage() {
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("Dijital güvenlik","Cloudflare, WAF, DDoS, bot kontrolü, erişim güvenliği ve web sürekliliği hizmetleri.","/hizmetler/dijital-guvenlik"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"Dijital güvenlik",path:"/hizmetler/dijital-guvenlik"}])
    ]}/>
    <section className="inner-hero shell services-hero"><p className="section-index">DİJİTAL GÜVENLİK</p><h1>Güven, tasarımdan önce<br/><em>altyapıda başlar.</em></h1><p>Web ve e-ticaret varlıklarında güvenliği yalnızca saldırı engelleme değil; erişim, trafik yönetimi, performans ve satış sürekliliği olarak ele alıyoruz.</p></section>
    <section className="service-detail-grid shell">{layers.map(item=><article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>Cloudflare odaklı katmanlı yaklaşım</li></ul></article>)}</section>
    <ServiceEssentials audience={["E-ticaret sitesinde bot veya kötü trafik sorunu yaşayan markalar","Cloudflare güvenlik ayarlarını profesyonelce yapılandırmak isteyen ekipler","Yönetim erişimi ve satış sürekliliğini güçlendirmek isteyen işletmeler"]} deliverables={["Risk ve trafik yüzeyi analizi","WAF/DDoS/bot kural planı","Erişim güvenliği önerileri","İzleme ve süreklilik kontrol listesi"]} process={["Mevcut yapı ve risk analizi","Kural ve erişim tasarımı","Kontrollü uygulama","Test, izleme ve iyileştirme"]} fitNote="Güvenlik hiçbir zaman mutlak garanti değildir. Amaç riski azaltmak, görünürlüğü artırmak ve kesinti/ihlal etkisini sınırlandıran katmanlı bir yapı kurmaktır."/>
    <section className="service-cta shell"><p className="section-index">GÜVENLİK CHECK-UP</p><h2>Web varlığınızın trafik, erişim ve güvenlik katmanlarını birlikte inceleyelim.</h2><a href="/iletisim">Güvenlik projesini konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}
