import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Armed Security Guard Services | Trained Armed Security Officers",
  description:
    "Protect your people and property with licensed armed security guards and experienced armed security officers. Reliable protection for businesses and events.",
  slug: "armed-security",
  absoluteTitle: true,
  keywords: [
    "armed security guards Anaheim",
    "armed security California",
    "armed security guard company Orange County",
    "BSIS armed security",
    "jewelry store armed security",
    "bank armed security guards",
    "hotel armed security",
    "armed security services Los Angeles",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Armed Security Guard Services",
  description:
    "Licensed, BSIS-certified armed security officers protecting high-value retail, financial institutions, hospitality, and corporate environments throughout California.",
  slug: "armed-security",
  serviceType: "Armed Security",
})
const faqs = serviceFaqs["armed-security"]
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
      <ServiceFAQSection faqs={faqs} serviceName="Armed Security" />
    </>
  )
}
