"use client"

import Image from "next/image"
import { useState } from "react"
import { 
  Shield, Lock, Users, CheckCircle2, Phone, Mail,
  Award, Clock, MapPin, AlertTriangle, BadgeCheck, ChevronRight,
  ShieldCheck, Cpu, TrendingUp, FileCheck, DoorOpen, Camera,
  AlertCircle, Eye, Radio, Siren, FileText, Navigation,
  Building, ShoppingBag, Store, ShoppingCart, Car, Package,
  CreditCard, Key, Target, Crosshair, Headphones, Zap,
  BatteryCharging, Settings, Globe, Brain, GraduationCap,
  Briefcase, Home, Map, Compass, Search, Filter,
  Calendar, Clock as ClockIcon, Bell, BellRing, Megaphone,
  UserCheck, UserX, Users as UsersIcon, UserPlus,
  Award as AwardIcon, Star, Gift, Tag, Percent,
  Music, Coffee, Utensils, Film, GamepadIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// --- Assets Configuration ---
const IMAGES = {
  hero: "/Services/shopping-center/shopping-hero.jpg",
  security: "/Services/shopping-center/shopping-security.jpg",
  technology: "/Services/shopping-center/shopping-tech.jpg",
  patrol: "/Services/shopping-center/shopping-patrol.jpg",
  officer: "/Services/shopping-center/shopping-officer.jpg",
  command: "/Services/shopping-center/shopping-command.jpg",
  team: "/Services/shopping-center/shopping-team.jpg",
  facility: "/Services/shopping-center/shopping-facility.jpg"
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
      light ? "bg-amber-500" : "bg-amber-600"
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
    title: "Loss Prevention & Shoplifting Deterrence",
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
    description: "Comprehensive theft prevention strategies for shopping center tenants",
    points: [
      "Visible security presence to deter organized retail crime",
      "Shoplifter apprehension and documentation",
      "High-value merchandise protection",
      "Employee theft prevention programs",
      "Inventory shrinkage reduction strategies"
    ],
    note: "Our shopping center security officers are trained to identify and prevent theft while maintaining a positive shopping environment."
  },
  {
    title: "Customer Safety & Shopping Experience",
    icon: <Users className="w-8 h-8 text-white" />,
    description: "Creating safe, welcoming environments that encourage repeat business",
    points: [
      "Crowd control during peak shopping hours and events",
      "Customer assistance and wayfinding services",
      "Emergency medical response coordination",
      "Conflict de-escalation between patrons",
      "Special needs shopper assistance"
    ],
    note: "We balance security with hospitality to create environments where shoppers feel safe, valued, and encouraged to return."
  },
  {
    title: "Parking Facility & Perimeter Security",
    icon: <Car className="w-8 h-8 text-white" />,
    description: "Comprehensive protection for shopping center parking areas and exterior spaces",
    points: [
      "24/7 parking lot and garage patrols",
      "Vehicle theft and break-in prevention",
      "Traffic flow management during busy periods",
      "Shopping cart security and retrieval",
      "Lighting and safety assessments"
    ],
    note: "Most shopping center incidents originate in parking areas. Our proactive patrols prevent problems before they reach retail spaces."
  },
  {
    title: "Emergency Response & Incident Management",
    icon: <AlertCircle className="w-8 h-8 text-white" />,
    description: "Rapid response to shopping center-specific emergencies and incidents",
    points: [
      "Active shooter response protocols",
      "Robbery and theft incident management",
      "Medical emergency coordination with EMS",
      "Fire and safety evacuation procedures",
      "Civil unrest and protest management"
    ],
    note: "Our officers are trained to handle shopping center-specific emergencies while protecting patrons, employees, and property."
  }
]

