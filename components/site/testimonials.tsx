"use client"

import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

// --- TESTIMONIALS DATA ---
const testimonials = [
  {
    quote: "ProForce transformed our security infrastructure. Their AI-powered systems prevented three major incidents in the first month alone.",
    name: "Sarah Johnson",
    position: "CSO",
    company: "TechCorp Inc."
  },
  {
    quote: "The professionalism of their personnel is unmatched. Our board feels safer knowing ProForce handles our executive protection.",
    name: "Michael Chen",
    position: "Director",
    company: "Global Enterprises"
  },
  {
    quote: "From assessment to implementation, their team delivered beyond expectations. True partners in operational security.",
    name: "David Martinez",
    position: "Operations Manager",
    company: "Retail Group"
  },
  {
    quote: "Highly responsive and reliable. ProForce 1's guards are always on time and maintain a high standard of vigilance.",
    name: "Emily Davis",
    position: "Facility Director",
    company: "Logistics Hub"
  },
  {
    quote: "The best security service we've ever hired. They tailored their approach to fit our unique industry needs perfectly.",
    name: "James Wilson",
    position: "CEO",
    company: "Healthcare Partners"
  },
  {
    quote: "Exceptional service! Their proactive approach to risk management has saved our company from numerous potential threats.",
    name: "Linda Rodriguez",
    position: "President",
    company: "Innovative Tech Solutions"
  },
  {
    quote: "I highly recommend ProForce 1. Their team's dedication to our safety and their clear reporting are top-notch.",
    name: "William Thompson",
    position: "Compliance Officer",
    company: "Financial Services Ltd."
  }
]

// Duplicate the array to create a seamless infinite loop
const allTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden font-sans text-white">

      {/* Background Decorative Elements */}
      {/* Background Patterns similar to how-we-work.tsx */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />
      <div className="absolute top-20 left-10 text-white/5 font-serif text-[300px] leading-none opacity-40 select-none -z-10 animate-in fade-in zoom-in duration-1000">
        "
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              Trusted by Industry Leaders
            </h2>

            {/* Star Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 shadow-sm backdrop-blur-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-white ml-2">4.9/5 Rating</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Animation Section */}
      <div className="relative z-10 w-full overflow-hidden flex flex-col items-center">
        {/* Fade gradient edges to disguise loop restart */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-40 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-40 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        <div className="flex w-full overflow-hidden group">
          <motion.div
            className="flex gap-6 px-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
            style={{ willChange: "transform" }}
          /* Adding a hover pause effect directly via CSS is not natively supported by animate.
             However, it loops smoothly when untouched. */
          >
            {allTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[320px] md:w-[400px] flex-shrink-0 bg-white/[0.02] p-8 rounded-3xl border border-white/5 hover:bg-white/[0.05] hover:border-red-500/30 transition-all duration-300 relative group/card backdrop-blur-md"
              >
                {/* Top Gradient Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-red-700 rounded-t-2xl transform scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Quote Icon */}
                <div className="mb-6 opacity-20 group-hover/card:opacity-100 transition-opacity duration-300 flex justify-between items-start">
                  <Quote className="w-8 h-8 text-red-600 fill-red-600" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 mb-8 leading-relaxed text-lg font-medium relative z-10 min-h-[140px]">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xl text-slate-400 group-hover/card:text-red-500 group-hover/card:bg-slate-900 transition-colors duration-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white text-base">{testimonial.name}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;