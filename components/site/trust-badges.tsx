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
import { Star, ExternalLink, Award, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function TrustBadges() {
  const badges = [
    {
      id: "google",
      platform: "Google",
      link: "https://www.google.com/maps/place/Proforce+1+Protection+Services/@33.803992,-117.94251,17z/data=!4m6!3m5!1s0x80dd297f06432c89:0x94d7d2198a9f8ae7!8m2!3d33.803992!4d-117.9403213!16s%2Fg%2F11jfmcmp0k?entry=ttu&g_ep=EgoyMDI1MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      rating: "5.0",
      reviewCount: "70+",
      reviewLabel: "Google Reviews",
      // Google brand colors - multicolor gradient
      brandGradient: "from-[#4285F4] via-[#EA4335] to-[#FBBC04]",
      bgPattern: "bg-gradient-to-br from-blue-50 via-white to-yellow-50",
      accentColor: "bg-[#4285F4]",
      hoverShadow: "group-hover:shadow-blue-500/20",
      // SVG logo as data URI for Google G logo
      logoSvg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        </svg>
      )
    },
    {
      id: "trustpilot",
      platform: "Trustpilot",
      link: "https://www.trustpilot.com/review/proforc1.com",
      rating: "4.8",
      reviewCount: "Excellent",
      reviewLabel: "TrustScore",
      // Trustpilot green brand
      brandGradient: "from-[#00b67a] to-[#005128]",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50",
      accentColor: "bg-[#00b67a]",
      hoverShadow: "group-hover:shadow-green-500/20",
      // Trustpilot star logo
      logoSvg: (
        <svg viewBox="0 0 126 30" className="w-24 h-10">
          <g fill="#00B67A">
            <path d="M30.4 13.4L23 13.8l-2.8-6.8c-.3-.8-1.4-.8-1.8 0l-2.8 6.8-7.4.4c-.9 0-1.2 1.1-.5 1.6l6 4.4-2.3 7.2c-.3.8.7 1.5 1.4 1l6.2-4.5 6.2 4.5c.7.5 1.7-.2 1.4-1l-2.3-7.2 6-4.4c.7-.5.4-1.6-.5-1.6z" />
            <text x="36" y="20" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#191919">Trustpilot</text>
          </g>
        </svg>
      )
    },
    {
      id: "bbb",
      platform: "BBB",
      link: "https://www.bbb.org/us/ca/anaheim/profile/security-guards/proforce-1-protection-services-1126-1000083561",
      rating: "A+",
      reviewCount: "Accredited",
      reviewLabel: "Since 2019",
      // BBB blue professional
      brandGradient: "from-[#005a78] to-[#003d52]",
      bgPattern: "bg-gradient-to-br from-blue-50 to-slate-50",
      accentColor: "bg-[#005a78]",
      hoverShadow: "group-hover:shadow-blue-600/20",
      // BBB torch logo simplified
      logoSvg: (
        <svg viewBox="0 0 100 50" className="w-14 h-7">
          <g fill="#005a78">
            <rect x="20" y="15" width="10" height="30" rx="2" />
            <path d="M15 10 Q25 5 35 10 L30 15 Q25 12 20 15 Z" fill="#005a78" />
            <text x="40" y="30" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">BBB</text>
            <circle cx="90" cy="15" r="8" fill="none" stroke="#005a78" strokeWidth="2" />
            <path d="M88 15 L90 17 L94 11" fill="none" stroke="#005a78" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
      )
    }
  ]

  const renderStars = (count: number, filled: boolean = true) => {
    const starCount = filled ? Math.floor(Number(count)) : 5
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4 transition-all duration-300",
              i < starCount
                ? "text-yellow-400 fill-yellow-400 drop-shadow-sm"
                : "text-slate-200 fill-slate-200"
            )}
          />
        ))}
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  }

  return (
    <section className="relative z-20 -mt-16 md:-mt-24 pb-8 overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>

      {/* Float cleanly without background */}
      <div className="absolute inset-x-0 h-40 bg-gradient-to-t from-slate-50 to-transparent bottom-0 z-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* <h2 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-white drop-shadow-md mb-2">
            Trusted by <span className="text-red-500">Businesses Across California</span>
          </h2> */}
          <br />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {badges.map((badge, index) => (
            <motion.a
              variants={cardVariants}
              key={badge.id}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Container - Unique design per platform */}
              <div className={cn(
                "relative h-full rounded-sm p-4 md:p-5 transition-all duration-500 overflow-hidden",
                badge.bgPattern,
                "border border-slate-200/50",
                "shadow-lg hover:shadow-2xl",
                badge.hoverShadow,
                "transform hover:scale-[1.01] hover:-translate-y-1"
              )}>

                {/* Decorative gradient overlay on hover */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                  badge.brandGradient,
                  "mix-blend-overlay"
                )} />

                {/* Platform Logo/Brand */}
                <div className="relative z-10 mb-4 flex items-center justify-between">
                  <div className="transform transition-transform duration-500 group-hover:scale-110">
                    {badge.logoSvg}
                  </div>

                  {/* Verified Badge */}
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-700">Verified</span>
                  </div>
                </div>

                {/* Platform Name */}
                <div className="relative z-10 mb-2 mt-1">
                  <h3 className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                    {badge.platform}
                  </h3>
                </div>

                {/* Rating Display */}
                <div className="relative z-10 mb-5">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-none">
                      {badge.rating}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-600">{badge.reviewCount}</span>
                      <span className="text-xs text-slate-500">{badge.reviewLabel}</span>
                    </div>
                  </div>

                  {/* Star Rating */}
                  {badge.id === "google" || badge.id === "trustpilot" ? (
                    <div className="flex items-center gap-2">
                      {renderStars(Number(badge.rating), true)}
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span>Top Rated Business</span>
                    </div>
                  )}
                </div>

                {/* Divider */}
                <div className="relative z-10 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-4" />

                {/* CTA Link */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-600">
                    See what customers say
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 group-hover:text-red-600 transition-colors duration-300">
                    <span className="text-xs font-bold">View</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Accent Bar with brand color */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-500",
                  badge.accentColor,
                  "group-hover:h-2"
                )} />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section >
  )
}