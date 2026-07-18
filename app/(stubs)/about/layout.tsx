import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "About ProForce 1 Protection Services",
  description:
    "Learn about ProForce 1, our licensed California security professionals, operating standards, training, technology, and commitment to dependable protection.",
  path: "/about",
})

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
