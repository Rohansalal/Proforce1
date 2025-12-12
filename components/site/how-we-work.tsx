"use client"

import { ClipboardList, FileText, UserCheck, MessageCircle, TrendingUp, CheckCircle2, Shield } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function HowWeWork() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effect for the background text
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200])

  const steps = [
    {
      title: "Needs Assessment",
      icon: <ClipboardList className="w-6 h-6" />,
      description: "We deep-dive into your specific risks, culture, and operational requirements.",
      step: "01"
    },
    {
      title: "Custom Plan",
      icon: <FileText className="w-6 h-6" />,
      description: "Tailored protocols covering post orders, tech integration, and emergency response.",
      step: "02"
    },
    {
      title: "Guard Deployment",
      icon: <UserCheck className="w-6 h-6" />,
      description: "BSIS-licensed officers selected to match your specific site profile.",
      step: "03"
    },
    {
      title: "Communication",
      icon: <MessageCircle className="w-6 h-6" />,
      description: "Digital reports, GPS patrol logs, and regular management check-ins.",
      step: "04"
    },
    {
      title: "Improvement",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Constant review of performance data to elevate your protection strategies.",
      step: "05"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, bounce: 0.4, duration: 0.8 }
    },
  }

  return (
    <div className="font-sans overflow-hidden">
      
      {/* =========================================
          PART 1: THE PROCESS (Dark Background)
         ========================================= */}
      <section className="relative py-20 bg-slate-950 overflow-hidden text-white">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative z-20 container mx-auto px-4 lg:px-6">
          {/* Header */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* <span className="text-red-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-4 block">Our Methodology</span> */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-6">
            The ProForce1 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Process Methodology</span>
              </h2>
            </motion.div>
          </div>

          {/* CHANGED: Grid Layout 
             - grid-cols-1 (Mobile)
             - md:grid-cols-2 (Tablet)
             - lg:grid-cols-5 (Desktop - All in one line)
          */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                // Removed fixed widths, allowing grid to handle sizing
                className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.05] hover:border-red-500/30 transition-all duration-500 flex flex-col"
              >
                <div className="absolute top-2 right-4 text-5xl font-black text-white/[0.03] group-hover:text-red-500/[0.05] transition-colors duration-500 select-none">
                  {step.step}
                </div>
                <div className="relative w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-500">
                  {step.icon}
                </div>
                {/* Titles slightly smaller to fit 5 in a row */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-red-400 transition-colors whitespace-nowrap lg:whitespace-normal">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                  {step.description}
                </p>
                <div className="mt-4 w-8 h-0.5 bg-red-600/30 group-hover:w-full group-hover:bg-red-600 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          PART 2: WHY CHOOSE US (Redesigned)
         ========================================= */}
      <section ref={containerRef} className="relative py-24 md:py-40 bg-white overflow-hidden">
        
        {/* BIG LETTER BACKGROUND EFFECT (Parallax) */}
        <motion.div 
          style={{ y: yText }}
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden"
        >
          <span className="text-[15vw] md:text-[20vw] font-black text-slate-100 uppercase leading-none opacity-60 select-none whitespace-nowrap">
            Why Us
          </span>
        </motion.div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 text-white text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-lg shadow-red-600/20">
                <Shield className="w-3 h-3 fill-current" />
                Why Choose Us
              </div>
              
              {/* Main Heading */}
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tight">
                INTEGRITY.<br/>
                HONESTY.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  SAFETY.
                </span>
              </h2>

              {/* Text Blocks */}
              <div className="space-y-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                <p>
                  Our mission is simple: <span className="text-slate-900 font-bold">Excellent service that aligns with your needs.</span> We go above and beyond the contract to ensure you are provided with professionalism, integrity, and honesty.
                </p>
                <p>
                  We believe true security comes from close relationships—both with our personnel and our clients. Our team is trained not just in defense, but in service.
                </p>
              </div>

              {/* Stats / Proof */}
              <div className="mt-10 pt-10 border-t border-slate-100 flex gap-12">
                <div>
                   <p className="text-4xl font-black text-slate-900">24/7</p>
                   <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Availability</p>
                </div>
                <div>
                   <p className="text-4xl font-black text-slate-900">100%</p>
                   <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mt-1">Compliance</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Image with Hover Effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Image Container */}
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                 <Image 
                   src="/gallery/command-center-1.jpg" 
                   alt="Security Team Meeting" 
                   fill 
                   className="object-cover transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-500" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}