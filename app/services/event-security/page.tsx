import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Event Security Guards Anaheim | Wedding & Party Security",
  description:
    "Hire professional event security guards in Anaheim for weddings, private parties, and special events. Trusted protection to keep guests safe and secure.",
  slug: "event-security",
  absoluteTitle: true,
  keywords: [
    "event security Anaheim",
    "event security guards California",
    "concert security Los Angeles",
    "wedding security guards Orange County",
    "corporate event security",
    "festival security California",
    "private event security guards",
    "convention security Anaheim",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Event Security Services",
  description:
    "Licensed event security officers providing crowd control, VIP protection, access management, and emergency response for concerts, festivals, weddings, conventions, and corporate events throughout California.",
  slug: "event-security",
  serviceType: "Event Security",
})
const faqs = serviceFaqs["event-security"]
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
      <ServiceFAQSection faqs={faqs} serviceName="Event Security" />
    </>
  )
}
