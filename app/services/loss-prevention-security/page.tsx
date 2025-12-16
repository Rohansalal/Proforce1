"use client"

import Image from "next/image"
import { useState } from "react"
import { 
  Shield, Lock, Users, CheckCircle2, Phone, Mail,
  Award, Clock, MapPin, AlertTriangle, BadgeCheck, ChevronRight,
  ShieldCheck, Cpu, TrendingUp, FileCheck, DoorOpen, Camera,
  AlertCircle, Eye, Radio, Siren, FileText, Navigation,
  ShoppingBag, ShoppingCart, Package, Tag, Store, Building,
  CreditCard, Key, Target, Crosshair, Headphones, Zap,
  BatteryCharging, Settings, Globe, Brain, GraduationCap,
  Briefcase, Home, Map, Compass, Search, Filter,
  Calendar, Clock as ClockIcon, Bell, BellRing, Megaphone,
  UserCheck, UserX, Users as UsersIcon, UserPlus,
  Award as AwardIcon, Star, Gift, Percent, DollarSign,
  BarChart, PieChart, LineChart, TrendingDown, EyeOff,
  Fingerprint, Database, Network, Server, QrCode,
  Smartphone, Tablet, Monitor, Receipt, FileBarChart,
  ClipboardCheck, ClipboardList, AlertOctagon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/loss-prevention/loss-hero.jpg",
  security: "/Services/loss-prevention/loss-security.jpg",
  technology: "/Services/loss-prevention/loss-tech.jpg",
  retail: "/Services/loss-prevention/loss-retail.jpg",
  officer: "/Services/loss-prevention/loss-officer.jpg",
  command: "/Services/loss-prevention/loss-command.jpg",
  team: "/Services/loss-prevention/loss-team.jpg",
  analytics: "/Services/loss-prevention/loss-analytics.jpg"
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
    title: "Shoplifting Prevention & Apprehension",
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    description: "Professional loss prevention officers trained to prevent and apprehend shoplifters",
    points: [
      "Visible deterrent presence to prevent theft",
      "Plainclothes surveillance for discreet monitoring",
      "Organized Retail Crime (ORC) identification",
      "Proper apprehension procedures and documentation",
      "Civil demand recovery processes"
    ],
    note: "Our loss prevention officers are trained in legal apprehension procedures that minimize liability while maximizing recovery."
  },
  {
    title: "Employee Theft Investigation & Prevention",
    icon: <Users className="w-8 h-8 text-white" />,
    description: "Comprehensive programs to identify and prevent internal theft",
    points: [
      "Internal investigation protocols",
      "Point-of-sale exception monitoring",
      "Cash handling procedure audits",
      "Employee bag check procedures",
      "Whistleblower protection programs"
    ],
    note: "Employee theft accounts for significant retail losses. Our specialized programs help identify and prevent internal theft while maintaining employee trust."
  },
  {
    title: "Organized Retail Crime Prevention",
    icon: <AlertCircle className="w-8 h-8 text-white" />,
    description: "Specialized strategies to combat organized retail crime networks",
    points: [
      "ORC ring identification and tracking",
      "Booster team recognition and prevention",
      "Merchandise protection strategies",
      "Collaboration with law enforcement",
      "Return fraud prevention programs"
    ],
    note: "Organized Retail Crime costs businesses billions annually. Our specialized training helps identify and prevent ORC activity before it impacts your bottom line."
  },
  {
    title: "Inventory Shrinkage Analysis & Prevention",
    icon: <BarChart className="w-8 h-8 text-white" />,
    description: "Data-driven approaches to identify and reduce inventory shrinkage",
    points: [
      "Shrinkage trend analysis",
      "High-risk merchandise protection",
      "Inventory control procedures",
      "Receiving and shipping audits",
      "Vendor theft prevention"
    ],
    note: "We combine physical security with data analytics to identify shrinkage patterns and implement targeted prevention strategies."
  }
]

