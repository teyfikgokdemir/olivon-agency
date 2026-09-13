import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { referenceProjects } from "@/lib/references";
import { caseStudies } from "@/lib/case-studies";
import { SITE_URL } from "@/lib/seo";

const services = [
  { title:"E-ticaret sistemleri", detail:"Shopify, ikas ve WooCommerce altyapılarında kurulum, ödeme, kargo, ERP, pazaryeri ve dönüşüm mimarisi.", href:"/hizmetler/e-ticaret" },
  { title:"ikas kurulum & destek", detail:"Strateji, görsel, tema, front-end/back-end, sabit sayfalar, ürün-kategori, POS, ERP ve mağaza check-up.", href:"/ikas" },
  { title:"Web tasarım & geliştirme", detail:"Kurumsal web sitesi, landing page, mobil UX, performans, erişilebilirlik ve dönüşüm odaklı arayüz.", href:"/hizmetler/web-tasarim" },
  { title:"SEO, GEO, AEO & AIO", detail:"Teknik SEO, içerik, yapılandırılmış veri, entity sinyalleri ve Google/AI destekli arama görünürlüğü.", href:"/hizmetler/seo-geo-aeo-aio" },
  { title:"AI otomasyon", detail:"Tekrarlayan operasyon, içerik ve veri süreçlerini insan kontrolünü koruyan iş akışlarına dönüştürme.", href:"/hizmetler/ai-otomasyon" },
  { title:"Dijital reklam & marka pazarlama", detail:"Meta, Google ve pazaryeri kampanyalarında ölçüm, kreatif, teklif stratejisi ve kârlılık kontrolü.", href:"/hizmetler/dijital-reklam" },
  { title:"Dijital güvenlik", detail:"Cloudflare, WAF, DDoS, bot kontrolü, erişim politikaları ve satış sürekliliğini koruyan güvenlik katmanları.", href:"/hizmetler/dijital-guvenlik" },
];

const platforms = ["Shopify", "ikas", "WooCommerce", "Cloudflare", "Google", "Meta"];

const ikasServices = [
  ["Strateji", "Ürün, hedef kitle, kategori yapısı ve satış hedeflerine göre ikas yol haritası."],
  ["Görsel destek", "Ürün görseli, slider, banner ve kampanya tasarımlarının kurumsal kimliğe göre düzenlenmesi."],
  ["Kargo entegrasyonu", "Sipariş ve kargo akışının operasyonla uyumlu biçimde yapılandırılması."],
  ["E-ihracat", "Dil, para birimi, lojistik ve yurt dışı satış gereksinimlerinin planlanması."],
  ["Front-end & back-end", "Tema düzenleme, özel alanlar, performans ve ihtiyaç duyulan teknik geliştirmeler."],
  ["Sabit sayfalar", "Hakkımızda, iletişim, sözleşmeler, SSS, kampanya ve landing page yapısı."],
  ["Sanal POS", "Banka ve ödeme altyapılarının proje gereksinimine göre yapılandırılması."],
  ["Check-up", "Mevcut ikas mağazasının teknik, içerik, UX ve satış akışı açısından incelenmesi."],
  ["Kategori & ürün", "Kategori ağacı, ürün içeriği ve SEO uyumlu yayına alma düzeni."],
  ["Pazaryeri", "Trendyol, Hepsiburada, N11, Amazon, Beymen, Çiçeksepeti, Pazarama ve Etsy bağlantı planı."],
  ["ERP", "Stok, muhasebe, mağaza ve pazaryeri operasyonları arasında veri akışı."],
  ["Satış optimizasyonu", "Tema, kampanya alanları, ürün vitrinleri ve satın alma akışının iyileştirilmesi."],
];

const process = [
  ["Teşhis", "Hedefi, mevcut sistemi, operasyonu ve darboğazları yazılı hale getiririz."],
  ["Mimari", "Teslim kapsamını, içerik yapısını, teknoloji kararlarını ve ölçüm planını netleştiririz."],
  ["Üretim", "Tasarım, geliştirme ve entegrasyonları aynı kalite standardıyla uygularız."],
  ["Gelişim", "Yayından sonra davranış, performans ve dönüşüm verileriyle iyileştirme öncelikleri çıkarırız."],
];

