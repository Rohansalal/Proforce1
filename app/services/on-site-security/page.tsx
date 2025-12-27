// --- Assets Configuration ---
// const IMAGES = {
//   hero:
//   security: "/Services/onsite-security/onsite.jpg",
//   technology: "/Services/onsite-security/footer.jpeg",
//   patrol: "/Services/onsite/onsite-patrol.jpg",
//   officer: "/Services/onsite/onsite-officer.jpg",
//   command: "/Services/onsite-security/footer.jpeg",
//   team: ,
//   facility: 
// }

"use client"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { 
  Shield, Users, CheckCircle2, Phone, Mail,
  Award, Clock, MapPin, BadgeCheck, ChevronRight,
  ShieldCheck, Cpu, FileCheck, Camera,
  AlertCircle, Navigation,
  Building, Factory, Warehouse, Home, 
  Key, 
  Zap, Globe, GraduationCap,
  HardHat, 
  CircuitBoard, Server, 
  Users as UsersIcon} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const ASSETS = {
  heroVideo:  "/Services/onsite-security/hero.mp4", // Video for Hero Section
  security: "/Services/onsite-security/onsite.jpg",
  technology: "/Services/onsite-security/footer.jpeg",
  patrol: "/Services/onsite/onsite-patrol.jpg",
  officer: "/Services/onsite/onsite-officer.jpg",
  command: "/Services/onsite-security/footer.jpeg",
  team: "/Services/onsite-security/footer.jpeg",
  facility: "/Services/onsite-security/footer.jpeg"
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
             {/* Overlay for better text readability - Using Orange/Red tones */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-orange-900/40" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
        </div>
    )
}

// --- Data ---
const whyChooseUs = [
  {
    title: "24/7 Static Security Posts",
    icon: <Shield className="w-8 h-8 text-white" />,
    description: "Dedicated security officers stationed at your facility entry and exit points",
    points: [
      "Round-the-clock guard posts",
      "Visitor screening and access control",
      "Vehicle and pedestrian monitoring",
      "Emergency response coordination",
      "Regular facility perimeter checks"
    ],
    note: "Our static guards serve as the first line of defense and provide a visible deterrent to potential security threats."
  },
  {
    title: "Mobile Patrol & Facility Rounds",
    icon: <Navigation className="w-8 h-8 text-white" />,
    description: "Regular patrols to monitor your entire facility and identify security vulnerabilities",
    points: [
      "Scheduled and random patrols",
      "GPS-tracked patrol routes",
      "Electronic tour verification",
      "Incident investigation",
      "Perimeter security checks"
    ],
    note: "Mobile patrols ensure comprehensive coverage of your facility, identifying and addressing security gaps before they become incidents."
  },
  {
    title: "Access Control & Visitor Management",
    icon: <Key className="w-8 h-8 text-white" />,
    description: "Comprehensive access control systems and visitor screening protocols",
    points: [
      "ID badge issuance and verification",
      "Visitor log maintenance",
      "Controlled entry/exit points",
      "Employee credential verification",
      "Delivery and vendor screening"
    ],
    note: "Proper access control prevents unauthorized entry while maintaining smooth operations for authorized personnel."
  },
  {
    title: "Emergency Response & Crisis Management",
    icon: <AlertCircle className="w-8 h-8 text-white" />,
    description: "Rapid response capabilities for emergencies and critical incidents",
    points: [
      "Emergency evacuation procedures",
      "First aid and medical response",
      "Fire safety protocols",
      "Active shooter response",
      "Natural disaster preparedness"
    ],
    note: "Our officers are trained to respond effectively to emergencies, protecting lives and minimizing property damage."
  }
]

const onsiteServices = [
  {
    title: "Static Guard Posts",
    icon: <Shield className="w-6 h-6" />,
    description: "24/7 security posts",
    details: ["Gatehouse security", "Lobby reception", "Entry point control"]
  },
  {
    title: "Mobile Patrols",
    icon: <Navigation className="w-6 h-6" />,
    description: "Regular facility patrols",
    details: ["GPS tracking", "Tour verification", "Perimeter checks"]
  },
  {
    title: "Access Control",
    icon: <Key className="w-6 h-6" />,
    description: "Visitor management",
    details: ["ID verification", "Visitor logs", "Badge issuance"]
  },
  {
    title: "CCTV Monitoring",
    icon: <Camera className="w-6 h-6" />,
    description: "Surveillance oversight",
    details: ["24/7 monitoring", "Video recording", "Incident review"]
  },
  {
    title: "Emergency Response",
    icon: <AlertCircle className="w-6 h-6" />,
    description: "Crisis management",
    details: ["First response", "Evacuation", "Medical aid"]
  },
  {
    title: "Incident Reporting",
    icon: <FileCheck className="w-6 h-6" />,
    description: "Digital documentation",
    details: ["Real-time reports", "Activity logs", "Compliance"]
  },
  {
    title: "Fire Watch",
    icon: <Zap className="w-6 h-6" />,
    description: "Fire safety monitoring",
    details: ["Fire prevention", "Alarm response", "Safety checks"]
  },
  {
    title: "Employee Safety",
    icon: <UsersIcon className="w-6 h-6" />,
    description: "Staff protection",
    details: ["Escort services", "Parking security", "Safety training"]
  }
]

