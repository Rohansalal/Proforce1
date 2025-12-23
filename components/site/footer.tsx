"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// --- Brand Colors ---
const PROFORCE_RED = "#B91C1C"

// --- Data ---
const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Security Blog" },
  { href: "/careers", label: "Join Our Team" },
  { href: "/contact", label: "Contact Us" },
]

const servicesLinks = [
  { href: "/services/armed", label: "Armed Security" },
  { href: "/services/unarmed", label: "Unarmed Guard" },
  { href: "/services/event", label: "Event Security" },
  { href: "/services/patrol", label: "Mobile Patrol" },
  { href: "/services/construction", label: "Construction Site" },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/proforce1protectionservices/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/Proforce1protection", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/proforce_1", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/proforce1/", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtu.be/p6BQtfCuY5s?si=7FP-mx9tNfdBVeCp", label: "Youtube" },
]

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* =========================================
            TOP SECTION: LOGO (Left) & SOCIALS (Right)
           ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-12 mb-14 gap-10">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
             <Link href="/">
              <Image 
                src="/logo.png" 
                alt="ProForce 1 Protection Services" 
                width={280} 
                height={70} 
                className="w-auto h-14 object-contain brightness-0 invert" 
              />
            </Link>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <Link 
                key={index} 
                href={social.href}
                className="text-slate-400 hover:text-red-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                {/* Increased Icon Size slightly for balance */}
                <social.icon size={28} strokeWidth={1.5} />
              </Link>
            ))}
          </div>
        </div>

        {/* =========================================
            MAIN GRID CONTENT
           ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20">
          
          {/* Col 1: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white">Contact Info</h3>
            <div className="space-y-5 text-base text-slate-400 leading-relaxed">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <p>1671 W Katella ave suite 106<br/>Anaheim, CA, US 92802</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
                <a href="tel:8007797891" className="hover:text-white transition-colors font-medium text-lg">(800) 779-7891</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-red-600 flex-shrink-0" />
                <a href="mailto:info@proforce1protection.com" className="hover:text-white transition-colors uppercase text-sm font-bold tracking-wide">info@proforce1protection.com</a>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-8">Our Services</h3>
            <ul className="space-y-4 text-base text-slate-400">
              {servicesLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-red-500 hover:pl-2 transition-all duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-8">Company</h3>
            <ul className="space-y-4 text-base text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-red-500 hover:pl-2 transition-all duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-red-500 hover:pl-2 transition-all duration-300 inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/term&condition" className="hover:text-red-500 hover:pl-2 transition-all duration-300 inline-block">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="lg:pl-4">
            <h3 className="text-xl font-bold uppercase tracking-wider text-white mb-6">
              Stay Secure
            </h3>
            <p className="text-base text-slate-400 mb-8 leading-relaxed">
              Get expert security tips, case studies, and industry updates delivered directly to your inbox.
            </p>
            <form className="space-y-4">
              <Input 
                type="email" 
                placeholder="Email Address *" 
                className="bg-slate-900 border-slate-800 focus-visible:ring-red-600 text-white placeholder:text-slate-500 h-14 text-base"
              />
              <Button 
                className="w-full h-14 font-bold uppercase tracking-widest hover:bg-red-800 transition-colors shadow-lg text-base"
                style={{ backgroundColor: PROFORCE_RED }}
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* =========================================
            BOTTOM BAR
           ========================================= */}
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} ProForce 1 Protection Services. All Rights Reserved.</p>
          {/* <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900 border border-slate-800">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="font-semibold text-slate-400">Systems Operational 24/7/365</span>
          </div> */}
        </div>

      </div>
    </footer>
  )
}

export default Footer