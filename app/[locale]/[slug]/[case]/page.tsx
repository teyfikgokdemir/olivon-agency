import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { caseStudies } from "@/lib/case-studies";
import { isLocale, locales, marketContent, type Locale } from "@/lib/i18n";
import { intlPages } from "@/lib/intl-pages";
import { SITE_URL } from "@/lib/seo";

const text: Record<Locale,Record<string,{category:string;summary:string;challenge:string;work:string[];outcome:string;evidence:string;technology:string[]}>>={
  en:{
    "oyku-baby-store":{category:"Baby & kids commerce",summary:"A clearer commerce experience built around product discovery, category flow and a more coherent brand storefront.",challenge:"Bring a broad catalog into a storefront that can be scanned quickly, feels trustworthy and remains strong on mobile.",work:["Commerce information architecture","Category and product presentation","Mobile storefront experience","Brand language and visual hierarchy"],outcome:"A more coherent storefront was created, making category discovery easier and keeping the brand’s owned sales channel at the center of the experience.",evidence:"The live project can be reviewed publicly. Commercial metrics remain private client data and are therefore not published here.",technology:["Commerce platform","Responsive interface","Product/category architecture"]},
    "bailas-kids":{category:"Kids fashion commerce",summary:"A premium storefront balancing visual brand expression with faster category and product discovery.",challenge:"Make a visually strong collection experience easy to scan on mobile without slowing the shopping journey.",work:["Premium storefront direction","Category flow","Conversion-focused interface","Mobile experience refinement"],outcome:"Brand aesthetics and product discovery were brought into the same flow, giving visitors a clearer path from collection to product.",evidence:"The live storefront can be reviewed publicly. Sales and conversion data are not disclosed because they are private client information.",technology:["Commerce platform","Responsive design","Conversion-focused UI"]},
    "favorim-kids":{category:"Kids fashion & outfits",summary:"A commerce experience that makes dense product and outfit assortments easier to browse and understand.",challenge:"Present a high-volume assortment without overwhelming visitors and connect visual merchandising more tightly to the sales journey.",work:["Commerce UX","Visual hierarchy","Shopping journey","Mobile content structure"],outcome:"Products and outfit combinations are presented in a more readable structure that controls visual density and guides visitors more clearly toward shopping actions.",evidence:"The public storefront can be reviewed directly. Financial and analytics results remain private client data.",technology:["Commerce platform","Responsive interface","Content and merchandising architecture"]},
    "recep-bozkurt":{category:"WooCommerce commerce",summary:"An end-to-end WooCommerce operation bringing catalog, product architecture and the sales journey into one maintainable system.",challenge:"Create an owned sales channel where products can be managed clearly and the mobile checkout journey feels trustworthy.",work:["WooCommerce setup","Product and category architecture","Cart and sales flow","Mobile interface and launch"],outcome:"A maintainable commerce channel was launched on the brand’s own domain, bringing product management and the shopping journey into one system.",evidence:"The live store at recepbozkurt.com can be reviewed publicly. Revenue and conversion metrics are not published.",technology:["WordPress","WooCommerce","Responsive commerce UI","Catalog and checkout flow"]}
  },
  de:{
    "oyku-baby-store":{category:"Baby- & Kinder-Commerce",summary:"Ein klareres Commerce-Erlebnis mit Fokus auf Produktsuche, Kategoriefluss und konsistenter Markenpräsentation.",challenge:"Ein breites Sortiment in einer schnell erfassbaren, vertrauenswürdigen und mobil starken Storefront-Struktur zusammenführen.",work:["Commerce-Informationsarchitektur","Kategorie- und Produktdarstellung","Mobile Storefront","Markensprache und visuelle Hierarchie"],outcome:"Es entstand eine konsistentere Commerce-Erfahrung, die Kategorieentdeckung erleichtert und den eigenen Vertriebskanal der Marke in den Mittelpunkt stellt.",evidence:"Das Live-Projekt ist öffentlich prüfbar. Geschäftliche Kennzahlen bleiben vertrauliche Kundendaten und werden hier nicht veröffentlicht.",technology:["Commerce-Plattform","Responsive Interface","Produkt- und Kategoriearchitektur"]},
    "bailas-kids":{category:"Kinderfashion Commerce",summary:"Ein Premium-Storefront, das Markenästhetik mit schnellerer Kategorie- und Produktsuche verbindet.",challenge:"Eine visuell starke Kollektion so strukturieren, dass sie mobil schnell erfassbar bleibt und den Einkaufsfluss nicht bremst.",work:["Premium Storefront","Kategoriefluss","Conversion-orientiertes Interface","Mobile Experience"],outcome:"Markenästhetik und Produktentdeckung wurden in einem klareren Ablauf verbunden und führen Besucher direkter von Kollektion zu Produkt.",evidence:"Die Live-Storefront ist öffentlich prüfbar. Verkaufs- und Conversion-Daten werden nicht veröffentlicht.",technology:["Commerce-Plattform","Responsive Design","Conversion UI"]},
    "favorim-kids":{category:"Kinderfashion & Outfits",summary:"Ein Commerce-Erlebnis, das große Produkt- und Kombinationssortimente leichter erfassbar macht.",challenge:"Hohe Produktdichte zeigen, ohne Besucher zu überfordern, und visuelles Merchandising stärker mit dem Verkaufsweg verbinden.",work:["Commerce UX","Visuelle Hierarchie","Shopping Journey","Mobile Inhaltsstruktur"],outcome:"Produkte und Kombinationen werden in einer lesbareren Struktur präsentiert, die visuelle Dichte reduziert und Besucher klarer zu Kaufhandlungen führt.",evidence:"Die öffentliche Storefront ist direkt prüfbar. Finanz- und Analytics-Daten bleiben vertraulich.",technology:["Commerce-Plattform","Responsive Interface","Content- und Merchandising-Architektur"]},
    "recep-bozkurt":{category:"WooCommerce",summary:"Ein durchgängiges WooCommerce-System, das Katalog, Produktarchitektur und Verkaufsprozess in einer wartbaren Struktur verbindet.",challenge:"Einen eigenen Vertriebskanal schaffen, in dem Produkte klar verwaltet werden und der mobile Kaufprozess Vertrauen vermittelt.",work:["WooCommerce Setup","Produkt- und Kategoriearchitektur","Warenkorb und Verkaufsfluss","Mobile UI und Launch"],outcome:"Ein wartbarer Commerce-Kanal wurde auf der eigenen Domain der Marke live geschaltet und verbindet Produktverwaltung mit dem Verkaufsprozess.",evidence:"Der Live-Shop auf recepbozkurt.com ist öffentlich prüfbar. Umsatz- und Conversion-Kennzahlen werden nicht veröffentlicht.",technology:["WordPress","WooCommerce","Responsive Commerce UI","Katalog- und Checkout-Flow"]}
  },
  fr:{
    "oyku-baby-store":{category:"E-commerce bébé & enfant",summary:"Une expérience e-commerce plus claire, centrée sur la découverte produit, les catégories et une vitrine de marque cohérente.",challenge:"Réunir un catalogue large dans une vitrine rapide à parcourir, rassurante et solide sur mobile.",work:["Architecture de l’information commerce","Présentation des catégories et produits","Expérience mobile","Langage de marque et hiérarchie visuelle"],outcome:"Une vitrine plus cohérente a été créée, facilitant la découverte des catégories et renforçant le canal de vente propriétaire de la marque.",evidence:"Le projet en ligne peut être vérifié publiquement. Les métriques commerciales restent des données client confidentielles.",technology:["Plateforme e-commerce","Interface responsive","Architecture produit/catégorie"]},
    "bailas-kids":{category:"Mode enfant",summary:"Une vitrine premium qui associe expression de marque et découverte plus fluide des catégories et produits.",challenge:"Conserver une présentation de collection forte visuellement tout en gardant une navigation mobile rapide et claire.",work:["Direction de vitrine premium","Parcours catégorie","Interface orientée conversion","Optimisation mobile"],outcome:"L’esthétique de marque et la découverte produit ont été réunies dans un parcours plus lisible, de la collection jusqu’au produit.",evidence:"La boutique en ligne est publiquement consultable. Les données de vente et de conversion ne sont pas publiées.",technology:["Plateforme e-commerce","Design responsive","UI orientée conversion"]},
    "favorim-kids":{category:"Mode enfant & looks",summary:"Une expérience e-commerce qui rend les assortiments de produits et de looks plus simples à parcourir.",challenge:"Présenter une forte densité de produits sans surcharger la décision et relier davantage le merchandising visuel au parcours de vente.",work:["UX e-commerce","Hiérarchie visuelle","Parcours d’achat","Structure mobile"],outcome:"Les produits et combinaisons sont présentés dans une structure plus lisible qui contrôle la densité visuelle et guide mieux vers les actions d’achat.",evidence:"La boutique publique peut être vérifiée directement. Les données financières et analytics restent confidentielles.",technology:["Plateforme e-commerce","Interface responsive","Architecture contenu et merchandising"]},
    "recep-bozkurt":{category:"WooCommerce",summary:"Un dispositif WooCommerce complet réunissant catalogue, architecture produit et parcours de vente dans un système maintenable.",challenge:"Créer un canal de vente propriétaire où les produits sont gérés clairement et où le parcours mobile inspire confiance.",work:["Installation WooCommerce","Architecture produit et catégorie","Panier et parcours de vente","Interface mobile et mise en ligne"],outcome:"Un canal e-commerce maintenable a été mis en ligne sur le domaine de la marque, réunissant gestion produit et parcours d’achat.",evidence:"La boutique recepbozkurt.com est publiquement consultable. Les chiffres de revenu et conversion ne sont pas publiés.",technology:["WordPress","WooCommerce","UI e-commerce responsive","Catalogue et checkout"]}
  }
};

