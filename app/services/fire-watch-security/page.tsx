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
  Leaf, Globe, Flame, AlertCircle, Clipboard,
  Wrench, HardHat, Thermometer, FileCheck,
  BuildingIcon, School, Hospital, ParkingCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/fire-security/fire.jpeg",
  guard: "/Services/fire-security/fire.jpeg",
  technology: "/Services/fire-watch/fire-watch-tech.jpg",
  construction: "/Services/armed-security.jpg",
  officer: "/Services/armed-security.jpg",
  dashboard: "/Services/armed-security.jpg",
  team: "/Services/armed-security.jpg",
  facility: "/Services/armed-security.jpg"
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
    title: "Continuous Patrol Monitoring",
    icon: <Flame className="w-8 h-8 text-white" />,
    description: "Regular patrols checking for fire hazards and early warning signs",
    points: [
      "Patrols every 15 minutes (as required)",
      "Smoke, heat, and spark detection",
      "Electrical hazard identification",
      "Open flame monitoring",
      "Unsafe equipment inspection"
    ],
    note: "Our officers maintain constant vigilance to detect early signs of fire before they become emergencies."
  },
  {
    title: "Immediate Emergency Response",
    icon: <AlertCircle className="w-8 h-8 text-white" />,
    description: "Trained professionals ready to respond instantly to fire emergencies",
    points: [
      "Immediate 911 notification",
      "Property manager alerts",
      "Area evacuation if needed",
      "Fire extinguisher deployment",
      "Detailed incident documentation"
    ],
    note: "Our priority is safety, fast response, and preventing damage to life and property."
  },
  {
    title: "Compliant Documentation & Logs",
    icon: <Clipboard className="w-8 h-8 text-white" />,
    description: "Accurate records meeting all fire marshal requirements",
    points: [
      "Time-stamped patrol entries",
      "Detailed observation logs",
      "Hazard detection records",
      "Action taken documentation",
      "Fire marshal-ready reports"
    ],
    note: "We maintain comprehensive logs that satisfy all regulatory requirements and inspection standards."
  },
  {
    title: "Construction & Renovation Fire Watch",
    icon: <HardHat className="w-8 h-8 text-white" />,
    description: "Specialized fire safety for construction and hot-work projects",
    points: [
      "New construction site protection",
      "Remodeling project safety",
      "Sprinkler system shutdown coverage",
      "Hot-work monitoring (welding, cutting)",
      "OSHA compliance assurance"
    ],
    note: "Our team ensures job-site safety and compliance during high-risk construction activities."
  }
]

const fireWatchServices = [
  {
    title: "Continuous Monitoring",
    icon: <Flame className="w-6 h-6" />,
    description: "Regular fire hazard patrols",
    details: ["15-minute intervals", "Hazard detection", "Early warning"]
  },
  {
    title: "Emergency Response",
    icon: <AlertCircle className="w-6 h-6" />,
    description: "Immediate fire emergency action",
    details: ["911 notification", "Evacuation", "Fire control"]
  },
  {
    title: "Log Documentation",
    icon: <Clipboard className="w-6 h-6" />,
    description: "Compliant record keeping",
    details: ["Time-stamped logs", "Inspection reports", "Legal compliance"]
  },
  {
    title: "Construction Watch",
    icon: <HardHat className="w-6 h-6" />,
    description: "Site-specific fire safety",
    details: ["Hot-work monitoring", "System shutdowns", "OSHA compliance"]
  },
  {
    title: "24/7 Coverage",
    icon: <Clock className="w-6 h-6" />,
    description: "Round-the-clock protection",
    details: ["Daytime coverage", "Overnight watch", "Weekend protection"]
  },
  {
    title: "Hazard Inspection",
    icon: <Thermometer className="w-6 h-6" />,
    description: "Comprehensive hazard checks",
    details: ["Smoke detection", "Heat monitoring", "Electrical safety"]
  },
  {
    title: "System Failure Watch",
    icon: <Wrench className="w-6 h-6" />,
    description: "Protection during outages",
    details: ["Alarm system down", "Sprinkler failure", "Water supply issues"]
  },
  {
    title: "Digital Reporting",
    icon: <FileCheck className="w-6 h-6" />,
    description: "Real-time activity tracking",
    details: ["GPS logs", "Photo documentation", "Daily reports"]
  }
]

