"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { 
  Shield, Lock, Users, CheckCircle2, Phone, Mail,
  Award, Clock, MapPin, AlertTriangle, BadgeCheck, ChevronRight,
  ShieldCheck, Cpu, TrendingUp, FileCheck, DoorOpen, Camera,
  AlertCircle, Eye, Radio, Siren, FileText, Navigation,
  Building, Building2, Home, Key, Target,
  Crosshair, Headphones, Zap, BatteryCharging, Settings,
  Globe, Brain, GraduationCap, Briefcase, Database, Network,
  Calendar, Clock as ClockIcon, Bell, BellRing, Megaphone,
  UserCheck, UserX, Users as UsersIcon, UserPlus, Search,
  Filter, Map, Compass, AlertOctagon, FireExtinguisher,
  Wifi, Cloud, Server, HardDrive, ClipboardCheck,
  ClipboardList, FileBarChart, BarChart, PieChart,
  Play, Pause, Volume2, VolumeX
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/high-rise/highrise-hero.jpg",
  security: "/Services/high-rise/highrise-security.jpg",
  technology: "/Services/high-rise/highrise-tech.jpg",
  lobby: "/Services/high-rise/highrise-lobby.jpg",
  officer: "/Services/high-rise/highrise-officer.jpg",
  command: "/Services/high-rise/highrise-command.jpg",
  team: "/Services/high-rise/highrise-team.jpg",
  facility: "/Services/high-rise/highrise-facility.jpg"
}

// Add video path
const VIDEOS = {
  hero: "/Services/high-rise/hero-video.mp4",
  heroFallback: "/Services/high-rise/hero-video.webm"
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

// Video Controls Component
const VideoControls = ({ videoRef }: { videoRef: React.RefObject<HTMLVideoElement> }) => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
      <button
        onClick={togglePlay}
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
      <button
        onClick={toggleMute}
        className="bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
    </div>
  )
}

// --- Data ---
const whyChooseUs = [
  {
    title: "Lobby & Concierge Security Services",
    icon: <Building className="w-8 h-8 text-white" />,
    description: "Professional front desk and lobby security for tenant and visitor screening",
    points: [
      "24/7 lobby security officer presence",
      "Visitor registration and access control",
      "Package and delivery management",
      "Tenant and employee credential verification",
      "Emergency announcement system coordination"
    ],
    note: "Our lobby security officers serve as the first point of contact, providing both security and concierge-level service to tenants and visitors."
  },
  {
    title: "Advanced Access Control & Elevator Security",
    icon: <Network className="w-8 h-8 text-white" />,
    description: "Multi-layer access control systems for high-rise building security",
    points: [
      "Elevator access control and floor restriction",
      "Multi-factor authentication systems",
      "Visitor escorts to tenant floors",
      "After-hours access management",
      "Integration with building management systems"
    ],
    note: "We implement sophisticated access control measures that restrict unauthorized movement while maintaining convenience for authorized personnel."
  },
  {
    title: "Perimeter & Parking Security",
    icon: <Shield className="w-8 h-8 text-white" />,
    description: "Comprehensive protection for building perimeters and parking facilities",
    points: [
      "Underground and attached garage security",
      "Loading dock and service entrance control",
      "Vehicle patrols of parking facilities",
      "Perimeter surveillance and monitoring",
      "Vendor and contractor screening"
    ],
    note: "High-rise security begins at the perimeter. Our comprehensive approach ensures threats are identified and addressed before reaching building interiors."
  },
  {
    title: "Emergency Response & Evacuation Management",
    icon: <AlertCircle className="w-8 h-8 text-white" />,
    description: "Specialized emergency protocols for high-rise buildings",
    points: [
      "High-rise fire evacuation procedures",
      "Stairwell monitoring and evacuation assistance",
      "Disabled occupant evacuation plans",
      "Natural disaster response protocols",
      "Critical incident command coordination"
    ],
    note: "High-rise emergencies require specialized response protocols. Our officers are trained in vertical evacuation and high-rise emergency management."
  }
]

