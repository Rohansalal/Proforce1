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
  Leaf, Globe, DoorOpen, Car, Footprints, Bell,
  ShoppingCart, Headphones, BuildingIcon, School,
  Briefcase as BriefcaseIcon, Hospital, Car as CarIcon,
  Wrench, ParkingCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/unarmed/unarmed.jpeg",
  security: "/Services/unarmed/unarmed.jpeg",
  technology: "/Services/unarmed/unarmed-tech.jpg",
  patrol: "/Services/unarmed/unarmed-patrol.jpg",
  officer: "/Services/unarmed/unarmed-officer.jpg",
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
    title: "Access Control & Visitor Management",
    icon: <DoorOpen className="w-8 h-8 text-white" />,
    description: "Secure entry and exit monitoring with professional presence",
    points: [
      "Door, gate, and access point monitoring",
      "ID verification and visitor check-in",
      "Detailed visitor logs and records",
      "Secure key management",
      "24/7 entry point security"
    ],
    note: "Our officers ensure that only authorized individuals access your property while maintaining a welcoming environment."
  },
  {
    title: "Foot Patrol & Perimeter Monitoring",
    icon: <Footprints className="w-8 h-8 text-white" />,
    description: "Continuous walking patrols for comprehensive property protection",
    points: [
      "Hallway and interior patrols",
      "Parking lot and exterior monitoring",
      "High-risk zone identification",
      "Unauthorized activity detection",
      "Lighting and safety inspections"
    ],
    note: "Our officers maintain constant vigilance through regular patrols, identifying and addressing security concerns proactively."
  },
  {
    title: "Loss Prevention & Theft Deterrence",
    icon: <ShoppingCart className="w-8 h-8 text-white" />,
    description: "Visible presence that prevents theft and maintains order",
    points: [
      "Shoplifting prevention in retail spaces",
      "Employee theft deterrence",
      "Suspicious behavior monitoring",
      "Inventory protection",
      "Customer-friendly security presence"
    ],
    note: "We balance strong security presence with approachable professionalism to protect assets without intimidating customers."
  },
  {
    title: "Emergency Response & Incident Management",
    icon: <Siren className="w-8 h-8 text-white" />,
    description: "Trained professionals ready to handle any situation",
    points: [
      "Disturbance and conflict de-escalation",
      "Medical emergency response",
      "Property hazard identification",
      "Suspicious activity investigation",
      "After-hours incident management"
    ],
    note: "Our officers are trained to respond immediately and effectively to emergencies while maintaining safety and order."
  }
]

const securityServices = [
  {
    title: "Access Control",
    icon: <DoorOpen className="w-6 h-6" />,
    description: "Visitor management & secure",
    details: ["ID verification", "Visitor logs", "Gate security"]
  },
  {
    title: "Foot Patrol",
    icon: <Footprints className="w-6 h-6" />,
    description: "Continuous property monitoring",
    details: ["Perimeter checks", "Interior patrols", "Safety inspections"]
  },
  {
    title: "Mobile Patrol",
    icon: <Car className="w-6 h-6" />,
    description: "Vehicle-based security rounds",
    details: ["Randomized schedules", "Large property coverage", "Quick response"]
  },
  {
    title: "Loss Prevention",
    icon: <ShoppingCart className="w-6 h-6" />,
    description: "Theft deterrence & prevention",
    details: ["Retail security", "Shoplifting prevention", "Asset protection"]
  },
  {
    title: "Lobby Security",
    icon: <Building2 className="w-6 h-6" />,
    description: "Front desk & reception security",
    details: ["Guest greeting", "Access control", "Professional presence"]
  },
  {
    title: "Parking Security",
    icon: <CarIcon className="w-6 h-6" />,
    description: "Lot monitoring & traffic control",
    details: ["Vehicle patrols", "Break-in prevention", "Parking enforcement"]
  },
  {
    title: "Event Security",
    icon: <Users className="w-6 h-6" />,
    description: "Crowd   & event protection",
    details: ["Crowd control", "VIP protection", "Event monitoring"]
  },
  {
    title: "Digital Reporting",
    icon: <FileText className="w-6 h-6" />,
    description: "Real-time activity tracking",
    details: ["GPS logs", "Photo documentation", "Daily reports"]
  }
]

const industries = [
  { name: "Corporate Offices", icon: <Building2 className="w-6 h-6" />, description: "Business campus security" },
  { name: "Retail Stores", icon: <ShoppingBag className="w-6 h-6" />, description: "Shopping center protection" },
  { name: "Hotels & Hospitality", icon: <Hotel className="w-6 h-6" />, description: "Guest and property security" },
  { name: "Construction Sites", icon: <Wrench className="w-6 h-6" />, description: "Site equipment protection" },
  { name: "Residential Communities", icon: <Home className="w-6 h-6" />, description: "Apartment complex security" },
  { name: "Schools & Colleges", icon: <School className="w-6 h-6" />, description: "Educational facility safety" },
  { name: "Warehouses", icon: <Factory className="w-6 h-6" />, description: "Industrial site protection" },
  { name: "Medical Facilities", icon: <Hospital className="w-6 h-6" />, description: "Healthcare security" },
  { name: "Car Dealerships", icon: <CarIcon className="w-6 h-6" />, description: "Automotive lot security" },
  { name: "Government Buildings", icon: <BuildingIcon className="w-6 h-6" />, description: "Public facility protection" },
  { name: "Event Venues", icon: <Users className="w-6 h-6" />, description: "Special event security" },
  { name: "Parking Structures", icon: <ParkingCircle className="w-6 h-6" />, description: "Parking facility security" }
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Decades of professional security expertise" },
  { title: "California Focused", description: "Over a decade serving clients throughout California" },
  { title: "Licensed Professionals", description: "Fully trained and certified security officers" },
  { title: "Advanced Technology", description: "Real-time reporting and GPS tracking systems" },
  { title: "Customer-Focused Service", description: "Professional, reliable, and client-oriented approach" },
  { title: "Flexible Solutions", description: "Customizable security plans for any need" }
]

