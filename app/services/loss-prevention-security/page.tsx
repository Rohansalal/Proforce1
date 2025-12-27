"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
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
  ClipboardCheck, ClipboardList, AlertOctagon, UserMinus, BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const ASSETS = {
  heroVideo: "/Services/loss/video.mp4",
  store: "/Services/loss/top.jpeg",
  warehouse: "/Services/loss/top.jpeg",
  cctv: "/Services/loss/footer.jpeg",
  officer: "/Services/loss/footer.jpeg",
  audit: "/Services/loss/footer.jpeg",
  team: "/Services/loss/footer.jpeg",
  analytics: "/Services/loss/footer.jpeg",
  // Added 'security' as a fallback or alias to 'officer' to prevent undefined errors if referenced
  security: "/Services/loss/footer.jpeg"
}

// Custom color theme using #f34100
const THEME = {
  primary: "#f34100",
  primaryLight: "#ff6d33",
  primaryDark: "#d63100",
  gradientFrom: "#f34100",
  gradientTo: "#ff5500"
}

// Custom Button with theme color
const ThemeButton = ({ children, className = "", ...props }: any) => (
  <Button 
    className={cn(
      `bg-[#f34100] hover:bg-[#d63100] text-white transition-all duration-300`,
      className
    )}
    style={{
      boxShadow: '0 4px 20px rgba(243, 65, 0, 0.3)'
    }}
    {...props}
  >
    {children}
  </Button>
)

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
    <div 
      className={cn(
        "w-16 h-1.5 mb-6 rounded-full",
        align === "center" ? "mx-auto" : "ml-0",
      )}
      style={{ 
        backgroundColor: THEME.primary,
        boxShadow: light ? `0 0 10px ${THEME.primary}40` : "none"
      }}
    />
    <h2 className={cn(
      "text-3xl md:text-5xl font-extrabold tracking-tight leading-tight",
      light ? "text-white" : "text-slate-900"
    )}>
      {children}
    </h2>
  </div>
)

