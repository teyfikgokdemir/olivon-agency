import type { Metadata } from "next";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dijital Reklam Ajansı | Meta, Google Ads ve Kârlı Büyüme",
  description: "Reklama bütçe ayırdığı halde satış, dönüşüm veya kârlılık sorunu yaşayan markalar için Meta, Google Ads, ölçüm, kreatif test ve kampanya optimizasyonu.",
  alternates: { canonical: "/hizmetler/dijital-reklam" },
  openGraph: {
    title: "Dijital Reklam & Marka Pazarlama | Olivon",
    description: "Reklam harcamasını trafik yerine dönüşüm, ölçüm ve gerçek ticari sonuçlarla yöneten kampanya sistemi.",
    url: "/hizmetler/dijital-reklam",
    type: "website",
  },
};

const layers = [
  ["Ölçüm temeli", "Reklam bütçesini büyütmeden önce GA4, Google Ads ve platform dönüşüm olaylarının gerçekten satış, form veya telefon gibi değerli işlemleri ölçüp ölçmediğini doğrularız."],
  ["Kampanya mimarisi", "Meta, Google ve gerekiyorsa pazaryeri reklamlarını aynı mantıkla yönetmek yerine; arama niyeti, ürün grubu, hedef kitle ve satın alma aşamasına göre kanal görevlerini ayırırız."],
  ["Kreatif sistem", "Tek bir görselin veya reklam metninin sonucuna bağlı kalmadan; teklif, ürün faydası, format, başlık ve görsel açısını kontrollü varyasyonlarla test ederiz."],
  ["Kârlılık kontrolü", "ROAS yüksek görünse bile marj, indirim, kargo, komisyon, iade ve operasyon maliyeti hesaba katılmadığında kampanya zarar edebilir. Optimizasyonu mümkün olduğunca gerçek ticari sonuçla ilişkilendiririz."],
];

const answers = [
  ["Reklama para harcıyorum ama satış gelmiyor; sorun nerede olabilir?", "Sorun yalnızca reklam hedeflemesi olmayabilir. Dönüşüm ölçümü, ürün-teklif uyumu, fiyat, kreatif, landing page, mobil deneyim, ödeme akışı ve site güveni birlikte incelenmelidir. Önce hangi aşamada kayıp olduğunu tespit ederiz."],
  ["Meta Ads mi Google Ads mi daha doğru?", "İkisi farklı talep türlerine hizmet eder. Google mevcut arama niyetini yakalamada, Meta ise talep oluşturma, yeniden hedefleme ve kreatif keşif tarafında güçlü olabilir. Kanal seçimini ürün, müşteri yolculuğu ve mevcut veriye göre yaparız."],
  ["ROAS iyi görünüyor ama neden para kazanmıyorum?", "ROAS reklam gelirini harcamaya böler; brüt marjı, iadeyi, kargoyu, komisyonu, indirimi ve operasyon maliyetini tek başına göstermez. Bu nedenle medya performansını mümkün olduğunca katkı payı ve gerçek kârlılık varsayımlarıyla birlikte okuruz."],
  ["Reklam bütçesi ne kadar olmalı?", "Her marka için geçerli tek bir bütçe yoktur. Ürün fiyatı, marj, hedef dönüşüm maliyeti, mevcut trafik, kreatif üretim kapasitesi ve test için gereken veri miktarı birlikte değerlendirilmelidir. Veri yoksa önce kontrollü test bütçesiyle öğrenme yapılır."],
  ["Dönüşüm takibi neden bu kadar önemli?", "Platformlar satış, form, telefon veya başka değerli işlemleri doğru algılamazsa optimizasyon yanlış sinyallere göre ilerler. Google Ads de kampanya sonuçlarını anlamak için dönüşüm ölçümünü temel mekanizma olarak tanımlar."],
  ["Sadece reklam hesabını mı yönetiyorsunuz?", "Hayır. Reklam performansını etkileyen <a href=\"/hizmetler/e-ticaret\">e-ticaret altyapısı</a>, <a href=\"/hizmetler/web-tasarim\">landing page ve web deneyimi</a> ile <a href=\"/hizmetler/seo-geo-aeo-aio\">organik görünürlük</a> tarafını da gerektiğinde aynı teşhis içinde değerlendiriyoruz."],
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: answers.map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: {
      "@type": "Answer",
      text: text.replace(/<[^>]+>/g, ""),
    },
  })),
};

