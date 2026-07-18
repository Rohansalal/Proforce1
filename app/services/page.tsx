import Client from "./client"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Security Guard Services California | Armed & Unarmed Security",
  description:
    "Professional security guard services in California for businesses, events, construction sites, hospitals, and more. Armed, unarmed, patrol, and fire watch solutions.",
  path: "/services",
  absoluteTitle: true,
  keywords: [
    "security guard services Anaheim",
    "security services California",
    "security company Orange County",
    "security guard company Anaheim",
    "California security services",
    "BSIS licensed security",
    "private security California",
  ],
})

const SERVICE_LIST: Array<{ name: string; slug: string }> = [
  { name: "Armed Security", slug: "armed-security" },
  { name: "Unarmed Security", slug: "unarmed-security" },
  { name: "Event Security", slug: "event-security" },
  { name: "Mobile Patrol Security", slug: "mobile-patrol-security" },
  { name: "Construction Security", slug: "construction-security" },
  { name: "Fire Watch Security", slug: "fire-watch-security" },
  { name: "Executive Protection", slug: "executive-protection" },
  { name: "Hospital Security", slug: "hospital-security" },
  { name: "Bank Security", slug: "bank-security" },
  { name: "Financial Institutions Security", slug: "financial-institutions-security" },
  { name: "High-Rise Building Security", slug: "high-rise-building-security" },
  { name: "School & Campus Security", slug: "school-campus-security" },
  { name: "Shopping Center Security", slug: "shopping-center-security" },
  { name: "Retail Security", slug: "retail-centers-security" },
  { name: "On-Site Security", slug: "on-site-security" },
  { name: "Loss Prevention", slug: "loss-prevention-security" },
  { name: "Factory & Warehouse Security", slug: "factories-storage-security" },
]

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Security Services Offered by ProForce 1 Protection Services",
  itemListElement: SERVICE_LIST.map(({ name, slug }, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name,
    url: `https://proforce1protection.com/services/${slug}`,
  })),
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Client />
    </>
  )
}
