import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Shopping Center & Mall Security in Orange County",
  description:
    "Professional shopping center security guards across California. Loss prevention, customer service, mobile patrols & after-hours protection for malls, lifestyle centers & retail plazas.",
  slug: "shopping-center-security",
  keywords: [
    "shopping center security Orange County",
    "mall security guards California",
    "retail plaza security",
    "lifestyle center security",
    "shopping mall loss prevention",
    "outdoor mall security",
    "strip mall security guards",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Shopping Center & Mall Security Services",
  description:
    "Uniformed security officers, mobile patrols, and loss prevention specialists for enclosed malls, lifestyle centers, outdoor shopping plazas, and strip malls across California.",
  slug: "shopping-center-security",
  serviceType: "Shopping Center Security",
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
