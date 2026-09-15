import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { isLocale, locales, marketContent, type Locale } from "@/lib/i18n";
import { intlPageKeys, intlPages, localizedPath, pageKeyFromSlug, type IntlPageKey } from "@/lib/intl-pages";
import { SITE_URL } from "@/lib/seo";

const trEquivalent: Record<IntlPageKey, string> = {
  services: "/hizmetler", ecommerce: "/hizmetler/e-ticaret", search: "/hizmetler/seo-geo-aeo-aio", web: "/hizmetler/web-tasarim", security: "/hizmetler/dijital-guvenlik", work: "/referanslar", faq: "/sss", contact: "/iletisim",
};

export function generateStaticParams() { return locales.flatMap(locale => intlPageKeys.map(key => ({ locale, slug: intlPages[locale][key].slug }))); }

function alternatesFor(key: IntlPageKey) {
  return { "tr-TR": trEquivalent[key], en: localizedPath("en", key), "de-DE": localizedPath("de", key), "fr-FR": localizedPath("fr", key), "x-default": trEquivalent[key] };
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const key = pageKeyFromSlug(locale, slug);
  if (!key) return {};
  const page = intlPages[locale][key];
  const canonical = localizedPath(locale, key);
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical, languages: alternatesFor(key) },
    openGraph: { type:"website", siteName:"Olivon", locale:marketContent[locale].ogLocale, title:page.metaTitle, description:page.metaDescription, url:`${SITE_URL}${canonical}`, images:[{url:"/images/olivon-og.webp",width:1200,height:630,alt:"Olivon digital growth studio"}] },
    twitter: { card:"summary_large_image", title:page.metaTitle, description:page.metaDescription, images:["/images/olivon-og.webp"] },
    other: { "content-language": marketContent[locale].htmlLang },
  };
}

export default async function IntlLanding({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale as Locale;
  const key = pageKeyFromSlug(locale, slug);
  if (!key) notFound();
  const page = intlPages[locale][key];
  const canonical = localizedPath(locale, key);
  const breadcrumb = { "@context":"https://schema.org", "@type":"BreadcrumbList", "@id":`${SITE_URL}${canonical}#breadcrumb`, itemListElement:[{"@type":"ListItem",position:1,name:"Olivon",item:`${SITE_URL}/${locale}`},{"@type":"ListItem",position:2,name:page.title,item:`${SITE_URL}${canonical}`}] };
  const webPage = { "@context":"https://schema.org", "@type":"WebPage", "@id":`${SITE_URL}${canonical}#webpage`, url:`${SITE_URL}${canonical}`, name:page.metaTitle, description:page.metaDescription, inLanguage:marketContent[locale].htmlLang, isPartOf:{"@id":`${SITE_URL}/#website`}, about:{"@id":`${SITE_URL}/#organization`}, breadcrumb:{"@id":`${SITE_URL}${canonical}#breadcrumb`} };
  const service = ["services","ecommerce","search","web","security"].includes(key) ? { "@context":"https://schema.org", "@type":"Service", "@id":`${SITE_URL}${canonical}#service`, name:page.title, description:page.metaDescription, url:`${SITE_URL}${canonical}`, provider:{"@id":`${SITE_URL}/#organization`}, areaServed:locale === "de" ? ["DE","AT","CH"] : locale === "fr" ? ["FR","BE","CH"] : ["GB","EU","TR"] } : null;
  const faq = page.faq?.length ? { "@context":"https://schema.org", "@type":"FAQPage", "@id":`${SITE_URL}${canonical}#faq`, mainEntity:page.faq.map(([question,answer])=>({"@type":"Question",name:question,acceptedAnswer:{"@type":"Answer",text:answer}})) } : null;

  return (
    <main data-locale={locale} lang={marketContent[locale].htmlLang}>
      <StructuredData data={[webPage,breadcrumb,...(service?[service]:[]),...(faq?[faq]:[])]}/>
      <section className="page-hero shell"><p className="eyebrow"><span/> {page.kicker}</p><h1>{page.title}</h1><p className="lead">{page.lead}</p><div className="hero-actions"><a className="button primary" href={localizedPath(locale,"contact")}>{marketContent[locale].primary} <ArrowUpRight size={18}/></a>{key!=="services"&&<a className="button ghost" href={localizedPath(locale,"services")}>{marketContent[locale].nav.services}</a>}</div></section>
      {page.sections.length>0&&<section className="services shell intl-detail-grid" aria-label={page.title}><div className="service-list">{page.sections.map(section=><article className="service-row" key={section.title}><span><h2>{section.title}</h2><p>{section.text}</p>{section.bullets&&<ul>{section.bullets.map(item=><li key={item}><Check size={15}/>{item}</li>)}</ul>}</span></article>)}</div></section>}
      {page.faq?.length?<section className="faq shell" aria-labelledby="intl-faq-title"><div className="section-head"><div><p className="section-index">FAQ</p><h2 id="intl-faq-title">{key==="faq"?page.title:"FAQ"}</h2></div></div><div className="faq-list">{page.faq.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>:null}
      <section className="manifesto shell localized-contact"><p className="section-index">OLIVON</p><h2>{marketContent[locale].ctaTitle}</h2><p>{marketContent[locale].ctaText}</p><div className="hero-actions"><a className="button primary" href={localizedPath(locale,"contact")}>{marketContent[locale].primary} <ArrowUpRight size={18}/></a></div></section>
      <SiteFooter/>
    </main>
  );
}