const highRiseServices = [
  {
    title: "Lobby Security",
    icon: <Building className="w-6 h-6" />,
    description: "24/7 front desk protection",
    details: ["Visitor screening", "Access control", "Package management"]
  },
  {
    title: "Access Control",
    icon: <Key className="w-6 h-6" />,
    description: "Multi-layer entry security",
    details: ["Elevator control", "Floor access", "Visitor management"]
  },
  {
    title: "Parking Security",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Garage & lot protection",
    details: ["Vehicle patrols", "Access control", "Incident response"]
  },
  {
    title: "CCTV Monitoring",
    icon: <Camera className="w-6 h-6" />,
    description: "Building-wide surveillance",
    details: ["24/7 monitoring", "Access control", "Incident documentation"]
  },
  {
    title: "Emergency Response",
    icon: <AlertOctagon className="w-6 h-6" />,
    description: "High-rise emergency protocols",
    details: ["Fire evacuation", "Medical response", "Crisis management"]
  },
  {
    title: "Tenant Services",
    icon: <Users className="w-6 h-6" />,
    description: "Occupant security support",
    details: ["Escort services", "Lost and found", "Safety education"]
  },
  {
    title: "Perimeter Security",
    icon: <Target className="w-6 h-6" />,
    description: "Building exterior protection",
    details: ["Patrol services", "Entry point control", "Vendor screening"]
  },
  {
    title: "Digital Reporting",
    icon: <FileCheck className="w-6 h-6" />,
    description: "Real-time incident tracking",
    details: ["Activity logs", "Incident reports", "Compliance"]
  }
]

const buildingTypes = [
  { name: "Office Towers", icon: <Building2 className="w-6 h-6" />, description: "Corporate high-rise security" },
  { name: "Residential Condos", icon: <Home className="w-6 h-6" />, description: "High-rise residential security" },
  { name: "Mixed-Use Buildings", icon: <Building className="w-6 h-6" />, description: "Multi-purpose building security" },
  { name: "Hospitality Towers", icon: <Users className="w-6 h-6" />, description: "Hotel and resort high-rise security" },
  { name: "Government Buildings", icon: <Building2 className="w-6 h-6" />, description: "Public high-rise security" },
  { name: "Medical Towers", icon: <Users className="w-6 h-6" />, description: "Hospital high-rise security" },
  { name: "Educational Towers", icon: <GraduationCap className="w-6 h-6" />, description: "Campus high-rise security" },
  { name: "Financial Centers", icon: <Briefcase className="w-6 h-6" />, description: "Banking high-rise security" },
  { name: "Tech Headquarters", icon: <Cpu className="w-6 h-6" />, description: "Technology company security" },
  { name: "Luxury Residences", icon: <Home className="w-6 h-6" />, description: "Premium residential security" },
  { name: "Retail Towers", icon: <Building2 className="w-6 h-6" />, description: "Commercial high-rise security" },
  { name: "Cultural Centers", icon: <Building className="w-6 h-6" />, description: "Cultural institution security" }
]

const trustFactors = [
  { title: "25+ Years Experience", description: "Decades of high-rise security expertise" },
  { title: "State Certified Officers", description: "Fully licensed high-rise security personnel" },
  { title: "24/7 Command Center", description: "Round-the-clock monitoring and support" },
  { title: "Advanced Technology", description: "Modern security systems integration" },
  { title: "Emergency Response", description: "Specialized high-rise emergency protocols" },
  { title: "Tenant Satisfaction", description: "Focus on occupant safety and service" }
]

