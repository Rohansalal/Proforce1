
import { Hero } from "@/components/site/hero"
import { TrustBadges } from "@/components/site/trust-badges"
import { ServicesGrid } from "@/components/site/services-grid"
import { HowWeWork } from "@/components/site/how-we-work"
import { StatsSection } from "@/components/site/stats-section"
import Services from "@/components/site/Serviecs"
import OurPartners from "@/components/site/our-partners"
import BlogSection from "@/components/site/BlogSection"
export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <TrustBadges /> */}
      <ServicesGrid />
      <HowWeWork />
      <StatsSection />
      <Services />
      <OurPartners />
       <BlogSection />
    </>
  )
}