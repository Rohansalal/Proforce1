import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Construction Site Security | Monitoring & Night Security",
  description:
    "Protect your project with construction site security, 24/7 monitoring, and construction site night security services to prevent theft, vandalism, and trespassing.",
  slug: "construction-security",
  absoluteTitle: true,
  keywords: [
    "construction site security Anaheim",
    "construction security guards California",
    "construction site security Orange County",
    "equipment theft prevention",
    "jobsite security guards",
    "copper theft prevention California",
    "construction trailer security",
    "build site security",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Construction Site Security Services",
  description:
    "Dedicated construction site security including 24/7 guards, mobile patrols, and surveillance to prevent equipment theft, copper theft, vandalism, and unauthorized access on California job sites.",
  slug: "construction-security",
  serviceType: "Construction Security",
})
const faqs = serviceFaqs["construction-security"]
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
      <ServiceFAQSection faqs={faqs} serviceName="Construction Security" />
    </>
  )
}
