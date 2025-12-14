"use client"

import Image from "next/image"
import { useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { 
  Shield, CheckCircle2, Siren, Phone, Mail, Globe, 
  Users, Award, Clock, MapPin, Camera, Radio, Star,
  Building, Truck, Gem, Hotel, Factory,
  ShoppingBag, Building2, Crosshair,
  FileText, AlertTriangle, BadgeCheck, 
  Ticket, Music, Mic2, GlassWater, Crown, 
  UserCheck, ShieldAlert, HeartHandshake, Flag,
  ShieldCheck // Add this import
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/hero/event-security.jpg",
  vehicle: "/security-guard-patrol-vehicle-at-night.jpg",
  technology: "/blogimage/event-tech.jpg",
  guardIso: "/Guard.jpg",
  dashboard: "/gallery/command-center-1.jpg",
  team: "/placeholder.jpg",
  crowd: "/placeholder.jpg",
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

const SectionHeading = ({ children, className, align = "center", light = false }: { children: ReactNode; className?: string; align?: "center" | "left"; light?: boolean }) => (
  <div className={cn("mb-16", align === "center" ? "text-center" : "text-left", className)}>
    <div className={cn(
      "w-16 h-1.5 mb-6 rounded-full",
      align === "center" ? "mx-auto" : "ml-0",
      light ? "bg-purple-500" : "bg-purple-600"
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
const whyChooseUs = [
  {
    title: "Crowd & Guest Management",
    icon: <Users className="w-8 h-8 text-white" />,
    description: "Expert handling of large groups and VIPs",
    points: [
      "Large crowd control strategies",
      "VIP arrival coordination",
      "De-escalation techniques",
      "Guest flow management"
    ],
    note: "We ensure safety without disrupting the guest experience."
  },
  {
    title: "Access Control & Screening",
    icon: <Ticket className="w-8 h-8 text-white" />,
    description: "Secure entry points and verification",
    points: [
      "Ticket and credential verification",
      "Bag checks and screening",
      "Vendor and staff access management",
      "VIP entrance security"
    ],
    note: "Strict but polite access control to keep unauthorized persons out."
  },
  {
    title: "Emergency Response",
    icon: <ShieldAlert className="w-8 h-8 text-white" />,
    description: "Prepared for any incident",
    points: [
      "Medical emergency first response",
      "Evacuation planning and execution",
      "Conflict management",
      "Theft prevention protocols"
    ],
    note: "Our team acts fast to resolve issues before they escalate."
  },
  {
    title: "Flexible Security Levels",
    icon: <Shield className="w-8 h-8 text-white" />,
    description: "Tailored to your event's risk profile",
    points: [
      "Armed officers for high-risk events",
      "Unarmed guards for low-profile security",
      "Plainclothes officers for discretion",
      "Uniformed presence for visibility"
    ],
    note: "Choose the right mix of security personnel for your specific needs."
  }
]

const servicesList = [
  { name: "Access Control & Screening", icon: <UserCheck className="w-6 h-6" />, desc: "Check-in, ID verification, and guest list management." },
  { name: "Crowd Management", icon: <Users className="w-6 h-6" />, desc: "Guiding flow, preventing overcrowding, and ensuring safety." },
  { name: "VIP & Executive Protection", icon: <Crown className="w-6 h-6" />, desc: "Discreet protection for high-profile guests and talent." },
  { name: "Parking Lot Security", icon: <Truck className="w-6 h-6" />, desc: "Vehicle monitoring, safe entry/exit, and theft deterrence." },
  { name: "Emergency & First Aid", icon: <Siren className="w-6 h-6" />, desc: "Immediate response to medical or safety incidents." },
  { name: "Event Officers (Armed/Unarmed)", icon: <BadgeCheck className="w-6 h-6" />, desc: "Professional security personnel tailored to your risk level." },
]

const eventTypes = [
  { name: "Corporate Conferences", icon: <Building2 className="w-6 h-6" />, description: "Professional business gatherings" },
  { name: "Weddings & Private Parties", icon: <GlassWater className="w-6 h-6" />, description: "Intimate and secure celebrations" },
  { name: "Festivals & Concerts", icon: <Music className="w-6 h-6" />, description: "Large-scale crowd safety" },
  { name: "Award Ceremonies", icon: <Award className="w-6 h-6" />, description: "Red carpet and VIP security" },
  { name: "Trade Shows", icon: <Flag className="w-6 h-6" />, description: "Exhibitor and attendee protection" },
  { name: "Nonprofit Galas", icon: <HeartHandshake className="w-6 h-6" />, description: "Fundraiser event security" },
  { name: "Fashion Shows", icon: <Star className="w-6 h-6" />, description: "High-profile runway events" },
  { name: "Hotel Events", icon: <Hotel className="w-6 h-6" />, description: "Ballroom and convention security" },
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Deep expertise in event logistics and crowd safety." },
  { title: "Statewide Coverage", description: "Serving events across all of California." },
  { title: "Customer-Friendly", description: "Officers trained in hospitality and service." },
  { title: "Real-Time Reporting", description: "Digital logs and instant incident updates." },
  { title: "Custom Solutions", description: "Security plans tailored to your specific event." },
  { title: "Reliable Team", description: "On-time, professional, and fully communicative." }
]

// --- Main Page Component ---

export default function EventSecurityPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    eventType: "",
    message: ""
  })

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. Hero Section - Event Theme (Purple/Deep Blue Accents) */}
      <header className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
         {/* Background Layer */}
         <div className="absolute inset-0 z-0">
           <Image
             src={IMAGES.hero}
             alt="Proforce 1 Event Security Team"
             fill
             className="object-cover opacity-40 scale-105"
             priority
             sizes="100vw"
           />
           {/* Purple tinted gradient for Event theme */}
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-purple-950/30" />
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
                 className="inline-flex items-center gap-3 bg-purple-900/30 border border-purple-500/30 rounded-full px-5 py-2 backdrop-blur-md"
               >
                 <Ticket className="w-4 h-4 text-purple-400 fill-purple-400" />
                 <span className="text-xs font-bold tracking-[0.2em] text-purple-100 uppercase">Special Event Division</span>
               </motion.div>
   
               <motion.h1 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className="text-5xl md:text-7xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight"
               >
                 EVENT <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-white filter drop-shadow-lg">
                    SECURITY SERVICES
                 </span>
               </motion.h1>
   
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="space-y-4"
               >
                   <h3 className="text-2xl font-bold text-slate-200">Expert Team for Safe, Successful Events</h3>
                   <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light border-l-4 border-purple-500 pl-6">
                     From intimate gatherings to large-scale conferences, we tailor every detail to ensure your event is protected, organized, and stress-free from start to finish.
                   </p>
               </motion.div>
   
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="flex flex-col sm:flex-row gap-4 pt-4"
               >
                 <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 h-16 text-lg font-bold rounded-lg shadow-lg shadow-purple-900/40 transition-all hover:scale-105 uppercase tracking-wide">
                   <Phone className="mr-3 w-5 h-5" />
                   Get Event Quote
                 </Button>
                 <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-white hover:text-slate-900 px-10 h-16 text-lg font-bold rounded-lg backdrop-blur-sm uppercase tracking-wide">
                   Our Expertise
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
                       alt="Event Security Officer"
                       fill
                       className="object-contain object-bottom drop-shadow-2xl"
                       priority
                     />
                     
                     {/* Floating Stats Card */}
                     <div className="absolute top-20 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-[240px]">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="p-2 bg-purple-600 rounded-lg">
                              <Users className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <div className="text-2xl font-bold text-white">Crowd</div>
                              <div className="text-xs text-slate-300 uppercase font-bold">Control Experts</div>
                           </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">Managing safety for events of all sizes.</p>
                     </div>

                     <div className="absolute bottom-20 -left-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl shadow-2xl max-w-[260px]">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="p-2 bg-blue-500 rounded-lg">
                              <ShieldCheck className="w-6 h-6 text-white" /> {/* Fixed: Now using imported ShieldCheck */}
                           </div>
                           <div>
                              <div className="text-2xl font-bold text-white">VIP</div>
                              <div className="text-xs text-slate-400 uppercase font-bold">Protection</div>
                           </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">Discreet security for high-profile guests.</p>
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
                Why Choose <br />
                <span className="text-purple-600">Event Security?</span>
              </SectionHeading>
              
              <div className="prose prose-lg text-slate-600 mb-10">
                <p>
                  Hosting an event requires precision, planning, and professional protection. We specialize in delivering safe, controlled, and organized environments.
                </p>
                <p>
                   We combine professionalism, situational awareness, and strong customer service to protect your event without disrupting the experience.
                </p>
              </div>

              <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 shadow-sm">
                <h4 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                  <Star className="text-purple-600" /> Trained to Handle
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Large Crowds",
                    "VIP Arrivals",
                    "High-Value Setups",
                    "Access Control",
                    "Guest Management",
                    "Emergency Response",
                    "De-escalation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
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
                     className="flex gap-4 p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-200 bg-white transition-all group"
                  >
                     <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
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
            Comprehensive <br/> <span className="text-purple-600">Event Solutions</span>
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover="hover"
                variants={cardHover}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-purple-100" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 group-hover:bg-purple-600 group-hover:shadow-purple-600/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 mb-6 font-medium">{feature.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
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
                  Full Transparency <br />
                  <span className="text-purple-600">Digital Reporting</span>
                </SectionHeading>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Proforce 1 uses an advanced digital security platform to deliver clear visibility into every aspect of your event's security operations. Real-time updates ensure you always know the status of your venue.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                   {[
                     { icon: <MapPin />, title: "Live GPS", desc: "Real-time officer tracking." },
                     { icon: <Clock />, title: "Real-Time", desc: "Instant updates during event." },
                     { icon: <Camera />, title: "Photo Logs", desc: "Time-stamped evidence." },
                     { icon: <FileText />, title: "Shift Reports", desc: "Detailed activity summaries." },
                   ].map((tech, i) => (
                     <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                       <div className="text-purple-600 mb-4">{tech.icon}</div>
                       <h4 className="font-bold text-slate-900 mb-2">{tech.title}</h4>
                       <p className="text-sm text-slate-500">{tech.desc}</p>
                     </div>
                   ))}
                </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
               <Image 
                  src={IMAGES.dashboard} 
                  alt="Event Security Dashboard" 
                  fill 
                  className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Events We Specialize In - Sleek Dark Design */}
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
            Events We <span className="text-purple-400">Specialize In</span>
          </SectionHeading>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {eventTypes.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 group cursor-default"
              >
                <div className="text-slate-400 group-hover:text-white mb-4 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{item.name}</h3>
                <p className="text-[10px] text-slate-400 group-hover:text-purple-100 transition-colors uppercase tracking-wider">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Clients Trust Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading>Why Clients <br/><span className="text-purple-600">Choose Us</span></SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFactors.map((trust, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-100 rounded-xl hover:shadow-lg transition-all hover:border-purple-100 group">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-purple-600 transition-colors">
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
              <p className="text-xl text-slate-700 font-medium">We understand that events reflect your reputation — and we protect them with professionalism and precision.</p>
          </div>
        </div>
      </section>

      {/* 7. Quote Form Section - Full Width, High Impact */}
      <section id="quote-section" className="py-24 bg-slate-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                
                {/* Form Side */}
                <div className="p-10 md:p-14 w-full md:w-3/5 order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Event Security Quote</h2>
                    <p className="text-slate-500 mb-10 text-lg">Whether planning a one-day event or a multi-day conference, our team is ready to support you.</p>
                    
                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                                <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all" placeholder="John" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                                <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all" placeholder="Doe" />
                            </div>
                        </div>
                        
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                            <input type="email" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all" placeholder="john@company.com" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                            <input type="tel" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all" placeholder="(555) 123-4567" />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                             <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Service</label>
                                <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-700">
                                    <option>Event Security</option>
                                    <option>VIP Protection</option>
                                    <option>Crowd Management</option>
                                </select>
                            </div>
                             <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Event Type</label>
                                <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-700">
                                    <option>Corporate</option>
                                    <option>Wedding/Private</option>
                                    <option>Festival/Concert</option>
                                    <option>Trade Show</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Event Details</label>
                            <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all" placeholder="Tell us about your event (date, location, size)..." />
                        </div>
                        
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-purple-600/20 mt-2">
                            Request Proposal
                        </Button>
                    </form>
                </div>

                {/* Info Side - Dark */}
                <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                    
                    <div className="relative z-10">
                        <div className="inline-block p-3 bg-purple-600 rounded-xl mb-8 shadow-lg shadow-purple-900/50">
                            <Ticket className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-8 leading-snug">
                           Direct Contact <br/> Information
                        </h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-purple-600 transition-colors">
                                  <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Dispatch</div>
                                    <div className="text-xl font-bold tracking-tight">800-779-7691</div>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-purple-600 transition-colors">
                                  <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                    <div className="text-lg font-medium break-all">info@proforce1protection.com</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-purple-600 transition-colors">
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
