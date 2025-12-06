// import Link from "next/link"

// const services = [
//   { href: "/services/armed-security", label: "Armed Security" },
//   { href: "/services/construction-security-orange-county", label: "Construction Security OC" },
//   { href: "/services/event-security-orange-county", label: "Event Security OC" },
//   { href: "/services/specialized-fire-watch-orange-county", label: "Specialized Fire Watch OC" },
//   { href: "/services/security-guard-orange-county", label: "Security Guard OC" },
//   { href: "/services/patrol-services-orange-county", label: "Patrol Services OC" },
//   { href: "/services/unarmed-guard-orange-county", label: "Unarmed Guard OC" },
// ]

// export function Footer() {
//   return (
//     <footer className="bg-foreground text-background mt-16" role="contentinfo">
//       <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
//         <div>
//           <div className="flex items-center gap-3">
//             <div className="h-9 w-9 rounded-md bg-primary text-primary-foreground grid place-items-center font-bold">
//               P
//             </div>
//             <div className="font-semibold tracking-wide">ProForce1</div>
//           </div>
//           <p className="mt-4 text-sm/6 text-background/80">
//             Professional, reliable, and cost‑effective security services across Orange County.
//           </p>
//           <p className="mt-4 text-sm/6">Email: info@secureco.com</p>
//           <p className="text-sm/6">Phone: (800) 000-0000</p>
//           <p className="text-sm/6">Location: Orange County, CA</p>
//         </div>

//         <div>
//           <div className="font-semibold mb-3">Quick Links</div>
//           <ul className="grid gap-2 text-sm/6">
//             <li>
//               <Link href="/about" className="hover:underline">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" className="hover:underline">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/careers" className="hover:underline">
//                 Careers
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" className="hover:underline">
//                 Contact
//               </Link>
//             </li>
//             <li>
//               <Link href="/privacy-policy" className="hover:underline">
//                 Privacy Policy
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <div className="font-semibold mb-3">Our Services</div>
//           <ul className="grid gap-2 text-sm/6">
//             {services.map((s) => (
//               <li key={s.href}>
//                 <Link href={s.href} className="hover:underline">
//                   {s.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <div className="font-semibold mb-3">Hours</div>
//           <p className="text-sm/6">24/7 Operations</p>
//           <div className="mt-6">
//             <Link
//               href="tel:8000000000"
//               className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground font-medium"
//             >
//               Call (800) 000‑0000
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="border-t border-background/20">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4 text-xs text-background/80 flex flex-col sm:flex-row items-center justify-between gap-2">
//           <p>© {new Date().getFullYear()} ProForce1. All rights reserved.</p>
//           <p>Licensed • Bonded • Insured</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import Link from "next/link"
import Image from "next/image"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "ProForced Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/contact", label: "Contact Us" },
]

const latestNews = [
  "Top 5 Reasons To Have Security Guard For Your Business",
  "Why should you hire well-trained security guards for schools?",
  "Reasons To Choose Security Guards For Your Event"
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-16" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Contact Section */}
        <div>
          <div className="font-bold text-lg uppercase tracking-wider mb-4">
            "WE PROVIDE THE FASTEST SECURITY SERVICE IN SOUTHERN CALIFORNIA"
          </div>
          <div className="space-y-3 text-sm/6">
            <p className="text-xl font-semibold">(800) 779-7891</p>
            <p className="font-medium">INFO@PROFORCEIPROTECTION.COM</p>
            <p className="text-background/80">
              1871 W Katella ave sufte 106 Ambietin, CA, US 92802
            </p>
            <p className="font-medium mt-4">
              We are available 24/7 - 365.
            </p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <div className="font-semibold text-lg mb-4">Quick Links</div>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-background/80 hover:text-background hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Latest News Section */}
        <div>
          <div className="font-semibold text-lg mb-4">Latest News</div>
          <ul className="space-y-3">
            {latestNews.map((news, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <Link 
                  href="/blog" 
                  className="text-background/80 hover:text-background hover:underline transition-colors"
                >
                  {news}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-background/20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4 text-sm text-background/80 text-center">
          <p>© Copyright 2022 | All Rights Reserved |</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer