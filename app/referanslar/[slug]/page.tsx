import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";
import { caseStudies } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find(entry => entry.slug === slug);
  if (!item) return {};
  return {
    title: `${item.name} Vaka Çalışması | E-Ticaret Projesi | Olivon`,
    description: `${item.name} için gerçekleştirilen ${item.category.toLocaleLowerCase("tr-TR")} odaklı e-ticaret çalışmasının problem, kapsam, sonuç ve teknoloji özeti.`,
    alternates: { canonical: `/referanslar/${item.slug}` },
    openGraph: {
      title: `${item.name} | Olivon Vaka Çalışması`,
      description: item.summary,
      url: `/referanslar/${item.slug}`,
      images: [{ url: item.image.split("?")[0], alt: `${item.name} e-ticaret projesi` }],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = caseStudies.find(entry => entry.slug === slug);
  if (!item) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${item.name} vaka çalışması`,
    url: `${SITE_URL}/referanslar/${item.slug}`,
    description: item.summary,
    creator: { "@id": `${SITE_URL}/#organization` },
    about: { "@type": "Organization", name: item.name, url: item.url },
  };

  return <main className="inner-page case-page">
    <StructuredData data={[schema, breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Referanslar",path:"/referanslar"},{name:item.name,path:`/referanslar/${item.slug}`}])]} />
    <section className="inner-hero shell case-hero">
      <p className="section-index">VAKA ÇALIŞMASI · {item.category.toUpperCase()}</p>
      <h1>{item.name}<br/><em>{item.summary}</em></h1>
      <p>Bu vaka, yayınlanabilir proje kapsamını ve nitel sonucu gösterir. Müşteriye ait gizli ticari veriler ve doğrulanamayan performans rakamları kullanılmamıştır.</p>
    </section>
    <section className="case-visual shell">
      <img src={item.image} alt={`${item.name} web sitesi ekran görüntüsü`} />
      <a href={item.url} target="_blank" rel="noreferrer">Canlı siteyi görüntüle <ArrowUpRight size={17}/></a>
    </section>
    <section className="case-story shell">
      <article><span>01</span><h2>Başlangıç problemi</h2><p>{item.challenge}</p></article>
      <article><span>02</span><h2>Yapılan çalışma</h2><ul>{item.work.map(x=><li key={x}><CheckCircle2 size={16}/>{x}</li>)}</ul></article>
      <article><span>03</span><h2>Ortaya çıkan sonuç</h2><p>{item.outcome}</p></article>
      <article><span>04</span><h2>Kanıt & şeffaflık</h2><p>{item.evidence}</p></article>
    </section>
    <section className="case-tech shell"><p className="section-index">TEKNOLOJİ & KAPSAM</p><div>{item.technology.map(x=><span key={x}>{x}</span>)}</div></section>
    <section className="service-cta shell"><p className="section-index">BENZER BİR PROJE</p><h2>Kendi markanız için kapsamı ve doğru başlangıç noktasını birlikte belirleyelim.</h2><a href="/iletisim">Projenizi anlatın <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}
