import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Fire Watch Security in California | Title 19 Compliant",
  description:
    "California Title 19 compliant fire watch services in Anaheim, Orange County & beyond. Hot work, sprinkler outage, alarm system & roofing fire watch guards available 24/7. Same-day deployment.",
  slug: "fire-watch-security",
  keywords: [
    "fire watch services California",
    "fire watch security Anaheim",
    "Title 19 fire watch",
    "hot work fire watch",
    "sprinkler outage fire watch",
    "fire alarm system fire watch",
    "roofing fire watch California",
    "fire watch guards Orange County",
    "24 hour fire watch service",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Fire Watch Security Services",
  description:
    "California Title 19 compliant fire watch services for hot work, sprinkler outages, fire alarm impairments, roofing operations, and post-fire watches. Trained fire watch guards available 24/7 across California.",
  slug: "fire-watch-security",
  serviceType: "Fire Watch",
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
