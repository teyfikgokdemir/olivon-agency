import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  return <main className="inner-page">
    <header className="inner-nav shell"><Link className="brand" href="/"><span className="brand-mark">O</span><span>OLIVON</span></Link><Link href="/blog">Tüm yazılar</Link></header>
    <article className="article-detail shell"><p className="section-index">{article.category} · {article.date}</p><h1>{article.title}</h1><p className="article-lead">{article.excerpt}</p>{article.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}<aside>İşletmeniz için doğru kanal ve altyapı kararını birlikte değerlendirelim. <a href="mailto:info@olivon.com.tr">Olivon ile konuşun →</a></aside></article>
    <SiteFooter />
  </main>;
}
