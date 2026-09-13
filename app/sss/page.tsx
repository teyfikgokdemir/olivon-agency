import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Web, E-Ticaret, ikas, SEO & AI",
  description: "Web tasarım, e-ticaret, ikas, Shopify, WooCommerce, SEO, GEO, AEO, AIO, dijital güvenlik, süreç ve proje kapsamı hakkında sık sorulan sorular.",
  alternates: { canonical: "/sss" },
  openGraph: {
    title: "Olivon SSS | Web, E-Ticaret, ikas ve SEO Soruları",
    description: "Olivon hizmetleri, proje süreci, e-ticaret altyapıları, ikas, SEO ve AI görünürlüğü hakkında sık sorulan sorular.",
    url: "/sss",
    type: "website",
  },
};

const faqs = [
  ["Olivon hangi hizmetleri sunuyor?", "Web tasarım ve geliştirme, e-ticaret sistemleri, ikas kurulum ve destek, Shopify ve WooCommerce projeleri, SEO, GEO, AEO, AIO, dijital reklam, marka pazarlama ve dijital güvenlik hizmetleri sunuyoruz."],
  ["Web sitesi projesine nasıl başlıyorsunuz?", "Önce hedefleri, hedef kitleyi, mevcut altyapıyı, içerik ihtiyacını ve dönüşüm hedeflerini netleştiriyoruz. Ardından bilgi mimarisi, tasarım, geliştirme, içerik, ölçüm ve yayına alma adımlarını tek bir proje planında topluyoruz."],
  ["ikas kurulumu ve mevcut ikas mağazası için destek veriyor musunuz?", "Evet. Yeni ikas mağaza kurulumu, tema düzenleme, görsel destek, sabit sayfalar, ürün-kategori yapısı, sanal POS, kargo, pazaryeri, ERP, e-ihracat ve mevcut mağaza check-up çalışmaları yapıyoruz."],
  ["Shopify, ikas ve WooCommerce arasında nasıl seçim yapılmalı?", "Seçim yalnızca paket fiyatına göre yapılmamalı. Ürün sayısı, ekip kapasitesi, ülke ve para birimleri, entegrasyonlar, içerik yönetimi, teknik özelleştirme ihtiyacı ve uzun vadeli toplam sahip olma maliyeti birlikte değerlendirilmelidir."],
  ["SEO, GEO, AEO ve AIO arasındaki fark nedir?", "SEO klasik arama motoru görünürlüğünü, GEO üretken yapay zekâ cevaplarında marka konumunu, AEO doğrudan cevap motorlarına uygun içerik yapısını, AIO ise yapay zekâ destekli arama deneyimlerine uyumu kapsar. Olivon bunları tek bir görünürlük sistemi olarak ele alır."],
  ["Yapay zekâ aramalarında markamın görünürlüğü artırılabilir mi?", "Evet. Marka ve hizmet varlıklarının netleştirilmesi, doğru içerik mimarisi, yapılandırılmış veri, güven sinyalleri, kaynak tutarlılığı ve konu otoritesi çalışmaları AI destekli arama sistemlerinin markanızı daha doğru anlamasına yardımcı olur."],
  ["E-ticaret sitesi güvenliği için hangi katmanları öneriyorsunuz?", "SSL, WAF, DDoS koruması, bot ve trafik kontrolü, rol bazlı erişim, çok faktörlü kimlik doğrulama, düzenli yedekleme, güncelleme politikası ve izleme temel katmanlardır. Güvenlik yalnızca saldırı önleme değil, satış sürekliliği olarak ele alınmalıdır."],
  ["Sadece tasarım mı yapıyorsunuz, geliştirme de dahil mi?", "Projeye göre tasarım ve geliştirmeyi birlikte yürütüyoruz. Kurumsal web sitesi, landing page, e-ticaret ön yüzü, performans iyileştirmesi, özel alanlar ve entegrasyon ihtiyaçları aynı kapsam içinde planlanabilir."],
  ["Mevcut web veya e-ticaret sitemizi iyileştirebilir misiniz?", "Evet. Mevcut sitelerde performans, mobil deneyim, içerik yapısı, SEO, dönüşüm akışı, entegrasyonlar ve güvenlik açısından check-up yapıp uygulanabilir bir iyileştirme planı çıkarabiliriz."],
  ["Proje sonrası destek veriyor musunuz?", "Evet. Projenin ihtiyacına göre yayına alma sonrası teknik destek, içerik ve görsel güncellemeleri, entegrasyon takibi, performans kontrolü ve periyodik iyileştirme desteği planlanabilir."],
  ["Olivon hangi bölgelere hizmet veriyor?", "Kayseri merkezliyiz ve Türkiye genelindeki markalarla uzaktan çalışabiliyoruz. Proje yönetimi, toplantılar, içerik akışı ve teknik süreçler dijital olarak yürütülebilir."],
  ["Teklif almak için hangi bilgileri paylaşmalıyım?", "Mevcut web sitesi veya mağaza adresi, hedeflediğiniz sonuç, ihtiyaç duyduğunuz hizmetler, mevcut altyapı ve varsa öncelikli sorunları paylaşmanız ilk değerlendirme için yeterlidir."],
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function FaqPage() {
  return (
    <main className="inner-page faq-page">
      <StructuredData data={[faqSchema, breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"SSS",path:"/sss"}])]} />
      <section className="inner-hero shell faq-hero">
        <p className="section-index">SIK SORULAN SORULAR</p>
        <h1>Karar vermeden önce<br /><em>bilmeniz gerekenler.</em></h1>
        <p>Web, e-ticaret, ikas, Shopify, WooCommerce, SEO, yapay zekâ görünürlüğü ve dijital güvenlik projeleri hakkında en çok sorulan sorular.</p>
      </section>

      <section className="faq-list shell">
        {faqs.map(([question, answer], index) => (
          <details key={question} open={index === 0}>
            <summary><h2>{question}</h2><i>+</i></summary>
            <div><p>{answer}</p></div>
          </details>
        ))}
      </section>

      <section className="faq-topic-links shell">
        <p className="section-index">İLGİLİ SAYFALAR</p>
        <h2>Konuyu daha detaylı inceleyin.</h2>
        <div>
          <a href="/hizmetler">Tüm hizmetler <ArrowUpRight size={16} /></a>
          <a href="/ikas">ikas kurulum & destek <ArrowUpRight size={16} /></a>
          <a href="/hizmetler/e-ticaret">E-ticaret sistemleri <ArrowUpRight size={16} /></a>
          <a href="/hizmetler/seo-geo-aeo-aio">SEO, GEO, AEO & AIO <ArrowUpRight size={16} /></a>
          <a href="/blog">Blog & rehberler <ArrowUpRight size={16} /></a>
          <a href="/iletisim">Projenizi konuşalım <ArrowUpRight size={16} /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
