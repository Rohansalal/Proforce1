import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Construction Site Security in Anaheim & California",
  description:
    "Construction site security guards across Orange County & California. Prevent theft, vandalism, copper & equipment loss with 24/7 patrols, mobile surveillance & on-site officers.",
  slug: "construction-security",
  keywords: [
    "construction site security Anaheim",
    "construction security guards California",
    "construction site security Orange County",
    "equipment theft prevention",
    "jobsite security guards",
    "copper theft prevention California",
    "construction trailer security",
    "build site security",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Construction Site Security Services",
  description:
    "Dedicated construction site security including 24/7 guards, mobile patrols, and surveillance to prevent equipment theft, copper theft, vandalism, and unauthorized access on California job sites.",
  slug: "construction-security",
  serviceType: "Construction Security",
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
