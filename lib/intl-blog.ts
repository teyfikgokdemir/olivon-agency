import type { Locale } from "@/lib/i18n";
import { intlArticles, type IntlArticle } from "@/lib/intl-articles";
import { intlTrendArticles } from "@/lib/intl-trend-articles";

export type IntlBlogArticle = IntlArticle & { image: string; group: string };

const imageByGroup = {
  "generative-search-2026": "/images/blog/intl/ai-generative-search.webp",
  "ai-citation-measurement": "/images/blog/intl/search-visibility.webp",
  "grounding-citation-ready-content": "/images/blog/intl/security.webp",
  "freshness-indexnow-sitemaps": "/images/blog/intl/freshness-indexing.webp",
  "product-structured-data-ai-commerce": "/images/blog/intl/structured-data.webp",
  "agentic-commerce-readiness": "/images/blog/intl/ai-agents.webp",
  "duplicate-content-ai-search": "/images/blog/intl/content-pruning-canonical.webp",
  "cross-border-commerce": "/images/blog/intl/ecommerce.webp",
  "international-seo": "/images/blog/intl/global-seo-hreflang.webp",
  "commerce-platforms": "/images/blog/intl/platform-selection.webp",
  "ai-search-visibility": "/images/blog/intl/localization.webp",
} as const;

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

function imageFor(group: string, fallback: string) {
  return imageByGroup[group as keyof typeof imageByGroup] ?? fallback;
}

function baseFor(locale: Locale): IntlBlogArticle[] {
  return [
    ...intlTrendArticles[locale].map(article => ({
      ...article,
      image: imageFor(article.group, article.image),
    })),
    ...intlArticles[locale].map((article, index) => {
      const group = legacyGroups[index] ?? article.slug;
      return {
        ...article,
        image: imageFor(group, article.image),
        group,
      };
    }),
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
