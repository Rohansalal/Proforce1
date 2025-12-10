// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useState } from "react"
// import { Menu, Phone, Mail, MapPin, ChevronDown, Facebook, Twitter, Instagram } from "lucide-react"
// import { Button } from "../ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
// import { cn } from "@/lib/utils"

// // Basic nav config so links are centralized
// const services = [
//   { href: "/services/armed-security", label: "Armed Security" },
//   { href: "/services/unarmed-guard", label: "Unarmed Guard Orange County" },
//   { href: "/services/construction-security", label: "Construction Security Orange County" },
//   { href: "/services/event-security", label: "Event Security Orange County" },
//   { href: "/services/specialized-fire-watch", label: "Specialized Fire Watch Orange County" },
//   { href: "/services/security-guard", label: "Security Guard Orange County" },
//   { href: "/services/patrol-services", label: "Patrol Services Orange County" },
// ]

// const primaryNav = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About Us" },
//   { href: "/services", label: "ProForce Services", isServices: true },
//   { href: "/gallery", label: "Gallery" },
//   { href: "/careers", label: "Careers" },
//   { href: "/blog", label: "Blog" },
//   { href: "/contact", label: "Contact Us" },
//   { href: "/client-login", label: "Client Login" },
// ]

// export function Header() {
//   const [open, setOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b">
//       {/* Top info bar - matches the reference design */}
//       <div className="hidden md:flex items-center justify-between text-sm px-4 lg:px-8 py-3 bg-gray-900 text-white">
//         <div className="flex items-center gap-6">
//           <span className="inline-flex items-center gap-2">
//             <Mail size={14} aria-hidden />
//             <span className="text-xs">Email: INFO@PROFORCEIPROTECTION.COM</span>
//           </span>
//           <span className="inline-flex items-center gap-2">
//             <MapPin size={14} aria-hidden />
//             <span className="text-xs">Our Location: Anaheim, CA, US 92802</span>
//           </span>
//         </div>
//         <div className="flex items-center gap-4">
//           <span className="text-xs">Follow us:</span>
//           <div className="flex items-center gap-2">
//             <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-gray-800">
//               <Facebook size={14} />
//             </Button>
//             <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-gray-800">
//               <Twitter size={14} />
//             </Button>
//             <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-gray-800">
//               <Instagram size={14} />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Main nav */}
//       <div className="px-4 lg:px-8 py-4 bg-blue">
//         <div className="flex items-center justify-between">
//           {/* Logo section with image */}
//           <Link href="/" className="flex items-center gap-5">
//             <div className="flex items-center">
//               <Image
//                 src="/ProforceLogo.png" // Make sure the logo file is in the public folder
//                 alt="ProForce1 Protection Services"
//                 width={180} // Adjust based on your logo dimensions
//                 height={90} // Adjust based on your logo dimensions
//                 className="h-18 w-auto" // This will maintain aspect ratio
//                 priority // Important for above-the-fold images
//               />
//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
//             {primaryNav.map((item) =>
//               item.isServices ? (
//                 <DropdownMenu key={item.label}>
//                   <DropdownMenuTrigger
//                     className={cn("inline-flex items-center gap-1 font-medium text-gray-900 hover:text-orange-600 focus:outline-none text-sm")}
//                   >
//                     {item.label} <ChevronDown size={16} aria-hidden />
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="start" className="w-80">
//                     {services.map((s) => (
//                       <DropdownMenuItem key={s.href} asChild>
//                         <Link href={s.href} className="text-sm">{s.label}</Link>
//                       </DropdownMenuItem>
//                     ))}
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               ) : (
//                 <Link 
//                   key={item.href} 
//                   href={item.href} 
//                   className="font-medium text-gray-900 hover:text-orange-600 text-sm"
//                 >
//                   {item.label}
//                 </Link>
//               ),
//             )}
//           </nav>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <Sheet open={open} onOpenChange={setOpen}>
//               <SheetTrigger asChild>
//                 <Button variant="outline" size="icon" aria-label="Open menu" className="border-gray-300">
//                   <Menu />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[90vw] sm:w-[400px]">
//                 <SheetHeader>
//                   <SheetTitle className="text-left">
//                     <div className="flex items-center">
//                       <Image
//                         src="/proforce1-logo.png"
//                         alt="ProForce1 Protection Services"
//                         width={150}
//                         height={50}
//                         className="h-10 w-auto"
//                       />
//                     </div>
//                   </SheetTitle>
//                 </SheetHeader>
//                 <div className="mt-8 grid gap-6">
//                   {primaryNav.map((item) =>
//                     item.isServices ? (
//                       <div key={item.label} className="grid gap-3">
//                         <div className="text-sm font-semibold text-gray-900 border-b pb-2">{item.label}</div>
//                         <div className="grid gap-3 pl-4">
//                           {services.map((s) => (
//                             <Link
//                               key={s.href}
//                               href={s.href}
//                               onClick={() => setOpen(false)}
//                               className="text-sm text-gray-600 hover:text-gray-900"
//                             >
//                               {s.label}
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     ) : (
//                       <Link
//                         key={item.href}
//                         href={item.href}
//                         onClick={() => setOpen(false)}
//                         className="text-sm font-medium text-gray-900 hover:text-orange-600 border-b pb-2"
//                       >
//                         {item.label}
//                       </Link>
//                     ),
//                   )}
                  
//                   {/* Mobile contact info */}
//                   <div className="pt-4 border-t">
//                     <div className="space-y-3 text-sm">
//                       <div className="flex items-center gap-2 text-gray-600">
//                         <Mail size={14} />
//                         <span>INFO@PROFORCEIPROTECTION.COM</span>
//                       </div>
//                       <div className="flex items-center gap-2 text-gray-600">
//                         <MapPin size={14} />
//                         <span>Anaheim, CA, US 92802</span>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center gap-4 mt-4">
//                       <span className="text-sm text-gray-600">Follow us:</span>
//                       <div className="flex items-center gap-2">
//                         <Facebook size={16} className="text-gray-600" />
//                         <Twitter size={16} className="text-gray-600" />
//                         <Instagram size={16} className="text-gray-600" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { Menu, Phone, Mail, MapPin, ChevronDown, Facebook, Twitter, Instagram, X, Shield } from "lucide-react"
// import { Button } from "../ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
// import { cn } from "@/lib/utils"

// // Basic nav config so links are centralized
// const services = [
//   { href: "/services/armed-security", label: "Armed Security" },
//   { href: "/services/unarmed-guard", label: "Unarmed Guard Orange County" },
//   { href: "/services/construction-security", label: "Construction Security Orange County" },
//   { href: "/services/event-security", label: "Event Security Orange County" },
//   { href: "/services/specialized-fire-watch", label: "Specialized Fire Watch Orange County" },
//   { href: "/services/security-guard", label: "Security Guard Orange County" },
//   { href: "/services/patrol-services", label: "Patrol Services Orange County" },
// ]

// const primaryNav = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About Us" },
//   { href: "/services", label: "ProForce Services", isServices: true },
//   { href: "/gallery", label: "Gallery" },
//   { href: "/careers", label: "Careers" },
//   { href: "/blog", label: "Blog" },
//   { href: "/contact", label: "Contact Us" },
// ]

// export function Header() {
//   const [open, setOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       {/* Top info bar - matches the reference design */}
//       <div className={`hidden md:flex items-center justify-between text-sm px-4 lg:px-8 py-3 transition-all duration-500 ${
//         scrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-gray-900'
//       } text-white`}>
//         <div className="flex items-center gap-6">
//           <span className="inline-flex items-center gap-2">
//             <Mail size={14} aria-hidden />
//             <span className="text-xs">Email: INFO@PROFORCEIPROTECTION.COM</span>
//           </span>
//           <span className="inline-flex items-center gap-2">
//             <MapPin size={14} aria-hidden />
//             <span className="text-xs">Our Location: Anaheim, CA, US 92802</span>
//           </span>
//         </div>
//         <div className="flex items-center gap-4">
//           <span className="text-xs">Follow us:</span>
//           <div className="flex items-center gap-2">
//             <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-gray-800">
//               <Facebook size={14} />
//             </Button>
//             <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-gray-800">
//               <Twitter size={14} />
//             </Button>
//             <Button variant="ghost" size="icon" className="h-6 w-6 text-white hover:bg-gray-800">
//               <Instagram size={14} />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-6'
//       }`}>
//         <div className="container mx-auto px-6 flex justify-between items-center">
//           {/* Logo section with image - Enhanced with GuardPro styling */}
//           <Link href="/" className="flex items-center cursor-pointer">

//             <div className="flex items-center gap-2">
//               <Image
//                 src="/ProforceLogo.png"
//                 alt="ProForce1 Protection Services"
//                 width={180}
//                 height={90}
//                 className="h-12 w-auto transition-all duration-300"
//                 priority
//               />

//             </div>
//           </Link>

//           {/* Desktop nav */}
//           <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
//             {primaryNav.map((item) =>
//               item.isServices ? (
//                 <DropdownMenu key={item.label}>
//                   <DropdownMenuTrigger
//                     className={cn(`inline-flex items-center gap-1 font-medium hover:text-red-500 transition-all duration-300 relative group text-sm ${
//                       scrolled ? 'text-gray-600' : 'text-gray-200'
//                     }`)}
//                   >
//                     {item.label} <ChevronDown size={16} aria-hidden />
//                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="start" className="w-80">
//                     {services.map((s) => (
//                       <DropdownMenuItem key={s.href} asChild>
//                         <Link href={s.href} className="text-sm">{s.label}</Link>
//                       </DropdownMenuItem>
//                     ))}
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               ) : (
//                 <Link 
//                   key={item.href} 
//                   href={item.href} 
//                   className={`font-medium hover:text-red-500 transition-all duration-300 relative group text-sm ${
//                     scrolled ? 'text-gray-600' : 'text-gray-200'
//                   }`}
//                 >
//                   {item.label}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
//                 </Link>
//               ),
//             )}
            
//             {/* Client Portal Button - Enhanced with GuardPro styling */}
//             <Button asChild className={`px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-all hover:shadow-lg transform hover:-translate-y-0.5 ${
//               scrolled ? 'bg-gray-900 text-white hover:bg-red-600' : 'bg-white/10 backdrop-blur border border-white/30 text-white hover:bg-white hover:text-gray-900'
//             }`}>
//               <Link href="/client-login">Client Portal</Link>
//             </Button>
//           </nav>

//           {/* Mobile menu button - Enhanced with GuardPro styling */}
//           <button 
//             className="lg:hidden" 
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
//           >
//             {isMobileMenuOpen ? (
//               <X size={28} className={scrolled ? 'text-gray-900' : 'text-white'} />
//             ) : (
//               <Menu size={28} className={scrolled ? 'text-gray-900' : 'text-white'} />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu Sheet - Enhanced styling */}
//         <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//           <SheetContent side="right" className="w-[90vw] sm:w-[400px] bg-white">
//             <SheetHeader>
//               <SheetTitle className="text-left">
//                                   <Image
//                                     src="/ProforceLogo.png"
//                                     alt="ProForce1 Protection Services"
//                                     width={150}
//                                     height={50}
//                                     className="h-10 w-auto"
//                                   />
//               </SheetTitle>
//             </SheetHeader>
//             <div className="mt-8 grid gap-6">
//               {primaryNav.map((item) =>
//                 item.isServices ? (
//                   <div key={item.label} className="grid gap-3">
//                     <div className="text-sm font-semibold text-gray-900 border-b pb-2 flex items-center justify-between">
//                       {item.label}
//                       <ChevronDown size={16} />
//                     </div>
//                     <div className="grid gap-3 pl-4">
//                       {services.map((s) => (
//                         <Link
//                           key={s.href}
//                           href={s.href}
//                           onClick={() => setIsMobileMenuOpen(false)}
//                           className="text-sm text-gray-600 hover:text-red-600 hover:pl-2 transition-all duration-300"
//                         >
//                           {s.label}
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="text-sm font-medium text-gray-900 hover:text-red-600 border-b pb-2 hover:border-red-600 transition-colors duration-300"
//                   >
//                     {item.label}
//                   </Link>
//                 ),
//               )}
              
//               {/* Mobile Client Portal Button */}
//               <Button 
//                 asChild
//                 className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 <Link href="/client-login">Client Portal</Link>
//               </Button>
              
//               {/* Mobile contact info */}
//               <div className="pt-6 border-t">
//                 <div className="space-y-3 text-sm">
//                   <div className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
//                     <Phone size={14} />
//                     <Link href="tel:+17145551234" className="hover:underline">
//                       (714) 555-1234
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors">
//                     <Mail size={14} />
//                     <Link href="mailto:INFO@PROFORCEIPROTECTION.COM" className="hover:underline">
//                       INFO@PROFORCEIPROTECTION.COM
//                     </Link>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <MapPin size={14} />
//                     <span>Anaheim, CA, US 92802</span>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center gap-4 mt-6">
//                   <span className="text-sm text-gray-600">Follow us:</span>
//                   <div className="flex items-center gap-3">
//                     <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
//                       <Facebook size={16} className="text-gray-600" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
//                       <Twitter size={16} className="text-gray-600" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-gray-100">
//                       <Instagram size={16} className="text-gray-600" />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//       </nav>
//     </>
//   )
// }

// export default Header
// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useState, useEffect } from "react"
// import { Menu, Phone, Mail, MapPin, ChevronDown, Facebook, Twitter, Instagram, X, ShieldCheck } from "lucide-react"
// import { Button } from "../ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
// import { cn } from "@/lib/utils"

// // Data Configuration
// const services = [
//   { href: "/services/armed-security", label: "Armed Security" },
//   { href: "/services/unarmed-guard-orange-county", label: "Unarmed Guard" },
//   { href: "/services/construction-security-orange-county", label: "Construction Security" },
//   { href: "/services/event-security", label: "Event Security" },
//   { href: "/services/fire-watch-services", label: "Fire Watch Services" },
//   { href: "/services/hospital-security", label: "Hospital Security" },
//   { href: "/services/mobile-patrol", label: "Mobile Patrol" },
// ]

// const primaryNav = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About Us" },
//   { href: "/services", label: "Services", isServices: true },
//   { href: "/gallery", label: "Gallery" },
//   { href: "/careers", label: "Careers" },
//   { href: "/contact", label: "Contact" },
// ]

// export function Header() {
//   const [scrolled, setScrolled] = useState(false)
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   // Handle scroll effect with a bit of throttle logic for performance
//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 20
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled)
//       }
//     }
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [scrolled])

