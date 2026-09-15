import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { referenceProjects } from "@/lib/references";
import { intlPages } from "@/lib/intl-pages";
import type { Locale } from "@/lib/i18n";

const copy: Record<Locale, {
  featured:string; all:string; live:string; caseLabel:string; moreLabel:string; moreText:string;
  cases:Record<string,{category:string;summary:string;scope:string}>;
}> = {
  en:{
    featured:"SELECTED CASE STUDIES",all:"MORE DELIVERY EXPERIENCE",live:"View live project",caseLabel:"View case study",moreLabel:"Commerce · Web · Visibility",moreText:"Additional production experience across commerce storefronts, corporate websites and digital visibility." ,
    cases:{
      "oyku-baby-store":{category:"Baby & kids commerce",summary:"A clearer commerce experience built around product discovery, category flow and a more coherent brand storefront.",scope:"Commerce architecture · Mobile UX · Product presentation"},
      "bailas-kids":{category:"Kids fashion commerce",summary:"A premium storefront balancing visual brand expression with faster category and product discovery.",scope:"Premium storefront · Category flow · Conversion-focused UI"},
      "favorim-kids":{category:"Kids fashion & outfits",summary:"A commerce experience that makes dense product and outfit assortments easier to browse and understand.",scope:"Commerce UX · Visual hierarchy · Mobile journey"},
      "recep-bozkurt":{category:"WooCommerce commerce",summary:"An end-to-end WooCommerce operation bringing catalog, product architecture and the sales journey into one maintainable system.",scope:"WordPress · WooCommerce · Catalog & checkout flow"},
    }
  },
  de:{
    featured:"AUSGEWÄHLTE PROJEKTE",all:"WEITERE PROJEKTERFAHRUNG",live:"Live-Projekt ansehen",caseLabel:"Case Study ansehen",moreLabel:"Commerce · Web · Sichtbarkeit",moreText:"Weitere Umsetzungserfahrung mit Commerce-Stores, Unternehmenswebsites und digitaler Sichtbarkeit.",
    cases:{
      "oyku-baby-store":{category:"Baby- & Kinder-Commerce",summary:"Ein klareres Commerce-Erlebnis mit Fokus auf Produktsuche, Kategoriefluss und konsistenter Markenpräsentation.",scope:"Commerce-Architektur · Mobile UX · Produktdarstellung"},
      "bailas-kids":{category:"Kinderfashion Commerce",summary:"Ein Premium-Storefront, das Markenästhetik mit schnellerer Kategorie- und Produktsuche verbindet.",scope:"Premium Storefront · Kategoriefluss · Conversion UI"},
      "favorim-kids":{category:"Kinderfashion & Outfits",summary:"Ein Commerce-Erlebnis, das große Produkt- und Kombinationssortimente leichter erfassbar macht.",scope:"Commerce UX · Visuelle Hierarchie · Mobile Journey"},
      "recep-bozkurt":{category:"WooCommerce",summary:"Ein durchgängiges WooCommerce-System, das Katalog, Produktarchitektur und Verkaufsprozess in einer wartbaren Struktur verbindet.",scope:"WordPress · WooCommerce · Katalog & Checkout"},
    }
  },
  fr:{
    featured:"PROJETS SÉLECTIONNÉS",all:"AUTRES EXPÉRIENCES DE PRODUCTION",live:"Voir le projet en ligne",caseLabel:"Voir l’étude de cas",moreLabel:"Commerce · Web · Visibilité",moreText:"Autres expériences de production sur des boutiques e-commerce, sites corporate et dispositifs de visibilité digitale.",
    cases:{
      "oyku-baby-store":{category:"E-commerce bébé & enfant",summary:"Une expérience e-commerce plus claire, centrée sur la découverte produit, les catégories et une vitrine de marque cohérente.",scope:"Architecture commerce · UX mobile · Présentation produit"},
      "bailas-kids":{category:"Mode enfant",summary:"Une vitrine premium qui associe expression de marque et découverte plus fluide des catégories et produits.",scope:"Vitrine premium · Parcours catégorie · UI orientée conversion"},
      "favorim-kids":{category:"Mode enfant & looks",summary:"Une expérience e-commerce qui rend les assortiments de produits et de looks plus simples à parcourir.",scope:"UX commerce · Hiérarchie visuelle · Parcours mobile"},
      "recep-bozkurt":{category:"WooCommerce",summary:"Un dispositif WooCommerce complet réunissant catalogue, architecture produit et parcours de vente dans un système maintenable.",scope:"WordPress · WooCommerce · Catalogue & checkout"},
    }
  }
};

export function LocalizedWork({locale}:{locale:Locale}){
  const text=copy[locale];
  const workSlug=intlPages[locale].work.slug;
  const detailedDomains=new Set(caseStudies.map(item=>item.domain));
  const more=referenceProjects.filter(item=>!detailedDomains.has(item.domain));
  return <>
    <section className="services shell localized-work" aria-label={text.featured}>
      <div className="section-head"><div><p className="section-index">{text.featured}</p><h2>{intlPages[locale].work.title}</h2></div></div>
      <div className="reference-grid">{caseStudies.map(item=>{
        const localized=text.cases[item.slug];
        return <article className="reference-panel" key={item.slug}>
          {item.image&&<a href={`/${locale}/${workSlug}/${item.slug}`}><img src={item.image} alt={`${item.name} case study`} loading="lazy" decoding="async"/></a>}
          <div className="reference-panel-copy"><span>{localized.category}</span><h3>{item.name}</h3><p>{localized.summary}</p><small>{localized.scope}</small><div className="hero-actions"><a className="button ghost" href={`/${locale}/${workSlug}/${item.slug}`}>{text.caseLabel} <ArrowUpRight size={16}/></a><a className="button ghost" href={item.url} target="_blank" rel="noreferrer">{text.live} <ArrowUpRight size={16}/></a></div></div>
        </article>;
      })}</div>
    </section>
    <section className="services shell localized-work-more"><div className="section-head"><div><p className="section-index">{text.all}</p><h2>{text.moreLabel}</h2><p>{text.moreText}</p></div></div><div className="service-list">{more.map(item=><a className="service-row" href={item.url} target="_blank" rel="noreferrer" key={item.domain}><span><h3>{item.name}</h3><p>{item.domain}</p></span><ArrowUpRight className="service-arrow" size={18}/></a>)}</div></section>
  </>;
}
