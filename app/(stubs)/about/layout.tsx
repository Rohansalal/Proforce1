import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "About Us",
  description:
    "ProForce 1 is a BSIS-licensed California security company with 20+ years of experience. Discover our mission, values & why we're Anaheim's top-rated guard service.",
  path: "/about",
  absoluteTitle: true,
})

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
