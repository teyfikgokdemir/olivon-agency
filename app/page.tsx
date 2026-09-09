"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, BarChart3, Cookie, Menu, ShieldCheck, Sparkles, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

const services = [
  "E-ticaret sistemleri",
  "Web tasarım & geliştirme",
  "SEO, GEO, AEO & AIO",
  "Dijital reklam yönetimi",
  "Yapay zekâ otomasyonları",
  "Siber güvenlik çözümleri",
];

const platforms = ["Shopify Partner", "ikas Partner", "WooCommerce", "Cloudflare", "Google", "Meta"];

const process = [
  ["01", "Teşhis", "İş modelini, hedef müşteriyi ve büyümeyi yavaşlatan noktaları netleştiririz."],
  ["02", "Mimari", "İçerik, teknoloji, ölçüm ve kullanıcı yolculuğunu tek sistemde planlarız."],
  ["03", "Üretim", "Tasarım ve geliştirmeyi aynı kalite standardıyla uçtan uca yürütürüz."],
  ["04", "Gelişim", "Yayından sonra gerçek verilerle yeni fırsatları ve iyileştirmeleri belirleriz."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieBanner, setCookieBanner] = useState(false);
  const [cookiePanel, setCookiePanel] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [revenue, setRevenue] = useState(500000);
  const [averageOrder, setAverageOrder] = useState(1250);
  const [grossMargin, setGrossMargin] = useState(48);
  const [adRate, setAdRate] = useState(10);
  const [shipping, setShipping] = useState(95);
  const [marketCommission, setMarketCommission] = useState(20);

  const scenarios = useMemo(() => {
    const orders = Math.max(1, revenue / Math.max(1, averageOrder));
    const commonCost = revenue * (1 - grossMargin / 100) + revenue * (adRate / 100) + orders * shipping;
    return [
      { name: "Pazaryeri", fee: revenue * (marketCommission / 100), fixed: 0 },
      { name: "Shopify", fee: revenue * .035, fixed: 2500 },
      { name: "WooCommerce", fee: revenue * .032, fixed: 3500 },
      { name: "ikas", fee: revenue * .0359, fixed: 3329 },
    ].map(item => ({ ...item, profit: revenue - commonCost - item.fee - item.fixed }));
  }, [revenue, averageOrder, grossMargin, adRate, shipping, marketCommission]);

  const maxProfit = Math.max(...scenarios.map(item => item.profit), 1);
  const money = (value: number) => new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(value) + " TL";

  useEffect(() => {
    setCookieBanner(!localStorage.getItem("olivon-cookie-consent"));
  }, []);

  const saveConsent = (mode: "all" | "necessary" | "selected") => {
    const value = mode === "all" ? { analytics: true, marketing: true } : mode === "necessary" ? { analytics: false, marketing: false } : { analytics, marketing };
    setAnalytics(value.analytics);
    setMarketing(value.marketing);
    localStorage.setItem("olivon-cookie-consent", JSON.stringify(value));
    setCookieBanner(false);
    setCookiePanel(false);
  };

  return (
    <main>
      <nav className="nav shell" aria-label="Ana menü">
        <a className="brand" href="#top" aria-label="Olivon ana sayfa"><span className="brand-mark">O</span><span>OLIVON</span></a>
        <div className="nav-links"><a href="#cozumler">Çözümler</a><a href="#yaklasim">Yaklaşım</a><a href="#surec">Süreç</a><a href="#guvenlik">Güvenlik</a><a href="#iletisim">İletişim</a></div>
        <a className="nav-cta" href="#iletisim">Projenizi konuşalım <ArrowUpRight size={16} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menüyü aç" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>
      {menuOpen && <div className="mobile-menu"><a onClick={() => setMenuOpen(false)} href="#cozumler">Çözümler</a><a onClick={() => setMenuOpen(false)} href="#yaklasim">Yaklaşım</a><a onClick={() => setMenuOpen(false)} href="#surec">Süreç</a><a onClick={() => setMenuOpen(false)} href="#guvenlik">Güvenlik</a><a onClick={() => setMenuOpen(false)} href="#iletisim">İletişim</a></div>}

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

      <section className="platform-strip" aria-label="Çalışılan platformlar">
        <div className="platform-track">{[...platforms, ...platforms].map((platform, i) => <span key={platform + i}>{platform}</span>)}</div>
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

      <section className="profit-lab shell" id="karlilik">
        <div className="profit-intro">
          <p className="section-index">CANLI SENARYO / KÂRLILIK LABORATUVARI</p>
          <h2>Satış aynı.<br /><em>Kalan para farklı.</em></h2>
          <p>Rakamlarınızı girin; pazaryeri ile kendi e-ticaret altyapınız arasındaki tahmini aylık kâr farkını anında görün.</p>
          <div className="partner-proof"><span>SHOPIFY<br /><strong>PARTNER</strong></span><span>ikas<br /><strong>PARTNER</strong></span></div>
          <div className="assumption-note">Bu bir ön değerlendirme aracıdır. Vergi, iade, personel ve kategoriye özel giderler dahil değildir.</div>
        </div>
        <div className="calculator">
          <div className="calculator-inputs">
            <label><span>Aylık satış</span><div><input type="number" value={revenue} onChange={e => setRevenue(Number(e.target.value))} /><small>TL</small></div></label>
            <label><span>Ortalama sepet</span><div><input type="number" value={averageOrder} onChange={e => setAverageOrder(Number(e.target.value))} /><small>TL</small></div></label>
            <label><span>Brüt ürün marjı</span><div><input type="number" value={grossMargin} onChange={e => setGrossMargin(Number(e.target.value))} /><small>%</small></div></label>
            <label><span>Reklam gideri</span><div><input type="number" value={adRate} onChange={e => setAdRate(Number(e.target.value))} /><small>%</small></div></label>
            <label><span>Sipariş başı kargo</span><div><input type="number" value={shipping} onChange={e => setShipping(Number(e.target.value))} /><small>TL</small></div></label>
            <label><span>Pazaryeri komisyonu</span><div><input type="number" value={marketCommission} onChange={e => setMarketCommission(Number(e.target.value))} /><small>%</small></div></label>
          </div>
          <div className="scenario-results">
            {scenarios.map((item, index) => <div className={index === 0 ? "scenario marketplace" : "scenario"} key={item.name}>
              <div className="scenario-head"><span>{item.name}</span><strong>{money(item.profit)}</strong></div>
              <div className="profit-bar"><i style={{ width: `${Math.max(4, item.profit / maxProfit * 100)}%` }} /></div>
              <small>Tahmini aylık net katkı</small>
            </div>)}
          </div>
          <div className="calculator-foot"><span>Altyapı ve ödeme giderleri varsayımsaldır, proje analizinde güncellenir.</span><a href="#iletisim">Size özel analiz <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="systems shell">
        <div className="system-card system-commerce">
          <p className="section-index">TİCARET SİSTEMLERİ</p><h3>Satın almayı kolaylaştıran altyapı.</h3>
          <div className="commerce-ui"><span className="mini-label">Dönüşüm akışı</span><div className="metric"><strong>Ürün</strong><i /></div><div className="metric"><strong>Sepet</strong><i /></div><div className="metric"><strong>Ödeme</strong><i /></div></div>
        </div>
        <div className="system-card system-data">
          <p className="section-index">ÖLÇÜM & PERFORMANS</p><h3>Kararları görünür kılan veri.</h3>
          <div className="chart" aria-hidden="true"><BarChart3 /><span className="bar b1" /><span className="bar b2" /><span className="bar b3" /><span className="bar b4" /><span className="bar b5" /></div>
        </div>
      </section>

      <section className="process shell" id="surec">
        <div className="section-head"><div><p className="section-index">03 — ÇALIŞMA BİÇİMİ</p><h2>Net kararlar.<br />Görünür ilerleme.</h2></div><p>İlk görüşmeden yayına kadar ne yaptığımızı, neden yaptığımızı ve sıradaki adımı bilirsiniz.</p></div>
        <div className="process-grid">{process.map(([no, title, text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="security shell" id="guvenlik">
        <div className="security-icon"><ShieldCheck /></div>
        <p className="section-index">04 — DİJİTAL GÜVENLİK</p>
        <h2>Güven, tasarımdan önce<br />altyapıda başlar.</h2>
        <p>Cloudflare güvenlik katmanları, saldırı yüzeyi azaltma, erişim politikaları, bot ve trafik kontrolüyle dijital varlıklarınızı koruyoruz.</p>
        <div className="security-tags"><span>WAF</span><span>DDoS</span><span>ZERO TRUST</span><span>BOT CONTROL</span><span>MONITORING</span></div>
      </section>

      <section className="work-preview shell">
        <div><p className="section-index">05 — SEÇİLİ ÇALIŞMALAR</p><h2>İşi, yaklaşımı ve sonucu birlikte göstereceğiz.</h2></div>
        <div className="work-placeholder"><span>REFERANSLAR HAZIRLANIYOR</span><strong>Gerçek projeler yakında burada.</strong><p>Her vaka; ihtiyaç, çözüm, teknik kapsam ve yayındaki sonuçlarıyla sunulacak.</p></div>
      </section>

      <section className="closing shell" id="iletisim">
        <Sparkles size={22} /><p className="section-index">BİR SONRAKİ ADIM</p>
        <h2>Markanızın dijitaldeki<br /><em>en güçlü halini</em> kuralım.</h2>
        <a className="button primary" href="mailto:info@olivon.com.tr">Projenizi anlatın <ArrowUpRight size={18} /></a>
      </section>
      <footer className="shell"><span>© 2026 OLIVON</span><span>Türkiye</span><span>Strateji · Tasarım · Teknoloji</span></footer>

      {cookieBanner && <aside className="cookie-banner" aria-label="Çerez bildirimi">
        <div className="cookie-symbol"><Cookie /></div>
        <div><p className="cookie-kicker">GİZLİLİK TERCİHLERİ</p><h2>Dijital deneyiminiz, sizin kontrolünüzde.</h2><p>Zorunlu çerezler sitenin çalışmasını sağlar. Analiz ve pazarlama çerezleri yalnızca izninizle kullanılır.</p></div>
        <div className="cookie-actions"><button onClick={() => saveConsent("all")}>Tümünü kabul et</button><button onClick={() => saveConsent("necessary")}>Yalnızca zorunlu</button><button onClick={() => setCookiePanel(true)}>Tercihleri yönet</button></div>
      </aside>}
      {!cookieBanner && <button className="cookie-reopen" aria-label="Çerez tercihlerini aç" onClick={() => setCookiePanel(true)}><Cookie /></button>}

      <Dialog open={cookiePanel} onOpenChange={setCookiePanel}>
        <DialogContent className="cookie-dialog" showCloseButton>
          <DialogHeader><DialogTitle>Çerez tercihleri</DialogTitle><DialogDescription>Hangi veri kategorilerine izin vereceğinizi seçin. Tercihinizi daha sonra değiştirebilirsiniz.</DialogDescription></DialogHeader>
          <div className="cookie-options">
            <div><span><strong>Zorunlu</strong><small>Güvenlik ve temel site işlevleri</small></span><em>Her zaman açık</em></div>
            <div><span><strong>Analitik</strong><small>Anonim kullanım ve performans ölçümü</small></span><Switch checked={analytics} onCheckedChange={setAnalytics} aria-label="Analitik çerezler" /></div>
            <div><span><strong>Pazarlama</strong><small>Kampanya ve dönüşüm ölçümü</small></span><Switch checked={marketing} onCheckedChange={setMarketing} aria-label="Pazarlama çerezleri" /></div>
          </div>
          <div className="dialog-actions"><button onClick={() => saveConsent("selected")}>Seçimlerimi kaydet</button><button onClick={() => saveConsent("all")}>Tümünü kabul et</button></div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
