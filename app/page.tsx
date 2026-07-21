import { Hero } from "@/components/site/hero"
import { TrustBadges } from "@/components/site/trust-badges"
import { HomeDynamicSections } from "@/components/site/HomeDynamicSections"
import { homepageFaqs } from "@/lib/faqs"
import { buildFaqJsonLd, buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Professional Security Services & Protection",
  description:
    "ProForce 1 provides licensed armed, unarmed, event, mobile patrol, construction, fire watch, and specialized security services across California.",
  path: "/",
  keywords: [
    "security guard company Anaheim",
    "security services California",
    "security guards Orange County",
    "ProForce 1 Protection Services",
  ],
})

const faqJsonLd = buildFaqJsonLd(homepageFaqs)

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustBadges />
      <HomeDynamicSections />
    </>
  )
}