const facilityTypes = [
  { name: "Corporate Offices", icon: <Building className="w-6 h-6" />, description: "Office building security" },
  { name: "Manufacturing Plants", icon: <Factory className="w-6 h-6" />, description: "Production facility protection" },
  { name: "Warehouses", icon: <Warehouse className="w-6 h-6" />, description: "Storage facility security" },
  { name: "Construction Sites", icon: <HardHat className="w-6 h-6" />, description: "Construction zone protection" },
  { name: "Data Centers", icon: <Server className="w-6 h-6" />, description: "IT facility security" },
  { name: "Educational Facilities", icon: <GraduationCap className="w-6 h-6" />, description: "School & campus security" },
  { name: "Healthcare Facilities", icon: <Users className="w-6 h-6" />, description: "Medical facility protection" },
  { name: "Residential Complexes", icon: <Home className="w-6 h-6" />, description: "Apartment security" },
  { name: "Government Buildings", icon: <Building className="w-6 h-6" />, description: "Public facility security" },
  { name: "Hotel & Hospitality", icon: <Home className="w-6 h-6" />, description: "Hospitality venue protection" },
  { name: "Research Facilities", icon: <CircuitBoard className="w-6 h-6" />, description: "Laboratory security" },
  { name: "Utility Plants", icon: <Zap className="w-6 h-6" />, description: "Utility facility protection" }
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Decades of onsite security expertise" },
  { title: "State Certified Officers", description: "Fully licensed and certified security personnel" },
  { title: "24/7 Command Center", description: "Round-the-clock monitoring and support" },
  { title: "Customized Solutions", description: "Tailored security plans for each facility" },
  { title: "Advanced Technology", description: "Modern security equipment and systems" },
  { title: "Rapid Response", description: "Quick emergency response capabilities" }
]

