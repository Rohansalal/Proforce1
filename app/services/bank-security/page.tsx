"use client"

import Image from "next/image"
import { useState } from "react"
import { 
  Shield, Lock, Banknote, Building, Users, CheckCircle2, Phone, Mail,
  Award, Clock, MapPin, AlertTriangle, BadgeCheck, ChevronRight,
  ShieldCheck, Cpu, TrendingUp, FileCheck, DoorOpen, Camera,
  AlertCircle, Eye, Radio, Siren, FileText, Navigation,
  CreditCard, Key, Vault, Receipt, Briefcase, Gem,
  Laptop, Network, Search, Fingerprint, Database, FileLock,
  Coins, Wallet, CreditCard as CreditCardIcon,
  Building2, Home, Store, AlertOctagon, Zap,
  GraduationCap, Brain, Settings, Users as UsersIcon,
  Globe, Target, Crosshair, Headphones, Calendar,
  Building as Bank, ArrowRightLeft, HandCoins,
  FileSearch, ClipboardCheck, Archive, Truck,
  Package, QrCode, Smartphone, Cctv, Bell
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/bank/bank-hero.jpg",
  security: "/Services/bank/bank-security.jpg",
  technology: "/Services/bank/bank-tech.jpg",
  lobby: "/Services/bank/bank-lobby.jpg",
  officer: "/Services/bank/bank-officer.jpg",
  command: "/Services/bank/bank-command.jpg",
  team: "/Services/bank/bank-team.jpg",
  vault: "/Services/bank/bank-vault.jpg"
}

