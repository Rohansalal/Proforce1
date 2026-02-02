// "use client"

// import Link from "next/link"

// const services = [
//   { 
//     id: 1,
//     title: "High Rise Building Security", 
//     icon: "🏢",
//     backgroundImage: "/Services/high-rise-security.jpg",
//     description: "Comprehensive security solutions for skyscrapers and multi-story buildings with advanced access control and surveillance systems.",
//     features: ["24/7 Monitoring", "Access Control", "CCTV Systems", "Emergency Response"]
//   },
//   { 
//     id: 2,
//     title: "Fire Watch Services", 
//     icon: "🔥",
//     backgroundImage: "/Services/fire-watch.jpg",
//     description: "Professional fire watch personnel to protect your property during fire system impairments or high-risk periods.",
//     features: ["Certified Guards", "Fire Safety Checks", "Compliance Reporting", "24/7 Coverage"]
//   },
//   { 
//     id: 3,
//     title: "Hospital Security", 
//     icon: "🏥",
//     backgroundImage: "/Services/hospital-security.jpg",
//     description: "Specialized security for healthcare facilities ensuring patient safety and protecting medical staff and equipment.",
//     features: ["Patient Safety", "Access Control", "Emergency Response", "De-escalation Training"]
//   },
//   { 
//     id: 4,
//     title: "Shopping Center Security", 
//     icon: "🛍️",
//     backgroundImage: "/Services/shopping-center-security.jpg",
//     description: "Retail security solutions to prevent theft, ensure customer safety, and maintain orderly business operations.",
//     features: ["Loss Prevention", "Customer Safety", "Parking Patrol", "Incident Response"]
//   },
//   { 
//     id: 5,
//     title: "Bank & Credit Unit Security", 
//     icon: "🏦",
//     backgroundImage: "/Services/bank-security.jpg",
//     description: "High-level security for financial institutions with armed protection and advanced surveillance systems.",
//     features: ["Armed Guards", "Vault Security", "Alarm Response", "Customer Protection"]
//   },
//   { 
//     id: 6,
//     title: "Event Security", 
//     icon: "🎫",
//     backgroundImage: "/gallery/command-center-1.jpg",
//     description: "Professional event security management for concerts, conferences, and public gatherings of all sizes.",
//     features: ["Crowd Control", "VIP Protection", "Access Management", "Emergency Planning"]
//   },
// ]

// export function ServicesGrid() {
//   return (
//     <section className="bg-secondary/60 py-12">
//       <div className="mx-auto max-w-7xl px-4 lg:px-8">
//         <h2 className="text-2xl md:text-3xl font-semibold text-center">
//           A One‑Stop Destination For Security Services
//         </h2>
//         <p className="mt-2 text-center text-muted-foreground max-w-2xl mx-auto">
//           From armed and unarmed officers to mobile patrol and specialized fire watch—tailored security for your site.
//         </p>

//         <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => (
//             <div 
//               key={service.id}
//               className="flip-card h-80 cursor-pointer"
//             >
//               <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
//                 {/* Front of card */}
//                 <div className="flip-card-front absolute inset-0 w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg">
//                   <div 
//                     className="w-full h-full bg-cover bg-center relative"
//                     style={{ backgroundImage: `url(${service.backgroundImage})` }}
//                   >
//                     <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
//                       <div className="text-4xl mb-2" aria-hidden>
//                         {service.icon}
//                       </div>
//                       <h3 className="text-xl font-bold text-white">{service.title}</h3>
//                       <div className="flex items-center justify-between mt-4">
//                         <span className="text-white/80 text-sm">Hover to learn more</span>
//                         <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
//                           <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Back of card */}
//                 <div className="flip-card-back absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-gray-900 to-blue-900 rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
//                     <p className="text-white/80 text-sm mb-4">{service.description}</p>
//                     <ul className="space-y-2">
//                       {service.features.map((feature, index) => (
//                         <li key={index} className="flex items-center text-white/70 text-sm">
//                           <svg className="w-4 h-4 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="flex justify-between items-center pt-4 border-t border-white/20">
//                     <span className="text-white/60 text-sm">Hover to flip back</span>
//                     <Link 
//                       href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
//                       className="text-white hover:text-blue-300 text-sm font-medium transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Read More →
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 text-center">
//           <Link
//             href="/services"
//             className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
//           >
//             View All Services
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }


// "use client"

// import Link from "next/link"
// import { ArrowRight, Building2, Flame, HeartPulse, ShoppingBag, Landmark, Ticket, CheckCircle2 } from "lucide-react"

