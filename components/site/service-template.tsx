// import Image from "next/image"
// import type { ReactNode } from "react"

// export default function ServiceTemplate({
//   title,
//   intro,
//   bullets,
//   children,
//   imageQuery = "professional security guard on duty in orange county",
// }: {
//   title: string
//   intro: string
//   bullets?: string[]
//   children?: ReactNode
//   imageQuery?: string
// }) {
//   return (
//     <main className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
//       <header className="grid gap-6 md:grid-cols-2 md:items-center">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-semibold text-balance">{title}</h1>
//           <p className="mt-4 text-muted-foreground">{intro}</p>
//           {bullets && bullets.length > 0 && (
//             <ul className="mt-4 grid gap-2 list-disc ps-5 text-sm">
//               {bullets.map((b) => (
//                 <li key={b}>{b}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div className="relative aspect-video w-full rounded-md overflow-hidden">
//           <Image
//             src={`/.jpg?height=720&width=1280&query=${encodeURIComponent(imageQuery)}`}
//             alt={`${title} illustration`}
//             fill
//             sizes="(min-width: 768px) 50vw, 100vw"
//             className="object-cover"
//           />
//         </div>
//       </header>

//       {children && <section className="mt-10 prose prose-neutral max-w-none dark:prose-invert">{children}</section>}

//       <section className="mt-10 rounded-lg border p-6">
//         <h2 className="text-xl font-semibold">Why Choose SecureCo</h2>
//         <div className="mt-4 grid gap-4 md:grid-cols-2">
//           <div>
//             <h3 className="font-medium">24/7 Operations</h3>
//             <p className="text-sm text-muted-foreground">Always on-call dispatch and patrol support.</p>
//           </div>
//           <div>
//             <h3 className="font-medium">Vetted Professionals</h3>
//             <p className="text-sm text-muted-foreground">Background checked, trained, and evaluated regularly.</p>
//           </div>
//           <div>
//             <h3 className="font-medium">Technology Forward</h3>
//             <p className="text-sm text-muted-foreground">Reports, GPS patrol logs, and client dashboards.</p>
//           </div>
//           <div>
//             <h3 className="font-medium">Local Expertise</h3>
//             <p className="text-sm text-muted-foreground">Focused on Orange County for fast response times.</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
// app/services/ServiceTemplate.tsx
// import Image from "next/image"
// import type { ReactNode } from "react"

// interface ServiceTemplateProps {
//   title: string
//   intro: string
//   bullets?: string[]
//   children?: ReactNode
//   imagePath: string // Now using actual image paths
// }

// export default function ServiceTemplate({
//   title,
//   intro,
//   bullets,
//   children,
//   imagePath,
// }: ServiceTemplateProps) {
//   return (
//     <main className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
//       <header className="grid gap-6 md:grid-cols-2 md:items-center">
//         <div>
//           <h1 className="text-3xl md:text-4xl font-semibold text-balance">{title}</h1>
//           <p className="mt-4 text-muted-foreground">{intro}</p>
//           {bullets && bullets.length > 0 && (
//             <ul className="mt-4 grid gap-2 list-disc ps-5 text-sm">
//               {bullets.map((b) => (
//                 <li key={b}>{b}</li>
//               ))}
//             </ul>
//           )}
//         </div>
//         <div className="relative aspect-video w-full rounded-md overflow-hidden">
//           <Image
//             src={imagePath}
//             alt={`${title} service illustration`}
//             fill
//             sizes="(min-width: 768px) 50vw, 100vw"
//             className="object-cover"
//             priority
//           />
//         </div>
//       </header>

//       {children && <section className="mt-10 prose prose-neutral max-w-none dark:prose-invert">{children}</section>}

//       <section className="mt-10 rounded-lg border p-6">
//         <h2 className="text-xl font-semibold">Why Choose FoodGuard Security</h2>
//         <div className="mt-4 grid gap-4 md:grid-cols-2">
//           <div>
//             <h3 className="font-medium">24/7 Operations</h3>
//             <p className="text-sm text-muted-foreground">Always on-call dispatch and patrol support.</p>
//           </div>
//           <div>
//             <h3 className="font-medium">Vetted Professionals</h3>
//             <p className="text-sm text-muted-foreground">Background checked, trained, and evaluated regularly.</p>
//           </div>
//           <div>
//             <h3 className="font-medium">Technology Forward</h3>
//             <p className="text-sm text-muted-foreground">Reports, GPS patrol logs, and client dashboards.</p>
//           </div>
//           <div>
//             <h3 className="font-medium">Local Expertise</h3>
//             <p className="text-sm text-muted-foreground">Focused on Orange County for fast response times.</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
"use client"

