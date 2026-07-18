import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Contact ProForce 1 for Security Services",
  description:
    "Contact ProForce 1 for a security assessment, service quote, or 24/7 dispatch support in Anaheim, Orange County, Los Angeles, and across California.",
  path: "/contact",
})

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
