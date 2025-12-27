"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { 
  Shield, CheckCircle2, Phone, Mail,
  Award, Clock, MapPin, BadgeCheck, ChevronRight,
  ShieldCheck, Cpu, FileCheck, Camera,
  AlertCircle, Navigation,
  Building, Landmark, Key, 
  Zap, Globe,
  Users, Eye, Siren,
  Lock,
  FileLock, ShieldAlert,
  Server, Radio, HardHat, Factory
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const ASSETS = {
  heroVideo: "/Services/high-rise-building-security/video.mp4",
  lobby: "/Services/high-rise-building-security/hero.jpeg",
  skyline: "/Services/high-rise-building-security/hero.jpeg",
  concierge: "/Services/high-rise-building-security/hero.jpeg",
  controlRoom: "/Services/high-rise-building-security/hero.jpeg",
  patrol: "/Services/high-rise-building-security/footer.jpeg",
  security: "/Services/high-rise-building-security/footer.jpeg",
  team: "/Services/high-rise-building-security/footer.jpeg"
}

// Custom color theme using #f34100 (High Risk / Alert Theme)
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
             {/* Overlay - High contrast for High Risk theme */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-[#f34100]/30" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
    )
}

// --- Data ---
const whyChooseUs = [
  {
    title: "Threat Assessment & Hardening",
    icon: <ShieldAlert className="w-8 h-8 text-white" />,
    description: "Proactive identification of vulnerabilities in high-risk environments",
    points: [
      "Comprehensive site vulnerability audits",
      "Perimeter hardening strategies",
      "Access point fortification",
      "Hostile surveillance detection",
      "Counter-measures deployment"
    ],
    note: "We don't just react to threats; we engineer your environment to deter them completely."
  },
  {
    title: "Elite Tactical Presence",
    icon: <Users className="w-8 h-8 text-white" />,
    description: "Highly trained officers for elevated threat levels",
    points: [
      "Officers with military/LEO backgrounds",
      "Tactical gear & firearms training",
      "Conflict de-escalation mastery",
      "Crisis intervention capabilities",
      "Strict command structure"
    ],
    note: "When the risk is high, you need more than a standard guard. You need a tactical security professional."
  },
  {
    title: "Advanced Surveillance & Intel",
    icon: <Eye className="w-8 h-8 text-white" />,
    description: "24/7 monitoring and intelligence-led operations",
    points: [
      "Real-time threat intelligence",
      "Integrated CCTV & analytics",
      "Drone surveillance options",
      "Biometric access monitoring",
      "Digital incident logging"
    ],
    note: "We maintain total situational awareness to anticipate and neutralize potential breaches."
  },
  {
    title: "Emergency & Lockdown Protocols",
    icon: <Siren className="w-8 h-8 text-white" />,
    description: "Immediate, decisive action during critical incidents",
    points: [
      "Active shooter response plans",
      "Building lockdown execution",
      "Mass evacuation management",
      "Medical emergency triage",
      "Law enforcement liaison"
    ],
    note: "Our teams are drilled on emergency scenarios to ensure calm, effective leadership under pressure."
  }
]

