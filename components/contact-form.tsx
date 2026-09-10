"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lines = [
      "Merhaba Olivon, proje talebimi iletiyorum.",
      "",
      `Marka / Firma: ${form.get("company") || "-"}`,
      `Web sitesi: ${form.get("website") || "-"}`,
      `Hizmet: ${form.get("service") || "-"}`,
      `Mevcut altyapı: ${form.get("platform") || "-"}`,
      `Bütçe aralığı: ${form.get("budget") || "-"}`,
      `Hedef / ihtiyaç: ${form.get("message") || "-"}`,
      `İletişim: ${form.get("contact") || "-"}`,
    ];
    window.dispatchEvent(new CustomEvent("olivon-analytics-event", { detail: { name: "generate_lead", params: { lead_source: "contact_form", service: String(form.get("service") || "") } } }));
    window.location.href = `mailto:info@olivon.com.tr?subject=${encodeURIComponent("Olivon proje talebi")}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-head"><p className="section-index">PROJE BRIEFİ</p><h2>İlk değerlendirme için kısa brief.</h2><p>Form, e-posta uygulamanızda doldurduğunuz bilgilerle yeni mesaj oluşturur. Veriler bu site üzerinde saklanmaz.</p></div>
      <div className="form-grid">
        <label><span>Marka / firma *</span><input name="company" required autoComplete="organization" /></label>
        <label><span>Web sitesi</span><input name="website" inputMode="url" placeholder="https://" /></label>
        <label><span>İhtiyaç duyulan hizmet *</span><select name="service" required defaultValue=""><option value="" disabled>Seçin</option><option>E-ticaret</option><option>ikas kurulum & destek</option><option>Web tasarım & geliştirme</option><option>SEO / GEO / AEO / AIO</option><option>AI otomasyon</option><option>Dijital güvenlik</option><option>Diğer</option></select></label>
        <label><span>Mevcut altyapı</span><select name="platform" defaultValue="Belirlenmedi"><option>Belirlenmedi</option><option>ikas</option><option>Shopify</option><option>WooCommerce</option><option>IdeaSoft</option><option>Özel yazılım</option><option>Diğer</option></select></label>
        <label><span>Planlanan yatırım aralığı</span><select name="budget" defaultValue="Kapsama göre değerlendirelim"><option>Kapsama göre değerlendirelim</option><option>Check-up / analiz</option><option>Kurulum / yeniden yapılandırma</option><option>Sürekli büyüme & destek</option></select></label>
        <label><span>E-posta veya telefon *</span><input name="contact" required autoComplete="email" /></label>
        <label className="form-wide"><span>Hedefiniz / çözmek istediğiniz problem *</span><textarea name="message" required rows={5} /></label>
      </div>
      <div className="form-submit"><button type="submit">Talebi e-posta ile gönder <ArrowUpRight size={17}/></button><small>{sent ? "E-posta uygulaması açıldı." : "Göndererek iletişim amacıyla paylaştığınız bilgilerin kullanılmasını kabul edersiniz."}</small></div>
    </form>
  );
}
