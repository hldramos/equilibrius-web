import { SITE } from "./site";

// ===================================================
// SEO — Geração de meta tags e JSON-LD
// ===================================================

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
}

export function buildSeoMeta(opts: SeoOptions) {
  const canonical = new URL(opts.path ?? "", SITE.url);
  const ogImage = opts.image ? new URL(opts.image, SITE.url).href : new URL(SITE.ogImage, SITE.url).href;
  const fullTitle = opts.title.includes("EQUILIBRIUS") ? opts.title : `${opts.title} · EQUILIBRIUS`;

  return [
    { name: "description", content: opts.description },
    { name: "robots", content: opts.noindex ? "noindex, nofollow" : "index, follow" },
    { name: "author", content: SITE.fullName },
    { name: "generator", content: "Astro" },
    // Open Graph
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: opts.description },
    { property: "og:url", content: canonical.href },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:image", content: ogImage },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:site_name", content: "EQUILIBRIUS" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: ogImage },
    // Canonical
    { tag: "link", rel: "canonical", href: canonical.href },
  ];
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.fullName,
    alternateName: "EQUILIBRIUS",
    url: SITE.url,
    email: SITE.email,
    telephone: "+5575981463142",
    areaServed: { "@type": "Country", name: "Brasil" },
    knowsLanguage: "pt-BR",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Feira de Santana",
        addressRegion: "BA",
        addressCountry: "BR",
      },
    },
    description:
      "Consultoria tributária e contábil baseada em Feira de Santana (BA), atendendo empresas em todo o Brasil.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EQUILIBRIUS",
    url: SITE.url,
    inLanguage: "pt-BR",
    publisher: { "@type": "Organization", name: SITE.fullName },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: SITE.fullName,
      url: SITE.url,
    },
    areaServed: { "@type": "Country", name: "Brasil" },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: SITE.fullName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.fullName,
      url: SITE.url,
    },
    inLanguage: "pt-BR",
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.url, SITE.url).href,
    })),
  };
}