"use client";

import { useEffect } from "react";

type ConsentState = { analytics?: boolean };
const SOURCE_SCRIPT_ID = "olivon-cansu-source-beacon";
const EVENTS_SCRIPT_ID = "olivon-cansu-events";

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
  if (!analyticsAllowed()) return;

  if (!document.getElementById(SOURCE_SCRIPT_ID)) {
    const source = document.createElement("script");
    source.id = SOURCE_SCRIPT_ID;
    source.src = "https://teyfikgokdemir.com/cansu-source-beacon.js";
    source.dataset.site = "olivon-agency";
    source.async = true;
    document.body.appendChild(source);
  }

  if (!document.getElementById(EVENTS_SCRIPT_ID)) {
    const events = document.createElement("script");
    events.id = EVENTS_SCRIPT_ID;
    events.src = "https://teyfikgokdemir.com/cansu-events.js";
    events.dataset.site = "olivon-agency";
    events.async = true;
    document.body.appendChild(events);
  }

  if (!document.getElementById("olivon-cansu-umami")) {
    const umami = document.createElement("script");
    umami.id = "olivon-cansu-umami";
    umami.src = "https://teyfikgokdemir.com/cansu-umami-loader.js";
    umami.dataset.site = "olivon-agency";
    umami.async = true;
    document.body.appendChild(umami);
  }
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
