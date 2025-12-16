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
    position: "Manager",
    company: "Retail Group"
  }
]

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", bounce: 0.4, duration: 0.8 } 
  },
}

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-20 left-10 text-slate-100 font-serif text-[300px] leading-none opacity-40 select-none -z-10 animate-in fade-in zoom-in duration-1000">
        "
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Trusted by Industry Leaders
            </h2>
            
            {/* Star Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-full mb-6 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-700 ml-2">4.9/5 Rating</span>
            </div>

            <p className="text-lg text-slate-500 font-medium">
              See why Fortune 500 companies rely on ProForce 1 for their critical security needs.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid with Animations */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants as any}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 hover:-translate-y-2 transition-all duration-300 relative group"
            >
              {/* Top Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-red-700 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Quote Icon */}
              <div className="mb-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                <Quote className="w-8 h-8 text-red-600 fill-red-600" />
              </div>

              {/* Quote Text */}
              <p className="text-slate-600 mb-8 leading-relaxed text-lg font-medium relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xl text-slate-500 group-hover:bg-red-50 group-hover:text-red-600 transition-colors duration-300">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base">{testimonial.name}</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

// THIS LINE FIXES THE ERROR:
export default Testimonials;