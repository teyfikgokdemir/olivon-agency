import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";
import { referenceProjects } from "@/lib/references";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Referanslar & Vaka Çalışmaları | E-Ticaret ve Web Projeleri",
  description: "Olivon'un e-ticaret, web tasarım ve dijital deneyim projelerini; seçili vaka çalışmalarında problem, kapsam, sonuç ve canlı site bağlantılarıyla inceleyin.",
  alternates: { canonical: "/referanslar" },
  openGraph: { title: "Olivon Referanslar & Vaka Çalışmaları", description: "Gerçek markalar için geliştirilen e-ticaret ve web projeleri.", url: "/referanslar", type: "website" },
};

export default function ReferencesPage() {
  const featured = referenceProjects.filter(project => project.featured);
  const rest = referenceProjects.filter(project => !project.featured);
  const pageSchema = {
    "@context":"https://schema.org","@type":"CollectionPage",name:"Olivon Referanslar ve Vaka Çalışmaları",
    url:`${SITE_URL}/referanslar`,description:"Olivon'un e-ticaret ve web projeleri ile seçili vaka çalışmaları."
  };

  return (
    <main className="inner-page references-page">
      <StructuredData data={[pageSchema,breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Referanslar",path:"/referanslar"}])]} />
      <section className="inner-hero shell references-hero">
        <p className="section-index">REFERANSLAR & VAKA ÇALIŞMALARI</p>
        <h1>Gerçek markalar.<br /><em>Doğrulanabilir dijital işler.</em></h1>
        <p>Seçili projelerde yalnızca görsel vitrin değil; başlangıç problemini, yapılan işi ve paylaşılabilir sonucu da gösteriyoruz. Müşteri mahremiyetine ait ticari metrikleri uydurmuyor veya izinsiz yayınlamıyoruz.</p>
      </section>

      <section className="reference-showcase shell">
        {featured.map((project, index) => {
          const caseItem = caseStudies[index];
          return (
            <article className="reference-case" key={project.domain}>
              <div className="reference-browser">
                <div><span /><span /><span /><em>{project.domain}</em></div>
                <img src={project.image} alt={`${project.name} e-ticaret sitesi ekran görüntüsü`} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
              </div>
              <div className="reference-copy">
                <span>{project.category}</span>
                <h2>{project.name}</h2>
                <p>{project.scope}</p>
                <div className="reference-actions">
                  <a href={`/referanslar/${caseItem.slug}`}>Vaka çalışmasını incele <ArrowUpRight size={17} /></a>
                  <a href={project.url} target="_blank" rel="noreferrer">Canlı site <ArrowUpRight size={15} /></a>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="reference-directory shell">
        <div><p className="section-index">DİĞER ÇALIŞMALAR</p><h2>Farklı sektörlerde web, e-ticaret ve marka deneyimi projeleri.</h2></div>
        <div className="directory-grid">
          {rest.map(project => <a href={project.url} target="_blank" rel="noreferrer" key={project.domain}><strong>{project.name}</strong><span>{project.domain}</span><em>{project.scope}</em></a>)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
