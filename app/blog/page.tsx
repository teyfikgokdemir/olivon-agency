import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/articles";
import { SiteFooter } from "@/components/site-footer";

const blogVisual=(slug:string)=>slug.includes("yapay-zeka")?"ai":slug.includes("guvenlik")?"security":slug.includes("shopify")||slug.includes("pazaryeri")?"commerce":"search";

export default function BlogPage() {
  return <main className="inner-page blog-index-page">
    <section className="inner-hero shell"><p className="section-index">BLOG</p><h1>Dijital kararlar için<br /><em>açık ve uygulanabilir</em> notlar.</h1><p>E-ticaret, görünürlük, web deneyimi ve güvenlik üzerine sahada kullanılabilecek rehberler.</p></section>
    <section className="article-grid blog-visual-index shell">{articles.map(article => <a href={`/blog/${article.slug}`} className="article-card blog-index-card" key={article.slug}><div className={`blog-index-image blog-index-image-${blogVisual(article.slug)}`} aria-hidden="true"/><div className="blog-index-copy"><span>{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><em>{article.date} <ArrowUpRight /></em></div></a>)}</section>
    <SiteFooter />
  </main>;
}
