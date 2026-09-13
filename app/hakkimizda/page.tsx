import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hakkımızda | Dijital Büyüme Stüdyosu",
  description: "Olivon'un çalışma modeli, uzmanlıkları, kalite prensipleri ve Türkiye genelinde web, e-ticaret, SEO, AI görünürlüğü ve güvenlik yaklaşımı.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: { title: "Olivon Hakkında | Dijital Sistemler, Ticaret ve Teknoloji", description: "Olivon'un çalışma modeli, uzmanlık alanları ve proje yaklaşımı.", url: "/hakkimizda", type: "website" },
};

const principles = [
  ["Ticari hedef önce", "Teknoloji ve tasarım kararlarını gerçek iş hedefi, operasyon ve yönetilebilirlik üzerinden değerlendiriyoruz."],
  ["Kanıtlanabilir iletişim", "Paylaşamadığımız metrikleri uydurmuyor; kapsamı, varsayımları ve doğrulanabilir çıktıları açık biçimde ayırıyoruz."],
  ["Tek sistem yaklaşımı", "Web, e-ticaret, içerik, görünürlük, ölçüm ve güvenliği birbirinden kopuk hizmetler olarak ele almıyoruz."],
  ["Yayından sonra gelişim", "Bir projenin teslim edilmesini son değil, gerçek kullanıcı verisinin başladığı aşama olarak görüyoruz."],
];

export default function AboutPage() {
  const schema = {
    "@context":"https://schema.org","@type":"AboutPage",name:"Olivon Hakkında",url:`${SITE_URL}/hakkimizda`,
    about:{"@id":`${SITE_URL}/#organization`}
  };
  return <main className="inner-page about-page">
    <StructuredData data={[schema,breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hakkımızda",path:"/hakkimizda"}])]} />
    <section className="inner-hero shell about-hero"><p className="section-index">OLIVON HAKKINDA</p><h1>Site yapan bir ekipten fazlası.<br/><em>Dijital sistemi birlikte kuran bir çalışma modeli.</em></h1><p>Olivon, Kayseri merkezli ve Türkiye genelinde çalışan bağımsız bir dijital büyüme stüdyosudur. Web, e-ticaret, görünürlük, otomasyon ve güvenlik kararlarını aynı ticari çerçevede ele alır.</p></section>
    <section className="about-manifesto shell"><div><p className="section-index">NEDEN OLIVON?</p><h2>“Görünmek için değil, tercih edilmek için” bir slogan değil; karar filtremiz.</h2></div><p>Bir sayfanın güzel görünmesi yeterli değildir. Hızlı açılması, güven vermesi, doğru kişiye doğru bilgiyi sunması, yönetilebilir olması ve ölçülebilir bir aksiyona bağlanması gerekir. Bu nedenle tasarım ile teknik altyapıyı, içerik ile arama görünürlüğünü, satış ile güvenliği aynı proje mimarisinde buluşturuyoruz.</p></section>
    <section className="about-principles shell">{principles.map(([title,text])=><article key={title}><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="about-scope shell"><p className="section-index">ÇALIŞMA ALANIMIZ</p><h2>Özellikle dijital satış ve büyüme altyapısını güçlendirmek isteyen markalarla çalışıyoruz.</h2><div><span><CheckCircle2/>ikas, Shopify ve WooCommerce e-ticaret projeleri</span><span><CheckCircle2/>Kurumsal web ve dönüşüm odaklı landing page’ler</span><span><CheckCircle2/>SEO, GEO, AEO ve AIO görünürlük mimarisi</span><span><CheckCircle2/>AI destekli operasyon ve iş akışları</span><span><CheckCircle2/>Cloudflare odaklı performans ve güvenlik katmanları</span></div></section>
    <section className="service-cta shell"><p className="section-index">ÇALIŞMA MODELİ</p><h2>Önce problemi ve kapsamı netleştirelim; sonra doğru sistemi kuralım.</h2><a href="/iletisim">Olivon ile konuşun <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}