const valuePrograms = [
  {
    kicker:"TİCARET ALTYAPISI",
    title:"Kur",
    description:"Markanın kendi dijital merkezini; satış, ödeme, ürün, içerik ve entegrasyon akışları birlikte çalışacak şekilde kuruyoruz.",
    tags:["Shopify","ikas","WooCommerce","POS","ERP"],
    href:"/hizmetler/e-ticaret",
  },
  {
    kicker:"BÜYÜME SİSTEMİ",
    title:"Büyüt",
    description:"Arama görünürlüğü, içerik, ölçüm, reklam ve dönüşüm optimizasyonunu birbirinden kopuk işler yerine aynı büyüme sistemi içinde yönetiyoruz.",
    tags:["SEO","GEO","AEO","AIO","GA4","Meta"],
    href:"/hizmetler/seo-geo-aeo-aio",
  },
  {
    kicker:"SÜREKLİLİK & GÜVEN",
    title:"Koru",
    description:"Performans, erişim, Cloudflare güvenlik katmanları ve kritik operasyon kontrolleriyle dijital merkezin satışa devam etmesini koruyoruz.",
    tags:["Cloudflare","WAF","DDoS","Bot Control","Monitoring"],
    href:"/hizmetler/dijital-guvenlik",
  },
];

const visibilityPillars = [
  ["SEO", "Teknik altyapı, içerik mimarisi ve arama niyetiyle Google görünürlüğünü güçlendirir."],
  ["GEO", "Marka, hizmet ve uzmanlık sinyallerini üretken yapay zekâ motorlarının anlayabileceği yapıya dönüştürür."],
  ["AEO", "Kullanıcı sorularına doğrudan cevap verebilen içerik, schema ve bilgi mimarisi kurar."],
  ["AIO", "AI destekli arama, içerik keşfi ve marka referanslarında daha güçlü entity sinyalleri oluşturur."],
];

