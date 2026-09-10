import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "KVKK Aydınlatma Metni", description: "Olivon iletişim ve hizmet süreçlerinde 6698 sayılı KVKK kapsamında işlenen kişisel veriler, amaçlar, hukuki sebepler ve başvuru hakları.", alternates: { canonical: "/kvkk" } };
export default function Page(){return <LegalPage title="KVKK Aydınlatma Metni" intro="Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Olivon markasıyla yürütülen iletişim ve hizmet süreçleri hakkında bilgilendirme amacı taşır.">
  <section><h2>Veri sorumlusu</h2><p>Olivon markası üzerinden yürütülen site iletişim ve hizmet süreçlerinde veri sorumlusu, hizmeti sunan işletmedir. Resmî ticari unvan ve tebligat bilgileri teklif ve sözleşme belgelerinde ayrıca belirtilir; KVKK başvuruları info@olivon.com.tr üzerinden alınır.</p></section>
  <section><h2>İşlenen veriler ve amaçlar</h2><p>Kimlik ve iletişim verileri; talep yönetimi, teklif ve sözleşme süreçleri, müşteri ilişkileri, bilgi güvenliği, operasyon takibi ve hukuki yükümlülükler için işlenebilir.</p></section>
  <section><h2>Hukuki sebepler ve aktarım</h2><p>Veriler; bir sözleşmenin kurulması veya ifası, hukuki yükümlülük, meşru menfaat ve gerektiğinde açık rıza hukuki sebeplerine dayanarak işlenir. Yetkili kurumlara ve zorunlu hizmet sağlayıcılarına amaçla sınırlı aktarım yapılabilir.</p></section>
  <section><h2>Başvuru hakkı</h2><p>KVKK’nın 11. maddesindeki haklarınız kapsamında başvurunuzu kimliğinizi doğrulamaya elverişli bilgilerle info@olivon.com.tr adresine iletebilirsiniz.</p></section>
</LegalPage>}
