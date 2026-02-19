import { Hero } from "@/components/site/hero"
import { TrustBadges } from "@/components/site/trust-badges"
import { HomeDynamicSections } from "@/components/site/HomeDynamicSections"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <HomeDynamicSections />
    </>
  )
}
