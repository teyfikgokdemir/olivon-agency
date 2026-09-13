"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ikasMenuItems, serviceGroups } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [ikasOpen, setIkasOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
    setIkasOpen(false);
  };

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const onResize = () => {
      if (window.innerWidth > 900) close();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Ana menü">
        <a className="brand" href="/" aria-label="Olivon ana sayfa" onClick={close}>
          <span className="brand-mark">O</span><span>OLIVON</span>
        </a>

        <div className="nav-links">
          <div className="nav-dropdown">
            <a className="nav-dropdown-trigger" href="/hizmetler">Hizmetler <ChevronDown size={14} /></a>
            <div className="nav-panel services-panel">
              {serviceGroups.map(service => (
                <a href={service.href} key={service.slug}>
                  <strong>{service.title}</strong><span>{service.intro}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <a className="nav-dropdown-trigger" href="/ikas">ikas <ChevronDown size={14} /></a>
            <div className="nav-panel ikas-panel">
              {ikasMenuItems.map(item => <a href={`/ikas#${item.slug}`} key={item.slug}>{item.label}</a>)}
            </div>
          </div>

          <a href="/referanslar">Referanslar</a>
          <a href="/blog">Blog</a>
          <a href="/hizmetler/dijital-guvenlik">Güvenlik</a>
        </div>

        <a className="nav-cta" href="/iletisim">Projenizi konuşalım</a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen(value => !value)}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          aria-controls="olivon-mobile-menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div id="olivon-mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobil menü">
          <button
            className="mobile-accordion-trigger"
            type="button"
            onClick={() => setServicesOpen(value => !value)}
            aria-expanded={servicesOpen}
            aria-controls="olivon-mobile-services"
          >
            Hizmetler <ChevronDown className={servicesOpen ? "is-open" : ""} size={18} />
          </button>
          {servicesOpen && (
            <div id="olivon-mobile-services" className="mobile-submenu">
              {serviceGroups.map(service => <a onClick={close} href={service.href} key={service.slug}>{service.title}</a>)}
            </div>
          )}

          <button
            className="mobile-accordion-trigger"
            type="button"
            onClick={() => setIkasOpen(value => !value)}
            aria-expanded={ikasOpen}
            aria-controls="olivon-mobile-ikas"
          >
            ikas <ChevronDown className={ikasOpen ? "is-open" : ""} size={18} />
          </button>
          {ikasOpen && <div id="olivon-mobile-ikas" className="mobile-submenu">{ikasMenuItems.map(item => <a onClick={close} href={`/ikas#${item.slug}`} key={item.slug}>{item.label}</a>)}</div>}

          <a onClick={close} href="/referanslar">Referanslar</a>
          <a onClick={close} href="/blog">Blog</a>
          <a onClick={close} href="/hizmetler/dijital-guvenlik">Güvenlik</a>
          <a onClick={close} href="/iletisim">İletişim</a>
        </div>
      )}
    </header>
  );
}
