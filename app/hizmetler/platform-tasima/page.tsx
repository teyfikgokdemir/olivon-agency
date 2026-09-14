import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "E-Ticaret Platform Taşıma & Migration | Olivon",
  description: "ikas, Shopify, WooCommerce, IdeaSoft, Ticimax, T-Soft, OpenCart, PrestaShop ve diğer altyapılar arasında veri, SEO, URL ve entegrasyon kaybını azaltan kontrollü e-ticaret geçişi.",
  alternates: { canonical: "/hizmetler/platform-tasima" },
  openGraph: {
    title: "E-Ticaret Platform Taşıma & Migration | Olivon",
    description: "Yerli ve global e-ticaret altyapıları ile pazaryerlerinden yeni satış sistemine kontrollü veri, içerik, SEO ve entegrasyon geçişi.",
    url: "/hizmetler/platform-tasima",
    type: "website",
  },
};

const migrationScenarios = [
  {
    title: "Yerli e-ticaret altyapıları arasında geçiş",
    text: "ikas, IdeaSoft, Ticimax, T-Soft, PlatinMarket ve benzeri sistemler arasında ürün, kategori, varyant, görsel, içerik ve operasyon verilerini hedef platformun veri modeline göre yeniden eşleştiririz.",
  },
  {
    title: "Global veya açık kaynak altyapılara geçiş",
    text: "Shopify, WooCommerce, OpenCart, PrestaShop, Magento/Adobe Commerce, BigCommerce, Wix eCommerce ve benzeri yapılara veya bu sistemlerden farklı bir altyapıya geçişi teknik kapsamına göre planlarız.",
  },
  {
    title: "Pazaryerinden kendi e-ticaret sitenize geçiş",
    text: "Trendyol, Hepsiburada, Amazon, N11, Pazarama, Çiçeksepeti, Etsy ve benzeri kanallarda satış yapan ancak kendi sitesi olmayan markalar için ürün kataloğunu bağımsız satış kanalına dönüştürecek e-ticaret altyapısını kurarız.",
  },
  {
    title: "Özel yazılımdan hazır altyapıya veya tersine geçiş",
    text: "API, veri tabanı, dışa aktarma dosyaları ve mevcut operasyon akışları incelenerek özel yazılım ile SaaS veya açık kaynak sistemler arasındaki geçişin teknik yapılabilirliğini çıkarırız.",
  },
  {
    title: "Mevcut siteyi kapatmadan yeniden platformlama",
    text: "Yeni mağazayı paralel ortamda hazırlayıp içerik, yönlendirme, ölçüm ve kritik satın alma akışlarını test ederek kontrollü yayın planı oluştururuz.",
  },
];

