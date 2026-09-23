import type { Metadata } from "next";
import { ArrowUpRight, Check, Gift, Globe2, Paintbrush } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ikas Kampanyası | 3 Ay Ek Lisans, Tasarım, Domain ve 6 Taksit",
  description: "İlk 15 kişiye özel Olivon × ikas kampanyası: 3 ay ek lisans, profesyonel tasarım, domain hediyesi ve uygun ödeme yöntemlerinde vade farksız 6 taksit.",
  alternates: { canonical: "/kampanyalar" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Olivon",
    title: "Olivon × ikas Kampanyası | İlk 15 Kişiye 4 Avantaj",
    description: "İlk 15 kişiye özel: 3 ay ek ikas lisansı, profesyonel tasarım, domain hediyesi ve uygun ödeme yöntemlerinde vade farksız 6 taksit.",
    url: `${SITE_URL}/kampanyalar`,
    images: [{ url: "/images/campaigns/olivon-ikas-kampanya-desktop.webp", width: 2048, height: 768, alt: "Olivon ikas kampanyası" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivon × ikas Kampanyası | İlk 15 Kişiye 4 Avantaj",
    description: "3 ay ek ikas lisansı, profesyonel tasarım, domain hediyesi ve uygun ödeme yöntemlerinde vade farksız 6 taksit.",
    images: ["/images/campaigns/olivon-ikas-kampanya-desktop.webp"],
  },
};

const benefits = [
  { icon: Gift, title: "3 ay ek ikas lisansı", text: "Kampanya kapsamındaki uygun yeni başvurularda 3 ay ek lisans avantajı." },
  { icon: Paintbrush, title: "Profesyonel tasarım hizmeti", text: "Marka dili, vitrin, banner ve temel mağaza görsel düzenlemeleri Olivon tarafından hazırlanır." },
  { icon: Globe2, title: "Domain hediyesi", text: "Yeni mağaza kurulumu için uygun alan adı kampanya kapsamında hediye edilir." },
  { icon: Check, title: "Vade farksız 6 taksit", text: "Uygun ödeme yöntemlerinde kampanya kapsamında vade farkı olmadan 6 taksit imkânı sunulur." },
];

const faqs = [
  ["Kampanya kimler için geçerli?", "Kampanya yeni ikas mağazası kurmak isteyen ve Olivon üzerinden başvuran ilk 15 uygun müşteri için planlanmıştır."],
  ["Kampanyada hangi avantajlar var?", "3 ay ek ikas lisansı, profesyonel tasarım hizmeti, domain hediyesi ve uygun ödeme yöntemlerinde vade farksız 6 taksit kampanya kapsamındaki ana avantajlardır."],
  ["Başvuru nasıl yapılır?", "Kampanya sayfasındaki WhatsApp butonundan Olivon ekibine ulaşarak proje ve mağaza ihtiyacınızı iletebilirsiniz."],
  ["Kontenjan sınırlı mı?", "Evet. Kampanya ilk 15 uygun başvuru ile sınırlıdır."],
  ["Vade farksız 6 taksit nasıl uygulanıyor?", "Vade farksız 6 taksit avantajı uygun ödeme yöntemlerinde geçerlidir. Ödeme yöntemi ve uygulanabilirlik başvuru sırasında netleştirilir."],
];

export default function CampaignsPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/kampanyalar#webpage`,
    url: `${SITE_URL}/kampanyalar`,
    name: "Olivon Kampanyaları",
    description: "Olivon × ikas kampanyası: İlk 15 uygun başvuru için 3 ay ek lisans, profesyonel tasarım, domain hediyesi ve uygun ödeme yöntemlerinde vade farksız 6 taksit.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "tr-TR",
    mainEntity: {
      "@type": "Offer",
      name: "Olivon × ikas İlk 15 Kişiye Özel Kampanya",
      description: "İlk 15 uygun başvuruya 3 ay ek ikas lisansı, profesyonel tasarım hizmeti, domain hediyesi ve uygun ödeme yöntemlerinde vade farksız 6 taksit avantajı.",
      url: `${SITE_URL}/kampanyalar#ikas-ilk-15`,
      category: "E-ticaret kampanyası",
      areaServed: { "@type": "Country", name: "Türkiye" },
      eligibleRegion: { "@type": "Country", name: "Türkiye" },
      itemOffered: {
        "@type": "Service",
        name: "ikas e-ticaret mağaza kurulum ve tasarım hizmeti",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Türkiye" },
        audience: { "@type": "BusinessAudience", audienceType: "E-ticaret mağazası kurmak isteyen işletmeler" },
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main>
      <StructuredData data={[pageSchema, faqSchema]} />

      <section className="campaigns-intro shell">
        <p className="section-index">OLIVON KAMPANYALARI</p>
        <h1>E-ticaret yatırımını <em>daha avantajlı</em> başlat.</h1>
        <p>İlk 15 kişiye özel ikas kampanyasında 3 ay ek lisans, profesyonel tasarım hizmeti, domain hediyesi ve vade farksız 6 taksit avantajı. Kontenjan dolmadan avantajlı e-ticaret kurulumuna başvurun.</p>
        <span className="campaign-installment-badge campaign-installment-badge--page" aria-hidden="true">
          <span className="campaign-installment-orbit" />
          <span className="campaign-installment-card">
            <small>YENİ AVANTAJ</small>
            <strong><b>6</b> TAKSİT</strong>
            <em>VADE FARKSIZ</em>
          </span>
          <span className="campaign-installment-shine" />
        </span>
      </section>

      <section className="campaign-detail shell" id="ikas-ilk-15">
        <a className="campaign-detail-visual" href="https://wa.me/905013484838?text=Merhaba%20Olivon%2C%20%C4%B0KAS%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20ve%20ba%C5%9Fvurmak%20istiyorum." target="_blank" rel="noreferrer">
          <picture>
            <source media="(max-width: 760px)" srcSet="/images/campaigns/olivon-ikas-kampanya-mobile.webp" />
            <img
              src="/images/campaigns/olivon-ikas-kampanya-desktop.webp"
              alt="Olivon ve ikas kampanyası: İlk 15 kişiye 3 ay ek lisans, profesyonel tasarım ve domain hediyesi."
              width="2048"
              height="768"
              loading="eager"
              decoding="async"
            />
          </picture>
        </a>

        <div className="campaign-detail-copy">
          <div>
            <p className="campaign-status"><span /> AKTİF KAMPANYA · İLK 15 KİŞİ</p>
            <h2>ikas&apos;ta dev kampanya: <em>4 ayrı avantaj</em></h2>
            <p>Yeni ikas mağazasını Olivon ile kurmak isteyen ilk 15 uygun başvuru için 3 ay ek lisans, profesyonel tasarım hizmeti, domain hediyesi ve uygun ödeme yöntemlerinde vade farksız 6 taksit avantajı sunuluyor.</p>
          </div>
          <a className="button primary campaign-whatsapp" href="https://wa.me/905013484838?text=Merhaba%20Olivon%2C%20%C4%B0KAS%20kampanyas%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20ve%20ba%C5%9Fvurmak%20istiyorum." target="_blank" rel="noreferrer">
            WhatsApp&apos;tan başvur <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="campaign-benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <div className="campaign-terms">
          <div>
            <p className="section-index">KAMPANYA KAPSAMI</p>
            <h2>Başvurmadan önce bilinmesi gerekenler</h2>
          </div>
          <ul>
            <li><Check size={17} /> Kampanya ilk 15 uygun yeni başvuru ile sınırlıdır.</li>
            <li><Check size={17} /> Kampanya avantajları nakde çevrilemez.</li>
            <li><Check size={17} /> Tasarım kapsamı proje başlangıcında mağaza ihtiyaçlarına göre netleştirilir.</li>
            <li><Check size={17} /> Domain uygunluğu başvuru sırasında kontrol edilir.</li>
            <li><Check size={17} /> Lisans avantajı ikas kampanya ve uygunluk koşullarına tabidir.</li>
          </ul>
        </div>

        <div className="campaign-faq">
          <p className="section-index">SIK SORULANLAR</p>
          <h2>İKAS kampanyası hakkında</h2>
          <div className="campaign-faq-grid">
            {faqs.map(([question, answer]) => (
              <article key={question}><h3>{question}</h3><p>{answer}</p></article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
