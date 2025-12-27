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
  Leaf, Globe, HardHat, Wrench, Hammer, Drill,
  Car, Truck as TruckIcon, LockIcon, DoorOpen,
  Flame, HardHat as HardHatIcon, FileCheck,
  Building as BuildingIcon, Settings as SettingsIcon,
  School, Hospital, AlertCircle, MapPin as MapPinIcon, Warehouse
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/construction/construction.jpeg",
  guard: "/Services/construction/construction.jpeg",
  technology: "/Services/construction/construction.jpeg",
  patrol: "/Services/construction/construction.jpeg",
  officer: "/Services/construction/construction.jpeg",
  dashboard: "/Services/armed-security.jpg",
  team: "/Services/armed-security.jpg",
  site: "/Services/construction/construction.jpeg"
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
    title: "24/7 On-Site Security Guards",
    icon: <HardHat className="w-8 h-8 text-white" />,
    description: "Licensed, trained officers on location to protect your project day and night",
    points: [
      "Continuous presence to deter theft and vandalism",
      "High-value site protection during active build phases",
      "Immediate response to incidents and emergencies",
      "Safety hazard monitoring and reporting",
      "Professional uniformed security presence"
    ],
    note: "Ideal for high-value construction sites or projects in critical build phases requiring constant security."
  },
  {
    title: "Mobile Patrol Services",
    icon: <Car className="w-8 h-8 text-white" />,
    description: "Randomized vehicle patrols that keep criminals guessing and provide comprehensive coverage",
    points: [
      "Unpredictable patrol schedules for maximum deterrence",
      "Full perimeter and site interior checks",
      "After-hours and weekend coverage",
      "Digital reports after each patrol",
      "Quick response to alarm activations"
    ],
    note: "Most construction theft happens after dark and during weekends. Our mobile patrols provide protection during these vulnerable periods."
  },
  {
    title: "Access Control & Gate Monitoring",
    icon: <DoorOpen className="w-8 h-8 text-white" />,
    description: "Comprehensive site access management to ensure only authorized personnel enter",
    points: [
      "Personnel verification and access logging",
      "Subcontractor and vendor authorization",
      "Visitor check-in and badging",
      "Equipment movement tracking",
      "Secure perimeter management"
    ],
    note: "By controlling who enters your site, we prevent unauthorized access and reduce liability risks significantly."
  },
  {
    title: "Tool & Equipment Protection",
    icon: <Wrench className="w-8 h-8 text-white" />,
    description: "Specialized security for valuable construction assets and materials",
    points: [
      "Storage container and trailer monitoring",
      "Heavy machinery and equipment security",
      "Fuel tank and hazardous material protection",
      "High-value material protection (copper, lumber, electrical)",
      "Theft prevention systems and procedures"
    ],
    note: "We focus on protecting the items most targeted by thieves to safeguard your investment and keep your project on schedule."
  }
]

const constructionServices = [
  {
    title: "24/7 Site Guards",
    icon: <HardHat className="w-6 h-6" />,
    description: "Round-the-clock on-site protection",
    details: ["Constant presence", "Incident response", "Safety monitoring"]
  },
  {
    title: "Mobile Patrols",
    icon: <Car className="w-6 h-6" />,
    description: "Randomized security patrols",
    details: ["Perimeter checks", "After-hours coverage", "Quick response"]
  },
  {
    title: "Access Control",
    icon: <DoorOpen className="w-6 h-6" />,
    description: "Site access management",
    details: ["Personnel verification", "Visitor logging", "Gate security"]
  },
  {
    title: "Equipment Protection",
    icon: <Wrench className="w-6 h-6" />,
    description: "Tool and machinery security",
    details: ["Heavy equipment", "Storage containers", "Material protection"]
  },
  {
    title: "Fire Watch",
    icon: <Flame className="w-6 h-6" />,
    description: "Fire safety and prevention",
    details: ["Hot-work monitoring", "System outages", "Safety compliance"]
  },
  {
    title: "Weekend Security",
    icon: <Clock className="w-6 h-6" />,
    description: "Weekend and holiday coverage",
    details: ["48-hour protection", "Holiday security", "Vacation coverage"]
  },
  {
    title: "Digital Reporting",
    icon: <FileCheck className="w-6 h-6" />,
    description: "Real-time activity tracking",
    details: ["GPS patrol logs", "Photo documentation", "Daily reports"]
  },
  {
    title: "Emergency Response",
    icon: <Siren className="w-6 h-6" />,
    description: "Immediate incident response",
    details: ["Theft response", "Vandalism prevention", "Safety emergencies"]
  }
]

