"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { 
  Shield, CheckCircle2, Phone, Mail,
  Award, Clock, MapPin, BadgeCheck, ChevronRight,
  ShieldCheck, Cpu, FileCheck, Camera,
  AlertCircle, Navigation,
  Building, Key, 
  Zap, Globe, UserCheck, 
  Users, Eye, Siren, LayoutDashboard,
  Lock, Search, Car, Plane, 
  Briefcase, Crown, Star, Glasses,
  Radio, Umbrella, Crosshair,
  Home
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const ASSETS = {
  heroVideo: "/Services/executive-protection/vedio.mp4",
  transport: "/Services/executive-protection/top.jpeg",
  detail: "/Services/executive-protection/top.jpeg",
  residential: "/Services/executive-protection/top.jpeg",
  planning: "/Services/executive-protection/top.jpeg",
  officer: "/Services/executive-protection/top.jpeg",
  jet: "/Services/executive-protection/footer.jpeg",
  team: "/Services/executive-protection/footer.jpeg"
}

// Custom color theme using #f34100 (Brand Theme)
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
             {/* Overlay - Dark/Slate for executive feel */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-[#f34100]/20" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
    )
}

// --- Data ---
const whyChooseUs = [
  {
    title: "Discreet Professionalism",
    icon: <Glasses className="w-8 h-8 text-white" />,
    description: "Protection that seamlessly integrates with your lifestyle",
    points: [
      "Low-profile security presence",
      "Seamless integration with family/staff",
      "Strict confidentiality (NDAs)",
      "Cultural etiquette & protocol trained",
      "Respect for personal privacy"
    ],
    note: "We provide uncompromising safety without intrusion, allowing you to conduct business and life as usual."
  },
  {
    title: "Comprehensive Risk Intelligence",
    icon: <FileCheck className="w-8 h-8 text-white" />,
    description: "Proactive threat analysis and advance work",
    points: [
      "Vulnerability assessments",
      "Travel route planning & analysis",
      "Venue advance work",
      "Real-time threat monitoring",
      "Intelligence gathering"
    ],
    note: "We identify and mitigate risks before they ever become threats to your safety or reputation."
  },
  {
    title: "Secure Transportation",
    icon: <Car className="w-8 h-8 text-white" />,
    description: "Safe, secure movement from point A to point B",
    points: [
      "Defensive driving trained agents",
      "Armored vehicle coordination",
      "Route diversification strategies",
      "Airport tarmac access logistics",
      "Emergency extraction protocols"
    ],
    note: "Transportation is the most vulnerable time for principals. We secure every mile of your journey."
  },
  {
    title: "Crisis Response Capability",
    icon: <Siren className="w-8 h-8 text-white" />,
    description: "Immediate action in high-pressure scenarios",
    points: [
      "Medical emergency response (TCCC/CPR)",
      "Evacuation & extraction protocols",
      "Active threat neutralization",
      "Kidnap & ransom prevention",
      "Law enforcement liaison"
    ],
    note: "Our agents are trained to think clearly and act decisively when seconds count."
  }
]

const epServices = [
  {
    title: "Close Protection",
    icon: <UserCheck className="w-6 h-6" />,
    description: "Personal bodyguards",
    details: ["24/7 coverage", "Family protection", "Business travel"]
  },
  {
    title: "Secure Transport",
    icon: <Car className="w-6 h-6" />,
    description: "Executive drivers",
    details: ["Evasive driving", "Convoy operations", "Vehicle sweeps"]
  },
  {
    title: "Residential Security",
    icon: <Home className="w-6 h-6" />,
    description: "Estate protection",
    details: ["Perimeter defense", "Access control", "Surveillance monitoring"]
  },
  {
    title: "Travel Security",
    icon: <Plane className="w-6 h-6" />,
    description: "Global logistics",
    details: ["International travel", "Risk advisories", "Secure accommodation"]
  },
  {
    title: "Threat Assessment",
    icon: <Crosshair className="w-6 h-6" />,
    description: "Risk analysis",
    details: ["Person of interest checks", "Stalking mitigation", "Digital footprint"]
  },
  {
    title: "Event Security",
    icon: <Star className="w-6 h-6" />,
    description: "VIP event details",
    details: ["Red carpet arrival", "Backstage security", "Crowd management"]
  },
  {
    title: "Counter-Surveillance",
    icon: <Eye className="w-6 h-6" />,
    description: "Technical security",
    details: ["Bug sweeps (TSCM)", "Hostile surveillance detection", "Route counters"]
  },
  {
    title: "Medical Support",
    icon: <AlertCircle className="w-6 h-6" />,
    description: "Emergency care",
    details: ["EMT/Paramedic agents", "Medical kit on-site", "Hospital logistics"]
  }
]

