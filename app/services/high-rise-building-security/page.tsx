import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "High-Rise Building Security in Los Angeles & Orange County",
  description:
    "Professional high-rise security in California. Concierge-style officers, lobby security, access control, fire-life-safety response & emergency evacuation for office towers, condos & residential high-rises.",
  slug: "high-rise-building-security",
  keywords: [
    "high rise building security Los Angeles",
    "high rise security Orange County",
    "office tower security California",
    "high rise residential security",
    "condo building security",
    "lobby concierge security",
    "fire life safety security",
    "high rise access control",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "High-Rise Building Security Services",
  description:
    "Concierge-style high-rise security including lobby officers, tenant access control, fire-life-safety response, emergency evacuation procedures, and 24/7 coverage for office towers, condominiums, and residential high-rises across California.",
  slug: "high-rise-building-security",
  serviceType: "High-Rise Security",
})
const faqs = serviceFaqs["high-rise-building-security"]
const faqJsonLd = buildFaqJsonLd(faqs)

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Client />
      <ServiceFAQSection faqs={faqs} serviceName="High-Rise Building Security" />
    </>
  )
}
