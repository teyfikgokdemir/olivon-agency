import type { Locale } from "@/lib/i18n";
import { intlArticles, type IntlArticle } from "@/lib/intl-articles";
import { intlTrendArticles } from "@/lib/intl-trend-articles";

export type IntlBlogArticle = IntlArticle & { image: string; group: string };

const legacyImages = [
  "/images/services/e-ticaret-sistemleri.webp",
  "/images/services/seo-geo-aeo-aio.webp",
  "/images/blog/platform-secimi.webp",
  "/images/blog/ai-arama-gorunurlugu.webp",
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

function applySchedule(locale: Locale, articles: IntlBlogArticle[]) {
  return articles.map((article, index) => {
    const dateISO = publicationDates[index] ?? publicationDates[publicationDates.length - 1];
    return { ...article, dateISO, date: displayDate(locale, dateISO) };
  });
}

const baseArticles: Record<Locale, IntlBlogArticle[]> = {
  en: [
    ...intlTrendArticles.en,
    ...intlArticles.en.map((article, index) => ({ ...article, image: legacyImages[index] ?? legacyImages[0], group: legacyGroups[index] ?? article.slug })),
  ],
  de: [
    ...intlTrendArticles.de,
    ...intlArticles.de.map((article, index) => ({ ...article, image: legacyImages[index] ?? legacyImages[0], group: legacyGroups[index] ?? article.slug })),
  ],
  fr: [
    ...intlTrendArticles.fr,
    ...intlArticles.fr.map((article, index) => ({ ...article, image: legacyImages[index] ?? legacyImages[0], group: legacyGroups[index] ?? article.slug })),
  ],
};

export const allIntlArticles: Record<Locale, IntlBlogArticle[]> = {
  en: applySchedule("en", baseArticles.en),
  de: applySchedule("de", baseArticles.de),
  fr: applySchedule("fr", baseArticles.fr),
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