const clientTypes = [
  { name: "C-Level Executives", icon: <Briefcase className="w-6 h-6" />, description: "Corporate leadership protection" },
  { name: "High Net Worth", icon: <Crown className="w-6 h-6" />, description: "Family & asset security" },
  { name: "Public Figures", icon: <Star className="w-6 h-6" />, description: "Celebrity & talent details" },
  { name: "Diplomats", icon: <Globe className="w-6 h-6" />, description: "Foreign dignitary protection" },
  { name: "Witness Protection", icon: <Shield className="w-6 h-6" />, description: "High-risk legal security" },
  { name: "Media Crews", icon: <Camera className="w-6 h-6" />, description: "News team protection" },
  { name: "Family Offices", icon: <Users className="w-6 h-6" />, description: "Private family security" },
  { name: "Legal Professionals", icon: <Building className="w-6 h-6" />, description: "Court & trial security" }
]

const trustFactors = [
  { title: "Elite Backgrounds", description: "Agents with military, law enforcement, or special ops experience." },
  { title: "Global Reach", description: "Capable of coordinating protection anywhere in the world." },
  { title: "Strict Confidentiality", description: "Your privacy and reputation are our absolute priority." },
  { title: "Medical Training", description: "Agents certified in TCCC, CPR, and First Aid." },
  { title: "Rapid Deployment", description: "Teams available for immediate, short-notice assignments." },
  { title: "Licensed & Insured", description: "Fully compliant with BSIS and state regulations." }
]

