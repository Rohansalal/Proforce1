import type { Metadata } from "next"

const SITE_URL = "https://proforce1protection.com"

type ServiceMetaInput = {
  title: string
  description: string
  slug: string
  keywords?: string[]
}

export function buildServiceMetadata({
  title,
  description,
  slug,
  keywords,
}: ServiceMetaInput): Metadata {
  const canonical = `/services/${slug}`
  const url = `${SITE_URL}${canonical}`
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "ProForce 1",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
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
