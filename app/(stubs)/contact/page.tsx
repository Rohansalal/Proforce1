"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Shield, AlertTriangle, Send } from "lucide-react"
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
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            CONTACT SECURITY COMMAND
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Ready to secure your property? Our security experts are standing by 24/7 for immediate response.
          </p>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="bg-red-600 text-white py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3" />
              <span className="text-lg font-bold">EMERGENCY RESPONSE LINE</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold">(800) 911-SECURE</span>
              <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold">
                CALL NOW
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Headquarters Card */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">SECURITY HEADQUARTERS</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Main Office</h3>
                      <p className="text-gray-600">123 Security Plaza<br />Anaheim, CA 92802</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">24/7 Dispatch Center</h3>
                      <p className="text-gray-600">(800) 123-SECURE<br />(800) 123-7328</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Communications</h3>
                      <p className="text-gray-600">command@proforce1security.com<br />dispatch@proforce1security.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-red-600 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Operations Hours</h3>
                      <p className="text-gray-600">24 Hours / 7 Days Week<br />Emergency Response Ready</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Certifications */}
              <div className="bg-gray-900 text-white p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 mr-3 text-red-400" />
                  <h3 className="text-xl font-bold">SECURITY CERTIFICATIONS</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    State Licensed & Insured
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Background Checked Staff
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Firearm Certified
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    CPR/First Aid Certified
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    BSIS Certified
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Liability Insured
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">RESPONSE TIME GUARANTEE</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Emergency Calls</span>
                    <span className="font-bold text-red-600">15 MINUTES</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600">Security Assessment</span>
                    <span className="font-bold text-red-600">2 HOURS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Quote Delivery</span>
                    <span className="font-bold text-red-600">24 HOURS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-300 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">REQUEST SECURITY ASSESSMENT</h2>
              <p className="text-gray-600 mb-6">Complete the form below and our security team will contact you immediately.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="">Select Security Service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                      Response Urgency *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      required
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    >
                      <option value="standard">Standard (24-48 hours)</option>
                      <option value="urgent">Urgent (Same Day)</option>
                      <option value="emergency">Emergency (Immediate)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Security Requirements & Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Describe your security needs, location details, specific concerns, and any previous security incidents..."
                  />
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mr-2" />
                    <span className="text-sm font-semibold text-yellow-800">SECURITY NOTICE</span>
                  </div>
                  <p className="text-sm text-yellow-700">
                    All information submitted is encrypted and protected. Our security team will contact you within the specified response time. For immediate emergencies, call our 24/7 dispatch line.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-bold"
                >
                  {isSubmitting ? (
                    "PROCESSING REQUEST..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      REQUEST SECURITY ASSESSMENT
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our security assessment process and privacy policy. We protect all client information with the highest security standards.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Service Areas */}
      {/* <section className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">SERVING ALL OF CALIFORNIA</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              "Orange County", "Los Angeles", "San Diego", "Riverside", 
              "San Bernardino", "Ventura", "Santa Barbara", "San Francisco",
              "Sacramento", "San Jose", "Oakland", "Long Beach"
            ].map((area) => (
              <div key={area} className="bg-white p-3 rounded-lg border border-gray-300">
                <span className="text-sm font-medium text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
          
     <ServiceAreasMap />
    </main>
  )
}