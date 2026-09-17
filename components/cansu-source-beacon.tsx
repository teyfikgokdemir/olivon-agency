"use client";

import { useEffect } from "react";

type ConsentState = { analytics?: boolean };
const SCRIPT_ID = "olivon-cansu-source-beacon";

function analyticsAllowed() {
  try {
    const raw = localStorage.getItem("olivon-cookie-consent");
    if (!raw) return false;
    return (JSON.parse(raw) as ConsentState).analytics === true;
  } catch {
    return false;
  }
}

function loadBeacon() {
  if (!analyticsAllowed() || document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.src = "https://teyfikgokdemir.com/cansu-source-beacon.js";
  script.dataset.site = "olivon-agency";
  script.async = true;
  document.body.appendChild(script);
}

export function CansuSourceBeacon() {
  useEffect(() => {
    loadBeacon();

    const onConsentChange = (event: Event) => {
      const detail = (event as CustomEvent<ConsentState>).detail;
      if (detail?.analytics === true) loadBeacon();
    };

    window.addEventListener("olivon-consent-change", onConsentChange);
    return () => window.removeEventListener("olivon-consent-change", onConsentChange);
  }, []);

  return null;
}
