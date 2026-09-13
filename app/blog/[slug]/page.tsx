import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/articles";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/blog/${article.slug}`,
      images: [{ url: article.image, alt: article.title }],
      publishedTime: article.dateISO,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter(item => item.slug !== article.slug).slice(0, 3);
  const articleUrl = `${SITE_URL}/blog/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    url: articleUrl,
    headline: article.title,
    description: article.excerpt,
    articleSection: article.category,
    image: {
      "@type": "ImageObject",
      "@id": `${articleUrl}#primaryimage`,
      url: `${SITE_URL}${article.image}`,
      contentUrl: `${SITE_URL}${article.image}`,
      caption: article.title,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
      url: articleUrl,
      isPartOf: { "@id": `${SITE_URL}/#website` },
    },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "tr-TR",
    datePublished: article.dateISO,
    dateModified: article.dateISO,
  };

  return <main className="inner-page">
    <StructuredData data={[
      articleSchema,
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Blog",path:"/blog"},{name:article.title,path:`/blog/${article.slug}`}])
    ]} />
    <article className="article-detail shell">
      <p className="section-index">{article.category} · {article.date}</p>
      <h1>{article.title}</h1>
      <p className="article-lead">{article.excerpt}</p>
      <img className="article-hero-image" src={article.image} alt={`${article.title} ana görsel`} decoding="async" />
      {article.sections.map(([title, text], index) => <section key={title}><h2>{title}</h2><p>{text}</p>{index === 1 && <img className="article-inline-image" src={article.inlineImage} alt={`${article.title} içerik görseli`} loading="lazy" decoding="async" />}</section>)}
      <aside>Bu konuyu markanızın kendi altyapısı ve hedefleri üzerinden değerlendirmek için <a href="/iletisim">Olivon ile konuşun</a>. Hizmet kapsamını görmek için <a href="/hizmetler">uzmanlıkları inceleyin</a>.</aside>
    </article>
    <section className="related-articles shell">
      <p className="section-index">OKUMAYA DEVAM EDİN</p>
      <h2>İlgili rehberler</h2>
      <div>{related.map(item => <a href={`/blog/${item.slug}`} key={item.slug}><img src={item.image} alt={`${item.title} blog görseli`} loading="lazy" decoding="async" /><span>{item.category}</span><strong>{item.title}</strong><em>{item.date} <ArrowUpRight size={16} /></em></a>)}</div>
    </section>
    <SiteFooter />
  </main>;
}
