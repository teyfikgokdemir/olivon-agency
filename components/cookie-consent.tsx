"use client";

import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

type Consent = { analytics: boolean; marketing: boolean };

export function CookieConsent() {
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

    localStorage.setItem("olivon-cookie-consent", JSON.stringify(value));
    setAnalytics(value.analytics);
    setMarketing(value.marketing);
    window.dispatchEvent(new CustomEvent("olivon-consent-change", { detail: value }));
    setBanner(false);
    setPanel(false);
  }

  return (
    <>
      {banner && (
        <aside className="cookie-banner" aria-label="Çerez bildirimi">
          <div className="cookie-symbol"><Cookie /></div>
          <div>
            <p className="cookie-kicker">GİZLİLİK TERCİHLERİ</p>
            <h2>Dijital deneyiminiz, sizin kontrolünüzde.</h2>
            <p>Zorunlu çerezler sitenin çalışmasını sağlar. Analitik veya pazarlama depolaması yalnızca izninizle açılır; izin verilmediğinde ölçüm sinyalleri çerezsiz ve kısıtlı şekilde işlenebilir.</p>
          </div>
          <div className="cookie-actions">
            <button onClick={() => save("all")}>Tümünü kabul et</button>
            <button onClick={() => save("necessary")}>Yalnızca zorunlu</button>
            <button onClick={() => setPanel(true)}>Tercihleri yönet</button>
          </div>
        </aside>
      )}

      <Dialog open={panel} onOpenChange={setPanel}>
        <DialogContent className="cookie-dialog" showCloseButton>
          <DialogHeader>
            <DialogTitle>Çerez tercihleri</DialogTitle>
            <DialogDescription>Hangi veri kategorilerine izin vereceğinizi seçin. Tercihinizi daha sonra değiştirebilirsiniz.</DialogDescription>
          </DialogHeader>
          <div className="cookie-options">
            <div><span><strong>Zorunlu</strong><small>Güvenlik ve temel site işlevleri</small></span><em>Her zaman açık</em></div>
            <div><span><strong>Analitik</strong><small>Anonim kullanım ve performans ölçümü</small></span><Switch checked={analytics} onCheckedChange={setAnalytics} aria-label="Analitik çerezler" /></div>
            <div><span><strong>Pazarlama</strong><small>Kampanya ve dönüşüm ölçümü</small></span><Switch checked={marketing} onCheckedChange={setMarketing} aria-label="Pazarlama çerezleri" /></div>
          </div>
          <div className="dialog-actions">
            <button onClick={() => save("selected")}>Seçimlerimi kaydet</button>
            <button onClick={() => save("all")}>Tümünü kabul et</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
