import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="Olivon ana sayfa"><span className="brand-mark">O</span><span>OLIVON</span></Link>
      <nav className="site-nav" aria-label="Ana menü">
        <div className="nav-dropdown">
          <Link href="/hizmetler">Hizmetler <ChevronDown size={14} /></Link>
          <div className="nav-dropdown-panel">
            <Link href="/hizmetler/web-tasarim">Web tasarım & geliştirme</Link>
            <Link href="/hizmetler/e-ticaret">E-ticaret sistemleri</Link>
            <Link href="/hizmetler/seo-geo-aeo-aio">Arama görünürlüğü</Link>
            <Link href="/hizmetler/ai-otomasyon">AI otomasyon & iş akışları</Link>
            <Link href="/hizmetler">Tüm uzmanlıklar</Link>
          </div>
        </div>
        <div className="nav-dropdown">
          <Link href="/ikas">ikas <ChevronDown size={14} /></Link>
          <div className="nav-dropdown-panel nav-dropdown-panel-ikas">
            <Link href="/ikas">ikas Partner hizmetleri</Link>
            <Link href="/ikas#entegrasyonlar">Entegrasyonlar</Link>
            <Link href="/ikas#check-up">ikas Check-up</Link>
          </div>
        </div>
        <Link href="/#yaklasim">Yaklaşım</Link>
        <Link href="/referanslar">Referanslar</Link>
        <Link href="/blog">Blog</Link>
      </nav>
      <Link className="nav-cta" href="/#iletisim">Projenizi konuşalım <ArrowUpRight size={16} /></Link>
      <details className="site-mobile-menu">
        <summary>Menü</summary>
        <div className="site-mobile-panel">
          <details><summary>Hizmetler</summary><div><Link href="/hizmetler/web-tasarim">Web tasarım & geliştirme</Link><Link href="/hizmetler/e-ticaret">E-ticaret sistemleri</Link><Link href="/hizmetler/seo-geo-aeo-aio">Arama görünürlüğü</Link><Link href="/hizmetler/ai-otomasyon">AI otomasyon</Link><Link href="/hizmetler">Tüm uzmanlıklar</Link></div></details>
          <details><summary>ikas</summary><div><Link href="/ikas">ikas Partner hizmetleri</Link><Link href="/ikas#entegrasyonlar">Entegrasyonlar</Link><Link href="/ikas#check-up">ikas Check-up</Link></div></details>
          <Link href="/#yaklasim">Yaklaşım</Link><Link href="/referanslar">Referanslar</Link><Link href="/blog">Blog</Link><Link href="/#iletisim">İletişim</Link>
        </div>
      </details>
    </header>
  );
}