const fireWatchReasons = [
  "Fire alarms or sprinklers are down or malfunctioning",
  "Construction or remodeling work disables fire protection",
  "Water supply to fire systems is offline",
  "High-risk fire hazards exist on the property",
  "Fire marshal or city inspector mandates on-site fire watch",
  "Hot-work activities require continuous monitoring",
  "Temporary system shutdowns for maintenance",
  "Building code compliance requirements"
]

const industries = [
  { name: "Commercial Buildings", icon: <Building2 className="w-6 h-6" />, description: "Office building fire safety" },
  { name: "Hotels & Hospitality", icon: <Hotel className="w-6 h-6" />, description: "Guest accommodation protection" },
  { name: "Construction Sites", icon: <HardHat className="w-6 h-6" />, description: "Construction project safety" },
  { name: "Apartment Complexes", icon: <Home className="w-6 h-6" />, description: "Residential community protection" },
  { name: "Warehouses", icon: <Factory className="w-6 h-6" />, description: "Storage facility fire watch" },
  { name: "Manufacturing Facilities", icon: <Settings className="w-6 h-6" />, description: "Production plant safety" },
  { name: "Retail Centers", icon: <ShoppingBag className="w-6 h-6" />, description: "Shopping mall protection" },
  { name: "Schools & Universities", icon: <School className="w-6 h-6" />, description: "Educational facility safety" },
  { name: "Hospitals", icon: <Hospital className="w-6 h-6" />, description: "Medical center fire watch" },
  { name: "Public Facilities", icon: <BuildingIcon className="w-6 h-6" />, description: "Government building protection" },
  { name: "Event Venues", icon: <Users className="w-6 h-6" />, description: "Special event fire safety" },
  { name: "Parking Structures", icon: <ParkingCircle className="w-6 h-6" />, description: "Parking facility protection" }
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Decades of professional security and fire safety expertise" },
  { title: "California Compliant", description: "Full compliance with all California Fire Marshal standards" },
  { title: "Fully Trained Officers", description: "Specialized fire watch training and certification" },
  { title: "Fast Deployment", description: "Same-day or emergency coverage available 24/7" },
  { title: "Detailed Documentation", description: "Comprehensive logs required by fire inspectors" },
  { title: "24/7 Dispatch Support", description: "Constant communication and emergency response" }
]

// --- Main Page Component ---