const securityServices = [
  {
    title: "Perimeter Defense",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "First line of protection",
    details: ["Gate control", "Fencing checks", "Vehicle inspections"]
  },
  {
    title: "Access Control",
    icon: <Key className="w-6 h-6" />,
    description: "Strict entry management",
    details: ["ID verification", "Bag screening", "Metal detection"]
  },
  {
    title: "Tactical Officers",
    icon: <Users className="w-6 h-6" />, // Changed to generic Users to avoid conflict if UsersIcon isn't imported
    description: "Armed protection",
    details: ["High-visibility patrols", "Rapid response", "Deterrence"]
  },
  {
    title: "Control Center",
    icon: <Camera className="w-6 h-6" />,
    description: "24/7 Monitoring",
    details: ["CCTV oversight", "Alarm verification", "Communications"]
  },
  {
    title: "K9 Support",
    icon: <Zap className="w-6 h-6" />, 
    description: "Specialized detection",
    details: ["Explosives detection", "Patrol dogs", "Crowd control"]
  },
  {
    title: "Executive Protection",
    icon: <Award className="w-6 h-6" />,
    description: "VIP safety",
    details: ["Close protection", "Secure transport", "Route planning"]
  },
  {
    title: "Cyber-Physical",
    icon: <Server className="w-6 h-6" />,
    description: "Hybrid security",
    details: ["Server room safety", "Data center access", "Anti-espionage"]
  },
  {
    title: "Emergency Response",
    icon: <AlertCircle className="w-6 h-6" />,
    description: "Crisis management",
    details: ["Lockdown drills", "Medical aid", "Evacuation"]
  }
]


const buildingTypes = [
  { name: "Government Buildings", icon: <Landmark className="w-6 h-6" />, description: "Critical public infrastructure" },
  { name: "Data Centers", icon: <Server className="w-6 h-6" />, description: "High-security digital assets" },
  { name: "Research Labs", icon: <Cpu className="w-6 h-6" />, description: "Sensitive R&D facilities" }, 
  { name: "Corporate HQs", icon: <Building className="w-6 h-6" />, description: "High-profile business centers" },
  { name: "Industrial Plants", icon: <Factory className="w-6 h-6" />, description: "Hazardous or critical production" },
  { name: "Embassies", icon: <Globe className="w-6 h-6" />, description: "Diplomatic missions" },
  { name: "Media Centers", icon: <Radio className="w-6 h-6" />, description: "Broadcast facilities" },
  { name: "Legal Firms", icon: <FileLock className="w-6 h-6" />, description: "Confidential environments" }
]


const trustFactors = [
  { title: "Threat Expertise", description: "Specialists in assessing and neutralizing high-level security risks." },
  { title: "Tactical Training", description: "Officers trained in advanced defensive tactics and firearms safety." },
  { title: "Integrated Systems", description: "Seamless coordination with building management and alarm systems." },
  { title: "Vetted Personnel", description: "Rigorous background checks and psychological screening for all staff." },
  { title: "24/7 Command", description: "Continuous overwatch from our central dispatch and operations center." },
  { title: "Regulatory Compliance", description: "Adherence to federal, state, and industry-specific security standards." }
]

