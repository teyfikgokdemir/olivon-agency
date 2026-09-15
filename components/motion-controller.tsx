"use client";

import { useEffect } from "react";

const selectors = [
  [".site-header .brand", "drop", 20],
  [".site-header .nav-links > *", "drop", 70],
  [".site-header .nav-cta, .site-header .menu-button", "drop", 150],
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
    const root = document.documentElement;
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

    document.querySelectorAll<HTMLElement>("main > section.shell").forEach((section) => {
      section.classList.add("motion-section");
    });

    body.classList.add("motion-ready");

    const entranceNodes = Array.from(
      document.querySelectorAll<HTMLElement>(".site-header [data-motion], .hero [data-motion]"),
    );
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        entranceNodes.forEach((node) => node.classList.add("is-inview"));
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
      if (!node.closest(".hero") && !node.closest(".site-header")) observer.observe(node);
    });

    let ticking = false;
    const updateScrollMotion = () => {
      const y = Math.min(window.scrollY, 720);
      const parallax = Math.min(y * 0.035, 24);
      root.style.setProperty("--olivon-hero-parallax", `${parallax.toFixed(2)}px`);
      body.classList.toggle("motion-scrolled", window.scrollY > 24);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScrollMotion);
    };

    updateScrollMotion();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      root.style.removeProperty("--olivon-hero-parallax");
      body.classList.remove("motion-ready", "motion-hero-entered", "motion-scrolled");
    };
  }, []);

  return null;
}