const lossPreventionServices = [
  {
    title: "Shoplifting Prevention",
    icon: <ShoppingBag className="w-6 h-6" />,
    description: "Theft deterrence & apprehension",
    details: ["Plainclothes surveillance", "Legal apprehensions", "ORC prevention"]
  },
  {
    title: "Employee Theft",
    icon: <UserX className="w-6 h-6" />,
    description: "Internal theft prevention",
    details: ["Internal investigations", "POS monitoring", "Cash handling audits"]
  },
  {
    title: "ORC Prevention",
    icon: <AlertCircle className="w-6 h-6" />,
    description: "Organized crime prevention",
    details: ["Booster team identification", "Merchandise protection", "Law enforcement coordination"]
  },
  {
    title: "Return Fraud",
    icon: <Receipt className="w-6 h-6" />,
    description: "Fraudulent return prevention",
    details: ["Receipt verification", "Return authorization", "Fraud pattern identification"]
  },
  {
    title: "Inventory Control",
    icon: <ClipboardCheck className="w-6 h-6" />,
    description: "Shrinkage reduction",
    details: ["Inventory audits", "Receiving checks", "Vendor oversight"]
  },
  {
    title: "High-Value Protection",
    icon: <DollarSign className="w-6 h-6" />,
    description: "Premium merchandise security",
    details: ["Locked case management", "Electronic article surveillance", "Display protection"]
  },
  {
    title: "Digital Reporting",
    icon: <FileBarChart className="w-6 h-6" />,
    description: "Loss analytics & reporting",
    details: ["Shrinkage analysis", "Incident tracking", "Compliance reporting"]
  },
  {
    title: "Training Programs",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Employee training",
    details: ["Theft prevention training", "Customer service", "Emergency procedures"]
  }
]

const industriesServed = [
  { name: "Retail Stores", icon: <Store className="w-6 h-6" />, description: "General merchandise retail" },
  { name: "Department Stores", icon: <ShoppingBag className="w-6 h-6" />, description: "Multi-department retail" },
  { name: "Supermarkets", icon: <ShoppingCart className="w-6 h-6" />, description: "Grocery retail security" },
  { name: "Electronics Retail", icon: <Cpu className="w-6 h-6" />, description: "Electronics store protection" },
  { name: "Apparel Retail", icon: <Users className="w-6 h-6" />, description: "Clothing store security" },
  { name: "Home Improvement", icon: <Home className="w-6 h-6" />, description: "Home goods retail security" },
  { name: "Luxury Retail", icon: <DollarSign className="w-6 h-6" />, description: "High-end merchandise protection" },
  { name: "Pharmacies", icon: <Package className="w-6 h-6" />, description: "Pharmacy retail security" },
  { name: "Convenience Stores", icon: <Store className="w-6 h-6" />, description: "C-store loss prevention" },
  { name: "Warehouse Clubs", icon: <Building className="w-6 h-6" />, description: "Membership club security" },
  { name: "Specialty Retail", icon: <Gift className="w-6 h-6" />, description: "Specialty store protection" },
  { name: "Outlet Stores", icon: <Tag className="w-6 h-6" />, description: "Outlet center security" }
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Decades of specialized loss prevention expertise" },
  { title: "LP Certified Officers", description: "Certified Loss Prevention Specialists" },
  { title: "30%+ Shrinkage Reduction", description: "Proven track record of reducing losses" },
  { title: "Legal Compliance", description: "All apprehensions conducted within legal guidelines" },
  { title: "Data-Driven Approach", description: "Analytics-based loss prevention strategies" },
  { title: "California Coverage", description: "Serving businesses across California" }
]