//   return (
//     <>
//       <header className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
//         scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
//       )}>
        
//         {/* TOP BAR: Contact Info - Hides on Scroll */}
//         <div className={cn(
//           "container mx-auto px-4 md:px-8 border-b border-white/10 pb-3 mb-3 transition-all duration-300 overflow-hidden",
//           scrolled ? "h-0 opacity-0 mb-0 pb-0" : "h-auto opacity-100"
//         )}>
//           <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-medium text-white/90">
//             <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
//               <a href="mailto:INFO@PROFORCEIPROTECTION.COM" className="flex items-center gap-2 hover:text-red-500 transition-colors">
//                 <Mail size={14} className="text-red-500" />
//                 <span>INFO@PROFORCEIPROTECTION.COM</span>
//               </a>
//               <div className="hidden md:flex items-center gap-2">
//                 <MapPin size={14} className="text-red-500" />
//                 <span>Anaheim, CA, US 92802</span>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-4 mt-2 md:mt-0">
//               <div className="flex items-center gap-3">
//                 <Link href="#" className="hover:text-red-500 transition-colors"><Facebook size={15} /></Link>
//                 <Link href="#" className="hover:text-red-500 transition-colors"><Twitter size={15} /></Link>
//                 <Link href="#" className="hover:text-red-500 transition-colors"><Instagram size={15} /></Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* MAIN NAV BAR */}
//         <div className="container mx-auto px-4 md:px-8">
//           <div className="flex items-center justify-between">
            
