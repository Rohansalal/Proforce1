import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "On-Site Security Guards in Orange County, CA",
  description:
    "Dedicated on-site security guards across California. Stationed officers for offices, gated communities, warehouses, hotels, corporate campuses & industrial facilities 24/7.",
  slug: "on-site-security",
  keywords: [
    "on site security guards Orange County",
    "stationed security guards California",
    "dedicated security officers Anaheim",
    "office building security",
    "gated community security",
    "warehouse on site security",
    "corporate campus security",
    "industrial facility security",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "On-Site Security Guard Services",
  description:
    "Dedicated on-site security officers stationed at client properties — offices, gated communities, warehouses, hotels, corporate campuses, and industrial facilities — providing access control, perimeter checks, and visitor management 24/7 across California.",
  slug: "on-site-security",
  serviceType: "On-Site Security",
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
