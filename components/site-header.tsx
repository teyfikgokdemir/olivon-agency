"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { ikasMenuItems, serviceGroups } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [ikasOpen, setIkasOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Ana menü">
        <Link className="brand" href="/" aria-label="Olivon ana sayfa"><span className="brand-mark">O</span><span>OLIVON</span></Link>
        <div className="nav-links">
          <div className="nav-dropdown">
            <Link href="/hizmetler">Hizmetler <ChevronDown size={14} /></Link>
            <div className="nav-panel services-panel">
              {serviceGroups.map(service => <Link href={`/hizmetler#${service.slug}`} key={service.slug}><strong>{service.title}</strong><span>{service.intro}</span></Link>)}
            </div>
          </div>
          <div className="nav-dropdown">
            <Link href="/#ikas">ikas <ChevronDown size={14} /></Link>
            <div className="nav-panel ikas-panel">
              {ikasMenuItems.map(item => <Link href="/#ikas" key={item}>{item}</Link>)}
            </div>
          </div>
          <Link href="/referanslar">Referanslar</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#guvenlik">Güvenlik</Link>
        </div>
        <Link className="nav-cta" href="/#iletisim">Projenizi konuşalım</Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Menüyü aç" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="mobile-menu">
          <button onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>Hizmetler <ChevronDown size={18} /></button>
          {servicesOpen && <div className="mobile-submenu">{serviceGroups.map(service => <Link onClick={close} href={`/hizmetler#${service.slug}`} key={service.slug}>{service.title}</Link>)}</div>}
          <button onClick={() => setIkasOpen(!ikasOpen)} aria-expanded={ikasOpen}>ikas <ChevronDown size={18} /></button>
          {ikasOpen && <div className="mobile-submenu">{ikasMenuItems.map(item => <Link onClick={close} href="/#ikas" key={item}>{item}</Link>)}</div>}
          <Link onClick={close} href="/referanslar">Referanslar</Link>
          <Link onClick={close} href="/blog">Blog</Link>
          <Link onClick={close} href="/#guvenlik">Güvenlik</Link>
          <Link onClick={close} href="/#iletisim">İletişim</Link>
        </div>
      )}
    </header>
  );
}
