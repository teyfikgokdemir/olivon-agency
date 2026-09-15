"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const capsules = [
  { label: "E-TİCARET", tone: "coral", x: "6%", delay: 120, rotate: -3, width: 152 },
  { label: "WEB TASARIM", tone: "cream", x: "24%", delay: 260, rotate: 4, width: 168 },
  { label: "SEO", tone: "dark", x: "44%", delay: 420, rotate: -2, width: 116 },
  { label: "SHOPIFY", tone: "cream", x: "61%", delay: 560, rotate: 7, width: 142 },
  { label: "İKAS", tone: "coral", x: "78%", delay: 710, rotate: -5, width: 110 },
  { label: "GEO", tone: "dark", x: "14%", delay: 860, rotate: 3, width: 112 },
  { label: "AI", tone: "cream", x: "36%", delay: 1010, rotate: -7, width: 104 },
  { label: "GÜVENLİK", tone: "coral", x: "55%", delay: 1160, rotate: 2, width: 150 },
  { label: "E-TİCARET", tone: "dark", x: "72%", delay: 1310, rotate: 5, width: 154 },
] as const;

export function FallingCapsules() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".hero-stage-photo");
    if (!hero) return;
    hero.classList.add("has-falling-capsules");
    setTarget(hero);
    return () => hero.classList.remove("has-falling-capsules");
  }, []);

  if (!target) return null;

  return createPortal(
    <div className="falling-capsules" aria-hidden="true">
      {capsules.map((capsule, index) => (
        <span
          className={`falling-capsule falling-capsule--${capsule.tone}`}
          key={`${capsule.label}-${index}`}
          style={{
            left: capsule.x,
            width: `${capsule.width}px`,
            ["--capsule-delay" as string]: `${capsule.delay}ms`,
            ["--capsule-rotate" as string]: `${capsule.rotate}deg`,
            ["--capsule-index" as string]: index,
          }}
        >
          {capsule.label}
        </span>
      ))}
    </div>,
    target,
  );
}
