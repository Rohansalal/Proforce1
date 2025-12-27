"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, UploadCloud, ChevronRight, Quote, Shield, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceAreasAdvanced } from "@/components/site/service-areas-map"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* --- 1. HERO VIDEO SECTION (Full Screen) --- 
          - h-screen: Forces full viewport height
          - video tag: Plays background loop
          - Overlay: Ensures text readability
      */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          {/* REPLACE THIS SRC WITH YOUR OWN VIDEO FILE */}
          <source 
            src="/contact.mp4" 
            type="video/mp4" 
          />
        </video>

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center gap-8">
          
         {/* Main Title with Unique Styling */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
           The Right Security Move Protects <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-500">
              Your Entire World
            </span>
          </h1>
          {/* CTA Buttons */}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* --- 2. TESTIMONIAL STRIP --- */}
      <section className="bg-white border-b border-slate-100 py-16 px-4 relative z-20 -mt-4 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Quote className="w-16 h-16 text-red-100 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
            "Since their start, ProForce 1 has delivered the highest quality of professional services."
          </h2>
          <div className="flex items-center justify-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <span className="text-slate-900">Daniel Brooks</span>
            <span className="text-red-300">|</span>
            <span>Director of Operations, Major Healthcare Provider</span>
          </div>
        </div>
      </section>

      {/* --- 3. MAIN CONTACT FORM SECTION --- */}
      <section className="py-20 px-4 lg:px-8 max-w-7xl mx-auto bg-slate-50">
        
        <div className="mb-16 max-w-3xl">
          <h3 className="text-red-600 font-bold uppercase tracking-widest mb-3">Partner With Us</h3>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Experience how <span className="text-red-600 underline decoration-red-600/30 underline-offset-4">ProForce 1</span> goes beyond standard protection.
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Through trust, collaboration, and consistent performance, we deliver lasting value that strengthens your operations. With ProForce 1, you&apos;re not just hiring a vendor, you&apos;re gaining a strategic ally.
          </p>
        </div>

        {/* --- FORM CONTAINER (Split Layout) --- */}
        <div className="flex flex-col lg:flex-row shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden bg-white">
          
          {/* LEFT COLUMN: Red Sidebar */}
          <div className="lg:w-1/3 bg-red-700 text-white p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-3xl font-black mb-6 leading-none">National <br />Headquarters</h3>
                <div className="space-y-4 text-red-100">
                  <p className="font-semibold text-xl">U.S. Security Services</p>
                  <p className="opacity-90 leading-relaxed text-lg">
                    1671 W Katella ave suite 106 <br />
                    Anaheim, CA, US 92802
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4 text-white">Contact Direct</h4>
                <div className="space-y-3 text-red-50 text-lg">
                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5" /> (800) 779-7691
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="w-5 h-5" /> info@proforce1protection.com
                  </p>
                </div>
              </div>

              <div className="pt-10 border-t border-red-500/50">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">Operations Center</h4>
                </div>
                <p className="text-3xl font-black text-white tracking-tight">
                  (800) 779-7691
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: White Form Area */}
          <div className="lg:w-2/3 bg-white p-8 lg:p-14">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Business Email *</label>
                  <input required type="email" className="w-full pb-2 border-b-2 border-slate-200 bg-transparent focus:border-red-600 outline-none transition-colors placeholder:text-slate-300" placeholder="name@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Phone Number *</label>
                  <input required type="tel" className="w-full pb-2 border-b-2 border-slate-200 bg-transparent focus:border-red-600 outline-none transition-colors placeholder:text-slate-300" placeholder="(555) 123-4567" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">First Name *</label>
                  <input required type="text" className="w-full pb-2 border-b-2 border-slate-200 bg-transparent focus:border-red-600 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Last Name *</label>
                  <input required type="text" className="w-full pb-2 border-b-2 border-slate-200 bg-transparent focus:border-red-600 outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Property Address</label>
                <input type="text" className="w-full pb-2 border-b-2 border-slate-200 bg-transparent focus:border-red-600 outline-none transition-colors" placeholder="Street, City, Zip Code" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Service Type *</label>
                    <select className="w-full pb-2 border-b-2 border-slate-200 bg-transparent focus:border-red-600 outline-none cursor-pointer text-slate-700">
                    <option>Select Service</option>
                    <option>Armed Security</option>
                    <option>Unarmed Guarding</option>
                    <option>Fire Watch</option>
                    <option>Mobile Patrol</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Duration</label>
                    <select className="w-full pb-2 border-b-2 border-slate-200 bg-transparent focus:border-red-600 outline-none cursor-pointer text-slate-700">
                    <option>Select Duration</option>
                    <option>One-Time Event</option>
                    <option>Short Term</option>
                    <option>Long Term Contract</option>
                    </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">How can we help? *</label>
                <textarea rows={3} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-600 outline-none resize-none" placeholder="Describe your security needs..." />
              </div>

              <div className="pt-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 block">RFP Upload (Optional)</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 hover:border-red-400 transition-all group">
                    <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-red-500 mb-2 transition-colors" />
                    <span className="text-sm text-slate-600 font-medium">Drop file here or click to upload</span>
                </div>
              </div>

              <div className="pt-6">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-red-700 hover:bg-red-800 text-white w-full h-14 text-lg font-bold uppercase tracking-widest shadow-xl transition-all"
                >
                  {isSubmitting ? "Processing..." : "Submit Request"}
                </Button>
              </div>

            </form>
          </div>
        </div>
      </section>

      {/* --- 4. MAP SECTION ---
      <ServiceAreasAdvanced /> */}
      
    </main>
  )
}