import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Mobile Patrol Security Services | 24/7 Patrol Guards California",
  description:
    "Protect your property with 24/7 mobile patrol security services. Fast response, visible patrols, GPS reporting, and trained security officers across California.",
  slug: "mobile-patrol-security",
  absoluteTitle: true,
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
