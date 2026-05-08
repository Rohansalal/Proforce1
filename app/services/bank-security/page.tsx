import Client from "./client"
import { buildServiceMetadata, buildServiceJsonLd } from "@/lib/seo"

export const metadata = buildServiceMetadata({
  title: "Bank Security Guards in Anaheim & California",
  description:
    "Armed and unarmed bank security guards across Orange County & California. BSIS-licensed officers protecting branches, vaults, lobbies, ATMs and cash transports. 24/7 coverage.",
  slug: "bank-security",
  keywords: [
    "bank security guards California",
    "bank security guards Anaheim",
    "armed bank security Orange County",
    "ATM security guards",
    "credit union security",
    "vault security",
    "branch security California",
    "cash transport security",
  ],
})

const jsonLd = buildServiceJsonLd({
  name: "Bank Security Services",
  description:
    "Armed and unarmed BSIS-licensed bank security officers protecting bank branches, credit unions, vaults, ATMs, and lobbies across California with formal cash-handling and emergency response training.",
  slug: "bank-security",
  serviceType: "Bank Security",
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
