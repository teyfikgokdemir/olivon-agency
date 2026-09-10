import { SiteFooter } from "@/components/site-footer";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <main className="inner-page">
    <article className="legal-content shell"><p className="section-index">YASAL · SON GÜNCELLEME 9 EYLÜL 2026</p><h1>{title}</h1><p className="article-lead">{intro}</p>{children}<aside><strong>İletişim</strong><br />Olivon Dijital Reklam ve Güvenlik Çözümleri · Kayseri, Türkiye<br /><a href="mailto:info@olivon.com.tr">info@olivon.com.tr</a></aside></article>
    <SiteFooter />
  </main>;
}
