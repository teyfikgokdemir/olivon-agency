import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { isLocale, marketContent, locales, type Locale } from "@/lib/i18n";
import { localizedPath, type IntlPageKey } from "@/lib/intl-pages";
import { SITE_URL } from "@/lib/seo";

const serviceKeys: IntlPageKey[] = ["ecommerce", "web", "search", "services", "services", "security"];

export function generateStaticParams() { return locales.map(locale => ({ locale })); }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const content = marketContent[locale];
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/${locale}`, languages: { "tr-TR": "/", en: "/en", "de-DE": "/de", "fr-FR": "/fr", "x-default": "/" } },
    openGraph: { type:"website", locale:content.ogLocale, siteName:"Olivon", title:content.metaTitle, description:content.metaDescription, url:`${SITE_URL}/${locale}`, images:[{url:"/images/olivon-og.webp",width:1200,height:630,alt:"Olivon digital growth studio"}] },
    twitter: { card:"summary_large_image", title:content.metaTitle, description:content.metaDescription, images:["/images/olivon-og.webp"] },
    other: { "content-language": content.htmlLang },
  };
}

export default async function LocalizedHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const content = marketContent[locale];
  const pageSchema = { "@context":"https://schema.org", "@type":"WebPage", "@id":`${SITE_URL}/${locale}#webpage`, url:`${SITE_URL}/${locale}`, name:content.metaTitle, description:content.metaDescription, isPartOf:{"@id":`${SITE_URL}/#website`}, about:{"@id":`${SITE_URL}/#organization`}, inLanguage:content.htmlLang };

  return (
    <main data-locale={locale} lang={content.htmlLang}>
      <StructuredData data={pageSchema}/>
      <section className="hero shell" id="top">
        <div className="hero-copy"><p className="eyebrow"><span/> {content.market}</p><h1><span>{content.title}</span><em>{content.accent}</em></h1><p className="lead">{content.lead}</p><div className="hero-actions"><a className="button primary" href={localizedPath(locale,"contact")}>{content.primary} <ArrowUpRight size={18}/></a><a className="button ghost" href={localizedPath(locale,"work")}>{content.secondary}</a></div></div>
        <div className="hero-stage hero-stage-photo" aria-hidden="true"><img src="/images/hero/olivon-hero-main.webp" alt="" width="1672" height="941" fetchPriority="high" decoding="async"/></div>
        <div className="hero-foot"><span>STRATEGY</span><span>COMMERCE</span><span>VISIBILITY</span><span>SECURITY</span></div>
      </section>
      <section className="platform-strip" aria-label="Platforms"><div className="platform-track">{["Shopify","ikas","WooCommerce","Cloudflare","Google","Meta","Shopify","ikas","WooCommerce","Cloudflare","Google","Meta"].map((item,i)=><span key={`${item}-${i}`}>{item}</span>)}</div></section>
      <section className="manifesto shell" id="approach"><p className="section-index">{content.manifestoKicker}</p><h2>{content.manifestoTitle}</h2><p>{content.manifesto}</p></section>
      <section className="services shell" id="services"><div className="section-head"><div><p className="section-index">{content.servicesKicker}</p><h2>{content.servicesTitle}</h2></div></div><div className="service-list">{content.services.map(([title,detail],index)=><a href={localizedPath(locale,serviceKeys[index] ?? "services")} className="service-row" key={title}><span><h3>{title}</h3><p>{detail}</p></span><span className="service-arrow"><ArrowUpRight/></span></a>)}</div></section>
      <section className="process shell" id="process"><div className="section-head"><div><p className="section-index">{content.processKicker}</p><h2>{content.processTitle}</h2></div></div><div className="process-grid">{content.process.map(([title,detail],index)=><article key={title}><span>0{index+1}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></section>
      <section className="manifesto shell localized-contact" id="contact"><p className="section-index">OLIVON</p><h2>{content.ctaTitle}</h2><p>{content.ctaText}</p><div className="hero-actions"><a className="button primary" href={localizedPath(locale,"contact")}>{content.primary} <ArrowUpRight size={18}/></a></div></section>
      <SiteFooter/>
    </main>
  );
}
