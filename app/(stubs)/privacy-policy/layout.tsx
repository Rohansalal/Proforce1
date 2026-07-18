import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Read the ProForce 1 Protection Services privacy policy and learn how personal information is collected, used, protected, and managed.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyLayout({ children }: { children: ReactNode }) {
  return children
}
