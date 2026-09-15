"use client";

import { useEffect } from "react";

export function FeaturedCasesController() {
  useEffect(() => {
    const grid = document.querySelector<HTMLElement>(".featured-reference-grid");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".featured-reference-card"));
    if (cards.length < 2) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let active = 0;
    let timer: number | undefined;

    grid.classList.add("featured-cases-flow");
    cards.forEach((card, index) => {
      card.dataset.caseIndex = String(index);
      card.classList.toggle("is-case-active", index === 0);
      card.setAttribute("aria-hidden", index === 0 ? "false" : "true");
    });

    const show = (next: number) => {
      const current = active;
      if (next === current) return;
      const currentCard = cards[current];
      const nextCard = cards[next];
      currentCard.classList.remove("is-case-active");
      currentCard.classList.add("is-case-leaving");
      currentCard.setAttribute("aria-hidden", "true");
      nextCard.classList.remove("is-case-leaving");
      nextCard.classList.add("is-case-active");
      nextCard.setAttribute("aria-hidden", "false");
      active = next;
      window.setTimeout(() => currentCard.classList.remove("is-case-leaving"), 900);
    };

    const start = () => {
      if (reduceMotion || timer) return;
      timer = window.setInterval(() => show((active + 1) % cards.length), 4800);
    };

    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = undefined;
    };

    grid.addEventListener("mouseenter", stop);
    grid.addEventListener("mouseleave", start);
    grid.addEventListener("focusin", stop);
    grid.addEventListener("focusout", start);
    start();

    return () => {
      stop();
      grid.removeEventListener("mouseenter", stop);
      grid.removeEventListener("mouseleave", start);
      grid.removeEventListener("focusin", stop);
      grid.removeEventListener("focusout", start);
      grid.classList.remove("featured-cases-flow");
      cards.forEach((card) => {
        card.classList.remove("is-case-active", "is-case-leaving");
        card.removeAttribute("aria-hidden");
        delete card.dataset.caseIndex;
      });
    };
  }, []);

  return null;
}