// --- Components ---
const SectionHeading = ({
  children,
  className,
  align = "center",
  light = false
}: {
  children: React.ReactNode
  className?: string
  align?: "center" | "left"
  light?: boolean
}) => (
  <div className={cn("mb-16", align === "center" ? "text-center" : "text-left", className)}>
    <div className={cn(
      "w-16 h-1.5 mb-6 rounded-full",
      align === "center" ? "mx-auto" : "ml-0",
      light ? "bg-teal-500" : "bg-teal-600"
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
    title: "Armed Bank Security &amp; Robbery Prevention",
    icon: <Shield className="w-8 h-8 text-white" />,
    description: "Highly trained armed security personnel for bank branch protection",
    points: [
      "State-certified armed security officers",
      "Robbery prevention and response protocols",
      "High-risk transaction security",
      "Defensive tactics and de-escalation training",
      "Active shooter response training"
    ],
    note: "Our armed bank security officers are trained to protect your staff, customers, and assets during high-risk situations while maintaining compliance with banking regulations."
  },
  {
    title: "Cash Handling &amp; ATM Security",
    icon: <Banknote className="w-8 h-8 text-white" />,
    description: "Comprehensive protection for cash operations and ATM facilities",
    points: [
      "Cash-in-transit security coordination",
      "ATM site security and anti-skimming measures",
      "Night deposit box protection",
      "Armored car arrival/departure security",
      "Cash room and teller line security"
    ],
    note: "We implement layered security measures to protect your most valuable assets during transport, storage, and customer transactions."
  },
  {
    title: "Vault &amp; Safe Deposit Security",
    icon: <Vault className="w-8 h-8 text-white" />,
    description: "Advanced security for bank vaults and safe deposit facilities",
    points: [
      "Vault access control and monitoring",
      "Safe deposit box room security",
      "Dual control protocol implementation",
      "Audit trail maintenance and compliance",
      "After-hours vault area security"
    ],
    note: "Our specialized training includes vault security protocols, dual control procedures, and regulatory compliance for secure deposit facilities."
  },
  {
    title: "Bank Lobby &amp; Customer Service Security",
    icon: <Users className="w-8 h-8 text-white" />,
    description: "Customer-focused security that enhances the banking experience",
    points: [
      "Customer queue management and assistance",
      "VIP and high-net-worth client protection",
      "Fraud prevention and suspicious activity monitoring",
      "Customer dispute de-escalation",
      "Accessible banking service support"
    ],
    note: "We balance robust security with excellent customer service, creating safe environments where customers feel protected and valued."
  }
]

const bankServices = [
  {
    title: "Armed Bank Security",
    icon: <Shield className="w-6 h-6" />,
    description: "Armed protection for branches",
    details: ["Teller line security", "Lobby protection", "Robbery prevention"]
  },
  {
    title: "ATM Security",
    icon: <CreditCardIcon className="w-6 h-6" />,
    description: "ATM site protection",
    details: ["24/7 monitoring", "Anti-skimming", "Cash replenishment"]
  },
  {
    title: "Vault Security",
    icon: <Vault className="w-6 h-6" />,
    description: "Vault &amp; safe deposit",
    details: ["Access control", "Dual control", "Compliance audits"]
  },
  {
    title: "Cash Transit",
    icon: <Truck className="w-6 h-6" />,
    description: "Cash-in-transit security",
    details: ["Armored car coordination", "Route security", "Delivery protection"]
  },
  {
    title: "Fraud Prevention",
    icon: <FileSearch className="w-6 h-6" />,
    description: "Suspicious activity monitoring",
    details: ["Transaction monitoring", "ID verification", "Fraud detection"]
  },
  {
    title: "Compliance Security",
    icon: <ClipboardCheck className="w-6 h-6" />,
    description: "Regulatory compliance",
    details: ["FDIC compliance", "Audit support", "Incident reporting"]
  },
  {
    title: "Executive Protection",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Bank executive security",
    details: ["Personal protection", "Travel security", "Risk assessment"]
  },
  {
    title: "Digital Security",
    icon: <Cctv className="w-6 h-6" />,
    description: "Surveillance systems",
    details: ["CCTV monitoring", "Access control", "Digital recording"]
  }
]

const bankTypes = [
  { name: "Commercial Banks", icon: <Bank className="w-6 h-6" />, description: "Full-service bank security" },
  { name: "Community Banks", icon: <Users className="w-6 h-6" />, description: "Local bank protection" },
  { name: "Credit Unions", icon: <Coins className="w-6 h-6" />, description: "Member-owned institution security" },
  { name: "Savings Banks", icon: <Wallet className="w-6 h-6" />, description: "Savings institution protection" },
  { name: "Investment Banks", icon: <TrendingUp className="w-6 h-6" />, description: "Investment banking security" },
  { name: "Private Banks", icon: <Gem className="w-6 h-6" />, description: "High-net-worth banking security" },
  { name: "Online Banks", icon: <Laptop className="w-6 h-6" />, description: "Digital banking security" },
  { name: "Regional Banks", icon: <MapPin className="w-6 h-6" />, description: "Regional banking security" },
  { name: "International Banks", icon: <Globe className="w-6 h-6" />, description: "Global banking security" },
  { name: "Mortgage Banks", icon: <Home className="w-6 h-6" />, description: "Mortgage lending security" },
  { name: "Consumer Banks", icon: <CreditCardIcon className="w-6 h-6" />, description: "Consumer banking security" },
  { name: "Corporate Banks", icon: <Building2 className="w-6 h-6" />, description: "Corporate banking security" }
]

const trustFactors = [
  { title: "FDIC &amp; FINRA Compliant", description: "Security protocols meeting banking regulations" },
  { title: "25+ Years Experience", description: "Decades of specialized bank security expertise" },
  { title: "Armed Guard Certified", description: "State-certified armed security personnel" },
  { title: "Bank-Specific Training", description: "Specialized training for banking environments" },
  { title: "Advanced Technology", description: "Modern security systems integration" },
  { title: "24/7 Monitoring", description: "Round-the-clock bank security support" }
]

// --- Main Page Component ---
export default function BankSecurityPage() {
  const [formData, setFormData] = useState({
    name: "",
    bank: "",
    phone: "",
    email: "",
    service: "",
    bankType: "",
    message: ""
  })

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero}
            alt="Bank Security Services"
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-900/60 to-teal-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8">
            BANK<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
              SECURITY SERVICES
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Financial Institution Protection
            </span>
          </div>

          {/* Subtle subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 font-light">
              Comprehensive Security Solutions for Banks, Credit Unions, and Financial Institutions
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
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="text-slate-400 text-sm animate-bounce">
              <ChevronRight className="w-6 h-6 transform rotate-90 mx-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. Professional Bank Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Bank Security Specialists
                    <br />
                    <span className="text-teal-600">
                      Protecting Financial Assets &amp; Customer Trust
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Banks face unique security challenges including armed robbery, fraud, cash handling risks, and regulatory compliance. At Proforce 1, we provide specialized bank security that protects your assets while maintaining customer confidence.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                        </div>
                        <span className="text-slate-700 font-medium">FDIC and FINRA compliance expertise</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                        </div>
                        <span className="text-slate-700 font-medium">State-certified armed security officers</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Specialized cash handling and vault security training</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our bank security officers are trained in both traditional banking security protocols and modern threat mitigation. We understand that protecting financial institutions requires balancing accessibility with stringent security measures.
                    </p>
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-teal-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Banking Security Experts</div>
                          <div className="text-xs text-slate-600">Meeting financial industry regulations</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "25+", label: "Years Experience", icon: Award, color: "text-teal-600" },
                    { value: "100%", label: "Certified Officers", icon: BadgeCheck, color: "text-green-600" },
                    { value: "24/7", label: "Security Coverage", icon: Clock, color: "text-amber-600" },
                    { value: "60+", label: "Bank Clients", icon: Bank, color: "text-blue-600" },
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
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-10 h-14 text-base font-semibold rounded-lg">
                    <Phone className="mr-3 w-5 h-5" />
                    Request Security Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <ShieldCheck className="mr-3 w-5 h-5" />
                    View Banking Solutions
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                  <Image
                    src={IMAGES.security}
                    alt="Professional Bank Security Officer"
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
                      <span className="text-sm font-semibold text-slate-900">FDIC Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Bank Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why <span className="text-teal-600">Banks</span> Need Specialized Security
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Banking environments require security solutions that address both traditional threats and modern challenges while maintaining regulatory compliance and customer trust.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Armed robbery prevention",
                "Fraud detection",
                "Cash handling security",
                "ATM protection",
                "Vault security",
                "Regulatory compliance",
                "Customer safety",
                "Executive protection"
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 italic">
                "Effective bank security protects not just financial assets, but customer trust and regulatory standing—the foundation of any successful financial institution."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-teal-100" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 group-hover:bg-teal-600 group-hover:shadow-teal-600/30 transition-all duration-300">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bank Security Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.vault}
            alt="Bank Security Environment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="h-1 w-24 bg-teal-600 mx-auto"></div>
              <div className="h-1 w-16 bg-teal-500 mx-auto mt-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-teal-500">Bank Security Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security solutions designed specifically for banks and financial institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bankServices.map((item, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Card with glass effect */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-teal-500/50 transition-all duration-300 cursor-default overflow-hidden">
                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/0 to-teal-600/0 group-hover:from-teal-600/10 group-hover:to-teal-600/5 transition-all duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors">
                      {item.description}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-1">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                          <span className="text-xs text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compliance &amp; Fraud Prevention Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-10 relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-teal-600 rounded-xl">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Regulatory Compliance &amp; Fraud Prevention</h3>
                    <p className="text-slate-300">Comprehensive security meeting banking regulations and preventing financial crimes</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Proforce 1 provides specialized security solutions that meet FDIC, FINRA, and banking industry regulations while implementing advanced fraud prevention measures to protect against financial crimes.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "FDIC compliance documentation and support",
                      "Fraud detection and suspicious activity monitoring",
                      "Bank Secrecy Act (BSA) compliance assistance",
                      "Anti-money laundering (AML) protocols",
                      "Regulatory audit preparation and support"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Compliance Ready</div>
                      <p className="text-slate-300">Meeting all banking industry regulatory requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bank Types We Protect */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <SectionHeading>
                Bank Types <br/> We <span className="text-teal-600">Protect</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our specialized security services cover all types of banks and financial institutions across California
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {bankTypes.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-teal-600">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.description}</p>
                </div>
              ))}
           </div>

           {/* Why Choose Us */}
           <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl p-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                       Why Choose <br/>
                       <span className="text-teal-600">Proforce 1 for Bank Security</span>
                    </h3>
                    
                    <div className="grid gap-4">
                       {trustFactors.map((factor, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-1">
                               <BadgeCheck className="w-5 h-5 text-teal-600 fill-teal-600" />
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
                          alt="Proforce 1 Bank Security Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                             <p className="text-slate-900 font-medium italic">
                                "Proforce 1's bank security team helped us achieve perfect FDIC compliance scores and reduced robbery attempts by 75%. Their officers are professional, highly trained, and understand banking operations."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">MJ</div>
                                <div>
                                   <div className="font-bold text-slate-900">Maria Johnson</div>
                                   <div className="text-sm text-slate-600">Security Director, Regional Bank</div>
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
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
               
               {/* Form Side */}
               <div className="p-10 md:p-14 w-full md:w-3/5 order-2 md:order-1">
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Bank Security Proposal</h2>
                   <p className="text-slate-500 mb-10 text-lg">Specialized security solutions for banks and financial institutions.</p>
                   
                   <form className="space-y-5">
                       <div className="grid grid-cols-2 gap-5">
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="John" />
                           </div>
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="Doe" />
                           </div>
                       </div>
                       
                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                           <input type="email" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="john@bankname.com" />
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                           <input type="tel" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="(800) 779-7691" />
                       </div>

                       <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-700">
                                   <option>Armed Bank Branch Security</option>
                                   <option>ATM Security &amp; Protection</option>
                                   <option>Vault &amp; Safe Deposit Security</option>
                                   <option>Cash-In-Transit Security</option>
                                   <option>Fraud Prevention &amp; Monitoring</option>
                                   <option>Full Bank Security Package</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Bank Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-700">
                                   <option>Commercial Bank</option>
                                   <option>Community Bank</option>
                                   <option>Credit Union</option>
                                   <option>Savings Bank</option>
                                   <option>Investment Bank</option>
                                   <option>Private Bank</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="Tell us about your bank and specific security requirements..." />
                       </div>
                       
                       <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-teal-600/20 mt-2">
                           Request Bank Security Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-teal-600 rounded-xl mb-8 shadow-lg shadow-teal-900/50">
                           <Bank className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Protect Your<br/>
                          Financial Institution
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-teal-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Bank Security</div>
                                   <div className="text-xl font-bold tracking-tight">(800) 779-7691</div>
                               </div>
                           </div>
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-teal-600 transition-colors">
                                 <Mail className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                   <div className="text-lg font-medium break-all">info@proforce1protection.com</div>
                               </div>
                           </div>

                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-teal-600 transition-colors">
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
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-teal-600 transition-colors">
                                 <MapPin className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Service Area</div>
                                   <div className="text-base text-slate-300">
                                      Serving Banks<br/>
                                      Across California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           FDIC-Compliant Bank Security Teams
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}