// --- Main Page Component ---
export default function LossPreventionSecurityPage() {
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
      
      {/* 1. Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.hero}
            alt="Loss Prevention Security Services"
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-purple-900/60 to-purple-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8">
            LOSS PREVENTION<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              SECURITY SERVICES
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Protect Your Profits
            </span>
          </div>

          {/* Subtle subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 font-light">
              Specialized Security Solutions to Reduce Shrinkage and Prevent Retail Theft
            </p>
            
            {/* Simple CTA Button */}
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-10 h-16 text-lg font-semibold rounded-lg"
            >
              <Phone className="mr-3 w-5 h-5" />
              Request Loss Prevention Consultation
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="text-slate-400 text-sm animate-bounce">
              <ChevronRight className="w-6 h-6 transform rotate-90 mx-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. Professional Loss Prevention Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Loss Prevention Specialists
                    <br />
                    <span className="text-purple-600">
                      Reducing Shrinkage & Protecting Profits
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Retail shrinkage costs businesses billions annually. At Proforce 1, we provide specialized loss prevention services that identify theft vulnerabilities, apprehend offenders, and implement strategies to protect your bottom line.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Certified Loss Prevention Specialists</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Legal apprehension and documentation expertise</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Data-driven shrinkage analysis and prevention</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our loss prevention officers are trained in both visible deterrence and discreet surveillance techniques. We understand that effective loss prevention balances theft prevention with positive customer experiences.
                    </p>
                    <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Loss Prevention Certified</div>
                          <div className="text-xs text-slate-600">Specialized training for theft prevention</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "20+", label: "Years Experience", icon: Award, color: "text-purple-600" },
                    { value: "30%+", label: "Average Shrinkage Reduction", icon: TrendingDown, color: "text-green-600" },
                    { value: "100%", label: "Certified Officers", icon: BadgeCheck, color: "text-blue-600" },
                    { value: "500+", label: "Businesses Protected", icon: Building, color: "text-amber-600" },
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
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 h-14 text-base font-semibold rounded-lg">
                    <Phone className="mr-3 w-5 h-5" />
                    Request LP Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <ShieldCheck className="mr-3 w-5 h-5" />
                    View Loss Prevention Solutions
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                  <Image
                    src={IMAGES.security}
                    alt="Professional Loss Prevention Officer"
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
                      <span className="text-sm font-semibold text-slate-900">LP Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Loss Prevention Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why <span className="text-purple-600">Loss Prevention</span> is Critical for Retail Success
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Effective loss prevention addresses multiple theft sources while maintaining customer service excellence and legal compliance.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Shoplifting prevention",
                "Employee theft",
                "Organized retail crime",
                "Return fraud",
                "Vendor theft",
                "Administrative errors",
                "High-value protection",
                "Inventory shrinkage"
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 italic">
                "Every dollar saved through effective loss prevention goes directly to your bottom line. Professional LP services typically provide a 3:1 return on investment."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Loss Prevention Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.analytics}
            alt="Loss Prevention Analytics Environment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="h-1 w-24 bg-purple-600 mx-auto"></div>
              <div className="h-1 w-16 bg-purple-500 mx-auto mt-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-purple-500">Loss Prevention Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive solutions designed to identify, prevent, and reduce retail shrinkage
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {lossPreventionServices.map((item, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Card with glass effect */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-purple-500/50 transition-all duration-300 cursor-default overflow-hidden">
                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-purple-600/5 transition-all duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors">
                      {item.description}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-1">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span className="text-xs text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Analytics & Reporting Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-10 relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-600 rounded-xl">
                    <BarChart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Loss Prevention Analytics & Reporting</h3>
                    <p className="text-slate-300">Data-driven insights to identify shrinkage patterns and prevent losses</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Proforce 1 combines physical security with advanced analytics to provide comprehensive loss prevention insights. Our reporting systems identify theft patterns, track shrinkage trends, and provide actionable recommendations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Monthly shrinkage analysis and reporting",
                      "Theft pattern identification and tracking",
                      "High-risk merchandise protection analysis",
                      "Employee theft risk assessment",
                      "ROI analysis of loss prevention measures"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Data-Driven LP</div>
                      <p className="text-slate-300">Analytics-based loss prevention strategies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <SectionHeading>
                Industries <br/> We <span className="text-purple-600">Protect</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our specialized loss prevention services cover all types of retail businesses across California
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {industriesServed.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-purple-600">
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
                       <span className="text-purple-600">Proforce 1 for Loss Prevention</span>
                    </h3>
                    
                    <div className="grid gap-4">
                       {trustFactors.map((factor, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-1">
                               <Star className="w-5 h-5 text-purple-600 fill-purple-600" />
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
                          alt="Proforce 1 Loss Prevention Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                             <p className="text-slate-900 font-medium italic">
                                "Proforce 1 reduced our shrinkage by 45% in the first year. Their loss prevention team identified theft patterns we never noticed and implemented strategies that saved us over $250,000 annually."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">TS</div>
                                <div>
                                   <div className="font-bold text-slate-900">Thomas Smith</div>
                                   <div className="text-sm text-slate-600">Retail Operations Director, Department Store Chain</div>
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
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
               
               {/* Form Side */}
               <div className="p-10 md:p-14 w-full md:w-3/5 order-2 md:order-1">
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Loss Prevention Proposal</h2>
                   <p className="text-slate-500 mb-10 text-lg">Specialized security solutions to reduce shrinkage and prevent retail theft.</p>
                   
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
                               <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-700">
                                   <option>Shoplifting Prevention & Apprehension</option>
                                   <option>Employee Theft Investigation</option>
                                   <option>Organized Retail Crime Prevention</option>
                                   <option>Return Fraud Prevention</option>
                                   <option>Inventory Shrinkage Analysis</option>
                                   <option>Full Loss Prevention Package</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Industry Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-700">
                                   <option>Retail Store</option>
                                   <option>Department Store</option>
                                   <option>Supermarket/Grocery</option>
                                   <option>Electronics Retail</option>
                                   <option>Apparel Retail</option>
                                   <option>Specialty Retail</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all" placeholder="Tell us about your business and specific loss prevention requirements..." />
                       </div>
                       
                       <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-purple-600/20 mt-2">
                           Request Loss Prevention Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-purple-600 rounded-xl mb-8 shadow-lg shadow-purple-900/50">
                           <ShoppingBag className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Protect Your<br/>
                          Retail Profits
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-purple-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 LP Support</div>
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
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-purple-600 transition-colors">
                                 <MapPin className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Service Area</div>
                                   <div className="text-base text-slate-300">
                                      Serving Retail Businesses<br/>
                                      Across California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           Loss Prevention Teams Active
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}