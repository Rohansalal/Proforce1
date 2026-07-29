"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { homepageFaqs } from "@/lib/faqs";
import { FaqAnswer } from "@/components/site/FaqAnswer";
import { linkifyFaqAnswers } from "@/lib/faq-links";

export function FAQSection() {
  const answers = linkifyFaqAnswers(homepageFaqs.map((faq) => faq.answer), "/");

  return (
    <section className="pt-10 pb-20 lg:pt-16 lg:pb-32 bg-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[425px_1fr] gap-6 lg:gap-8 items-stretch">

          {/* Left Column: Header Card */}
          <div className="bg-red-700 rounded-sm p-8 lg:p-12 pb-20 relative overflow-hidden min-h-[400px] flex flex-col justify-start shadow-xl shadow-red-900/10">
            {/* Large FAQ Watermark Background Text */}
            <div
              className="absolute pointer-events-none select-none tracking-tighter"
              style={{
                left: '-10px',
                bottom: '-40px',
                color: 'rgba(255, 255, 255, 0.07)',
                fontSize: '240px',
                fontFamily: 'Inter',
                fontWeight: '900',
                lineHeight: '1',
              }}
            >
              FAQ
            </div>

            <div className="relative z-10">
              <h2 className="text-white text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[1.1] mb-6">
                Frequently Asked <br />Questions
              </h2>
              <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-[320px]">
                Everything you need to know about working with ProForce 1 Protection Services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-red-700 transition-colors font-bold uppercase tracking-[0.15em] text-sm px-8 py-4 rounded-sm shadow-md"
              >
                Ask us a question
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-6 h-full content-start">
            {homepageFaqs.map((faq, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={faq.question}
                className="bg-slate-50 rounded-sm p-6 lg:p-8 flex flex-col justify-start border border-slate-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 group"
              >
                <h3 className="text-slate-900 text-lg font-black uppercase tracking-tight mb-4 group-hover:text-red-700 transition-colors">
                  {faq.question}
                </h3>
                <FaqAnswer
                  segments={answers[index]}
                  className="text-slate-600 text-sm font-medium leading-relaxed"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQSection;