// --- Main Page Component ---
export default function ExecutiveProtectionPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    clientType: "",
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
            EXECUTIVE<br />
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#f34100] to-[#ff6d33]"
              style={{
                backgroundImage: `linear-gradient(90deg, ${THEME.gradientFrom}, ${THEME.gradientTo})`
              }}
            >
              PROTECTION
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Uncompromising Safety & Discretion
            </span>
          </div>

          {/* Subtle subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 font-light">
              Elite Close Protection Services for Executives, Dignitaries, and High-Net-Worth Individuals
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

      {/* 2. Professional EP Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    The Gold Standard in
                    <br />
                    <span style={{ color: THEME.primary }}>
                      Personal Security
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      High-profile individuals face unique security challenges. Proforce 1 delivers comprehensive protection that mitigates risk while allowing you to maintain your lifestyle and business operations with minimal disruption.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Former military & law enforcement agents</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Advanced threat assessment protocols</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Secure global travel logistics</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our agents are more than bodyguards; they are highly trained security professionals capable of handling complex logistics, medical emergencies, and sensitive situations with absolute discretion.
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
                          <div className="text-sm font-bold text-slate-900">Elite Certified Agents</div>
                          <div className="text-xs text-slate-600">Top-tier protection personnel</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "500+", label: "Details Completed", icon: Shield, color: THEME.primary },
                    { value: "Global", label: "Operations", icon: Globe, color: "#4f46e5" }, 
                    { value: "100%", label: "Client Privacy", icon: Lock, color: "#10b981" },
                    { value: "Zero", label: "Security Breaches", icon: BadgeCheck, color: THEME.primaryDark },
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
                    Request Private Consultation
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
                    src={ASSETS.officer} // Using officer/agent image
                    alt="Executive Protection Agent"
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
                      <span className="text-sm font-bold text-slate-900">Close Protection Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Executive Protection Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why You Need <span style={{ color: THEME.primary }}>Executive Protection</span>
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
               In today's volatile world, high-profile individuals face elevated risks. Our protective services are designed to identify vulnerabilities and neutralize threats before they can impact your life or business.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Targeted attacks",
                "Kidnap & Ransom",
                "Corporate espionage",
                "Stalking & harassment",
                "Workplace violence",
                "Public appearances",
                "Travel risks",
                "Home invasion"
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
                      <Shield className="w-4 h-4" style={{ color: THEME.primary }} />
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
            src={ASSETS.transport}
            alt="Secure Transportation"
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
              Full Spectrum <span style={{ color: THEME.primaryLight }}>Protection Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              From secure transportation to residential security, we cover every aspect of your safety.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {epServices.map((item, idx) => (
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

          {/* Logistics Section */}
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
                    <Radio className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Intelligence & Logistics</h3>
                    <p className="text-slate-300">Advanced planning and real-time monitoring for seamless movement</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Effective protection starts before you arrive. Our operations center and advance teams handle all logistics, route planning, and threat assessments to ensure your schedule proceeds without interruption.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Advance route surveys",
                      "Medical facility mapping",
                      "Real-time threat tracking",
                      "Encrypted communications",
                      "Emergency extraction plans"
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
                      <div className="text-3xl font-bold text-white mb-2">Advance Work</div>
                      <p className="text-slate-300 text-sm">Strategic planning & logistics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clients We Serve */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <SectionHeading>
               Who We <span style={{ color: THEME.primary }}>Protect</span>
             </SectionHeading>
             <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
               Our specialized services are tailored for individuals and organizations requiring the highest level of security
             </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
             {clientTypes.map((item, idx) => (
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
                       Why Clients <br/>
                       <span style={{ color: THEME.primary }}>Trust Proforce 1</span>
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
                          alt="Proforce 1 Protection Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div 
                            className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border"
                            style={{ borderColor: `${THEME.primary}20` }}
                          >
                             <p className="text-slate-900 font-medium italic mb-4">
                                "Proforce 1 provides a level of service and professionalism that is unmatched. Their team allows me to focus on my business while they handle everything else."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div 
                                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                  style={{ backgroundColor: THEME.primary }}
                                >
                                  JC
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">James Carter</div>
                                    <div className="text-sm text-slate-600">CEO, Tech Innovations Inc.</div>
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
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Private Consultation</h2>
                   <p className="text-slate-500 mb-10 text-lg">Confidential security assessment for you, your family, or your organization.</p>
                   
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
                           <label className="text-xs font-bold text-slate-500 uppercase">Email</label>
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
                                   <option>Close Protection</option>
                                   <option>Secure Transport</option>
                                   <option>Residential Security</option>
                                   <option>Event Security</option>
                                   <option>Travel Security</option>
                                   <option>Threat Assessment</option>
                               </select>
                           </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Client Type</label>
                               <select 
                                 className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 text-slate-700"
                                 style={{
                                   '--tw-ring-color': THEME.primary
                                 } as React.CSSProperties}
                               >
                                   <option>Corporate Executive</option>
                                   <option>Public Figure</option>
                                   <option>Private Family</option>
                                   <option>Visiting Dignitary</option>
                                   <option>Legal/Witness</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Details (Optional)</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" placeholder="Any specific requirements or concerns?" 
                           style={{
                               '--tw-ring-color': THEME.primary
                             } as React.CSSProperties}
                           />
                       </div>
                       
                       <ThemeButton className="w-full h-14 text-lg font-bold mt-2">
                           Request Private Consultation
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
                           <Shield className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Secure Your<br/>
                          Peace of Mind
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
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 EP Ops</div>
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
                                      Global Protection<br/>
                                      Logistics & Support
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
                           Executive Protection Teams Active 24/7
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}