// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { 
//   Shield, 
//   Users, 
//   Building, 
//   Eye, 
//   Target, 
//   Clock,
//   Star,
//   Award,
//   TrendingUp
// } from "lucide-react"

// export default function SecurityHomepage() {
//   const [activeSection, setActiveSection] = useState("overview")

//   return (
//     <div className="min-h-screen bg-white">
//             {/* Trust Badges Section */}
//       {/* <section className="py-12 bg-gray-100 border-t border-b border-gray-200">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
//             <div className="text-center">
//               <div className="flex items-center justify-center gap-2 mb-2">
//                 <Star className="w-5 h-5 text-yellow-500 fill-current" />
//                 <Star className="w-5 h-5 text-yellow-500 fill-current" />
//                 <Star className="w-5 h-5 text-yellow-500 fill-current" />
//                 <Star className="w-5 h-5 text-yellow-500 fill-current" />
//                 <Star className="w-5 h-5 text-yellow-500 fill-current" />
//               </div>
//               <p className="text-sm font-semibold text-gray-700">Rated 4.9/5 by Clients</p>
//             </div>
            
//             <div className="text-center">
//               <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
//               <p className="text-sm font-semibold text-gray-700">Licensed & Insured</p>
//             </div>
            
//             <div className="text-center">
//               <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
//               <p className="text-sm font-semibold text-gray-700">Background Checked Staff</p>
//             </div>
            
//             <div className="text-center">
//               <TrendingUp className="w-8 h-8 text-red-600 mx-auto mb-2" />
//               <p className="text-sm font-semibold text-gray-700">Rapid Response Times</p>
//             </div>
//           </div>
//         </div>
//       </section> */}

     
//       {/* Why Choose Us Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               Why Choose ProForce<span className="text-orange-500">1</span>?
//             </h2>
//             <p className="text-xl text-gray-600">
//               We combine cutting-edge technology with human expertise to deliver unparalleled security solutions.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Target className="w-10 h-10 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Proactive Approach</h3>
//               <p className="text-gray-600">
//                 We anticipate threats before they occur, implementing preventive measures that keep your assets secure.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Users className="w-10 h-10 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
//               <p className="text-gray-600">
//                 Our security professionals undergo rigorous training and continuous development to maintain excellence.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <TrendingUp className="w-10 h-10 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
//               <p className="text-gray-600">
//                 With decades of experience and thousands of satisfied clients, our track record speaks for itself.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
//               What Our Clients Say
//             </h2>
//             <p className="text-xl text-gray-600">
//               Don't just take our word for it - hear from businesses that trust us with their security.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
//                 <CardContent className="p-6">
//                   <div className="flex items-center mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
//                   <div className="flex items-center">
//                     <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
//                       <Users className="w-5 h-5 text-gray-600" />
//                     </div>
//                     <div>
//                       <p className="font-semibold text-gray-900">{testimonial.name}</p>
//                       <p className="text-sm text-gray-600">{testimonial.company}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* CTA Section */}
//       <section className="py-20 bg-gray-900 text-white">
//         <div className="container mx-auto px-4 lg:px-8 text-center">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-6">
//             Ready to Enhance Your Security?
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
//             Join thousands of businesses that trust us with their security needs. 
//             Get a customized security assessment today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
//               Get Free Assessment
//             </Button>
//             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
//               Call Now: (800) 000-0000
//             </Button>
//           </div>
          
//           <div className="mt-8 text-sm text-gray-400">
//             <p>24/7 Emergency Response Available • Licensed & Insured • Background Checked Personnel</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // Data
// const services = [
//   {
//     title: "Armed Security",
//     description: "Professional armed security personnel for high-risk environments and valuable assets.",
//     icon: Shield
//   },
//   {
//     title: "Event Security",
//     description: "Comprehensive security solutions for events of all sizes, ensuring safety and order.",
//     icon: Users
//   },
//   {
//     title: "Corporate Security",
//     description: "Protecting corporate assets, employees, and business operations with tailored solutions.",
//     icon: Building
//   },
//   {
//     title: "Construction Security",
//     description: "24/7 site protection for construction projects, preventing theft and vandalism.",
//     icon: Eye
//   },
//   {
//     title: "Mobile Patrol",
//     description: "Regular patrol services providing visible security presence and rapid response.",
//     icon: Target
//   },
//   {
//     title: "Fire Watch",
//     description: "Specialized fire watch services to ensure compliance and safety during high-risk periods.",
//     icon: Clock
//   }
// ]

