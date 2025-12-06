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
      label: "Google",
      link: "https://www.google.com/maps/place/Proforce+1+Protection+Services/@33.803992,-117.94251,17z/data=!4m6!3m5!1s0x80dd297f06432c89:0x94d7d2198a9f8ae7!8m2!3d33.803992!4d-117.9403213!16s%2Fg%2F11jfmcmp0k?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      rating: "5.0",
      reviews: "100+ Reviews",
      accent: "blue",
      icon: <MapPin className="w-6 h-6 text-blue-500" />, 
      fillStars: true
    },
    {
      id: "trustpilot",
      label: "Trustpilot",
      link: "https://www.trustpilot.com/review/proforc1.com",
      rating: "4.8",
      reviews: "TrustScore",
      accent: "green",
      icon: <Star className="w-6 h-6 text-emerald-500 fill-emerald-500" />,
      fillStars: true
    },
    {
      id: "bbb",
      label: "BBB Accredited",
      link: "https://www.bbb.org/us/ca/anaheim/profile/security-guards/proforce-1-protection-services-1126-1000083561",
      rating: "A+",
      reviews: "Accredited Business",
      accent: "slate",
      icon: <Shield className="w-6 h-6 text-slate-700 fill-slate-200" />,
      fillStars: false
    }
  ]

  const renderStars = (count: number, colorClass: string) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-4 h-4", 
              i < Math.floor(count) ? `${colorClass} fill-current` : "text-gray-200"
            )} 
          />
        ))}
      </div>
    )
  }

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Replace src with your local image like "/images/city-night.jpg" */}
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Background city view"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Blue Gradient Overlay - This ensures text readability and brand color matching */}
        <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Optional Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white font-bold text-xl md:text-2xl tracking-tight opacity-90">
            Trusted by Businesses Across California
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {badges.map((badge) => (
            <a
              key={badge.id}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block perspective-1000"
            >
              <div className="relative h-full bg-white rounded-xl p-6 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-red-900/20 border border-white/10">
                
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-full shadow-inner">
                   <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                   <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600">Verified</span>
                </div>

                <div className="flex flex-col items-start h-full">
                  {/* Icon */}
                  <div className="mb-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {badge.icon}
                  </div>

                  <div className="mb-1">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {badge.label}
                    </h3>
                  </div>

                  <div className="flex items-end gap-3 mb-4">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter">
                      {badge.rating}
                    </span>
                    {badge.fillStars && (
                      <div className="mb-2 animate-in fade-in zoom-in duration-500 delay-100">
                         {renderStars(Number(badge.rating), badge.id === 'google' ? 'text-yellow-400' : 'text-emerald-500')}
                      </div>
                    )}
                  </div>

                  <div className="w-full h-px bg-slate-100 my-2" />

                  <div className="w-full flex items-center justify-between mt-auto pt-2">
                    <p className="text-sm font-semibold text-slate-600">
                      {badge.reviews}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-400 group-hover:text-red-600 transition-colors">
                      Profile <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Bottom Color Indicator */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-1.5 rounded-b-xl transition-all duration-300 opacity-80 group-hover:h-2 group-hover:opacity-100",
                  badge.id === 'google' && "bg-[#4285F4]",
                  badge.id === 'trustpilot' && "bg-[#00b67a]",
                  badge.id === 'bbb' && "bg-[#005a78]"
                )} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}