import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Loss Prevention Officers in California",
  description:
    "Reduce shrinkage and theft with trained loss prevention officers across Orange County and California. Plainclothes & uniformed agents for retail, warehouses & distribution centers.",
  slug: "loss-prevention-security",
  keywords: [
    "loss prevention California",
    "loss prevention officers Orange County",
    "shrinkage reduction security",
    "plainclothes loss prevention agents",
    "retail loss prevention guards",
    "warehouse loss prevention",
    "shoplifting prevention security",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Loss Prevention Services",
  description:
    "Trained loss prevention officers — uniformed and plainclothes — focused on shrinkage reduction, theft deterrence, internal investigations, and apprehension support for retail, warehouse, and distribution operations across California.",
  slug: "loss-prevention-security",
  serviceType: "Loss Prevention",
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
