import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Mall & Shopping Center Security - ProForce 1",
  description:
    "ProForce 1 protects 50+ malls & shopping centers across California with loss prevention, parking patrols & 24/7 dispatch. Request a mall security proposal",
  slug: "shopping-center-security",
  absoluteTitle: true,
  keywords: [
    "shopping center security Orange County",
    "mall security guards California",
    "retail plaza security",
    "lifestyle center security",
    "shopping mall loss prevention",
    "outdoor mall security",
    "strip mall security guards",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Shopping Center & Mall Security Services",
  description:
    "Uniformed security officers, mobile patrols, and loss prevention specialists for enclosed malls, lifestyle centers, outdoor shopping plazas, and strip malls across California.",
  slug: "shopping-center-security",
  serviceType: "Shopping Center Security",
})

const faqs = serviceFaqs["shopping-center-security"]
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
      <ServiceFAQSection faqs={faqs} serviceName="Shopping Center Security" currentPath="/services/shopping-center-security" />
    </>
  )
}
