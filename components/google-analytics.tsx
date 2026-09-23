"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = "G-VJ2PP2LG1N";
type ConsentState = { analytics?: boolean; marketing?: boolean };

function getConsent(): ConsentState {
  try {
    const raw = localStorage.getItem("olivon-cookie-consent");
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) { window.dataLayer.push(args); };
}

function applyConsent(consent: ConsentState) {
  ensureGtag();
  window.gtag?.("consent", "update", {
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
  });
}

function loadGa() {
  ensureGtag();
  if (!document.getElementById("olivon-ga4")) {
    const script = document.createElement("script");
    script.id = "olivon-ga4";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }
  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_ID, { send_page_view: false, anonymize_ip: true });
}

function track(name: string, params: Record<string, unknown> = {}) {
  ensureGtag();
  window.gtag?.("event", name, params);
}

function isContactPath(href: string) {
  return /^\/iletisim(?:[?#]|$)/.test(href) || /^\/(?:en\/contact|de\/kontakt|fr\/contact)(?:[?#]|$)/.test(href);
}

function isCaseStudyPath(href: string) {
  return /^\/referanslar\//.test(href) || /^\/(?:en\/work|de\/referenzen|fr\/realisations)\//.test(href);
}

function isServicePath(href: string) {
  return /^\/hizmetler(?:\/|[?#]|$)/.test(href) || /^\/(?:en|de|fr)\/(?:services|leistungen|expertises|cross-border-ecommerce|e-commerce-migration|e-commerce-international|seo-geo-aeo-aio|web-design|webdesign|digital-security|sicherheit|securite-digitale)(?:\/|[?#]|$)/.test(href);
}

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    ensureGtag();
    window.gtag?.("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      wait_for_update: 500,
    });
    loadGa();
    applyConsent(getConsent());

    const onConsentChange = (event: Event) => {
      const consent = (event as CustomEvent<ConsentState>).detail || getConsent();
      applyConsent(consent);
      window.setTimeout(() => track("consent_update", {
        analytics_storage: consent.analytics ? "granted" : "denied",
        ad_storage: consent.marketing ? "granted" : "denied",
        page_path: window.location.pathname + window.location.search,
      }), 0);
    };

    const onCustomEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ name: string; params?: Record<string, unknown> }>).detail;
      if (detail?.name) track(detail.name, detail.params || {});
    };

    const onClick = (event: MouseEvent) => {
      const el = (event.target as HTMLElement | null)?.closest("a,button") as HTMLAnchorElement | HTMLButtonElement | null;
      if (!el) return;

      const label = (el.textContent || el.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").slice(0, 120);
      if (el instanceof HTMLAnchorElement) {
        const href = el.getAttribute("href") || "";
        const common = { link_url: href, link_text: label, page_path: location.pathname };
        if (/wa\.me|whatsapp/i.test(href)) track("whatsapp_click", common);
        else if (href.startsWith("mailto:")) track("email_click", common);
        else if (href.startsWith("tel:")) track("phone_click", common);
        else if (isContactPath(href) || el.classList.contains("nav-cta")) track("contact_cta_click", common);
        else if (isCaseStudyPath(href)) track("case_study_click", common);
        else if (isServicePath(href)) track("service_detail_click", common);
        else if (/^https?:\/\//.test(href) && !href.includes("olivon.com.tr")) track("outbound_click", common);
      }
    };

    window.addEventListener("olivon-consent-change", onConsentChange);
    window.addEventListener("olivon-analytics-event", onCustomEvent);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("olivon-consent-change", onConsentChange);
      window.removeEventListener("olivon-analytics-event", onCustomEvent);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => track("page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pathname + window.location.search,
    }), 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
