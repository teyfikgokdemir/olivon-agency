"use client";

import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  "E-ticaret sistemleri",
  "Web tasarım & geliştirme",
  "SEO, GEO, AEO & AIO",
  "Dijital reklam yönetimi",
  "Yapay zekâ otomasyonları",
  "Siber güvenlik çözümleri",
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Ana menü">
        <a className="brand" href="#top" aria-label="Olivon ana sayfa"><span className="brand-mark">O</span><span>OLIVON</span></a>
        <div className="nav-links"><a href="#cozumler">Çözümler</a><a href="#yaklasim">Yaklaşım</a><a href="#guvenlik">Güvenlik</a><a href="#iletisim">İletişim</a></div>
        <a className="nav-cta" href="#iletisim">Projenizi konuşalım <ArrowUpRight size={16} /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Türkiye için dijital büyüme stüdyosu</p>
          <h1>Görünmek için değil,<br /><em>tercih edilmek için.</em></h1>
          <p className="lead">Markanızın web, e-ticaret, görünürlük ve güvenlik altyapısını tek bir büyüme sistemi olarak tasarlıyoruz.</p>
          <div className="hero-actions">
            <a className="button primary" href="#iletisim">Bir proje başlatın <ArrowUpRight size={18} /></a>
            <a className="button ghost" href="#cozumler">Uzmanlıkları keşfedin</a>
          </div>
        </div>
        <div className="hero-stage" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="signal-card card-one"><span>01 / Strateji</span><strong>Doğru konum</strong></div>
          <div className="signal-card card-two"><span>02 / Deneyim</span><strong>Net yolculuk</strong></div>
          <div className="signal-card card-three"><span>03 / Sistem</span><strong>Ölçülen büyüme</strong></div>
          <div className="core"><span>OLIVON</span><small>DIGITAL SYSTEMS</small></div>
        </div>
        <div className="hero-foot"><span>STRATEJİ</span><span>TASARIM</span><span>TEKNOLOJİ</span><span>GÜVENLİK</span></div>
      </section>

      <section className="manifesto shell" id="yaklasim">
        <p className="section-index">01 — BİZİM YAKLAŞIMIMIZ</p>
        <h2>Bir web sitesi teslim etmiyoruz.<br /><span>İşleyen bir dijital merkez kuruyoruz.</span></h2>
        <p>Her karar; güveni, satın alma isteğini ve uzun vadeli yönetilebilirliği artırmak için alınır. Görsel dil kadar altyapıyı, hız kadar içeriği, dönüşüm kadar güvenliği önemseriz.</p>
      </section>

      <section className="services shell" id="cozumler">
        <div className="section-head">
          <div><p className="section-index">02 — UZMANLIKLAR</p><h2>Birbirini güçlendiren<br />dijital çözümler.</h2></div>
          <p>Dağınık hizmetler yerine aynı hedefe çalışan, ölçülebilir ve ölçeklenebilir bir yapı.</p>
        </div>
        <div className="service-list">
          {services.map((service, i) => <a href="#iletisim" className="service-row" key={service}><span className="service-number">0{i + 1}</span><h3>{service}</h3><span className="service-arrow"><ArrowUpRight /></span></a>)}
        </div>
      </section>

      <section className="security shell" id="guvenlik">
        <div className="security-icon"><ShieldCheck /></div>
        <p className="section-index">03 — DİJİTAL GÜVENLİK</p>
        <h2>Güven, tasarımdan önce<br />altyapıda başlar.</h2>
        <p>Cloudflare güvenlik katmanları, saldırı yüzeyi azaltma, erişim politikaları, bot ve trafik kontrolüyle dijital varlıklarınızı koruyoruz.</p>
        <div className="security-tags"><span>WAF</span><span>DDoS</span><span>ZERO TRUST</span><span>BOT CONTROL</span><span>MONITORING</span></div>
      </section>

      <section className="closing shell" id="iletisim">
        <Sparkles size={22} /><p className="section-index">BİR SONRAKİ ADIM</p>
        <h2>Markanızın dijitaldeki<br /><em>en güçlü halini</em> kuralım.</h2>
        <a className="button primary" href="mailto:info@olivon.com.tr">Projenizi anlatın <ArrowUpRight size={18} /></a>
      </section>
      <footer className="shell"><span>© 2026 OLIVON</span><span>Türkiye</span><span>Strateji · Tasarım · Teknoloji</span></footer>
    </main>
  );
}
