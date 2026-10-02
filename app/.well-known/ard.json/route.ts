const manifest = {
  "specVersion": "1.0",
  "host": {
    "displayName": "Olivon",
    "identifier": "did:web:olivon.com.tr",
    "documentationUrl": "https://olivon.com.tr/llms.txt"
  },
  "entries": [
    {
      "identifier": "urn:air:olivon.com.tr:resource:llms",
      "displayName": "Olivon LLM Information",
      "type": "text/plain",
      "url": "https://olivon.com.tr/llms.txt",
      "description": "Canonical machine-readable overview of Olivon services, expertise, case studies, guides and contact information.",
      "tags": [
        "web-design",
        "ecommerce",
        "ikas",
        "seo",
        "geo",
        "aeo",
        "aio",
        "automation",
        "digital-security"
      ],
      "capabilities": [
        "SiteDiscovery",
        "ServiceCatalog",
        "CanonicalLinks"
      ],
      "representativeQueries": [
        "What services does Olivon provide?",
        "What are Olivon's official service, case study and contact pages?"
      ],
      "version": "1.0.0",
      "updatedAt": "2026-10-02T18:50:00Z"
    }
  ]
} as const;

export async function GET() {
  return Response.json(manifest, {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