const shoppingServices = [
  {
    title: "Loss Prevention",
    icon: <ShoppingBag className="w-6 h-6" />,
    description: "Theft deterrence & prevention",
    details: ["Shoplifting prevention", "ORC deterrence", "High-value protection"]
  },
  {
    title: "Customer Safety",
    icon: <Users className="w-6 h-6" />,
    description: "Shopper protection & assistance",
    details: ["Crowd management", "Customer service", "Emergency response"]
  },
  {
    title: "Parking Security",
    icon: <Car className="w-6 h-6" />,
    description: "Lot & garage protection",
    details: ["Vehicle patrols", "Break-in prevention", "Traffic management"]
  },
  {
    title: "Access Control",
    icon: <Key className="w-6 h-6" />,
    description: "Entry point management",
    details: ["Visitor screening", "After-hours security", "Emergency exits"]
  },
  {
    title: "Mobile Patrol",
    icon: <Navigation className="w-6 h-6" />,
    description: "Regular security rounds",
    details: ["Perimeter checks", "Exterior monitoring", "Quick response"]
  },
  {
    title: "Event Security",
    icon: <Calendar className="w-6 h-6" />,
    description: "Special event protection",
    details: ["Holiday events", "Store openings", "Promotional events"]
  },
  {
    title: "Food Court Security",
    icon: <Utensils className="w-6 h-6" />,
    description: "Dining area protection",
    details: ["Crowd control", "Dispute resolution", "Safety monitoring"]
  },
  {
    title: "Digital Reporting",
    icon: <FileCheck className="w-6 h-6" />,
    description: "Real-time incident tracking",
    details: ["Theft reports", "Activity logs", "Compliance documentation"]
  }
]

const shoppingCenterTypes = [
  { name: "Regional Malls", icon: <Building className="w-6 h-6" />, description: "Large enclosed shopping centers" },
  { name: "Outlet Centers", icon: <Tag className="w-6 h-6" />, description: "Outlet shopping complexes" },
  { name: "Lifestyle Centers", icon: <Coffee className="w-6 h-6" />, description: "Open-air shopping/dining centers" },
  { name: "Strip Malls", icon: <Store className="w-6 h-6" />, description: "Linear shopping centers" },
  { name: "Power Centers", icon: <ShoppingCart className="w-6 h-6" />, description: "Big box retail centers" },
  { name: "Specialty Centers", icon: <Gift className="w-6 h-6" />, description: "Theme-based shopping centers" },
  { name: "Town Centers", icon: <Home className="w-6 h-6" />, description: "Mixed-use town centers" },
  { name: "Marketplaces", icon: <ShoppingBag className="w-6 h-6" />, description: "Market-style shopping areas" },
  { name: "Fashion Centers", icon: <ShoppingBag className="w-6 h-6" />, description: "Fashion-focused malls" },
  { name: "Entertainment Centers", icon: <Film className="w-6 h-6" />, description: "Shopping/entertainment complexes" },
  { name: "Community Centers", icon: <Users className="w-6 h-6" />, description: "Neighborhood shopping centers" },
  { name: "Value Centers", icon: <Percent className="w-6 h-6" />, description: "Discount shopping centers" }
]

const trustFactors = [
  { title: "20+ Years Experience", description: "Decades of shopping center security expertise" },
  { title: "California Coverage", description: "Serving shopping centers across California" },
  { title: "Loss Prevention Specialists", description: "Trained in retail security protocols" },
  { title: "Customer Service Focus", description: "Balancing security with positive experiences" },
  { title: "Advanced Technology", description: "Real-time reporting and surveillance integration" },
  { title: "Flexible Solutions", description: "Customized security for different center types" }
]

