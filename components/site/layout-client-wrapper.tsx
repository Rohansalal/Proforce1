'use client'

import dynamic from "next/dynamic"
import { Analytics } from "@vercel/analytics/next"

const CookieConsentBanner = dynamic(
    () => import("@/components/site/CookieConsentBanner").then((mod) => mod.CookieConsentBanner),
    { ssr: false }
)

export function LayoutClientWrapper() {
    return (
        <>
            <Analytics />
            <CookieConsentBanner />
        </>
    )
}
