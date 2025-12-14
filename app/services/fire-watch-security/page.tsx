"use client"

import Image from "next/image"
import { useState, ChangeEvent, FormEvent } from "react"
import { motion } from "framer-motion"
import { 
  Flame, Phone, Mail, Globe, 
  Users, Award, Clock, MapPin, Camera, Radio, Star,
  Building, Truck, Factory,
  ShoppingBag, Building2, 
  Siren, FileText, AlertTriangle,
  BadgeCheck, ThumbsUp, ChevronRight,
  ShieldCheck, Cpu, TrendingUp,
  Construction, School, Warehouse,  
  FileCheck, Shield, ClipboardCheck,
  Eye, // Added missing import
  CheckCircle2, // Added missing import
  Hotel // Added missing import
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/hero/fire-watch.jpg",
  vehicle: "/security-guard-patrol-vehicle-at-night.jpg",
  technology: "/blogimage/event-tech.jpg",
  guardIso: "/Guard.jpg",
  dashboard: "/gallery/command-center-1.jpg",
  team: "/placeholder.jpg",
  construction: "/Services/construction-security.jpg",
  gridPattern: "/placeholder.svg"
}

// --- Animation Variants ---
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardHover = {
  hover: { 
    y: -5,
    boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2 }
  }
}

// --- Components ---

const SectionHeading = ({ children, className = "", align = "center", light = false }: { children: ReactNode; className?: string; align?: "center" | "left"; light?: boolean }) => (
  <div className={cn("mb-16", align === "center" ? "text-center" : "text-left", className)}>
    <div className={cn(
      "w-16 h-1.5 mb-6 rounded-full",
      align === "center" ? "mx-auto" : "ml-0",
      light ? "bg-orange-500" : "bg-orange-600"
    )} />
    <h2 className={cn(
      "text-3xl md:text-5xl font-extrabold tracking-tight leading-tight",
      light ? "text-white" : "text-slate-900"
    )}>
      {children}
    </h2>
  </div>
)

// --- Data ---
const whatIsFireWatch = [
  {
    title: "System Failure Support",
    icon: <AlertTriangle className="w-8 h-8 text-white" />,
    description: "Protection when alarms or sprinklers are down",
    points: [
      "Malfunctioning fire alarms",
      "Broken sprinkler systems",
      "Water supply offline",
      "System maintenance outages"
    ],
    note: "We cover the gap when your automated systems can't."
  },
  {
    title: "Construction & Hot Work",
    icon: <Construction className="w-8 h-8 text-white" />,
    description: "Safety monitoring for high-risk work environments",
    points: [
      "Welding, grinding, and cutting",
      "New construction sites",
      "Remodeling projects",
      "Electrical or plumbing work"
    ],
    note: "Ensuring OSHA compliance and job-site safety during hazardous operations."
  },
  {
    title: "Mandated Coverage",
    icon: <FileCheck className="w-8 h-8 text-white" />,
    description: "Meeting official requirements for occupancy",
    points: [
      "Fire Marshal mandates",
      "City inspector requirements",
      "Insurance policy compliance",
      "High-risk fire hazard zones"
    ],
    note: "We help you avoid fines and shutdowns by meeting all regulatory standards."
  },
  {
    title: "24/7 Vigilance",
    icon: <Eye className="w-8 h-8 text-white" />, // Fixed: Now using imported Eye component
    description: "Uninterrupted monitoring for early detection",
    points: [
      "Detect smoke and heat early",
      "Identify hazardous conditions",
      "Immediate emergency action",
      "Continuous site patrols"
    ],
    note: "Our officers act instantly to protect life and property."
  }
]

const servicesList = [
  { name: "Continuous Patrol Monitoring", icon: <ShieldCheck className="w-6 h-6" />, desc: "Routine checks for smoke, heat, sparks, and open flames." },
  { name: "Immediate Emergency Response", icon: <Siren className="w-6 h-6" />, desc: "Contact 911, alert managers, and evacuate if needed." },
  { name: "Fire Watch Log Documentation", icon: <ClipboardCheck className="w-6 h-6" />, desc: "Detailed, time-stamped logs for inspectors and fire dept." },
  { name: "Construction Fire Watch", icon: <Construction className="w-6 h-6" />, desc: "Specialized watch for hot-work and system shutdowns." },
  { name: "Hazard Identification", icon: <AlertTriangle className="w-6 h-6" />, desc: "Spotting electrical hazards and unsafe materials." },
  { name: "24/7 Availability", icon: <Clock className="w-6 h-6" />, desc: "Daytime, overnight, and emergency short-notice coverage." },
]

