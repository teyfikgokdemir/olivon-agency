"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const capsules = [
  { label: "WORKFLOW", tone: "coral", x: "4%", y: "76%", delay: 160, rotate: -2, width: 142 },
  { label: "WEB TASARIM", tone: "cream", x: "18%", y: "79%", delay: 410, rotate: 0, width: 158 },
  { label: "E-TİCARET", tone: "dark", x: "34%", y: "76%", delay: 690, rotate: -1, width: 146 },
  { label: "SEO", tone: "coral", x: "49%", y: "80%", delay: 980, rotate: 1, width: 106 },
  { label: "SHOPIFY", tone: "cream", x: "61%", y: "75%", delay: 1260, rotate: -1, width: 132 },
  { label: "İKAS", tone: "dark", x: "74%", y: "80%", delay: 1540, rotate: 1, width: 104 },
  { label: "GEO", tone: "coral", x: "84%", y: "75%", delay: 1810, rotate: -2, width: 106 },
  { label: "AI", tone: "cream", x: "27%", y: "57%", delay: 2090, rotate: 0, width: 92 },
  { label: "GÜVENLİK", tone: "dark", x: "66%", y: "56%", delay: 2360, rotate: -1, width: 138 },
  { label: "STRATEJİ", tone: "coral", x: "2.5%", y: "48%", delay: 2600, rotate: -88, width: 126 },
] as const;

export function FallingCapsules() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!hero) return;

    const host = document.createElement("section");
    host.className = "falling-showcase shell";
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
    <div className="falling-showcase-frame">
      <img
        className="falling-showcase-image"
        src="/images/hero/olivon-hero-main.webp"
        alt=""
        width="1672"
        height="941"
        loading="lazy"
        decoding="async"
      />
      <div className="falling-showcase-shade" />
      <div className="falling-capsules" aria-hidden="true">
        {capsules.map((capsule, index) => (
          <span
            className={`falling-capsule falling-capsule--${capsule.tone}`}
            key={`${capsule.label}-${index}`}
            style={{
              left: capsule.x,
              top: capsule.y,
              width: `${capsule.width}px`,
              ["--capsule-delay" as string]: `${capsule.delay}ms`,
              ["--capsule-rotate" as string]: `${capsule.rotate}deg`,
            }}
          >
            {capsule.label}
          </span>
        ))}
      </div>
    </div>,
    target,
  );
}
