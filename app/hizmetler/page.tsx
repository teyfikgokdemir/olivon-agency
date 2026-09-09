import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Dijital Hizmetler",
  description: "Web tasarım, e-ticaret, Shopify, ikas, SEO, GEO, AEO, AIO, dijital pazarlama ve güvenlik hizmetlerini tek büyüme sistemi içinde keşfedin.",
  alternates: { canonical: "/hizmetler" },
};

const serviceGroups = [
  { title:"E-ticaret sistemleri", intro:"Shopify, ikas ve WooCommerce altyapılarında satışa, operasyona ve büyümeye hazır mağazalar.", items:["Altyapı seçimi","Dönüşüm mimarisi","Ödeme · kargo · ERP","Pazaryeri entegrasyonları"], href:"/hizmetler/e-ticaret" },
  { title:"Web tasarım & geliştirme", intro:"Marka algısı, mobil deneyim, performans ve dönüşümü birlikte ele alan özgün web sistemleri.", items:["Kurumsal web","Landing page","Mobil UX","Core Web Vitals"], href:"/hizmetler/web-tasarim" },
  { title:"SEO, GEO, AEO & AIO", intro:"Google'dan yapay zekâ cevap motorlarına kadar markanın bulunabilirliğini ve anlaşılabilirliğini güçlendiren görünürlük mimarisi.", items:["Teknik SEO","İçerik mimarisi","Structured data","AI arama görünürlüğü"], href:"/hizmetler/seo-geo-aeo-aio" },
  { title:"ikas kurulum & destek", intro:"ikas partner olarak mağaza kurulumu, tasarım, içerik, entegrasyon, operasyon ve check-up süreçlerini uçtan uca ele alırız.", items:["Mağaza kurulumu","Tema & görsel destek","Entegrasyonlar","Check-up"], href:"/ikas" },
  { title:"Dijital reklam & marka pazarlama", intro:"Meta ve Google kampanyalarını trafik yerine ölçüm, kreatif ve kârlılık ekseninde yönetiriz.", items:["Kampanya stratejisi","Kreatif yönlendirme","Dönüşüm ölçümü","Kârlılık analizi"], href:"/#iletisim" },
  { title:"Dijital güvenlik", intro:"Cloudflare, WAF, bot kontrolü ve erişim politikalarıyla web varlıklarının saldırı yüzeyini azaltırız.", items:["DDoS","WAF","Bot kontrolü","Erişim güvenliği"], href:"/#guvenlik" },
];

export default function ServicesPage(){return <main className="inner-page services-page">
<header className="inner-nav shell"><Link className="brand" href="/"><span className="brand-mark">O</span><span>OLIVON</span></Link><Link href="/">Ana sayfa</Link></header>
<section className="inner-hero shell services-hero"><p className="section-index">UZMANLIKLAR</p><h1>Her şeyi yapmak değil,<br/><em>doğru sistemleri birlikte çalıştırmak.</em></h1><p>İhtiyacınız olan disiplini tek başına değil, markanızın ticari hedefi içindeki rolüyle ele alıyoruz.</p></section>
<section className="service-detail-grid shell">{serviceGroups.map((group,index)=><article className="service-detail-card" key={group.title}><span>{String(index+1).padStart(2,"0")}</span><h2>{group.title}</h2><p>{group.intro}</p><ul>{group.items.map(item=><li key={item}><CheckCircle2 size={16}/>{item}</li>)}</ul><Link href={group.href}>Uzmanlığı incele <ArrowUpRight size={16}/></Link></article>)}</section>
<section className="service-cta shell"><p className="section-index">DOĞRU BAŞLANGIÇ</p><h2>Önce ihtiyacı netleştirir, sonra doğru sistemi kurarız.</h2><a href="mailto:info@olivon.com.tr">Projenizi anlatın <ArrowUpRight size={18}/></a></section><SiteFooter/></main>}
