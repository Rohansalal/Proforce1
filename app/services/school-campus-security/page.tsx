"use client"

import Image from "next/image"
import { useState } from "react"
import { 
  Shield, Lock, Users, CheckCircle2, Phone, Mail,
  Award, Clock, MapPin, AlertTriangle, BadgeCheck, ChevronRight,
  ShieldCheck, Cpu, TrendingUp, FileCheck, DoorOpen, Camera,
  AlertCircle, Eye, Radio, Siren, FileText, Navigation,
  GraduationCap, School, BookOpen, Brain, Home, Building,
  Bell, BellRing, Megaphone, Map, Compass, Search,
  Calendar, Clock as ClockIcon, UserCheck, UserX,
  Users as UsersIcon, UserPlus, Globe, Target, Crosshair,
  Headphones, Zap, BatteryCharging, Settings, Database,
  Network, Server, ClipboardCheck, ClipboardList,
  AlertOctagon, Heart, Activity, ShieldOff,
  Book, Pencil, Calculator, Globe as GlobeIcon,
  Coffee, Utensils, Bus, Car, Bike, Footprints
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  // hero: Replaced by video
  security: "/Services/school/schooltop.jpeg",
  technology: "/Services/school/schooltop.jpeg",
  campus: "/Services/school/schooltop.jpeg",
  officer: "/Services/school/schooltop.jpeg",
  command: "/blogimage/guard-post.jpg",
  team: "/blogimage/guard-post.jpg",
  facility: "/blogimage/guard-post.jpg"
}

// --- Brand Color Constant ---
const BRAND_HEX = "#c10007"

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
  <div className={cn("mb-16/", align === "center" ? "text-center" : "text-left", className)}>
    <div 
      className={cn(
        "w-16 h-1.5 mb-6 rounded-full",
        align === "center" ? "mx-auto" : "ml-0",
        light ? "bg-[#c10007]" : "bg-[#c10007]"
      )} 
    />
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
    title: "Campus Entry Control & Visitor Management",
    icon: <Shield className="w-8 h-8 text-white" />,
    description: "Secure access control systems for school campuses and facilities",
    points: [
      "Visitor screening and registration systems",
      "Secure entry point management",
      "Student release verification procedures",
      "Parent and guardian identification",
      "After-hours campus security"
    ],
    note: "Our campus security officers are trained to manage school access while maintaining a welcoming environment for students, staff, and authorized visitors."
  },
  {
    title: "Student Safety & Behavioral Intervention",
    icon: <Users className="w-8 h-8 text-white" />,
    description: "Student-focused security that promotes positive behavior and safety",
    points: [
      "Positive behavior support strategies",
      "Conflict resolution and de-escalation",
      "Bullying prevention and intervention",
      "Student wellness checks",
      "Crisis counseling coordination"
    ],
    note: "We balance security with student support, creating environments where students feel safe, respected, and able to focus on learning."
  },
  {
    title: "Emergency Response & Crisis Management",
    icon: <AlertCircle className="w-8 h-8 text-white" />,
    description: "Comprehensive emergency protocols for educational facilities",
    points: [
      "Active shooter response and prevention",
      "Emergency evacuation procedures",
      "Lockdown and shelter-in-place protocols",
      "Medical emergency response coordination",
      "Natural disaster preparedness"
    ],
    note: "Our officers are trained in school-specific emergency protocols and work closely with school administrators and first responders."
  },
  {
    title: "School Event & Extracurricular Security",
    icon: <Calendar className="w-8 h-8 text-white" />,
    description: "Specialized security for school events and activities",
    points: [
      "Athletic event security and crowd control",
      "School dance and social event protection",
      "Field trip security coordination",
      "Graduation ceremony security",
      "Parent-teacher conference security"
    ],
    note: "We provide enhanced security for school events where large gatherings require specialized crowd management and safety protocols."
  }
]

const campusServices = [
  {
    title: "Entry Control",
    icon: <Lock className="w-6 h-6" />,
    description: "Campus access management",
    details: ["Visitor screening", "ID verification", "Secure entry"]
  },
  {
    title: "Campus Patrols",
    icon: <Navigation className="w-6 h-6" />,
    description: "Regular campus monitoring",
    details: ["Building patrols", "Parking lot security", "Perimeter checks"]
  },
  {
    title: "Emergency Response",
    icon: <AlertOctagon className="w-6 h-6" />,
    description: "Crisis management",
    details: ["Lockdown procedures", "Evacuation", "Medical response"]
  },
  {
    title: "Student Safety",
    icon: <Users className="w-6 h-6" />,
    description: "Student protection",
    details: ["Bullying prevention", "Conflict resolution", "Wellness checks"]
  },
  {
    title: "Event Security",
    icon: <Calendar className="w-6 h-6" />,
    description: "School event protection",
    details: ["Athletic events", "School dances", "Graduation"]
  },
  {
    title: "Traffic Control",
    icon: <Car className="w-6 h-6" />,
    description: "School traffic management",
    details: ["Drop-off/pick-up", "Parking enforcement", "Crossing safety"]
  },
  {
    title: "CCTV Monitoring",
    icon: <Camera className="w-6 h-6" />,
    description: "Campus surveillance",
    details: ["24/7 monitoring", "Access control", "Incident review"]
  },
  {
    title: "Digital Reporting",
    icon: <FileCheck className="w-6 h-6" />,
    description: "Incident documentation",
    details: ["Activity logs", "Incident reports", "Compliance"]
  }
]

