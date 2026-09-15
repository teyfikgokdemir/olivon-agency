"use client";

import { usePathname } from "next/navigation";
import { localeNames, locales, type Locale } from "@/lib/i18n";

function currentLocale(pathname: string): Locale | "tr" {
  const segment = pathname.split("/").filter(Boolean)[0];
  return locales.includes(segment as Locale) ? (segment as Locale) : "tr";
}

export function LanguageSwitcher() {
  const pathname = usePathname();
  const active = currentLocale(pathname);

  const hrefFor = (locale: Locale | "tr") => {
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
