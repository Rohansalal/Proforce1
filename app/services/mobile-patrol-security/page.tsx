import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Mobile Patrol Security in Orange County, CA",
  description:
    "24/7 mobile patrol security across Anaheim, Orange County & Southern California. GPS-tracked patrol vehicles, time-stamped reports, alarm response, vacation checks & lock-up services.",
  slug: "mobile-patrol-security",
  keywords: [
    "mobile patrol Anaheim",
    "mobile patrol services Orange County",
    "mobile patrol security California",
    "vehicle patrol services",
    "alarm response Anaheim",
    "lock up unlock services",
    "GPS tracked patrol",
    "after hours patrol Orange County",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Mobile Patrol Security Services",
  description:
    "GPS-tracked mobile patrol vehicles providing random patrols, alarm response, lock-up checks, and time-stamped reporting across Orange County and Southern California.",
  slug: "mobile-patrol-security",
  serviceType: "Mobile Patrol Security",
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