export default function Home() {
  const pageSchema = {
    "@context":"https://schema.org",
    "@type":"WebPage",
    "@id":`${SITE_URL}/#webpage`,
    url:SITE_URL,
    name:"Olivon | Dijital Büyüme, E-Ticaret ve Web Teknolojileri",
    description:"Web, e-ticaret, görünürlük, otomasyon ve güvenliği tek büyüme sistemi içinde ele alan Olivon ana sayfası.",
    isPartOf:{"@id":`${SITE_URL}/#website`},
    about:{"@id":`${SITE_URL}/#organization`},
    inLanguage:"tr-TR",
  };

  return (
    <main>
      <StructuredData data={pageSchema} />
      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Türkiye için dijital büyüme stüdyosu</p>
          <h1><span>Görünmek için değil,</span><em>tercih edilmek için.</em></h1>
          <p className="lead">Büyüyen markalar için web, e-ticaret, arama görünürlüğü, otomasyon ve güvenlik altyapısını tek bir yönetilebilir sistemde kuruyoruz.</p>
          <div className="hero-actions">
            <a className="button primary" href="/iletisim">Proje briefini gönderin <ArrowUpRight size={18} /></a>
            <a className="button ghost" href="/referanslar">Vaka çalışmalarını inceleyin</a>
          </div>
        </div>
        <div className="hero-stage hero-stage-photo" aria-hidden="true">
          <img src="/images/hero/olivon-hero-main.webp" alt="" width="1672" height="941" fetchPriority="high" decoding="async" />
        </div>
        <div className="hero-foot"><span>STRATEJİ</span><span>TASARIM</span><span>TEKNOLOJİ</span><span>GÜVENLİK</span></div>
      </section>

      <section className="platform-strip" aria-label="Çalışılan platform ve ekosistemler">
        <div className="platform-track">{[...platforms, ...platforms].map((platform, i) => <span key={platform + i}>{platform}</span>)}</div>
      </section>

      <section className="manifesto shell" id="yaklasim">
        <p className="section-index">KİMLER İÇİN?</p>
        <h2>Bir web sitesi teslim etmiyoruz. <span>Satış, görünürlük ve operasyonu birlikte taşıyan dijital merkez kuruyoruz.</span></h2>
        <p>Özellikle Shopify, ikas veya WooCommerce ile satış yapan; mevcut sitesini yeniden yapılandırmak, pazaryeri bağımlılığını azaltmak, organik görünürlüğünü güçlendirmek veya teknik operasyonunu sadeleştirmek isteyen markalarla çalışıyoruz.</p>
      </section>

      <section className="home-proof shell" aria-label="Olivon çalışma prensipleri">
        <article><strong>Gerçek kapsam</strong><p>Tekliften önce teslim listesini, varsayımları ve hariç tutulan işleri netleştiririz.</p></article>
        <article><strong>Gerçek projeler</strong><p>Referanslarımızı canlı site bağlantıları ve yayınlanabilir vaka özetleriyle gösteririz.</p></article>
        <article><strong>Gerçek ölçüm</strong><p>CTA, form, WhatsApp ve kritik kullanıcı aksiyonlarını izinli GA4 olaylarıyla ölçeriz.</p></article>
      </section>

      <section className="services shell" id="cozumler">
        <div className="section-head">
          <div><p className="section-index">UZMANLIKLAR</p><h2>Her hizmetin ayrı çıktısı, tek bir ticari hedefi var.</h2></div>
          <p>Ne yaptığımızı yalnızca başlıklarla değil; hizmet sayfalarında hedef müşteri, teslim kapsamı, süreç ve uygunluk çerçevesiyle açıklıyoruz.</p>
        </div>
        <div className="service-list">
          {services.map(service => <a href={service.href} className="service-row" key={service.title}><span><h3>{service.title}</h3><p>{service.detail}</p></span><span className="service-arrow"><ArrowUpRight /></span></a>)}
        </div>
      </section>

      <section className="value-programs shell" aria-label="Olivon çalışma modeli">
        <div className="value-programs-intro">
          <p className="section-index">ÇALIŞMA MODELİ</p>
          <h2>Kur.<em>Büyüt. Koru.</em></h2>
          <p>Premium ajansların program ve engagement odaklı anlatımından ilhamla, hizmet listesini değil markanın dijital sisteminde yarattığımız üç temel değeri öne çıkarıyoruz.</p>
        </div>
        <div className="value-programs-list">
          {valuePrograms.map(program => (
            <a className="value-program" href={program.href} key={program.title}>
              <div className="value-program-copy">
                <span className="value-program-kicker">{program.kicker}</span>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="value-program-tags">{program.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span className="value-program-arrow"><ArrowUpRight size={20}/></span>
            </a>
          ))}
        </div>
      </section>

      <section className="ikas-detail shell" id="ikas">
        <div className="section-head ikas-head">
          <div><p className="section-index">İKAS KURULUM & DESTEK</p><h2>ikas mağazanızı tema seviyesinde bırakmıyoruz.</h2></div>
          <p>Ürün yapısı, görsel, POS, kargo, ERP, pazaryeri, e-ihracat, teknik geliştirme ve check-up başlıklarını aynı operasyon planında ele alıyoruz.</p>
        </div>
        <div className="ikas-grid">
          {ikasServices.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="section-inline-cta"><a href="/ikas">ikas hizmet kapsamını inceleyin <ArrowUpRight size={16}/></a></div>
      </section>

      <section className="visibility-system shell" aria-labelledby="visibility-system-title">
        <div className="visibility-system-head">
          <div>
            <p className="section-index">ARAMA & AI GÖRÜNÜRLÜĞÜ</p>
            <h2 id="visibility-system-title">Aramada bulun. <em>Yapay zekâda anıl.</em> Ölçülebilir şekilde büyü.</h2>
          </div>
          <p>SEO, GEO, AEO ve AIO çalışmalarını ayrı taktikler olarak değil; teknik altyapı, içerik, entity sinyalleri, structured data ve ölçümü birbirine bağlayan tek görünürlük sistemi olarak ele alıyoruz.</p>
        </div>
        <div className="visibility-pillar-grid">
          {visibilityPillars.map(([title, text]) => (
            <article className="visibility-pillar" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="visibility-flow" aria-label="Görünürlük sistemi akışı">
          <span>Teknik altyapı</span><i />
          <span>İçerik</span><i />
          <span>Entity</span><i />
          <span>Structured Data</span><i />
          <span>Ölçüm</span>
        </div>
        <div className="visibility-system-foot">
          <div className="visibility-outcomes" aria-label="Hedeflenen görünürlük yüzeyleri"><span>Google</span><span>AI Search</span><span>Featured Answers</span><span>Brand Discovery</span></div>
          <a href="/hizmetler/seo-geo-aeo-aio">Arama ve AI görünürlüğünüzü inceleyelim <ArrowUpRight size={17}/></a>
        </div>
      </section>

      <section className="process shell" id="surec">
        <div className="section-head"><div><p className="section-index">ÇALIŞMA BİÇİMİ</p><h2>Ne yapılacağı, neden yapılacağı ve sıradaki adım baştan görünür.</h2></div><p>İlk görüşmeden yayına kadar kapsam, sorumluluk ve öncelikleri aynı proje planında tutarız.</p></div>
        <div className="process-grid">{process.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="security shell" id="guvenlik">
        <div className="security-icon"><ShieldCheck /></div>
        <p className="section-index">DİJİTAL GÜVENLİK</p>
        <h2>Güven, tasarımdan<br />önce altyapıda<br />başlar.</h2>
        <p>Cloudflare güvenlik katmanları, saldırı yüzeyi azaltma, erişim politikaları, WAF, bot ve trafik kontrolüyle dijital varlıkların sürekliliğini güçlendiriyoruz.</p>
        <div className="security-tags"><span>WAF</span><span>DDoS</span><span>ZERO TRUST</span><span>BOT CONTROL</span><span>MONITORING</span></div>
      </section>

      <section className="work-preview shell">
        <div><p className="section-index">SEÇİLİ VAKA ÇALIŞMALARI</p><h2>Görsel vitrinin arkasında hangi problemi çözdüğümüzü de gösteriyoruz.</h2></div>
        <div className="reference-panel">
          <span>YAYINLANABİLİR PROJE KANITI</span>
          <div className="featured-reference-grid">
            {referenceProjects.filter(project => project.featured).map((project,index) => (
              <a className="featured-reference-card" href={`/referanslar/${caseStudies[index].slug}`} key={project.domain}>
                <img src={project.image} alt={`${project.name} web sitesi ekran görüntüsü`} loading="lazy" decoding="async" />
                <span>{project.domain}</span><strong>{project.name}</strong>
              </a>
            ))}
          </div>
          <a className="reference-page-link" href="/referanslar">Tüm referansları ve vaka çalışmalarını inceleyin <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="home-trust shell">
        <div><p className="section-index">ŞEFFAF ÇALIŞMA MODELİ</p><h2>Kim olduğumuzu, nasıl fiyatlandırdığımızı ve nasıl çalıştığımızı gizlemiyoruz.</h2></div>
        <div><a href="/hakkimizda">Olivon hakkında <ArrowUpRight size={16}/></a><a href="/fiyatlandirma">Fiyatlandırma yaklaşımı <ArrowUpRight size={16}/></a><a href="/sss">Sık sorulan sorular <ArrowUpRight size={16}/></a></div>
      </section>

      <section className="closing shell" id="iletisim">
        <Sparkles size={22} /><p className="section-index">BİR SONRAKİ ADIM</p>
        <h2>İhtiyacınızı anlatın.<br /><em>Önce doğru kapsamı</em> çıkaralım.</h2>
        <a className="button primary" href="/iletisim">Proje briefini gönderin <ArrowUpRight size={18} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
