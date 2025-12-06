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

import Image from "next/image"
import type { ReactNode } from "react"
import { CheckCircle2, Shield, Clock, MapPin, Radio } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceTemplateProps {
  title: string
  intro: string
  bullets?: string[]
  children?: ReactNode
  imagePath: string
}

export default function ServiceTemplate({
  title,
  intro,
  bullets,
  children,
  imagePath,
}: ServiceTemplateProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      
      {/* HERO SECTION 
        - This sits BEHIND the transparent header.
        - pt-32 ensures text starts BELOW the header area.
      */}
      <header className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imagePath}
            alt={`${title} service background`}
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/60" />
        </div>

        {/* Hero Content - Padded top to avoid header overlap */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Professional Services
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT: Main Content (8 cols) */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-slate-100">
              
              {/* Render Children (The Blog/Details content) */}
              {children && (
                <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
                  {children}
                </article>
              )}

              {/* Key Features List */}
              {bullets && bullets.length > 0 && (
                <div className="mt-12 bg-slate-50 p-8 rounded-xl border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-red-600" />
                    Service Capabilities
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start text-sm text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Sidebar / Why Choose Us (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Quick Contact Card */}
            <div className="bg-slate-900 text-white rounded-xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Need this service?</h3>
              <p className="text-slate-400 text-sm mb-6">
                Our experts are ready to deploy. Contact dispatch for an immediate assessment.
              </p>
              <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all uppercase tracking-wider text-sm">
                Request Quote
              </button>
            </div>

            {/* Why Choose Us Sidebar */}
            <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                The ProForce Standard
              </h3>
              <div className="space-y-6">
                <FeatureItem 
                  icon={<Clock className="w-5 h-5 text-red-600" />}
                  title="24/7 Operations"
                  desc="Always on-call dispatch and patrol support."
                />
                <FeatureItem 
                  icon={<Shield className="w-5 h-5 text-red-600" />}
                  title="Vetted Professionals"
                  desc="Background checked, trained, and evaluated."
                />
                <FeatureItem 
                  icon={<Radio className="w-5 h-5 text-red-600" />}
                  title="Technology Forward"
                  desc="GPS patrol logs and real-time dashboards."
                />
                <FeatureItem 
                  icon={<MapPin className="w-5 h-5 text-red-600" />}
                  title="Local Expertise"
                  desc="Focused on Orange County for fast response."
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="h-24"></div> {/* Bottom Spacer */}
    </main>
  )
}

// Helper Component for Sidebar Items
function FeatureItem({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 bg-red-50 p-2 rounded-lg h-fit">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
        <p className="text-xs text-slate-500 leading-relaxed mt-1">{desc}</p>
      </div>
    </div>
  )
}