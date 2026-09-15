import type { Locale } from "@/lib/i18n";
import { intlArticles, type IntlArticle } from "@/lib/intl-articles";
import { intlTrendArticles } from "@/lib/intl-trend-articles";
import { intlExtraArticles } from "@/lib/intl-extra-articles";

export type IntlBlogArticle = IntlArticle & { image: string; group: string };

const imageByGroup = {
  "generative-search-2026": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-ai-generative-search.webp?v=1789515758",
  "ai-citation-measurement": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-search-visibility.webp?v=1789515816",
  "grounding-citation-ready-content": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-security.webp?v=1789515789",
  "freshness-indexnow-sitemaps": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-freshness-indexing.webp?v=1789515844",
  "product-structured-data-ai-commerce": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-structured-data.webp?v=1789515780",
  "agentic-commerce-readiness": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-ai-agents.webp?v=1789515806",
  "duplicate-content-ai-search": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-content-pruning-canonical.webp?v=1789515798",
  "cross-border-commerce": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-ecommerce.webp?v=1789515770",
  "international-seo": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-global-seo-hreflang.webp?v=1789515748",
  "commerce-platforms": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-platform-selection.webp?v=1789515836",
  "ai-search-visibility": "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-localization.webp?v=1789515825",
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
  "2025-11-14",
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
    ...intlExtraArticles[locale],
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