const industries = [
  { name: "Commercial Buildings", icon: <Building2 className="w-6 h-6" />, description: "Office & Business" },
  { name: "Construction Sites", icon: <Construction className="w-6 h-6" />, description: "Active Work Zones" },
  { name: "Warehouses", icon: <Warehouse className="w-6 h-6" />, description: "Storage & Logistics" },
  { name: "Hotels & Hospitality", icon: <Hotel className="w-6 h-6" />, description: "Guest Safety" }, // Fixed: Using imported Hotel component
  { name: "Apartments & HOA", icon: <Building className="w-6 h-6" />, description: "Residential Safety" },
  { name: "Manufacturing", icon: <Factory className="w-6 h-6" />, description: "Industrial Facilities" },
  { name: "Schools", icon: <School className="w-6 h-6" />, description: "Public Facilities" },
  { name: "Retail Centers", icon: <ShoppingBag className="w-6 h-6" />, description: "Shopping Malls" },
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Deep expertise in fire safety and security protocols." },
  { title: "California Focused", description: "Over a decade serving California properties." },
  { title: "Fully Compliant", description: "Meeting all California Fire Marshal standards." },
  { title: "Fast Deployment", description: "Same-day or emergency coverage available." },
  { title: "Detailed Reporting", description: "Accurate logs required by fire inspectors." },
  { title: "24/7 Dispatch", description: "Always-on client support and dispatch." }
]

// --- Main Page Component ---

