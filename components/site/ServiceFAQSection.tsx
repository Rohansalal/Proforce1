import { ChevronDown } from "lucide-react"
import type { FaqItem } from "@/lib/faqs"
import { FaqAnswer } from "@/components/site/FaqAnswer"
import { linkifyFaqAnswers } from "@/lib/faq-links"

type ServiceFAQSectionProps = {
  faqs: readonly FaqItem[]
  serviceName?: string
  /** Route this section renders on, used to suppress self-links in answers. */
  currentPath?: string
}

export function ServiceFAQSection({ faqs, serviceName, currentPath }: ServiceFAQSectionProps) {
  const heading = serviceName
    ? `${serviceName} Frequently Asked Questions`
    : "Frequently Asked Questions"

  const answers = linkifyFaqAnswers(faqs, currentPath)

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-red-700">FAQ</p>
          <h2 id="faq-heading" className="text-3xl font-black text-slate-900 sm:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="border-t border-slate-300">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group border-b border-slate-300">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold text-slate-900 marker:content-none hover:text-red-700">
                <span>{faq.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-red-700 transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="pb-6">
                <FaqAnswer
                  answer={answers[index]}
                  className="max-w-4xl pr-10 leading-7 text-slate-600"
                  ctaClassName="flex flex-wrap gap-x-6 gap-y-2 pt-3"
                />
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
