import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <main className="inner-page">
    <header className="inner-nav shell"><Link className="brand" href="/"><span className="brand-mark">O</span><span>OLIVON</span></Link><Link href="/">Ana sayfa</Link></header>
    <article className="legal-content shell"><p className="section-index">YASAL · SON GÜNCELLEME 9 EYLÜL 2026</p><h1>{title}</h1><p className="article-lead">{intro}</p>{children}<aside><strong>İletişim</strong><br />Olivon Dijital Reklam ve Güvenlik Çözümleri · Kayseri, Türkiye<br /><a href="mailto:info@olivon.com.tr">info@olivon.com.tr</a></aside></article>
    <SiteFooter />
  </main>;
}
