"use client"

import { useState } from "react"
import { MapPin, Clock, DollarSign, GraduationCap, Users, Shield, ArrowRight, Search, Filter, Briefcase, CheckCircle2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState("application")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    service: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const departments = [
    "All Departments",
    "Armed Security",
    "Unarmed Security",
    "Event Security",
    "Mobile Patrol",
    "Supervisory",
    "Corporate",
    "Training"
  ]

  const jobOpenings = [
    {
      id: 1,
      title: "Armed Security Officer",
      department: "Armed Security",
      type: "Full-Time",
      location: "Anaheim, CA",
      salary: "$22 - $28/hr",
      experience: "2+ years",
      description: "Join our elite armed security team providing high-level protection services for corporate clients and high-risk facilities.",
      requirements: ["BSIS Firearm Permit", "Security Experience", "Clean Driving Record", "CPR/First Aid Certified"]
    },
    {
      id: 2,
      title: "Event Security Specialist",
      department: "Event Security",
      type: "Part-Time/Event",
      location: "Los Angeles, CA",
      salary: "$18 - $25/hr",
      experience: "1+ years",
      description: "Provide security services for concerts, festivals, and special events throughout Southern California.",
      requirements: ["Crowd Management Training", "Flexible Schedule", "Excellent Communication Skills"]
    },
    {
      id: 3,
      title: "Security Supervisor",
      department: "Supervisory",
      type: "Full-Time",
      location: "Orange County, CA",
      salary: "$65,000 - $80,000/yr",
      experience: "3+ years",
      description: "Lead and manage security teams, conduct training, and ensure operational excellence across multiple sites.",
      requirements: ["BSIS Guard Card", "Supervisory Experience", "Training Certification", "Leadership Skills"]
    },
    {
      id: 4,
      title: "Mobile Patrol Officer",
      department: "Mobile Patrol",
      type: "Full-Time",
      location: "Riverside, CA",
      salary: "$20 - $26/hr",
      experience: "1+ years",
      description: "Conduct mobile patrols of commercial and residential properties, respond to alarms, and provide visible security presence.",
      requirements: ["Clean Driving Record", "Security Experience", "Flexible Schedule"]
    },
    {
      id: 5,
      title: "Corporate Security Manager",
      department: "Corporate",
      type: "Full-Time",
      location: "Irvine, CA",
      salary: "$85,000 - $110,000/yr",
      experience: "5+ years",
      description: "Develop and implement security protocols for corporate clients, manage security programs, and conduct risk assessments.",
      requirements: ["Bachelor's Degree Preferred", "Management Experience", "Security Clearance", "Risk Assessment Skills"]
    },
    {
      id: 6,
      title: "Training Instructor",
      department: "Training",
      type: "Full-Time",
      location: "Anaheim, CA",
      salary: "$60,000 - $75,000/yr",
      experience: "4+ years",
      description: "Train and certify new security officers in firearms, defensive tactics, and security protocols.",
      requirements: ["BSIS Firearms Instructor", "Training Experience", "Excellent Presentation Skills"]
    }
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesDepartment && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* HEADER SECTION 
          - Added pt-40 to clear nav
          - Consistent dark theme
      */}
      <section className="relative bg-slate-900 text-white pt-40 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/30 rounded-full text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Shield className="w-3 h-3" /> Recruiting Elite Personnel
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            JOIN THE <span className="text-red-600">PROFORCE1</span> TEAM
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Build a rewarding career with Southern California's premier security provider. 
            Protect communities while advancing your professional goals.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b sticky top-0 z-20 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex justify-center">
            <button
              onClick={() => setActiveTab("application")}
              className={`py-6 px-8 text-sm md:text-base font-bold border-b-4 transition-all duration-300 ${
                activeTab === "application" 
                  ? "border-red-600 text-red-600 bg-red-50/50" 
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Employment Application
              </div>
            </button>
            <button
              onClick={() => setActiveTab("careers")}
              className={`py-6 px-8 text-sm md:text-base font-bold border-b-4 transition-all duration-300 ${
                activeTab === "careers" 
                  ? "border-red-600 text-red-600 bg-red-50/50" 
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                View Open Positions
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="min-h-[600px]">
      {activeTab === "application" ? (
        /* Application Form Section */
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Official Application
                </h2>
                <p className="text-slate-600">
                  Fill out the details below to start your journey. Our HR team reviews applications daily.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-slate-700">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-slate-700">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                      placeholder="john@example.com"
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
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="date" className="text-sm font-bold text-slate-700">Available Start Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-slate-700">Position of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    >
                      <option value="">Select Position</option>
                      <option value="Armed Security">Armed Security</option>
                      <option value="Unarmed Security">Unarmed Security</option>
                      <option value="Event Security">Event Security</option>
                      <option value="Mobile Patrol">Mobile Patrol</option>
                      <option value="Supervisory">Supervisory</option>
                      <option value="Corporate">Corporate</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700">Why should we hire you? (Experience, Licenses, etc.)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all outline-none"
                    placeholder="Tell us about your BSIS permits, years of experience, and availability..."
                  />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg shadow-lg hover:shadow-red-900/20 transition-all">
                    Submit Application
                  </Button>
                  <p className="text-center text-xs text-gray-400 mt-4">
                    By clicking submit, you confirm that all information provided is accurate. ProForce1 is an Equal Opportunity Employer.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : (
        /* Career Opportunities Content */
        <>
          {/* Benefits Section */}
          <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-black text-slate-900 mb-4">WHY CHOOSE PROFORCE1?</h2>
                <p className="text-slate-600">We invest in our people so they can invest in our safety.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: DollarSign, title: "Competitive Pay", desc: "Industry-leading wages with performance bonuses." },
                  { icon: GraduationCap, title: "Career Growth", desc: "Clear paths for advancement and training." },
                  { icon: Shield, title: "Top Equipment", desc: "Latest gear and technology for your safety." },
                  { icon: Users, title: "Supportive Team", desc: "A community that values respect and integrity." },
                ].map((benefit, i) => (
                  <div key={i} className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
                      <benefit.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-500 text-sm">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Job Search Section */}
          <section className="py-20 bg-gray-50 border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                <div>
                  <h2 className="text-3xl font-black text-slate-900">OPEN POSITIONS</h2>
                  <p className="text-slate-600 mt-2">Find your next role in security.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search roles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-red-500 outline-none w-full"
                    />
                  </div>
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="pl-10 pr-8 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-1 focus:ring-red-500 outline-none appearance-none w-full"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept === "All Departments" ? "all" : dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map(job => (
                    <div key={job.id} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-red-500/50 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">{job.title}</h3>
                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">{job.type}</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500">
                            <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" />{job.location}</div>
                            <div className="flex items-center text-green-600 font-semibold"><DollarSign className="w-4 h-4 mr-1" />{job.salary}</div>
                            <div className="flex items-center"><Clock className="w-4 h-4 mr-1.5" />{job.experience}</div>
                          </div>
                          
                          <p className="text-slate-600 mb-4 leading-relaxed">{job.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {job.requirements.map((req, index) => (
                              <span key={index} className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 text-slate-600 text-xs border border-slate-100">
                                <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" /> {req}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-3 min-w-[140px]">
                          <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                            Apply Now
                          </Button>
                          <Button variant="outline" className="border-slate-200 hover:bg-slate-50 text-slate-700 w-full">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                    <Briefcase className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900">No positions found</h3>
                    <p className="text-slate-500">Try adjusting your search filters.</p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Hiring Process */}
          <section className="py-20 bg-slate-900 text-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 className="text-3xl font-black text-center mb-16">OUR HIRING PROCESS</h2>
              <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-800 -z-0"></div>
                
                {[
                  { step: "1", title: "Application", desc: "Submit your resume online" },
                  { step: "2", title: "Screening", desc: "Initial phone interview" },
                  { step: "3", title: "Interview", desc: "In-person assessment" },
                  { step: "4", title: "Onboarding", desc: "Training & Deployment" },
                ].map((item, i) => (
                  <div key={i} className="relative z-10 text-center group">
                    <div className="w-16 h-16 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:bg-red-600 transition-colors duration-300">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
            READY TO START YOUR CAREER?
          </h2>
          <p className="text-xl mb-10 text-red-100 max-w-2xl mx-auto">
            Join Southern California's most trusted security team. Start your application today.
          </p>
          <div className="flex justify-center">
            <Button 
                onClick={() => setActiveTab("application")}
                className="bg-white text-red-700 hover:bg-slate-100 font-bold px-10 py-6 text-lg rounded-xl shadow-xl"
            >
              Start Application Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}