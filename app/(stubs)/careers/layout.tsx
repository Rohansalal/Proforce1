import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Join ProForce 1 | Hiring Armed & Unarmed Guards CA",
  description:
    "Now hiring: Armed, Unarmed, Event & Mobile Patrol security guards across California. Join ProForce 1's trusted team \u2014 competitive pay, apply online today.",
  path: "/careers",
  absoluteTitle: true,
})

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children
}
