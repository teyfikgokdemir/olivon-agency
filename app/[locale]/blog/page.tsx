import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { isLocale, marketContent, type Locale } from "@/lib/i18n";
import { allIntlArticles } from "@/lib/intl-blog";
import { SITE_URL } from "@/lib/seo";

const labels: Record<Locale, { kicker:string; title:string; intro:string; read:string; metaTitle:string; metaDescription:string }> = {
  en:{kicker:"INSIGHTS",title:"Practical notes for digital growth.",intro:"Cross-border commerce, international SEO, AI visibility, web systems and platform decisions—written to support real decisions, not fill a content calendar.",read:"Read article",metaTitle:"Insights | International E-commerce, SEO & AI | Olivon",metaDescription:"Practical international e-commerce, SEO, GEO, AEO, AIO, web and platform guides from Olivon."},
  de:{kicker:"INSIGHTS",title:"Klare Notizen für bessere digitale Entscheidungen.",intro:"E-Commerce, Migration, internationales SEO, KI-Sichtbarkeit und Plattformfragen für Teams in Deutschland, Österreich und der Schweiz.",read:"Artikel lesen",metaTitle:"Insights | E-Commerce, SEO & KI für DACH | Olivon",metaDescription:"Praxisnahe Beiträge zu E-Commerce, Migration, SEO, GEO, AEO, AIO und Plattformentscheidungen für Deutschland, Österreich und die Schweiz."},
  fr:{kicker:"INSIGHTS",title:"Des repères clairs pour de meilleures décisions digitales.",intro:"E-commerce international, SEO, visibilité IA et systèmes web pour la France, la Belgique, la Suisse et les marchés francophones.",read:"Lire l’article",metaTitle:"Insights | E-commerce, SEO & IA | Olivon",metaDescription:"Guides pratiques sur l’e-commerce, le SEO, GEO, AEO, AIO et la visibilité IA pour la France, la Belgique, la Suisse et les marchés francophones."},
};

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
  const {locale:raw}=await params;
  if(!isLocale(raw)) return {};
  const locale=raw as Locale;
  const copy=labels[locale];
  const canonical=`/${locale}/blog`;
  return {
    title:copy.metaTitle,
    description:copy.metaDescription,
    alternates:{canonical,languages:{"tr-TR":"/blog",en:"/en/blog","de-DE":"/de/blog","fr-FR":"/fr/blog","x-default":"/blog"}},
    openGraph:{type:"website",siteName:"Olivon",locale:marketContent[locale].ogLocale,title:copy.metaTitle,description:copy.metaDescription,url:`${SITE_URL}${canonical}`},
    other:{"content-language":marketContent[locale].htmlLang},
  };
}

export default async function LocalizedBlog({params}:{params:Promise<{locale:string}>}){
  const {locale:raw}=await params;
  if(!isLocale(raw)) notFound();
  const locale=raw as Locale;
  const copy=labels[locale];
  const articles=allIntlArticles[locale];
  const blogUrl=`${SITE_URL}/${locale}/blog`;
  const schema={"@context":"https://schema.org","@type":"Blog","@id":`${blogUrl}#blog`,name:copy.metaTitle,url:blogUrl,description:copy.metaDescription,inLanguage:marketContent[locale].htmlLang,isPartOf:{"@id":`${SITE_URL}/#website`},publisher:{"@id":`${SITE_URL}/#organization`},blogPost:articles.map(article=>({"@id":`${blogUrl}/${article.slug}#article`}))};
  const itemList={"@context":"https://schema.org","@type":"ItemList","@id":`${blogUrl}#articles`,itemListElement:articles.map((article,index)=>({"@type":"ListItem",position:index+1,url:`${blogUrl}/${article.slug}`,name:article.title}))};
  return <main data-locale={locale} lang={marketContent[locale].htmlLang} className="inner-page">
    <StructuredData data={[schema,itemList]}/>
    <section className="inner-hero shell"><p className="section-index">{copy.kicker}</p><h1>{copy.title}</h1><p>{copy.intro}</p></section>
    <section className="article-grid shell">{articles.map(article=><a href={`/${locale}/blog/${article.slug}`} className="article-card" key={article.slug}><img src={article.image} alt={article.title} loading="lazy" decoding="async"/><span>{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><em>{article.date} · {article.readingTime} <ArrowUpRight/></em></a>)}</section>
    <SiteFooter/>
  </main>;
}