export default function FireWatchPage() {
  // Fixed: Connect form state to form inputs
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "Fire Watch",
      propertyType: "Commercial",
      details: ""
    })
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const name = e.target.name as keyof typeof formData
      const value = e.target.value
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      // Handle form submission here
      console.log("Form submitted:", formData)
    }

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. Hero Section - Fire Watch Theme (Orange/Red Accents) */}
      <header className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
         {/* Background Layer */}
         <div className="absolute inset-0 z-0">
           <Image
             src={IMAGES.hero}
             alt="Proforce 1 Fire Watch Officer"
             fill
             className="object-cover opacity-40 scale-105"
             priority
             sizes="100vw"
           />
           {/* Orange tinted gradient for Fire Watch theme */}
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-orange-950/30" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
         </div>
   
         {/* Content Layer */}
         <div className="relative z-10 container mx-auto px-6 py-20">
           <div className="grid lg:grid-cols-12 gap-12 items-center">
             
             {/* Left Text */}
             <div className="lg:col-span-7 space-y-8">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6 }}
                 className="inline-flex items-center gap-3 bg-orange-900/30 border border-orange-500/30 rounded-full px-5 py-2 backdrop-blur-md"
               >
                 <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
                 <span className="text-xs font-bold tracking-[0.2em] text-orange-100 uppercase">Code-Compliant Protection</span>
               </motion.div>
   
               <motion.h1 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className="text-5xl md:text-7xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight"
               >
                 FIRE WATCH <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-white filter drop-shadow-lg">
                    SECURITY SERVICES
                 </span>
               </motion.h1>
   
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="space-y-4"
               >
                   <h3 className="text-2xl font-bold text-slate-200">Reliable, Trained, and Code-Compliant Protection</h3>
                   <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light border-l-4 border-orange-600 pl-6">
                     When fire systems fail or hazards arise, trust our fully trained officers to ensure your site stays protected and meets all local and state fire safety requirements.
                   </p>
               </motion.div>
   
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="flex flex-col sm:flex-row gap-4 pt-4"
               >
                 <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-10 h-16 text-lg font-bold rounded-lg shadow-lg shadow-orange-900/40 transition-all hover:scale-105 uppercase tracking-wide">
                   <Phone className="mr-3 w-5 h-5" />
                   Get Fire Watch Quote
                 </Button>
                 <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-white hover:text-slate-900 px-10 h-16 text-lg font-bold rounded-lg backdrop-blur-sm uppercase tracking-wide">
                   Learn More
                 </Button>
               </motion.div>
             </div>

             {/* Right Image/Stats */}
             <div className="lg:col-span-5 relative hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative z-10"
                >
                  <div className="relative h-[600px] w-full">
                     <Image
                       src={IMAGES.guardIso}
                       alt="Fire Watch Officer"
                       fill
                       className="object-contain object-bottom drop-shadow-2xl"
                       priority
                     />
                     
                     {/* Floating Stats Card */}
                     <div className="absolute top-20 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-[240px]">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="p-2 bg-orange-600 rounded-lg">
                              <Siren className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <div className="text-2xl font-bold text-white">Fast</div>
                              <div className="text-xs text-slate-300 uppercase font-bold">Deployment</div>
                           </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">Emergency coverage available 24/7.</p>
                     </div>

                     <div className="absolute bottom-20 -left-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl shadow-2xl max-w-[260px]">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="p-2 bg-blue-600 rounded-lg">
                              <FileCheck className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <div className="text-2xl font-bold text-white">100%</div>
                              <div className="text-xs text-slate-400 uppercase font-bold">Compliant</div>
                           </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">Meeting all Fire Marshal requirements.</p>
                     </div>
                  </div>
                </motion.div>
             </div>

           </div>
         </div>

         {/* Bottom Fade */}
         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />
      </header>

      {/* 2. Overview & Services (Split Layout) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Content Side */}
            <div>
              <SectionHeading align="left">
                What Is <br />
                <span className="text-orange-600">Fire Watch?</span>
              </SectionHeading>
              
              <div className="prose prose-lg text-slate-600 mb-10">
                <p>
                  Fire watch is a specialized security service required when fire alarms, sprinklers, or water systems are malfunctioning or offline, or when high-risk construction work is taking place.
                </p>
                <p>
                   Our Fire Watch officers monitor your site without interruption to detect early signs of smoke, fire, or hazardous conditions — and act instantly to protect life and property.
                </p>
              </div>

              <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 shadow-sm">
                <h4 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                  <Flame className="text-orange-600" /> When is it Required?
                </h4>
                <div className="grid sm:grid-cols-1 gap-4">
                  {[
                    "Fire alarms or sprinklers are down/malfunctioning",
                    "Construction/remodeling disables fire systems",
                    "Water supply to fire systems is offline",
                    "High-risk fire hazards exist",
                    "Mandated by Fire Marshal or City Inspector"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Features Grid Side */}
            <div className="grid gap-6">
               {servicesList.map((service, idx) => (
                  <motion.div 
                     key={idx}
                     whileHover={{ x: 5 }}
                     className="flex gap-4 p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-200 bg-white transition-all group"
                  >
                     <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        {service.icon}
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-900 text-lg">{service.name}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Detailed Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Comprehensive <br/> <span className="text-orange-600">Fire Safety Solutions</span>
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {whatIsFireWatch.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover="hover"
                variants={cardHover}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-orange-100" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 group-hover:bg-orange-600 group-hover:shadow-orange-600/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 mb-6 font-medium">{feature.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /> {/* Fixed: Now using imported CheckCircle2 */}
                        <span className="text-sm text-slate-600">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm text-slate-600 italic">
                    "{feature.note}"
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reporting Technology (Feature Layout) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <SectionHeading align="left">
                  Advanced Digital <br />
                  <span className="text-orange-600">Reporting System</span>
                </SectionHeading>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Proforce 1 uses an advanced digital reporting platform to give you complete oversight. You will receive daily activity summaries and immediate alerts ensuring transparency, accuracy, and full compliance.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                   {[
                     { icon: <MapPin />, title: "GPS Tracking", desc: "Real-time tracked patrol logs." },
                     { icon: <Clock />, title: "Time-Stamped", desc: "Verifiable fire watch entries." },
                     { icon: <Camera />, title: "Photo Evidence", desc: "Photos of hazards or findings." },
                     { icon: <FileText />, title: "Incident Reports", desc: "Detailed digital documentation." },
                   ].map((tech, i) => (
                     <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                       <div className="text-orange-600 mb-4">{tech.icon}</div>
                       <h4 className="font-bold text-slate-900 mb-2">{tech.title}</h4>
                       <p className="text-sm text-slate-500">{tech.desc}</p>
                     </div>
                   ))}
                </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
               <Image 
                  src={IMAGES.dashboard} 
                  alt="Security Reporting Dashboard" 
                  fill 
                  className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries Grid - Sleek Dark Design */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src={IMAGES.gridPattern}
            alt="Grid Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 to-slate-900 opacity-90" />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading light>
            Industries We <span className="text-orange-500">Serve</span>
          </SectionHeading>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-orange-600 hover:border-orange-500 transition-all duration-300 group cursor-default"
              >
                <div className="text-slate-400 group-hover:text-white mb-4 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{item.name}</h3>
                <p className="text-[10px] text-slate-400 group-hover:text-orange-100 transition-colors uppercase tracking-wider">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Clients Trust Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading>Why Choose <br/><span className="text-orange-600">Proforce 1</span></SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFactors.map((trust, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-all hover:border-orange-100 group">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-orange-600 transition-colors">
                   <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{trust.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{trust.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
              <p className="text-xl text-slate-700 font-medium">We ensure your property remains safe, compliant, and protected until your fire systems are fully restored.</p>
          </div>
        </div>
      </section>

      {/* 7. Quote Form Section - Full Width, High Impact */}
      <section id="quote-section" className="py-24 bg-slate-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-900/20 via-slate-950 to-slate-950" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                
                {/* Form Side */}
                <div className="p-10 md:p-14 w-full md:w-3/5 order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Fire Watch Service</h2>
                    <p className="text-slate-500 mb-10 text-lg">Need immediate coverage? We are available 24/7. Get a proposal now.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-5"> {/* Added onSubmit handler */}
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                                <input 
                                  type="text" 
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" 
                                  placeholder="John" 
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                                <input 
                                  type="text" 
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" 
                                  placeholder="Doe" 
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                            <input 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" 
                              placeholder="john@company.com" 
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                            <input 
                              type="tel" 
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" 
                              placeholder="(555) 123-4567" 
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                             <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Service</label>
                                <select 
                                  name="service"
                                  value={formData.service}
                                  onChange={handleInputChange}
                                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-700"
                                >
                                    <option>Fire Watch</option>
                                    <option>Construction Security</option>
                                    <option>Mobile Patrol</option>
                                </select>
                            </div>
                             <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Property Type</label>
                                <select 
                                  name="propertyType"
                                  value={formData.propertyType}
                                  onChange={handleInputChange}
                                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-700"
                                >
                                    <option>Commercial</option>
                                    <option>Residential/HOA</option>
                                    <option>Construction</option>
                                    <option>Retail</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Details</label>
                            <textarea 
                              rows={3} 
                              name="details"
                              value={formData.details}
                              onChange={handleInputChange}
                              className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" 
                              placeholder="Tell us about your fire watch needs..." 
                            />
                        </div>
                        
                        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-orange-600/20 mt-2">
                            Request Proposal
                        </Button>
                    </form>
                </div>

                {/* Info Side - Dark */}
                <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                    
                    <div className="relative z-10">
                        <div className="inline-block p-3 bg-orange-600 rounded-xl mb-8 shadow-lg shadow-orange-900/50">
                            <Flame className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-8 leading-snug">
                           Direct Contact <br/> Information
                        </h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-600 transition-colors">
                                  <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Dispatch</div>
                                    <div className="text-xl font-bold tracking-tight">800-779-7691</div>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-600 transition-colors">
                                  <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                    <div className="text-lg font-medium break-all">info@proforce1protection.com</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-600 transition-colors">
                                  <Globe className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Main Office</div>
                                    <div className="text-base text-slate-300">
                                       123 Security Blvd, <br/>
                                       Los Angeles, CA 90001
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                         <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Dispatch Active Now
                         </div>
                    </div>
                </div>

            </div>
         </div>
      </section>

    </main>
  )
}