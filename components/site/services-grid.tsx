"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Flame, HeartPulse, ShoppingBag, Landmark, Ticket, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// --- Configuration Data ---
const services = [
  {
    id: 1,
    title: "High Rise building Security",
    icon: Building2,
    backgroundImage: "/Services/high-rise-building-security/Homepage2.png",
    description: "Comprehensive access control and monitoring for skyscrapers and multi-tenant properties.",
    features: ["Lobby Ambassadors", "Elevator Control", "24/7 Monitoring"]
  },
  {
    id: 2,
    title: "Fire Watch Security",
    icon: Flame,
    backgroundImage: "/Services/fire-security/HomePage.png",
    description: "Certified fire guards to protect your property during system impairments or high-risk periods.",
    features: ["Certified Guards", "Compliance Logs", "Rapid Deployment"]
  },
  {
    id: 3,
    title: "Hospital Security",
    icon: HeartPulse,
    backgroundImage: "/Services/hospital-security/Homepage.png",
    description: "Specialized protection ensuring patient safety while maintaining a welcoming environment.",
    features: ["Patient Safety", "ER Security", "Access Management"]
  },
  {
    id: 4,
    title: "Retail Centers Security",
    icon: ShoppingBag,
    backgroundImage: "/Services/retail/retail.jpeg",
    description: "Loss prevention and customer safety solutions that don't disrupt the shopping experience.",
    features: ["Loss Prevention", "Parking Patrol", "Conflict Resolution"]
  },
  {
    id: 5,
    title: "Financial Institutions  Security",
    icon: Landmark,
    backgroundImage: "/Services/financial-institutions-security/service.png",
    description: "High-stakes security with armed protection and advanced surveillance for banks.",
    features: ["Armed Guards", "Vault Security", "Escort Services"]
  },
  {
    id: 6,
    title: "Event Security",
    icon: Ticket,
    backgroundImage: "/Services/event-security/homepage.png", // Fixed lowercase 'h'
    description: "Crowd management and VIP protection for concerts, conferences, and public gatherings.",
    features: ["Crowd Control", "Access Screening", "VIP Protection"]
  },
]

// --- Animation Variants ---
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
    transition: { duration: 0.5 }
  },
}

export function ServicesGrid() {
  return (
    <section className="bg-slate-50 py-24 md:py-32 font-sans overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row md:items-end justify-between mb-15 gap-8"
        >
          <div className="max-w-3xl relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-red-600 rounded-full hidden md:block" />
            <span className="text-red-700 font-black tracking-[0.2em] text-xs mb-3 block pl-0 md:pl-0 uppercase">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1] uppercase">
              Elite Security <br />
              <span className="text-slate-400">For Your Industry</span>
            </h2>
          </div>

          <div className="hidden md:block">
            {/* LINK ADDED HERE FOR DESKTOP */}
            <Link href="/services">
              <Button variant="outline" className="border-2 border-slate-300 text-slate-900 hover:border-red-700 hover:text-white hover:bg-red-700 font-bold uppercase tracking-widest transition-all rounded-sm px-8 h-12 shadow-sm">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* --- Grid Layout --- */}
        <motion.div
          className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <Link
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative flex flex-col h-full bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:-translate-y-1"
              >

                {/* Image Area */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.backgroundImage}
                    alt={service.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 400px, (max-width: 1200px) 400px, 400px"
                    quality={60}
                    priority={service.id <= 2}
                  />
                  {/* <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-900/10 transition-colors duration-500" /> */}
                </div>

                {/* Overlapping Icon */}
                <div className="absolute top-40 left-6 z-30">
                  <div className="bg-[#E60000] text-white p-3.5 md:p-4 rounded-2xl shadow-lg shadow-red-600/40 group-hover:bg-red-700 group-hover:shadow-red-600/50 transition-all duration-300">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="pt-8 pb-6 px-6 flex flex-col flex-grow bg-white relative z-20">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-red-700 transition-colors">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-red-700 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Modern Pill Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-widest bg-slate-100 text-slate-700 group-hover:bg-red-50 group-hover:text-red-800 transition-colors">
                        <ShieldCheck className="w-3 h-3 mr-1.5 opacity-50" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Mobile Button --- */}
        <div className="mt-16 text-center md:hidden">
          {/* LINK ADDED HERE FOR MOBILE */}
          <Link href="/services">
            <Button className="w-full bg-slate-900 text-white hover:bg-red-700 h-14 rounded-sm text-sm uppercase tracking-widest font-bold shadow-lg">
              View Full Catalog
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default ServicesGrid;