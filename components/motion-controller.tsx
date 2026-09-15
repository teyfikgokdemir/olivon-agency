"use client";

import { useEffect } from "react";

const selectors = [
  [".hero-copy .eyebrow", "reveal", 40],
  [".hero-copy h1", "reveal", 100],
  [".hero-copy .lead", "reveal", 180],
  [".hero-actions .button", "drop", 260],
  [".hero-stage", "scale", 120],
  [".hero-foot span", "reveal", 360],
  [".section-index", "reveal", 0],
  [".section-head h2, .manifesto h2, .value-programs-intro h2, .visibility-system-head h2", "reveal", 60],
  [".section-head > p, .manifesto > p:last-child, .value-programs-intro > p:last-child, .visibility-system-head > p", "reveal", 120],
  [".home-proof article", "reveal", 0],
  [".service-row", "reveal", 0],
  [".value-program", "reveal", 0],
  [".ikas-grid article", "reveal", 0],
  [".visibility-pillar", "reveal", 0],
  [".section-inline-cta", "reveal", 80],
] as const;

export function MotionController() {
  useEffect(() => {
    const body = document.body;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const registered = new Set<HTMLElement>();

    for (const [selector, motion, baseDelay] of selectors) {
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
      nodes.forEach((node, index) => {
        if (registered.has(node)) return;
        registered.add(node);
        node.dataset.motion = motion;
        const stagger = Math.min(index * 55, 330);
        node.style.setProperty("--motion-delay", `${baseDelay + stagger}ms`);
      });
    }

    body.classList.add("motion-ready");

    const heroNodes = Array.from(document.querySelectorAll<HTMLElement>(".hero [data-motion]"));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroNodes.forEach((node) => node.classList.add("is-inview"));
        body.classList.add("motion-hero-entered");
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-inview");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" },
    );

    registered.forEach((node) => {
      if (!node.closest(".hero")) observer.observe(node);
    });

    return () => {
      observer.disconnect();
      body.classList.remove("motion-ready", "motion-hero-entered");
    };
  }, []);

  return null;
}
