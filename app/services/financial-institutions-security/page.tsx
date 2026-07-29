import Client from "./client"
import { ServiceFAQSection } from "@/components/site/ServiceFAQSection"
import { serviceFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Financial Institution Security Guards | Credit Unions",
  description:
    "BSIS-licensed security officers for credit unions, investment firms & wealth management offices in California. Lobby protection, access control & patrol.",
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