// --- Main Page Component ---

export default function UnarmedSecurityPage() {
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
            <source src="/Services/unarmed/unarmed1.mp4" type="video/mp4" />
            {/* Fallback if video doesn't load */}
            <Image
              src={IMAGES.hero}
              alt="Unarmed Security "
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
            UNARMED<br />
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
              Professional, Reliable, and Customer-Focused Protection
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

      {/* 2. Professional Security Section - Content Below Video */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Professional Unarmed Security
                    <br />
                    <span className="text-red-600">
                      Customer-Focused Protection Without Firearms
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      At Proforce 1 Protection Services, our unarmed security guards provide a strong, visible, and highly trained presence designed to protect your property, maintain order, and ensure a safe environment.
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
                        <span className="text-slate-700 font-medium">Professional, trained, and licensed officers</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our unarmed officers combine professionalism, communication skills, and situational awareness to prevent problems before they occur — offering safety without the need for a firearm-present environment.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-red-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Ideal for Customer-Facing Environments</div>
                          <div className="text-xs text-slate-600">Strong protection without intimidation factor</div>
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
                    { value: "24/7", label: "Security Coverage", icon: Shield, color: "text-amber-600" },
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
                    Request Unarmed Security Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <Shield className="mr-3 w-5 h-5" />
                    View All Services
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
                    src={IMAGES.security}
                    alt="Professional Unarmed Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  
                  {/* Badge on image */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-slate-900">On Duty Now</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Unarmed Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why Choose <span className="text-red-600">Unarmed Security</span> Guards?
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Unarmed guards are ideal for locations that need strong protection without the intimidation factor of armed officers. They are trained to:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Deter unwanted activity",
                "Maintain customer-friendly interactions",
                "Observe, report, and respond",
                "Manage access and monitor activity",
                "Prevent theft and vandalism",
                "De-escalate conflicts safely",
                "Provide fast emergency response",
                "Maintain professional presence"
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                </div>
              ))}
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

      {/* 4. Security Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.facility}
            alt="Unarmed Security Commercial Protection"
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
              Our <span className="text-red-500">Unarmed Security Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security solutions designed to protect your property while maintaining a welcoming environment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {securityServices.map((item, idx) => (
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
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Advanced Digital Reporting System</h3>
                    <p className="text-slate-300">Complete transparency and accountability for your security</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Proforce 1 uses an advanced electronic reporting platform that gives you full visibility of your site in real time.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "GPS-tracked patrol logs",
                      "Time-stamped photos of each patrol",
                      "Detailed incident reports",
                      "Daily shift activity summaries",
                      "Immediate alerts of any issues"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Real-Time Updates</div>
                      <p className="text-slate-300">Always know what's happening at your property</p>
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
                Industries We <br/> <span className="text-red-600">Serve</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our unarmed officers protect a wide range of industries across California with professional, customer-focused security solutions
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

           {/* Why Trust Us */}
           <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl p-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                       Why Clients Trust<br/>
                       <span className="text-red-600">Proforce 1 Security</span>
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
                          alt="Proforce 1 Security Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                             <p className="text-slate-900 font-medium italic">
                                "Proforce 1's unarmed guards have transformed our office security. They're professional, approachable, and provide excellent protection without intimidating our visitors."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">DB</div>
                                <div>
                                   <div className="font-bold text-slate-900">Daniel Brooks</div>
                                   <div className="text-sm text-slate-600">Office Manager, Major Corporation</div>
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
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Security Proposal</h2>
                   <p className="text-slate-500 mb-10 text-lg">Whether you need long-term coverage, temporary protection, or short-notice security.</p>
                   
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
                                   <option>Unarmed Security Guard</option>
                                   <option>Access Control</option>
                                   <option>Loss Prevention</option>
                                   <option>Mobile Patrol</option>
                                   <option>Event Security</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Industry</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-700">
                                   <option>Corporate Office</option>
                                   <option>Retail</option>
                                   <option>Hospitality</option>
                                   <option>Residential</option>
                                   <option>Industrial</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="Tell us about your property and security requirements..." />
                       </div>
                       
                       <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-red-600/20 mt-2">
                           Request Unarmed Security Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-red-600 rounded-xl mb-8 shadow-lg shadow-red-900/50">
                           <Shield className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Get Your Free<br/>
                          Security Proposal Today
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Support</div>
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
                                   1671 W Katella ave suite 106, <br/>
                                      Anaheim, CA, US 92802
                                   </div>
                               </div>
                           </div>
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                 <MapPin className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Service Area</div>
                                   <div className="text-base text-slate-300">
                                      Serving All of<br/>
                                      California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           Security Teams Active Now
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>

    </main>
  )
}