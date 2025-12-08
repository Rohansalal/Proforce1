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

"use client"

import Link from "next/link"
import { ArrowRight, Building2, Flame, HeartPulse, ShoppingBag, Landmark, Ticket, CheckCircle2 } from "lucide-react"

// --- Configuration Data ---
const services = [
  { 
    id: 1,
    title: "High Rise Building Security", 
    icon: Building2, // Lucide Icon Component
    backgroundImage: "/Services/high-rise-security.jpg",
    description: "Comprehensive security solutions for skyscrapers and multi-story buildings with advanced access control.",
    features: ["24/7 Lobby Monitoring", "Elevator Access Control", "CCTV Surveillance", "Emergency Response"]
  },
  { 
    id: 2,
    title: "Fire Watch Services", 
    icon: Flame,
    backgroundImage: "/Services/fire-watch.jpg",
    description: "Professional fire watch personnel to protect your property during fire system impairments or high-risk periods.",
    features: ["Certified Fire Guards", "Fire Safety Checks", "Compliance Reporting", "24/7 Coverage"]
  },
  { 
    id: 3,
    title: "Hospital Security", 
    icon: HeartPulse,
    backgroundImage: "/Services/hospital-security.jpg",
    description: "Specialized security for healthcare facilities ensuring patient safety and protecting medical staff.",
    features: ["Patient Safety", "Access Control", "ER Security", "De-escalation Experts"]
  },
  { 
    id: 4,
    title: "Shopping Center Security", 
    icon: ShoppingBag,
    backgroundImage: "/Services/shopping-center-security.jpg",
    description: "Retail security solutions to prevent theft, ensure customer safety, and maintain orderly business operations.",
    features: ["Loss Prevention", "Customer Safety", "Parking Lot Patrol", "Incident Response"]
  },
  { 
    id: 5,
    title: "Bank & Financial Security", 
    icon: Landmark,
    backgroundImage: "/Services/bank-security.jpg",
    description: "High-level security for financial institutions with armed protection and advanced surveillance systems.",
    features: ["Armed Protection", "Vault Security", "Alarm Response", "Customer Escort"]
  },
  { 
    id: 6,
    title: "Event Security", 
    icon: Ticket,
    backgroundImage: "/gallery/command-center-1.jpg",
    description: "Professional event security management for concerts, conferences, and public gatherings of all sizes.",
    features: ["Crowd Management", "VIP Protection", "Access Screening", "Emergency Planning"]
  },
]

export function ServicesGrid() {
  return (
    // CHANGED: Background to white (bg-white)
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Security Solutions Tailored <span className="text-red-600">For You</span>
          </h2>
          <p className="text-lg text-slate-600">
            From armed and unarmed officers to specialized fire watch and mobile patrols—we provide a one-stop destination for all your security needs.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative h-[450px] w-full overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-slate-900"
            >
              {/* 1. Background Image (Zooms on hover) */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              />
              
              {/* 2. Dark Gradient Overlay (Always visible for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-95" />

              {/* 3. Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                {/* Icon & Title Wrapper (Moves up on hover) */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-white shadow-lg">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Hidden Details (Reveals on hover) */}
                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Feature List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs font-medium text-white/90">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-red-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link Button */}
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-sm font-bold text-red-500 hover:text-red-400 transition-colors uppercase tracking-wide"
                  >
                    Explore Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-white font-bold hover:bg-red-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            View Full Service Catalog
          </Link>
        </div>

      </div>
    </section>
  )
}