//             {/* Logo Section */}
//             <Link href="/" className="relative z-10 flex items-center gap-2 group">
//                {/* TIP: If your logo is dark text only, you might need a white version for the transparent header 
//                  and a dark version for the scrolled header. For now, I'm assuming the image works on both or has a background.
//                */}
//               <div className={cn("transition-transform duration-300", scrolled ? "scale-90" : "scale-100")}>
//                 <Image
//                   src="/ProforceLogo.png"
//                   alt="ProForce1 Protection Services"
//                   width={160}
//                   height={80}
//                   className="h-10 md:h-12 w-auto object-contain"
//                   priority
//                 />
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center gap-1">
//               {primaryNav.map((item) => (
//                 item.isServices ? (
//                   <DropdownMenu key={item.label}>
//                     <DropdownMenuTrigger className={cn(
//                       "flex items-center gap-1 px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-md transition-colors focus:outline-none",
//                       scrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
//                     )}>
//                       {item.label} <ChevronDown size={14} />
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="center" className="w-64 p-2 bg-white border-slate-100 shadow-xl rounded-xl animate-in fade-in-0 zoom-in-95">
//                       {services.map((s) => (
//                         <DropdownMenuItem key={s.href} asChild className="focus:bg-red-50 focus:text-red-600 cursor-pointer rounded-lg p-2.5">
//                           <Link href={s.href} className="text-sm font-medium text-slate-600">
//                             {s.label}
//                           </Link>
//                         </DropdownMenuItem>
//                       ))}
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ) : (
//                   <Link 
//                     key={item.href} 
//                     href={item.href}
//                     className={cn(
//                       "px-4 py-2 text-sm font-semibold uppercase tracking-wide rounded-md transition-colors",
//                       scrolled ? "text-slate-800 hover:text-red-600 hover:bg-slate-100" : "text-white hover:bg-white/10 hover:text-white"
//                     )}
//                   >
//                     {item.label}
//                   </Link>
//                 )
//               ))}
//             </nav>

//             {/* Action Buttons (Desktop) */}
//             <div className="hidden lg:flex items-center gap-4">
//               <div className={cn("hidden xl:flex items-center gap-2 text-sm font-bold", scrolled ? "text-slate-900" : "text-white")}>
//                 <div className="bg-red-600 p-1.5 rounded-full text-white">
//                     <Phone size={14} />
//                 </div>
//                 <span>(800) 123-4567</span>
//               </div>
//               <Button 
//                 asChild 
//                 className={cn(
//                   "font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-lg",
//                   scrolled 
//                     ? "bg-red-600 hover:bg-red-700 text-white" 
//                     : "bg-white text-slate-900 hover:bg-slate-100"
//                 )}
//               >
//                 <Link href="/client-login">
//                   Client Portal
//                 </Link>
//               </Button>
//             </div>

//             {/* Mobile Menu Trigger */}
//             <div className="lg:hidden flex items-center gap-4">
//                {/* Mobile Phone Icon */}
//                <a href="tel:8001234567" className={cn("p-2 rounded-full", scrolled ? "text-slate-900 bg-slate-100" : "text-white bg-white/10")}>
//                   <Phone size={18} />
//                </a>

//               <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
//                 <SheetTrigger asChild>
//                   <Button variant="ghost" size="icon" className={cn(scrolled ? "text-slate-900" : "text-white")}>
//                     <Menu size={28} />
//                     <span className="sr-only">Toggle menu</span>
//                   </Button>
//                 </SheetTrigger>
//                 <SheetContent side="right" className="w-[85vw] sm:w-[400px] border-l-0 p-0">
//                   <SheetHeader className="p-6 border-b bg-slate-50">
//                     <SheetTitle>
//                        <Image
//                         src="/ProforceLogo.png"
//                         alt="ProForce1"
//                         width={140}
//                         height={60}
//                         className="h-10 w-auto"
//                       />
//                     </SheetTitle>
//                   </SheetHeader>
                  
//                   <div className="flex flex-col h-full overflow-y-auto bg-white pb-20">
//                     <nav className="flex-1 px-6 py-6 space-y-2">
//                       {primaryNav.map((item) => (
//                         item.isServices ? (
//                           <div key={item.label} className="space-y-3 pb-4">
//                             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</h4>
//                             <div className="grid gap-2 pl-2 border-l-2 border-slate-100">
//                               {services.map((s) => (
//                                 <Link
//                                   key={s.href}
//                                   href={s.href}
//                                   onClick={() => setIsMobileMenuOpen(false)}
//                                   className="block py-2 text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
//                                 >
//                                   {s.label}
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                         ) : (
//                           <Link
//                             key={item.label}
//                             href={item.href}
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="block py-3 text-lg font-semibold text-slate-900 border-b border-slate-100 hover:text-red-600 transition-colors"
//                           >
//                             {item.label}
//                           </Link>
//                         )
//                       ))}
//                     </nav>

//                     <div className="p-6 bg-slate-50 mt-auto space-y-4">
//                       <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white font-bold h-12">
//                         <Link href="/client-login">Access Client Portal</Link>
//                       </Button>
//                       <div className="text-center space-y-2 text-sm text-slate-500">
//                         <p className="flex items-center justify-center gap-2">
//                           <Mail size={14} /> info@proforce1protection.com
//                         </p>
//                         <p className="flex items-center justify-center gap-2">
//                            <MapPin size={14} /> Anaheim, CA 92802
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </SheetContent>
//               </Sheet>
//             </div>

//           </div>
//         </div>
//       </header>
      
//       {/* This is a Hero Section Placeholder.
//         The header is `fixed`, so your hero section image needs to be underneath it.
//         We do NOT use a spacer div here because we want the header transparent OVER the hero image.
//       */}
//     </>
//   )
// }

// export default Header
"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, Phone, Mail, ChevronDown, User, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

// --- Brand Colors ---
const PROFORCE_RED = "#B91C1C" 
const PROFORCE_DARK = "#020617" 

// --- Data ---
const services = [
  { href: "/services/armed-security", label: "Armed Security" },
  { href: "/services/unarmed-guard", label: "Unarmed Guard" },
  { href: "/services/construction-security-orange-county", label: "Construction Security" },
  { href: "/services/event-security-services", label: "Event Security" },
  { href: "/services/fire-watch-services", label: "Fire Watch" },
  { href: "/services/hospital-security", label: "Hospital Security" },
  { href: "/services/mobile-patrol", label: "Mobile Patrol" },
]

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services", isServices: true },
  { href: "/gallery", label: "Gallery" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const ProforceLogo = ({ width, height, className }: { width: number, height: number, className?: string }) => (
    <Image
      src="/ProforceLogo.png" 
      alt="ProForce 1 Protection Services"
      width={width}
      height={height}
      className={cn("w-auto h-auto object-contain", className)}
      priority
    />
  )

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-200 transition-all duration-300 font-sans",
        isScrolled ? "shadow-xl" : "shadow-sm"
      )}>
        
        {/* --- 1. TOP UTILITY BAR --- */}
        <div 
          className="w-full text-white hidden lg:block overflow-hidden transition-all duration-300 ease-in-out"
          style={{ 
            backgroundColor: PROFORCE_DARK,
            height: isScrolled ? '0px' : '40px', // Slightly taller for bigger text
            opacity: isScrolled ? 0 : 1
          }}
        >
          {/* CHANGED: Increased text size to text-xs (12px) */}
          <div className="container mx-auto px-6 h-full flex justify-between items-center text-xs font-bold tracking-widest">
            <div className="flex items-center gap-4">
               <span className="flex items-center gap-2 uppercase">
                 {/* CHANGED: Icon size to 14 */}
                 <ShieldCheck size={14} style={{ color: PROFORCE_RED }} /> 
                 LICENSED & INSURED: PPO #120098
               </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:info@proforce1protection.com" className="flex items-center gap-2 hover:text-red-400 transition-colors uppercase">
                {/* CHANGED: Icon size to 14 */}
                <Mail size={14} /> info@proforce1protection.com
              </a>
              <a href="tel:8001234567" className="flex items-center gap-2 hover:text-red-400 transition-colors uppercase">
                {/* CHANGED: Icon size to 14 */}
                <Phone size={14} /> (800) 123-4567
              </a>
              <Link href="/client-login" className="flex items-center gap-1 hover:text-red-400">
                {/* CHANGED: Icon size to 14 */}
                <User size={14} /> CLIENT PORTAL
              </Link>
            </div>
          </div>
        </div>

        {/* --- 2. LOGO CONTAINER --- */}
        <div className={cn(
          "w-full flex justify-center items-center transition-all duration-300 bg-white relative z-20",
          isScrolled ? "py-2" : "pt-5 pb-3" // Adjusted padding for balance
        )}>
           <Link href="/" className="transform transition-transform duration-300 hover:scale-105">
             <div className={cn("transition-all duration-300", isScrolled ? "w-36" : "w-60")}>
                <ProforceLogo width={240} height={80} />
             </div>
           </Link>

           {/* Mobile Menu Trigger */}
           <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2">
             <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu size={32} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85vw] p-0">
                  <div className="flex flex-col h-full bg-white">
                    <div className="p-6 border-b bg-slate-50 flex justify-center">
                       <ProforceLogo width={180} height={50} />
                    </div>
                    <nav className="p-6 space-y-4">
                       {primaryNav.map((item) => (
                         <Link key={item.label} href={item.href} className="block text-xl font-bold uppercase text-slate-900 border-b border-slate-100 pb-3">
                           {item.label}
                         </Link>
                       ))}
                       <Button asChild className="w-full mt-6 h-12 text-lg bg-red-700 hover:bg-red-800 uppercase tracking-widest font-bold">
                         <Link href="/contact">Request Quote</Link>
                       </Button>
                    </nav>
                  </div>
                </SheetContent>
             </Sheet>
           </div>
        </div>

        {/* --- 3. NAVBAR CONTAINER --- */}
        <div className={cn(
          "hidden lg:block w-full bg-white transition-all duration-300 border-t border-slate-50", 
          isScrolled ? "py-2" : "pb-5 pt-2"
        )}>
          <div className="container mx-auto flex justify-center items-center gap-10">
             {primaryNav.map((item) => (
                item.isServices ? (
                  <DropdownMenu key={item.label}>
                    {/* CHANGED: Increased text size to text-sm (14px) and icon size */}
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-bold uppercase tracking-[0.1em] text-slate-900 hover:text-red-700 transition-colors outline-none group">
                      {item.label} 
                      <ChevronDown size={14} className="opacity-40 group-hover:text-red-700 transition-colors" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-64 p-2 bg-white border-t-2 shadow-xl mt-4" style={{ borderColor: PROFORCE_RED }}>
                      {services.map((s) => (
                        <DropdownMenuItem key={s.href} asChild className="focus:bg-slate-50 focus:text-red-700 cursor-pointer p-3">
                          <Link href={s.href} className="text-sm font-bold text-slate-700">
                            {s.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  // CHANGED: Increased text size to text-sm (14px)
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className="text-sm font-bold uppercase tracking-[0.1em] text-slate-900 hover:text-red-700 transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-700 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )
             ))}

             {/* CTA Button in Nav Line */}
             <div className="pl-8 border-l border-slate-200">
               <Button 
                 asChild 
                 size="lg" // Larger button
                 className="font-bold uppercase tracking-widest rounded-none bg-red-700 hover:bg-red-800 text-white px-8 text-sm"
               >
                 <Link href="/contact">
                   Get Quote
                 </Link>
               </Button>
             </div>
          </div>
        </div>

      </header>
      
      {/* Spacer updated for larger header */}
      <div className="h-[140px] lg:h-[180px]" />
    </>
  )
}