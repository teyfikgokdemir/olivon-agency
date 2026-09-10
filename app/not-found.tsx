import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <main className="inner-page not-found-page">
      <section className="not-found shell">
        <p className="section-index">404 · SAYFA BULUNAMADI</p>
        <h1>Aradığınız sayfa burada değil.<br/><em>Doğru yere yönlendirelim.</em></h1>
        <p>Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Hizmetleri, vaka çalışmalarını ya da iletişim sayfasını kullanabilirsiniz.</p>
        <div>
          <a className="button primary" href="/hizmetler">Hizmetleri inceleyin <ArrowUpRight size={17}/></a>
          <a className="button ghost" href="/referanslar">Vaka çalışmaları</a>
          <a className="button ghost" href="/iletisim">İletişim</a>
        </div>
      </section>
      <SiteFooter/>
    </main>
  );
}
