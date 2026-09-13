import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | Web, E-Ticaret, ikas, SEO, Reklam & AI",
  description: "Web sitesi, e-ticaret, ikas, Shopify, WooCommerce, SEO, GEO, AEO, AIO, dijital reklam, güvenlik, süre, fiyat ve proje kapsamı hakkında gerçek müşteri sorularına net yanıtlar.",
  alternates: { canonical: "/sss" },
  openGraph: {
    title: "Olivon SSS | Web, E-Ticaret, ikas, SEO, Reklam ve AI",
    description: "Web ve e-ticaret projelerinde fiyat, süre, altyapı seçimi, görünürlük, reklam, güvenlik ve destek hakkında karar öncesi sorular.",
    url: "/sss",
    type: "website",
  },
};

const faqs = [
  ["Olivon hangi hizmetleri sunuyor?", "Web tasarım ve geliştirme, e-ticaret sistemleri, ikas kurulum ve destek, Shopify ve WooCommerce projeleri, SEO, GEO, AEO, AIO, dijital reklam, AI otomasyon ve dijital güvenlik hizmetleri sunuyoruz."],
  ["Web sitesi veya e-ticaret projesine nasıl başlıyorsunuz?", "Önce hedefi, hedef kitleyi, mevcut altyapıyı, içerik ihtiyacını, teknik kısıtları ve dönüşüm hedeflerini netleştiriyoruz. Ardından bilgi mimarisi, tasarım, geliştirme, içerik, ölçüm ve yayına alma adımlarını tek bir proje planında topluyoruz."],
  ["Web sitesi yaptırmak ne kadar sürer?", "Süre sayfa sayısı, içerik hazırlığı, özel geliştirme, entegrasyon ve onay akışına göre değişir. Hazır içerikli küçük kurumsal projeler ile ürün, ödeme, kargo, ERP veya özel fonksiyon içeren e-ticaret projeleri aynı takvimde tamamlanmaz. Teklif aşamasında kapsamla birlikte gerçekçi bir teslim planı çıkarıyoruz."],
  ["Web sitesi neden satış veya teklif getirmiyor olabilir?", "Sorun yalnızca tasarım olmayabilir. Mobil deneyim, sayfa hızı, yanlış trafik, zayıf teklif, güven eksikliği, karmaşık navigasyon, kötü ürün sunumu, ölçüm hataları veya güçlü bir CTA olmaması birlikte etkili olabilir. Bu nedenle önce problem kaynağını ayırıp sonra tasarım, içerik, teknik yapı veya pazarlama tarafında müdahale ediyoruz."],
  ["Mobilde kötü görünen veya yavaş çalışan siteyi sıfırdan yapmadan düzeltebilir misiniz?", "Evet. Mevcut yapının teknik borcu ve tema sınırları izin veriyorsa responsive düzen, tipografi, menü, ürün kartları, Core Web Vitals, görsel optimizasyonu ve dönüşüm akışı iyileştirilebilir. Mevcut altyapının onarım maliyeti yeniden kurulumdan yüksekse bunu da açıkça belirtiriz."],
  ["Mevcut siteyi iyileştirmek mi, sıfırdan yeniden kurmak mı daha mantıklı?", "Karar; altyapının güncelliği, performans sorunları, güvenlik riski, tema veya kod bağımlılığı, içerik taşınabilirliği ve yeni hedeflerin mevcut sistemle karşılanıp karşılanamadığına göre verilir. Gereksiz yeniden yapım önermiyoruz; ancak mevcut sistem büyümeyi sürekli sınırlıyorsa kontrollü yeniden kurulum daha sağlıklı olabilir."],
  ["ikas kurulumu ve mevcut ikas mağazası için destek veriyor musunuz?", "Evet. Yeni ikas mağaza kurulumu, tema düzenleme, görsel destek, sabit sayfalar, ürün-kategori yapısı, sanal POS, kargo, pazaryeri, ERP, e-ihracat ve mevcut mağaza check-up çalışmaları yapıyoruz."],
  ["Shopify mı, ikas mı, WooCommerce mi daha iyi?", "Tek bir doğru platform yok. ikas Türkiye odaklı operasyon ve yerel entegrasyonlarda avantajlı olabilir; Shopify hızlı, ölçeklenebilir ve global ekosistemi güçlüdür; WooCommerce ise WordPress üzerinde daha fazla teknik esneklik sağlar. Ürün sayısı, ekip kapasitesi, ülke hedefi, entegrasyonlar, özelleştirme ihtiyacı ve toplam sahip olma maliyetine göre seçim yapıyoruz."],
  ["WooCommerce güvenli mi ve bakımı zor mu?", "Doğru sunucu, güncel WordPress/WooCommerce çekirdeği, güvenilir eklentiler, yedekleme, erişim politikaları ve güvenlik katmanlarıyla WooCommerce güvenli şekilde işletilebilir. Ancak yönetilmeyen eklenti yığını ve düzensiz güncellemeler risk oluşturur; bu nedenle bakım disiplini Shopify veya ikas gibi barındırılan sistemlerden daha kritiktir."],
  ["E-ticaret sitesi kurulduktan sonra satış kendiliğinden gelir mi?", "Hayır. Altyapı satış için gerekli zemini kurar; ancak doğru ürün sunumu, fiyat, güven, trafik kaynağı, reklam, organik görünürlük, mobil deneyim ve ölçüm birlikte çalışmalıdır. E-ticaret projesini yalnızca mağaza açmak değil, satışa hazır bir sistem kurmak olarak ele alıyoruz."],
  ["SEO, GEO, AEO ve AIO arasındaki fark nedir?", "SEO klasik arama motoru görünürlüğünü, GEO üretken yapay zekâ cevaplarında marka ve kaynak görünürlüğünü, AEO doğrudan cevap motorlarına uygun içerik yapısını, AIO ise yapay zekâ destekli arama deneyimlerine bütünsel uyumu kapsar. Bunları birbirinden kopuk değil, aynı bilgi mimarisi ve otorite sistemi içinde ele alıyoruz."],
  ["SEO çalışması ne kadar sürede sonuç verir?", "Tek bir süre vermek doğru değildir. Mevcut alan adı otoritesi, teknik sorunlar, rekabet, içerik kalitesi, tarama ve indeksleme durumu ile hedef sorgular sonucu etkiler. Teknik hatalar daha hızlı iyileştirilebilirken rekabetçi sorgularda kalıcı organik görünürlük aylar sürebilir. Sıralama garantisi vermek yerine ölçülebilir iyileştirme alanlarını takip ediyoruz."],
  ["Yapay zekâ aramalarında görünmek garanti edilebilir mi?", "Hayır. Hiçbir ajans belirli bir AI cevabında veya belirli bir sıralamada kalıcı görünürlük garantisi veremez. Marka varlıklarını netleştirmek, yapılandırılmış veri, konu otoritesi, güvenilir kaynaklar, açık hizmet sayfaları ve tutarlı entity sinyalleri kullanmak sistemlerin markayı daha doğru anlamasına yardımcı olur."],
  ["Schema eklemek tek başına Google veya AI görünürlüğünü artırır mı?", "Hayır. Schema, içeriğin ve entity ilişkilerinin makineler tarafından daha net yorumlanmasına yardımcı olur; ancak zayıf içerik, düşük otorite veya teknik problemleri tek başına çözmez. Yapılandırılmış veriyi gerçek sayfa içeriği, internal linkler, canonical, sitemap ve kaliteli içerik sistemiyle birlikte kullanıyoruz."],
  ["Reklama para harcıyorum ama satış gelmiyor; sorun nerede olabilir?", "Sorun hedefleme veya teklif stratejisinden önce ölçüm, ürün, fiyat, landing page, mobil deneyim, kreatif, güven veya ödeme akışında olabilir. Önce GA4 ve dönüşüm olaylarını doğrulayıp ardından trafik kalitesi, kampanya mimarisi, kreatif ve ticari verileri birlikte inceliyoruz."],
  ["Meta reklam mı Google reklam mı daha iyi?", "Kullanıcının talebi zaten oluşmuşsa Google arama kampanyaları daha güçlü niyet yakalayabilir; talep oluşturmak, görsel ürün keşfi veya yeniden pazarlama için Meta daha etkili olabilir. Çoğu markada tek kanal yerine müşteri yolculuğuna göre kanal rolü belirlemek daha sağlıklıdır."],
  ["ROAS yüksek ama neden kâr etmiyor olabilirim?", "ROAS reklam gelirini reklam harcamasına böler; ürün maliyeti, kargo, komisyon, iade, indirim, operasyon ve vergi etkilerini içermez. Bu yüzden yüksek ROAS her zaman net kâr anlamına gelmez. Kampanya değerlendirmesinde mümkün olduğunca ticari maliyetleri de dikkate alıyoruz."],
  ["Cloudflare kullanmak siteyi tamamen güvenli yapar mı?", "Hayır. Cloudflare WAF, DDoS, bot ve trafik yönetiminde güçlü bir katman sağlar; ancak zayıf parola, güncel olmayan yazılım, kötü eklenti, yanlış yetki, sunucu açığı veya veri sızıntısı gibi riskleri tek başına ortadan kaldırmaz. Güvenliği katmanlı ele alıyoruz."],
  ["E-ticaret sitesi güvenliği için hangi katmanlar gerekli?", "SSL, WAF, DDoS koruması, bot ve rate-limit politikaları, çok faktörlü kimlik doğrulama, rol bazlı erişim, güncelleme disiplini, güvenli yedekleme, log/izleme ve olay geri dönüş planı temel katmanlardır. Amaç mutlak güvenlik iddiası değil, riski ve kesinti etkisini azaltmaktır."],
  ["AI otomasyon hangi işlerde gerçekten faydalı olur?", "Tekrarlayan veri işleme, raporlama, içerik hazırlık akışı, müşteri taleplerini sınıflandırma, iç operasyon kontrol listeleri ve belirli entegrasyonlar otomasyona uygun olabilir. Finansal karar, hassas müşteri verisi veya geri dönüşü zor aksiyonlarda insan onayı ve güvenlik sınırları korunmalıdır."],
  ["Fiyat neden projeden projeye değişiyor?", "Aynı başlıktaki iki proje teknik olarak çok farklı olabilir. Sayfa ve ürün sayısı, özel tasarım ihtiyacı, entegrasyonlar, veri taşıma, içerik üretimi, güvenlik, ölçüm, SEO ve destek kapsamı fiyatı etkiler. Bu nedenle önce kapsamı netleştirip ardından neyin dahil olduğunu açıkça belirten teklif hazırlıyoruz."],
  ["Proje sonrası teknik destek ve bakım nasıl ilerliyor?", "İhtiyaca göre yayına alma sonrası hata takibi, içerik ve görsel güncellemeleri, entegrasyon kontrolü, performans, güvenlik, ölçüm ve periyodik iyileştirme desteği planlanabilir. Sürekli destek kapsamı proje tesliminden ayrı şekilde netleştirilir."],
  ["Olivon hangi bölgelere hizmet veriyor?", "Kayseri merkezliyiz ve Türkiye genelindeki markalarla uzaktan çalışıyoruz. Proje yönetimi, toplantılar, içerik akışı ve teknik süreçler dijital olarak yürütülebilir."],
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
        <h1>Gerçek problemler.<br /><em>Net cevaplar.</em></h1>
        <p>Web sitesi, e-ticaret, altyapı seçimi, SEO ve AI görünürlüğü, reklam, güvenlik, fiyat ve proje süreci hakkında karar vermeden önce en çok sorulan sorular.</p>
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
        <h2>Probleminize en yakın alanı inceleyin.</h2>
        <div>
          <a href="/hizmetler/web-tasarim">Web tasarım & geliştirme <ArrowUpRight size={16} /></a>
          <a href="/hizmetler/e-ticaret">E-ticaret sistemleri <ArrowUpRight size={16} /></a>
          <a href="/ikas">ikas kurulum & destek <ArrowUpRight size={16} /></a>
          <a href="/hizmetler/seo-geo-aeo-aio">SEO, GEO, AEO & AIO <ArrowUpRight size={16} /></a>
          <a href="/hizmetler/dijital-reklam">Dijital reklam <ArrowUpRight size={16} /></a>
          <a href="/hizmetler/dijital-guvenlik">Dijital güvenlik <ArrowUpRight size={16} /></a>
          <a href="/hizmetler/ai-otomasyon">AI otomasyon <ArrowUpRight size={16} /></a>
          <a href="/fiyatlandirma">Fiyatlandırma yaklaşımı <ArrowUpRight size={16} /></a>
          <a href="/referanslar">Vaka çalışmaları <ArrowUpRight size={16} /></a>
          <a href="/iletisim">Projenizi konuşalım <ArrowUpRight size={16} /></a>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