// --- Main Page Component ---
export default function ShoppingCenterSecurityPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    centerType: "",
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
            alt="Shopping Center Security Services"
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-900/60 to-amber-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-transparent to-transparent" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8">
            SHOPPING CENTER<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              SECURITY SERVICES
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 block">
              Comprehensive Retail Protection
            </span>
          </div>

          {/* Subtle subtitle */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 font-light">
              Specialized Security Solutions for Malls, Shopping Centers, and Retail Complexes
            </p>
            
            {/* Simple CTA Button */}
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 h-16 text-lg font-semibold rounded-lg"
            >
              <Phone className="mr-3 w-5 h-5" />
              Request Shopping Center Security Quote
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

      {/* 2. Professional Shopping Center Security Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <div className="mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Shopping Center Security Experts
                    <br />
                    <span className="text-amber-600">
                      Protecting Shoppers, Tenants, and Profits
                    </span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  {/* Left Column Points */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      Shopping centers face unique security challenges including organized retail crime, parking lot safety, large crowds, and tenant protection. At Proforce 1, we provide specialized security that enhances the shopping experience while protecting assets.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Over 20 years of shopping center security experience</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Specialized loss prevention and crowd control training</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                        </div>
                        <span className="text-slate-700 font-medium">Customer service-focused security approach</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column Description */}
                  <div className="space-y-4">
                    <p className="text-slate-600 leading-relaxed">
                      Our shopping center security officers are trained to handle everything from shoplifting prevention to emergency evacuations. We understand that effective security enhances both safety and the shopping experience.
                    </p>
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-amber-600 rounded-lg">
                          <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">Shopping Center Specialists</div>
                          <div className="text-xs text-slate-600">Trained for retail complex environments</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { value: "20+", label: "Years Experience", icon: Award, color: "text-amber-600" },
                    { value: "35%+", label: "Theft Reduction", icon: TrendingUp, color: "text-blue-600" },
                    { value: "100%", label: "Trained Officers", icon: BadgeCheck, color: "text-green-600" },
                    { value: "24/7", label: "Center Coverage", icon: Clock, color: "text-purple-600" },
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
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-10 h-14 text-base font-semibold rounded-lg">
                    <Phone className="mr-3 w-5 h-5" />
                    Request Security Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-10 h-14 text-base font-semibold rounded-lg">
                    <ShoppingBag className="mr-3 w-5 h-5" />
                    View Center Solutions
                  </Button>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                  <Image
                    src={IMAGES.security}
                    alt="Professional Shopping Center Security Officer"
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
                      <span className="text-sm font-semibold text-slate-900">Center Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Shopping Center Security Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionHeading>
            Why <span className="text-amber-600">Shopping Centers</span> Need Specialized Security
          </SectionHeading>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-slate-600 text-center mb-8 leading-relaxed">
              Shopping centers require security solutions that address diverse challenges from large crowds and multiple tenants to complex layouts and extended operating hours.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Shoplifting prevention",
                "Organized retail crime",
                "Parking lot safety",
                "Crowd management",
                "Tenant security",
                "Emergency response",
                "Food court safety",
                "Brand reputation"
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-amber-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-slate-600 italic">
                "Effective shopping center security reduces shrinkage while creating safe, welcoming environments that attract shoppers and support tenant success."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-[100px] -mr-8 -mt-8 transition-colors group-hover:bg-amber-100" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 group-hover:bg-amber-600 group-hover:shadow-amber-600/30 transition-all duration-300">
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

      {/* 4. Shopping Center Security Services Grid */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.facility}
            alt="Shopping Center Security Environment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
              <div className="h-1 w-16 bg-amber-500 mx-auto mt-1"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-amber-500">Shopping Center Security Services</span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive security solutions designed specifically for shopping centers and retail complexes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {shoppingServices.map((item, idx) => (
              <div 
                key={idx}
                className="group relative"
              >
                {/* Card with glass effect */}
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-amber-500/50 transition-all duration-300 cursor-default overflow-hidden">
                  {/* Background highlight on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/0 group-hover:from-amber-600/10 group-hover:to-amber-600/5 transition-all duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors">
                      {item.description}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-1">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          <span className="text-xs text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Event Security Section */}
          <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-white/20 rounded-2xl p-10 relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-amber-600 rounded-xl">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Holiday & Event Security</h3>
                    <p className="text-slate-300">Specialized security for peak shopping periods and special events</p>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">
                  Shopping centers experience unique challenges during holidays, sales events, and promotional activities. Proforce 1 provides enhanced security solutions for these high-traffic periods.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Holiday season crowd management",
                      "Black Friday and sales event security",
                      "Santa visits and family event protection",
                      "Promotional event and celebrity appearance security",
                      "Extended hours and late-night shopping security"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">Event Ready</div>
                      <p className="text-slate-300">Specialized security for high-traffic periods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Shopping Center Types We Protect */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
              <SectionHeading>
                Shopping Center Types <br/> We <span className="text-amber-600">Protect</span>
              </SectionHeading>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Our specialized security services cover all types of shopping centers across California
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {shoppingCenterTypes.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-amber-600">
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
                       <span className="text-amber-600">Proforce 1 for Shopping Center Security</span>
                    </h3>
                    
                    <div className="grid gap-4">
                       {trustFactors.map((factor, idx) => (
                         <div key={idx} className="flex gap-4 items-start">
                            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0 mt-1">
                               <Star className="w-5 h-5 text-amber-600 fill-amber-600" />
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
                          alt="Proforce 1 Shopping Center Security Team" 
                          fill 
                          className="object-cover"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                       <div className="absolute bottom-6 left-6 right-6">
                          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                             <p className="text-slate-900 font-medium italic">
                                "Proforce 1 reduced our center's shrinkage by 40% and improved shopper satisfaction scores. Their team handles everything from shoplifting to customer assistance with professionalism."
                             </p>
                             <div className="flex items-center gap-3 mt-3">
                                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">KM</div>
                                <div>
                                   <div className="font-bold text-slate-900">Karen Martinez</div>
                                   <div className="text-sm text-slate-600">Center Manager, Regional Mall</div>
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
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950" />
         
         <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
               
               {/* Form Side */}
               <div className="p-10 md:p-14 w-full md:w-3/5 order-2 md:order-1">
                   <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">Request Shopping Center Security Proposal</h2>
                   <p className="text-slate-500 mb-10 text-lg">Specialized security solutions for malls, shopping centers, and retail complexes.</p>
                   
                   <form className="space-y-5">
                       <div className="grid grid-cols-2 gap-5">
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="John" />
                           </div>
                           <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                               <input type="text" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="Doe" />
                           </div>
                       </div>
                       
                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                           <input type="email" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="john@shoppingcenter.com" />
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Phone Number</label>
                           <input type="tel" className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="(555) 123-4567" />
                       </div>

                       <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Service Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700">
                                   <option>Loss Prevention & Theft Deterrence</option>
                                   <option>Customer Safety & Assistance</option>
                                   <option>Parking Lot & Garage Security</option>
                                   <option>Event & Holiday Security</option>
                                   <option>Food Court & Common Area Security</option>
                                   <option>Full Shopping Center Security Package</option>
                               </select>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-slate-500 uppercase">Center Type</label>
                               <select className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-slate-700">
                                   <option>Regional Mall</option>
                                   <option>Outlet Center</option>
                                   <option>Lifestyle Center</option>
                                   <option>Strip Mall</option>
                                   <option>Power Center</option>
                                   <option>Town Center</option>
                               </select>
                            </div>
                       </div>

                       <div className="space-y-1">
                           <label className="text-xs font-bold text-slate-500 uppercase">Security Needs</label>
                           <textarea rows={3} className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all" placeholder="Tell us about your shopping center and specific security requirements..." />
                       </div>
                       
                       <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white h-14 text-lg font-bold rounded-lg shadow-xl shadow-amber-600/20 mt-2">
                           Request Shopping Center Security Proposal
                       </Button>
                   </form>
               </div>

               {/* Info Side - Dark */}
               <div className="bg-slate-900 p-10 md:p-14 w-full md:w-2/5 text-white flex flex-col justify-between relative overflow-hidden order-1 md:order-2">
                   {/* Abstract Shapes */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -mr-20 -mt-20" />
                   
                   <div className="relative z-10">
                       <div className="inline-block p-3 bg-amber-600 rounded-xl mb-8 shadow-lg shadow-amber-900/50">
                           <ShoppingBag className="w-8 h-8 text-white" />
                       </div>
                       
                       <h3 className="text-2xl font-bold mb-8 leading-snug">
                          Protect Your<br/>
                          Shopping Center
                       </h3>
                       
                       <div className="space-y-8">
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-amber-600 transition-colors">
                                 <Phone className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">24/7 Center Support</div>
                                   <div className="text-xl font-bold tracking-tight">800-779-7691</div>
                               </div>
                           </div>
                           
                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-amber-600 transition-colors">
                                 <Mail className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Email Us</div>
                                   <div className="text-lg font-medium break-all">info@proforce1protection.com</div>
                               </div>
                           </div>

                           <div className="flex items-start gap-4 group">
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-amber-600 transition-colors">
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
                               <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-amber-600 transition-colors">
                                 <MapPin className="w-5 h-5 text-white" />
                               </div>
                               <div>
                                   <div className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-bold">Service Area</div>
                                   <div className="text-base text-slate-300">
                                      Serving Shopping Centers<br/>
                                      Across California
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   
                   <div className="relative z-10 mt-12 pt-8 border-t border-slate-800">
                        <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                           <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                           Shopping Center Security Teams Active
                        </div>
                   </div>
               </div>

            </div>
         </div>
      </section>
    </main>
  )
}