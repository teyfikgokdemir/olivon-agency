"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      setVisible(window.scrollY > 260);
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setVisible(false), 1100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`floating-actions ${visible ? "is-visible" : ""}`}>
      <a className="whatsapp-float" href="https://wa.me/905013484838" target="_blank" rel="noreferrer" aria-label="WhatsApp ile iletişime geç">
        <MessageCircle />
      </a>
      <button className="scroll-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Sayfanın başına dön">
        <ArrowUp />
      </button>
    </div>
  );
}
