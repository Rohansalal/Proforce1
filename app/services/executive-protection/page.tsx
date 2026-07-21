import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Executive Protection Officers | Zero Security Breaches | ProForce 1",
  description:
    "ProForce 1 provides executive security services with a zero-breach record \u2014 elite protection officers for executives & VIPs. Confidential consult.",
  slug: "executive-protection",
  absoluteTitle: true,
  keywords: [
    "executive protection California",
    "bodyguard services Los Angeles",
    "executive protection Orange County",
    "VIP security California",
    "celebrity protection",
    "private bodyguard Anaheim",
    "personal security detail",
    "close protection officers",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Executive Protection Services",
  description:
    "Discreet, highly trained executive protection officers — many with law enforcement and military backgrounds — providing personal protection, secure transportation, and threat assessment for VIPs, executives, and high-profile clients across California.",
  slug: "executive-protection",
  serviceType: "Executive Protection",
})
const faqs = serviceFaqs["executive-protection"]
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
      <ServiceFAQSection faqs={faqs} serviceName="Executive Protection" />
    </>
  )
}