import Image from "next/image"
import type { ReactNode } from "react"
import { CheckCircle2, Shield, Clock, MapPin, Radio, Phone, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceTemplateProps {
  title: string
  subtitle: string
  intro: string
  bullets?: string[]
  children?: ReactNode
  imagePath: string
  stats?: { label: string; value: string }[]
}

export default function ServiceTemplate({
  title,
  subtitle,
  intro,
  bullets,
  children,
  imagePath,
  stats
}: ServiceTemplateProps) {
  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- CINEMATIC HERO SECTION --- */}
      <header className="relative w-full h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imagePath}
            alt={`${title} service background`}
            fill
            className="object-cover transition-transform duration-[20s] hover:scale-110"
            priority
          />
          <div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md">
            <Shield className="w-3 h-3 fill-current" />
            {subtitle}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            {intro}
          </p>

          {/* Stats Bar (New Feature) */}
          {stats && (
             <div className="grid grid-cols-3 gap-4 mt-12 border-t border-white/10 pt-8 max-w-2xl mx-auto">
                {stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
             </div>
          )}
        </div>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="container mx-auto px-4 lg:px-8 -mt-20 relative z-20 mb-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT: Deep Analysis Content (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
              
              {/* The "Article" Content */}
              <article className="prose prose-lg prose-slate max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                prose-p:text-slate-600 prose-p:leading-8
                prose-li:text-slate-600 prose-li:marker:text-red-600
                prose-strong:text-slate-900 prose-strong:font-extrabold">
                {children}
              </article>

              {/* Enhanced Capabilities Block */}
              {bullets && bullets.length > 0 && (
                <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
                  <h3 className="text-2xl font-bold mb-8 flex items-center relative z-10">
                    <CheckCircle2 className="w-6 h-6 mr-3 text-red-500" />
                    Tactical Capabilities
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8 relative z-10">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start text-sm md:text-base font-medium text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 mr-3 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* 1. Deployment Card (Sticky) */}
            <div className="sticky top-6 space-y-6">
                <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
                    {/* Abstract Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                    
                    <h3 className="text-xl font-bold mb-2 relative z-10">Request Deployment</h3>
                    <p className="text-slate-400 text-sm mb-6 relative z-10">
                        Immediate threat assessment and rapid officer dispatch available.
                    </p>
                    
                    <div className="space-y-3 relative z-10">
                        <Button className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-bold tracking-wide uppercase shadow-lg shadow-red-900/20">
                            Get Instant Quote
                        </Button>
                        <Button variant="outline" className="w-full h-12 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                            <Phone className="w-4 h-4 mr-2" /> (800) 779-7691
                        </Button>
                    </div>
                </div>

                {/* 2. Trust Indicators */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 pb-2 border-b border-slate-100">
                    The ProForce Standard
                </h3>
                <div className="space-y-6">
                    <FeatureItem 
                    icon={<Clock className="w-5 h-5 text-red-600" />}
                    title="Rapid Response"
                    desc="Dispatch within minutes of confirmed threats."
                    />
                    <FeatureItem 
                    icon={<Shield className="w-5 h-5 text-red-600" />}
                    title="BSIS Certified"
                    desc="Fully licensed, bonded, and insured officers."
                    />
                    <FeatureItem 
                    icon={<Radio className="w-5 h-5 text-red-600" />}
                    title="GPS Monitored"
                    desc="Real-time tracking of every patrol movement."
                    />
                    <FeatureItem 
                    icon={<Star className="w-5 h-5 text-red-600" />}
                    title="Elite Training"
                    desc="De-escalation and active shooter protocols."
                    />
                </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}

function FeatureItem({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="mt-1 bg-red-50 p-2.5 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed mt-1">{desc}</p>
      </div>
    </div>
  )
}