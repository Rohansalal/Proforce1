import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Event Security Services in Anaheim & California",
  description:
    "Professional event security in Anaheim, Orange County & Los Angeles. Crowd control, VIP protection, access management & emergency response for concerts, weddings, festivals & corporate events.",
  slug: "event-security",
  keywords: [
    "event security Anaheim",
    "event security guards California",
    "concert security Los Angeles",
    "wedding security guards Orange County",
    "corporate event security",
    "festival security California",
    "private event security guards",
    "convention security Anaheim",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Event Security Services",
  description:
    "Licensed event security officers providing crowd control, VIP protection, access management, and emergency response for concerts, festivals, weddings, conventions, and corporate events throughout California.",
  slug: "event-security",
  serviceType: "Event Security",
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
