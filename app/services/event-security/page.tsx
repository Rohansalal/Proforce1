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
  Leaf, Globe, Ticket, Calendar, Music, Heart,
  Crown, Car, DoorOpen, FileCheck, Headphones,
  BuildingIcon, Star as StarIcon, Megaphone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/event-security/event.jpeg",
  security: "/Services/event-security/event.jpeg",
  technology: "/Services/event-security/event-tech.jpg",
  crowd: "/Services/event-security/event-crowd.jpg",
  officer: "/Services/event-security/footer.jpeg",
  dashboard: "/Services/event-security/footer.jpeg",
  team: "/Services/event-security/footer.jpeg",
  facility: "/Services/event-security/footer.jpeg"
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
    title: "Access Control & Guest Screening",
    icon: <Ticket className="w-8 h-8 text-white" />,
    description: "Comprehensive entry management for authorized access only",
    points: [
      "Check-in area management and organization",
      "Ticket and credential verification systems",
      "VIP entrance security and protection",
      "Vendor and staff access control",
      "Professional guest screening procedures"
    ],
    note: "We ensure only authorized guests, vendors, and staff enter your event while maintaining a welcoming atmosphere."
  },
  {
    title: "Crowd Management & Guest Safety",
    icon: <Users className="w-8 h-8 text-white" />,
    description: "Skilled professionals guiding large groups safely and efficiently",
    points: [
      "Smooth guest flow and traffic management",
      "Clear emergency exit maintenance",
      "Safe walkway and passage management",
      "Overcrowding prevention in key areas",
      "Calm and controlled environment maintenance"
    ],
    note: "Our team ensures your event runs smoothly with professional crowd management that prioritizes guest safety."
  },
  {
    title: "Emergency Response & First Aid Support",
    icon: <Siren className="w-8 h-8 text-white" />,
    description: "Immediate response capabilities for any situation",
    points: [
      "Medical incident response and first aid",
      "Disturbance and conflict de-escalation",
      "Unauthorized access intervention",
      "Safety hazard identification and management",
      "Rapid emergency coordination"
    ],
    note: "Our trained officers respond immediately to emergencies, ensuring guest safety and event continuity."
  },
  {
    title: "VIP & Executive Protection",
    icon: <Crown className="w-8 h-8 text-white" />,
    description: "Discreet, professional protection for high-profile attendees",
    points: [
      "Celebrity and executive security details",
      "Private family event protection",
      "High-profile guest arrival and departure",
      "Discreet security presence",
      "Confidentiality and professionalism"
    ],
    note: "We provide discreet yet comprehensive protection for VIPs without disrupting the event experience."
  }
]

const eventServices = [
  {
    title: "Access Control",
    icon: <Ticket className="w-6 h-6" />,
    description: "Guest screening & entry management",
    details: ["Ticket verification", "VIP entrances", "Staff access"]
  },
  {
    title: "Crowd Management",
    icon: <Users className="w-6 h-6" />,
    description: "Large group safety & flow control",
    details: ["Guest flow", "Exit management", "Overcrowding prevention"]
  },
  {
    title: "Armed/Unarmed Guards",
    icon: <Shield className="w-6 h-6" />,
    description: "Appropriate security levels",
    details: ["Risk assessment", "Professional presence", "Event-specific"]
  },
  {
    title: "Parking Security",
    icon: <Car className="w-6 h-6" />,
    description: "Vehicle & lot protection",
    details: ["Entry/exit control", "Theft prevention", "Traffic management"]
  },
  {
    title: "Emergency Response",
    icon: <Siren className="w-6 h-6" />,
    description: "Immediate incident handling",
    details: ["Medical response", "Conflict resolution", "Safety hazards"]
  },
  {
    title: "VIP Protection",
    icon: <Crown className="w-6 h-6" />,
    description: "High-profile guest security",
    details: ["Celebrity security", "Executive protection", "Discreet presence"]
  },
  {
    title: "Digital Reporting",
    icon: <FileCheck className="w-6 h-6" />,
    description: "Real-time event monitoring",
    details: ["GPS tracking", "Live updates", "Activity reports"]
  },
  {
    title: "Event Planning",
    icon: <Calendar className="w-6 h-6" />,
    description: "Custom security coordination",
    details: ["Pre-event planning", "Risk assessment", "Custom solutions"]
  }
]

