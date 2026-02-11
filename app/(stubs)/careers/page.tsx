"use client"

import { useState, useRef } from "react"
import { 
  MapPin, Clock, DollarSign, GraduationCap, Users, Shield, 
  ArrowRight, Search, Filter, Briefcase, CheckCircle2, FileText, 
  ChevronRight, Play, AlertCircle 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState("application")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  
  // Ref for auto-scrolling to the form when "Apply Now" is clicked
  const topRef = useRef<HTMLDivElement>(null)

  // --- SMART APPLY FUNCTION ---
  const handleApplyClick = () => {
    // 1. Switch tab to the application form
    setActiveTab("application")
    // 2. Smooth scroll to the top of the page/form
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Form state management
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", date: "", service: "", 
    email: "", phone: "", message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your submission logic here (e.g., API call)
  }

  const departments = [
    "All Departments", "Armed Security", "Unarmed Security", "Event Security", 
    "Mobile Patrol", "Supervisory", "Corporate", "Training"
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
  ]

  const filteredJobs = jobOpenings.filter(job => {
    const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesDepartment && matchesSearch
  })

  return (
    // 'ref={topRef}' allows us to scroll back to the top of this container
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-red-100 selection:text-red-900" ref={topRef}>
      
      {/* =========================================
          1. VIDEO HERO SECTION
      ========================================= */}
      <section className="relative h-[80vh] w-full overflow-hidden   bg-slate-950 flex items-center justify-center">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 scale-105" // Opacity ensures text is readable
          >
            {/* MAKE SURE to add your video file to the public/videos folder */}
            <source src="/hero/patrol-services.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <img src="/career-fallback.jpg" alt="Security Team" className="w-full h-full object-cover" />
          </video>
          
          {/* Tactical Pattern Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
          
          {/* Gradient for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-900/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Pulsing "Recruiting" Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/20 border border-red-600/40 backdrop-blur-md rounded-full text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Actively Recruiting
            </div> */}

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none uppercase drop-shadow-2xl">
              JOIN THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                PROFORCE1
              </span> TEAM
            </h1>
            
            {/* Quick Action Buttons */}
            <div className="mt-10 flex justify-center gap-4">
               <Button 
                 onClick={() => setActiveTab("application")} 
                 className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-bold shadow-lg shadow-red-900/30"
               >
                 Apply Now
               </Button>
               <Button 
                 onClick={() => setActiveTab("careers")} 
                 variant="outline" 
                 className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-bold"
               >
                 View Openings
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          2. STICKY TABS NAVIGATION
      ========================================= */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-md">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex justify-center w-full">
            <button
              onClick={() => setActiveTab("application")}
              className={`flex-1 md:flex-none relative py-6 px-4 md:px-12 text-sm md:text-base font-bold transition-colors ${
                activeTab === "application" ? "text-red-700" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Official Application
              </span>
              {activeTab === "application" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-red-700" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("careers")}
              className={`flex-1 md:flex-none relative py-6 px-4 md:px-12 text-sm md:text-base font-bold transition-colors ${
                activeTab === "careers" ? "text-red-700" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                <Briefcase className="w-4 h-4" /> Open Positions
              </span>
              {activeTab === "careers" && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-red-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================
          3. TAB CONTENT AREA
      ========================================= */}
      <AnimatePresence mode="wait">
        
        {/* --- TAB A: APPLICATION FORM --- */}
        {activeTab === "application" ? (
          <motion.section 
            key="application"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="py-16 md:py-24 bg-slate-50"
          >
            <div className="mx-auto max-w-4xl px-4 lg:px-8">
              <div className="bg-white rounded-xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                {/* Form Header */}
                <div className="bg-slate-900 px-8 py-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700" />
                    <Shield className="w-12 h-12 text-slate-700 mx-auto mb-4 opacity-50 absolute top-4 right-4" />
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Personnel Intake Form</h2>
                    <p className="text-slate-400 text-sm flex justify-center items-center gap-2">
                      <AlertCircle className="w-3 h-3" /> SECURE TRANSMISSION • HR DEPT ONLY
                    </p>
                </div>

                <div className="p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Details Group */}
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">
                            01. Identity Verification
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">First Name</label>
                                <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange} 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-red-600 outline-none transition-all" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Last Name</label>
                                <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange} 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-red-600 outline-none transition-all" placeholder="Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-red-600 outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-red-600 outline-none transition-all" placeholder="(555) 000-0000" />
                            </div>
                        </div>
                    </div>

                    {/* Position Details Group */}
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">
                            02. Assignment Preferences
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Availability Date</label>
                                <input type="date" name="date" value={formData.date} onChange={handleInputChange} 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-red-600 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Position of Interest</label>
                                <select name="service" value={formData.service} onChange={handleInputChange} 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-red-600 outline-none transition-all">
                                    <option value="">Select Designation...</option>
                                    <option value="Armed Security">Armed Security</option>
                                    <option value="Unarmed Security">Unarmed Security</option>
                                    <option value="Event Security">Event Security</option>
                                    <option value="Mobile Patrol">Mobile Patrol</option>
                                    <option value="Supervisory">Supervisory</option>
                                    <option value="Corporate">Corporate</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Qualifications &amp; Licenses</label>
                                <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange} 
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-md focus:ring-2 focus:ring-red-600 outline-none transition-all" 
                                    placeholder="List your BSIS permits, firearms qualifications, and relevant field experience..." />
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                      <Button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-6 text-lg shadow-lg hover:shadow-red-900/20 transition-all rounded-md group">
                        Submit Official Application 
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <p className="text-center text-xs text-slate-400 mt-6 flex items-center justify-center gap-2">
                        <Shield className="w-3 h-3" />
                        Information is encrypted. ProForce1 is an Equal Opportunity Employer.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.section>
        ) : (
          
          /* --- TAB B: CAREER LISTINGS --- */
          <motion.div
            key="careers"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Benefits Teaser */}
            <section className="py-20 bg-white border-b border-slate-100">
              <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: DollarSign, title: "Top-Tier Pay", desc: "Above market rates &amp; bonuses." },
                    { icon: GraduationCap, title: "Academy Training", desc: "Paid certifications &amp; upskilling." },
                    { icon: Shield, title: "Tactical Gear", desc: "Advanced equipment provided." },
                    { icon: Users, title: "Elite Network", desc: "Work with the best in the industry." },
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="p-3 bg-red-50 text-red-700 rounded-lg">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                        <p className="text-sm text-slate-500 mt-1">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Job Board */}
            <section className="py-20 bg-slate-50">
              <div className="mx-auto max-w-7xl px-4 lg:px-8">
                
                {/* Search &amp; Filter Toolbar */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                   <div>
                     <h2 className="text-2xl font-black text-slate-900 tracking-tight">DEPLOYMENT OPPORTUNITIES</h2>
                     <p className="text-slate-500 text-sm mt-1">Select a role to view briefing.</p>
                   </div>
                   <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                     <div className="relative">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                       <input 
                         type="text" 
                         placeholder="Search roles..." 
                         value={searchTerm}
                         onChange={(e) => setSearchTerm(e.target.value)}
                         className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-red-600 outline-none w-full md:w-64"
                       />
                     </div>
                     <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <select 
                          value={selectedDepartment}
                          onChange={(e) => setSelectedDepartment(e.target.value)}
                          className="pl-10 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-red-600 outline-none appearance-none w-full"
                        >
                          {departments.map(dept => (
                            <option key={dept} value={dept === "All Departments" ? "all" : dept}>{dept}</option>
                          ))}
                        </select>
                     </div>
                   </div>
                </div>

                {/* Job Cards */}
                <div className="grid gap-6">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map(job => (
                      <div key={job.id} className="group bg-white rounded-xl p-0 hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 flex flex-col lg:flex-row">
                        {/* Left Color Bar */}
                        <div className="w-full lg:w-1.5 h-1.5 lg:h-auto bg-slate-200 group-hover:bg-red-600 transition-colors" />
                        
                        <div className="p-6 lg:p-8 flex-1 flex flex-col lg:flex-row lg:items-start gap-6">
                          <div className="flex-1">
                             <div className="flex items-center gap-3 mb-2">
                               <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">{job.title}</h3>
                               <span className="px-2.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded">{job.type}</span>
                             </div>
                             
                             <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm font-medium text-slate-500">
                               <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5 text-slate-400" />{job.location}</div>
                               <div className="flex items-center text-slate-700"><DollarSign className="w-4 h-4 mr-1 text-green-600" />{job.salary}</div>
                               <div className="flex items-center"><Clock className="w-4 h-4 mr-1.5 text-slate-400" />{job.experience}</div>
                             </div>
                             
                             <p className="text-slate-600 mb-5 leading-relaxed text-sm">{job.description}</p>
                             
                             <div className="flex flex-wrap gap-2">
                               {job.requirements.map((req, index) => (
                                 <span key={index} className="inline-flex items-center px-2 py-1 rounded bg-slate-50 text-slate-600 text-xs border border-slate-100 font-medium">
                                   <CheckCircle2 className="w-3 h-3 mr-1.5 text-red-600" /> {req}
                                 </span>
                               ))}
                             </div>
                          </div>
                          
                          <div className="flex flex-col gap-3 min-w-[160px] lg:border-l lg:border-slate-100 lg:pl-6 lg:ml-2 justify-center">
                             {/* THE MAGIC BUTTON: This now calls handleApplyClick */}
                             <Button 
                               onClick={handleApplyClick}
                               className="bg-slate-900 hover:bg-red-700 text-white w-full shadow-md transition-colors"
                             >
                               Apply Now
                             </Button>
                             <Button variant="outline" className="border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 w-full">
                               Full Briefing
                             </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-24 bg-white rounded-xl border border-dashed border-slate-300">
                      <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-slate-900">No active positions match criteria</h3>
                      <p className="text-slate-500 text-sm">Reset filters to see all deployments.</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Footer */}
      <section className="py-24 bg-red-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative mx-auto max-w-4xl px-4 lg:px-8 text-center text-white">
           <Shield className="w-16 h-16 mx-auto mb-6 text-red-300 opacity-50" />
           <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">READY TO WEAR THE BADGE?</h2>
           <p className="text-xl mb-10 text-red-100 max-w-2xl mx-auto font-light">
             Join Southern California's most trusted security team. Your career starts here.
           </p>
           <Button 
              onClick={handleApplyClick}
              className="bg-white text-red-800 hover:bg-slate-100 hover:scale-105 transition-all font-bold px-12 py-7 text-lg rounded-full shadow-2xl"
           >
             Begin Application Process
           </Button>
        </div>
      </section>
    </main>
  )
}