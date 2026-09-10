import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { referenceProjects } from "@/lib/references";

export default function ReferencesPage() {
  const featured = referenceProjects.filter(project => project.featured);
  const rest = referenceProjects.filter(project => !project.featured);

  return (
    <main className="inner-page references-page">
      <section className="inner-hero shell references-hero">
        <p className="section-index">REFERANSLAR</p>
        <h1>Gerçek markalar.<br /><em>Canlı dijital vitrinler.</em></h1>
        <p>İlk etapta seçili projeleri hero ekran görüntüsü, domain ve iş kapsamı ile sunuyoruz. Detaylı vaka analizlerini sonraki içeriklerle genişleteceğiz.</p>
      </section>
      <section className="reference-showcase shell">
        {featured.map(project => (
          <article className="reference-case" key={project.domain}>
            <div className="reference-browser">
              <div><span /><span /><span /><em>{project.domain}</em></div>
              <img src={project.image} alt={`${project.name} web sitesi hero ekran görüntüsü`} />
            </div>
            <div className="reference-copy">
              <span>{project.category}</span>
              <h2>{project.name}</h2>
              <p>{project.scope}</p>
              <a href={project.url} target="_blank" rel="noreferrer">Siteyi görüntüle <ArrowUpRight size={17} /></a>
            </div>
          </article>
        ))}
      </section>
      <section className="reference-directory shell">
        <div><p className="section-index">DİĞER ÇALIŞMALAR</p><h2>Sektör fark etmeksizin satışa ve güvene çalışan dijital merkezler.</h2></div>
        <div className="directory-grid">
          {rest.map(project => <a href={project.url} target="_blank" rel="noreferrer" key={project.domain}><strong>{project.name}</strong><span>{project.domain}</span><em>{project.scope}</em></a>)}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
