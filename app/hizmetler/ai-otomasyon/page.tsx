import type { Metadata } from "next";
import { ArrowUpRight,CheckCircle2 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import { ServiceEssentials } from "@/components/service-essentials";
import { breadcrumbSchema,serviceSchema } from "@/lib/seo";

export const metadata:Metadata={
  title:"AI Otomasyon | Yapay Zekâ Destekli İş Akışları",
  description:"Tekrarlayan operasyon, içerik, veri ve müşteri süreçlerini insan kontrolünü koruyan AI otomasyonlarıyla hızlandırın; onay, hata kontrolü ve ölçüm katmanlarını koruyun.",
  alternates:{canonical:"/hizmetler/ai-otomasyon"},
  openGraph:{title:"AI Otomasyon ve İş Akışları | Olivon",description:"Tekrarlayan işleri azaltan, insan kontrolünü koruyan yapay zekâ destekli iş akışları.",url:"/hizmetler/ai-otomasyon",type:"website"}
};

const layers=[
  ["Operasyon otomasyonu","Tekrarlayan veri girişi, kontrol, bildirim ve aktarım işlerini daha az manuel müdahaleyle çalışacak akışlara dönüştürürüz."],
  ["İçerik ve veri akışları","Ürün, katalog, raporlama ve içerik süreçlerinde yapay zekâyı kontrolsüz üretim yerine tanımlı iş kuralları içinde kullanırız."],
  ["Sistem entegrasyonu","Mevcut e-ticaret, web ve iş araçları arasında uygun noktalarda veri akışını birbirine bağlarız."],
  ["İnsan kontrolü","Kritik kararları otomasyona bırakmadan onay, denetim ve hata kontrolü katmanlarını sürecin parçası yaparız."]
];

const answers=[
  ["Hangi süreçler AI otomasyona uygundur?","Tekrarlayan, kuralı tanımlanabilen ve çıktısı kontrol edilebilen işler iyi adaylardır. Ürün verisi hazırlama, katalog kontrolü, rapor özetleme, bildirim, veri sınıflandırma ve ekip içi operasyon akışları buna örnektir."],
  ["AI otomasyon çalışanların yerini mi alır?","Hedefimiz insanı süreçten çıkarmak değil, tekrar yükünü azaltmaktır. Kritik karar, onay, finansal işlem ve marka riski taşıyan adımlarda insan kontrolünü koruruz."],
  ["Veri güvenliği nasıl ele alınır?","Kullanılan servisleri, veri kapsamını ve aktarım noktalarını proje başında sınırlarız. Gereksiz kişisel veya hassas veriyi modele taşımamaya, erişimleri görev bazlı tutmaya ve kritik akışlarda kayıt/denetim izi bırakmaya öncelik veririz."],
  ["Otomasyonun faydası nasıl ölçülür?","Önce manuel sürede harcanan zamanı ve hata noktalarını belirleriz. Sonrasında işlem süresi, tekrar sayısı, hata oranı, onay süresi ve gerekiyorsa operasyon maliyeti gibi ölçülebilir göstergeler üzerinden gelişimi takip ederiz."]
];

const faqSchema={
  "@context":"https://schema.org",
  "@type":"FAQPage",
  mainEntity:answers.map(([name,text])=>({"@type":"Question",name,acceptedAnswer:{"@type":"Answer",text}}))
};

export default function AutomationPage(){
  return <main className="inner-page services-page">
    <StructuredData data={[
      serviceSchema("AI otomasyon ve iş akışları","Tekrarlayan operasyonları, içerik ve veri süreçlerini insan kontrollü yapay zekâ otomasyonlarıyla sadeleştirme hizmeti.","/hizmetler/ai-otomasyon"),
      breadcrumbSchema([{name:"Ana Sayfa",path:"/"},{name:"Hizmetler",path:"/hizmetler"},{name:"AI otomasyon",path:"/hizmetler/ai-otomasyon"}]),
      faqSchema
    ]}/>
    <section className="inner-hero shell services-hero"><p className="section-index">AI OTOMASYON VE İŞ AKIŞLARI</p><h1>Yapay zekâ gösterisi değil.<br/><em>Daha az tekrar, daha iyi operasyon.</em></h1><p>AI'ı markanın önüne koymadan; zaman alan iş akışlarını hızlandırmak, veriyi düzenlemek ve ekiplerin operasyon yükünü azaltmak için kullanıyoruz.</p></section>
    <section className="service-detail-grid shell">{layers.map(item=><article className="service-detail-card" key={item[0]}><h2>{item[0]}</h2><p>{item[1]}</p><ul><li><CheckCircle2 size={16}/>İhtiyaca göre tasarlanan iş akışı</li></ul></article>)}</section>
    <ServiceEssentials
      audience={["Tekrarlayan manuel işleri yoğun olan ekipler","Ürün/katalog/veri akışını hızlandırmak isteyen e-ticaret ekipleri","Onay ve denetim gerektiren operasyonları sadeleştirmek isteyen işletmeler"]}
      deliverables={["Süreç ve darboğaz analizi","Otomasyon akış şeması","Entegrasyon ve onay noktaları","Hata kontrolü, ölçüm ve operasyon dokümantasyonu"]}
      process={["Tekrarlayan işi haritalama","Risk ve onay noktalarını belirleme","Prototip ve entegrasyon","Test, izleme ve iyileştirme"]}
      fitNote="Karar sorumluluğunu tamamen yapay zekâya devretmek isteyen kullanım senaryoları yerine, kontrol edilebilir ve ölçülebilir operasyon akışlarına odaklanır."
    />
    <section className="service-essentials shell" aria-labelledby="automation-answers-title">
      <div className="service-essentials-head">
        <div><p className="section-index">SIK SORULANLAR</p><h2 id="automation-answers-title">AI otomasyon hakkında net sınırlar ve kullanım alanları.</h2></div>
        <p>Otomasyonu tek başına bir teknoloji projesi gibi ele almıyoruz. Gerekli olduğunda <a href="/hizmetler/e-ticaret">e-ticaret operasyonu</a>, <a href="/hizmetler/web-tasarim">web altyapısı</a> ve <a href="/hizmetler/dijital-guvenlik">dijital güvenlik</a> katmanlarını aynı akış içinde değerlendiriyoruz.</p>
      </div>
      <div className="service-essentials-grid">
        {answers.map(([question,answer])=><article key={question}><h3>{question}</h3><p>{answer}</p></article>)}
      </div>
    </section>
    <section className="service-cta shell"><p className="section-index">OTOMASYON ANALİZİ</p><h2>Ekibinizin zaman kaybettiği tekrarları birlikte belirleyelim.</h2><a href="/iletisim">Süreci konuşalım <ArrowUpRight size={18}/></a></section>
    <SiteFooter/>
  </main>;
}