import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Security Blog | Expert Tips & Insights - ProForce 1",
  description:
    "Explore ProForce 1's security blog: expert guides on guard operations, event safety, patrol strategy, compliance & training. 17+ articles for CA property owners.",
  path: "/blog",
  absoluteTitle: true,
})

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children
}
