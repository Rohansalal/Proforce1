import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Armed Security Guards in Anaheim & Orange County",
  description:
    "BSIS-licensed armed security guards in Anaheim, Orange County & California. Protecting jewelry stores, banks, hotels, cannabis dispensaries & high-value properties 24/7. Call (800) 779-7691.",
  slug: "armed-security",
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
