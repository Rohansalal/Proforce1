"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { 
  Shield, CheckCircle2, Phone, Mail,
  Award, Clock, MapPin, BadgeCheck, ChevronRight,
  ShieldCheck, Cpu, FileCheck, Camera,
  AlertCircle, Navigation,
  Building, Landmark, Key, 
  Zap, Globe, Banknote, 
  ArrowUp, Users, Eye, Siren, LayoutDashboard,
  Wallet, DollarSign, CreditCard, Lock,
  PiggyBank, BarChart3, Receipt, Users as UsersIcon, FileLock, AlarmClock, GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const ASSETS = {
  heroVideo: "/Services/financial-institutions-security/video.mp4", // Video for Hero Section
  lobby: "/Services/financial-institutions-security/fincial.jpeg",
  skyline: "/Services/financial-institutions-security/fincial.jpeg",
  concierge: "/Services/financial-institutions-security/fincial.jpeg",
  controlRoom: "/Services/financial-institutions-security/fincial.jpeg",
  patrol: "/Services/financial-institutions-security/fincial.jpeg",
  security: "/Services/financial-institutions-security/fincial.jpeg",
  team: "/Services/financial-institutions-security/fincial.jpeg"
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
             {/* Overlay - Using Slate/Orange tones for Financial/Trust feel */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-[#f34100]/40" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
    )
}

// --- Data ---
const whyChooseUs = [
  {
    title: "High-Value Asset Protection",
    icon: <Lock className="w-8 h-8 text-white" />,
    description: "Specialized protocols for securing currency and sensitive data",
    points: [
      "Vault & safe deposit monitoring",
      "Cash-in-transit coordination",
      "Teller line protection",
      "ATM skimming prevention",
      "Sensitive document security"
    ],
    note: "Financial institutions require a higher level of vigilance. We protect your assets with military precision."
  },
  {
    title: "Customer & Staff Safety",
    icon: <Users className="w-8 h-8 text-white" />,
    description: "Maintaining a secure yet welcoming banking environment",
    points: [
      "Lobby ambassador services",
      "Conflict de-escalation",
      "Disorderly conduct management",
      "Opening & closing escorts",
      "Emergency evacuation leadership"
    ],
    note: "We balance strict security with customer service, ensuring your clients feel safe and valued."
  },
  {
    title: "Regulatory Compliance",
    icon: <FileCheck className="w-8 h-8 text-white" />,
    description: "Meeting federal and state financial security mandates",
    points: [
      "FDIC security compliance",
      "Audit trail documentation",
      "Incident reporting standards",
      "Regular risk assessments",
      "Bank Protection Act adherence"
    ],
    note: "Our officers are trained in the specific regulatory requirements of the financial sector."
  },
  {
    title: "Rapid Incident Response",
    icon: <Siren className="w-8 h-8 text-white" />,
    description: "Immediate action for alarms and threats",
    points: [
      "Robbery deterrence & response",
      "Panic alarm verification",
      "Suspicious activity intervention",
      "Law enforcement liaison",
      "Post-incident reporting"
    ],
    note: "In a crisis, seconds matter. Our team is trained to react instantly to protect lives and property."
  }
]

const servicesList = [
  {
    title: "Bank Lobby Security",
    icon: <Landmark className="w-6 h-6" />,
    description: "Front-line defense",
    details: ["Access control", "Customer greeting", "Deterrence"]
  },
  {
    title: "ATM Patrols",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Machine safety",
    details: ["Skimmer checks", "Lighting inspection", "Loitering removal"]
  },
  {
    title: "Armed Guarding",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "High-risk protection",
    details: ["Licensed officers", "Tactical training", "Cash escort"]
  },
  {
    title: "Surveillance",
    icon: <Camera className="w-6 h-6" />,
    description: "Video monitoring",
    details: ["CCTV oversight", "Remote viewing", "Evidence retrieval"]
  },
  {
    title: "Opening/Closing",
    icon: <Key className="w-6 h-6" />,
    description: "Staff protection",
    details: ["Interior sweeps", "Exterior checks", "Safe entry/exit"]
  },
  {
    title: "Parking Security",
    icon: <Navigation className="w-6 h-6" />,
    description: "Exterior safety",
    details: ["Vehicle patrols", "Employee escorts", "Lighting checks"]
  },
  {
    title: "Fraud Prevention",
    icon: <Eye className="w-6 h-6" />,
    description: "Loss control",
    details: ["Identity verification", "Suspicious behavior detection"]
  },
  {
    title: "Emergency Response",
    icon: <AlertCircle className="w-6 h-6" />,
    description: "Crisis management",
    details: ["Robbery protocol", "Medical aid", "Police coordination"]
  }
]


const buildingTypes = [
  { name: "Retail Banks", icon: <Landmark className="w-6 h-6" />, description: "Branch locations & lobbies" },
  { name: "Credit Unions", icon: <Users className="w-6 h-6" />, description: "Member-focused centers" },
  { name: "Investment Firms", icon: <BarChart3 className="w-6 h-6" />, description: "Wealth management offices" }, 
  { name: "Corporate HQs", icon: <Building className="w-6 h-6" />, description: "Financial centers" },
  { name: "Data Centers", icon: <Cpu className="w-6 h-6" />, description: "Financial data protection" },
  { name: "ATM Kiosks", icon: <CreditCard className="w-6 h-6" />, description: "Remote banking sites" },
  { name: "Cash Vaults", icon: <Lock className="w-6 h-6" />, description: "High-security storage" },
  { name: "Exchange Bureaus", icon: <DollarSign className="w-6 h-6" />, description: "Currency services" }
]


const trustFactors = [
  { title: "Financial Expertise", description: "Specialized training in banking security protocols and robbery response." },
  { title: "Armed & Unarmed", description: "Flexible staffing options based on your branch's risk profile." },
  { title: "Technologically Integrated", description: "Seamless coordination with your alarm and camera systems." },
  { title: "Customer Focused", description: "Officers who understand they are ambassadors for your financial brand." },
  { title: "24/7 Dispatch", description: "Immediate support and coordination with local law enforcement." },
  { title: "Fully Licensed", description: "BSIS certified and insured for high-liability financial environments." }
]

// --- Main Page Component ---
export default function FinancialSecurityPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    buildingType: "",
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
            FINANCIAL<br />
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#f34100] to-[#ff6d33]"
              style={{
                backgroundImage: `linear-gradient(90deg, ${THEME.gradientFrom}, ${THEME.gradientTo})`
              }}
            >
              INSTITUTION SECURITY
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Protecting Assets & Trust
            </span>
          </div>

          {/* Subtle subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 font-light">
              Specialized Security Solutions for Banks, Credit Unions, and Investment Firms
            </p>
            
            {/* Simple CTA Button */}
            <ThemeButton 
              size="lg" 
              className="px-10 h-16 text-lg font-semibold"
              style={{
                background: `linear-gradient(135deg, ${THEME.gradientFrom}, ${THEME.gradientTo})`,
                boxShadow: `0 6px 30px ${THEME.primary}40`
              }}
            >
              <Phone className="mr-3 w-5 h-5" />
              Request Security Consultation
            </ThemeButton>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="text-slate-400 text-sm animate-bounce">
              <ChevronRight className="w-6 h-6 transform rotate-90 mx-auto" />
            </div>
          </div>
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
                    Banking Security Experts
                    <br />
                    <span style={{ color: THEME.primary }}>
                      Safeguarding Your Reputation
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Financial institutions face unique security challenges requiring a unique blend of high-visibility deterrence and customer service. Proforce 1 delivers officers who protect your assets while welcoming your members.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Armed & unarmed staffing options</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">ATM & parking lot patrols</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Robbery suppression training</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      We understand that a bank is a business first. Our officers are trained to be approachable ambassadors for your brand, providing directions and assistance while maintaining a vigilant watch.
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
                          <Landmark className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">FDIC Standards</div>
                          <div className="text-xs text-slate-600">Compliance-ready protection</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "100+", label: "Branches Secured", icon: Building, color: THEME.primary },
                    { value: "24/7", label: "Monitoring", icon: Eye, color: "#4f46e5" }, // Keep blue for variety or change to theme
                    { value: "100%", label: "Licensed", icon: BadgeCheck, color: "#10b981" }, // Keep green for success/license
                    { value: "<3m", label: "Response", icon: Clock, color: THEME.primaryDark },
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
                    Request Branch Assessment
                  </ThemeButton>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg"
                  >
                    <ShieldCheck className="mr-3 w-5 h-5" />
                    View Services
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px] border border-slate-200">
                  <Image
                    src={ASSETS.concierge}
                    alt="Bank Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  
                  {/* Badge on image */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Financial Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why <span style={{ color: THEME.primary }}>Financial Institutions</span> Need Specialized Security
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Banks and credit unions are high-value targets that require more than just a guard in a uniform. We provide comprehensive risk management, from ATM safety to internal fraud deterrence.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Robbery prevention",
                "ATM skimming detection",
                "Fraud detection",
                "Customer safety",
                "Cash handling",
                "Vault protection",
                "Compliance",
                "Data security"
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

      {/* 4. Service Capabilities Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={ASSETS.skyline}
            alt="Financial District Security"
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
              Full Spectrum <span style={{ color: THEME.primaryLight }}>Asset Protection</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              From the teller line to the secure vault, we ensure every aspect of your financial institution is secure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {servicesList.map((item, idx) => (
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

          {/* Technology Section */}
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
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Smart Security Integration</h3>
                    <p className="text-slate-300">Seamlessly connecting with your existing alarm and surveillance infrastructure</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Our officers are trained to operate advanced banking security systems, ensuring seamless integration with your silent alarms, time-lock vaults, and remote monitoring stations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Silent alarm protocol management",
                      "Remote CCTV monitoring integration",
                      "Biometric access control supervision",
                      "Digital incident reporting in real-time",
                      "Automated patrol verification (NFC)"
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
                      <div className="text-3xl font-bold text-white mb-2">Tech-Ready</div>
                      <p className="text-slate-300 text-sm">Personnel trained on major security platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Building Types */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <SectionHeading>
               Institutions We <span style={{ color: THEME.primary }}>Secure</span>
             </SectionHeading>
             <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
               Our specialized security services cover all types of financial institutions across California
             </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {buildingTypes.map((item, idx) => (
               <div 
                 key={idx}
                 className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
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
                       Why Branch Managers <br/>
                       <span style={{ color: THEME.primary }}>Trust Proforce 1</span>
                    </h3>
                    
                    <div className="grid gap-4">
                       {trustFactors.map((factor, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div 
                              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                              style={{ backgroundColor: `${THEME.primary}15` }}
                            >
                               <BadgeCheck 
                                 className="w-5 h-5" 
                                 style={{ color: THEME.primary }}
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
                          alt="Proforce 1 Banking Security Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div 
                            className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border"
                            style={{ borderColor: `${THEME.primary}20` }}
                          >
                             <p className="text-slate-900 font-medium italic mb-4">
                                "Proforce 1 reduced security incidents by 60% across our branch network. Their banking security team understands financial operations and regulatory requirements perfectly."
                             </p>
                             <div className="flex items-center gap-3">
                                <div 
                                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                  style={{ backgroundColor: THEME.primary }}
                                >
                                  MR
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">Michael Rodriguez</div>
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
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Financial Security Proposal</h2>
                   <p className="text-slate-500 mb-10 text-lg">Specialized security solutions for banks, credit unions, and financial institutions.</p>
                   
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
                             placeholder="john@bank.com"
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
                                   <option>Branch Lobby Security</option>
                                   <option>ATM Security Services</option>
                                   <option>Vault & Cash Handling</option>
                                   <option>Financial Fraud Prevention</option>
                                   <option>Compliance Security</option>
                                   <option>Full Banking Security Package</option>
                               </select>
                           </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Institution Type</label>
                               <select 
                                 className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 text-slate-700"
                                 style={{
                                   '--tw-ring-color': THEME.primary
                                 } as React.CSSProperties}
                               >
                                   <option>Commercial Bank</option>
                                   <option>Credit Union</option>
                                   <option>Savings & Loan</option>
                                   <option>Investment Bank</option>
                                   <option>ATM Network</option>
                                   <option>Financial Services</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea 
                             rows={3} 
                             className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                             placeholder="Tell us about your financial institution and specific security requirements..."
                             style={{
                               '--tw-ring-color': THEME.primary
                             } as React.CSSProperties}
                           />
                       </div>
                       
                       <ThemeButton className="w-full h-14 text-lg font-bold mt-2">
                           Request Financial Security Proposal
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
                           <Landmark className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Protect Your<br/>
                          Financial Assets
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
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Banking Security</div>
                                   <div className="text-xl font-bold tracking-tight">800-779-7691</div>
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
                                      123 Security Blvd, <br/>
                                      Los Angeles, CA 90001
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
                                      Serving Financial Institutions<br/>
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
                           Banking Security Teams Available 24/7/365
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}