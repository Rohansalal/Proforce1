// "use client"

// import React, { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Menu, Phone, Mail, ChevronDown, User, ShieldCheck } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { cn } from "@/lib/utils"

// // --- Constants & Config ---
// const BRAND = {
//   name: "ProForce 1 Protection Services",
//   colors: {
//     red: "#B91C1C",
//     dark: "#020617",
//     charcoal: "#1e293b",
//   },
//   contact: {
//     email: "info@proforce1protection.com",
//     phone: "(800) 779-7691",
//     license: "PPO #120098"
//   }
// }

// const NAVIGATION = {
//   primary: [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About Us" },
//     { href: "/services", label: "Services", isDropdown: true },
//     { href: "/gallery", label: "Gallery" },
//     { href: "/careers", label: "Careers" },
//     { href: "/contact", label: "Contact" },
//   ],
//   services: [
//     { href: "/services/armed-security", label: "Armed Security" },
//     { href: "/services/unarmed-security", label: "Unarmed Guard" },
//     { href: "/services/construction-security", label: "Construction Security" },
//     { href: "/services/event-security", label: "Event Security" },
//     { href: "/services/fire-watch-security", label: "Fire Watch" },
//     { href: "/services/hospital-security", label: "Hospital Security" },
//     { href: "/services/mobile-patrol-security", label: "Mobile Patrol" },
//   ]
// }

// // --- Components ---

// /**
//  * Reusable Logo Component
//  */
// const ProforceLogo = ({ isCompact = false }: { isCompact?: boolean }) => (
//   <div className="flex items-center gap-2 md:gap-3 transition-all duration-300 group">
//     {/* Optimized Image Logo */}
//     <div 
//       className={cn(
//         "relative flex-shrink-0 transition-all duration-300 ease-out",
//         // Sizes: Mobile w-14 / Desktop w-20
//         isCompact ? "w-10 h-10" : "w-14 h-14 md:w-20 md:h-20" 
//       )}
//     >
//       <Image
//         src="/logo.png" 
//         alt="ProForce 1 Shield Logo"
//         fill
//         className="object-contain drop-shadow-sm"
//         sizes="(max-width: 768px) 64px, 80px"
//         priority
//       />
//     </div>

//     {/* Brand Typography */}
//     <div className="flex flex-col justify-center">
//       <div className="flex items-baseline leading-none tracking-tighter">
//         <span className={cn(
//           "font-black text-slate-900 uppercase transition-all duration-300",
//           // Text Sizes: Mobile 3xl (slightly smaller to fit width) / Desktop 6xl
//           isCompact ? "text-2xl" : "text-3xl md:text-6xl"
//         )}>
//           PROFORCE
//         </span>
//         <span className={cn(
//           "font-black text-red-700 ml-1 transition-all duration-300",
//           isCompact ? "text-2xl" : "text-3xl md:text-6xl"
//         )}>
//           1
//         </span>
//       </div>
//     </div>
//   </div>
// )

// /**
//  * Top Utility Bar Component
//  */
// const UtilityBar = ({ isVisible }: { isVisible: boolean }) => (
//   <div 
//     className="w-full bg-slate-950 text-white hidden lg:block overflow-hidden transition-all duration-500 ease-in-out will-change-[height,opacity]"
//     style={{ 
//       height: isVisible ? '40px' : '0px', 
//       opacity: isVisible ? 1 : 0 
//     }}
//   >
//     <div className="container mx-auto px-6 h-full flex justify-between items-center text-xs font-bold tracking-widest">
//       <div className="flex items-center gap-4 text-slate-300">
//         <span className="flex items-center gap-2 uppercase">
//           <ShieldCheck size={14} className="text-red-600" /> 
//           Licensed & Insured: {BRAND.contact.license}
//         </span>
//       </div>
//       <div className="flex items-center gap-6">
//         <a 
//           href={`mailto:${BRAND.contact.email}`} 
//           className="flex items-center gap-2 hover:text-red-500 transition-colors uppercase"
//           aria-label="Email us"
//         >
//           <Mail size={14} /> {BRAND.contact.email}
//         </a>
//         <a 
//           href={`tel:${BRAND.contact.phone.replace(/\D/g,'')}`} 
//           className="flex items-center gap-2 hover:text-red-500 transition-colors uppercase"
//           aria-label="Call us"
//         >
//           <Phone size={14} /> {BRAND.contact.phone}
//         </a>
//       </div>
//     </div>
//   </div>
// )