const VideoBackground = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    
    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented", e));
        }
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
             <video
                ref={videoRef}
                className="absolute w-full h-full object-cover"
                src={src}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />
             {/* Overlay - Darker for retail/night/tech feel */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-[#f34100]/30" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
    )
}

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
    icon: <BarChart3 className="w-8 h-8 text-white" />,
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
        {/* Background Video */}
        <VideoBackground src={ASSETS.heroVideo} />

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8">
            LOSS PREVENTION<br />
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{
                backgroundImage: `linear-gradient(90deg, ${THEME.gradientFrom}, ${THEME.gradientTo})`
              }}
            >
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
                    <span style={{ color: THEME.primary }}>
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
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Certified Loss Prevention Specialists</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Legal apprehension and documentation expertise</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
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
                    <div 
                      className="rounded-xl p-4 border"
                      style={{ 
                        backgroundColor: `${THEME.primary}05`,
                        borderColor: `${THEME.primary}20`
                      }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div 
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: THEME.primary }}
                        >
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
                    { value: "20+", label: "Years Experience", icon: Award, color: THEME.primary },
                    { value: "30%+", label: "Average Shrinkage Reduction", icon: TrendingDown, color: "#10b981" },
                    { value: "100%", label: "Certified Officers", icon: BadgeCheck, color: "#4f46e5" },
                    { value: "500+", label: "Businesses Protected", icon: Building, color: THEME.primaryDark },
                  ].map((stat, idx) => (
                    <div 
                      key={idx} 
                      className="text-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-orange-200 transition-colors"
                      style={{
                         borderColor: idx === 0 || idx === 3 ? `${THEME.primary}30` : ''
                      }}
                    >
                      <stat.icon 
                        className="w-8 h-8 mx-auto mb-2" 
                        style={{ color: stat.color }}
                      />
                      <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wider font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <ThemeButton size="lg" className="px-10 h-14 text-base font-semibold">
                    <Phone className="mr-3 w-5 h-5" />
                    Request LP Consultation
                  </ThemeButton>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg"
                  >
                    <ShieldCheck className="mr-3 w-5 h-5" />
                    View Loss Prevention Solutions
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px] border border-slate-200">
                  <Image
                    src={ASSETS.security} // Using the security image (LP officer)
                    alt="Professional Loss Prevention Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  
                  {/* Badge on image */}
                  <div 
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border-l-4"
                    style={{ borderLeftColor: THEME.primary }}
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{ backgroundColor: THEME.primary }}
                      ></div>
                      <span className="text-sm font-bold text-slate-900">LP Certified</span>
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
            Why Your Business Needs <span style={{ color: THEME.primary }}>Loss Prevention</span>
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Shrinkage eats directly into your profits. Whether it's shoplifting, employee theft, or administrative error, our LP services are designed to identify the root cause and stop the bleeding.
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
                <div 
                  key={idx} 
                  className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:border-orange-200 transition-colors"
                  style={{
                    borderColor: idx % 2 === 0 ? `${THEME.primary}20` : ''
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${THEME.primary}15` }}
                    >
                      <ShieldCheck className="w-4 h-4" style={{ color: THEME.primary }} />
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
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:border-orange-100 transition-all duration-300"
                style={{
                  borderColor: `${THEME.primary}10`,
                  boxShadow: `0 4px 20px ${THEME.primary}05`
                }}
              >
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-opacity-30"
                  style={{ backgroundColor: `${THEME.primary}10` }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-orange-600/30 transition-all duration-300"
                    style={{ 
                      backgroundColor: THEME.primary,
                      boxShadow: `0 4px 20px ${THEME.primary}30`
                    }}
                  >
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 mb-6 font-medium">{feature.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 
                          className="w-5 h-5 flex-shrink-0 mt-0.5" 
                          style={{ color: THEME.primary }}
                        />
                        <span className="text-sm text-slate-600">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div 
                    className="p-4 rounded-xl border text-sm text-slate-600 italic"
                    style={{ 
                      backgroundColor: `${THEME.primary}05`,
                      borderColor: `${THEME.primary}10`
                    }}
                  >
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
            src={ASSETS.analytics}
            alt="Loss Prevention Analytics Environment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(15, 23, 42, 0), ${THEME.primary}10)`
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div 
                className="h-1 w-24 mx-auto"
                style={{ backgroundColor: THEME.primary }}
              ></div>
              <div 
                className="h-1 w-16 mx-auto mt-1"
                style={{ backgroundColor: THEME.primaryLight }}
              ></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span style={{ color: THEME.primaryLight }}>Loss Prevention Services</span>
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
                <div 
                  className="relative backdrop-blur-md border border-white/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 cursor-default overflow-hidden h-full"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {/* Background highlight on hover */}
                  <div 
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${THEME.primary}00, ${THEME.primary}00)`,
                    }}
                  />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.primaryDark})`,
                        boxShadow: `0 4px 20px ${THEME.primary}40`
                      }}
                    >
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 
                      className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors"
                      style={{ color: '#fff' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors">
                      {item.description}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-1">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: THEME.primary }}
                          ></div>
                          <span className="text-xs text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: THEME.primary }}
                    >
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Analytics & Reporting Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div 
              className="backdrop-blur-xl rounded-2xl p-10 relative overflow-hidden shadow-2xl"
              style={{
                background: `linear-gradient(90deg, rgba(15, 23, 42, 0.9), ${THEME.primary}15)`,
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: THEME.primary }}
                  >
                    <BarChart3 className="w-8 h-8 text-white" />
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
                        <CheckCircle2 
                          className="w-5 h-5 flex-shrink-0 mt-0.5" 
                          style={{ color: THEME.primary }}
                        />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 flex flex-col justify-center items-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Data-Driven LP</div>
                      <p className="text-slate-300 text-sm">Analytics-based loss prevention strategies</p>
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
               Industries <br/> We <span style={{ color: THEME.primary }}>Protect</span>
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
                 style={{
                   borderColor: `${THEME.primary}20`,
                   boxShadow: `0 2px 8px ${THEME.primary}05`
                 }}
               >
                 <div 
                   className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors"
                   style={{ backgroundColor: `${THEME.primary}10` }}
                 >
                   <div style={{ color: THEME.primary }}>
                     {item.icon}
                   </div>
                 </div>
                 <h4 
                   className="font-bold text-slate-900 mb-2 transition-colors"
                   style={{ color: 'inherit' }}
                 >
                   {item.name}
                 </h4>
                 <p className="text-sm text-slate-500">{item.description}</p>
               </div>
             ))}
           </div>

           {/* Why Choose Us */}
           <div 
             className="max-w-6xl mx-auto rounded-3xl p-10 border"
             style={{ 
               backgroundColor: `${THEME.primary}05`,
               borderColor: `${THEME.primary}10`
             }}
           >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                       Why Choose <br/>
                       <span style={{ color: THEME.primary }}>Proforce 1 for Loss Prevention</span>
                    </h3>
                    
                    <div className="grid gap-4">
                       {trustFactors.map((factor, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                              style={{ backgroundColor: `${THEME.primary}15` }}
                            >
                               <Star 
                                 className="w-5 h-5" 
                                 style={{ color: THEME.primary, fill: THEME.primary }}
                               />
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
                          src={ASSETS.team} 
                          alt="Proforce 1 Loss Prevention Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div 
                            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border"
                            style={{ borderColor: `${THEME.primary}20` }}
                          >
                             <p className="text-slate-900 font-medium italic mb-4">
                                "Proforce 1 reduced our shrinkage by 45% in the first year. Their loss prevention team identified theft patterns we never noticed and implemented strategies that saved us over $250,000 annually."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div 
                                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                  style={{ backgroundColor: THEME.primary }}
                                >
                                  TS
                                </div>
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
         <div 
           className="absolute inset-0"
           style={{
             background: `radial-gradient(circle at bottom left, ${THEME.primary}20, rgba(15, 23, 42, 0) 50%), #0f172a`
           }}
         />
         
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
                               <input 
                                 type="text" 
                                 className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all"
                                 placeholder="John"
                                 style={{
                                   '--tw-ring-color': THEME.primary
                                 } as React.CSSProperties}
                               />
                           </div>
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                               <input 
                                 type="text" 
                                 className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                                 placeholder="Doe"
                                 style={{
                                   '--tw-ring-color': THEME.primary
                                 } as React.CSSProperties}
                               />
                           </div>
                       </div>
                       
                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                           <input 
                             type="email" 
                             className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                             placeholder="john@company.com"
                             style={{
                               '--tw-ring-color': THEME.primary
                             } as React.CSSProperties}
                           />
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                           <input 
                             type="tel" 
                             className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                             placeholder="(555) 123-4567"
                             style={{
                               '--tw-ring-color': THEME.primary
                             } as React.CSSProperties}
                           />
                       </div>

                       <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                               <select 
                                 className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 text-slate-700"
                                 style={{
                                   '--tw-ring-color': THEME.primary
                                 } as React.CSSProperties}
                               >
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
                               <select 
                                 className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 text-slate-700"
                                 style={{
                                   '--tw-ring-color': THEME.primary
                                 } as React.CSSProperties}
                               >
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
                           <textarea 
                             rows={3} 
                             className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                             placeholder="Tell us about your business and specific loss prevention requirements..."
                             style={{
                               '--tw-ring-color': THEME.primary
                             } as React.CSSProperties}
                           />
                       </div>
                       
                       <ThemeButton className="w-full h-14 text-lg font-bold mt-2">
                           Request Loss Prevention Proposal
                       </ThemeButton>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div 
                 className="p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2"
                 style={{ backgroundColor: '#0f172a' }}
               >
                   {/* Abstract Shapes */}
                   <div 
                     className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-20 -mt-20"
                     style={{ backgroundColor: `${THEME.primary}20` }}
                   />
                   
                   <div className="relative z-10">
                       <div 
                         className="inline-block p-3 rounded-xl mb-8 shadow-lg"
                         style={{ 
                           backgroundColor: THEME.primary,
                           boxShadow: `0 4px 20px ${THEME.primary}50`
                         }}
                       >
                           <ShoppingBag className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Protect Your<br/>
                          Retail Profits
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div 
                                 className="p-2 rounded-lg group-hover:bg-opacity-100 transition-colors"
                                 style={{ backgroundColor: `${THEME.primary}20` }}
                               >
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 LP Support</div>
                                   <div className="text-xl font-bold tracking-tight">(800) 779-7691</div>
                               </div>
                           </div>
                           
                           <div className="flex items-start gap-4 group">
                               <div 
                                 className="p-2 rounded-lg group-hover:bg-opacity-100 transition-colors"
                                 style={{ backgroundColor: `${THEME.primary}20` }}
                               >
                                 <Mail className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                   <div className="text-lg font-medium break-all">info@proforce1protection.com</div>
                               </div>
                           </div>

                           <div className="flex items-start gap-4 group">
                               <div 
                                 className="p-2 rounded-lg group-hover:bg-opacity-100 transition-colors"
                                 style={{ backgroundColor: `${THEME.primary}20` }}
                               >
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
                               <div 
                                 className="p-2 rounded-lg group-hover:bg-opacity-100 transition-colors"
                                 style={{ backgroundColor: `${THEME.primary}20` }}
                               >
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
                           <div 
                             className="w-2 h-2 rounded-full animate-pulse"
                             style={{ backgroundColor: THEME.primary }}
                           />
                           Loss Prevention Teams Active 24/7
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}