const schoolTypes = [
  { name: "Elementary Schools", icon: <Book className="w-6 h-6" />, description: "K-5 campus security" },
  { name: "Middle Schools", icon: <Calculator className="w-6 h-6" />, description: "6-8 grade security" },
  { name: "High Schools", icon: <GraduationCap className="w-6 h-6" />, description: "9-12 campus security" },
  { name: "Private Schools", icon: <School className="w-6 h-6" />, description: "Private institution security" },
  { name: "Charter Schools", icon: <BookOpen className="w-6 h-6" />, description: "Charter school protection" },
  { name: "College Campuses", icon: <Building className="w-6 h-6" />, description: "Higher education security" },
  { name: "Preschools", icon: <Users className="w-6 h-6" />, description: "Early childhood security" },
  { name: "Vocational Schools", icon: <Target className="w-6 h-6" />, description: "Trade school protection" },
  { name: "Special Education", icon: <Heart className="w-6 h-6" />, description: "Special needs school security" },
  { name: "Boarding Schools", icon: <Home className="w-6 h-6" />, description: "Residential school security" },
  { name: "International Schools", icon: <GlobeIcon className="w-6 h-6" />, description: "International campus security" },
  { name: "Sports Academies", icon: <Activity className="w-6 h-6" />, description: "Athletic facility security" }
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Decades of specialized school security expertise" },
  { title: "Youth-Focused Training", description: "Specialized training for working with students" },
  { title: "Emergency Response Certified", description: "Certified in school emergency protocols" },
  { title: "California Compliant", description: "Meeting all state school security requirements" },
  { title: "Community Partnership", description: "Building positive relationships with schools" },
  { title: "24/7 Campus Support", description: "Round-the-clock security and monitoring" }
]

