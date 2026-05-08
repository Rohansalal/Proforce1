import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Retail Security Guards in Anaheim & California",
  description:
    "Loss-prevention focused retail security across California. Uniformed and plainclothes officers protecting boutiques, big-box stores, jewelry retailers, dispensaries & luxury brands.",
  slug: "retail-centers-security",
  keywords: [
    "retail security guards California",
    "retail security Anaheim",
    "loss prevention guards Orange County",
    "jewelry store security",
    "luxury retail security",
    "big box store security",
    "dispensary security guards California",
    "plainclothes security retail",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Retail Security Services",
  description:
    "Uniformed and plainclothes retail security officers focused on theft deterrence, customer service, and loss prevention for boutiques, big-box stores, jewelry retailers, dispensaries, and luxury brands across California.",
  slug: "retail-centers-security",
  serviceType: "Retail Security",
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
