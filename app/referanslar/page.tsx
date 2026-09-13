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

const brandMarkUrl = (domain: string) => `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=128`;

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

      <section className="reference-logo-rail" aria-label="Çalıştığımız markalar">
        <div className="reference-logo-track">
          <div className="reference-logo-group">
            {referenceProjects.map(project => (
              <a className="reference-logo-item" href={project.url} target="_blank" rel="noreferrer" key={`primary-${project.domain}`}>
                <span className="reference-logo-mark"><img src={brandMarkUrl(project.domain)} alt="" width="34" height="34" loading="lazy" /></span>
                <strong>{project.name}</strong>
              </a>
            ))}
          </div>
          <div className="reference-logo-group" aria-hidden="true">
            {referenceProjects.map(project => (
              <span className="reference-logo-item" key={`duplicate-${project.domain}`}>
                <span className="reference-logo-mark"><img src={brandMarkUrl(project.domain)} alt="" width="34" height="34" loading="lazy" /></span>
                <strong>{project.name}</strong>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="reference-showcase shell">
        {featured.map(project => {
          const caseItem = caseStudies.find(item => item.domain === project.domain);
          return (
            <article className="reference-case" key={project.domain}>
              <div className="reference-browser">
                <div><span /><span /><span /><em>{project.domain}</em></div>
                <img src={project.image} alt={`${project.name} e-ticaret sitesi ekran görüntüsü`} loading="lazy" decoding="async" />
              </div>
              <div className="reference-copy">
                <span className="reference-brand-mark"><img src={brandMarkUrl(project.domain)} alt="" width="42" height="42" loading="lazy" /></span>
                <span>{project.category}</span>
                <h2>{project.name}</h2>
                <p>{project.scope}</p>
                <div className="reference-actions">
                  {caseItem && <a href={`/referanslar/${caseItem.slug}`}>Vaka çalışmasını incele <ArrowUpRight size={17} /></a>}
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
          {rest.map(project => (
            <a href={project.url} target="_blank" rel="noreferrer" key={project.domain}>
              <div className="directory-brand-line">
                <span className="directory-brand-mark"><img src={brandMarkUrl(project.domain)} alt="" width="32" height="32" loading="lazy" /></span>
                <span className="directory-category">{project.category}</span>
              </div>
              <strong>{project.name}</strong>
              <span>{project.domain}</span>
              <em>{project.scope}</em>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
