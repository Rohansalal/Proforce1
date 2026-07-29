import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Loss Prevention Officers | 30%+ Shrinkage Reduction - ProForce 1",
  description:
    "ProForce 1's LP officers saved one retailer $250,000/year and cut shrinkage 45%. Plainclothes & uniformed agents for retail & warehouses statewide.",
  slug: "loss-prevention-security",
  absoluteTitle: true,
  keywords: [
    "loss prevention California",
    "loss prevention officers Orange County",
    "shrinkage reduction security",
    "plainclothes loss prevention agents",
    "retail loss prevention guards",
    "warehouse loss prevention",
    "shoplifting prevention security",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Loss Prevention Services",
  description:
    "Trained loss prevention officers — uniformed and plainclothes — focused on shrinkage reduction, theft deterrence, internal investigations, and apprehension support for retail, warehouse, and distribution operations across California.",
  slug: "loss-prevention-security",
  serviceType: "Loss Prevention",
})
const faqs = serviceFaqs["loss-prevention-security"]
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
      <ServiceFAQSection faqs={faqs} serviceName="Loss Prevention" currentPath="/services/loss-prevention-security" />
    </>
  )
}
