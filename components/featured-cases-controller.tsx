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

    const controls = document.createElement("div");
    controls.className = "featured-cases-controls";

    const prevButton = document.createElement("button");
    prevButton.type = "button";
    prevButton.className = "featured-cases-control featured-cases-control--prev";
    prevButton.setAttribute("aria-label", "Önceki vaka çalışması");
    prevButton.innerHTML = "&#8592;";

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "featured-cases-control featured-cases-control--next";
    nextButton.setAttribute("aria-label", "Sonraki vaka çalışması");
    nextButton.innerHTML = "&#8594;";

    controls.append(prevButton, nextButton);
    grid.appendChild(controls);

    const updatePosition = () => {
      grid.dataset.casePosition = `${String(active + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
    };

    grid.classList.add("featured-cases-flow");
    cards.forEach((card, index) => {
      card.dataset.caseIndex = String(index);
      card.classList.toggle("is-case-active", index === 0);
      card.setAttribute("aria-hidden", index === 0 ? "false" : "true");
    });
    updatePosition();

    const show = (next: number, direction: "next" | "prev" = "next") => {
      const normalized = (next + cards.length) % cards.length;
      const current = active;
      if (normalized === current) return;

      grid.dataset.caseDirection = direction;
      const currentCard = cards[current];
      const nextCard = cards[normalized];
      currentCard.classList.remove("is-case-active");
      currentCard.classList.add("is-case-leaving");
      currentCard.setAttribute("aria-hidden", "true");
      nextCard.classList.remove("is-case-leaving");
      nextCard.classList.add("is-case-active");
      nextCard.setAttribute("aria-hidden", "false");
      active = normalized;
      updatePosition();
      window.setTimeout(() => currentCard.classList.remove("is-case-leaving"), 1150);
    };

    const start = () => {
      if (reduceMotion || timer) return;
      timer = window.setInterval(() => show(active + 1, "next"), 6500);
    };

    const stop = () => {
      if (!timer) return;
      window.clearInterval(timer);
      timer = undefined;
    };

    const manualShow = (next: number, direction: "next" | "prev") => {
      stop();
      show(next, direction);
      start();
    };

    const handlePrev = () => manualShow(active - 1, "prev");
    const handleNext = () => manualShow(active + 1, "next");

    prevButton.addEventListener("click", handlePrev);
    nextButton.addEventListener("click", handleNext);
    grid.addEventListener("mouseenter", stop);
    grid.addEventListener("mouseleave", start);
    grid.addEventListener("focusin", stop);
    grid.addEventListener("focusout", start);
    start();

    return () => {
      stop();
      prevButton.removeEventListener("click", handlePrev);
      nextButton.removeEventListener("click", handleNext);
      grid.removeEventListener("mouseenter", stop);
      grid.removeEventListener("mouseleave", start);
      grid.removeEventListener("focusin", stop);
      grid.removeEventListener("focusout", start);
      controls.remove();
      grid.classList.remove("featured-cases-flow");
      delete grid.dataset.casePosition;
      delete grid.dataset.caseDirection;
      cards.forEach((card) => {
        card.classList.remove("is-case-active", "is-case-leaving");
        card.removeAttribute("aria-hidden");
        delete card.dataset.caseIndex;
      });
    };
  }, []);

  return null;
}
