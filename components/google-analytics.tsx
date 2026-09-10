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

function hasAnalyticsConsent() {
  try {
    const raw = localStorage.getItem("olivon-cookie-consent");
    if (!raw) return false;
    const consent = JSON.parse(raw);
    return consent?.analytics === true;
  } catch {
    return false;
  }
}

function loadGa() {
  if (!GA_ID || document.getElementById("olivon-ga4")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    send_page_view: false,
    anonymize_ip: true,
  });

  const script = document.createElement("script");
  script.id = "olivon-ga4";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const activate = () => {
      if (!hasAnalyticsConsent()) return;
      loadGa();
    };

    activate();
    window.addEventListener("olivon-consent-change", activate);
    return () => window.removeEventListener("olivon-consent-change", activate);
  }, []);

  useEffect(() => {
    if (!GA_ID || !hasAnalyticsConsent()) return;
    loadGa();

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
