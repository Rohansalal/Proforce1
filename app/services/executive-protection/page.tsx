import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Executive Protection & Bodyguard Services in California",
  description:
    "Discreet executive protection and bodyguard services across California. Former law enforcement & military officers protecting VIPs, executives, celebrities & high-profile clients in Los Angeles, Orange County & beyond.",
  slug: "executive-protection",
  keywords: [
    "executive protection California",
    "bodyguard services Los Angeles",
    "executive protection Orange County",
    "VIP security California",
    "celebrity protection",
    "private bodyguard Anaheim",
    "personal security detail",
    "close protection officers",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Executive Protection Services",
  description:
    "Discreet, highly trained executive protection officers — many with law enforcement and military backgrounds — providing personal protection, secure transportation, and threat assessment for VIPs, executives, and high-profile clients across California.",
  slug: "executive-protection",
  serviceType: "Executive Protection",
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
