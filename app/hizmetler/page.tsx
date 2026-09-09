import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";

const serviceGroups = [
  {
    title: "E-ticaret sistemleri",
    intro: "Shopify, ikas ve WooCommerce altyapılarında satışa hazır, yönetilebilir ve büyümeye açık mağazalar kurarız.",
    items: ["Platform seçimi", "Tema kurulumu ve düzenleme", "Ödeme, kargo ve pazaryeri entegrasyonu", "Kategori ve ürün mimarisi"],
  },
  {
    title: "ikas kurulum & destek",
    intro: "ikas partner yapısıyla mağazanızı sadece teknik olarak değil; strateji, görsel, içerik ve operasyon tarafıyla birlikte ele alırız.",
    items: ["Strateji ve yol haritası", "Slider, banner ve ürün görsel desteği", "Sanal POS, ERP ve kargo bağlantıları", "Check-up ve iyileştirme raporu"],
  },
  {
    title: "Web tasarım & geliştirme",
    intro: "Kurumsal web siteleri, landing page’ler ve dönüşüm odaklı arayüzleri marka algısını güçlendirecek şekilde tasarlarız.",
    items: ["Kurumsal site", "Landing page", "Mobil deneyim", "Performans ve teknik altyapı"],
  },
  {
    title: "SEO, GEO, AEO & AIO",
    intro: "Markanızın Google’da, yerel aramalarda ve yapay zekâ cevap motorlarında doğru anlaşılması için içerik ve teknik temel kurarız.",
    items: ["Teknik SEO", "İçerik mimarisi", "Yapılandırılmış veri", "AI arama görünürlüğü"],
  },
  {
    title: "Dijital reklam & marka pazarlama",
    intro: "Meta, Google ve pazaryeri kampanyalarını yalnızca trafik değil; kârlılık, veri ve marka güveni üzerinden yönetiriz.",
    items: ["Kampanya stratejisi", "Kreatif yönlendirme", "Dönüşüm ölçümü", "Kârlılık analizi"],
  },
  {
    title: "Dijital güvenlik",
    intro: "Cloudflare, WAF, bot kontrolü, erişim politikaları ve izleme kurgusuyla web varlıklarınızı daha güvenli hale getiririz.",
    items: ["DDoS koruma", "WAF kuralları", "Bot ve trafik kontrolü", "Erişim güvenliği"],
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page services-page">
      <header className="inner-nav shell">
        <Link className="brand" href="/"><span className="brand-mark">O</span><span>OLIVON</span></Link>
        <Link href="/">Ana sayfa</Link>
      </header>
      <section className="inner-hero shell services-hero">
        <p className="section-index">HİZMETLER</p>
        <h1>Tek tek hizmet değil,<br /><em>birlikte çalışan sistemler.</em></h1>
        <p>Web, e-ticaret, görünürlük, reklam ve güvenlik başlıklarını aynı büyüme hedefi etrafında topluyoruz.</p>
      </section>
      <section className="service-detail-grid shell">
        {serviceGroups.map((group, index) => (
          <article className="service-detail-card" key={group.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{group.title}</h2>
            <p>{group.intro}</p>
            <ul>
              {group.items.map(item => <li key={item}><CheckCircle2 size={16} />{item}</li>)}
            </ul>
          </article>
        ))}
      </section>
      <section className="service-cta shell">
        <p className="section-index">DOĞRU BAŞLANGIÇ</p>
        <h2>Hangi hizmete ihtiyacınız olduğunu birlikte netleştirelim.</h2>
        <a href="mailto:info@olivon.com.tr">Projenizi anlatın <ArrowUpRight size={18} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
