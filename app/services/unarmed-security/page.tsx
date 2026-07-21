import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Unarmed Security Guard Services | BSIS Licensed Guards",
  description:
    "Hire BSIS licensed unarmed security guards for dependable protection. Professional unarmed security guard services for businesses, properties, and events.",
  slug: "unarmed-security",
  absoluteTitle: true,
  keywords: [
    "unarmed security guards Anaheim",
    "unarmed security guards Orange County",
    "unarmed security California",
    "uniformed security guards",
    "commercial security guards Anaheim",
    "residential security California",
    "corporate security guards Orange County",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Unarmed Security Guard Services",
  description:
    "Trained, professional unarmed security officers providing visible deterrence, access control, and customer service for retail, corporate, and residential properties throughout California.",
  slug: "unarmed-security",
  serviceType: "Unarmed Security",
})
const faqs = serviceFaqs["unarmed-security"]
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
      <ServiceFAQSection faqs={faqs} serviceName="Unarmed Security" />
    </>
  )
}
