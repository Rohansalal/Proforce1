'use client'

import dynamic from "next/dynamic"

// These components are loaded dynamically to improve performance and Speed Index
const ServicesGrid = dynamic(() => import("@/components/site/services-grid"), {
    loading: () => <div className="h-96 bg-slate-50 animate-pulse" />,
    ssr: true // Keep true for SEO and initial structure
})

const HowWeWork = dynamic(() => import("@/components/site/how-we-work").then(mod => mod.HowWeWork), { ssr: false })
const StatsSection = dynamic(() => import("@/components/site/stats-section").then(mod => mod.StatsSection), { ssr: false })

// OurPartners uses ssr: false because it contains heavy Marquee animations that should only run on the client
const OurPartners = dynamic(() => import("@/components/site/our-partners"), { ssr: false })

const FAQSection = dynamic(() => import("@/components/site/FAQSection"), { ssr: false })
const Testimonials = dynamic(() => import("@/components/site/testimonials"), { ssr: false })
const BlogSection = dynamic(() => import("@/components/site/BlogSection"), { ssr: false })

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
