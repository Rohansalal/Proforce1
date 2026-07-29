import Link from "next/link"
import type { LinkedFaqAnswer } from "@/lib/faq-links"

type FaqAnswerProps = {
  answer: LinkedFaqAnswer
  className?: string
  ctaClassName?: string
}

const LINK_CLASS =
  "font-semibold text-red-700 underline underline-offset-2 transition-colors hover:text-red-800"

const CTA_CLASS =
  "inline-flex items-center gap-1 text-sm font-bold text-red-700 transition-colors hover:text-red-800"

export function FaqAnswer({ answer, className, ctaClassName }: FaqAnswerProps) {
  const { segments, ctas } = answer

  return (
    <>
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

      {ctas.length > 0 && (
        <p className={ctaClassName}>
          {ctas.map((cta) => (
            <Link key={cta.href} href={cta.href} className={CTA_CLASS}>
              {cta.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          ))}
        </p>
      )}
    </>
  )
}

export default FaqAnswer
