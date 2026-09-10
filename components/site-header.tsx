"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
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

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Ana menü">
        <a className="brand" href="/" aria-label="Olivon ana sayfa">
          <span className="brand-mark">O</span><span>OLIVON</span>
        </a>

        <div className="nav-links">
          <div className="nav-dropdown">
            <a className="nav-dropdown-trigger" href="/hizmetler">Hizmetler <ChevronDown size={14} /></a>
            <div className="nav-panel services-panel">
              {serviceGroups.map(service => (
                <a href={`/hizmetler#${service.slug}`} key={service.slug}>
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
          <a href="/#guvenlik">Güvenlik</a>
        </div>

        <a className="nav-cta" href="/iletisim">Projenizi konuşalım</a>

        <button className="menu-button" onClick={() => setOpen(value => !value)} aria-label={open ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Mobil menü">
          <button className="mobile-accordion-trigger" onClick={() => setServicesOpen(value => !value)} aria-expanded={servicesOpen}>
            Hizmetler <ChevronDown size={18} />
          </button>
          {servicesOpen && (
            <div className="mobile-submenu">
              {serviceGroups.map(service => <a onClick={close} href={`/hizmetler#${service.slug}`} key={service.slug}>{service.title}</a>)}
            </div>
          )}

          <button className="mobile-accordion-trigger" onClick={() => setIkasOpen(value => !value)} aria-expanded={ikasOpen}>
            ikas <ChevronDown size={18} />
          </button>
          {ikasOpen && <div className="mobile-submenu">{ikasMenuItems.map(item => <a onClick={close} href={`/ikas#${item.slug}`} key={item.slug}>{item.label}</a>)}</div>}

          <a onClick={close} href="/referanslar">Referanslar</a>
          <a onClick={close} href="/blog">Blog</a>
          <a onClick={close} href="/#guvenlik">Güvenlik</a>
          <a onClick={close} href="/iletisim">İletişim</a>
        </div>
      )}
    </header>
  );
}
