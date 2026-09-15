"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/language-switcher";
import { marketContent, locales, type Locale } from "@/lib/i18n";
import { intlPages, localizedPath, type IntlPageKey } from "@/lib/intl-pages";
import { ikasMenuItems, serviceGroups } from "@/lib/site-data";

const localServiceKeys: IntlPageKey[] = ["ecommerce", "search", "web", "security"];

export function SiteHeader() {
  const pathname = usePathname();
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const locale = locales.includes(firstSegment as Locale) ? (firstSegment as Locale) : null;
  const localized = locale ? marketContent[locale] : null;
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [ikasOpen, setIkasOpen] = useState(false);

  const close = () => { setOpen(false); setServicesOpen(false); setIkasOpen(false); };

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
  const servicesHref = locale ? localizedPath(locale, "services") : "/hizmetler";
  const workHref = locale ? localizedPath(locale, "work") : "/referanslar";
  const faqHref = locale ? localizedPath(locale, "faq") : "/sss";
  const securityHref = locale ? localizedPath(locale, "security") : "/hizmetler/dijital-guvenlik";
  const contactHref = locale ? localizedPath(locale, "contact") : "/iletisim";
  const labels = localized?.nav ?? { services: "Hizmetler", references: "Referanslar", blog: "Blog", security: "Güvenlik", contact: "Projenizi konuşalım" };
  const faqLabel = locale === "de" ? "FAQ" : locale === "fr" ? "FAQ" : locale === "en" ? "FAQ" : "SSS";

  return (
    <header className="site-header" style={{ backdropFilter: "none", WebkitBackdropFilter: "none" }}>
      <nav className="nav shell" aria-label={locale ? "Main navigation" : "Ana menü"}>
        <a className="brand" href={home} aria-label="Olivon" onClick={close}><span className="brand-mark">O</span><span>OLIVON</span></a>
        <div className="nav-links">
          {locale ? (
            <div className="nav-dropdown">
              <a className="nav-dropdown-trigger" href={servicesHref}>{labels.services} <ChevronDown size={14}/></a>
              <div className="nav-panel services-panel" style={{ top: "100%" }}>
                {localServiceKeys.map(key => <a href={localizedPath(locale,key)} key={key}><strong>{intlPages[locale][key].title}</strong><span>{intlPages[locale][key].metaDescription}</span></a>)}
              </div>
            </div>
          ) : (
            <div className="nav-dropdown">
              <a className="nav-dropdown-trigger" href="/hizmetler">Hizmetler <ChevronDown size={14}/></a>
              <div className="nav-panel services-panel" style={{ top: "100%" }}>{serviceGroups.map(service => <a href={service.href} key={service.slug}><strong>{service.title}</strong><span>{service.intro}</span></a>)}</div>
            </div>
          )}
          {!locale && <div className="nav-dropdown"><a className="nav-dropdown-trigger" href="/ikas">ikas <ChevronDown size={14}/></a><div className="nav-panel ikas-panel" style={{ top: "100%" }}>{ikasMenuItems.map(item => <a href={`/ikas#${item.slug}`} key={item.slug}>{item.label}</a>)}</div></div>}
          <a href={workHref}>{labels.references}</a>
          <a href={faqHref}>{faqLabel}</a>
          <a href={securityHref}>{labels.security}</a>
        </div>
        <div className="nav-right"><LanguageSwitcher/><a className="nav-cta" href={contactHref}>{labels.contact}</a></div>
        <button className="menu-button" type="button" onClick={() => setOpen(value => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="olivon-mobile-menu">{open ? <X/> : <Menu/>}</button>
      </nav>

      {open && <div id="olivon-mobile-menu" className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile menu">
        <button className="mobile-accordion-trigger" type="button" onClick={() => setServicesOpen(value => !value)} aria-expanded={servicesOpen} aria-controls="olivon-mobile-services">{labels.services} <ChevronDown className={servicesOpen ? "is-open" : ""} size={18}/></button>
        {servicesOpen && <div id="olivon-mobile-services" className="mobile-submenu">{locale ? localServiceKeys.map(key => <a onClick={close} href={localizedPath(locale,key)} key={key}>{intlPages[locale][key].title}</a>) : serviceGroups.map(service => <a onClick={close} href={service.href} key={service.slug}>{service.title}</a>)}</div>}
        {!locale && <><button className="mobile-accordion-trigger" type="button" onClick={() => setIkasOpen(value => !value)} aria-expanded={ikasOpen} aria-controls="olivon-mobile-ikas">ikas <ChevronDown className={ikasOpen ? "is-open" : ""} size={18}/></button>{ikasOpen && <div id="olivon-mobile-ikas" className="mobile-submenu">{ikasMenuItems.map(item => <a onClick={close} href={`/ikas#${item.slug}`} key={item.slug}>{item.label}</a>)}</div>}</>}
        <a onClick={close} href={workHref}>{labels.references}</a><a onClick={close} href={faqHref}>{faqLabel}</a><a onClick={close} href={securityHref}>{labels.security}</a><a onClick={close} href={contactHref}>{labels.contact}</a><LanguageSwitcher/>
      </div>}
    </header>
  );
}
