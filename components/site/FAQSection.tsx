"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function FAQSection() {
  const faqs = [
    {
      question: "How do you handle emergency situations?",
      answer: "We maintain a 24/7 Global Command Center and rapid response teams. Our protocols are integrated with local law enforcement to handle emergencies efficiently."
    },
    {
      question: "What training do your guards receive?",
      answer: "Beyond standard licensing, our guards undergo a rigorous boot camp covering conflict resolution, advanced first aid (CPR/AED), and tactical defensive driving."
    },
    {
      question: "Are your guards licensed & insured?",
      answer: "Yes, all our security personnel are fully licensed by the state (PPO # 120753), bonded, and comprehensively insured surpassing industry standards."
    },
    {
      question: "Do you offer customized plans?",
      answer: "Absolutely. We reject 'one-size-fits-all.' We conduct a full threat assessment of your specific site to build a tailored security strategy."
    },
    {
      question: "Can you provide large event security?",
      answer: "Yes. We specialize in high-capacity crowd control, VIP pathing, and perimeter security for gatherings ranging from corporate galas to stadium-sized events."
    },
    {
      question: "How fast can you deploy guards?",
      answer: "With our 24/7 operations and localized dispatch teams across California, we can typically deploy fully equipped officers to your site within hours."
    }
  ];

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
            {faqs.map((faq, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="bg-slate-50 rounded-sm p-6 lg:p-8 flex flex-col justify-start border border-slate-200 hover:border-red-300 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 group"
              >
                <h3 className="text-slate-900 text-lg font-black uppercase tracking-tight mb-4 group-hover:text-red-700 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQSection;