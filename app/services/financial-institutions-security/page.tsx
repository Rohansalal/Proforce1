import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Financial Institution Security Services in California",
  description:
    "Specialized security services for credit unions, investment firms, wealth management offices and financial institutions throughout California. Licensed armed officers, access control & lobby protection.",
  slug: "financial-institutions-security",
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Client />
    </>
  )
}
