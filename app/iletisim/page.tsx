import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "İletişim | Web Tasarım, E-Ticaret, SEO & ikas Projeleri",
  description: "Web tasarım, e-ticaret, ikas kurulum, Shopify, WooCommerce, SEO, GEO, AEO, AIO ve dijital güvenlik projeleriniz için Olivon ile iletişime geçin.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    title: "Olivon ile İletişim | Dijital Büyüme Projenizi Konuşalım",
    description: "Web, e-ticaret, ikas, SEO, AI görünürlüğü ve dijital güvenlik projenizi Olivon ile değerlendirin.",
    url: "/iletisim",
    type: "website",
  },
};

const areas = [
  "Web tasarım & geliştirme",
  "E-ticaret sistemleri",
  "ikas kurulum & destek",
  "Shopify & WooCommerce",
  "SEO, GEO, AEO & AIO",
  "Dijital reklam & marka pazarlama",
  "Dijital güvenlik",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Olivon İletişim",
  url: "https://olivon.com.tr/iletisim",
  description: "Olivon web tasarım, e-ticaret, ikas, SEO, AI görünürlüğü ve dijital güvenlik projeleri için iletişim sayfası.",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <StructuredData data={[jsonLd, breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"İletişim",path:"/iletisim"}])]} />
      <section className="inner-hero shell contact-hero">
        <p className="section-index">İLETİŞİM</p>
        <h1>Projenizi konuşalım.<br /><em>Doğru sistemi birlikte kuralım.</em></h1>
        <p>Web tasarım, e-ticaret, ikas, Shopify, WooCommerce, SEO, GEO, AEO, AIO ve dijital güvenlik ihtiyaçlarınızı tek bir büyüme planında ele alıyoruz.</p>
      </section>

      <section className="contact-grid shell">
        <article className="contact-primary">
          <span className="contact-icon"><Mail size={22} /></span>
          <p className="section-index">DOĞRUDAN İLETİŞİM</p>
          <h2>İhtiyacınızı kısa şekilde anlatın.</h2>
          <p>Mevcut siteniz, hedefiniz ve çözmek istediğiniz ana problemi paylaşın. İlk değerlendirmede kapsamı, öncelikleri ve doğru başlangıç noktasını netleştiririz.</p>
          <a className="contact-main-link" href="mailto:info@olivon.com.tr">info@olivon.com.tr <ArrowUpRight size={18} /></a>
          <div className="contact-meta">
            <span><MapPin size={16} /> Kayseri · Türkiye</span>
            <span><MessageCircle size={16} /> Türkiye geneline hizmet</span>
          </div>
        </article>

        <aside className="contact-scope">
          <p className="section-index">ÇALIŞMA ALANLARI</p>
          <h2>Hangi konuda destek alabilirsiniz?</h2>
          <ul>{areas.map(area => <li key={area}><CheckCircle2 size={17} />{area}</li>)}</ul>
          <a href="/hizmetler">Tüm hizmetleri inceleyin <ArrowUpRight size={16} /></a>
        </aside>
      </section>

      <section className="contact-process shell">
        <div><span>01</span><h3>İhtiyacı netleştiririz</h3><p>Hedef, mevcut altyapı, operasyon ve büyüme beklentisini birlikte değerlendiririz.</p></div>
        <div><span>02</span><h3>Doğru kapsamı çıkarırız</h3><p>Gereksiz kalemleri ayırır, gerçekten ihtiyaç duyulan çözüm setini belirleriz.</p></div>
        <div><span>03</span><h3>Uygulama planını kurarız</h3><p>Tasarım, geliştirme, içerik, entegrasyon ve ölçüm adımlarını aynı yol haritasında toplarız.</p></div>
      </section>

      <section className="shell"><ContactForm /></section>

      <section className="contact-seo-copy shell">
        <p className="section-index">OLIVON DİJİTAL AJANS</p>
        <h2>Web, e-ticaret ve görünürlük projelerinde tek merkezden ilerleyin.</h2>
        <p>Olivon; Kayseri merkezli olarak Türkiye genelinde web tasarım ve geliştirme, e-ticaret altyapısı kurulumu, ikas partner hizmetleri, Shopify ve WooCommerce projeleri, SEO, GEO, AEO, AIO, yapay zekâ arama görünürlüğü ve dijital güvenlik çözümleri sunar. Projenin yalnızca yayına alınmasını değil; yönetilebilir, ölçülebilir ve büyümeye hazır hale gelmesini hedefleriz.</p>
        <div className="contact-links">
          <a href="/ikas">ikas hizmetleri</a>
          <a href="/hizmetler/e-ticaret">E-ticaret sistemleri</a>
          <a href="/hizmetler/web-tasarim">Web tasarım</a>
          <a href="/hizmetler/seo-geo-aeo-aio">SEO & AI görünürlüğü</a>
          <a href="/sss">Sık sorulan sorular</a>
          <a href="/fiyatlandirma">Fiyatlandırma yaklaşımı</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
