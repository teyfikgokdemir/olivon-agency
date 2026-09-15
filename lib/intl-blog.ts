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

export const allIntlArticles: Record<Locale, IntlBlogArticle[]> = {
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
