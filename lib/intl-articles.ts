import type { Locale } from "@/lib/i18n";

export type IntlArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string;
  readingTime: string;
  sections: Array<{ heading: string; paragraphs: string[]; bullets?: string[] }>;
};

export const intlArticles: Record<Locale, IntlArticle[]> = {
  en: [
    {
      slug: "cross-border-ecommerce-launch-checklist",
      title: "Cross-border e-commerce: what to validate before launch",
      excerpt: "A practical framework for platform, catalog, payments, shipping, search migration and measurement before entering a new market.",
      category: "CROSS-BORDER COMMERCE",
      date: "16 Sep 2026",
      dateISO: "2026-09-16",
      readingTime: "7 min read",
      sections: [
        { heading: "A new market is an operating model, not a translation task", paragraphs: ["International launches often fail in places that are invisible in the visual design: catalog rules, payment availability, delivery expectations, tax-facing UX, returns, analytics and search migration. A localized storefront can look complete while the operating model underneath remains fragmented.", "Before design production begins, define which markets are actually being served, which currencies and languages are required, who owns fulfillment and support, and which systems must exchange data. Those decisions determine the right platform architecture more than visual preference does."] },
        { heading: "Validate commerce infrastructure first", paragraphs: ["The store should be tested as a complete commercial path: product discovery, variant selection, cart, checkout, payment, shipping, transactional communication and post-purchase support. Each market may introduce different constraints."], bullets: ["Market and currency structure", "Payment methods and checkout availability", "Shipping zones, lead times and return logic", "ERP, marketplace and inventory handoffs", "Consent, analytics and conversion measurement"] },
        { heading: "Protect search equity during migration", paragraphs: ["If a launch also includes a platform or URL change, SEO migration becomes part of the release plan. Redirect maps, canonical tags, metadata, internal links, sitemaps and indexation controls should be prepared before DNS or storefront cutover.", "The first days after launch should include crawl validation and Search Console monitoring. A technically clean migration does not guarantee unchanged rankings, but it removes avoidable sources of loss."] },
        { heading: "Launch with a measurement plan", paragraphs: ["A market launch should have a small set of agreed signals: qualified sessions, product discovery, checkout progression, completed purchases, lead quality where relevant, and search visibility for target topics. Reporting is useful only when it supports a decision.", "The goal is not to copy the home-market store into another language. It is to create a digital operation that makes sense for the target market and can be improved with evidence after launch."] },
      ],
    },
    {
      slug: "international-seo-hreflang-canonical-sitemap",
      title: "International SEO: hreflang, canonical and sitemap without conflicts",
      excerpt: "How multilingual websites should connect language versions so search engines can understand the intended market and page relationships.",
      category: "INTERNATIONAL SEO",
      date: "16 Sep 2026",
      dateISO: "2026-09-16",
      readingTime: "6 min read",
      sections: [
        { heading: "Every language page needs a clear canonical identity", paragraphs: ["A translated or localized page should normally canonicalize to itself when it is intended to rank independently. Canonical tags and hreflang solve different problems: canonical identifies the preferred URL for substantially equivalent content, while hreflang describes language or regional alternatives.", "Pointing all language pages back to one master-language canonical can prevent the localized versions from being treated as independent search results."] },
        { heading: "Hreflang must be reciprocal", paragraphs: ["If an English page references German and French alternatives, those alternatives should reference the English version back. The set should be consistent across the cluster and should include the page itself.", "Use language-region codes only where the regional distinction is meaningful. For many international English pages, `en` is sufficient; for a DACH-specific page, `de-DE`, `de-AT` or `de-CH` may be appropriate when content truly differs by region."] },
        { heading: "Sitemaps should reinforce the same relationships", paragraphs: ["XML sitemaps can carry alternate-language relationships in addition to ordinary crawl discovery. The URLs listed in the sitemap should be canonical, indexable and return successful responses.", "The sitemap is not a substitute for internal linking. Users and crawlers should also be able to navigate between language versions through a visible language selector and localized navigation."] },
        { heading: "Local intent matters more than literal translation", paragraphs: ["Technical international SEO only creates the framework. Ranking performance still depends on whether the page answers the way people in that market search. Headings, examples, trust signals and service framing often need to change rather than simply be translated.", "A strong multilingual site therefore combines technical consistency with market-specific copy and evidence."] },
      ],
    },
    {
      slug: "shopify-vs-woocommerce-international-growth",
      title: "Shopify or WooCommerce for international growth?",
      excerpt: "A platform decision framework based on operating model, integrations, ownership and expansion needs rather than feature lists.",
      category: "COMMERCE PLATFORMS",
      date: "16 Sep 2026",
      dateISO: "2026-09-16",
      readingTime: "7 min read",
      sections: [
        { heading: "Start with operational ownership", paragraphs: ["Shopify and WooCommerce can both support serious commerce operations, but they place responsibility in different places. Shopify reduces infrastructure ownership and standardizes much of the platform layer. WooCommerce gives teams deeper control over WordPress, hosting, data structures and extensions.", "The better choice depends on who will maintain the system, how custom the integration layer must become, and how much operational complexity the business is prepared to own."] },
        { heading: "Consider integration and content requirements", paragraphs: ["A catalog-heavy business with unusual ERP logic may value flexibility differently from a brand that prioritizes fast market launches and standardized checkout. Likewise, a content-led organization already invested in WordPress may find WooCommerce strategically coherent.", "Platform selection should include payments, logistics, tax-facing UX, marketplace connections, analytics, localization and editorial workflows—not only theme capabilities."] },
        { heading: "Migration risk belongs in the decision", paragraphs: ["Changing platform is not only a development project. Product data, media, customer journeys, tracking and search equity all move together. Before committing, map URL changes, redirects, metadata, structured data and integration dependencies.", "A platform that looks cheaper in isolation can become more expensive if the migration and ongoing operating model are poorly matched to the team."] },
        { heading: "Choose for the next operating stage", paragraphs: ["The objective is not to declare a universal winner. It is to select the platform whose constraints fit the business. A disciplined decision document should state why the platform was chosen, what it will not solve, and which integrations remain business-critical."] },
      ],
    },
    {
      slug: "ai-search-visibility-geo-aeo-aio",
      title: "AI search visibility: where GEO, AEO and AIO meet technical SEO",
      excerpt: "A practical view of entity clarity, answer architecture, structured data and useful content for AI-assisted discovery.",
      category: "SEO · GEO · AEO · AIO",
      date: "16 Sep 2026",
      dateISO: "2026-09-16",
      readingTime: "6 min read",
      sections: [
        { heading: "AI visibility does not replace SEO fundamentals", paragraphs: ["Search and answer systems still need crawlable pages, clear entities, consistent internal linking and understandable content. GEO, AEO and AIO work best as extensions of technical SEO rather than separate shortcuts.", "A site should make it explicit who the organization is, what it provides, which markets it serves and where evidence for those claims can be found."] },
        { heading: "Write for questions that have commercial meaning", paragraphs: ["Answer-focused content is most useful when it resolves real uncertainty: platform choice, migration risk, implementation scope, pricing logic, security controls or market-entry requirements. Thin FAQ pages created only to produce schema add little value.", "Direct answers can coexist with detailed supporting sections. The short answer helps extraction; the deeper explanation helps evaluation."] },
        { heading: "Structured data should describe reality", paragraphs: ["Organization, WebSite, WebPage, Service, Breadcrumb and FAQ structured data can clarify relationships when they accurately match visible content. Markup should not invent reviews, locations, services or answers that users cannot see."] },
        { heading: "Measure discoverability, not promises", paragraphs: ["No provider can guarantee third-party AI citations. A responsible program tracks crawlability, indexation, branded and non-branded search visibility, referral patterns where available, and whether the site contains citation-friendly evidence and definitions.", "The objective is to make the brand easier to understand and verify across both search engines and AI-assisted discovery systems."] },
      ],
    },
  ],
  de: [
    {
      slug: "e-commerce-migration-dach-checkliste",
      title: "E-Commerce-Migration im DACH-Markt: die technische Checkliste vor dem Launch",
      excerpt: "Plattform, Daten, Redirects, Zahlungen, Versand, Tracking und Sichtbarkeit vor einem kontrollierten Plattformwechsel prüfen.",
      category: "E-COMMERCE & MIGRATION",
      date: "16. Sep. 2026",
      dateISO: "2026-09-16",
      readingTime: "7 Min.",
      sections: [
        { heading: "Ein Plattformwechsel ist mehr als ein Redesign", paragraphs: ["Bei einer Migration bewegen sich Produktdaten, URLs, Tracking, Integrationen und operative Abläufe gleichzeitig. Ein optisch fertiger Shop kann technisch unvollständig sein, wenn Redirects, Zahlungslogik oder ERP-Anbindungen erst nach dem Launch betrachtet werden.", "Vor Produktionsbeginn sollten Zielsystem, Datenquellen, Verantwortlichkeiten und Abnahmekriterien dokumentiert werden."] },
        { heading: "Daten und Integrationen zuerst kartieren", paragraphs: ["Produkt- und Variantendaten, Bilder, Kategorien, Kundendaten, Bestellungen und Bestände haben unterschiedliche Anforderungen. Zusätzlich müssen Zahlungen, Versand, ERP, Marktplätze und Analytics im Zielsystem geprüft werden."], bullets: ["Datenfelder und Quelle definieren", "Integrationen und Verantwortliche dokumentieren", "Testbestellungen pro Zielmarkt durchführen", "Tracking vor und nach dem Cutover vergleichen"] },
        { heading: "SEO-Migration als Release-Bestandteil", paragraphs: ["URL-Mapping, 301-Weiterleitungen, Canonicals, Metadaten, interne Links und Sitemap gehören vor dem Go-live in den Migrationsplan. Nach dem Launch sollten Crawls und Indexierung kontrolliert werden.", "So lassen sich nicht alle Ranking-Schwankungen verhindern, aber vermeidbare technische Verluste deutlich reduzieren."] },
        { heading: "Erst nach Validierung skalieren", paragraphs: ["Nach dem Launch sollten Performance, Checkout, Conversion-Messung und Suchsignale geprüft werden, bevor zusätzliche Länder, Sprachen oder Kampagnen aktiviert werden. Stabilität ist eine bessere Grundlage für Wachstum als ein zu breiter Start."] },
      ],
    },
    {
      slug: "internationales-seo-hreflang-canonical",
      title: "Internationales SEO: Hreflang, Canonical und Sitemap richtig verbinden",
      excerpt: "Wie mehrsprachige Seiten ihre Sprachversionen technisch eindeutig miteinander verknüpfen.",
      category: "INTERNATIONALES SEO",
      date: "16. Sep. 2026",
      dateISO: "2026-09-16",
      readingTime: "6 Min.",
      sections: [
        { heading: "Lokalisierte Seiten brauchen eine eigene Identität", paragraphs: ["Wenn eine deutsche Seite eigenständig indexiert werden soll, sollte sie in der Regel auf sich selbst kanonisieren. Canonical und Hreflang erfüllen unterschiedliche Aufgaben: Canonical benennt die bevorzugte URL, Hreflang beschreibt Sprach- oder Regionalvarianten.", "Wer alle Sprachversionen auf eine einzige Ausgangssprache kanonisiert, schwächt die Eigenständigkeit der lokalisierten Seiten."] },
        { heading: "Hreflang muss wechselseitig sein", paragraphs: ["Sprachvarianten sollten sich gegenseitig referenzieren und jeweils auch sich selbst enthalten. Inkonsistente Cluster erschweren Suchmaschinen die Zuordnung.", "Regionale Codes sind sinnvoll, wenn Inhalte tatsächlich regional differenziert sind. Eine DACH-Strategie sollte nicht automatisch drei nahezu identische Seiten erzeugen, wenn es keine inhaltlichen Unterschiede gibt."] },
        { heading: "Sitemap und interne Links müssen dasselbe Modell zeigen", paragraphs: ["XML-Sitemaps können Sprachalternativen auszeichnen. Gleichzeitig sollten Nutzer und Crawler über einen sichtbaren Sprachumschalter und lokale Navigation zwischen Versionen wechseln können.", "Technische Signale funktionieren am besten, wenn Canonical, Hreflang, Sitemap und interne Verlinkung dieselbe Seitenbeziehung ausdrücken."] },
        { heading: "Lokale Suchintention bleibt entscheidend", paragraphs: ["Eine technisch perfekte Übersetzung rankt nicht automatisch. Überschriften, Beispiele, Vertrauenssignale und Leistungsdarstellung sollten an Erwartungen im Zielmarkt angepasst werden. Internationales SEO ist deshalb Technik plus echte Lokalisierung."] },
      ],
    },
    {
      slug: "shopify-oder-woocommerce-dach",
      title: "Shopify oder WooCommerce für den DACH-Markt?",
      excerpt: "Plattformwahl nach Betriebsmodell, Integrationen, Ownership und Wachstum statt nach Feature-Listen.",
      category: "COMMERCE-PLATTFORMEN",
      date: "16. Sep. 2026",
      dateISO: "2026-09-16",
      readingTime: "7 Min.",
      sections: [
        { heading: "Die Plattformfrage beginnt beim Betrieb", paragraphs: ["Shopify reduziert einen großen Teil der Infrastrukturverantwortung und standardisiert zentrale Commerce-Funktionen. WooCommerce bietet mehr Kontrolle über WordPress, Hosting, Datenmodell und Erweiterungen.", "Welche Richtung besser passt, hängt davon ab, wer das System langfristig betreibt und wie individuell Integrationen und Content-Prozesse werden müssen."] },
        { heading: "Integrationen sind oft wichtiger als das Theme", paragraphs: ["ERP, Zahlungen, Versand, Marktplätze, Analytics, Produktdaten und redaktionelle Prozesse sollten vor der Plattformentscheidung bewertet werden. Ein schönes Frontend löst keine unpassende Betriebsarchitektur."] },
        { heading: "Migration und SEO in die Kosten einrechnen", paragraphs: ["Bei einem Plattformwechsel entstehen Aufgaben für Datenübernahme, Redirects, Metadaten, Tracking und Qualitätssicherung. Diese Arbeit gehört in die Wirtschaftlichkeitsbetrachtung und nicht in eine spätere Restliste."] },
        { heading: "Für die nächste Betriebsphase entscheiden", paragraphs: ["Es gibt keinen universellen Sieger. Eine gute Entscheidung dokumentiert die wichtigsten Anforderungen, akzeptierte Einschränkungen und die Systeme, die weiterhin integriert werden müssen."] },
      ],
    },
    {
      slug: "ki-sichtbarkeit-geo-aeo-aio",
      title: "KI-Sichtbarkeit: GEO, AEO und AIO auf einer soliden SEO-Basis",
      excerpt: "Entity-Klarheit, Antwortarchitektur und strukturierte Daten für Google und KI-gestützte Discovery.",
      category: "SEO · GEO · AEO · AIO",
      date: "16. Sep. 2026",
      dateISO: "2026-09-16",
      readingTime: "6 Min.",
      sections: [
        { heading: "SEO-Grundlagen bleiben die Basis", paragraphs: ["Auch KI-gestützte Systeme profitieren von crawlbaren Seiten, eindeutigen Entitäten, konsistenter interner Verlinkung und klaren Leistungsbeschreibungen. GEO, AEO und AIO sind keine Abkürzung um technische SEO herum."] },
        { heading: "Antworten auf echte Entscheidungsfragen", paragraphs: ["Hilfreiche Inhalte beantworten Fragen mit geschäftlichem Kontext: Migration, Plattformwahl, Projektumfang, Sicherheit oder Markteintritt. Künstlich aufgeblähte FAQ-Seiten ohne Substanz verbessern die Informationsqualität nicht."] },
        { heading: "Schema Markup muss sichtbare Inhalte beschreiben", paragraphs: ["Organization, WebSite, WebPage, Service, Breadcrumb und FAQ können Beziehungen verdeutlichen, wenn sie der sichtbaren Seite entsprechen. Nicht sichtbare Bewertungen oder erfundene Leistungsdaten gehören nicht ins Markup."] },
        { heading: "Sichtbarkeit messen statt Zitate versprechen", paragraphs: ["Niemand kann seriös garantieren, dass ein Drittanbieter-KI-System eine Marke zitiert. Sinnvoller sind überprüfbare Grundlagen: Indexierung, Suchsichtbarkeit, klare Quellen, nachvollziehbare Definitionen und belastbare Projektbelege."] },
      ],
    },
  ],
  fr: [
    {
      slug: "lancement-ecommerce-international-checklist",
      title: "E-commerce international : la checklist avant un lancement sur un nouveau marché",
      excerpt: "Plateforme, catalogue, paiement, logistique, migration SEO et mesure : les points à valider avant la mise en ligne.",
      category: "E-COMMERCE INTERNATIONAL",
      date: "16 sept. 2026",
      dateISO: "2026-09-16",
      readingTime: "7 min",
      sections: [
        { heading: "Un nouveau marché n’est pas un simple travail de traduction", paragraphs: ["Une boutique peut sembler parfaitement localisée alors que les éléments opérationnels restent incohérents : moyens de paiement, livraison, retours, données produit, tracking ou référencement. Le lancement doit donc être cadré comme un système commercial complet.", "Avant la production, il faut préciser les marchés servis, les devises, les langues, les responsabilités logistiques et les systèmes qui échangent des données."] },
        { heading: "Valider l’infrastructure commerce", paragraphs: ["Le parcours complet doit être testé : découverte produit, variantes, panier, checkout, paiement, livraison et communication post-achat."], bullets: ["Structure des marchés et devises", "Paiements disponibles", "Zones et délais de livraison", "ERP, marketplaces et stocks", "Consentement, analytics et conversion"] },
        { heading: "Protéger la visibilité lors d’une migration", paragraphs: ["Si le lancement implique un changement de plateforme ou d’URL, les redirections, canonicals, métadonnées, liens internes et sitemaps doivent être préparés avant la bascule.", "Après mise en ligne, un crawl de contrôle et le suivi de l’indexation permettent d’identifier rapidement les erreurs évitables."] },
        { heading: "Lancer avec des indicateurs utiles", paragraphs: ["Sessions qualifiées, progression vers le checkout, ventes, qualité des leads et visibilité organique sont plus utiles qu’une longue liste de métriques décoratives. L’objectif est de créer une opération locale mesurable, pas de dupliquer la boutique d’origine."] },
      ],
    },
    {
      slug: "seo-international-hreflang-canonical-sitemap",
      title: "SEO international : bien gérer hreflang, canonical et sitemap",
      excerpt: "Comment relier les versions linguistiques pour aider les moteurs à comprendre les marchés et les équivalences de pages.",
      category: "SEO INTERNATIONAL",
      date: "16 sept. 2026",
      dateISO: "2026-09-16",
      readingTime: "6 min",
      sections: [
        { heading: "Chaque version localisée doit avoir une identité claire", paragraphs: ["Une page française destinée à être indexée doit généralement se canonicaliser elle-même. Canonical et hreflang ne répondent pas au même besoin : le premier indique l’URL préférée, le second relie des variantes linguistiques ou régionales.", "Canonicaliser toutes les langues vers une page principale peut empêcher les versions locales de jouer pleinement leur rôle dans les résultats de recherche."] },
        { heading: "Les hreflang doivent être réciproques", paragraphs: ["Une page anglaise qui déclare une alternative française doit être déclarée en retour par cette page française. Le cluster doit être cohérent et chaque page doit aussi se référencer elle-même."] },
        { heading: "Le sitemap doit confirmer le même modèle", paragraphs: ["Les sitemaps XML peuvent inclure les variantes linguistiques, mais ils ne remplacent pas la navigation interne. Un sélecteur de langue visible et des liens locaux restent importants pour les utilisateurs et les crawlers."] },
        { heading: "La localisation de l’intention reste essentielle", paragraphs: ["La technique ne suffit pas. Titres, exemples, preuves de confiance et formulation des services doivent correspondre aux attentes du marché francophone. Une bonne stratégie internationale associe cohérence technique et contenu réellement localisé."] },
      ],
    },
    {
      slug: "shopify-ou-woocommerce-international",
      title: "Shopify ou WooCommerce pour se développer à l’international ?",
      excerpt: "Comparer les plateformes selon l’organisation, les intégrations, le niveau de contrôle et la prochaine phase de croissance.",
      category: "PLATEFORMES E-COMMERCE",
      date: "16 sept. 2026",
      dateISO: "2026-09-16",
      readingTime: "7 min",
      sections: [
        { heading: "Commencer par le modèle d’exploitation", paragraphs: ["Shopify réduit la responsabilité liée à l’infrastructure et standardise de nombreuses fonctions commerce. WooCommerce apporte davantage de contrôle sur WordPress, l’hébergement, les données et les extensions.", "Le bon choix dépend surtout de l’équipe qui maintiendra le système, du niveau de personnalisation nécessaire et des intégrations critiques."] },
        { heading: "Évaluer les intégrations avant le design", paragraphs: ["ERP, paiement, livraison, marketplaces, analytics, catalogue et workflows éditoriaux doivent être étudiés avant de choisir une plateforme. Le thème n’est qu’une couche du système."] },
        { heading: "Inclure le risque de migration", paragraphs: ["Changer de plateforme implique données produit, médias, URLs, redirections, métadonnées et tracking. Ces éléments doivent faire partie du budget et du planning dès le départ."] },
        { heading: "Choisir pour la prochaine étape", paragraphs: ["Il n’existe pas de gagnant universel. La meilleure décision est celle qui correspond au modèle opérationnel, aux compétences de l’équipe et au niveau de contrôle réellement nécessaire."] },
      ],
    },
    {
      slug: "visibilite-ia-geo-aeo-aio",
      title: "Visibilité dans les moteurs IA : GEO, AEO et AIO sur une base SEO solide",
      excerpt: "Clarifier les entités, structurer les réponses et utiliser les données structurées sans promesses artificielles.",
      category: "SEO · GEO · AEO · AIO",
      date: "16 sept. 2026",
      dateISO: "2026-09-16",
      readingTime: "6 min",
      sections: [
        { heading: "Les fondamentaux SEO restent indispensables", paragraphs: ["Les systèmes de réponse assistés par IA ont eux aussi besoin de pages accessibles, d’entités claires, d’une architecture cohérente et de contenus compréhensibles. GEO, AEO et AIO complètent le SEO technique plutôt qu’ils ne le remplacent."] },
        { heading: "Répondre aux vraies questions commerciales", paragraphs: ["Les contenus les plus utiles traitent les incertitudes concrètes : choix de plateforme, migration, périmètre d’un projet, sécurité ou lancement sur un marché. Les FAQ artificielles créées uniquement pour le balisage n’apportent pas de valeur durable."] },
        { heading: "Les données structurées doivent décrire la réalité", paragraphs: ["Organization, WebSite, WebPage, Service, Breadcrumb et FAQ peuvent clarifier les relations si le balisage correspond au contenu visible. Il ne faut pas inventer d’avis, de services ou de données qui ne sont pas présents sur la page."] },
        { heading: "Mesurer la découvrabilité, pas promettre des citations", paragraphs: ["Aucun prestataire sérieux ne peut garantir une citation par un système IA tiers. Une approche responsable améliore l’indexation, la clarté des entités, les preuves disponibles et la qualité des réponses afin de rendre la marque plus facile à comprendre et à vérifier."] },
      ],
    },
  ],
};

export function intlArticleBySlug(locale: Locale, slug: string) {
  return intlArticles[locale].find(article => article.slug === slug);
}