// /**
//  * Mobile Navigation Drawer
//  */
// const MobileMenu = () => (
//   <Sheet>
//     <SheetTrigger asChild>
//       <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open Menu">
//         <Menu className="h-7 w-7 text-slate-900" />
//       </Button>
//     </SheetTrigger>
//     <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0 border-l border-slate-100">
//       <div className="flex flex-col h-full bg-white">
//         <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex justify-center">
//           <ProforceLogo isCompact={false} />
//         </div>
//         <nav className="flex-1 overflow-y-auto p-6 space-y-2">
//           {NAVIGATION.primary.map((item) => (
//             <Link 
//               key={item.label} 
//               href={item.href} 
//               className="group flex items-center justify-between p-3 text-lg font-bold uppercase text-slate-800 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all"
//             >
//               {item.label}
//               <ChevronDown className="h-4 w-4 opacity-0 -rotate-90 group-hover:opacity-100 transition-opacity" />
//             </Link>
//           ))}
//         </nav>
//         <div className="p-6 border-t border-slate-100 bg-slate-50">
//           <Button asChild className="w-full h-14 text-lg bg-red-700 hover:bg-red-800 uppercase tracking-widest font-bold shadow-lg shadow-red-900/10">
//             <Link href="/client-login">
//               <User className="mr-2 h-5 w-5" /> Client Portal
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </SheetContent>
//   </Sheet>
// )

// /**
//  * Desktop Navigation Links
//  */
// const DesktopNav = () => (
//   <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
//     {NAVIGATION.primary.map((item) => (
//       item.isDropdown ? (
//         <DropdownMenu key={item.label}>
//           <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-red-700 transition-colors outline-none group py-2">
//             {item.label} 
//             <ChevronDown size={14} className="text-slate-400 group-hover:text-red-700 transition-colors duration-300 group-data-[state=open]:rotate-180" />
//           </DropdownMenuTrigger>
//           <DropdownMenuContent 
//             className="w-72 p-2 bg-white border-t-[3px] border-t-red-700 shadow-2xl rounded-b-lg mt-2" 
//             align="start"
//           >
//             {NAVIGATION.services.map((s) => (
//               <DropdownMenuItem key={s.href} asChild className="focus:bg-slate-50 focus:text-red-700 cursor-pointer rounded-md">
//                 <Link href={s.href} className="block px-4 py-3 text-sm font-bold text-slate-700 uppercase tracking-wide">
//                   {s.label}
//                 </Link>
//               </DropdownMenuItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       ) : (
//         <Link 
//           key={item.href} 
//           href={item.href}
//           className="text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-red-700 transition-colors relative group py-2"
//         >
//           {item.label}
//           <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-700 transition-all duration-300 ease-out group-hover:w-full"></span>
//         </Link>
//       )
//     ))}
//   </nav>
// )

// /**
//  * Main Header Layout
//  */
// export function Header() {
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY
//       setIsScrolled(scrollPosition > 20)
//     }
//     handleScroll()
//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <>
//       <header 
//         className={cn(
//           "fixed top-0 left-0 w-full z-[100] bg-white font-sans transition-all duration-300 border-b",
//           isScrolled ? "shadow-md border-slate-200" : "shadow-sm border-transparent"
//         )}
//       >
//         <UtilityBar isVisible={!isScrolled} />

//         <div className="w-full bg-white relative z-20">
//           <div className="container mx-auto px-4 lg:px-6">
//             <div className={cn(
//               "flex flex-col items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
//               // Tighter padding on mobile to reduce height
//               isScrolled ? "py-1" : "pt-2 pb-2 lg:pt-2 lg:pb-1"
//             )}>
              
//               {/* Logo Area */}
//               <div className="w-full flex justify-center items-center relative">
                
//                 {/* Logo (Centered) */}
//                 <Link href="/" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1">
//                   <ProforceLogo isCompact={isScrolled} />
//                 </Link>
                
//                 {/* Mobile Menu (Absolute Right) */}
//                 <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:hidden">
//                   <MobileMenu />
//                 </div>

//               </div>

//               {/* Desktop Nav Area */}
//               <div className={cn(
//                 "hidden lg:flex w-full items-center justify-center transition-all duration-500 origin-top",
//                 isScrolled ? "mt-0 pt-0 scale-95" : "-mt-2 pt-0" 
//               )}>
//                   <DesktopNav />
//                   <div className="ml-10">
//                     <Button asChild size={isScrolled ? "sm" : "lg"} className={cn(
//                         "bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-widest rounded-none shadow-md transition-all flex items-center gap-2",
//                         isScrolled ? "px-6 h-10 text-xs" : "px-8 h-12 text-sm"
//                     )}>
//                       <Link href="/client-login">
//                         <User className="w-4 h-4" />
//                         Client Portal
//                       </Link>
//                     </Button>
//                   </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </header>
      
