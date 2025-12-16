"use client"

import Image from "next/image"
import { useState, type ReactNode } from "react"
import { motion } from "framer-motion"
import { 
  Shield, Target, Zap, Lock, CheckCircle2, Phone, Mail,
  Users, Award, Clock, MapPin, Camera, Radio, Star,
  Building, Truck, Gem, Banknote, Hotel, Factory,
  Briefcase, Home, ShoppingBag, Building2, Crosshair,
  Siren, FileText, Navigation, Eye, AlertTriangle,
  BadgeCheck, ThumbsUp, ChevronRight, ExternalLink,
  ShieldCheck, Cpu, BatteryCharging, TrendingUp,
  GraduationCap, Brain, Settings, Users as UsersIcon,
  Leaf, Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/armed-security/armedsecurity.jpeg",
  training: "/Services/armed-security/armedsecurity.jpeg",
  technology: "/Services/armed-security/armedsecurity.jpeg",
  vehicle: "/Services/armed-security/armedsecurity.jpeg",
  guardIso: "/Services/armed-security/armedsecurity.jpeg",
  dashboard: "/Services/armed-security/armedsecurity.jpeg",
  team: "/Services/armed-security.jpg", // Added from user snippet
  facility: "/Services/armed-security/armedsecurity.jpeg" // Added from user snippet
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

const SectionHeading = ({
  children,
  className,
  align = "center",
  light = false
}: {
  children: ReactNode
  className?: string
  align?: "center" | "left"
  light?: boolean
}) => (
  <div className={cn("mb-16", align === "center" ? "text-center" : "text-left", className)}>
    <div className={cn(
      "w-16 h-1.5 mb-6 rounded-full",
      align === "center" ? "mx-auto" : "ml-0",
      light ? "bg-red-500" : "bg-red-600"
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
    title: "Highly Trained & Licensed",
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    description: "All armed personnel undergo rigorous training and certification",
    points: [
      "California BSIS Firearm Certification",
      "Ongoing live-fire training",
      "De-escalation and conflict-resolution training",
      "Emergency response & crisis management",
      "Advanced situational awareness training"
    ],
    note: "We ensure every armed officer is prepared mentally and physically to handle critical situations safely and professionally."
  },
  {
    title: "Visible Deterrence",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    description: "Armed guards provide immediate deterrence for various environments",
    points: [
      "High-value retail stores & jewelry stores",
      "Financial institutions & banks",
      "Commercial buildings & corporate offices",
      "Hotels and hospitality venues",
      "Construction sites with valuable equipment"
    ],
    note: "Our officers are trained to maintain a calm, respectful, and customer-friendly posture while remaining vigilant at all times."
  },
  {
    title: "Real-Time Digital Reporting",
    icon: <Cpu className="w-8 h-8 text-white" />,
    description: "Advanced technology platform for complete transparency",
    points: [
      "Real-time GPS tracking",
      "Time-stamped photo logs",
      "Detailed incident reports",
      "Patrol logs & activity summaries",
      "Live updates to your inbox"
    ],
    note: "You receive complete transparency and accountability on every shift."
  },
  {
    title: "Rapid Response Readiness",
    icon: <Siren className="w-8 h-8 text-white" />,
    description: "Trained to react immediately to threats and emergencies",
    points: [
      "Threats against life or property",
      "Suspicious activity monitoring",
      "Theft attempts prevention",
      "Robbery risk management",
      "Trespassing and unauthorized access"
    ],
    note: "Our team is equipped to make split-second decisions that protect people and prevent escalation."
  }
]

const industries = [
  { name: "Jewelry Stores", icon: <Gem className="w-6 h-6" />, description: "High-value retail protection" },
  { name: "Luxury Retailers", icon: <ShoppingBag className="w-6 h-6" />, description: "Premium brand security" },
  { name: "Hotels & Resorts", icon: <Hotel className="w-6 h-6" />, description: "Hospitality security" },
  { name: "Banks & Financial", icon: <Banknote className="w-6 h-6" />, description: "Financial institution protection" },
  { name: "Corporate Offices", icon: <Building2 className="w-6 h-6" />, description: "Business campus security" },
  { name: "Commercial Centers", icon: <Building className="w-6 h-6" />, description: "Shopping center protection" },
  { name: "Warehouses", icon: <Factory className="w-6 h-6" />, description: "Logistics facility security" },
  { name: "Medical Facilities", icon: <Crosshair className="w-6 h-6" />, description: "Healthcare security" },
  { name: "Cannabis Facilities", icon: <Leaf className="w-6 h-6" />, description: "High-risk retail protection" },
  { name: "Private Events", icon: <Users className="w-6 h-6" />, description: "VIP event security" },
  { name: "Government Sites", icon: <Shield className="w-6 h-6" />, description: "Municipal facility protection" },
  { name: "Construction Sites", icon: <Truck className="w-6 h-6" />, description: "Equipment & site security" }
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Decades of security expertise in high-stakes environments" },
  { title: "California Focused", description: "Over a decade serving California businesses exclusively" },
  { title: "Licensed Professionals", description: "Professional, dependable, fully licensed officers" },
  { title: "Advanced Technology", description: "Cutting-edge systems for reporting and transparency" },
  { title: "Client-Focused Service", description: "Strong communication and personalized service approach" },
  { title: "Proven Track Record", description: "Consistent results and client satisfaction" }
]

// --- Main Page Component ---

export default function ArmedGuardPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    industry: "",
    message: ""
  })

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. Hero Section - Video Background with Simple Text */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            poster={IMAGES.hero} // Fallback image
          >
            <source src="/Services/armed-security/armed.mp4" type="video/mp4" />
            {/* Fallback if video doesn't load */}
            <Image
              src={IMAGES.hero}
              alt="Armed Security Background"
              fill
              className="object-cover"
              priority
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-8"
          >
            ARMED<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              SECURITY
            </span>
             <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Guard Services
            </span>
          </motion.h1>

          {/* Subtle subtitle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl text-slate-300 mb-8 font-light">
              Elite protection for high-value properties and sensitive environments
            </p>
            
            {/* Simple CTA Button */}
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-10 h-16 text-lg font-semibold rounded-lg"
            >
              <Phone className="mr-3 w-5 h-5" />
              Request Quote
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-slate-400 text-sm animate-bounce">
              <ChevronRight className="w-6 h-6 transform rotate-90 mx-auto" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. Professional Protection Section - Content Below Video */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Professional Protection
                    <br />
                    <span className="text-red-600">
                      Backed by Training, Precision, and Experience
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      At Proforce 1 Protection Services, our Armed Security Division is built to protect high-value properties, sensitive environments, and businesses that require the highest level of security presence.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Over 20 years of field experience</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium">More than a decade in business</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Unmatched professionalism & rapid response</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our armed officers are not just guards — they are highly trained security professionals prepared to protect clients, customers, and assets with discipline, confidence, and sound judgment.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-red-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Strong Deterrence Against Threats</div>
                          <div className="text-xs text-slate-600">Visible, professional armed presence</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "20+", label: "Years Experience", icon: Award, color: "text-red-600" },
                    { value: "< 5 Min", label: "Response Time", icon: Clock, color: "text-blue-600" },
                    { value: "100%", label: "Licensed Officers", icon: BadgeCheck, color: "text-green-600" },
                    { value: "24/7", label: "Protection", icon: Shield, color: "text-amber-600" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                      <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                      <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wider font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10 h-14 text-base font-semibold rounded-lg">
                    <Phone className="mr-3 w-5 h-5" />
                    Request Armed Security Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <Shield className="mr-3 w-5 h-5" />
                    View Services
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                  <Image
                    src={IMAGES.hero}
                    alt="Professional Armed Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  
                  {/* Badge on image */}
                  {/* <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-slate-900">Active Protection</span>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us - Enhanced Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why Choose Our <br/> <span className="text-red-600">Armed Security?</span>
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover="hover"
                variants={cardHover}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-red-100" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 group-hover:bg-red-600 group-hover:shadow-red-600/30 transition-all duration-300">
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

      {/* 4. Industries Grid - Background Image Design */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.facility}
            alt="Commercial Facility Protection"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="h-1 w-24 bg-red-600 mx-auto"></div>
              <div className="h-1 w-16 bg-red-500 mx-auto mt-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We <span className="text-red-500">Protect</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              From high-value retail to corporate campuses, we provide specialized armed security 
              solutions tailored to each industry's unique requirements and challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                {/* Card with glass effect */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-red-500/50 transition-all duration-300 cursor-default overflow-hidden">
                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/10 group-hover:to-red-600/5 transition-all duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-300 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-20"
          >
            <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-10 relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Need Specialized Protection?
                </h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                  Our security experts can create a customized protection plan for your specific industry requirements.
                </p>
                
                <Button className="bg-red-600 hover:bg-red-700 text-white px-10 h-14 font-semibold rounded-lg">
                  <Shield className="mr-3 w-5 h-5" />
                  Industry Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Trust Factors */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                 <SectionHeading align="left">
                    Why Clients <br/><span className="text-red-600">Trust Proforce 1</span>
                 </SectionHeading>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                   Our reputation is built on reliability, transparency, and results. We don't just provide guards; we provide peace of mind through a comprehensive security partnership.
                 </p>
                 
                 <div className="grid gap-6">
                    {trustFactors.map((factor, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                         <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-1">
                            <Star className="w-5 h-5 text-red-600 fill-red-600" />
                         </div>
                         <div>
                            <h4 className="text-lg font-bold text-slate-900">{factor.title}</h4>
                            <p className="text-slate-500">{factor.description}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="lg:w-1/2">
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] group">
                    <Image 
                       src={IMAGES.team} 
                       alt="Security Team Briefing" 
                       fill 
                       className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
                    <div className="absolute bottom-10 left-10 right-10">
                       <blockquote className="text-white text-xl font-medium leading-relaxed italic mb-6">
                         "Proforce 1 has transformed how we handle security. Their officers are professional, their reporting is instant, and we finally feel truly protected."
                       </blockquote>
                       <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-slate-900">JD</div>
                          <div>
                             <div className="text-white font-bold">John Doe</div>
                             <div className="text-slate-400 text-sm">Director of Operations, Major Tech Firm</div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Quote Form Section - Full Width, High Impact */}
      <section id="quote-section" className="py-24 bg-slate-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-slate-950" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
               
               {/* Form Side */}
               <div className="p-10 md:p-14 w-full md:w-3/5 order-2 md:order-1">
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Get A Free Quote</h2>
                   <p className="text-slate-500 mb-10 text-lg">Secure your assets today. We'll provide a custom proposal within 2 hours.</p>
                   
                   <form className="space-y-5">
                       <div className="grid grid-cols-2 gap-5">
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="John" />
                           </div>
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="Doe" />
                           </div>
                       </div>
                       
                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                           <input type="email" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="john@company.com" />
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                           <input type="tel" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="(555) 123-4567" />
                       </div>

                       <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Service</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-700">
                                   <option>Armed Security</option>
                                   <option>Unarmed Security</option>
                                   <option>Mobile Patrol</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Industry</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-700">
                                   <option>Retail</option>
                                   <option>Corporate</option>
                                   <option>Industrial</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Details</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="Tell us about your security needs..." />
                       </div>
                       
                       <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-red-600/20 mt-2">
                           Request Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-red-600 rounded-xl mb-8 shadow-lg shadow-red-900/50">
                           <ShieldCheck className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Direct Contact <br/> Information
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Dispatch</div>
                                   <div className="text-xl font-bold tracking-tight">800-779-7691</div>
                               </div>
                           </div>
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                 <Mail className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                   <div className="text-lg font-medium break-all">info@proforce1protection.com</div>
                               </div>
                           </div>

                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
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