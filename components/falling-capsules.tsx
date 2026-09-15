"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const capsules = [
  { label: "WORDPRESS", mark: "W", tone: "dark", x: "6%", y: "76%", delay: 160, rotate: -3, width: 142 },
  { label: "WEB TASARIM", mark: "UX", tone: "cream", x: "18%", y: "84%", delay: 360, rotate: 1, width: 156 },
  { label: "WOOCOMMERCE", mark: "WOO", tone: "coral", x: "31%", y: "73%", delay: 570, rotate: -2, width: 166 },
  { label: "SEO", mark: "S", tone: "dark", x: "44%", y: "85%", delay: 790, rotate: 2, width: 106 },
  { label: "SHOPIFY", logo: "/partners/shopify.svg", tone: "cream", x: "54%", y: "74%", delay: 1010, rotate: -2, width: 140 },
  { label: "İKAS", logo: "/partners/ikas.svg", tone: "dark", x: "66%", y: "84%", delay: 1230, rotate: 2, width: 108 },
  { label: "GOOGLE ADS", mark: "G", tone: "coral", x: "75%", y: "73%", delay: 1460, rotate: -2, width: 144 },
  { label: "META", mark: "∞", tone: "cream", x: "86%", y: "84%", delay: 1680, rotate: 2, width: 112 },
  { label: "CLOUDFLARE", mark: "CF", tone: "dark", x: "12%", y: "58%", delay: 1910, rotate: -2, width: 146 },
  { label: "E-TİCARET", mark: "ET", tone: "coral", x: "35%", y: "58%", delay: 2130, rotate: 2, width: 132 },
  { label: "AI", mark: "AI", tone: "cream", x: "61%", y: "57%", delay: 2350, rotate: -2, width: 98 },
  { label: "GÜVENLİK", mark: "SH", tone: "dark", x: "79%", y: "57%", delay: 2570, rotate: 2, width: 136 },
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
