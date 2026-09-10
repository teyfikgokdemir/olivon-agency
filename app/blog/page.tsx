import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/articles";
import { SiteFooter } from "@/components/site-footer";

export default function BlogPage() {
  return <main className="inner-page">
    <section className="inner-hero shell"><p className="section-index">BLOG</p><h1>Dijital kararlar için<br /><em>açık ve uygulanabilir</em> notlar.</h1><p>E-ticaret, görünürlük, web deneyimi ve güvenlik üzerine sahada kullanılabilecek rehberler.</p></section>
    <section className="article-grid shell">{articles.map(article => <a href={`/blog/${article.slug}`} className="article-card" key={article.slug}><img src={article.image} alt={`${article.title} blog görseli`} /><span>{article.category}</span><h2>{article.title}</h2><p>{article.excerpt}</p><em>{article.date} <ArrowUpRight /></em></a>)}</section>
    <SiteFooter />
  </main>;
}
