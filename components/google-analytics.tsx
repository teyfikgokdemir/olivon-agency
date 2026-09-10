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

type ConsentState = {
  analytics?: boolean;
  marketing?: boolean;
};

function getConsent(): ConsentState {
  try {
    const raw = localStorage.getItem("olivon-cookie-consent");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
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
  window.gtag?.("config", GA_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });
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
      const detail = (event as CustomEvent<ConsentState>).detail || getConsent();
      applyConsent(detail);
    };

    window.addEventListener("olivon-consent-change", onConsentChange);
    return () => window.removeEventListener("olivon-consent-change", onConsentChange);
  }, []);

  useEffect(() => {
    const consent = getConsent();
    if (!consent.analytics) return;

    const timer = window.setTimeout(() => {
      window.gtag?.("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: pathname + window.location.search,
      });
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}
