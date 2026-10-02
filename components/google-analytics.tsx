"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { createAnalytics } from "@/lib/analytics-stack";
const config = { hostname: 'olivon.com.tr', site: 'olivon-agency', ga: 'G-VJ2PP2LG1N', advanced: true, clarityCookieless: true, gtm: process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-K3C62SQX', clarity: process.env.NEXT_PUBLIC_CLARITY_ID ?? 'yoagc8r3ml' };
type Consent = { analytics: boolean; marketing: boolean; recording?: boolean };
const ANALYTICS_TEST_MODE = true;
function getConsent(): Consent {
  if (ANALYTICS_TEST_MODE) return { analytics: true, marketing: false, recording: true };
  try { const value = JSON.parse(localStorage.getItem('olivon-cookie-consent') || '{}'); return { analytics: value?.analytics === true, marketing: value?.marketing === true, recording: localStorage.getItem("qct-recording-consent-v1") === "granted" }; }
  catch { return { analytics: false, marketing: false }; }
}
export function GoogleAnalytics() {
  const pathname = usePathname();
  useEffect(() => {
    const analytics = createAnalytics(config);
    analytics.setConsent(getConsent());
    const onConsent = (event: Event) => analytics.setConsent(ANALYTICS_TEST_MODE ? getConsent() : ((event as CustomEvent<Consent>).detail || getConsent()));
    const onEvent = (event: Event) => { const detail = (event as CustomEvent).detail; if (detail?.name) analytics.track(detail.name, detail.params); };
    window.addEventListener('olivon-consent-change', onConsent);
    window.addEventListener('olivon-analytics-event', onEvent);
    return () => { window.removeEventListener('olivon-consent-change', onConsent); window.removeEventListener('olivon-analytics-event', onEvent); };
  }, []);
  useEffect(() => { createAnalytics(config).page(); }, [pathname]);
  return null;
}
