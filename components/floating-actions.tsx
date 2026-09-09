"use client";

import { ArrowUp } from "lucide-react";
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
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 4.2c-6.45 0-11.7 5.1-11.7 11.4 0 2.16.63 4.25 1.8 6.06L4 28l6.6-2.08a12.05 12.05 0 0 0 5.44 1.31c6.45 0 11.7-5.1 11.7-11.4 0-6.32-5.25-11.63-11.7-11.63Zm0 20.95c-1.73 0-3.41-.47-4.88-1.36l-.35-.21-3.9 1.23 1.27-3.66-.24-.38a9.18 9.18 0 0 1-1.52-5.17c0-5.16 4.31-9.33 9.62-9.33 5.3 0 9.62 4.17 9.62 9.33 0 5.15-4.31 9.55-9.62 9.55Zm5.28-6.98c-.29-.14-1.72-.83-1.99-.93-.27-.1-.46-.14-.66.14-.19.28-.76.93-.93 1.12-.17.18-.34.21-.63.07-.29-.14-1.22-.44-2.33-1.4-.86-.75-1.44-1.68-1.61-1.96-.17-.28-.02-.43.13-.57.13-.13.29-.34.43-.51.14-.17.19-.28.29-.47.1-.18.05-.35-.02-.49-.07-.14-.66-1.54-.9-2.1-.24-.56-.48-.47-.66-.48h-.56c-.19 0-.5.07-.76.35-.26.28-1 1-1 2.43s1.03 2.8 1.17 2.99c.14.19 2.03 3.01 4.92 4.22.69.29 1.23.46 1.65.59.69.21 1.32.18 1.82.11.55-.08 1.72-.68 1.96-1.34.24-.65.24-1.21.17-1.33-.07-.12-.26-.19-.55-.33Z" />
        </svg>
      </a>
      <button className="scroll-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Sayfanın başına dön">
        <ArrowUp />
      </button>
    </div>
  );
}
