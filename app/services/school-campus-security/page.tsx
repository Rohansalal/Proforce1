import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "School & Campus Security Guards in California",
  description:
    "Trained school and campus security guards across California. K-12 schools, college campuses, private schools & after-school programs. Background-checked, de-escalation certified officers.",
  slug: "school-campus-security",
  keywords: [
    "school security guards California",
    "campus security Orange County",
    "K-12 school security",
    "college campus security California",
    "private school security",
    "after school security guards",
    "university security Anaheim",
    "school resource officer alternative",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "School & Campus Security Services",
  description:
    "Background-checked, de-escalation trained security officers for K-12 schools, private schools, colleges, and after-school programs across California. Visitor screening, perimeter patrols, and emergency response.",
  slug: "school-campus-security",
  serviceType: "School Security",
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
