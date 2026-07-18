import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata({
  title: "ProForce 1 Client Login",
  description:
    "Access the ProForce 1 client portal for security reporting, activity updates, and operational visibility.",
  path: "/client-login",
})

export default function ClientLoginLayout({ children }: { children: ReactNode }) {
  return children
}
