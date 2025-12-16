
import { Hero } from "@/components/site/hero"
import { TrustBadges } from "@/components/site/trust-badges"
import { ServicesGrid } from "@/components/site/services-grid"
import { HowWeWork } from "@/components/site/how-we-work"
import { StatsSection } from "@/components/site/stats-section"
import OurPartners from "@/components/site/our-partners"
import BlogSection from "@/components/site/BlogSection"
import FAQSection from "@/components/site/FAQSection"
import Testimonials from "@/components/site/testimonials"
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <HowWeWork />
      <StatsSection />
      <OurPartners />
       <FAQSection />
       <Testimonials />
       
       <BlogSection />
    </>
  )
}