const securityRisks = [
  "Theft of tools, materials, and heavy equipment",
  "Trespassing and unauthorized access",
  "Vandalism and property damage",
  "Fires or safety hazards",
  "Liability risks from intruders",
  "Homeless encampments and after-hours activity",
  "Equipment sabotage or tampering",
  "Copper and material theft"
]

const industries = [
  { name: "Residential Developments", icon: <Home className="w-6 h-6" />, description: "Housing project security" },
  { name: "Commercial Construction", icon: <Building2 className="w-6 h-6" />, description: "Office building protection" },
  { name: "High-Rise Buildings", icon: <Building className="w-6 h-6" />, description: "Skyscraper construction security" },
  { name: "Government Projects", icon: <BuildingIcon className="w-6 h-6" />, description: "Public works security" },
  { name: "Infrastructure Projects", icon: <SettingsIcon className="w-6 h-6" />, description: "Infrastructure protection" },
  { name: "Industrial Construction", icon: <Factory className="w-6 h-6" />, description: "Industrial site security" },
  { name: "Warehouse Construction", icon: <Warehouse className="w-6 h-6" />, description: "Storage facility protection" },
  { name: "Demolition Sites", icon: <Hammer className="w-6 h-6" />, description: "Demolition project security" },
  { name: "Renovation Projects", icon: <Wrench className="w-6 h-6" />, description: "Remodeling site protection" },
  { name: "School Construction", icon: <School className="w-6 h-6" />, description: "Educational facility security" },
  { name: "Hospital Construction", icon: <Hospital className="w-6 h-6" />, description: "Medical building protection" },
  { name: "Road Construction", icon: <MapPinIcon className="w-6 h-6" />, description: "Highway project security" }
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Decades of construction security expertise" },
  { title: "California Focused", description: "Over a decade protecting sites across California" },
  { title: "Highly Trained Officers", description: "Licensed, uniformed security professionals" },
  { title: "Strong Communication", description: "Regular updates with site supervisors & project managers" },
  { title: "Fast Response", description: "Immediate response to incidents and emergencies" },
  { title: "Customized Security Plans", description: "Tailored protection based on your project timeline" }
]

// --- Main Page Component ---

