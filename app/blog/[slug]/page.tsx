import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import { SiteFooter } from "@/components/site-footer";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt, alternates: { canonical: `/blog/${article.slug}` }, openGraph: { type: "article", title: article.title, description: article.excerpt, url: `/blog/${article.slug}` } };
}

const visualClass = (slug:string) => {
  if (slug.includes("yapay-zeka")) return "blog-visual-ai";
  if (slug.includes("guvenlik")) return "blog-visual-security";
  if (slug.includes("shopify") || slug.includes("pazaryeri")) return "blog-visual-commerce";
  return "blog-visual-search";
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articleIndex = articles.findIndex(item => item.slug === slug);
  const article = articles[articleIndex];
  if (!article) notFound();
  const related = [1,2,3].map(offset => articles[(articleIndex + offset) % articles.length]).filter(Boolean);

  return <main className="inner-page blog-detail-page">
    <article className="blog-article shell">
      <nav className="blog-breadcrumb" aria-label="İçerik yolu"><a href="/">Ana sayfa</a><span>›</span><a href="/blog">Blog</a><span>›</span><span>{article.category}</span></nav>
      <header className="blog-article-head"><div><p className="section-index">{article.category} · {article.date}</p><h1>{article.title}</h1><p className="article-lead">{article.excerpt}</p></div><aside className="blog-toc"><strong>Bu yazıda</strong>{article.sections.map(([title])=><a href={`#${title.toLowerCase().replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/gi,"-")}`} key={title}>{title}</a>)}</aside></header>
      <div className={`blog-hero-visual ${visualClass(article.slug)}`} role="img" aria-label={`${article.title} için hazırlanan Olivon görseli`} />
      <div className="blog-reading-grid"><div className="blog-copy">{article.sections.map(([title,text],index)=><section id={title.toLowerCase().replace(/[^a-z0-9ğüşöçıİĞÜŞÖÇ]+/gi,"-")} key={title}><h2>{title}</h2><p>{text}</p>{index===1&&<div className="blog-inline-visual" aria-hidden="true"/>}</section>)}</div><aside className="blog-side-cta"><p className="section-index">OLIVON NOTU</p><h3>Bilgiyi uygulamaya dönüştürün.</h3><p>Markanız için doğru strateji, altyapı ve ölçüm sistemini birlikte netleştirebiliriz.</p><a href="mailto:info@olivon.com.tr">Projenizi konuşalım <ArrowUpRight size={16}/></a></aside></div>
      <section className="blog-related"><div className="blog-related-head"><div><p className="section-index">DAHA FAZLASI</p><h2>İlginizi çekebilecek <em>diğer yazılar</em></h2></div><a href="/blog">Tüm blog yazıları <ArrowUpRight size={16}/></a></div><div className="blog-related-grid">{related.map((item,index)=><a className="blog-related-card" href={`/blog/${item.slug}`} key={item.slug}><div className={`blog-related-image blog-related-image-${index}`} aria-hidden="true"/><span>{item.category}</span><h3>{item.title}</h3><p>{item.excerpt}</p><em>{item.date} <ArrowUpRight size={15}/></em></a>)}</div></section>
    </article>
    <SiteFooter />
  </main>;
}
