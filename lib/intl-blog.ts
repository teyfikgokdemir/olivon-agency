import type { Locale } from "@/lib/i18n";
import { intlArticles, type IntlArticle } from "@/lib/intl-articles";
import { intlTrendArticles } from "@/lib/intl-trend-articles";

export type IntlBlogArticle = IntlArticle & { image: string; group: string };

const neutralImages = [
  "/images/services/seo-geo-aeo-aio.webp",
  "/images/services/web-tasarim-gelistirme.webp",
  "/images/services/dijital-guvenlik.webp",
  "/images/services/e-ticaret-sistemleri.webp",
  "/images/services/dijital-reklam-marka.webp",
] as const;

const trendNeutralImages = [
  neutralImages[0],
  neutralImages[1],
  neutralImages[0],
  neutralImages[2],
  neutralImages[3],
  neutralImages[4],
  neutralImages[1],
] as const;

const legacyNeutralImages = [
  neutralImages[3],
  neutralImages[0],
  neutralImages[1],
  neutralImages[4],
] as const;

const legacyGroups = [
  "cross-border-commerce",
  "international-seo",
  "commerce-platforms",
  "ai-search-visibility",
] as const;

const publicationDates = [
  "2026-09-12",
  "2026-08-28",
  "2026-08-06",
  "2026-07-18",
  "2026-06-27",
  "2026-05-30",
  "2026-04-22",
  "2026-03-18",
  "2026-02-24",
  "2026-01-29",
  "2025-12-11",
] as const;

function displayDate(locale: Locale, iso: string) {
  const date = new Date(`${iso}T12:00:00Z`);
  return new Intl.DateTimeFormat(locale === "de" ? "de-DE" : locale === "fr" ? "fr-FR" : "en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function baseFor(locale: Locale): IntlBlogArticle[] {
  return [
    ...intlTrendArticles[locale].map((article, index) => ({
      ...article,
      image: trendNeutralImages[index] ?? neutralImages[0],
    })),
    ...intlArticles[locale].map((article, index) => ({
      ...article,
      image: legacyNeutralImages[index] ?? neutralImages[0],
      group: legacyGroups[index] ?? article.slug,
    })),
  ];
}

function applySchedule(locale: Locale, articles: IntlBlogArticle[]) {
  return articles.map((article, index) => {
    const dateISO = publicationDates[index] ?? publicationDates[publicationDates.length - 1];
    return { ...article, dateISO, date: displayDate(locale, dateISO) };
  });
}

export const allIntlArticles: Record<Locale, IntlBlogArticle[]> = {
  en: applySchedule("en", baseFor("en")),
  de: applySchedule("de", baseFor("de")),
  fr: applySchedule("fr", baseFor("fr")),
};

export function allIntlArticleBySlug(locale: Locale, slug: string) {
  return allIntlArticles[locale].find(article => article.slug === slug);
}

export function localizedArticleAlternates(group: string) {
  const find = (locale: Locale) => allIntlArticles[locale].find(article => article.group === group);
  const en = find("en");
  const de = find("de");
  const fr = find("fr");
  return {
    ...(en ? { en: `/en/blog/${en.slug}` } : {}),
    ...(de ? { "de-DE": `/de/blog/${de.slug}` } : {}),
    ...(fr ? { "fr-FR": `/fr/blog/${fr.slug}` } : {}),
  };
}
