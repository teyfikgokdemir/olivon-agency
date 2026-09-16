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
  const trPath = `/referanslar/${item.slug}`;
  return {
    title: `${item.name} Vaka Çalışması | E-Ticaret Projesi`,
    description: `${item.name} için gerçekleştirilen ${item.category.toLocaleLowerCase("tr-TR")} odaklı e-ticaret çalışmasının problem, kapsam, sonuç ve teknoloji özeti.`,
    alternates: {
      canonical: trPath,
      languages: {
        "tr-TR": trPath,
        en: `/en/work/${item.slug}`,
        "de-DE": `/de/referenzen/${item.slug}`,
        "fr-FR": `/fr/realisations/${item.slug}`,
        "x-default": trPath,
      },
    },
    openGraph: {
      title: `${item.name} | Olivon Vaka Çalışması`,
      description: item.summary,
      url: trPath,
      ...(item.image ? { images: [{ url: item.image.split("?")[0], alt: `${item.name} e-ticaret projesi` }] } : {}),
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = caseStudies.find(entry => entry.slug === slug);
  if (!item) notFound();

  const pageUrl = `${SITE_URL}/referanslar/${item.slug}`;
  const pageId = `${pageUrl}#webpage`;
  const caseId = `${pageUrl}#case-study`;
  const imageUrl = item.image ? `${SITE_URL}${item.image.split("?")[0]}` : undefined;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageId,
    url: pageUrl,
    name: `${item.name} Vaka Çalışması`,
    description: item.summary,
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": caseId },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const caseSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": caseId,
    name: `${item.name} vaka çalışması`,
    url: pageUrl,
    description: item.summary,
    inLanguage: "tr-TR",
    mainEntityOfPage: { "@id": pageId },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    creator: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: {
      "@type": "Organization",
      name: item.name,
      url: item.url,
    },
    ...(imageUrl ? {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
        contentUrl: imageUrl,
        caption: `${item.name} e-ticaret projesi`,
      },
    } : {}),
  };

  return <main className="inner-page case-page">
    <StructuredData data={[
      pageSchema,
      caseSchema,
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Referanslar",path:"/referanslar"},{name:item.name,path:`/referanslar/${item.slug}`}])
    ]} />
    <section className="inner-hero shell case-hero">
      <p className="section-index">VAKA ÇALIŞMASI · {item.category.toUpperCase()}</p>
      <h1>{item.name}<br/><em>{item.summary}</em></h1>
      <p>Bu vaka, yayınlanabilir proje kapsamını ve nitel sonucu gösterir. Müşteriye ait gizli ticari veriler ve doğrulanamayan performans rakamları kullanılmamıştır.</p>
    </section>
    {item.image ? (
      <section className="case-visual shell">
        <img src={item.image} alt={`${item.name} web sitesi ekran görüntüsü`} loading="lazy" decoding="async" />
        <a href={item.url} target="_blank" rel="noreferrer">Canlı siteyi görüntüle <ArrowUpRight size={17}/></a>
      </section>
    ) : (
      <div className="section-inline-cta shell">
        <a href={item.url} target="_blank" rel="noreferrer">Canlı projeyi görüntüle <ArrowUpRight size={17}/></a>
      </div>
    )}
    <section className="case-story shell">
      <article><h2>Başlangıç problemi</h2><p>{item.challenge}</p></article>
      <article><h2>Yapılan çalışma</h2><ul>{item.work.map(x=><li key={x}><CheckCircle2 size={16}/>{x}</li>)}</ul></article>
      <article><h2>Teslim edilen kapsam</h2><ul>{item.deliverables.map(x=><li key={x}><CheckCircle2 size={16}/>{x}</li>)}</ul></article>
      <article><h2>Ortaya çıkan sonuç</h2><p>{item.outcome}</p></article>
      <article><h2>Kanıt & şeffaflık</h2><p>{item.evidence}</p></article>
    </section>
    <section className="case-tech shell"><p className="section-index">TEKNOLOJİ & KAPSAM</p><div>{item.technology.map(x=><span key={x}>{x}</span>)}</div></section>
    <section className="service-cta shell"><p className="section-index">BENZER BİR PROJE</p><h2>Kendi markanız için kapsamı ve doğru başlangıç noktasını birlikte belirleyelim.</h2><a href="/iletisim">Projenizi anlatın <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}
