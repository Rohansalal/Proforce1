import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Security Guard Careers in California",
  description:
    "Explore security officer, event security, supervisor, and mobile patrol career opportunities with ProForce 1 Protection Services in California.",
  path: "/careers",
})

export default function CareersLayout({ children }: { children: ReactNode }) {
  return children
}
