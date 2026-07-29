import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Bank Security Guards | 100+ Branches Secured -  ProForce 1",
  description:
    "ProForce 1 secures 100+ bank branches statewide \u2014 clients report a 60% drop in incidents. Armed guards, ATM patrols & FDIC-compliant protection. Free quote.",
  slug: "financial-institutions-security",
  absoluteTitle: true,
  keywords: [
    "financial institution security California",
    "credit union security guards",
    "investment firm security",
    "wealth management office security",
    "financial services security Anaheim",
    "lobby security guards",
    "access control financial",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Financial Institution Security Services",
  description:
    "Tailored security solutions for financial institutions including credit unions, investment firms, wealth management offices, and lending companies. Licensed armed officers, lobby protection, access control, and after-hours patrol.",
  slug: "financial-institutions-security",
  serviceType: "Financial Institution Security",
})

const faqs = serviceFaqs["financial-institutions-security"]
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
      <ServiceFAQSection faqs={faqs} serviceName="Financial Institutions Security" currentPath="/services/financial-institutions-security" />
    </>
  )
}