// --- Main Page Component ---
export default function HighRiskBuildingSecurityPage() {
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
            HIGH-RISK<br />
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#f34100] to-[#ff6d33]"
              style={{
                backgroundImage: `linear-gradient(90deg, ${THEME.gradientFrom}, ${THEME.gradientTo})`
              }}
            >
              BUILDING SECURITY
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Fortifying Critical Assets
            </span>
          </div>

          {/* Subtle subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 font-light">
              Specialized Protection for Government, Corporate, and Critical Infrastructure Facilities
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

      {/* 2. Professional Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Critical Infrastructure Protection
                    <br />
                    <span style={{ color: THEME.primary }}>
                      Zero Compromise Security
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      High-risk environments demand a level of security beyond the ordinary. Proforce 1 delivers elite, tactical protection designed to harden targets and neutralize sophisticated threats.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Tactical response teams</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Hardened access control</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${THEME.primary}20` }}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: THEME.primary }} />
                        </div>
                        <span className="text-slate-700 font-medium">Counter-surveillance measures</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our strategy focuses on deterrence, detection, and denial. We create multiple layers of security to ensure unauthorized access is impossible and threats are stopped at the perimeter.
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
                          <ShieldAlert className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">High-Threat Certified</div>
                          <div className="text-xs text-slate-600">Advanced tactical training</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "50+", label: "High-Risk Sites", icon: Building, color: THEME.primary },
                    { value: "24/7", label: "Intel Monitoring", icon: Eye, color: "#4f46e5" }, 
                    { value: "100%", label: "Vetted Staff", icon: BadgeCheck, color: "#10b981" },
                    { value: "<1m", label: "Crisis Response", icon: Clock, color: THEME.primaryDark },
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
                    Request Site Audit
                  </ThemeButton>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg"
                  >
                    <ShieldCheck className="mr-3 w-5 h-5" />
                    View Capabilities
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px] border border-slate-200">
                  <Image
                    src={ASSETS.concierge}
                    alt="High-Risk Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why High-Risk Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why <span style={{ color: THEME.primary }}>High-Risk Facilities</span> Need Specialized Security
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Standard security measures fail against determined threats. High-risk buildings require integrated defense systems, advanced surveillance, and personnel trained for hostile engagements.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Targeted attacks",
                "Espionage",
                "Workplace violence",
                "Civil unrest",
                "Sabotage",
                "Unauthorized entry",
                "Bomb threats",
                "Active shooters"
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
            alt="High Security Facility"
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
              Fortified <span style={{ color: THEME.primaryLight }}>Protection Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              From fortified perimeters to secure interior zones, we provide multi-layered defense for your critical assets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {securityServices.map((item, idx) => (
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
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Integrated Threat Detection</h3>
                    <p className="text-slate-300">Advanced systems to identify and neutralize risks before they escalate</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  We leverage military-grade technology including intrusion detection systems, biometric scanners, and AI-powered video analytics to provide a 360-degree shield around your facility.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Perimeter intrusion detection",
                      "Biometric access control",
                      "Facial recognition analysis",
                      "Automated lockdown protocols",
                      "Drone counter-measures"
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
                      <div className="text-3xl font-bold text-white mb-2">Hardened Security</div>
                      <p className="text-slate-300 text-sm">Physical and digital perimeter defense</p>
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
               Facilities We <span style={{ color: THEME.primary }}>Secure</span>
             </SectionHeading>
             <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
               Our specialized security services cover the most sensitive and critical infrastructure across California
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
                       Why Facility Directors <br/>
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
                          alt="Proforce 1 High-Risk Security Team" 
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
                                "In our industry, failure is not an option. Proforce 1 provides the level of rigor, discipline, and capability we need to ensure operational continuity."
                             </p>
                             <div className="flex items-center gap-3">
                                <div 
                                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                  style={{ backgroundColor: THEME.primary }}
                                >
                                  JS
                                </div>
                                <div>
                                    <div className="font-bold text-slate-900">James Stevens</div>
                                    <div className="text-sm text-slate-600">Director of Security, Tech Campus</div>
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
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Security Audit</h2>
                   <p className="text-slate-500 mb-10 text-lg">Confidential consultation for high-risk and critical infrastructure protection.</p>
                   
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
                                   <option>Perimeter Defense</option>
                                   <option>Tactical Guarding</option>
                                   <option>Threat Assessment</option>
                                   <option>Control Room Ops</option>
                                   <option>Full Site Security</option>
                               </select>
                           </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Facility Type</label>
                               <select 
                                 className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 text-slate-700"
                                 style={{
                                   '--tw-ring-color': THEME.primary
                                 } as React.CSSProperties}
                               >
                                   <option>Government Building</option>
                                   <option>Data Center</option>
                                   <option>Industrial Plant</option>
                                   <option>Corporate HQ</option>
                                   <option>Research Lab</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea 
                             rows={3} 
                             className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                             placeholder="Describe your security requirements and threat profile..."
                             style={{
                               '--tw-ring-color': THEME.primary
                             } as React.CSSProperties}
                           />
                       </div>
                       
                       <ThemeButton className="w-full h-14 text-lg font-bold mt-2">
                           Request Security Assessment
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
                           <ShieldAlert className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Secure Your<br/>
                          Critical Assets
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
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Security Ops</div>
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
                                      Serving Critical Infrastructure<br/>
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
                           High-Risk Security Teams Active 24/7
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}