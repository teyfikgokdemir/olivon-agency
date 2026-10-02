"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { createAnalytics } from "@/lib/analytics-stack";
const config = { hostname: 'olivon.com.tr', site: 'olivon-agency', ga: 'G-VJ2PP2LG1N', advanced: true, clarityCookieless: true, gtm: process.env.NEXT_PUBLIC_GTM_ID ?? 'GTM-K3C62SQX', clarity: process.env.NEXT_PUBLIC_CLARITY_ID ?? 'yoagc8r3ml' };
type Consent = { analytics: boolean; marketing: boolean; recording?: boolean };
function getConsent(): Consent {
  // TEMP TEST MODE: measurement is always enabled; marketing storage stays disabled.
  return { analytics: true, marketing: false, recording: true };
}
export function GoogleAnalytics() {
  const pathname = usePathname();
  useEffect(() => {
    const analytics = createAnalytics(config);
    analytics.setConsent(getConsent());
    const onConsent = () => analytics.setConsent(getConsent());
    const onEvent = (event: Event) => { const detail = (event as CustomEvent).detail; if (detail?.name) analytics.track(detail.name, detail.params); };
    window.addEventListener('olivon-consent-change', onConsent);
    window.addEventListener('olivon-analytics-event', onEvent);
    return () => { window.removeEventListener('olivon-consent-change', onConsent); window.removeEventListener('olivon-analytics-event', onEvent); };
  }, []);
  useEffect(() => { createAnalytics(config).page(); }, [pathname]);
  return null;
}
