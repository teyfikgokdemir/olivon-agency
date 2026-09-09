import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Dijital hizmetler",
  description: "Web tasarım, e-ticaret, Shopify, ikas, SEO, GEO, AEO, AIO, dijital pazarlama ve güvenlik hizmetlerini tek büyüme sistemi içinde keşfedin.",
  alternates: { canonical: "/hizmetler" },
};

const serviceGroups = [
  { title:"E-ticaret sistemleri", eyebrow:"SHOPIFY · İKAS · WOOCOMMERCE", intro:"Satışa, operasyona ve büyümeye hazır e-ticaret altyapıları kuruyoruz.", items:["Altyapı seçimi","Dönüşüm mimarisi","Ödeme · kargo · ERP","Pazaryeri entegrasyonları"], href:"/hizmetler/e-ticaret" },
  { title:"Web tasarım ve geliştirme", eyebrow:"UX · PERFORMANS · DÖNÜŞÜM", intro:"Marka algısı, mobil deneyim ve performansı aynı sistem içinde ele alıyoruz.", items:["Kurumsal web","Landing page","Mobil UX","Core Web Vitals"], href:"/hizmetler/web-tasarim" },
  { title:"Arama görünürlüğü ve yapay zekâ keşfedilebilirliği", eyebrow:"SEO · GEO · AEO · AIO", intro:"Markanızın hem arama motorlarında hem yapay zekâ destekli cevap sistemlerinde doğru anlaşılmasını sağlıyoruz.", items:["Teknik SEO","İçerik mimarisi","Yapılandırılmış veri","AI arama görünürlüğü"], href:"/hizmetler/seo-geo-aeo-aio" },
  { title:"ikas kurulum ve büyüme desteği", eyebrow:"OLIVON × İKAS PARTNER", intro:"ikas partner olarak mağaza kurulumu, tasarım, içerik, entegrasyon ve check-up süreçlerini uçtan uca ele alıyoruz.", items:["Mağaza kurulumu","Tema ve görsel destek","Entegrasyonlar","Check-up"], href:"/ikas" },
  { title:"Dijital reklam ve marka pazarlama", eyebrow:"META · GOOGLE · ÖLÇÜM", intro:"Kampanyaları trafik yerine kreatif kalite, dönüşüm ve kârlılık ekseninde yönetiyoruz.", items:["Kampanya stratejisi","Kreatif yönlendirme","Dönüşüm ölçümü","Kârlılık analizi"], href:"/#iletisim" },
  { title:"Dijital güvenlik", eyebrow:"CLOUDFLARE · WAF · ZERO TRUST", intro:"Web varlıklarının saldırı yüzeyini azaltan modern güvenlik katmanları kuruyoruz.", items:["DDoS","WAF","Bot kontrolü","Erişim güvenliği"], href:"/#guvenlik" },
];

export default function ServicesPage(){return <main className="inner-page services-page">
<SiteHeader />
<section className="inner-hero shell services-hero"><p className="section-index">UZMANLIKLAR</p><h1>Her şeyi yapmak değil,<br/><em>doğru sistemleri birlikte çalıştırmak.</em></h1><p>İhtiyacınız olan disiplini tek başına değil, markanızın ticari hedefi içindeki rolüyle ele alıyoruz.</p></section>
<section className="service-detail-grid shell">{serviceGroups.map(group=><article className="service-detail-card" key={group.title}><span className="service-card-eyebrow">{group.eyebrow}</span><h2>{group.title}</h2><p>{group.intro}</p><ul>{group.items.map(item=><li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul><Link href={group.href}>Uzmanlığı incele <ArrowUpRight size={16}/></Link></article>)}</section>
<section className="service-cta shell"><p className="section-index">DOĞRU BAŞLANGIÇ</p><h2>Önce ihtiyacı netleştirir, sonra doğru sistemi kurarız.</h2><a href="mailto:info@olivon.com.tr">Projenizi anlatın <ArrowUpRight size={18}/></a></section><SiteFooter/></main>}
