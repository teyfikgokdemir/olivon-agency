import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { isLocale, locales, marketContent, type Locale } from "@/lib/i18n";
import { allIntlArticleBySlug, allIntlArticles, localizedArticleAlternates } from "@/lib/intl-blog";
import { SITE_URL } from "@/lib/seo";

const backLabel: Record<Locale,string>={en:"All insights",de:"Alle Insights",fr:"Tous les articles"};
const ctaLabel: Record<Locale,{title:string;text:string;button:string}>={
  en:{title:"Need this applied to your own stack?",text:"We can turn the principle into a scoped migration, SEO, commerce or web implementation plan.",button:"Start a project"},
  de:{title:"Soll das auf Ihr eigenes System angewendet werden?",text:"Wir übersetzen die Prinzipien in einen klaren Migrations-, SEO-, Commerce- oder Web-Projektumfang.",button:"Projekt besprechen"},
  fr:{title:"Vous voulez appliquer cette méthode à votre propre système ?",text:"Nous pouvons transformer ces principes en einen périmètre clair pour une migration, le SEO, l’e-commerce ou le web.",button:"Parler du projet"},
};

export function generateStaticParams(){return locales.flatMap(locale=>allIntlArticles[locale].map(article=>({locale,article:article.slug})));}

export async function generateMetadata({params}:{params:Promise<{locale:string;article:string}>}):Promise<Metadata>{
  const {locale:raw,article:slug}=await params;
  if(!isLocale(raw)) return {};
  const locale=raw as Locale;
  const article=allIntlArticleBySlug(locale,slug);
  if(!article) return {};
  const canonical=`/${locale}/blog/${article.slug}`;
  return {title:`${article.title} | Olivon`,description:article.excerpt,alternates:{canonical,languages:localizedArticleAlternates(article.group)},openGraph:{type:"article",siteName:"Olivon",locale:marketContent[locale].ogLocale,title:article.title,description:article.excerpt,url:`${SITE_URL}${canonical}`,publishedTime:article.dateISO,images:[{url:article.image,alt:article.title}]},twitter:{card:"summary_large_image",title:article.title,description:article.excerpt,images:[article.image]},other:{"content-language":marketContent[locale].htmlLang}};
}

export default async function LocalizedArticle({params}:{params:Promise<{locale:string;article:string}>}){
  const {locale:raw,article:slug}=await params;
  if(!isLocale(raw)) notFound();
  const locale=raw as Locale;
  const article=allIntlArticleBySlug(locale,slug);
  if(!article) notFound();
  const canonical=`/${locale}/blog/${article.slug}`;
  const articleSchema={"@context":"https://schema.org","@type":"Article","@id":`${SITE_URL}${canonical}#article`,headline:article.title,description:article.excerpt,datePublished:article.dateISO,dateModified:article.dateISO,inLanguage:marketContent[locale].htmlLang,image:`${SITE_URL}${article.image}`,mainEntityOfPage:{"@id":`${SITE_URL}${canonical}#webpage`},publisher:{"@id":`${SITE_URL}/#organization`},author:{"@id":`${SITE_URL}/#organization`}};
  const webPage={"@context":"https://schema.org","@type":"WebPage","@id":`${SITE_URL}${canonical}#webpage`,url:`${SITE_URL}${canonical}`,name:article.title,description:article.excerpt,inLanguage:marketContent[locale].htmlLang,isPartOf:{"@id":`${SITE_URL}/#website`}};
  const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Olivon",item:`${SITE_URL}/${locale}`},{"@type":"ListItem",position:2,name:"Insights",item:`${SITE_URL}/${locale}/blog`},{"@type":"ListItem",position:3,name:article.title,item:`${SITE_URL}${canonical}`}]};
  const cta=ctaLabel[locale];
  return <main data-locale={locale} lang={marketContent[locale].htmlLang} className="inner-page">
    <StructuredData data={[articleSchema,webPage,breadcrumb]}/>
    <article className="article-detail shell">
      <a className="article-back" href={`/${locale}/blog`}>← {backLabel[locale]}</a>
      <p className="section-index">{article.category}</p>
      <h1>{article.title}</h1>
      <p className="article-lead">{article.excerpt}</p>
      <p className="article-meta">{article.date} · {article.readingTime}</p>
      <img className="article-hero-image" src={article.image} alt={article.title} decoding="async"/>
      {article.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}</section>)}
    </article>
    <section className="manifesto shell localized-contact"><p className="section-index">OLIVON</p><h2>{cta.title}</h2><p>{cta.text}</p><div className="hero-actions"><a className="button primary" href={`/${locale}/${locale==='de'?'kontakt':'contact'}`}>{cta.button} <ArrowUpRight size={18}/></a></div></section>
    <SiteFooter/>
  </main>;
}
