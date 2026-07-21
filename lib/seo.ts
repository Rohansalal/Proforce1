import type { Metadata } from "next"

export const SITE_URL = "https://proforce1protection.com"

type PageMetaInput = {
  title: string
  description: string
  path: string
  absoluteTitle?: boolean
  keywords?: string[]
  image?: string
  type?: "website" | "article"
  publishedTime?: string
}

function toAbsoluteUrl(path: string) {
  if (/^https?:\/\//.test(path)) return path
  if (path === "/") return SITE_URL
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}

export function buildPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  keywords,
  image = "/logo.png",
  type = "website",
  publishedTime,
}: PageMetaInput): Metadata {
  const url = toAbsoluteUrl(path)
  const imageUrl = toAbsoluteUrl(image)
  const openGraphBase = {
    title,
    description,
    url,
    siteName: "ProForce 1",
    locale: "en_US",
    images: [{ url: imageUrl, alt: title }],
  }

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph:
      type === "article"
        ? {
            ...openGraphBase,
            type: "article",
            publishedTime,
          }
        : {
            ...openGraphBase,
            type: "website",
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

type ServiceMetaInput = {
  title: string
  description: string
  slug: string
  absoluteTitle?: boolean
  keywords?: string[]
}

export function buildServiceMetadata({
  title,
  description,
  slug,
  absoluteTitle,
  keywords,
}: ServiceMetaInput): Metadata {
  return buildPageMetadata({
    title,
    description,
    path: `/services/${slug}`,
    absoluteTitle,
    keywords,
  })
}

type ServiceJsonLdInput = {
  name: string
  description: string
  slug: string
  serviceType: string
}

export function buildServiceJsonLd({
  name,
  description,
  slug,
  serviceType,
}: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      "@type": "SecurityService",
      name: "ProForce 1 Protection Services",
      url: SITE_URL,
      telephone: "800-779-7691",
      email: "info@proforce1protection.com",
      identifier: {
        "@type": "PropertyValue",
        propertyID: "California BSIS PPO License",
        value: "PPO 120753",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "California Private Patrol Operator License",
        identifier: "PPO 120753",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "California Bureau of Security and Investigative Services",
          url: "https://www.bsis.ca.gov/",
        },
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "1671 W Katella Ave Suite 106",
        addressLocality: "Anaheim",
        addressRegion: "CA",
        postalCode: "92802",
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "State", name: "California" },
      { "@type": "AdministrativeArea", name: "Orange County" },
      { "@type": "City", name: "Anaheim" },
      { "@type": "City", name: "Los Angeles" },
    ],
  }
}

type FaqJsonLdItem = {
  question: string
  answer: string
}

export function buildFaqJsonLd(faqs: readonly FaqJsonLdItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  }
}
