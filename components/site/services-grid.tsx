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
    <section className="bg-slate-50 py-24 md:py-32 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-3xl relative">
            <div className="absolute -left-6 top-0 w-1 h-full bg-red-600 rounded-full hidden md:block" />
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs mb-3 block pl-0 md:pl-0">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Elite security solutions <br />
              <span className="text-slate-400">security for your industry.</span>
            </h2>
          </div>

          <div className="hidden md:block">
            {/* LINK ADDED HERE FOR DESKTOP */}
            <Link href="/services">
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-red-600 hover:text-red-600 hover:bg-red-50 transition-all rounded-full px-8">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* --- Grid Layout --- */}
        <motion.div
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants} className="h-full">
              <Link
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100"
              >

                {/* Image Area */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.backgroundImage}
                    alt={service.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 618px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500" />
                </div>

                {/* Overlapping Icon */}
                <div className="absolute top-44 left-8 z-10">
                  <div className="bg-red-600 text-white p-4 rounded-2xl shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="pt-7 pb-8 px-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                      {service.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-red-600 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Modern Pill Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-50 text-slate-600 border border-slate-100 group-hover:border-red-100 group-hover:bg-red-50/50 group-hover:text-red-700 transition-colors">
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
            <Button className="w-full bg-slate-900 text-white hover:bg-red-700 py-6 rounded-xl text-lg font-semibold shadow-lg">
              View Full Catalog
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default ServicesGrid;