const migrationFaq = [
  {
    question: "Hangi e-ticaret platformları arasında taşıma yapıyorsunuz?",
    answer: "ikas, Shopify, WooCommerce, IdeaSoft, Ticimax, T-Soft, PlatinMarket, OpenCart, PrestaShop, Magento/Adobe Commerce ve benzeri sistemleri değerlendiriyoruz. BigCommerce, Wix eCommerce, özel yazılım ve daha az yaygın altyapılarda ise önce API, veri dışa aktarma ve hedef sistemin içe aktarma olanaklarını inceliyoruz."
  },
  {
    question: "E-ticaret platformu değiştirirken ürünler ve görseller taşınabilir mi?",
    answer: "Evet. Kaynak platformun dışa aktarma imkânlarına ve veri kalitesine bağlı olarak ürün adı, açıklama, SKU, barkod, fiyat, stok, varyant, kategori ve görseller hedef platforma uyarlanabilir. Taşıma öncesinde alan eşleştirme ve veri temizliği yapılması gerekir."
  },
  {
    question: "Platform değişiminde Google sıralamaları kaybolur mu?",
    answer: "Yanlış URL değişiklikleri ve eksik yönlendirmeler organik görünürlük kaybına yol açabilir. Bu nedenle eski ve yeni URL’ler eşleştirilir, gerekli 301 yönlendirmeleri planlanır, canonical, sitemap, robots, metadata ve index durumu yayın öncesi ve sonrası kontrol edilir."
  },
  {
    question: "Pazaryerindeki ürünler kendi web siteme taşınabilir mi?",
    answer: "Uygun veri kaynağı, entegrasyon veya dışa aktarım bulunduğunda ürün kataloğu yeni e-ticaret sitesine aktarılabilir. Ancak pazaryeri içeriğini birebir kopyalamak yerine kategori, ürün içeriği, marka dili, SEO ve satın alma deneyimini bağımsız mağazaya göre yeniden düzenlemek daha doğru sonuç verir."
  },
  {
    question: "Hangi platforma geçmem gerektiğini de belirliyor musunuz?",
    answer: "Evet. Karar ürün sayısı, entegrasyonlar, operasyon ekibi, özelleştirme ihtiyacı, toplam sahip olma maliyeti, içerik yönetimi, B2B/B2C yapısı, e-ihracat hedefi ve büyüme planına göre verilmelidir. Taşıma projesinden önce mevcut darboğazları ve hedef mimariyi birlikte değerlendiririz."
  },
  {
    question: "Müşteri ve sipariş verileri de taşınır mı?",
    answer: "Kaynak ve hedef platformların API, dışa aktarma ve veri modeli izin verdiği ölçüde müşteri ve sipariş geçmişi için taşıma kapsamı belirlenebilir. KVKK, veri minimizasyonu ve operasyonel gereklilikler ayrıca değerlendirilir."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: migrationFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function PlatformMigrationPage() {
  return (
    <main className="inner-page services-page">
      <StructuredData
        data={[
          serviceSchema(
            "E-ticaret platform taşıma",
            "Yerli, global, açık kaynak ve özel e-ticaret altyapıları ile pazaryerlerinden yeni satış sistemine kontrollü veri, içerik, SEO ve entegrasyon geçişi.",
            "/hizmetler/platform-tasima"
          ),
          breadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "Hizmetler", path: "/hizmetler" },
            { name: "E-ticaret", path: "/hizmetler/e-ticaret" },
            { name: "Platform taşıma", path: "/hizmetler/platform-tasima" },
          ]),
          faqSchema,
        ]}
      />

      <section className="inner-hero shell services-hero">
        <p className="section-index">E-TİCARET PLATFORM TAŞIMA</p>
        <h1>Altyapıyı değiştirin.<br /><em>Veriyi, görünürlüğü ve satışı kaybetmeyin.</em></h1>
        <p>ikas, Shopify, WooCommerce, IdeaSoft, Ticimax, T-Soft ve diğer yerli, global veya açık kaynak e-ticaret sistemleri arasında geçişleri; ürün verisi, kategori mimarisi, SEO URL’leri, yönlendirmeler, entegrasyonlar ve yayın kontrolüyle birlikte yönetiyoruz. Yalnızca pazaryerinde satış yapan markalar için de bağımsız e-ticaret sitesine geçiş planlıyoruz.</p>
      </section>

      <section className="service-detail-grid shell" aria-label="Platform taşıma senaryoları">
        {migrationScenarios.map((item) => (
          <article className="service-detail-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <ul>
              <li><CheckCircle2 size={16} /> Veri ve içerik eşleştirme</li>
              <li><CheckCircle2 size={16} /> SEO ve URL geçiş planı</li>
              <li><CheckCircle2 size={16} /> Yayın öncesi kalite kontrol</li>
            </ul>
          </article>
        ))}
      </section>

      <ServiceEssentials
        audience={[
          "Mevcut e-ticaret altyapısından memnun olmayan markalar",
          "Yerli, global veya açık kaynak sistemler arasında geçiş planlayan ekipler",
          "Sadece pazaryerinde satış yapıp kendi e-ticaret kanalını kurmak isteyen işletmeler",
          "Özel yazılımdan hazır altyapıya veya hazır altyapıdan özel sisteme geçmek isteyen markalar",
          "Platform değiştirirken organik trafik ve operasyon kaybını azaltmak isteyen ekipler",
        ]}
        deliverables={[
          "Kaynak-hedef veri alanı ve kapsam analizi",
          "Ürün, kategori, varyant, görsel ve içerik taşıma planı",
          "Eski-yeni URL eşleştirmesi ve 301 yönlendirme planı",
          "Metadata, canonical, sitemap, robots ve index kontrolleri",
          "Ödeme, kargo, ERP, pazaryeri ve ölçüm entegrasyon planı",
          "Yayın öncesi ve sonrası teknik/operasyonel kontrol listesi",
        ]}
        process={[
          "Mevcut sistem ve veri envanteri",
          "Hedef platform ve geçiş mimarisi",
          "Veri temizliği, eşleştirme ve aktarım",
          "SEO yönlendirmeleri ve entegrasyon kurulumu",
          "Test, yayın ve yayın sonrası kontrol",
        ]}
        fitNote="Bu hizmet yalnızca CSV içe aktarma işi değildir. Platform değişikliğini veri bütünlüğü, satış operasyonu, kullanıcı deneyimi ve organik görünürlük açısından birlikte yönetmek isteyen markalar için tasarlanmıştır. Kaynak veya hedef sistem listede olmasa bile teknik imkânları inceleyerek taşımanın kapsamını belirleyebiliriz."
      />

      <section className="service-essentials shell" aria-labelledby="migration-seo-title">
        <div className="service-essentials-head">
          <p className="section-index">SEO · GEO · AEO · AIO GEÇİŞ KORUMASI</p>
          <h2 id="migration-seo-title">Yeni platforma yalnızca ürünleri değil, dijital görünürlüğü de taşıyoruz.</h2>
          <p>Platform geçişinde sayfa adresleri, içerik hiyerarşisi, yapılandırılmış veri ve marka sinyalleri değişebilir. Bu nedenle geçiş planına klasik SEO’nun yanında yapay zekâ destekli arama ve cevap motorlarının ihtiyaç duyduğu entity, içerik ve schema sürekliliğini de dahil ediyoruz.</p>
        </div>
        <div className="service-essentials-grid">
          <article><h3>SEO</h3><p>URL eşleştirme, 301 yönlendirme, canonical, sitemap, robots, metadata, başlık yapısı ve index durumunu geçiş öncesi ve sonrası kontrol ederiz.</p></article>
          <article><h3>GEO</h3><p>Marka, hizmet, ürün ve konum sinyallerinin yeni altyapıda tutarlı kalmasını; üretken arama motorlarının işletmeyi doğru bağlamda anlamasını destekleriz.</p></article>
          <article><h3>AEO</h3><p>Kategori, ürün, SSS ve yardımcı içeriklerin doğrudan cevap üretmeye uygun bilgi mimarisini ve gerekli yapılandırılmış veriyi koruruz.</p></article>
          <article><h3>AIO</h3><p>AI destekli keşif sistemlerinde marka ve ürün varlığını güçlendiren içerik ilişkilerini, entity sinyallerini ve teknik okunabilirliği yeni platformda yeniden kurarız.</p></article>
        </div>
      </section>

      <section className="service-essentials shell" aria-labelledby="migration-faq-title">
        <div className="service-essentials-head">
          <p className="section-index">PLATFORM TAŞIMA SORULARI</p>
          <h2 id="migration-faq-title">Taşıma kararından önce netleştirilmesi gerekenler.</h2>
        </div>
        <div className="service-essentials-grid">
          {migrationFaq.map((item) => <article key={item.question}><h3>{item.question}</h3><p>{item.answer}</p></article>)}
        </div>
        <p className="service-duration"><strong>İlgili hizmetler:</strong> yeni altyapı seçimi ve mağaza kurgusu için <a href="/hizmetler/e-ticaret">e-ticaret sistemleri</a>, ikas projeleri için <a href="/ikas">ikas kurulum ve destek</a>, organik ve AI görünürlüğü için <a href="/hizmetler/seo-geo-aeo-aio">SEO, GEO, AEO & AIO</a>.</p>
      </section>

      <section className="service-cta shell">
        <p className="section-index">KONTROLLÜ GEÇİŞ</p>
        <h2>Hangi platformdan nereye geçeceğinizi ve hangi verilerin korunması gerektiğini birlikte çıkaralım.</h2>
        <a href="/iletisim">Taşıma projesini değerlendirelim <ArrowUpRight size={18} /></a>
      </section>
      <SiteFooter />
    </main>
  );
}
