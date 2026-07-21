import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "School Security Guards | 150+ Schools Protected | ProForce 1",
  description:
    "150+ schools trust ProForce 1 for campus security \u2014 one district saw a 70% drop in incidents. De-escalation trained, background-checked officers statewide",
  slug: "school-campus-security",
  absoluteTitle: true,
  keywords: [
    "school security guards California",
    "campus security Orange County",
    "K-12 school security",
    "college campus security California",
    "private school security",
    "after school security guards",
    "university security Anaheim",
    "school resource officer alternative",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "School & Campus Security Services",
  description:
    "Background-checked, de-escalation trained security officers for K-12 schools, private schools, colleges, and after-school programs across California. Visitor screening, perimeter patrols, and emergency response.",
  slug: "school-campus-security",
  serviceType: "School Security",
})
const faqs = serviceFaqs["school-campus-security"]
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
      <ServiceFAQSection faqs={faqs} serviceName="School and Campus Security" />
    </>
  )
}
