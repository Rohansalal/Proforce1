import dynamic from "next/dynamic"
import { Hero } from "@/components/site/hero"
import { TrustBadges } from "@/components/site/trust-badges"

// Below-the-fold components are loaded dynamically
const ServicesGrid = dynamic(() => import("@/components/site/services-grid"), {
  loading: () => <div className="h-96 bg-slate-50 animate-pulse" />
})
const HowWeWork = dynamic(() => import("@/components/site/how-we-work").then(mod => mod.HowWeWork), { ssr: true })
const StatsSection = dynamic(() => import("@/components/site/stats-section").then(mod => mod.StatsSection), { ssr: true })
const OurPartners = dynamic(() => import("@/components/site/our-partners"), { ssr: false })
const FAQSection = dynamic(() => import("@/components/site/FAQSection"), { ssr: true })
const Testimonials = dynamic(() => import("@/components/site/testimonials"), { ssr: true })
const BlogSection = dynamic(() => import("@/components/site/BlogSection"), { ssr: true })

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
