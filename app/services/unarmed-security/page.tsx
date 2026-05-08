import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Unarmed Security Guards in Anaheim & Orange County",
  description:
    "Professional unarmed security guards across Anaheim, Orange County & California. BSIS-licensed officers for retail, corporate, residential, and commercial properties. Get a free quote today.",
  slug: "unarmed-security",
  keywords: [
    "unarmed security guards Anaheim",
    "unarmed security guards Orange County",
    "unarmed security California",
    "uniformed security guards",
    "commercial security guards Anaheim",
    "residential security California",
    "corporate security guards Orange County",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Unarmed Security Guard Services",
  description:
    "Trained, professional unarmed security officers providing visible deterrence, access control, and customer service for retail, corporate, and residential properties throughout California.",
  slug: "unarmed-security",
  serviceType: "Unarmed Security",
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
