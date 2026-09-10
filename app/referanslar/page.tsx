import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { referenceProjects } from "@/lib/references";

export default function ReferencesPage() {
  const featured = referenceProjects.filter(project => project.featured);
  const rest = referenceProjects.filter(project => !project.featured);

  return (
    <main className="inner-page references-page references-v2">
      <section className="inner-hero shell references-hero references-hero-v2">
        <p className="section-index">REFERANSLAR</p>
        <h1>Gerçek markalar.<br /><em>Canlı dijital vitrinler.</em></h1>
        <p>Farklı marka karakterlerini tek bir kalıba sokmadan; satış, güven ve kullanıcı deneyimi odağında geliştirdiğimiz seçili işler.</p>
      </section>

      <section className="references-featured shell" aria-label="Seçili referanslar">
        {featured.map(project => (
          <article className="reference-feature-card" key={project.domain}>
            <a className="reference-feature-media" href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.name} web sitesini görüntüle`}>
              <img src={project.image} alt={`${project.name} web sitesi ana sayfa görünümü`} loading="eager" />
              <span className="reference-live-tag">CANLI PROJE</span>
            </a>
            <div className="reference-feature-copy">
              <span>{project.category}</span>
              <h2>{project.name}</h2>
              <p>{project.scope}</p>
              <a href={project.url} target="_blank" rel="noreferrer">Siteyi görüntüle <ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </section>

      <section className="reference-directory reference-directory-v2 shell">
        <div className="reference-directory-head"><p className="section-index">DİĞER ÇALIŞMALAR</p><h2>Farklı sektörler.<br/><em>Aynı kalite standardı.</em></h2><p>Her projede marka dili, satış modeli ve kullanıcı ihtiyacına göre ayrı bir sistem kuruyoruz.</p></div>
        <div className="directory-grid directory-grid-v2">
          {rest.map(project => <a href={project.url} target="_blank" rel="noreferrer" key={project.domain}><span className="directory-category">{project.category}</span><strong>{project.name}</strong><span>{project.domain}</span><em>{project.scope}</em><b>Projeyi aç <ArrowUpRight size={14}/></b></a>)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
