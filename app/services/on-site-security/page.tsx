import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "On-Site Security Guards | 500+ Facilities - ProForce 1",
  description:
    "ProForce 1 protects 500+ facilities statewide \u2014 clients report a 45% drop in incidents. Static guards, patrols & 24/7 coverage. Request a proposal",
  slug: "on-site-security",
  absoluteTitle: true,
  keywords: [
    "on site security guards Orange County",
    "stationed security guards California",
    "dedicated security officers Anaheim",
    "office building security",
    "gated community security",
    "warehouse on site security",
    "corporate campus security",
    "industrial facility security",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "On-Site Security Guard Services",
  description:
    "Dedicated on-site security officers stationed at client properties — offices, gated communities, warehouses, hotels, corporate campuses, and industrial facilities — providing access control, perimeter checks, and visitor management 24/7 across California.",
  slug: "on-site-security",
  serviceType: "On-Site Security",
})

const faqs = serviceFaqs["on-site-security"]
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
      <ServiceFAQSection faqs={faqs} serviceName="On-Site Security" />
    </>
  )
}
