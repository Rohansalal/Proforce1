"use client"

import { useInView } from "react-intersection-observer"
import { ClipboardCheck, ShieldCheck, UserCheck, Activity, ArrowRight, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function HowWeWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      title: "Security Assessment",
      icon: <ClipboardCheck className="w-8 h-8" />,
      description: "We conduct a comprehensive risk analysis of your premises to identify vulnerabilities and specific security requirements.",
      step: "01"
    },
    {
      title: "Strategic Planning",
      icon: <Shield className="w-8 h-8" />,
      description: "Our experts design a custom tailored security protocol including post orders, patrol routes, and technology integration.",
      step: "02"
    },
    {
      title: "Guard Deployment",
      icon: <UserCheck className="w-8 h-8" />,
      description: "BSIS-licensed, highly trained officers are briefed and deployed with uniform standards and tracking equipment.",
      step: "03"
    },
    {
      title: "Active Monitoring",
      icon: <Activity className="w-8 h-8" />,
      description: "24/7 supervision, GPS tracking of patrols, and real-time digital reporting ensure consistent performance.",
      step: "04"
    }
  ]

  return (
    <section ref={ref} className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* Background Tech Mesh - Subtle */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 border border-red-500/30 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            The ProForce <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Process</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We don't just send guards; we implement a complete security lifecycle designed to adapt to your changing environment.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-900/50 to-transparent -z-10" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                "group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05] hover:border-red-500/30",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Background Large Number */}
              <div className="absolute top-2 right-4 text-8xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-red-500/[0.05] transition-colors duration-500">
                {step.step}
              </div>

              {/* Icon Bubble */}
              <div className="relative w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:shadow-red-500/20 group-hover:border-red-500/50 transition-all duration-500">
                {step.icon}
                {/* Red dot connector on icon */}
                <div className="absolute -right-1 -top-1 w-3 h-3 bg-red-600 rounded-full border-2 border-slate-900 lg:hidden"></div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300">
                {step.description}
              </p>

              {/* Bottom Decorative Line */}
              <div className="mt-6 w-12 h-0.5 bg-red-600/30 group-hover:w-full group-hover:bg-red-600 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={cn(
            "mt-20 text-center transition-all duration-700 delay-700",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="inline-flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 p-2 pl-8 rounded-full shadow-2xl">
            <div className="flex flex-col items-start">
               <span className="text-white font-bold text-lg">Secure your facility today</span>
               <span className="text-slate-400 text-xs uppercase tracking-widest">Get a free consultation</span>
            </div>
            
            <Link 
              href="/contact" 
              className="group flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]"
            >
              Start Assessment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  )
}