const eventTypes = [
  { name: "Corporate Conferences", icon: <Briefcase className="w-6 h-6" />, description: "Business event security" },
  { name: "Networking Events", icon: <Users className="w-6 h-6" />, description: "Professional gathering protection" },
  { name: "Award Ceremonies", icon: <Award className="w-6 h-6" />, description: "Formal event security" },
  { name: "Weddings & Private Parties", icon: <Heart className="w-6 h-6" />, description: "Celebration security" },
  { name: "Festivals & Outdoor Events", icon: <Music className="w-6 h-6" />, description: "Large outdoor event protection" },
  { name: "Fashion Shows", icon: <ShoppingBag className="w-6 h-6" />, description: "Runway and show security" },
  { name: "Convention Center Events", icon: <Building2 className="w-6 h-6" />, description: "Large venue protection" },
  { name: "Community Gatherings", icon: <UsersIcon className="w-6 h-6" />, description: "Public event security" },
  { name: "Charity Events", icon: <Heart className="w-6 h-6" />, description: "Nonprofit function protection" },
  { name: "Concerts", icon: <Music className="w-6 h-6" />, description: "Live music event security" },
  { name: "Trade Shows", icon: <BuildingIcon className="w-6 h-6" />, description: "Exhibition protection" },
  { name: "VIP Functions", icon: <Crown className="w-6 h-6" />, description: "High-profile event security" }
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Decades of professional event security expertise" },
  { title: "California Coverage", description: "Statewide service for events across California" },
  { title: "Professional Officers", description: "Trained, customer-friendly security professionals" },
  { title: "Real-Time Reporting", description: "Clear, live digital updates during events" },
  { title: "Complete Customization", description: "Tailored security for each event's unique needs" },
  { title: "Reliable Communication", description: "On-time, fully communicative team coordination" }
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
            <source src="/Services/event-security/event.mp4" type="video/mp4" />
            {/* Fallback if video doesn't load */}
            <Image
              src={IMAGES.hero}
              alt="Event Security Services"
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
            EVENT<br />
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
              Expert Security Team for Safe, Successful, and Stress-Free Events
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

      {/* 2. Professional Event Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Professional Event Protection
                    <br />
                    <span className="text-red-600">
                      Safe, Controlled, and Organized Environments
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Hosting an event requires precision, planning, and professional protection. At Proforce 1 Protection Services, our Event Security Expert Team specializes in delivering safe, controlled, and organized environments for events of all sizes.
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
                        <span className="text-slate-700 font-medium">Professional, customer-friendly officers</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      From intimate gatherings to large-scale conferences, we tailor every detail to ensure your event is protected from start to finish without disrupting the experience.
                    </p>
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-red-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Complete Event Coverage</div>
                          <div className="text-xs text-slate-600">From corporate conferences to private celebrations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "20+", label: "Years Experience", icon: Award, color: "text-red-600" },
                    { value: "< 2 Min", label: "Response Time", icon: Clock, color: "text-blue-600" },
                    { value: "100%", label: "Professional Team", icon: Users, color: "text-green-600" },
                    { value: "24/7", label: "Event Support", icon: Calendar, color: "text-amber-600" },
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
                    Request Event Security Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <Calendar className="mr-3 w-5 h-5" />
                    View Event Planning Services
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
                    alt="Professional Event Security Team"
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
                      <span className="text-sm font-semibold text-slate-900">Events Secured</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Event Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why Choose <span className="text-red-600">Proforce 1 for Event Security</span>?
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Our event security officers are trained to handle all aspects of event safety and guest management with professionalism and situational awareness.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Large crowd management",
                "VIP arrival security",
                "High-value setup protection",
                "Access control systems",
                "Guest management",
                "Emergency response",
                "De-escalation techniques",
                "Theft prevention"
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

            <div className="text-center mt-8">
              <p className="text-slate-600 italic">
                "We combine professionalism, situational awareness, and strong customer service to protect your event without disrupting the experience."
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

      {/* 4. Event Security Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.facility}
            alt="Event Security Crowd Management"
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
              Our <span className="text-red-500">Event Security Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security solutions designed specifically for event environments and guest safety
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {eventServices.map((item, idx) => (
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
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Advanced Digital Reporting for Full Transparency</h3>
                    <p className="text-slate-300">Real-time visibility into your event's security operations</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Proforce 1 uses an advanced digital security platform to deliver complete transparency and control during your event.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Live GPS tracking of all security officers",
                      "Time-stamped photo documentation",
                      "Detailed shift and incident reports",
                      "Real-time activity updates during the event",
                      "Post-event summary and analysis"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Event Manager Portal</div>
                      <p className="text-slate-300">24/7 access to security status and reports</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Events We Specialize In */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <SectionHeading>
                Events We <br/> <span className="text-red-600">Specialize In</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our event security expertise covers all types of gatherings and celebrations across California
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {eventTypes.map((item, idx) => (
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

           {/* Why Our Team Stands Out */}
           <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl p-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                       Why Our <br/>
                       <span className="text-red-600">Event Team Stands Out</span>
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
                          alt="Proforce 1 Event Security Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                             <p className="text-slate-900 font-medium italic">
                                "Proforce 1 managed security for our 500-person conference flawlessly. Their team was professional, discreet, and ensured our event ran smoothly without any incidents."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">OG</div>
                                <div>
                                   <div className="font-bold text-slate-900">Olivia Green</div>
                                   <div className="text-sm text-slate-600">Event Director, Major Conference</div>
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
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request a Customized Event Security Quote</h2>
                   <p className="text-slate-500 mb-10 text-lg">Whether you're planning a one-day event or a multi-day conference.</p>
                   
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
                           <input type="tel" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="(800) 779-7691" />
                       </div>

                       <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-700">
                                   <option>Event Security Team</option>
                                   <option>Crowd Management</option>
                                   <option>Access Control</option>
                                   <option>VIP Protection</option>
                                   <option>Parking Security</option>
                                   <option>Full Event Package</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Event Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-700">
                                   <option>Corporate Conference</option>
                                   <option>Private Party/Wedding</option>
                                   <option>Concert/Festival</option>
                                   <option>Charity Event</option>
                                   <option>Tradeshow/Exhibition</option>
                                   <option>Community Event</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Event Details</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all" placeholder="Tell us about your event, expected attendance, and security needs..." />
                       </div>
                       
                       <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-red-600/20 mt-2">
                           Request Event Security Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-red-600 rounded-xl mb-8 shadow-lg shadow-red-900/50">
                           <Calendar className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Stress-Free<br/>
                          Event Security
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-red-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Event Support</div>
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
                                 <MapPin className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Service Area</div>
                                   <div className="text-base text-slate-300">
                                      Serving Events<br/>
                                      Across California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           Event Security Teams Available
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>

    </main>
  )
}