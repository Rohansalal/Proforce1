'use client'

import dynamic from "next/dynamic"

import ServicesGrid from "@/components/site/services-grid"

const HowWeWork = dynamic(() => import("@/components/site/how-we-work").then(mod => mod.HowWeWork))
const StatsSection = dynamic(() => import("@/components/site/stats-section").then(mod => mod.StatsSection))
const OurPartners = dynamic(() => import("@/components/site/our-partners"))
const FAQSection = dynamic(() => import("@/components/site/FAQSection"))
const Testimonials = dynamic(() => import("@/components/site/testimonials"))
const BlogSection = dynamic(() => import("@/components/site/BlogSection"))

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
