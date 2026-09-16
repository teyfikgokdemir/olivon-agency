import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Hakkımızda | Dijital Büyüme Stüdyosu",
  description: "Olivon'un çalışma modeli, uzmanlıkları, kalite prensipleri ve Türkiye genelinde web, e-ticaret, SEO, AI görünürlüğü ve güvenlik yaklaşımı.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: { title: "Olivon Hakkında | Dijital Sistemler, Ticaret ve Teknoloji", description: "Olivon'un çalışma modeli, uzmanlık alanları ve proje yaklaşımı.", url: "/hakkimizda", type: "website" },
};

const principles = [
  ["Ticari hedef önce", "Teknoloji ve tasarım kararlarını gerçek iş hedefi, operasyon ve yönetilebilirlik üzerinden değerlendiriyoruz."],
  ["Kanıtlanabilir iletişim", "Paylaşamadığımız metrikleri uydurmuyor; kapsamı, varsayımları ve doğrulanabilir çıktıları açık biçimde ayırıyoruz."],
  ["Tek sistem yaklaşımı", "Web, e-ticaret, içerik, görünürlük, ölçüm ve güvenliği birbirinden kopuk hizmetler olarak ele almıyoruz."],
  ["Yayından sonra gelişim", "Bir projenin teslim edilmesini son değil, gerçek kullanıcı verisinin başladığı aşama olarak görüyoruz."],
];

export default function AboutPage() {
  const pageUrl = `${SITE_URL}/hakkimizda`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    name: "Olivon Hakkında",
    url: pageUrl,
    description: "Olivon'un çalışma modeli, uzmanlık alanları, kalite prensipleri ve dijital büyüme yaklaşımı.",
    inLanguage: "tr-TR",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: { "@id": `${SITE_URL}/#organization` },
  };

  return <main className="inner-page about-page">
    <StructuredData data={[schema,breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hakkımızda",path:"/hakkimizda"}])]} />
    <section className="inner-hero shell about-hero"><p className="section-index">OLIVON HAKKINDA</p><h1>Site yapan bir ekipten fazlası.<br/><em>Dijital sistemi birlikte kuran bir çalışma modeli.</em></h1><p>Olivon, Kayseri merkezli ve Türkiye genelinde çalışan bağımsız bir dijital büyüme stüdyosudur. Web, e-ticaret, görünürlük, otomasyon ve güvenlik kararlarını aynı ticari çerçevede ele alır.</p></section>
    <section className="about-manifesto shell"><div><p className="section-index">NEDEN OLIVON?</p><h2>“Görünmek için değil, tercih edilmek için” bir slogan değil; karar filtremiz.</h2></div><p>Bir sayfanın güzel görünmesi yeterli değildir. Hızlı açılması, güven vermesi, doğru kişiye doğru bilgiyi sunması, yönetilebilir olması ve ölçülebilir bir aksiyona bağlanması gerekir. Bu nedenle tasarım ile teknik altyapıyı, içerik ile arama görünürlüğünü, satış ile güvenliği aynı proje mimarisinde buluşturuyoruz.</p></section>
    <section className="about-principles shell">{principles.map(([title,text])=><article key={title}><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="about-scope shell"><p className="section-index">ÇALIŞMA ALANIMIZ</p><h2>Özellikle dijital satış ve büyüme altyapısını güçlendirmek isteyen markalarla çalışıyoruz.</h2><div><span><CheckCircle2/>ikas, Shopify ve WooCommerce e-ticaret projeleri</span><span><CheckCircle2/>Kurumsal web ve dönüşüm odaklı landing page’ler</span><span><CheckCircle2/>SEO, GEO, AEO ve AIO görünürlük mimarisi</span><span><CheckCircle2/>AI destekli operasyon ve iş akışları</span><span><CheckCircle2/>Cloudflare odaklı performans ve güvenlik katmanları</span></div></section>
    <section className="service-essentials shell" aria-labelledby="fit-title">
      <div className="service-essentials-head"><p className="section-index">İYİ EŞLEŞME / KÖTÜ EŞLEŞME</p><h2 id="fit-title">Her projeyi almıyoruz; doğru problemi çözebileceğimiz işlere odaklanıyoruz.</h2><p>Kapsamın açık olması, karar vericinin sürece katılması ve ölçülebilir bir ticari veya operasyonel hedef bulunması bizim için önemlidir.</p></div>
      <div className="service-essentials-grid">
        <article><h3>İyi eşleşme</h3><p>Web, e-ticaret, görünürlük ve operasyonu birlikte geliştirmek; mevcut sistemi ölçerek iyileştirmek veya kontrollü bir yeniden kurulum yapmak isteyen markalar.</p></article>
        <article><h3>Uygun değil</h3><p>Sadece en ucuz hazır paket, doğrulanamayacak sonuç garantisi, kısa yoldan sıralama vaadi veya kapsamı belirsiz sınırsız revizyon arayan projeler.</p></article>
        <article><h3>Şeffaf çalışma</h3><p>Teklif öncesinde neyin dahil olduğunu, neyin hariç kaldığını, hangi verinin ölçülebileceğini ve hangi sonucun garanti edilemeyeceğini ayırıyoruz.</p></article>
      </div>
    </section>
    <section className="section-inline-cta shell"><a href="mailto:info@olivon.com.tr">info@olivon.com.tr <ArrowUpRight size={17}/></a><a href="/referanslar">Vaka çalışmalarını inceleyin <ArrowUpRight size={17}/></a></section>
    <section className="service-cta shell"><p className="section-index">ÇALIŞMA MODELİ</p><h2>Önce problemi ve kapsamı netleştirelim; sonra doğru sistemi kuralım.</h2><a href="/iletisim">Olivon ile konuşun <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}
