"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const capsules = [
  { label: "WORKFLOW", tone: "coral", x: "7%", y: "72%", delay: 180, rotate: -7, width: 156 },
  { label: "WEB TASARIM", tone: "cream", x: "21%", y: "80%", delay: 430, rotate: 1, width: 172 },
  { label: "E-TİCARET", tone: "dark", x: "36%", y: "68%", delay: 710, rotate: -2, width: 158 },
  { label: "SEO", tone: "coral", x: "48%", y: "81%", delay: 990, rotate: 3, width: 116 },
  { label: "SHOPIFY", tone: "cream", x: "60%", y: "70%", delay: 1270, rotate: -2, width: 142 },
  { label: "İKAS", tone: "dark", x: "73%", y: "80%", delay: 1550, rotate: 2, width: 110 },
  { label: "GEO", tone: "coral", x: "84%", y: "69%", delay: 1830, rotate: -5, width: 112 },
  { label: "AI", tone: "cream", x: "22%", y: "52%", delay: 2110, rotate: 5, width: 102 },
  { label: "GÜVENLİK", tone: "dark", x: "67%", y: "51%", delay: 2390, rotate: -4, width: 150 },
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
