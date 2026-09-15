"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { marketContent, locales, type Locale } from "@/lib/i18n";
import { ikasMenuItems, serviceGroups } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale = locales.includes(firstSegment as Locale) ? (firstSegment as Locale) : null;
  const localized = locale ? marketContent[locale] : null;
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
    const root = document.documentElement;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;
    root.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && close();
    const onResize = () => window.innerWidth > 900 && close();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      root.style.overflow = previousRootOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const home = locale ? `/${locale}` : "/";
  const servicesHref = locale ? `/${locale}#services` : "/hizmetler";
  const workHref = locale ? `/${locale}#services` : "/referanslar";
  const blogHref = locale ? `/${locale}#approach` : "/blog";
  const securityHref = locale ? `/${locale}#services` : "/hizmetler/dijital-guvenlik";
  const contactHref = locale ? `/${locale}#contact` : "/iletisim";
  const labels = localized?.nav ?? { services: "Hizmetler", references: "Referanslar", blog: "Blog", security: "Güvenlik", contact: "Projenizi konuşalım" };

  return (
    <header className="site-header" style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}>
      <nav className="nav shell" aria-label={locale ? "Main navigation" : "Ana menü"}>
        <a className="brand" href={home} aria-label="Olivon" onClick={close}>
          <span className="brand-mark">O</span><span>OLIVON</span>
        </a>

        <div className="nav-links">
          {locale ? (
            <a href={servicesHref}>{labels.services}</a>
          ) : (
            <div className="nav-dropdown">
              <a className="nav-dropdown-trigger" href="/hizmetler">Hizmetler <ChevronDown size={14} /></a>
              <div className="nav-panel services-panel" style={{ top: "100%" }}>
                {serviceGroups.map(service => <a href={service.href} key={service.slug}><strong>{service.title}</strong><span>{service.intro}</span></a>)}
              </div>
            </div>
          )}

          {!locale && (
            <div className="nav-dropdown">
              <a className="nav-dropdown-trigger" href="/ikas">ikas <ChevronDown size={14} /></a>
              <div className="nav-panel ikas-panel" style={{ top: "100%" }}>
                {ikasMenuItems.map(item => <a href={`/ikas#${item.slug}`} key={item.slug}>{item.label}</a>)}
              </div>
            </div>
          )}

          <a href={workHref}>{labels.references}</a>
          <a href={blogHref}>{labels.blog}</a>
          <a href={securityHref}>{labels.security}</a>
        </div>

        <div className="nav-right">
          <LanguageSwitcher />
          <a className="nav-cta" href={contactHref}>{labels.contact}</a>
        </div>

        <button className="menu-button" type="button" onClick={() => setOpen(value => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="olivon-mobile-menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div id="olivon-mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile menu">
          {locale ? (
            <a onClick={close} href={servicesHref}>{labels.services}</a>
          ) : (
            <>
              <button className="mobile-accordion-trigger" type="button" onClick={() => setServicesOpen(value => !value)} aria-expanded={servicesOpen} aria-controls="olivon-mobile-services">
                Hizmetler <ChevronDown className={servicesOpen ? "is-open" : ""} size={18} />
              </button>
              {servicesOpen && <div id="olivon-mobile-services" className="mobile-submenu">{serviceGroups.map(service => <a onClick={close} href={service.href} key={service.slug}>{service.title}</a>)}</div>}
              <button className="mobile-accordion-trigger" type="button" onClick={() => setIkasOpen(value => !value)} aria-expanded={ikasOpen} aria-controls="olivon-mobile-ikas">
                ikas <ChevronDown className={ikasOpen ? "is-open" : ""} size={18} />
              </button>
              {ikasOpen && <div id="olivon-mobile-ikas" className="mobile-submenu">{ikasMenuItems.map(item => <a onClick={close} href={`/ikas#${item.slug}`} key={item.slug}>{item.label}</a>)}</div>}
            </>
          )}
          <a onClick={close} href={workHref}>{labels.references}</a>
          <a onClick={close} href={blogHref}>{labels.blog}</a>
          <a onClick={close} href={securityHref}>{labels.security}</a>
          <a onClick={close} href={contactHref}>{labels.contact}</a>
          <LanguageSwitcher />
        </div>
      )}
    </header>
  );
}
