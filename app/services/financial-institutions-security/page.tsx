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
  School, Hospital, AlertCircle, MapPin as MapPinIcon, Warehouse,
  Vault, CreditCard, DollarSign, LineChart, Landmark,
  Coins, Percent, Receipt, Shield as ShieldIcon,
  Fingerprint, Key, QrCode, AlertOctagon, FileKey,
  Banknote as BanknoteIcon, FileLock2, MonitorCog,
  Network, Database, EyeOff
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/gallery/videos/emergency-response.mp4",
  lobby: "/Services/financial/bank-lobby.jpg",
  technology: "/Services/financial/security-tech.jpg",
  patrol: "/Services/financial/patrol-officer.jpg",
  officer: "/Services/financial/armed-guard.jpg",
  vault: "/Services/financial/vault-security.jpg",
  team: "/Services/financial/security-team.jpg",
  atm: "/Services/financial/atm-security.jpg"
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
const whyChooseUs = [
  {
    title: "24/7 Armed & Unarmed Guards",
    icon: <Shield className="w-8 h-8 text-white" />,
    description: "Licensed, highly-trained security officers protecting your financial institution",
    points: [
      "Professional uniformed presence in lobbies and customer areas",
      "Specialized training in de-escalation and crisis management",
      "Robbery response protocols and procedures",
      "Customer service integration with security duties",
      "Executive protection for VIPs and high-value clients"
    ],
    note: "Our officers are trained to balance security with customer service, ensuring safe and welcoming banking environments."
  },
  {
    title: "ATM & Night Deposit Protection",
    icon: <CreditCard className="w-8 h-8 text-white" />,
    description: "Comprehensive security for ATM locations and night deposit facilities",
    points: [
      "Regular patrols of remote ATM locations",
      "Transaction monitoring during vulnerable hours",
      "Skimming device detection and prevention",
      "Night deposit service escort protection",
      "24/7 surveillance and rapid response"
    ],
    note: "ATMs account for significant financial losses. Our proactive protection reduces skimming, vandalism, and armed robbery incidents."
  },
  {
    title: "Vault & Cash Handling Security",
    icon: <Vault className="w-8 h-8 text-white" />,
    description: "Specialized protection for cash handling, transport, and storage areas",
    points: [
      "Armored car loading/unloading supervision",
      "Cashier area protection during peak hours",
      "Vault access control and monitoring",
      "Cash handling procedure compliance",
      "Dual-verification security protocols"
    ],
    note: "Internal theft prevention and secure cash handling procedures protect both assets and employee integrity."
  },
  {
    title: "Financial Cyber-Physical Security",
    icon: <Cpu className="w-8 h-8 text-white" />,
    description: "Integrated security bridging physical and digital threats",
    points: [
      "Server room and data center physical security",
      "Employee access control to sensitive systems",
      "Social engineering threat mitigation",
      "Physical breach response coordination",
      "PCI-DSS compliance support"
    ],
    note: "Modern financial security requires protecting both physical assets and the digital infrastructure that holds them."
  }
]

const financialServices = [
  {
    title: "Bank Lobby Security",
    icon: <Building2 className="w-6 h-6" />,
    description: "Professional customer-facing protection",
    details: ["Customer safety", "Dispute resolution", "Emergency response"]
  },
  {
    title: "Armed Transportation",
    icon: <Truck className="w-6 h-6" />,
    description: "Cash-in-transit protection",
    details: ["Armored escorts", "Route security", "Loading supervision"]
  },
  {
    title: "ATM Surveillance",
    icon: <Camera className="w-6 h-6" />,
    description: "24/7 ATM monitoring",
    details: ["Remote monitoring", "Skimming prevention", "Patrol checks"]
  },
  {
    title: "Vault Security",
    icon: <Vault className="w-6 h-6" />,
    description: "High-security area protection",
    details: ["Access control", "Dual verification", "Audit compliance"]
  },
  {
    title: "Night Patrols",
    icon: <EyeOff className="w-6 h-6" />,
    description: "After-hours facility security",
    details: ["Perimeter checks", "Alarm response", "Intrusion detection"]
  },
  {
    title: "Executive Protection",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "VIP and executive security",
    details: ["Personal protection", "Travel security", "Event security"]
  },
  {
    title: "Compliance Auditing",
    icon: <FileCheck className="w-6 h-6" />,
    description: "Security compliance support",
    details: ["Regulatory compliance", "Risk assessments", "Audit preparation"]
  },
  {
    title: "Crisis Management",
    icon: <AlertOctagon className="w-6 h-6" />,
    description: "Emergency response planning",
    details: ["Robbery protocols", "Active shooter", "Evacuation plans"]
  }
]

