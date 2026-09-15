"use client";

import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n";
import { intlPageKeys, intlPages, localizedPath, pageKeyFromSlug, type IntlPageKey } from "@/lib/intl-pages";

const trByKey: Record<IntlPageKey, string> = {
  services: "/hizmetler",
  ecommerce: "/hizmetler/e-ticaret",
  search: "/hizmetler/seo-geo-aeo-aio",
  web: "/hizmetler/web-tasarim",
  security: "/hizmetler/dijital-guvenlik",
  work: "/referanslar",
  faq: "/sss",
  contact: "/iletisim",
};

function currentLocale(pathname: string): Locale | "tr" {
  const segment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(segment as Locale) ? (segment as Locale) : "tr";
}

function keyForPath(pathname: string): IntlPageKey | null {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0] as Locale;
  if (locales.includes(first) && parts[1]) return pageKeyFromSlug(first, parts[1]);
  for (const key of intlPageKeys) if (pathname === trByKey[key]) return key;
  return null;
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const active = currentLocale(pathname);
  const pageKey = keyForPath(pathname);

  const hrefFor = (locale: Locale | "tr") => {
    if (pageKey) return locale === "tr" ? trByKey[pageKey] : localizedPath(locale, pageKey);
    if (locale === "tr") return "/";
    return `/${locale}`;
  };

  return (
    <div className="language-switcher" aria-label="Language selection">
      {(["tr", ...locales] as const).map(locale => (
        <a
          href={hrefFor(locale)}
          key={locale}
          className={locale === active ? "is-active" : undefined}
          hrefLang={locale === "tr" ? "tr" : locale}
          aria-current={locale === active ? "page" : undefined}
        >
          {localeNames[locale]}
        </a>
      ))}
    </div>
  );
}