// const sectors = [
//   { name: "Commercial & Corporate", percentage: "35%" },
//   { name: "Government Facilities", percentage: "25%" },
//   { name: "Healthcare", percentage: "15%" },
//   { name: "Education", percentage: "12%" },
//   { name: "Industrial & Construction", percentage: "8%" },
//   { name: "Retail & Events", percentage: "5%" }
// ]

// const values = [
//   {
//     title: "Integrity",
//     description: "We operate with unwavering honesty and transparency in all our security operations.",
//     icon: Shield
//   },
//   {
//     title: "Excellence",
//     description: "Committed to delivering the highest standards of security service and performance.",
//     icon: Award
//   },
//   {
//     title: "Innovation",
//     description: "Continuously evolving our strategies to address emerging security challenges.",
//     icon: TrendingUp
//   }
// ]

// const testimonials = [
//   {
//     quote: "ProForce has been instrumental in protecting our corporate headquarters. Their professional approach and rapid response times give us complete peace of mind.",
//     name: "Sarah Johnson",
//     company: "TechCorp Inc."
//   },
//   {
//     quote: "The event security team handled our 5,000-person conference flawlessly. Their attention to detail and customer service was exceptional.",
//     name: "Michael Chen",
//     company: "Global Events LLC"
//   },
//   {
//     quote: "As a construction company, site security is critical. ProForce's 24/7 monitoring has prevented multiple theft attempts and saved us thousands.",
//     name: "David Martinez",
//     company: "BuildRight Construction"
//   }
// ]

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Shield, Users, Building, Eye, Target, Clock,
  Star, Award, TrendingUp, CheckCircle2, ArrowRight, ExternalLink, MapPin
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function SecurityHomepage() {
  // Animation state for numbers
  const [counts, setCounts] = useState({ clients: 0, guards: 0, years: 0 })

  useEffect(() => {
    // Simple count-up animation simulation
    const timer = setTimeout(() => {
      setCounts({ clients: 500, guards: 1200, years: 15 })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-red-500/20">
      
      {/* =========================================
          1. HIGH-END TRUST SECTION (Integrated)
         ========================================= */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Parallax Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="City Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-4">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Live Verification
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
             <p className="text-slate-300 max-w-2xl mx-auto">We maintain the highest standards of compliance, training, and client satisfaction in Southern California.</p>
          </div>

          {/* Trust Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <TrustCard 
              platform="Google" 
              rating="5.0" 
              icon={<MapPin className="text-blue-500" />} 
              reviews="120+ Reviews" 
              color="bg-blue-500" 
            />
            <TrustCard 
              platform="Trustpilot" 
              rating="4.9" 
              icon={<Star className="text-green-500 fill-green-500" />} 
              reviews="Excellent Score" 
              color="bg-green-500" 
            />
            <TrustCard 
              platform="BBB" 
              rating="A+" 
              icon={<Shield className="text-slate-500" />} 
              reviews="Accredited Business" 
              color="bg-slate-500" 
            />
          </div>

          {/* Statistics Row (The "Work" part - showing results) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            <StatItem number={`${counts.years}+`} label="Years Experience" />
            <StatItem number={`${counts.clients}+`} label="Active Clients" />
            <StatItem number={`${counts.guards}+`} label="Officers Deployed" />
            <StatItem number="100%" label="Client Retention" />
          </div>
        </div>
      </section>

    

      {/* =========================================
          3. WHY CHOOSE US (Refined)
         ========================================= */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-20 transform skew-x-12" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-red-600/20 text-red-500 font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                The ProForce Difference
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Not Just Guards.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Security Partners.</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We combine cutting-edge technology with human expertise to deliver unparalleled security solutions. Our officers are not just warm bodies; they are highly trained professionals.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Rapid Response", desc: "Under 15-minute average response time for alarms." },
                  { title: "Transparent Reporting", desc: "Real-time GPS tracking and digital incident reports." },
                  { title: " rigorous Training", desc: "All officers undergo BSIS and tactical situational training." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element / Image Placeholder */}
            <div className="relative h-[500px] w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <Image 
                src="/gallery/command-center-1.jpg"
                alt="Security Operations Center"
                fill
                className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 to-transparent">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 uppercase font-bold">Client Satisfaction</p>
                    <p className="text-2xl font-bold text-white">98.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. TESTIMONIALS (Clean Design)
         ========================================= */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          5. CTA SECTION (High Contrast)
         ========================================= */}
      {/* <section className="py-20 bg-red-700 text-white relative overflow-hidden">
        {/* Decorative Circles */}
       {/*} <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Ready to Secure Your Assets?
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto mb-10 font-light">
            Don't wait for an incident to happen. Get a comprehensive security assessment from Southern California's experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-700 hover:bg-slate-100 px-8 py-6 text-lg font-bold shadow-xl">
              Get Free Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-bold">
              (800) 123-4567
            </Button>
          </div>
          <p className="mt-8 text-sm text-red-200 opacity-80">
            Fully Licensed & Insured • PPO #12345 • 24/7 Dispatch
          </p>
        </div>
      </section> */}
    </div>
  )
}

// --- SUB-COMPONENTS ---

function TrustCard({ platform, rating, icon, reviews, color }: any) {
  return (
    <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-xl border-t-4 border-transparent hover:-translate-y-1 transition-transform duration-300" style={{ borderTopColor: color === 'bg-blue-500' ? '#3b82f6' : color === 'bg-green-500' ? '#22c55e' : '#64748b' }}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-50 rounded-lg">{icon}</div>
        <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-600">
          Verified <CheckCircle2 className="w-3 h-3 text-blue-500" />
        </div>
      </div>
      <div className="flex items-end gap-2 mb-2">
        <span className="text-4xl font-black text-slate-900">{rating}</span>
        <div className="mb-2 flex text-yellow-400">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-slate-100 pt-3 mt-2">
        <span className="text-sm font-medium text-slate-600">{reviews}</span>
        <span className="text-xs font-bold text-slate-400 uppercase">{platform}</span>
      </div>
    </div>
  )
}

function StatItem({ number, label }: any) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-black text-white mb-1">{number}</div>
      <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest">{label}</div>
    </div>
  )
}

// --- DATA ---
const services = [
  {
    title: "Armed Security",
    description: "Highly trained personnel for high-risk environments, corporate headquarters, and executive protection.",
    icon: Shield
  },
  {
    title: "Event Security",
    description: "Crowd management and access control for concerts, festivals, and private corporate gatherings.",
    icon: Users
  },
  {
    title: "Corporate Campus",
    description: "Integrated security solutions for office parks, protecting employees and intellectual property.",
    icon: Building
  },
  {
    title: "Construction Site",
    description: "24/7 surveillance and perimeter control to prevent theft, vandalism, and liability issues.",
    icon: Eye
  },
  {
    title: "Mobile Patrol",
    description: "Cost-effective, high-visibility vehicle patrols with GPS tracking and digital reporting.",
    icon: Target
  },
  {
    title: "Fire Watch",
    description: "NFPA-compliant fire watch services ensuring safety compliance during system outages.",
    icon: Clock
  }
]

const testimonials = [
  {
    quote: "ProForce has been instrumental in protecting our corporate headquarters. Their professional approach and rapid response times give us complete peace of mind.",
    name: "Sarah Johnson",
    company: "TechCorp Inc."
  },
  {
    quote: "The event security team handled our 5,000-person conference flawlessly. Their attention to detail and customer service was exceptional.",
    name: "Michael Chen",
    company: "Global Events LLC"
  },
  {
    quote: "As a construction company, site security is critical. ProForce's 24/7 monitoring has prevented multiple theft attempts and saved us thousands.",
    name: "David Martinez",
    company: "BuildRight Construction"
  }
]