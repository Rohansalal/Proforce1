import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Gallery",
  description:
    "Explore ProForce 1's gallery \u2014 real armed & unarmed guards, K-9 patrols, and event security in action across California. See our BSIS-licensed team at work.",
  path: "/gallery",
  absoluteTitle: true,
})

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return children
}
