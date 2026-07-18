import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Get a custom security quote from ProForce 1. Serving businesses across California with armed, unarmed & event guards. Call (800) 779-7691 or request online.",
  path: "/contact",
  absoluteTitle: true,
})

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
