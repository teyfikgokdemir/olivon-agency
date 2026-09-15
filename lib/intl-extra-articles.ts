import type { Locale } from "@/lib/i18n";
import type { IntlBlogArticle } from "@/lib/intl-blog";

const ecommerceImage = "https://cdn.shopify.com/s/files/1/0823/7144/4990/files/olivon-ecommerce.webp?v=1789515770";

export const intlExtraArticles: Record<Locale, IntlBlogArticle[]> = {
  en: [
    {
      group: "commerce-measurement-after-migration",
      slug: "ecommerce-migration-ga4-conversion-tracking-checklist",
      title: "E-commerce migration analytics: how to validate GA4, checkout and revenue tracking",
      excerpt: "A practical post-migration checklist for GA4, consent, checkout events, revenue attribution and the signals teams should verify before scaling traffic.",
      category: "ANALYTICS · E-COMMERCE",
      date: "16 Sep 2026",
      dateISO: "2026-09-16",
      readingTime: "7 min read",
      image: ecommerceImage,
      sections: [
        { heading: "A successful migration can still produce broken measurement", paragraphs: ["A storefront can look correct after a platform change while analytics quietly stops matching the real customer journey. Missing purchase events, duplicate page views, broken referral exclusions or consent behavior can make a healthy store look weaker than it is—or hide genuine conversion problems.", "Measurement validation should therefore be part of the migration release plan, not a task left for the first monthly report."] },
        { heading: "Validate the commercial event chain", paragraphs: ["Start with the events that represent the buying journey and test them on real devices, browsers and payment paths."], bullets: ["Product view and item data", "Add-to-cart and cart updates", "Begin checkout", "Payment and shipping steps where available", "Purchase event, order ID, currency and revenue", "Refund or cancellation handling when implemented"] },
        { heading: "Consent and attribution need separate checks", paragraphs: ["A consent banner can change what analytics is allowed to store or send, while payment providers and cross-domain checkout flows can affect attribution. Test accepted, rejected and partially granted consent states instead of validating only one happy path.", "Also review self-referrals, payment-domain referrals, campaign parameters and source/medium continuity so revenue is not reassigned to the wrong channel after checkout."] },
        { heading: "Scale only after the numbers reconcile", paragraphs: ["Compare analytics orders and revenue with the commerce platform for a controlled period. Perfect one-to-one matching is not always realistic, but unexplained gaps should be investigated before advertising budgets or market expansion are increased.", "The useful outcome is a measurement system the team can trust enough to make decisions from—not simply a green GA4 tag in a browser extension."] },
      ],
    },
  ],
  de: [
    {
      group: "commerce-measurement-after-migration",
      slug: "e-commerce-migration-ga4-conversion-tracking-pruefen",
      title: "E-Commerce-Migration: GA4, Checkout und Umsatz-Tracking nach dem Launch prüfen",
      excerpt: "Eine praxisnahe Checkliste für GA4, Consent, Checkout-Events, Umsatzzuordnung und belastbare Messung nach einem Plattformwechsel.",
      category: "ANALYTICS · E-COMMERCE",
      date: "16. Sep. 2026",
      dateISO: "2026-09-16",
      readingTime: "7 Min.",
      image: ecommerceImage,
      sections: [
        { heading: "Eine technisch erfolgreiche Migration kann trotzdem falsche Daten liefern", paragraphs: ["Ein Shop kann nach dem Plattformwechsel korrekt aussehen, während die Messung im Hintergrund unvollständig ist. Fehlende Purchase-Events, doppelte Pageviews, falsche Referrals oder Consent-Probleme verfälschen die Bewertung des neuen Systems.", "Deshalb gehört Analytics-Validierung in den Release-Prozess und nicht erst in den ersten Monatsreport."] },
        { heading: "Die kommerzielle Event-Kette testen", paragraphs: ["Die wichtigsten Schritte der Customer Journey sollten auf echten Geräten, Browsern und Zahlungswegen geprüft werden."], bullets: ["Produktaufruf und Item-Daten", "Add-to-Cart und Warenkorbänderungen", "Begin Checkout", "Zahlungs- und Versandschritte, sofern verfügbar", "Purchase mit Bestell-ID, Währung und Umsatz", "Refund- oder Storno-Logik, falls implementiert"] },
        { heading: "Consent und Attribution getrennt validieren", paragraphs: ["Consent-Einstellungen beeinflussen, welche Daten gespeichert oder gesendet werden dürfen. Gleichzeitig können Zahlungsanbieter und Cross-Domain-Checkouts die Attribution verändern. Testen Sie deshalb akzeptierte, abgelehnte und teilweise erteilte Einwilligungen.", "Zusätzlich sollten Self-Referrals, Zahlungsdomains, Kampagnenparameter und Source/Medium-Kontinuität kontrolliert werden."] },
        { heading: "Erst skalieren, wenn die Zahlen plausibel sind", paragraphs: ["Vergleichen Sie Bestellungen und Umsatz aus Analytics über einen kontrollierten Zeitraum mit den Daten der Commerce-Plattform. Eine perfekte Eins-zu-eins-Übereinstimmung ist nicht immer realistisch, größere ungeklärte Abweichungen sollten jedoch vor zusätzlichem Werbebudget untersucht werden.", "Das Ziel ist kein bloß sichtbares GA4-Tag, sondern ein Messsystem, dem das Team bei Entscheidungen vertrauen kann."] },
      ],
    },
  ],
  fr: [
    {
      group: "commerce-measurement-after-migration",
      slug: "migration-ecommerce-ga4-checkout-suivi-conversions",
      title: "Migration e-commerce : vérifier GA4, le checkout et le suivi du chiffre d’affaires",
      excerpt: "Une checklist pratique pour valider GA4, le consentement, les événements checkout et l’attribution du revenu après une migration.",
      category: "ANALYTICS · E-COMMERCE",
      date: "16 sept. 2026",
      dateISO: "2026-09-16",
      readingTime: "7 min",
      image: ecommerceImage,
      sections: [
        { heading: "Une migration réussie visuellement peut casser la mesure", paragraphs: ["Une boutique peut sembler parfaitement opérationnelle après un changement de plateforme alors que les données analytics ne correspondent plus au parcours réel. Événements purchase manquants, pages vues en double, referrals incorrects ou consentement mal géré peuvent fausser les décisions.", "La validation analytics doit donc faire partie du plan de mise en production, et non être repoussée au premier reporting mensuel."] },
        { heading: "Tester toute la chaîne d’événements commerciaux", paragraphs: ["Les étapes clés du parcours d’achat doivent être vérifiées sur de vrais appareils, navigateurs et moyens de paiement."], bullets: ["Vue produit et données article", "Ajout au panier et mises à jour du panier", "Début du checkout", "Étapes paiement et livraison lorsqu’elles sont exposées", "Purchase avec ID de commande, devise et revenu", "Remboursements ou annulations si le suivi existe"] },
        { heading: "Vérifier séparément consentement et attribution", paragraphs: ["Le bandeau de consentement peut modifier les données autorisées à être stockées ou envoyées. Les prestataires de paiement et les parcours cross-domain peuvent aussi modifier l’attribution. Il faut donc tester plusieurs états de consentement, pas uniquement le scénario idéal.", "Les self-referrals, domaines de paiement, paramètres de campagne et la continuité source/medium doivent également être contrôlés."] },
        { heading: "Ne pas accélérer avant de réconcilier les chiffres", paragraphs: ["Comparez pendant une période contrôlée les commandes et le chiffre d’affaires mesurés avec les données de la plateforme e-commerce. Une correspondance parfaite n’est pas toujours possible, mais les écarts importants doivent être expliqués avant d’augmenter les budgets d’acquisition.", "L’objectif est un système de mesure suffisamment fiable pour guider les décisions, pas simplement un tag GA4 qui apparaît comme actif."] },
      ],
    },
  ],
};