const labels:Record<Locale,{challenge:string;work:string;outcome:string;evidence:string;technology:string;live:string;back:string}>={
  en:{challenge:"Challenge",work:"What we delivered",outcome:"Outcome",evidence:"Evidence",technology:"Technology",live:"View live project",back:"Back to selected work"},
  de:{challenge:"Herausforderung",work:"Umsetzung",outcome:"Ergebnis",evidence:"Nachweis",technology:"Technologie",live:"Live-Projekt ansehen",back:"Zurück zu den Referenzen"},
  fr:{challenge:"Enjeu",work:"Ce que nous avons livré",outcome:"Résultat",evidence:"Preuve",technology:"Technologie",live:"Voir le projet en ligne",back:"Retour aux réalisations"}
};

export function generateStaticParams(){return locales.flatMap(locale=>caseStudies.map(item=>({locale,slug:intlPages[locale].work.slug,case:item.slug})));}

function caseAlternates(caseSlug:string){
  return {
    "tr-TR":`/referanslar/${caseSlug}`,
    en:`/en/${intlPages.en.work.slug}/${caseSlug}`,
    "de-DE":`/de/${intlPages.de.work.slug}/${caseSlug}`,
    "fr-FR":`/fr/${intlPages.fr.work.slug}/${caseSlug}`,
    "x-default":`/referanslar/${caseSlug}`,
  };
}

