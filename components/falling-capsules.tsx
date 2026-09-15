"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const capsules = [
  { label: "WORDPRESS", mark: "W", tone: "dark", x: "4%", bottom: 28, delay: 160, rotate: -2, width: 142 },
  { label: "WEB TASARIM", mark: "UX", tone: "cream", x: "20%", bottom: 28, delay: 360, rotate: 1, width: 156 },
  { label: "WOOCOMMERCE", mark: "WOO", tone: "coral", x: "36%", bottom: 28, delay: 570, rotate: -1, width: 166 },
  { label: "SEO", mark: "S", tone: "dark", x: "52%", bottom: 28, delay: 790, rotate: 1, width: 106 },
  { label: "SHOPIFY", logo: "/partners/shopify.svg", tone: "cream", x: "66%", bottom: 28, delay: 1010, rotate: -1, width: 140 },
  { label: "İKAS", logo: "/partners/ikas.svg", tone: "dark", x: "82%", bottom: 28, delay: 1230, rotate: 1, width: 108 },
  { label: "CLOUDFLARE", mark: "CF", tone: "dark", x: "8%", bottom: 84, delay: 1450, rotate: 1, width: 146 },
  { label: "E-TİCARET", mark: "ET", tone: "coral", x: "24%", bottom: 84, delay: 1670, rotate: -1, width: 132 },
  { label: "AI", mark: "AI", tone: "cream", x: "40%", bottom: 84, delay: 1890, rotate: 1, width: 98 },
  { label: "GÜVENLİK", mark: "SH", tone: "dark", x: "54%", bottom: 84, delay: 2110, rotate: -1, width: 136 },
  { label: "GOOGLE ADS", mark: "G", tone: "coral", x: "70%", bottom: 84, delay: 2330, rotate: 1, width: 144 },
  { label: "META", mark: "∞", tone: "cream", x: "86%", bottom: 84, delay: 2550, rotate: -1, width: 112 },
] as const;

export function FallingCapsules() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    const host = document.createElement("section");
    host.className = "falling-showcase shell falling-showcase--grounded";
    host.setAttribute("aria-label", "Olivon hareketli uzmanlık vitrini");
    hero.insertAdjacentElement("afterend", host);
    setTarget(host);

    return () => {
      setTarget(null);
      host.remove();
    };
  }, []);

  if (!target) return null;

  return createPortal(
    <div className="falling-showcase-frame falling-showcase-stage">
      <div className="falling-stage-meta" aria-hidden="true">
        <span>OLIVON / CAPABILITIES</span>
        <span>STRATEJİ · TASARIM · TEKNOLOJİ</span>
      </div>
      <div className="falling-stage-glow" aria-hidden="true" />
      <div className="falling-stage-floor" aria-hidden="true"><i /><i /><i /></div>
      <div className="falling-capsules" aria-hidden="true">
        {capsules.map((capsule, index) => (
          <span
            className={`falling-capsule falling-capsule--${capsule.tone}`}
            key={`${capsule.label}-${index}`}
            style={{
              left: capsule.x,
              bottom: `${capsule.bottom}px`,
              width: `${capsule.width}px`,
              ["--capsule-delay" as string]: `${capsule.delay}ms`,
              ["--capsule-rotate" as string]: `${capsule.rotate}deg`,
            }}
          >
            {"logo" in capsule ? (
              <img className="falling-capsule-logo" src={capsule.logo} alt="" />
            ) : (
              <span className="falling-capsule-mark">{capsule.mark}</span>
            )}
            <span className="falling-capsule-label">{capsule.label}</span>
          </span>
        ))}
      </div>
    </div>,
    target,
  );
}
