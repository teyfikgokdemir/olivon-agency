import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/articles";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dijital Büyüme Blogu | E-Ticaret, SEO, AI ve Web Rehberleri",
  description: "Shopify, ikas, WooCommerce, e-ticaret kârlılığı, SEO, GEO, AEO, AIO, yapay zekâ görünürlüğü, web deneyimi ve güvenlik üzerine uygulanabilir rehberler.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Olivon Blog | E-Ticaret, SEO, AI ve Web", description: "Dijital kararlar için uygulanabilir rehberler.", url: "/blog", type: "website" },
};

export default function BlogPage() {
  const blogUrl = `${SITE_URL}/blog`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${blogUrl}#blog`,
    name: "Olivon Blog",
    url: blogUrl,
    description: "E-ticaret, SEO, yapay zekâ görünürlüğü, web deneyimi ve dijital güvenlik üzerine Olivon rehberleri.",
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: articles.map(article => ({ "@id": `${SITE_URL}/blog/${article.slug}#article` })),
  };
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${blogUrl}#articles`,
    name: "Olivon Blog Yazıları",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/blog/${article.slug}`,
      name: article.title,
    })),
  };

  return <main className="inner-page">
    <StructuredData data={[schema,itemListSchema,breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Blog",path:"/blog"}])]} />
    <section className="inner-hero shell"><p className="section-index">BLOG & REHBERLER</p><h1>Dijital kararlar için<br /><em>açık ve uygulanabilir</em> notlar.</h1><p>E-ticaret, platform seçimi, arama görünürlüğü, AI, web deneyimi ve güvenlik üzerine doğrudan karar sürecine yardımcı olan içerikler.</p></section>
    <section className="article-grid shell">{articles.map(article => <a href={`/blog/${article.slug}`} className="article-card" key={article.slug}><img src={article.image} alt={`${article.title} rehber görseli`} loading="lazy" decoding="async" /><span>{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><em>{article.date} <ArrowUpRight /></em></a>)}</section>
    <SiteFooter />
  </main>;
}