export default function FireWatchSecurityPage() {
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
            poster={IMAGES.hero}
          >
            <source src="/Services/fire-security/fire-watch.mp4" type="video/mp4" />
            {/* Fallback if video doesn't load */}
            <Image
              src={IMAGES.hero}
              alt="Fire Watch Security Services"
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
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8"
          >
            FIRE WATCH<br />
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
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-slate-300 mb-8 font-light">
              Reliable, Trained, and Code-Compliant Fire Watch Protection
            </p>
            
            {/* Simple CTA Button */}
            <a
              href="tel:8007797691"
              aria-label="Call Proforce 1 Dispatch"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-10 h-16 text-lg font-semibold rounded-lg"
            >
              <Phone className="mr-3 w-5 h-5" />
              Request Quote
            </a>
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

      {/* 2. Professional Fire Watch Section - Content Below Video */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Professional Fire Watch Protection
                    <br />
                    <span className="text-red-600">
                      When Fire Systems Fail or Are Compromised
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      When fire systems fail or a property becomes vulnerable to fire hazards, you need a professional fire watch team you can trust. At Proforce 1 Protection Services, we provide fully trained, dependable, and compliant Fire Watch Security Guards.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium">20+ years of security experience</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Over a decade serving California</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Compliant with all fire safety requirements</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our fire watch officers deliver continuous monitoring, fast reporting, and immediate emergency response to keep your property safe when fire protection systems are compromised.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-red-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Code-Compliant Protection</div>
                          <div className="text-xs text-slate-600">Meets all California Fire Marshal standards</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "20+", label: "Years Experience", icon: Award, color: "text-red-600" },
                    { value: "< 15 Min", label: "Patrol Interval", icon: Clock, color: "text-blue-600" },
                    { value: "100%", label: "Code Compliant", icon: BadgeCheck, color: "text-green-600" },
                    { value: "24/7", label: "Emergency Response", icon: Siren, color: "text-amber-600" },
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
                    Request Fire Watch Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <Flame className="mr-3 w-5 h-5" />
                    View Compliance Requirements
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
                    src={IMAGES.guard}
                    alt="Professional Fire Watch Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  
                  {/* Badge on image  */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Is Fire Watch Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            What Is <span className="text-red-600">Fire Watch</span>?
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Fire watch is required when fire protection systems are compromised or when high-risk activities create fire hazards. Our officers monitor your site without interruption to detect early signs of smoke, fire, or hazardous conditions.
            </p>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Fire Watch Is Required When:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fireWatchReasons.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-slate-600 italic">
                "Our Fire Watch officers act instantly to protect life and property when fire systems are offline."
              </p>
            </div>
          </div>

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

      {/* 4. Fire Watch Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.facility}
            alt="Fire Watch Commercial Protection"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="h-1 w-24 bg-red-600 mx-auto"></div>
              <div className="h-1 w-16 bg-red-500 mx-auto mt-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-red-500">Fire Watch Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive fire safety monitoring designed to protect your property when fire systems are compromised
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {fireWatchServices.map((item, idx) => (
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
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors">
                      {item.description}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-1">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span className="text-xs text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
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

          {/* Digital Reporting Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-20"
          >
            <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-10 relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-600 rounded-xl">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Advanced Digital Reporting System</h3>
                    <p className="text-slate-300">Complete transparency and compliance tracking</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Proforce 1 uses an advanced digital reporting platform to give you complete oversight and ensure regulatory compliance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Real-time GPS-tracked patrol logs",
                      "Time-stamped fire watch entries",
                      "Photos of hazards or findings",
                      "Detailed incident reports",
                      "Daily activity summary emails"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Inspection Ready</div>
                      <p className="text-slate-300">All documentation meets fire marshal requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <SectionHeading>
                Industries We <br/> <span className="text-red-600">Protect</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our fire watch officers protect a wide range of industries across California with professional, code-compliant fire safety monitoring
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {industries.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-red-600">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </motion.div>
              ))}
           </div>

           {/* Why Choose Us */}
           <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl p-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                       Why Choose <br/>
                       <span className="text-red-600">Proforce 1 for Fire Watch</span>
                    </h3>
                    
                    <div className="grid gap-4">
                       {trustFactors.map((factor, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-1">
                               <Star className="w-5 h-5 text-red-600 fill-red-600" />
                            </div>
                            <div>
                               <h4 className="text-lg font-bold text-slate-900">{factor.title}</h4>
                               <p className="text-slate-600">{factor.description}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px]">
                       <Image 
                          src={IMAGES.team} 
                          alt="Proforce 1 Fire Watch Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                             <p className="text-slate-900 font-medium italic">
                                "When our sprinkler system failed, Proforce 1 had fire watch officers on site within 2 hours. Their documentation was flawless and kept us compliant with the fire marshal."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                                <div>
                                   <div className="font-bold text-slate-900">Daniel Brooks</div>
                                   <div className="text-sm text-slate-600">Property Manager, Commercial Building</div>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Quote Form Section */}
      <section id="quote-section" className="py-24 bg-slate-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/20 via-slate-950 to-slate-950" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
               
               {/* Form Side */}
               <div className="p-10 md:p-14 w-full md:w-3/5 order-2 md:order-1">
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Fire Watch Service</h2>
                   <p className="text-slate-500 mb-10 text-lg">Need immediate coverage? We are available 24/7 for emergency fire watch.</p>
                   
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
                               <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-700">
                                   <option>Fire Watch Security</option>
                                   <option>Construction Fire Watch</option>
                                   <option>Emergency Fire Watch</option>
                                   <option>Hot-Work Monitoring</option>
                                   <option>24/7 Fire Watch Coverage</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Industry</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-700">
                                   <option>Commercial Building</option>
                                   <option>Construction Site</option>
                                   <option>Hospitality</option>
                                   <option>Residential</option>
                                   <option>Industrial</option>
                                   <option>Healthcare</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Fire Safety Situation</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="Describe your fire system status and safety requirements..." />
                       </div>
                       
                       <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-red-600/20 mt-2">
                           Request Emergency Fire Watch
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-red-600 rounded-xl mb-8 shadow-lg shadow-red-900/50">
                           <Flame className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Emergency Fire Watch<br/>
                          Available 24/7
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Emergency Dispatch</div>
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
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                 <Clock className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Response Time</div>
                                   <div className="text-base text-slate-300">
                                      Same-Day<br/>
                                      Coverage Available
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           Fire Watch Teams Active Now
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>

    </main>
  )
}