const securityRisks = [
  "Armed robbery and violent crime",
  "ATM skimming and card fraud",
  "Internal theft and embezzlement",
  "Cyber-physical coordinated attacks",
  "Social engineering and pretexting",
  "Check fraud and document forgery",
  "Night deposit theft",
  "VIP and executive targeting",
  "Protest and civil unrest",
  "Terrorism and violent extremism"
]

const institutions = [
  { name: "Commercial Banks", icon: <Banknote className="w-6 h-6" />, description: "Full-service banking protection" },
  { name: "Credit Unions", icon: <Users className="w-6 h-6" />, description: "Member-focused financial security" },
  { name: "Investment Firms", icon: <LineChart className="w-6 h-6" />, description: "High-value asset protection" },
  { name: "Mortgage Lenders", icon: <Home className="w-6 h-6" />, description: "Document and data security" },
  { name: "Currency Exchanges", icon: <Coins className="w-6 h-6" />, description: "Cash handling security" },
  { name: "Payment Processors", icon: <CreditCard className="w-6 h-6" />, description: "Transaction security" },
  { name: "Loan Offices", icon: <FileText className="w-6 h-6" />, description: "Document protection" },
  { name: "ATM Networks", icon: <CreditCard className="w-6 h-6" />, description: "Machine security monitoring" },
  { name: "Financial Data Centers", icon: <Database className="w-6 h-6" />, description: "Infrastructure protection" },
  { name: "Wealth Management", icon: <TrendingUp className="w-6 h-6" />, description: "High-net-worth client security" },
  { name: "Insurance Companies", icon: <ShieldIcon className="w-6 h-6" />, description: "Corporate office protection" },
  { name: "FinTech Startups", icon: <Cpu className="w-6 h-6" />, description: "Tech-enabled security solutions" }
]

const trustFactors = [
  { title: "25+ Years Experience", description: "Decades of financial institution protection" },
  { title: "FINRA Compliance", description: "Full compliance with financial regulations" },
  { title: "Ex-LEO Officers", description: "Former law enforcement and military personnel" },
  { title: "Banking Partnership", description: "Trusted by major financial institutions" },
  { title: "60-Second Response", description: "Average armed response time" },
  { title: "Custom Risk Assessments", description: "Tailored security for each institution" }
]

// --- Main Page Component ---

export default function FinancialInstitutionsSecurityPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    institution: "",
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
            <source src="/hero/financial-security.mp4" type="video/mp4" />
            {/* Fallback if video doesn't load */}
            <Image
              src={IMAGES.hero}
              alt="Financial Institutions Security Services"
              fill
              className="object-cover"
              priority
            />
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 via-orange-800/50 to-orange-900/30" />
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
            FINANCIAL<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              INSTITUTIONS
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Security Solutions
            </span>
          </motion.h1>

          {/* Subtle subtitle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-xl text-slate-200 mb-8 font-light">
              Protecting Assets, Customers, and Your Financial Reputation
            </p>
            
            {/* Simple CTA Button */}
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 h-16 text-lg font-semibold rounded-lg"
            >
              <Shield className="mr-3 w-5 h-5" />
              Request Financial Security Assessment
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="text-slate-300 text-sm animate-bounce">
              <ChevronRight className="w-6 h-6 transform rotate-90 mx-auto" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. Professional Financial Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Bank & Financial Security
                    <br />
                    <span className="text-orange-600">
                      Protecting Financial Integrity
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Financial institutions face unique security challenges requiring specialized expertise. At Proforce 1 Protection Services, we bring over 25 years of experience safeguarding banks, credit unions, and financial firms.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium">25+ years of financial security experience</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium">FINRA and banking compliance expertise</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Advanced cyber-physical security integration</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our financial security officers are specially trained to handle banking environments, from customer-facing roles to high-security vault protection.
                    </p>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">High-Risk Financial Protection</div>
                          <div className="text-xs text-slate-600">Specialized security for banking challenges</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "25+", label: "Years Experience", icon: Award, color: "text-orange-600" },
                    { value: "60 Sec", label: "Avg Response", icon: Clock, color: "text-green-600" },
                    { value: "100%", label: "Licensed Staff", icon: BadgeCheck, color: "text-amber-600" },
                    { value: "24/7", label: "Financial Watch", icon: Banknote, color: "text-purple-600" },
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
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-10 h-14 text-base font-semibold rounded-lg">
                    <Shield className="mr-3 w-5 h-5" />
                    Request Financial Security Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <FileCheck className="mr-3 w-5 h-5" />
                    View Compliance Solutions
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
                    src={IMAGES.lobby}
                    alt="Bank Lobby Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  
                  {/* Badge on image */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-5 h-5 text-orange-600" />
                      <span className="font-bold text-slate-900">FINRA Compliant</span>
                    </div>
                    <p className="text-sm text-slate-600">Meeting all financial security regulations</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Financial Institutions Need Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why Financial Institutions Need <span className="text-orange-600">Professional Security</span>
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              With valuable assets, sensitive data, and public trust at stake, financial institutions require specialized security solutions that address both physical and digital threats.
            </p>
            
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Common Financial Security Risks:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {securityRisks.map((risk, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-700">{risk}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-slate-600 italic">
                "Whether you need lobby security, ATM protection, or executive security, our team is trained to protect your institution's assets and reputation."
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

      {/* 4. Financial Security Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.vault}
            alt="Financial Vault Security"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/95 via-orange-900/90 to-orange-900/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-800/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="h-1 w-24 bg-orange-600 mx-auto"></div>
              <div className="h-1 w-16 bg-orange-500 mx-auto mt-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-orange-400">Financial Security Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security solutions designed specifically for banking and financial institution requirements
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {financialServices.map((item, idx) => (
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
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-orange-500/50 transition-all duration-300 cursor-default overflow-hidden">
                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/10 group-hover:to-orange-600/5 transition-all duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors">
                      {item.description}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-1">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compliance & Digital Reporting Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-20"
          >
            <div className="bg-gradient-to-r from-orange-900/90 to-orange-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-10 relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-600 rounded-xl">
                    <FileLock2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Compliance & Digital Security Reporting</h3>
                    <p className="text-slate-300">Meeting FINRA, FDIC, and banking security requirements</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Proforce 1 provides comprehensive compliance support and digital reporting to meet all financial security regulations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "FINRA and banking compliance documentation",
                      "Digital audit trails and access logs",
                      "Incident reporting with regulatory templates",
                      "Security assessment documentation",
                      "Automated compliance reporting"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-orange-800/50 rounded-xl p-6 border border-orange-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Compliance Portal</div>
                      <p className="text-slate-300">24/7 access to security compliance documentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Industries & Institutions We Cover */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <SectionHeading>
                Financial Institutions <br/> We <span className="text-orange-600">Protect</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our financial security expertise spans all types of banking and financial services across California
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {institutions.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-orange-600">
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
                       <span className="text-orange-600">Proforce 1 for Financial Security</span>
                    </h3>
                    
                    <div className="grid gap-4">
                       {trustFactors.map((factor, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-1">
                               <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
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
                          alt="Proforce 1 Financial Security Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-orange-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                             <p className="text-slate-900 font-medium italic">
                                "Proforce 1's financial security team has protected our branches for over 8 years. Their understanding of banking regulations and customer service excellence is unmatched."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">SC</div>
                                <div>
                                   <div className="font-bold text-slate-900">Sarah Chen</div>
                                   <div className="text-sm text-slate-600">Security Director, Major California Bank</div>
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
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-900/20 via-slate-950 to-slate-950" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
               
               {/* Form Side */}
               <div className="p-10 md:p-14 w-full md:w-3/5 order-2 md:order-1">
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request a Financial Security Assessment</h2>
                   <p className="text-slate-500 mb-10 text-lg">Whether you need branch security, ATM protection, or comprehensive financial security solutions.</p>
                   
                   <form className="space-y-5">
                       <div className="grid grid-cols-2 gap-5">
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="John" />
                           </div>
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="Doe" />
                           </div>
                       </div>
                       
                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                           <input type="email" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="john@bank.com" />
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                           <input type="tel" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="(555) 123-4567" />
                       </div>

                       <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-700">
                                   <option>Bank Lobby Security</option>
                                   <option>ATM Security & Monitoring</option>
                                   <option>Armed Cash Transport</option>
                                   <option>Vault & Cash Handling Security</option>
                                   <option>Executive Protection</option>
                                   <option>Financial Compliance Auditing</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Institution Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-700">
                                   <option>Commercial Bank</option>
                                   <option>Credit Union</option>
                                   <option>Investment Firm</option>
                                   <option>Mortgage Lender</option>
                                   <option>FinTech Company</option>
                                   <option>Payment Processor</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="Describe your financial security requirements and concerns..." />
                       </div>
                       
                       <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-orange-600/20 mt-2">
                           Request Financial Security Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-orange-600 rounded-xl mb-8 shadow-lg shadow-orange-900/50">
                           <ShieldCheck className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Secure Your<br/>
                          Financial Assets
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Financial Security</div>
                                   <div className="text-xl font-bold tracking-tight">800-779-7691</div>
                               </div>
                           </div>
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-600 transition-colors">
                                 <Mail className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                   <div className="text-lg font-medium break-all">financial@proforce1protection.com</div>
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
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-600 transition-colors">
                                 <MapPinIcon className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Service Area</div>
                                   <div className="text-base text-slate-300">
                                      Serving Financial Institutions<br/>
                                      Across California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           Financial Security Teams Active
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>

    </main>
  )
}