export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string;case:string}>}):Promise<Metadata>{
  const {locale:raw,slug,case:caseSlug}=await params;
  if(!isLocale(raw)) return {};
  const locale=raw as Locale;
  if(slug!==intlPages[locale].work.slug) return {};
  const item=caseStudies.find(entry=>entry.slug===caseSlug);
  const localized=text[locale][caseSlug];
  if(!item||!localized) return {};
  const canonical=`/${locale}/${slug}/${caseSlug}`;
  return {title:`${item.name} | ${intlPages[locale].work.metaTitle}`,description:localized.summary,alternates:{canonical,languages:caseAlternates(caseSlug)},openGraph:{type:"article",siteName:"Olivon",locale:marketContent[locale].ogLocale,title:item.name,description:localized.summary,url:`${SITE_URL}${canonical}`,images:item.image?[{url:item.image,alt:item.name}]:undefined},other:{"content-language":marketContent[locale].htmlLang}};
}

export default async function LocalizedCase({params}:{params:Promise<{locale:string;slug:string;case:string}>}){
  const {locale:raw,slug,case:caseSlug}=await params;
  if(!isLocale(raw)) notFound();
  const locale=raw as Locale;
  if(slug!==intlPages[locale].work.slug) notFound();
  const item=caseStudies.find(entry=>entry.slug===caseSlug);
  const localized=text[locale][caseSlug];
  if(!item||!localized) notFound();
  const canonical=`/${locale}/${slug}/${caseSlug}`;
  const label=labels[locale];
  const schema={"@context":"https://schema.org","@type":"CreativeWork","@id":`${SITE_URL}${canonical}#case-study`,name:item.name,description:localized.summary,url:`${SITE_URL}${canonical}`,inLanguage:marketContent[locale].htmlLang,creator:{"@id":`${SITE_URL}/#organization`},about:localized.category};
  return <main data-locale={locale} lang={marketContent[locale].htmlLang} className="inner-page">
    <StructuredData data={schema}/>
    <article className="case-study shell"><a className="article-back" href={`/${locale}/${slug}`}>← {label.back}</a><header className="article-header"><span>{localized.category}</span><h1>{item.name}</h1><p>{localized.summary}</p></header>{item.image&&<img className="article-hero-image" src={item.image} alt={`${item.name} project`} />}
      <div className="article-body"><section><h2>{label.challenge}</h2><p>{localized.challenge}</p></section><section><h2>{label.work}</h2><ul>{localized.work.map(value=><li key={value}>{value}</li>)}</ul></section><section><h2>{label.outcome}</h2><p>{localized.outcome}</p></section><section><h2>{label.evidence}</h2><p>{localized.evidence}</p></section><section><h2>{label.technology}</h2><p>{localized.technology.join(" · ")}</p></section></div>
      <div className="hero-actions"><a className="button primary" href={item.url} target="_blank" rel="noreferrer">{label.live} <ArrowUpRight size={18}/></a></div>
    </article><SiteFooter/>
  </main>;
}
