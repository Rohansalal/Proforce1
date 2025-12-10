"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Shield, AlertTriangle, Send, CheckCircle2, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceAreasMap } from "@/components/site/service-areas-map"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    urgency: "standard"
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    // Reset form or show success message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const services = [
    "Armed Security Services",
    "Unarmed Security Services",
    "Event Security",
    "Construction Site Security",
    "Fire Watch Services",
    "Mobile Patrol Services",
    "Corporate Security",
    "Emergency Response",
    "Security Consultation"
  ]

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* HEADER SECTION 
        - Added 'pt-40' to push content down below the nav bar.
        - Added background pattern for professional look.
      */}
      <section className="relative bg-slate-900 text-white pt-40 pb-20 overflow-hidden">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/30 rounded-full text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Shield className="w-3 h-3" /> 24/7 Command Center
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            CONTACT <span className="text-red-600">SECURITY COMMAND</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Ready to secure your property? Our security experts are standing by 24/7 for immediate response and strategic planning.
          </p>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <div className="bg-red-700 text-white border-y border-red-800">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-800 rounded-full animate-pulse">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="block font-bold text-lg leading-none">EMERGENCY RESPONSE LINE</span>
                <span className="text-red-100 text-xs uppercase tracking-wider">For immediate threats only</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-black tracking-tight">(800) 911-SECURE</span>
              <Button className="bg-white text-red-700 hover:bg-gray-100 font-bold px-6 shadow-lg">
                CALL NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: Contact Information (4 cols) */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Headquarters Card */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="bg-slate-50 border-b border-gray-200 p-6">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-red-600" />
                        HEADQUARTERS
                    </h2>
                </div>
                
                <div className="p-6 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Main Office</h3>
                      <p className="text-slate-600 leading-relaxed">
                        123 Security Plaza<br />
                        Anaheim, CA 92802
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">24/7 Dispatch Center</h3>
                      <p className="text-slate-600 leading-relaxed">
                        (800) 123-SECURE<br />
                        (800) 123-7328
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email Communications</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        command@proforce1security.com<br />
                        dispatch@proforce1security.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Operations Hours</h3>
                      <p className="text-slate-600 leading-relaxed">
                        24 Hours / 7 Days Week<br />
                        <span className="text-red-600 font-medium text-sm">Emergency Response Ready</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Block */}
              <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldAlert className="w-32 h-32 transform rotate-12" />
                </div>
                
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 relative z-10">
                    <Shield className="w-5 h-5 text-red-500" /> CERTIFICATIONS
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {[
                    "State Licensed & Insured",
                    "Background Checked Staff",
                    "Firearm Certified",
                    "CPR/First Aid Certified",
                    "BSIS Certified",
                    "Liability Insured"
                  ].map((cert, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-8 lg:p-10">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">REQUEST SECURITY ASSESSMENT</h2>
                    <p className="text-slate-500">Complete the form below and our security team will contact you immediately.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                        placeholder="John Smith"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-bold text-slate-700">Service Needed *</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                      >
                        <option value="">Select Security Service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="urgency" className="text-sm font-bold text-slate-700">Response Urgency *</label>
                      <select
                        id="urgency"
                        name="urgency"
                        required
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                      >
                        <option value="standard">Standard (24-48 hours)</option>
                        <option value="urgent">Urgent (Same Day)</option>
                        <option value="emergency">Emergency (Immediate)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">Security Details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                      placeholder="Describe your security needs, location details, specific concerns, and any previous security incidents..."
                    />
                  </div>

                  {/* Security Notice Box */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <div>
                        <h4 className="text-sm font-bold text-amber-800">SECURITY NOTICE</h4>
                        <p className="text-xs text-amber-700 mt-1">
                            All information submitted is encrypted. For immediate life-safety emergencies, please call 911 directly.
                        </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      "PROCESSING REQUEST..."
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" /> REQUEST SECURITY ASSESSMENT
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-xs text-gray-400">
                    By submitting this form, you agree to our privacy policy. Your data is protected by 256-bit SSL encryption.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Area Map Component */}
      <ServiceAreasMap />
      
    </main>
  )
}