// --- Main Page Component ---
export default function OnsiteSecurityPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    facilityType: "",
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
            ONSITE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              SECURITY SERVICES
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Professional Facility Protection
            </span>
          </div>

          {/* Subtle subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 font-light">
              Comprehensive Security Solutions for Commercial, Industrial, and Institutional Facilities
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

      {/* 2. Professional Onsite Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Onsite Security Specialists
                    <br />
                    <span className="text-orange-600">
                      Protecting Your Facility 24/7/365
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Every facility has unique security needs. At Proforce 1, we provide customized onsite security solutions that protect your property, assets, and people while maintaining operational efficiency.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Customized security plans for each facility</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium">State-certified security officers</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="text-slate-700 font-medium">24/7 monitoring and rapid response</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our onsite security officers are trained to handle facility-specific challenges, from access control and visitor management to emergency response and incident documentation.
                    </p>
                    <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Facility Security Experts</div>
                          <div className="text-xs text-slate-600">Specialized training for onsite protection</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "20+", label: "Years Experience", icon: Award, color: "text-orange-600" },
                    { value: "500+", label: "Facilities Protected", icon: Building, color: "text-blue-600" },
                    { value: "100%", label: "Certified Officers", icon: BadgeCheck, color: "text-green-600" },
                    { value: "24/7", label: "Onsite Coverage", icon: Clock, color: "text-red-600" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:border-orange-200 transition-colors">
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
                    <ShieldCheck className="mr-3 w-5 h-5" />
                    View Facility Solutions
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px] border border-slate-200">
                  <Image
                    src={ASSETS.security}
                    alt="Professional Onsite Security Officer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  
                  {/* Badge on image */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border-l-4 border-orange-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-slate-900">Onsite Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Onsite Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why <span className="text-orange-600">Facilities</span> Need Professional Onsite Security
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Onsite security provides comprehensive protection that addresses facility-specific risks while maintaining operational efficiency and safety.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Unauthorized access",
                "Theft prevention",
                "Employee safety",
                "Asset protection",
                "Emergency response",
                "Visitor management",
                "Fire safety",
                "Regulatory compliance"
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:border-orange-200 transition-colors">
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
                "Professional onsite security provides a visible deterrent while creating a safe environment for employees, visitors, and valuable assets."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:border-orange-100 transition-all duration-300"
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
                        <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
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

      {/* 4. Onsite Security Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={ASSETS.facility}
            alt="Onsite Security Environment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="h-1 w-24 bg-orange-600 mx-auto"></div>
              <div className="h-1 w-16 bg-orange-500 mx-auto mt-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-orange-500">Onsite Security Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security solutions designed specifically for facility protection and management
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {onsiteServices.map((item, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Card with glass effect */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-orange-500/50 transition-all duration-300 cursor-default overflow-hidden h-full">
                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/0 group-hover:from-orange-600/10 group-hover:to-orange-600/5 transition-all duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-900/20">
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

          {/* Technology & Reporting Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-10 relative overflow-hidden shadow-2xl">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-600 rounded-xl">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Advanced Technology Integration</h3>
                    <p className="text-slate-300">Modern security systems and digital reporting for comprehensive facility protection</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Proforce 1 combines traditional security methods with advanced technology including GPS patrol tracking, digital tour verification, real-time incident reporting, and integrated CCTV monitoring.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "GPS patrol tracking and verification",
                      "Digital incident reporting system",
                      "Real-time CCTV monitoring",
                      "Access control system integration",
                      "Automated activity logs and reports"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 flex flex-col justify-center items-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Tech-Enabled Security</div>
                      <p className="text-slate-300 text-sm">Combining human expertise with advanced technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Facility Types We Protect */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <SectionHeading>
               Facility Types <br/> We <span className="text-orange-600">Protect</span>
             </SectionHeading>
             <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
               Our specialized onsite security services cover all types of facilities across California
             </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
             {facilityTypes.map((item, idx) => (
               <div 
                 key={idx}
                 className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
               >
                 <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                   <div className="text-orange-600">
                     {item.icon}
                   </div>
                 </div>
                 <h4 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">{item.name}</h4>
                 <p className="text-sm text-slate-500">{item.description}</p>
               </div>
             ))}
           </div>

           {/* Why Choose Us */}
           <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl p-10 border border-slate-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                       Why Choose <br/>
                       <span className="text-orange-600">Proforce 1 for Onsite Security</span>
                    </h3>
                    
                    <div className="grid gap-4">
                       {trustFactors.map((factor, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-1">
                               <BadgeCheck className="w-5 h-5 text-orange-600 fill-orange-600/20" />
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
                          alt="Proforce 1 Onsite Security Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-slate-100">
                             <p className="text-slate-900 font-medium italic mb-4">
                                "Proforce 1 reduced security incidents by 45% at our manufacturing facility. Their onsite security team is professional, vigilant, and integrates seamlessly with our operations."
                             </p>
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">SR</div>
                                <div>
                                    <div className="font-bold text-slate-900">Sarah Rodriguez</div>
                                    <div className="text-sm text-slate-600">Facility Manager, Manufacturing Plant</div>
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
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Onsite Security Proposal</h2>
                   <p className="text-slate-500 mb-10 text-lg">Specialized security solutions for commercial, industrial, and institutional facilities.</p>
                   
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
                                   <option>Static Guard Posts</option>
                                   <option>Mobile Patrol Services</option>
                                   <option>Access Control Systems</option>
                                   <option>CCTV Monitoring</option>
                                   <option>Emergency Response</option>
                                   <option>Full Facility Security Package</option>
                               </select>
                           </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Facility Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-700">
                                   <option>Corporate Office</option>
                                   <option>Manufacturing Plant</option>
                                   <option>Warehouse/Storage</option>
                                   <option>Construction Site</option>
                                   <option>Data Center</option>
                                   <option>Educational Facility</option>
                               </select>
                           </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all" placeholder="Tell us about your facility and specific security requirements..." />
                       </div>
                       
                       <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-orange-600/20 mt-2">
                           Request Onsite Security Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-orange-600 rounded-xl mb-8 shadow-lg shadow-orange-900/50">
                           <Building className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Protect Your<br/>
                          Facility & Assets
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-orange-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Onsite Support</div>
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
                                      Serving Facilities<br/>
                                      Across California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           Onsite Security Teams Active 24/7
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}