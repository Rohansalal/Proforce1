'use client'

import ServicesGrid from "@/components/site/services-grid"
import { HowWeWork } from "@/components/site/how-we-work"
import { StatsSection } from "@/components/site/stats-section"
import OurPartners from "@/components/site/our-partners"
import FAQSection from "@/components/site/FAQSection"
import Testimonials from "@/components/site/testimonials"
import BlogSection from "@/components/site/BlogSection"

export function HomeDynamicSections() {
    return (
        <>
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