// --- Main Page Component ---
export default function HighRiseSecurityPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    buildingType: "",
    message: ""
  })

  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(e => {
        console.log("Autoplay prevented:", e)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. Hero Section with Video */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Fallback Image */}
        <div className="absolute inset-0 z-0">
          {/* Fallback Image */}
          <Image
            src={IMAGES.hero}
            alt="High-Rise Security Services"
            fill
            className="object-cover"
            priority
            style={{
              opacity: videoLoaded ? 0 : 1,
              transition: 'opacity 1s ease-in-out'
            }}
          />
          
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          >
            <source src={VIDEOS.hero} type="video/mp4" />
            <source src={VIDEOS.heroFallback} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 via-orange-900/70 to-orange-900/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-transparent to-transparent" />
          
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_50%,rgba(255,255,255,0.05)_50%)] bg-[length:50px_50px] animate-pulse"></div>
          </div>
        </div>

        {/* Video Controls */}
        <VideoControls videoRef={videoRef} />

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Logo/Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center gap-3 bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-3">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-sm uppercase tracking-wider">
                Proforce 1 High-Rise Security
              </span>
            </div>
          </div>

          <div className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
            <div className="mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">
                HIGH-RISE
              </span>
            </div>
            <div className="mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-orange-300">
                SECURITY SERVICES
              </span>
            </div>
            <div className="mt-6">
              <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90">
                Vertical Building Protection & Surveillance
              </span>
            </div>
          </div>

          {/* Subtle subtitle */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="inline-block bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-8">
              <p className="text-xl text-slate-300 mb-4 font-light">
                Comprehensive Security Solutions for Skyscrapers, Office Towers, and High-Rise Buildings
              </p>
              
              {/* Key Features */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {[
                  { text: "24/7 Surveillance", icon: <Camera className="w-4 h-4" /> },
                  { text: "Access Control", icon: <Key className="w-4 h-4" /> },
                  { text: "Emergency Response", icon: <AlertOctagon className="w-4 h-4" /> },
                  { text: "Tenant Screening", icon: <UserCheck className="w-4 h-4" /> }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2">
                    <div className="text-orange-300">
                      {feature.icon}
                    </div>
                    <span className="text-sm text-white font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Simple CTA Button */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 h-16 text-lg font-semibold rounded-xl shadow-2xl shadow-orange-600/30 hover:shadow-orange-700/40 transition-all"
              >
                <Phone className="mr-3 w-5 h-5" />
                Request High-Rise Security Consultation
              </Button>
              
              {/* Secondary Button */}
              <div>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="bg-transparent hover:bg-white/10 border-2 border-white/30 text-white px-10 h-14 text-base font-semibold rounded-xl"
                >
                  <Shield className="mr-3 w-5 h-5" />
                  View Our High-Rise Solutions
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Overlay */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
              {[
                { value: "25+", label: "Years Experience", color: "text-orange-400" },
                { value: "100+", label: "High-Rise Clients", color: "text-orange-300" },
                { value: "500+", label: "Certified Officers", color: "text-orange-400" },
                { value: "24/7", label: "Building Coverage", color: "text-orange-300" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-white/80 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-28 md:bottom-32 left-1/2 transform -translate-x-1/2">
            <div className="text-white/60 text-sm animate-bounce">
              <ChevronRight className="w-6 h-6 transform rotate-90 mx-auto" />
              <span className="text-xs mt-1 block">Scroll to Explore</span>
            </div>
          </div>
        </div>

        {/* Overlay Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
      </header>

      {/* The rest of the sections remain the same... */}
      {/* 2. Professional High-Rise Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    High-Rise Security Specialists
                    <br />
                    <span className="text-orange-600">
                      Protecting Vertical Communities 24/7
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      High-rise buildings present unique security challenges including multiple entry points, complex access control, elevator security, and vertical evacuation requirements. At Proforce 1, we provide specialized security solutions for skyscrapers and tall buildings.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium">25+ years of high-rise security experience</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Specialized vertical evacuation training</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Advanced access control system expertise</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our high-rise security officers are trained in vertical building operations, including elevator security protocols, stairwell monitoring, and high-rise emergency response procedures.
                    </p>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Vertical Security Experts</div>
                          <div className="text-xs text-slate-600">Specialized training for high-rise environments</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "25+", label: "Years Experience", icon: Award, color: "text-orange-600" },
                    { value: "100+", label: "High-Rise Clients", icon: Building, color: "text-blue-600" },
                    { value: "100%", label: "Certified Officers", icon: BadgeCheck, color: "text-green-600" },
                    { value: "24/7", label: "Building Coverage", icon: Clock, color: "text-amber-600" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                      <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                      <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wider font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-10 h-14 text-base font-semibold rounded-lg shadow-lg shadow-orange-600/20">
                    <Phone className="mr-3 w-5 h-5" />
                    Request Security Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <Building className="mr-3 w-5 h-5" />
                    View High-Rise Solutions
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                  <Image
                    src={IMAGES.security}
                    alt="Professional High-Rise Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  
                  {/* Badge on image */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-slate-900">High-Rise Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why High-Rise Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why <span className="text-orange-600">High-Rise Buildings</span> Need Specialized Security
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              High-rise security requires specialized approaches to address vertical movement, complex access control, and unique emergency response challenges that differ from traditional building security.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Elevator security",
                "Vertical evacuation",
                "Multi-floor access control",
                "Parking garage security",
                "Tenant screening",
                "Fire safety protocols",
                "Stairwell monitoring",
                "Lobby security"
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 italic">
                "High-rise security demands specialized knowledge of vertical operations, complex access systems, and unique emergency protocols that differ fundamentally from traditional building security."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. High-Rise Security Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.facility}
            alt="High-Rise Security Environment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="h-1 w-24 bg-orange-600 mx-auto"></div>
              <div className="h-1 w-16 bg-orange-500 mx-auto mt-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-orange-500">High-Rise Security Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security solutions designed specifically for skyscrapers and tall buildings
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {highRiseServices.map((item, idx) => (
              <div 
                key={idx}
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
              </div>
            ))}
          </div>

          {/* Emergency Response Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-10 relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-600 rounded-xl">
                    <AlertOctagon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">High-Rise Emergency Response</h3>
                    <p className="text-slate-300">Specialized protocols for skyscraper emergencies and evacuations</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  High-rise buildings require specialized emergency response protocols. Proforce 1 security officers are trained in vertical evacuation, stairwell management, and high-rise emergency coordination with first responders.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Vertical evacuation planning and execution",
                      "Stairwell monitoring and occupant assistance",
                      "Disabled occupant evacuation protocols",
                      "High-rise fire safety coordination",
                      "Emergency communication system management"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Emergency Ready</div>
                      <p className="text-slate-300">Trained for high-rise emergency scenarios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. High-Rise Building Types We Protect */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <SectionHeading>
                High-Rise Building Types <br/> We <span className="text-orange-600">Protect</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our specialized security services cover all types of high-rise buildings across California
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {buildingTypes.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-orange-600">
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
                       <span className="text-orange-600">Proforce 1 for High-Rise Security</span>
                    </h3>
                    
                    <div className="grid gap-4">
                       {trustFactors.map((factor, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-1">
                               <BadgeCheck className="w-5 h-5 text-orange-600 fill-orange-600" />
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
                          alt="Proforce 1 High-Rise Security Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                             <p className="text-slate-900 font-medium italic">
                                "Proforce 1 transformed our 40-story office tower's security. Their high-rise specialists understand vertical operations and have reduced security incidents by 60%."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">DR</div>
                                <div>
                                   <div className="font-bold text-slate-900">David Reynolds</div>
                                   <div className="text-sm text-slate-600">Property Manager, Downtown Tower</div>
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
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request High-Rise Security Proposal</h2>
                   <p className="text-slate-500 mb-10 text-lg">Specialized security solutions for skyscrapers, office towers, and high-rise buildings.</p>
                   
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
                           <input type="email" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="john@company.com" />
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                           <input type="tel" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="(555) 123-4567" />
                       </div>

                       <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-700">
                                   <option>Lobby & Concierge Security</option>
                                   <option>Access Control Systems</option>
                                   <option>Parking Garage Security</option>
                                   <option>Elevator & Floor Access Control</option>
                                   <option>Emergency Response Planning</option>
                                   <option>Full High-Rise Security Package</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Building Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-700">
                                   <option>Office Tower</option>
                                   <option>Residential Condo</option>
                                   <option>Mixed-Use Building</option>
                                   <option>Hotel/Resort Tower</option>
                                   <option>Government Building</option>
                                   <option>Medical Tower</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="Tell us about your high-rise building and specific security requirements..." />
                       </div>
                       
                       <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-orange-600/20 mt-2">
                           Request High-Rise Security Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-orange-600 rounded-xl mb-8 shadow-lg shadow-orange-900/50">
                           <Building2 className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Protect Your<br/>
                          High-Rise Building
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 High-Rise Support</div>
                                   <div className="text-xl font-bold tracking-tight">800-779-7691</div>
                               </div>
                           </div>
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-600 transition-colors">
                                 <Mail className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                   <div className="text-lg font-medium break-all">info@proforce1protection.com</div>
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
                                 <MapPin className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Service Area</div>
                                   <div className="text-base text-slate-300">
                                      Serving High-Rise Buildings<br/>
                                      Across California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           High-Rise Security Teams Active 24/7
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}