export default function ConstructionSecurityPage() {
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
            <source src="/hero/construction-security.mp4" type="video/mp4" />
            {/* Fallback if video doesn't load */}
            <Image
              src={IMAGES.hero}
              alt="Construction Site Security Services"
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
            CONSTRUCTION<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              SITE SECURITY
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
              Protecting Your Project, Your People, and Your Investment
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

      {/* 2. Professional Construction Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Construction Site Protection
                    <br />
                    <span className="text-red-600">
                      Safeguarding Projects Across California
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Construction sites face some of the highest security risks of any industry. At Proforce 1 Protection Services, we bring over 20 years of security experience to safeguard projects of every size.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Over 20 years of security experience</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium">More than a decade serving California</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Advanced reporting technology</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our construction site security officers provide a strong visible presence, rapid response, and full accountability backed by advanced reporting technology.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-red-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">High-Risk Environment Protection</div>
                          <div className="text-xs text-slate-600">Specialized security for construction challenges</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "20+", label: "Years Experience", icon: Award, color: "text-red-600" },
                    { value: "< 15 Min", label: "Response Time", icon: Clock, color: "text-blue-600" },
                    { value: "100%", label: "GPS Tracked", icon: Navigation, color: "text-green-600" },
                    { value: "24/7", label: "Site Protection", icon: HardHat, color: "text-amber-600" },
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
                    Request Construction Security Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <HardHat className="mr-3 w-5 h-5" />
                    View Site Security Plans
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
                    src={IMAGES.site}
                    alt="Construction Site Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  
                  {/* Badge on image */}
                  
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Construction Sites Need Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why Construction Sites Need <span className="text-red-600">Professional Security</span>
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              With valuable equipment and open-access areas, construction sites are high-risk targets. A trained security team dramatically reduces incidents and saves project owners thousands in potential losses.
            </p>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Common Construction Site Security Risks:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityRisks.map((risk, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-700">{risk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-slate-600 italic">
                "Whether you need overnight security, 24/7 coverage, or patrol checks, our team is trained to protect your site from start to finish."
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

      {/* 4. Construction Security Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.site}
            alt="Construction Site Protection"
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
              Our <span className="text-red-500">Construction Security Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security solutions designed specifically for construction site challenges and requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {constructionServices.map((item, idx) => (
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
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Advanced Digital Reporting & Site Transparency</h3>
                    <p className="text-slate-300">Real-time visibility of your site's security status</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Proforce 1 uses a state-of-the-art digital reporting platform, giving you complete oversight of your construction site security.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "GPS-tracked patrol logs and officer locations",
                      "Time-stamped photos from every patrol",
                      "Detailed incident reports with full documentation",
                      "Hazard and safety violation observations",
                      "Daily activity summaries delivered to your email"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Project Manager Portal</div>
                      <p className="text-slate-300">24/7 access to security reports and site status</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Industries & Projects We Cover */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <SectionHeading>
                Industries & Projects <br/> We <span className="text-red-600">Cover</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our construction security expertise spans all types of building projects across California
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
                       <span className="text-red-600">Proforce 1 for Construction Security</span>
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
                          alt="Proforce 1 Construction Security Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                             <p className="text-slate-900 font-medium italic">
                                "Proforce 1's construction security team saved us over $50,000 in equipment theft last year. Their presence on site gives us peace of mind 24/7."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                                <div>
                                   <div className="font-bold text-slate-900">Daniel Brooks</div>
                                   <div className="text-sm text-slate-600">Project Manager, Major Construction Firm</div>
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
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request a Free Proposal</h2>
                   <p className="text-slate-500 mb-10 text-lg">Whether you need short-term coverage or a long-term security partner for your construction project.</p>
                   
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
                                   <option>Construction Site Security</option>
                                   <option>24/7 On-Site Guards</option>
                                   <option>Mobile Patrol Services</option>
                                   <option>Access Control & Gate Security</option>
                                   <option>Equipment Protection</option>
                                   <option>Fire Watch for Construction</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Project Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-700">
                                   <option>Residential Construction</option>
                                   <option>Commercial Building</option>
                                   <option>Industrial Project</option>
                                   <option>Infrastructure</option>
                                   <option>Renovation/Remodel</option>
                                   <option>Demolition</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Project Details</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="Tell us about your construction project and security needs..." />
                       </div>
                       
                       <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-red-600/20 mt-2">
                           Request Construction Security Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-red-600 rounded-xl mb-8 shadow-lg shadow-red-900/50">
                           <HardHat className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Protect Your<br/>
                          Construction Investment
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Project Support</div>
                                   <div className="text-xl font-bold tracking-tight">(800) 779-7691</div>
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
                                      1671 W Katella ave suite 106 <br/>
                                      Anaheim, CA, US 92802
                                   </div>
                               </div>
                           </div>
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                 <MapPinIcon className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Service Area</div>
                                   <div className="text-base text-slate-300">
                                      Serving Construction Sites<br/>
                                      Across California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           Construction Security Teams Active
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>

    </main>
  )
}