export default function DigitalAdsPage() {
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("Dijital reklam ve marka pazarlama", "Meta, Google ve pazaryeri reklamlarında dönüşüm ölçümü, kreatif test, kampanya mimarisi ve kârlılık odaklı optimizasyon.", "/hizmetler/dijital-reklam"),
      breadcrumbSchema([{ name: "Ana Sayfa", path: "/" }, { name: "Hizmetler", path: "/hizmetler" }, { name: "Dijital reklam", path: "/hizmetler/dijital-reklam" }]),
      faqSchema,
    ]} />

    <section className="inner-hero shell services-hero">
      <p className="section-index">DİJİTAL REKLAM & MARKA PAZARLAMA</p>
      <h1>Reklam harcaması değil.<br /><em>Ölçülebilir büyüme.</em></h1>
      <p>“Reklama para harcıyorum ama satış gelmiyor” probleminden başlayıp ölçüm, kreatif, kampanya yapısı, site deneyimi ve kârlılığı aynı sistem içinde değerlendiriyoruz.</p>
    </section>

    <section className="service-detail-grid shell">
      {layers.map(item => <article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16} />Problemi kanaldan önce ölçüm ve teklif seviyesinde teşhis</li></ul></article>)}
    </section>

    <ServiceEssentials
      audience={["Reklam harcaması yaptığı halde satış veya lead kalitesinden memnun olmayan markalar", "Meta ve Google kampanyalarında neyin gerçekten çalıştığını görmek isteyen ekipler", "ROAS yerine gerçek kârlılığa daha yakın karar vermek isteyen e-ticaret işletmeleri"]}
      deliverables={["Dönüşüm ve ölçüm kontrolü", "Kanal ve kampanya mimarisi", "Kreatif test planı", "Teklif ve landing page teşhisi", "Performans ve kârlılık optimizasyon çerçevesi"]}
      process={["Mevcut hesap, veri ve teklif analizi", "Ölçüm doğrulama", "Kampanya ve kreatif test tasarımı", "Kontrollü uygulama", "Raporlama ve optimizasyon"]}
      fitNote="Reklam bütçesini kör biçimde büyütmek veya yalnızca gösterim/takipçi üretmek yerine; neyin satışa, lead'e ve ticari sonuca katkı verdiğini anlamak isteyen markalar için tasarlanmıştır. Belirli ROAS, satış veya gelir garantisi verilmez."
    />

    <section className="service-essentials shell" aria-labelledby="ads-answers-title">
      <div className="service-essentials-head">
        <div><p className="section-index">GERÇEK SORULAR</p><h2 id="ads-answers-title">Markaların reklam verirken gerçekten çözmeye çalıştığı problemler.</h2></div>
        <p>Reklam yönetimini platform ekranındaki metriklerle sınırlamıyoruz. Ölçümün doğru olup olmadığını, teklifin güçlü olup olmadığını ve kullanıcının reklamdan sonra karşılaştığı deneyimi de kontrol ediyoruz.</p>
      </div>
      <div className="service-essentials-grid">
        {answers.map(([question, answer]) => <article key={question}><h3>{question}</h3><p dangerouslySetInnerHTML={{ __html: answer }} /></article>)}
      </div>
    </section>

    <section className="service-cta shell">
      <p className="section-index">REKLAM ANALİZİ</p>
      <h2>Reklam hesabınızdan önce, satışa giden yolun nerede koptuğunu bulalım.</h2>
      <a href="/iletisim">Reklam ve dönüşüm analizini konuşalım <ArrowUpRight size={18} /></a>
    </section>
    <SiteFooter />
  </main>;
}
