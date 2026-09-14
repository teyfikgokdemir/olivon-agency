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
  const pageUrl = `${SITE_URL}/referanslar`;
  const listId = `${pageUrl}#case-studies`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    name: "Olivon Referanslar ve Vaka Çalışmaları",
    url: pageUrl,
    description: "Olivon'un e-ticaret ve web projeleri ile seçili vaka çalışmaları.",
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: { "@id": listId },
  };

  const caseStudiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": listId,
    name: "Olivon vaka çalışmaları",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: caseStudies.length,
    itemListElement: caseStudies.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${item.name} vaka çalışması`,
      url: `${SITE_URL}/referanslar/${item.slug}`,
      item: { "@id": `${SITE_URL}/referanslar/${item.slug}#case-study` },
    })),
  };

  return (
    <main className="inner-page references-page">
      <StructuredData data={[
        pageSchema,
        caseStudiesSchema,
        breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Referanslar",path:"/referanslar"}]),
      ]} />
      <style>{`
        @media(min-width:1001px){
          .references-page .reference-directory-head{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;width:100%!important;max-width:none!important;margin:0 auto 38px!important;text-align:center!important}
          .references-page .reference-directory-head .section-index{margin:0 0 22px!important;text-align:center!important}
          .references-page .reference-directory-head h2{width:100%!important;max-width:none!important;margin:0 auto!important;font-size:clamp(36px,2.8vw,48px)!important;line-height:1.04!important;letter-spacing:-.04em!important;text-align:center!important;white-space:nowrap!important;text-wrap:nowrap!important}
        }
      `}</style>
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
        <div className="reference-directory-head"><p className="section-index">DİĞER ÇALIŞMALAR</p><h2>Farklı sektörlerde web, e-ticaret ve marka deneyimi projeleri.</h2></div>
        <div className="directory-grid">
          {rest.map(project => {
            const caseItem = caseStudies.find(item => item.domain === project.domain);
            const href = caseItem ? `/referanslar/${caseItem.slug}` : project.url;
            return (
              <a href={href} target={caseItem ? undefined : "_blank"} rel={caseItem ? undefined : "noreferrer"} key={project.domain}>
                <div className="directory-brand-line">
                  <span className="directory-brand-mark"><img src={brandMarkUrl(project.domain)} alt="" width="32" height="32" loading="lazy" /></span>
                  <span className="directory-category">{project.category}</span>
                </div>
                <strong>{project.name}</strong>
                <span>{project.domain}</span>
                <em>{project.scope}</em>
                {caseItem && <b>Vaka çalışmasını incele <ArrowUpRight size={14}/></b>}
              </a>
            );
          })}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