// // --- Configuration Data ---
// const services = [
//   { 
//     id: 1,
//     title: "High Rise Building Security", 
//     icon: Building2, 
//     backgroundImage: "/Services/high-rise-security.jpg",
//     description: "Comprehensive security solutions for skyscrapers and multi-story buildings with advanced access control.",
//     features: ["24/7 Lobby Monitoring", "Elevator Access Control", "CCTV Surveillance", "Emergency Response"]
//   },
//   { 
//     id: 2,
//     title: "Fire Watch Services", 
//     icon: Flame,
//     backgroundImage: "/Services/fire-watch.jpg",
//     description: "Professional fire watch personnel to protect your property during fire system impairments or high-risk periods.",
//     features: ["Certified Fire Guards", "Fire Safety Checks", "Compliance Reporting", "24/7 Coverage"]
//   },
//   { 
//     id: 3,
//     title: "Hospital Security", 
//     icon: HeartPulse,
//     backgroundImage: "/Services/hospital-security.jpg",
//     description: "Specialized security for healthcare facilities ensuring patient safety and protecting medical staff.",
//     features: ["Patient Safety", "Access Control", "ER Security", "De-escalation Experts"]
//   },
//   { 
//     id: 4,
//     title: "Shopping Center Security", 
//     icon: ShoppingBag,
//     backgroundImage: "/Services/shopping-center-security.jpg",
//     description: "Retail security solutions to prevent theft, ensure customer safety, and maintain orderly business operations.",
//     features: ["Loss Prevention", "Customer Safety", "Parking Lot Patrol", "Incident Response"]
//   },
//   { 
//     id: 5,
//     title: "Bank & Financial Security", 
//     icon: Landmark,
//     backgroundImage: "/Services/bank-security.jpg",
//     description: "High-level security for financial institutions with armed protection and advanced surveillance systems.",
//     features: ["Armed Protection", "Vault Security", "Alarm Response", "Customer Escort"]
//   },
//   { 
//     id: 6,
//     title: "Event Security", 
//     icon: Ticket,
//     backgroundImage: "/gallery/command-center-1.jpg",
//     description: "Professional event security management for concerts, conferences, and public gatherings of all sizes.",
//     features: ["Crowd Management", "VIP Protection", "Access Screening", "Emergency Planning"]
//   },
// ]

// export function ServicesGrid() {
//   return (
//     <section className="bg-white py-20 md:py-28">
//       <div className="mx-auto max-w-7xl px-4 lg:px-8">

//         {/* Section Header */}
//         <div className="text-center mb-16 max-w-3xl mx-auto">
//           <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
//             Security Solutions Tailored <span className="text-orange-600">For You</span>
//           </h2>
//           <p className="text-lg text-slate-600">
//             From armed and unarmed officers to specialized fire watch and mobile patrols—we provide a one-stop destination for all your security needs.
//           </p>
//         </div>

//         {/* Grid Container */}
//         <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => (
//             <div 
//               key={service.id}
//               className="group relative h-auto md:h-[450px] w-full overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-slate-900 flex flex-col md:block"
//             >
//               {/* 1. Background Image (Desktop Only) */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 md:opacity-90 hidden md:block"
//                 style={{ backgroundImage: `url(${service.backgroundImage})` }}
//               />

//               {/* Mobile Image (Visible on top for mobile) */}
//               <div 
//                 className="h-48 w-full bg-cover bg-center md:hidden"
//                 style={{ backgroundImage: `url(${service.backgroundImage})` }}
//               />

//               {/* 2. Gradient Overlay (Orange on Hover for Desktop) */}
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent transition-colors duration-300 md:group-hover:from-orange-900 md:group-hover:via-orange-800/80 md:group-hover:to-orange-900/40 hidden md:block" />

//               {/* 3. Card Content */}
//               <div className="relative p-6 md:p-8 flex flex-col justify-end h-full bg-slate-900 md:bg-transparent md:absolute md:inset-0">

//                 {/* Icon & Title */}
//                 <div className="transform transition-transform duration-500 md:group-hover:-translate-y-2 mb-4 md:mb-0">
//                   <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600 text-white shadow-lg">
//                     <service.icon className="h-6 w-6" />
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
//                     {service.title}
//                   </h3>
//                 </div>

//                 {/* Details (Always visible on Mobile, Reveal on Hover for Desktop) */}
//                 <div className="block md:h-0 md:opacity-0 md:group-hover:h-auto md:group-hover:opacity-100 transition-all duration-500 overflow-hidden">
//                   <p className="text-slate-300 text-sm mb-4 leading-relaxed group-hover:text-white">
//                     {service.description}
//                   </p>

//                   {/* Feature List */}
//                   <ul className="space-y-2 mb-6">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center text-xs font-medium text-white/90">
//                         <CheckCircle2 className="mr-2 h-4 w-4 text-orange-500 md:group-hover:text-white" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Link Button */}
//                   <Link 
//                     href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
//                     className="inline-flex items-center text-sm font-bold text-orange-500 hover:text-orange-400 md:group-hover:text-white transition-colors uppercase tracking-wide"
//                   >
//                     Explore Service <ArrowRight className="ml-2 h-4 w-4" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <Link
//             href="/services"
//             className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-white font-bold hover:bg-orange-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
//           >
//             View Full Service Catalog
//           </Link>
//         </div>

//       </div>
//     </section>
//   )
// }

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
    backgroundImage: "/Services/high-rise-building-security/Homepage2.png  ",
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