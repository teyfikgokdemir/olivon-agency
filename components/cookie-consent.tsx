"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Cookie } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

type Consent = { analytics: boolean; marketing: boolean };

const cookieCopy = {
  tr: {
    preferences: "Çerez tercihleri", aria: "Çerez bildirimi", kicker: "GİZLİLİK TERCİHLERİ",
    title: "Dijital deneyiminiz, sizin kontrolünüzde.",
    body: "Zorunlu çerezler sitenin çalışmasını sağlar. Analitik veya pazarlama depolaması yalnızca izninizle açılır; izin verilmediğinde ölçüm sinyalleri çerezsiz ve kısıtlı şekilde işlenebilir. GA4 ve Clarity kabul veya ret durumunda çalışır. Ret durumunda ölçüm çerezsiz ve sınırlıdır. Kabul, analitik çerezlerini ve Google Tag Manager’ı etkinleştirir. Clarity metinleri maskeler.",
    acceptAll: "Tümünü kabul et", necessaryOnly: "Yalnızca zorunlu", manage: "Tercihleri yönet",
    description: "Hangi veri kategorilerine izin vereceğinizi seçin. Tercihinizi daha sonra değiştirebilirsiniz.",
    necessary: "Zorunlu", necessaryDesc: "Güvenlik ve temel site işlevleri", alwaysOn: "Her zaman açık",
    analytics: "Analitik", analyticsDesc: "Kullanım ölçümü, maskelenmiş oturum kayıtları ve ısı haritaları", analyticsAria: "Analitik çerezler",
    marketing: "Pazarlama", marketingDesc: "Kampanya ve dönüşüm ölçümü", marketingAria: "Pazarlama çerezleri", save: "Seçimlerimi kaydet"
  },
  en: {
    preferences: "Cookie preferences", aria: "Cookie notice", kicker: "PRIVACY PREFERENCES",
    title: "Your digital experience, under your control.",
    body: "Essential cookies keep the site working. Analytics or marketing storage is enabled only with your permission; without consent, measurement signals may be processed in a limited, cookieless form. GA4 and Clarity operate in both consent states with restricted measurement when consent is declined. Accepting enables analytics cookies and Google Tag Manager. Clarity masks text.",
    acceptAll: "Accept all", necessaryOnly: "Essential only", manage: "Manage preferences",
    description: "Choose which data categories you allow. You can change your preference later.",
    necessary: "Essential", necessaryDesc: "Security and core site functions", alwaysOn: "Always on",
    analytics: "Analytics", analyticsDesc: "Usage measurement, masked session recordings and heatmaps", analyticsAria: "Analytics cookies",
    marketing: "Marketing", marketingDesc: "Campaign and conversion measurement", marketingAria: "Marketing cookies", save: "Save my choices"
  },
  de: {
    preferences: "Cookie-Einstellungen", aria: "Cookie-Hinweis", kicker: "DATENSCHUTZ-EINSTELLUNGEN",
    title: "Ihre digitale Erfahrung bleibt unter Ihrer Kontrolle.",
    body: "Notwendige Cookies stellen die Funktion der Website sicher. Analyse- oder Marketing-Speicherung wird nur mit Ihrer Zustimmung aktiviert; ohne Einwilligung können Messsignale eingeschränkt und ohne Cookies verarbeitet werden. GA4 und Clarity arbeiten in beiden Zuständen mit eingeschränkter Messung bei Ablehnung. Mit Ihrer Zustimmung werden Analyse-Cookies und der Google Tag Manager aktiviert. Clarity maskiert Texte.",
    acceptAll: "Alle akzeptieren", necessaryOnly: "Nur notwendige", manage: "Einstellungen verwalten",
    description: "Wählen Sie aus, welchen Datenkategorien Sie zustimmen. Sie können Ihre Auswahl später ändern.",
    necessary: "Notwendig", necessaryDesc: "Sicherheit und grundlegende Website-Funktionen", alwaysOn: "Immer aktiv",
    analytics: "Analyse", analyticsDesc: "Nutzungsmessung, maskierte Sitzungsaufzeichnungen und Heatmaps", analyticsAria: "Analyse-Cookies",
    marketing: "Marketing", marketingDesc: "Kampagnen- und Conversion-Messung", marketingAria: "Marketing-Cookies", save: "Auswahl speichern"
  },
  fr: {
    preferences: "Préférences des cookies", aria: "Avis sur les cookies", kicker: "PRÉFÉRENCES DE CONFIDENTIALITÉ",
    title: "Votre expérience digitale reste sous votre contrôle.",
    body: "Les cookies essentiels assurent le fonctionnement du site. Le stockage analytique ou marketing n’est activé qu’avec votre autorisation ; sans consentement, certains signaux de mesure peuvent être traités de manière limitée et sans cookies. GA4 et Clarity fonctionnent dans les deux cas, avec une mesure restreinte en cas de refus. L’acceptation active les cookies analytiques et Google Tag Manager. Clarity masque les textes.",
    acceptAll: "Tout accepter", necessaryOnly: "Essentiels uniquement", manage: "Gérer les préférences",
    description: "Choisissez les catégories de données que vous autorisez. Vous pourrez modifier votre choix ultérieurement.",
    necessary: "Essentiels", necessaryDesc: "Sécurité et fonctions essentielles du site", alwaysOn: "Toujours actifs",
    analytics: "Analytique", analyticsDesc: "Mesure d’usage, enregistrements de sessions masqués et cartes de chaleur", analyticsAria: "Cookies analytiques",
    marketing: "Marketing", marketingDesc: "Mesure des campagnes et des conversions", marketingAria: "Cookies marketing", save: "Enregistrer mes choix"
  }
} as const;