//       {/* SPACER FIX: 
//         This div prevents content from hiding behind the fixed header.
//         - Mobile Unscrolled: h-[85px] (Matches small logo + padding)
//         - Desktop Unscrolled: h-[180px] (Matches large logo + nav + utility bar)
//         - Scrolled: Shrinks to match compact header
//       */}
//       <div 
//         className={cn(
//           "transition-all duration-300",
//           isScrolled 
//             ? "h-[60px] lg:h-[110px]" 
//             : "h-[85px] lg:h-[180px]"
//         )}
//       />
//     </>
//   )
// }

"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail, ChevronDown, User, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// --- Constants & Config ---
const BRAND = {
  name: "ProForce 1 Protection Services",
  colors: {
    red: "#B91C1C",
    dark: "#020617",
    charcoal: "#1e293b",
  },
  contact: {
    email: "info@proforce1protection.com",
    phone: "(800) 779-7691",
    license: "PPO #120098"
  }
}

const NAVIGATION = {
  primary: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services", isDropdown: true },
    { href: "/gallery", label: "Gallery" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services/armed-security", label: "Armed Security" },
    { href: "/services/unarmed-security", label: "Unarmed Guard" },
    { href: "/services/construction-security", label: "Construction Security" },
    { href: "/services/event-security", label: "Event Security" },
    { href: "/services/fire-watch-security", label: "Fire Watch" },
    { href: "/services/hospital-security", label: "Hospital Security" },
    { href: "/services/mobile-patrol-security", label: "Mobile Patrol" },
  ]
}

// --- Components ---

const ProforceLogo = ({ isCompact = false }: { isCompact?: boolean }) => (
  <div className="flex items-center gap-2 md:gap-3 transition-all duration-300 group">
    {/* Optimized Image Logo */}
    <div 
      className={cn(
        "relative flex-shrink-0 transition-all duration-300 ease-out",
        isCompact ? "w-8 h-8 md:w-10 md:h-10" : "w-10 h-10 md:w-20 md:h-20" 
      )}
    >
      <Image
        src="/logo.png" 
        alt="ProForce 1 Shield Logo"
        fill
        className="object-contain drop-shadow-sm"
        sizes="(max-width: 768px) 64px, 80px"
        priority
      />
    </div>

    {/* Brand Typography */}
    <div className="flex flex-col justify-center">
      <div className="flex items-baseline leading-none tracking-tighter">
        <span className={cn(
          "font-black text-slate-900 uppercase transition-all duration-300",
          isCompact ? "text-lg md:text-2xl" : "text-xl md:text-6xl"
        )}>
          PROFORCE
        </span>
        <span className={cn(
          "font-black text-red-700 ml-1 transition-all duration-300",
          isCompact ? "text-lg md:text-2xl" : "text-xl md:text-6xl"
        )}>
          1
        </span>
      </div>
    </div>
  </div>
)

const UtilityBar = ({ isVisible }: { isVisible: boolean }) => (
  <div 
    className="w-full bg-slate-950 text-white hidden lg:block overflow-hidden transition-all duration-500 ease-in-out will-change-[height,opacity]"
    style={{ 
      height: isVisible ? '40px' : '0px', 
      opacity: isVisible ? 1 : 0 
    }}
  >
    <div className="container mx-auto px-6 h-full flex justify-between items-center text-xs font-bold tracking-widest">
      <div className="flex items-center gap-4 text-slate-300">
        <span className="flex items-center gap-2 uppercase">
          <ShieldCheck size={14} className="text-red-600" /> 
          Licensed & Insured: {BRAND.contact.license}
        </span>
      </div>
      <div className="flex items-center gap-6">
        <a 
          href={`mailto:${BRAND.contact.email}`} 
          className="flex items-center gap-2 hover:text-red-500 transition-colors uppercase"
          aria-label="Email us"
        >
          <Mail size={14} /> {BRAND.contact.email}
        </a>
        <a 
          href={`tel:${BRAND.contact.phone.replace(/\D/g,'')}`} 
          className="flex items-center gap-2 hover:text-red-500 transition-colors uppercase"
          aria-label="Call us"
        >
          <Phone size={14} /> {BRAND.contact.phone}
        </a>
      </div>
    </div>
  </div>
)

/**
 * Mobile Navigation Drawer
 */
