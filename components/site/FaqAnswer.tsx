import Link from "next/link"
import type { FaqAnswerSegment } from "@/lib/faq-links"

type FaqAnswerProps = {
  segments: FaqAnswerSegment[]
  className?: string
}

const LINK_CLASS =
  "font-semibold text-red-700 underline underline-offset-2 transition-colors hover:text-red-800"

export function FaqAnswer({ segments, className }: FaqAnswerProps) {
  return (
    <p className={className}>
      {segments.map((segment, index) => {
        if (!segment.href) return <span key={index}>{segment.text}</span>

        // tel: and other non-routed schemes need a plain anchor.
        if (!segment.href.startsWith("/")) {
          return (
            <a key={index} href={segment.href} className={LINK_CLASS}>
              {segment.text}
            </a>
          )
        }

        return (
          <Link key={index} href={segment.href} className={LINK_CLASS}>
            {segment.text}
          </Link>
        )
      })}
    </p>
  )
}

export default FaqAnswer
