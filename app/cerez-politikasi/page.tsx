import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
export const metadata: Metadata = { title: "Çerez Politikası", description: "Olivon sitesinde zorunlu, analitik ve pazarlama çerezlerinin kullanımını, izin modelini ve tercihlerin nasıl değiştirileceğini inceleyin.", alternates: { canonical: "/cerez-politikasi" } };
export default function Page(){return <LegalPage title="Çerez Politikası" intro="Zorunlu çerezler siteyi çalıştırır. Analitik çerezleri onayınızla açılır; ret durumunda sınırlı çerezsiz ölçüm yapılır.">
  <section><h2>Zorunlu çerezler</h2><p>Güvenlik, ağ yönetimi, tercihlerin saklanması ve temel sayfa işlevleri için gereklidir. Bu çerezler kapatıldığında site beklendiği gibi çalışmayabilir.</p></section>
  <section><h2>Analitik çerezler</h2><p>Ziyaretlerin ve içerik kullanımının toplu ve mümkün olduğunca anonim biçimde anlaşılmasına yardımcı olur. Yalnızca onayınızla etkinleştirilir. GA4, izin yokken kısıtlı çerezsiz ölçüm sinyalleri gönderebilir. GA4 ve Clarity kabul veya ret durumunda çalışır. Ret durumunda Clarity çerezsiz ve sınırlı ölçüm yapar; sayfalar arasında kalıcı oturum bağlantısı kurulmaz. Kabul, analitik çerezlerini ve Google Tag Manager’ı etkinleştirir. Clarity metinleri maskeler.</p></section>
  <section><h2>Pazarlama çerezleri</h2><p>Kampanya performansını ve dönüşümleri ölçmek için kullanılabilir. Bu kategori açık izniniz olmadan çalıştırılmaz.</p></section>
  <section><h2>Tercihlerinizi değiştirme</h2><p>Sayfadaki Çerez tercihleri düğmesini kullanarak seçiminizi dilediğiniz zaman değiştirebilirsiniz. İznin geri alınması geçmişteki hukuka uygun işlemleri etkilemez.</p></section>
</LegalPage>}