type CookieLocale = keyof typeof cookieCopy;

export function CookieConsent() {
  const pathname = usePathname();
  const first = pathname.split("/").filter(Boolean)[0];
  const locale: CookieLocale = first === "en" || first === "de" || first === "fr" ? first : "tr";
  const copy = cookieCopy[locale];
  const [banner, setBanner] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("olivon-cookie-consent");
      if (!raw) {
        setBanner(true);
        return;
      }
      const stored = JSON.parse(raw) as Partial<Consent>;
      if (stored.analytics === true && localStorage.getItem("qct-recording-consent-v1") !== "granted") setBanner(true);
      setAnalytics(stored.analytics === true);
      setMarketing(stored.marketing === true);
    } catch {
      setBanner(true);
    }
  }, []);

  function save(mode: "all" | "necessary" | "selected") {
    const value: Consent =
      mode === "all"
        ? { analytics: true, marketing: true }
        : mode === "necessary"
          ? { analytics: false, marketing: false }
          : { analytics, marketing };

    try { localStorage.setItem("olivon-cookie-consent", JSON.stringify(value)); localStorage.setItem("qct-recording-consent-v1", value.analytics ? "granted" : "denied"); } catch {}
    setAnalytics(value.analytics);
    setMarketing(value.marketing);
    window.dispatchEvent(new CustomEvent("olivon-consent-change", { detail: { ...value, recording: value.analytics } }));
    setBanner(false);
    setPanel(false);
  }

  return (
    <>
      <button type="button" style={{ display: "block", margin: "12px auto", minHeight: 44, padding: "8px 16px", background: "transparent", color: "inherit", textDecoration: "underline", cursor: "pointer" }} onClick={() => setPanel(true)}>{copy.preferences}</button>
      {banner && (
        <aside className="cookie-banner" aria-label={copy.aria}>
          <div className="cookie-symbol"><Cookie /></div>
          <div>
            <p className="cookie-kicker">{copy.kicker}</p>
            <h2>{copy.title}</h2>
            <p>{copy.body}</p>
          </div>
          <div className="cookie-actions">
            <button onClick={() => save("all")}>{copy.acceptAll}</button>
            <button onClick={() => save("necessary")}>{copy.necessaryOnly}</button>
            <button onClick={() => setPanel(true)}>{copy.manage}</button>
          </div>
        </aside>
      )}

      <Dialog open={panel} onOpenChange={setPanel}>
        <DialogContent className="cookie-dialog" showCloseButton>
          <DialogHeader>
            <DialogTitle>{copy.preferences}</DialogTitle>
            <DialogDescription>{copy.description}</DialogDescription>
          </DialogHeader>
          <div className="cookie-options">
            <div><span><strong>{copy.necessary}</strong><small>{copy.necessaryDesc}</small></span><em>{copy.alwaysOn}</em></div>
            <div><span><strong>{copy.analytics}</strong><small>{copy.analyticsDesc}</small></span><Switch checked={analytics} onCheckedChange={setAnalytics} aria-label={copy.analyticsAria} /></div>
            <div><span><strong>{copy.marketing}</strong><small>{copy.marketingDesc}</small></span><Switch checked={marketing} onCheckedChange={setMarketing} aria-label={copy.marketingAria} /></div>
          </div>
          <div className="dialog-actions">
            <button onClick={() => save("selected")}>{copy.save}</button>
            <button onClick={() => save("all")}>{copy.acceptAll}</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