// --- Main Page Component ---
export default function SchoolCampusSecurityPage() {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    phone: "",
    email: "",
    service: "",
    schoolType: "",
    message: ""
  })

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 overflow-hidden">
      
      {/* 1. Hero Section - VIDEO BACKGROUND */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            {/* Replace this source with your actual school/security video file */}
            <source src="/Services/unarmed/unarmed.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img 
               src="/Services/school/school-hero.jpg" 
               alt="School Security Background" 
               className="w-full h-full object-cover"
            />
          </video>
          
          {/* Gradients to blend video with brand color */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8">
            SCHOOL<br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #ff4d4d, #c10007)' }}>
              CAMPUS SECURITY
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Safe Learning Environments
            </span>
          </div>

          {/* Subtle subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 font-light">
              Comprehensive Security Solutions for Educational Institutions and Learning Environments
            </p>
            
          {/* Simple CTA Button */}
            <a
              href="tel:8007797691"
              aria-label="Call Proforce 1 Dispatch"
              className="inline-flex items-center justify-center hover:bg-red-800 text-white px-10 h-16 text-lg font-semibold rounded-lg transition-colors duration-300"
              style={{ backgroundColor: BRAND_HEX }}
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

      {/* 2. Professional School Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    School Security Specialists
                    <br />
                    <span className="block mt-2" style={{ color: BRAND_HEX }}>
                      Protecting Students, Staff, and Learning
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Educational institutions face unique security challenges including campus access control, student safety, emergency preparedness, and community relations. At Proforce 1, we provide specialized security that creates safe learning environments.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: BRAND_HEX }} />
                        </div>
                        <span className="text-slate-700 font-medium">20+ years of school security experience</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: BRAND_HEX }} />
                        </div>
                        <span className="text-slate-700 font-medium">Specialized training in youth-focused security</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5" style={{ color: BRAND_HEX }} />
                        </div>
                        <span className="text-slate-700 font-medium">Emergency response certified for educational facilities</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our school security officers are trained to work effectively in educational environments, balancing safety protocols with positive student interactions and supportive staff relationships.
                    </p>
                    <div className="bg-red-50/50 border border-red-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: BRAND_HEX }}>
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">School Security Experts</div>
                          <div className="text-xs text-slate-600">Specialized training for educational environments</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "20+", label: "Years Experience", icon: Award, color: `text-[${BRAND_HEX}]` },
                    { value: "150+", label: "Schools Protected", icon: School, color: "text-blue-900" },
                    { value: "100%", label: "Certified Officers", icon: BadgeCheck, color: "text-amber-600" },
                    { value: "24/7", label: "Campus Coverage", icon: Clock, color: "text-slate-700" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                      <stat.icon className={`w-8 h-8 mx-auto mb-2`} style={{ color: stat.color.includes('BRAND') ? BRAND_HEX : undefined }} />
                      <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-600 uppercase tracking-wider font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="hover:bg-red-800 text-white px-10 h-14 text-base font-semibold rounded-lg" style={{ backgroundColor: BRAND_HEX }}>
                    <Phone className="mr-3 w-5 h-5" />
                    Request Security Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <ShieldCheck className="mr-3 w-5 h-5" />
                    View Campus Solutions
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                  <Image
                    src={IMAGES.security}
                    alt="Professional School Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  
                  {/* Badge on image */}
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why School Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why <span style={{ color: BRAND_HEX }}>School Campuses</span> Need Specialized Security
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Educational environments require security solutions that protect while maintaining positive learning atmospheres and community relationships.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Campus access control",
                "Emergency preparedness",
                "Student safety",
                "Visitor management",
                "Bullying prevention",
                "Event security",
                "Traffic safety",
                "Community relations"
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" style={{ color: BRAND_HEX }} />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 italic">
                "Safe learning environments are essential for academic success. Professional school security creates the foundation for effective teaching and learning."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-red-100" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 group-hover:shadow-red-900/30 transition-all duration-300"
                       style={{ transitionProperty: 'background-color' }}
                  >
                    <div className="group-hover:text-white transition-colors duration-300">
                         {/* We can use CSS to change parent bg on hover via group-hover or inline styles */}
                        <div className="text-white group-hover:text-white">
                         {feature.icon}
                        </div>
                    </div>
                    {/* Add a style block or use Tailwind group-hover logic for background color change if needed. 
                        Simpler approach: keeping icon container dark or changing to brand color on hover 
                    */}
                    <style jsx>{`
                      .group:hover .w-14 {
                        background-color: ${BRAND_HEX};
                      }
                    `}</style>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-500 mb-6 font-medium">{feature.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {feature.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: BRAND_HEX }} />
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

      {/* 4. Campus Security Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.campus}
            alt="School Campus Security Environment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950/95" />
          {/* Tint with brand color */}
          <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ backgroundColor: BRAND_HEX }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="h-1 w-24 mx-auto" style={{ backgroundColor: BRAND_HEX }}></div>
              <div className="h-1 w-16 mx-auto mt-1 opacity-70" style={{ backgroundColor: BRAND_HEX }}></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span style={{ color: BRAND_HEX }}>Campus Security Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security solutions designed specifically for educational institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {campusServices.map((item, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Card with glass effect */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 cursor-default overflow-hidden"
                     style={{ borderColor: 'rgba(255,255,255,0.2)' }}
                >
                   {/* Hover border effect via style */}
                   <style jsx>{`
                     .group:hover > div {
                        border-color: ${BRAND_HEX};
                     }
                   `}</style>

                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-red-900/20 group-hover:to-red-900/10 transition-all duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                         style={{ background: `linear-gradient(135deg, ${BRAND_HEX}, #800000)` }}
                    >
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
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: BRAND_HEX }}></div>
                          <span className="text-xs text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: BRAND_HEX }}>
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
                  <div className="p-3 rounded-xl" style={{ backgroundColor: BRAND_HEX }}>
                    <AlertOctagon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">School Emergency Response Protocols</h3>
                    <p className="text-slate-300">Comprehensive emergency planning and response for educational facilities</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Proforce 1 specializes in school-specific emergency protocols including active shooter response, lockdown procedures, evacuation planning, and coordination with local emergency services.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Active shooter prevention and response training",
                      "Lockdown and shelter-in-place procedures",
                      "Emergency evacuation planning and drills",
                      "Medical emergency response coordination",
                      "Crisis communication system management"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: BRAND_HEX }} />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Emergency Ready</div>
                      <p className="text-slate-300">Trained for school emergency scenarios</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. School Types We Protect */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <SectionHeading>
                School Types <br/> We <span style={{ color: BRAND_HEX }}>Protect</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our specialized security services cover all types of educational institutions across California
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
             {schoolTypes.map((item, idx) => (
               <div 
                 key={idx}
                 className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
               >
                 <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                   <div style={{ color: BRAND_HEX }}>
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
                      <span style={{ color: BRAND_HEX }}>Proforce 1 for School Security</span>
                   </h3>
                   
                   <div className="grid gap-4">
                      {trustFactors.map((factor, idx) => (
                        <div key={idx} className="flex gap-4 items-start">
                           <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-1">
                              <BadgeCheck className="w-5 h-5" style={{ color: BRAND_HEX, fill: 'transparent' }} />
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
                         alt="Proforce 1 School Security Team" 
                         fill 
                         className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                         <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                            <p className="text-slate-900 font-medium italic">
                               "Proforce 1 transformed our campus security. Their officers are trained to work with students, understand educational environments, and have reduced security incidents by 70% while improving community relations."
                            </p>
                            <div className="flex items-center gap-3 mt-3">
                               <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: BRAND_HEX }}>RS</div>
                               <div>
                                   <div className="font-bold text-slate-900">Robert Sanchez</div>
                                   <div className="text-sm text-slate-600">Principal, High School District</div>
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
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request School Security Proposal</h2>
                   <p className="text-slate-500 mb-10 text-lg">Specialized security solutions for educational institutions and campus environments.</p>
                   
                   <form className="space-y-5">
                       <div className="grid grid-cols-2 gap-5">
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                                      style={{ '--tw-ring-color': BRAND_HEX } as React.CSSProperties}
                                      placeholder="John" />
                           </div>
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                                      style={{ '--tw-ring-color': BRAND_HEX } as React.CSSProperties}
                                      placeholder="Doe" />
                           </div>
                       </div>
                       
                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                           <input type="email" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                                  style={{ '--tw-ring-color': BRAND_HEX } as React.CSSProperties}
                                  placeholder="john@school.edu" />
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                           <input type="tel" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                                  style={{ '--tw-ring-color': BRAND_HEX } as React.CSSProperties}
                                  placeholder="(800) 779-7691" />
                       </div>

                       <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 text-slate-700"
                                       style={{ '--tw-ring-color': BRAND_HEX } as React.CSSProperties}>
                                   <option>Campus Entry Control & Visitor Management</option>
                                   <option>Student Safety & Behavioral Intervention</option>
                                   <option>Emergency Response & Crisis Management</option>
                                   <option>School Event & Extracurricular Security</option>
                                   <option>Traffic & Parking Safety</option>
                                   <option>Full School Security Package</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">School Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 text-slate-700"
                                       style={{ '--tw-ring-color': BRAND_HEX } as React.CSSProperties}>
                                   <option>Elementary School</option>
                                   <option>Middle School</option>
                                   <option>High School</option>
                                   <option>Private School</option>
                                   <option>College/University</option>
                                   <option>Special Education</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:bg-white transition-all" 
                                     style={{ '--tw-ring-color': BRAND_HEX } as React.CSSProperties}
                                     placeholder="Tell us about your school campus and specific security requirements..." />
                       </div>
                       
                       <Button className="w-full text-white h-14 text-lg font-bold rounded-lg shadow-xl mt-2 hover:opacity-90"
                               style={{ backgroundColor: BRAND_HEX, boxShadow: `0 10px 25px -5px ${BRAND_HEX}40` }}>
                           Request School Security Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -mr-20 -mt-20 opacity-20" style={{ backgroundColor: BRAND_HEX }} />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 rounded-xl mb-8 shadow-lg shadow-black/50" style={{ backgroundColor: BRAND_HEX }}>
                           <School className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Protect Your<br/>
                          Learning Community
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg transition-colors"
                                    style={{ '--hover-color': BRAND_HEX } as React.CSSProperties}>
                                    <style jsx>{`div:hover { background-color: ${BRAND_HEX}; }`}</style>
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Campus Security</div>
                                   <div className="text-xl font-bold tracking-tight">(800) 779-7691</div>
                               </div>
                           </div>
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg transition-colors">
                                  <style jsx>{`div:hover { background-color: ${BRAND_HEX}; }`}</style>
                                 <Mail className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                   <div className="text-lg font-medium break-all">info@proforce1protection.com</div>
                               </div>
                           </div>

                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg transition-colors">
                                  <style jsx>{`div:hover { background-color: ${BRAND_HEX}; }`}</style>
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
                               <div className="p-2 bg-slate-800 rounded-lg transition-colors">
                                  <style jsx>{`div:hover { background-color: ${BRAND_HEX}; }`}</style>
                                 <MapPin className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Service Area</div>
                                   <div className="text-base text-slate-300">
                                      Serving Schools<br/>
                                      Across California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: BRAND_HEX }} />
                           School Security Teams Active
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}