const MobileMenu = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden hover:bg-slate-100/50" aria-label="Open Menu">
          <Menu className="h-7 w-7 text-slate-900" />
        </Button>
      </SheetTrigger>
      
      <SheetContent 
        side="right" 
        className="w-full sm:w-[400px] p-0 border-l border-slate-100 overflow-y-auto z-[100]"
      >
        <div className="flex flex-col min-h-full bg-white pt-24">
          <div className="sr-only">
            <SheetTitle>Mobile Navigation</SheetTitle>
            <SheetDescription>Main website navigation menu</SheetDescription>
          </div>

          <nav className="flex-1 p-6 space-y-2">
            {NAVIGATION.primary.map((item) => (
              <div key={item.label}>
                {item.isDropdown ? (
                  <div className="space-y-2">
                    <button 
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between p-3 text-lg font-bold uppercase text-slate-800 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all"
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "h-5 w-5 transition-transform duration-300",
                        isServicesOpen ? "rotate-180 text-red-700" : ""
                      )} />
                    </button>
                    
                    <div className={cn(
                      "overflow-hidden transition-all duration-300 pl-4 space-y-1 border-l-2 border-red-100 ml-4",
                      isServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}>
                      {NAVIGATION.services.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block p-3 text-sm font-semibold text-slate-600 hover:text-red-700 hover:bg-slate-50 rounded-md uppercase"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    className="group flex items-center justify-between p-3 text-lg font-bold uppercase text-slate-800 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="p-6 border-t border-slate-100 bg-slate-50 mt-auto pb-10">
            <Button asChild className="w-full h-14 text-lg bg-red-700 hover:bg-red-800 uppercase tracking-widest font-bold shadow-lg shadow-red-900/10">
              <Link href="/client-login">
                <User className="mr-2 h-5 w-5" /> Client Portal
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

const DesktopNav = () => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);

  return (
    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
      {NAVIGATION.primary.map((item) => (
        item.isDropdown ? (
          <div 
            key={item.label}
            className="relative"
            onMouseEnter={() => setIsServicesHovered(true)}
            onMouseLeave={() => setIsServicesHovered(false)}
          >
            <DropdownMenu open={isServicesHovered} onOpenChange={setIsServicesHovered}>
              <DropdownMenuTrigger className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-red-700 transition-colors outline-none group py-4">
                {item.label} 
                <ChevronDown size={14} className={cn(
                  "text-slate-400 group-hover:text-red-700 transition-transform duration-300",
                  isServicesHovered ? "rotate-180" : ""
                )} />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-72 p-2 bg-white border-t-[3px] border-t-red-700 shadow-2xl rounded-b-lg -mt-1 z-[120]" 
                align="start"
                onCloseAutoFocus={(e) => e.preventDefault()}
              >
                {NAVIGATION.services.map((s) => (
                  <DropdownMenuItem key={s.href} asChild className="focus:bg-slate-50 focus:text-red-700 cursor-pointer rounded-md">
                    <Link href={s.href} className="block px-4 py-3 text-sm font-bold text-slate-700 uppercase tracking-wide">
                      {s.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Link 
            key={item.href} 
            href={item.href}
            className="text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-red-700 transition-colors relative group py-2"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-700 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
        )
      ))}
    </nav>
  )
}

/**
 * Main Header Layout
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-[110] font-sans transition-all duration-300",
          // UPDATED: Added backdrop-blur and slight transparency for modern feel
          // Added border-b only when scrolled to create separation
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200" 
            : "bg-white shadow-sm border-transparent"
        )}
      >
        <UtilityBar isVisible={!isScrolled} />

        <div className="w-full relative z-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className={cn(
              "flex flex-col items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
              // UPDATED: Reduced padding for tighter fit
              isScrolled ? "py-2" : "py-2 lg:pt-2 lg:pb-1"
            )}>
              
              {/* Header Grid */}
              <div className="w-full flex justify-center lg:justify-center items-center relative min-h-[50px] lg:min-h-[auto]">
                
                {/* Logo (Centered) */}
                <Link href="/" className="inline-block outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg p-1 relative z-30">
                  <ProforceLogo isCompact={isScrolled} />
                </Link>
                
                {/* Mobile Menu (Absolute Right) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:hidden z-30">
                  <MobileMenu />
                </div>

              </div>

              {/* Desktop Nav Area */}
              <div className={cn(
                "hidden lg:flex w-full items-center justify-center transition-all duration-500 origin-top",
                isScrolled ? "mt-0 pt-0 scale-95" : "-mt-2 pt-0" 
              )}>
                  <DesktopNav />
                  <div className="ml-10">
                    <Button asChild size={isScrolled ? "sm" : "lg"} className={cn(
                        "bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-widest rounded-none shadow-md transition-all flex items-center gap-2",
                        isScrolled ? "px-6 h-10 text-xs" : "px-8 h-12 text-sm"
                    )}>
                      <Link href="/client-login">
                        <User className="w-4 h-4" />
                        Client Portal
                      </Link>
                    </Button>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </header>
      
      {/* UPDATED SPACER:
        - Drastically reduced mobile height to eliminate gap.
        - Calculated to exactly match the header's collapsed height.
      */}
      <div 
        className={cn(
          "transition-all duration-300",
          isScrolled 
            ? "h-[65px] lg:h-[110px]" // Small spacer when scrolled
            : "h-[65px] lg:h-[180px]" // Larger on desktop initial, small on mobile
        )}
      />
    </>
  )
}