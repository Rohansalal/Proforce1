"use client"

import Image from "next/image"
import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Shield, CheckCircle2, Siren, Phone, Mail, Globe, Home,
  Users, Award, Clock, MapPin, Camera, Radio, Star,
  Briefcase, Building2, Crosshair, Plane, Lock,
  FileText, AlertTriangle, BadgeCheck, Eye,
  Car, UserCheck, Umbrella, Crown, Glasses
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/images/executive-protection-hero.jpg",
  vehicle: "/images/secure-transport-suv.jpg",
  guardIso: "/images/executive-protection-agent.png", // Suit/Tie agent
  dashboard: "/images/threat-intelligence-map.jpg",
  team: "/images/close-protection-team.jpg",
  briefing: "/images/security-detail-planning.jpg"
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

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
  light?: boolean;
}

const SectionHeading = ({ children, className = "", align = "center", light = false }: SectionHeadingProps) => (
  <div className={cn("mb-16", align === "center" ? "text-center" : "text-left", className)}>
    <div className={cn(
      "w-16 h-1.5 mb-6 rounded-full",
      align === "center" ? "mx-auto" : "ml-0",
      light ? "bg-slate-500" : "bg-slate-800"
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
    title: "Discreet Professionalism",
    icon: <Glasses className="w-8 h-8 text-white" />,
    description: "Protection that blends seamlessly with your lifestyle",
    points: [
      "Low-profile security presence",
      "Seamless integration with family/staff",
      "Confidentiality agreements (NDAs)",
      "Respect for personal privacy"
    ],
    note: "We provide safety without intrusion, allowing you to conduct business as usual."
  },
  {
    title: "Comprehensive Risk Assessment",
    icon: <FileText className="w-8 h-8 text-white" />,
    description: "Proactive threat analysis before deployment",
    points: [
      "Vulnerability assessments",
      "Travel route planning & analysis",
      "Venue advance work",
      "Intelligence gathering"
    ],
    note: "We identify and mitigate risks before they ever become threats."
  },
  {
    title: "Secure Transportation",
    icon: <Car className="w-8 h-8 text-white" />,
    description: "Safe movement from point A to point B",
    points: [
      "Armored vehicle options",
      "Defensive driving trained agents",
      "Route diversification",
      "Airport tarmac access coordination"
    ],
    note: "Transportation is the most vulnerable time for principals. We secure every mile."
  },
  {
    title: "Crisis Response",
    icon: <Siren className="w-8 h-8 text-white" />,
    description: "Immediate action in high-pressure scenarios",
    points: [
      "Medical emergency response (CPR/AED)",
      "Evacuation & extraction protocols",
      "Active threat neutralization",
      "Liaison with local law enforcement"
    ],
    note: "Our agents are trained to think clearly and act decisively when seconds count."
  }
]

const servicesList = [
  { name: "Close Protection Agents", icon: <UserCheck className="w-6 h-6" />, desc: "Highly trained bodyguards for individuals and families." },
  { name: "Secure Transportation", icon: <Car className="w-6 h-6" />, desc: "Professional drivers trained in evasive maneuvers." },
  { name: "Travel Security", icon: <Plane className="w-6 h-6" />, desc: "Domestic and international protection logistics." },
  { name: "Residential Security", icon: <Home className="w-6 h-6" />, desc: "24/7 protection for private estates and homes." },
  { name: "Threat Assessment", icon: <Crosshair className="w-6 h-6" />, desc: "Intelligence-led analysis of potential risks." },
  { name: "Event Security Details", icon: <Star className="w-6 h-6" />, desc: "Protection for red carpet and public appearances." },
]

const clientTypes = [
  { name: "C-Level Executives", icon: <Briefcase className="w-6 h-6" />, description: "Corporate leadership protection" },
  { name: "High Net Worth", icon: <Crown className="w-6 h-6" />, description: "Family & asset security" },
  { name: "Public Figures", icon: <Star className="w-6 h-6" />, description: "Celebrity & talent details" },
  { name: "Diplomats", icon: <Globe className="w-6 h-6" />, description: "Foreign dignitary protection" },
  { name: "Witness Protection", icon: <Shield className="w-6 h-6" />, description: "High-risk legal security" },
  { name: "Hostile Terminations", icon: <AlertTriangle className="w-6 h-6" />, description: "Workplace violence prevention" },
  { name: "Media Crews", icon: <Camera className="w-6 h-6" />, description: "News team protection" },
  { name: "Legal Professionals", icon: <Building2 className="w-6 h-6" />, description: "Court & trial security" },
]

const trustFactors = [
  { title: "Elite Backgrounds", description: "Agents with military, law enforcement, or special ops experience." },
  { title: "Global Reach", description: "Capable of coordinating protection anywhere in the world." },
  { title: "Strict Confidentiality", description: "Your privacy and reputation are our absolute priority." },
  { title: "Medical Training", description: "Agents certified in TCCC, CPR, and First Aid." },
  { title: "Rapid Deployment", description: "Teams available for immediate, short-notice assignments." },
  { title: "Licensed & Insured", description: "Fully compliant with BSIS and state regulations." }
]

// --- Main Page Component ---

export default function ExecutiveProtectionPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    details: ""
  })

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. Hero Section - Executive Theme (Slate/Silver/Black Accents) */}
      <header className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950">
         {/* Background Layer */}
         <div className="absolute inset-0 z-0">
           <Image
             src={IMAGES.hero}
             alt="Executive Protection Detail"
             fill
             className="object-cover opacity-30 scale-105"
             priority
             sizes="100vw"
           />
           {/* Slate/Blue tinted gradient for Executive theme */}
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/30" />
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
                 className="inline-flex items-center gap-3 bg-slate-800/50 border border-slate-600/30 rounded-full px-5 py-2 backdrop-blur-md"
               >
                 <Shield className="w-4 h-4 text-slate-200 fill-slate-500" />
                 <span className="text-xs font-bold tracking-[0.2em] text-slate-200 uppercase">Close Protection Division</span>
               </motion.div>
   
               <motion.h1 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.1 }}
                 className="text-5xl md:text-7xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight"
               >
                 EXECUTIVE <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-white filter drop-shadow-lg">
                    PROTECTION
                 </span>
               </motion.h1>
   
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="space-y-4"
               >
                   <h3 className="text-2xl font-bold text-slate-200">Discreet. Professional. Uncompromising Safety.</h3>
                   <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light border-l-4 border-slate-500 pl-6">
                     We provide elite close protection services for executives, dignitaries, and high-net-worth individuals. Our agents blend seamlessly into your environment while providing an impenetrable shield of safety.
                   </p>
               </motion.div>
   
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 }}
                 className="flex flex-col sm:flex-row gap-4 pt-4"
               >
                 <Button size="lg" className="bg-slate-100 hover:bg-white text-slate-900 px-10 h-16 text-lg font-bold rounded-lg shadow-lg transition-all hover:scale-105 uppercase tracking-wide">
                   <Phone className="mr-3 w-5 h-5" />
                   Consult an Expert
                 </Button>
                 <Button size="lg" variant="outline" className="border-slate-500 text-white hover:bg-white/10 px-10 h-16 text-lg font-bold rounded-lg backdrop-blur-sm uppercase tracking-wide">
                   View Services
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
                       alt="Executive Protection Agent"
                       fill
                       className="object-contain object-bottom drop-shadow-2xl"
                       priority
                     />
                     
                     {/* Floating Stats Card */}
                     <div className="absolute top-20 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl max-w-[240px]">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="p-2 bg-slate-700 rounded-lg">
                              <Globe className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <div className="text-2xl font-bold text-white">Global</div>
                              <div className="text-xs text-slate-300 uppercase font-bold">Logistics</div>
                           </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">Secure travel planning worldwide.</p>
                     </div>

                     <div className="absolute bottom-20 -left-8 bg-slate-900/90 backdrop-blur-xl border border-slate-700 p-6 rounded-2xl shadow-2xl max-w-[260px]">
                        <div className="flex items-center gap-3 mb-2">
                           <div className="p-2 bg-slate-700 rounded-lg">
                              <Eye className="w-6 h-6 text-white" />
                           </div>
                           <div>
                              <div className="text-2xl font-bold text-white">Advance</div>
                              <div className="text-xs text-slate-400 uppercase font-bold">Intelligence</div>
                           </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-snug">Proactive threat assessment & planning.</p>
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
                Why You Need <br />
                <span className="text-slate-700">Executive Protection</span>
              </SectionHeading>
              
              <div className="prose prose-lg text-slate-600 mb-10">
                <p>
                  High-profile individuals face unique security challenges that go beyond standard guarding. Threats can range from stalking and harassment to kidnapping and corporate espionage.
                </p>
                <p>
                   Our Executive Protection (EP) teams are trained to mitigate these risks through planning, intelligence, and skilled physical protection, allowing you to live and work with peace of mind.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
                  <AlertTriangle className="text-slate-700" /> Threat Mitigation
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Stalking & Harassment",
                    "Public Event Security",
                    "Travel Risks",
                    "Workplace Violence",
                    "Home Invasion",
                    "Kidnap & Ransom",
                    "Reputational Damage"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700 mt-2 flex-shrink-0" />
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
                     className="flex gap-4 p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-300 bg-white transition-all group"
                  >
                     <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-800 group-hover:text-white transition-colors">
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
            The Proforce <br/> <span className="text-slate-700">Standard of Care</span>
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover="hover"
                variants={cardHover}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-slate-200" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 group-hover:bg-slate-800 group-hover:shadow-slate-900/40 transition-all duration-300">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 mb-6 font-medium">{feature.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
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

      {/* 4. Intelligence & Logistics (Feature Layout) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <SectionHeading align="left">
                  Intelligence-Led <br />
                  <span className="text-slate-700">Protective Operations</span>
                </SectionHeading>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Effective executive protection starts long before the principal arrives. Our intelligence division conducts thorough advance work and route analysis to ensure every movement is seamless and secure.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6">
                   {[
                     { icon: <MapPin />, title: "Advance Work", desc: "Venue and route inspection." },
                     { icon: <Crosshair />, title: "Threat Intel", desc: "Monitoring local risks." },
                     { icon: <Radio />, title: "Secure Comms", desc: "Encrypted team coordination." },
                     { icon: <Umbrella />, title: "Emergency Plans", desc: "Hospital and safe house mapping." },
                   ].map((tech, i) => (
                     <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:shadow-md transition-shadow">
                       <div className="text-slate-700 mb-4">{tech.icon}</div>
                       <h4 className="font-bold text-slate-900 mb-2">{tech.title}</h4>
                       <p className="text-sm text-slate-500">{tech.desc}</p>
                     </div>
                   ))}
                </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
               <Image 
                  src={IMAGES.dashboard} 
                  alt="Threat Intelligence Map" 
                  fill 
                  className="object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clients We Serve - Sleek Dark Design */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 to-slate-900 opacity-90" />

        <div className="container mx-auto px-6 relative z-10">
          <SectionHeading light>
            Who We <span className="text-slate-400">Protect</span>
          </SectionHeading>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clientTypes.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 group cursor-default"
              >
                <div className="text-slate-400 group-hover:text-white mb-4 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{item.name}</h3>
                <p className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors uppercase tracking-wider">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Clients Trust Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading>Why Trust <br/><span className="text-slate-700">Proforce 1</span></SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFactors.map((trust, idx) => (
              <div key={idx} className="flex gap-4 p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-all hover:border-slate-400 group">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold group-hover:bg-slate-700 transition-colors">
                   <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{trust.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{trust.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
              <p className="text-xl text-slate-700 font-medium">We understand that your safety is non-negotiable.</p>
          </div>
        </div>
      </section>

      {/* 7. Quote Form Section - Full Width, High Impact */}
      <section id="quote-section" className="py-24 bg-slate-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                
                {/* Form Side */}
                <div className="p-10 md:p-14 w-full md:w-3/5 order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Confidential Consultation</h2>
                    <p className="text-slate-500 mb-10 text-lg">Contact us to discuss your protection needs. All inquiries are kept strictly confidential.</p>
                    
                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                                <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="John" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                                <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="Doe" />
                            </div>
                        </div>
                        
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                            <input type="email" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="john@company.com" />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                            <input type="tel" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="(555) 123-4567" />
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                             <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Service</label>
                                <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-slate-700">
                                    <option>Close Protection</option>
                                    <option>Secure Transport</option>
                                    <option>Event Security</option>
                                    <option>Residential Security</option>
                                </select>
                            </div>
                             <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase">Duration</label>
                                <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 text-slate-700">
                                    <option>Short Term / Event</option>
                                    <option>Long Term / Ongoing</option>
                                    <option>Travel Detail</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase">Details (Optional)</label>
                            <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:bg-white transition-all" placeholder="Tell us about your security needs..." />
                        </div>
                        
                        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-slate-900/20 mt-2">
                            Request Consultation
                        </Button>
                    </form>
                </div>

                {/* Info Side - Dark */}
                <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl -mr-20 -mt-20" />
                    
                    <div className="relative z-10">
                        <div className="inline-block p-3 bg-slate-700 rounded-xl mb-8 shadow-lg shadow-slate-900/50">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-8 leading-snug">
                           Secure <br/> Contact Line
                        </h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                                  <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Dispatch</div>
                                    <div className="text-xl font-bold tracking-tight">800-779-7691</div>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                                  <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                    <div className="text-lg font-medium break-all">info@proforce1protection.com</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
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