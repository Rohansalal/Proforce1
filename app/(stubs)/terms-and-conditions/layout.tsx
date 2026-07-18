import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Terms and Conditions",
  description:
    "Review the terms and conditions governing use of the ProForce 1 Protection Services website and services.",
  path: "/terms-and-conditions",
})

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children
}
