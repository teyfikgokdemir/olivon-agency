import { ArrowUpRight, ChevronDown } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <a className="brand" href="/" aria-label="Olivon ana sayfa"><span className="brand-mark">O</span><span>OLIVON</span></a>
      <nav className="site-nav" aria-label="Ana menü">
        <div className="nav-dropdown">
          <a href="/hizmetler">Hizmetler <ChevronDown size={14} /></a>
          <div className="nav-dropdown-panel">
            <a href="/hizmetler/web-tasarim">Web tasarım & geliştirme</a>
            <a href="/hizmetler/e-ticaret">E-ticaret sistemleri</a>
            <a href="/hizmetler/seo-geo-aeo-aio">Arama görünürlüğü</a>
            <a href="/hizmetler/ai-otomasyon">AI otomasyon & iş akışları</a>
            <a href="/hizmetler">Tüm uzmanlıklar</a>
          </div>
        </div>
        <div className="nav-dropdown">
          <a href="/ikas">ikas <ChevronDown size={14} /></a>
          <div className="nav-dropdown-panel nav-dropdown-panel-ikas">
            <a href="/ikas">ikas Partner hizmetleri</a>
            <a href="/ikas#entegrasyonlar">Entegrasyonlar</a>
            <a href="/ikas#check-up">ikas Check-up</a>
          </div>
        </div>
        <a href="/#yaklasim">Yaklaşım</a>
        <a href="/referanslar">Referanslar</a>
        <a href="/blog">Blog</a>
      </nav>
      <a className="nav-cta" href="/#iletisim">Projenizi konuşalım <ArrowUpRight size={16} /></a>
      <details className="site-mobile-menu">
        <summary>Menü</summary>
        <div className="site-mobile-panel">
          <details><summary>Hizmetler</summary><div><a href="/hizmetler/web-tasarim">Web tasarım & geliştirme</a><a href="/hizmetler/e-ticaret">E-ticaret sistemleri</a><a href="/hizmetler/seo-geo-aeo-aio">Arama görünürlüğü</a><a href="/hizmetler/ai-otomasyon">AI otomasyon</a><a href="/hizmetler">Tüm uzmanlıklar</a></div></details>
          <details><summary>ikas</summary><div><a href="/ikas">ikas Partner hizmetleri</a><a href="/ikas#entegrasyonlar">Entegrasyonlar</a><a href="/ikas#check-up">ikas Check-up</a></div></details>
          <a href="/#yaklasim">Yaklaşım</a><a href="/referanslar">Referanslar</a><a href="/blog">Blog</a><a href="/#iletisim">İletişim</a>
        </div>
      </details>
    </header>
  );
}
