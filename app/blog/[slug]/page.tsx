import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/articles";
import { SiteFooter } from "@/components/site-footer";

export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter(item => item.slug !== article.slug).slice(0, 3);
  return <main className="inner-page">
    <article className="article-detail shell">
      <p className="section-index">{article.category} · {article.date}</p>
      <h1>{article.title}</h1>
      <p className="article-lead">{article.excerpt}</p>
      <img className="article-hero-image" src={article.image} alt={`${article.title} ana görsel`} />
      {article.sections.map(([title, text], index) => <section key={title}><h2>{title}</h2><p>{text}</p>{index === 1 && <img className="article-inline-image" src={article.inlineImage} alt={`${article.title} içerik görseli`} />}</section>)}
      <aside>İşletmeniz için doğru kanal ve altyapı kararını birlikte değerlendirelim. <a href="mailto:info@olivon.com.tr">Olivon ile konuşun</a></aside>
    </article>
    <section className="related-articles shell">
      <p className="section-index">OKUMAYA DEVAM EDİN</p>
      <h2>İlginizi çekebilecek diğer yazılar</h2>
      <div>{related.map(item => <a href={`/blog/${item.slug}`} key={item.slug}><img src={item.image} alt={`${item.title} blog görseli`} /><span>{item.category}</span><strong>{item.title}</strong><em>{item.date} <ArrowUpRight size={16} /></em></a>)}</div>
    </section>
    <SiteFooter />
  </main>;
}
