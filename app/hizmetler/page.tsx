import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";
import { serviceGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dijital Ajans Hizmetleri | Web, E-Ticaret, SEO, AI & Güvenlik",
  description: "Web tasarım, e-ticaret, ikas, Shopify, WooCommerce, SEO, GEO, AEO, AIO, AI otomasyon, dijital reklam ve güvenlik hizmetlerini tek büyüme sistemi altında inceleyin.",
  alternates: { canonical: "/hizmetler" },
  openGraph: { title: "Olivon Hizmetleri | Dijital Büyüme Sistemleri", description: "Web, e-ticaret, görünürlük, otomasyon ve güvenlik hizmetleri.", url: "/hizmetler", type: "website" },
};

export default function ServicesPage() {
  const schema={"@context":"https://schema.org","@type":"ItemList",name:"Olivon Dijital Hizmetleri",url:`${SITE_URL}/hizmetler`,itemListElement:serviceGroups.map((g,i)=>({"@type":"ListItem",position:i+1,name:g.title,url:`${SITE_URL}/hizmetler#${g.slug}`}))};
  return (
    <main className="inner-page services-page">
      <StructuredData data={[schema,breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"}])]} />
      <section className="inner-hero shell services-hero">
        <p className="section-index">HİZMETLER</p>
        <h1>Tek tek hizmet değil,<br /><em>birlikte çalışan sistemler.</em></h1>
        <p>Web, e-ticaret, görünürlük, otomasyon, reklam ve güvenliği aynı ticari hedef etrafında topluyoruz. Her başlık teslim kapsamı ve uygulanabilir süreçle birlikte ele alınır.</p>
      </section>
      <section className="service-detail-grid shell">
        {serviceGroups.map(group => (
          <article className="service-detail-card" id={group.slug} key={group.title}>
            <img src={group.image} alt={`${group.title} hizmet görseli`} loading="lazy" decoding="async" />
            <h2>{group.title}</h2><p>{group.intro}</p>
            <ul>{group.items.map(item => <li key={item}><CheckCircle2 size={16} />{item}</li>)}</ul>
          </article>
        ))}
      </section>
      <section className="service-cta shell">
        <p className="section-index">DOĞRU BAŞLANGIÇ</p>
        <h2>İhtiyacınız analiz, yeniden kurulum veya sürekli destek olabilir. Önce kapsamı netleştirelim.</h2>
        <a href="/iletisim">Proje briefini gönderin <ArrowUpRight size={18} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}