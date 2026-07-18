import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Security Insights and News",
  description:
    "Read practical ProForce 1 guidance on security operations, event safety, patrol strategy, compliance, training, technology, and risk planning.",
  path: "/blog",
})

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children
}
