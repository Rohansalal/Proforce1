// import { Star, ExternalLink } from "lucide-react"

// export function TrustBadges() {
//   const badges = [
//     {
//       label: "Google Rating",
//       link: "https://www.google.com/maps/place/Proforce+1+Protection+Services/@33.803992,-117.94251,17z/data=!4m6!3m5!1s0x80dd297f06432c89:0x94d7d2198a9f8ae7!8m2!3d33.803992!4d-117.9403213!16s%2Fg%2F11jfmcmp0k?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D",
//       rating: "5.0",
//       reviews: "100+ Reviews",
//       color: "hover:border-blue-500 hover:bg-blue-50",
//       icon: "⭐",
//       badgeColor: "bg-blue-100"
//     },
//     {
//       label: "Trustpilot",
//       link: "https://www.trustpilot.com/review/proforc1.com",
//       rating: "Excellent",
//       reviews: "TrustScore 4.8",
//       color: "hover:border-green-500 hover:bg-green-50",
//       icon: "★",
//       badgeColor: "bg-green-100"
//     },
//     {
//       label: "BBB A+ Rating",
//       link: "https://www.bbb.org/us/ca/anaheim/profile/security-guards/proforce-1-protection-services-1126-1000083561",
//       rating: "A+",
//       reviews: "Accredited Business",
//       color: "hover:border-yellow-500 hover:bg-yellow-50",
//       icon: "🛡️",
//       badgeColor: "bg-yellow-100"
//     }
//   ]

//   return (
//     <section
//       aria-label="Ratings"
//       className="mx-auto max-w-7xl px-4 lg:px-8 py-10 grid grid-cols-1 gap-6 md:grid-cols-3"
//     >
//       {badges.map((badge) => (
//         <a
//           key={badge.label}
//           href={badge.link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block group"
//         >
//           <div 
//             className={`
//               rounded-xl border-2 border-gray-200 p-6 text-center 
//               bg-white shadow-sm transition-all duration-300 
//               hover:shadow-xl hover:scale-105 transform 
//               relative overflow-hidden
//               ${badge.color}
//             `}
//           >
//             {/* Animated background effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
//             {/* Rating icon */}
//             <div className={`${badge.badgeColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 transition-transform duration-300 group-hover:scale-110`}>
//               <span className="text-2xl">{badge.icon}</span>
//             </div>
            
//             {/* Rating text */}
//             <div className="relative z-10">
//               <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-gray-800">
//                 {badge.label}
//               </h3>
//               <div className="flex items-center justify-center mb-1">
//                 <span className="text-2xl font-bold text-gray-900">{badge.rating}</span>
//               </div>
//               <p className="text-sm text-gray-600 mb-3 transition-colors duration-300 group-hover:text-gray-700">
//                 {badge.reviews}
//               </p>
              
//               {/* External link indicator */}
//               <div className="flex items-center justify-center text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
//                 <span>View Profile</span>
//                 <ExternalLink className="w-3 h-3 ml-1" />
//               </div>
//             </div>

//             {/* Hover border effect */}
//             <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-current transition-colors duration-300 opacity-20"></div>
//           </div>
//         </a>
//       ))}
//     </section>
//   )
// }
"use client"

import Image from "next/image"
import { Star, ExternalLink, Shield, CheckCircle2, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

export function TrustBadges() {
  const badges = [
    {
      id: "google",
      label: "Google Maps",
      link: "https://www.google.com/maps/place/Proforce+1+Protection+Services/@33.803992,-117.94251,17z/data=!4m6!3m5!1s0x80dd297f06432c89:0x94d7d2198a9f8ae7!8m2!3d33.803992!4d-117.9403213!16s%2Fg%2F11jfmcmp0k?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      rating: "5.0",
      reviews: "100+ Reviews",
      // Changed accent color for bottom bar
      accentColor: "bg-[#4285F4]",
      icon: <MapPin className="w-7 h-7 text-[#4285F4]" />, 
      fillStars: true,
      starColor: "text-yellow-400 fill-yellow-400"
    },
    {
      id: "trustpilot",
      label: "Trustpilot",
      link: "https://www.trustpilot.com/review/proforc1.com",
      rating: "4.8",
      reviews: "TrustScore",
      accentColor: "bg-[#00b67a]",
      icon: <Star className="w-7 h-7 text-[#00b67a] fill-[#00b67a]" />,
      fillStars: true,
      starColor: "text-[#00b67a] fill-[#00b67a]"
    },
    {
      id: "bbb",
      label: "BBB Accredited",
      link: "https://www.bbb.org/us/ca/anaheim/profile/security-guards/proforce-1-protection-services-1126-1000083561",
      rating: "A+",
      reviews: "Accredited Business",
      accentColor: "bg-[#005a78]",
      icon: <Shield className="w-7 h-7 text-[#005a78] fill-slate-200" />,
      fillStars: false,
      starColor: ""
    }
  ]

  const renderStars = (count: number, colorClass: string) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-5 h-5", 
              i < Math.floor(count) ? colorClass : "text-gray-200"
            )} 
          />
        ))}
      </div>
    )
  }

  return (
    // Increased padding for better spacing
    <section className="relative py-24 overflow-hidden font-sans">
      
      {/* 1. BACKGROUND IMAGE LAYER (Unchanged) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Background city view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header (Matches FAQ style) */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Proven Track Record
          </div> */}
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Businesses Across California</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {badges.map((badge) => (
            <a
              key={badge.id}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              // Added perspective for 3D effect
              className="group relative block perspective-1000"
            >
              {/* Main Card Container with 3D Tilt Hover Effect */}
              <div className="relative h-full bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 ease-out transform-gpu hover:rotate-x-2 hover:rotate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/10 border border-white/10 overflow-hidden">
                
                {/* Verified Badge (New) */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full shadow-sm">
                   <CheckCircle2 className="w-4 h-4 text-blue-600" />
                   <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Verified</span>
                </div>

                <div className="flex flex-col items-start h-full z-10 relative">
                  {/* Icon Container */}
                  <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:bg-white">
                    {badge.icon}
                  </div>

                  {/* Platform Label */}
                  <div className="mb-1">
                    <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                      {badge.label}
                    </h3>
                  </div>

                  {/* Rating & Stars */}
                  <div className="flex items-end gap-4 mb-6">
                    <span className="text-6xl font-black text-slate-900 tracking-tighter leading-none">
                      {badge.rating}
                    </span>
                    {badge.fillStars && (
                      <div className="mb-2 animate-in fade-in zoom-in duration-500 delay-100">
                          {renderStars(Number(badge.rating), badge.starColor)}
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-slate-100 my-4" />

                  {/* Bottom Info & Link */}
                  <div className="w-full flex items-center justify-between mt-auto pt-2">
                    <p className="text-base font-bold text-slate-700">
                      {badge.reviews}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                      View Profile <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Bottom Color Accent Bar (New) */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-2 transition-all duration-300",
                  badge.accentColor,
                  "opacity-80 group-hover:h-3 group-hover:opacity-100"
                )} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}