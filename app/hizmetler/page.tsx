import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Dijital hizmetler",
  description: "Web tasarım, e-ticaret, Shopify, ikas, SEO, GEO, AEO, AIO, yapay zekâ otomasyonu, dijital pazarlama ve güvenlik hizmetleri.",
  alternates: { canonical: "/hizmetler" },
};

const serviceGroups = [
  { title:"E-ticaret sistemleri", eyebrow:"SHOPIFY · İKAS · WOOCOMMERCE", intro:"Markanızı satış, operasyon ve ölçeklenebilirlik odağında çalışan bir e-ticaret altyapısına taşıyoruz.", href:"/hizmetler/e-ticaret", visual:"commerce" },
  { title:"Web tasarım ve geliştirme", eyebrow:"UX · PERFORMANS · DÖNÜŞÜM", intro:"Marka kimliğinize uygun, hızlı ve dönüşüm odaklı web deneyimleri tasarlayıp geliştiriyoruz.", href:"/hizmetler/web-tasarim", visual:"web" },
  { title:"Arama görünürlüğü ve yapay zekâ keşfedilebilirliği", eyebrow:"SEO · GEO · AEO · AIO", intro:"Google ve yapay zekâ destekli aramalarda markanızın doğru anlaşılması, bulunması ve kaynak olarak seçilmesi için görünürlük sistemi kuruyoruz.", href:"/hizmetler/seo-geo-aeo-aio", visual:"search" },
  { title:"Yapay zekâ otomasyonları ve iş süreçleri", eyebrow:"AI · OTOMASYON · İŞ AKIŞLARI", intro:"Tekrarlayan işleri azaltan, ekiplerin verimliliğini artıran ve insan kontrolünü koruyan akıllı iş akışları tasarlıyoruz.", href:"/hizmetler/ai-otomasyon", visual:"automation" },
  { title:"Dijital reklam ve kârlılık optimizasyonu", eyebrow:"META · GOOGLE · ÖLÇÜM", intro:"Reklam bütçesini trafik yerine doğru hedefleme, güçlü kreatifler, dönüşüm ve net ticari katkı üzerinden yönetiyoruz.", href:"/#iletisim", visual:"profit" },
  { title:"Dijital güvenlik ve altyapı yönetimi", eyebrow:"CLOUDFLARE · WAF · ZERO TRUST", intro:"Hız, erişilebilirlik ve güvenliği tek altyapı yaklaşımında birleştirerek saldırı yüzeyini azaltıyoruz.", href:"/#guvenlik", visual:"security" },
  { title:"Marka ve dijital strateji danışmanlığı", eyebrow:"STRATEJİ · KONUM · YOL HARİTASI", intro:"Markanızın hedeflerine uygun dijital yol haritasını, öncelikleri ve doğru yatırım sırasını birlikte belirliyoruz.", href:"/#iletisim", visual:"strategy" },
  { title:"ikas Partner hizmetleri", eyebrow:"OLIVON × İKAS PARTNER", intro:"ikas mağaza kurulumu, tema, içerik, entegrasyon, check-up ve büyüme süreçlerini uçtan uca destekliyoruz.", href:"/ikas", visual:"ikas" },
  { title:"E-ihracat ve uluslararası büyüme", eyebrow:"GLOBAL COMMERCE · LOKALİZASYON", intro:"Ürünlerinizi yeni pazarlara taşımak için altyapı, dil, para birimi, ödeme ve operasyon tarafını birlikte planlıyoruz.", href:"/#iletisim", visual:"global" },
];

export default function ServicesPage(){return <main className="inner-page services-page">
<SiteHeader />
<section className="inner-hero shell services-hero services-hero-premium"><div><p className="section-index">HİZMETLER</p><h1>Markanızı büyüten<br/><em>dijital çözümler.</em></h1><p>Strateji, tasarım, teknoloji ve performansı bir araya getirerek markanız için sürdürülebilir büyüme sistemleri kuruyoruz.</p></div><div className="services-hero-art" aria-hidden="true"><span>STRATEJİ</span><span>TASARIM</span><span>TEKNOLOJİ</span><span>BÜYÜME</span></div></section>
<section className="service-visual-grid shell">{serviceGroups.map(group=><article className="service-visual-card" key={group.title}><div className={`service-visual service-visual-${group.visual}`} aria-hidden="true"><span>{group.eyebrow}</span></div><div className="service-visual-copy"><span className="service-card-eyebrow">{group.eyebrow}</span><h2>{group.title}</h2><p>{group.intro}</p><Link href={group.href}>Detayları incele <ArrowUpRight size={16}/></Link></div></article>)}</section>
<section className="service-cta service-cta-premium shell"><div><p className="section-index">DOĞRU BAŞLANGIÇ</p><h2>Projeniz için en doğru<br/><em>çözümü birlikte belirleyelim.</em></h2><p>İhtiyaçlarınızı dinleyelim, markanız için en uygun yol haritasını birlikte oluşturalım.</p></div><a href="mailto:info@olivon.com.tr">Projenizi konuşalım <ArrowUpRight size={18}/></a></section>
<SiteFooter/></main>}
