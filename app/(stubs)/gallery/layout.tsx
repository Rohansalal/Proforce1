import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Security Services Gallery",
  description:
    "View ProForce 1 security teams, patrol operations, event coverage, construction security, fire watch, and specialized protection services across California.",
  path: "/gallery",
})

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children
}
