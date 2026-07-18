import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Hospital Security Services | Healthcare Security Guards California",
  description:
    "Protect patients, staff, and visitors with professional hospital security services. Trained healthcare security guards ensure safety, access control, and rapid response.",
  slug: "hospital-security",
  absoluteTitle: true,
  keywords: [
    "hospital security guards California",
    "hospital security Orange County",
    "healthcare security Anaheim",
    "ER security guards",
    "behavioral health security",
    "medical campus security",
    "clinic security California",
    "HIPAA aware security guards",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Hospital & Healthcare Security Services",
  description:
    "Specialized hospital and healthcare security officers trained in de-escalation, HIPAA awareness, behavioral health response, and emergency room protocols. Serving hospitals, clinics, urgent care, and medical campuses across California.",
  slug: "hospital-security",
  serviceType: "Hospital Security",
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
