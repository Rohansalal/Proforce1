// "use client"

// import { useState } from "react"
// import { MapPin, Clock, DollarSign, GraduationCap, Users, Shield, ArrowRight, Search, Filter, Briefcase } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function CareerPage() {
//   const [selectedDepartment, setSelectedDepartment] = useState("all")
//   const [searchTerm, setSearchTerm] = useState("")

//   const departments = [
//     "All Departments",
//     "Armed Security",
//     "Unarmed Security",
//     "Event Security",
//     "Mobile Patrol",
//     "Supervisory",
//     "Corporate",
//     "Training"
//   ]

//   const jobOpenings = [
//     {
//       id: 1,
//       title: "Armed Security Officer",
//       department: "Armed Security",
//       type: "Full-Time",
//       location: "Anaheim, CA",
//       salary: "$22 - $28/hr",
//       experience: "2+ years",
//       description: "Join our elite armed security team providing high-level protection services for corporate clients and high-risk facilities.",
//       requirements: ["BSIS Firearm Permit", "Security Experience", "Clean Driving Record", "CPR/First Aid Certified"]
//     },
//     {
//       id: 2,
//       title: "Event Security Specialist",
//       department: "Event Security",
//       type: "Part-Time/Event",
//       location: "Los Angeles, CA",
//       salary: "$18 - $25/hr",
//       experience: "1+ years",
//       description: "Provide security services for concerts, festivals, and special events throughout Southern California.",
//       requirements: ["Crowd Management Training", "Flexible Schedule", "Excellent Communication Skills"]
//     },
//     {
//       id: 3,
//       title: "Security Supervisor",
//       department: "Supervisory",
//       type: "Full-Time",
//       location: "Orange County, CA",
//       salary: "$65,000 - $80,000/yr",
//       experience: "3+ years",
//       description: "Lead and manage security teams, conduct training, and ensure operational excellence across multiple sites.",
//       requirements: ["BSIS Guard Card", "Supervisory Experience", "Training Certification", "Leadership Skills"]
//     },
//     {
//       id: 4,
//       title: "Mobile Patrol Officer",
//       department: "Mobile Patrol",
//       type: "Full-Time",
//       location: "Riverside, CA",
//       salary: "$20 - $26/hr",
//       experience: "1+ years",
//       description: "Conduct mobile patrols of commercial and residential properties, respond to alarms, and provide visible security presence.",
//       requirements: ["Clean Driving Record", "Security Experience", "Flexible Schedule"]
//     },
//     {
//       id: 5,
//       title: "Corporate Security Manager",
//       department: "Corporate",
//       type: "Full-Time",
//       location: "Irvine, CA",
//       salary: "$85,000 - $110,000/yr",
//       experience: "5+ years",
//       description: "Develop and implement security protocols for corporate clients, manage security programs, and conduct risk assessments.",
//       requirements: ["Bachelor's Degree Preferred", "Management Experience", "Security Clearance", "Risk Assessment Skills"]
//     },
//     {
//       id: 6,
//       title: "Training Instructor",
//       department: "Training",
//       type: "Full-Time",
//       location: "Anaheim, CA",
//       salary: "$60,000 - $75,000/yr",
//       experience: "4+ years",
//       description: "Train and certify new security officers in firearms, defensive tactics, and security protocols.",
//       requirements: ["BSIS Firearms Instructor", "Training Experience", "Excellent Presentation Skills"]
//     }
//   ]

//   const filteredJobs = jobOpenings.filter(job => {
//     const matchesDepartment = selectedDepartment === "all" || job.department === selectedDepartment
//     const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          job.description.toLowerCase().includes(searchTerm.toLowerCase())
//     return matchesDepartment && matchesSearch
//   })

//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <section className="bg-gray-900 text-white py-20">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
//             JOIN THE PROFORCE1 TEAM
//           </h1>
//           <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
//           <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
//             Build a rewarding career with Southern California's premier security provider. 
//             Protect communities while advancing your professional goals.
//           </p>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 bg-white">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             WHY CHOOSE PROFORCE1
//           </h2>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <DollarSign className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pay</h3>
//               <p className="text-gray-600">Industry-leading wages with regular raises and bonus opportunities</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <GraduationCap className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Career Growth</h3>
//               <p className="text-gray-600">Advancement opportunities and professional development programs</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Top Equipment</h3>
//               <p className="text-gray-600">State-of-the-art gear and technology for your safety and effectiveness</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-8 h-8 text-red-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Supportive Team</h3>
//               <p className="text-gray-600">Join a professional community that values and supports each other</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Job Search Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8">
//           <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//               FIND YOUR SECURITY CAREER
//             </h2>
            
//             {/* Search and Filter */}
//             <div className="grid md:grid-cols-2 gap-6 mb-8">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="text"
//                   placeholder="Search positions..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
//                 />
//               </div>
              
//               <div className="relative">
//                 <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <select
//                   value={selectedDepartment}
//                   onChange={(e) => setSelectedDepartment(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none"
//                 >
//                   {departments.map(dept => (
//                     <option key={dept} value={dept === "All Departments" ? "all" : dept}>
//                       {dept}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Job Listings */}
//             <div className="space-y-6">
//               {filteredJobs.length > 0 ? (
//                 filteredJobs.map(job => (
//                   <div key={job.id} className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
//                     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
//                       <div className="flex-1">
//                         <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
//                         <div className="flex flex-wrap gap-4 mb-3">
//                           <div className="flex items-center text-gray-600">
//                             <MapPin className="w-4 h-4 mr-2" />
//                             {job.location}
//                           </div>
//                           <div className="flex items-center text-gray-600">
//                             <Briefcase className="w-4 h-4 mr-2" />
//                             {job.type}
//                           </div>
//                           <div className="flex items-center text-gray-600">
//                             <DollarSign className="w-4 h-4 mr-2" />
//                             {job.salary}
//                           </div>
//                           <div className="flex items-center text-gray-600">
//                             <Clock className="w-4 h-4 mr-2" />
//                             {job.experience}
//                           </div>
//                         </div>
//                         <p className="text-gray-600 mb-4">{job.description}</p>
//                         <div className="flex flex-wrap gap-2">
//                           {job.requirements.map((req, index) => (
//                             <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
//                               {req}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="mt-4 lg:mt-0 lg:ml-6">
//                         <Button className="bg-red-600 hover:bg-red-700 text-white">
//                           Apply Now <ArrowRight className="w-4 h-4 ml-2" />
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-center py-12">
//                   <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
//                   <p className="text-gray-600">Try adjusting your search criteria or check back later for new openings.</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Application Process */}
//           <div className="bg-gray-900 text-white rounded-lg p-8">
//             <h2 className="text-3xl font-bold text-center mb-12">OUR HIRING PROCESS</h2>
//             <div className="grid md:grid-cols-4 gap-8">
//               <div className="text-center">
//                 <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
//                 <h3 className="text-xl font-bold mb-2">Application</h3>
//                 <p className="text-gray-300">Submit your application and resume online</p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
//                 <h3 className="text-xl font-bold mb-2">Phone Screening</h3>
//                 <p className="text-gray-300">Brief interview with our recruitment team</p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
//                 <h3 className="text-xl font-bold mb-2">In-Person Interview</h3>
//                 <p className="text-gray-300">Meet with security managers and team leads</p>
//               </div>
//               <div className="text-center">
//                 <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
//                 <h3 className="text-xl font-bold mb-2">Training & Onboarding</h3>
//                 <p className="text-gray-300">Complete training and join the ProForce1 team</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Requirements Section */}
//       <section className="py-16 bg-white">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//             MINIMUM REQUIREMENTS
//           </h2>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div className="text-center p-6 border border-gray-300 rounded-lg">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Shield className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">BSIS Guard Card</h3>
//               <p className="text-gray-600">Current California security guard license</p>
//             </div>

//             <div className="text-center p-6 border border-gray-300 rounded-lg">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Users className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Background</h3>
//               <p className="text-gray-600">Pass comprehensive background investigation</p>
//             </div>

//             <div className="text-center p-6 border border-gray-300 rounded-lg">
//               <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <GraduationCap className="w-8 h-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold text-gray-900 mb-2">CPR Certified</h3>
//               <p className="text-gray-600">Current First Aid/CPR certification</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-red-600 text-white">
//         <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-4">
//             READY TO PROTECT YOUR COMMUNITY?
//           </h2>
//           <p className="text-xl mb-8 text-red-100">
//             Join Southern California's most trusted security team. Start your application today.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3">
//               View All Openings
//             </Button>
//             <Button variant="outline" className="border-white text-white hover:bg-red-700 font-bold px-8 py-3">
//               Contact Recruitment
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }  


"use client"

import { useState } from "react"
import { MapPin, Clock, DollarSign, GraduationCap, Users, Shield, ArrowRight, Search, Filter, Briefcase } from "lucide-react"
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
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            JOIN THE PROFORCE1 TEAM
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Build a rewarding career with Southern California's premier security provider. 
            Protect communities while advancing your professional goals.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("application")}
              className={`flex-1 py-4 px-6 text-lg font-medium border-b-2 transition-colors ${
                activeTab === "application" 
                  ? "border-red-600 text-red-600" 
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Employment Application
            </button>
            <button
              onClick={() => setActiveTab("careers")}
              className={`flex-1 py-4 px-6 text-lg font-medium border-b-2 transition-colors ${
                activeTab === "careers" 
                  ? "border-red-600 text-red-600" 
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Career Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === "application" ? (
        /* Application Form Section */
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <div className="bg-gray-50 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                EMPLOYMENT APPLICATION
              </h2>
              
              <div className="prose prose-lg mb-8 text-gray-600">
                <p className="mb-4">
                  Welcome to the ProForce1 Careers page. We invite you to complete our comprehensive employment 
                  application form to provide us with detailed information about your qualifications and interest 
                  in joining our dynamic team as a security officer.
                </p>
                <p className="mb-4">
                  At ProForce1, we are committed to attracting and retaining top talent to enhance the strength 
                  of our security services. Our Human Resources department is always actively seeking prospective 
                  security officers who share our dedication to excellence and a commitment to ensuring safety.
                </p>
                <p className="mb-4">
                  To kickstart your journey with ProForce1, take a few moments to fill out our employment 
                  application form. Your detailed information allows us to better understand your skills, 
                  experiences, and aspirations, ensuring that we can match your profile with the right 
                  opportunities within our organization.
                </p>
                <p className="mb-4">
                  Should you have any immediate questions or inquiries about the application process or 
                  available positions, our Human Resources department is here to assist you. Feel free to 
                  submit your information. We understand that each applicant is unique, and we value the 
                  opportunity to provide personalized assistance.
                </p>
                <p className="mb-4">
                  ProForce1 is dedicated to fostering a collaborative and inclusive work environment. By 
                  joining our team, you become part of a community that prioritizes professionalism, 
                  continuous learning, and a shared commitment to delivering exceptional security services.
                </p>
                <p>
                  We appreciate your interest in a career with ProForce1 and look forward to reviewing your 
                  application. Take the first step toward a rewarding career in security by completing our 
                  employment application form today. Thank you for considering ProForce1 as your next career 
                  destination.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Select Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select Service</option>
                      <option value="Armed Security">Armed Security</option>
                      <option value="Unarmed Security">Unarmed Security</option>
                      <option value="Event Security">Event Security</option>
                      <option value="Mobile Patrol">Mobile Patrol</option>
                      <option value="Supervisory">Supervisory</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Training">Training</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone No. *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Why should we hire you? What is your availability? How soon you can start?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : (
        /* Original Career Opportunities Content */
        <>
          {/* Benefits Section */}
          <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                WHY CHOOSE PROFORCE1
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pay</h3>
                  <p className="text-gray-600">Industry-leading wages with regular raises and bonus opportunities</p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Career Growth</h3>
                  <p className="text-gray-600">Advancement opportunities and professional development programs</p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Top Equipment</h3>
                  <p className="text-gray-600">State-of-the-art gear and technology for your safety and effectiveness</p>
                </div>

                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Supportive Team</h3>
                  <p className="text-gray-600">Join a professional community that values and supports each other</p>
                </div>
              </div>
            </div>
          </section>

          {/* Job Search Section */}
          <section className="py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  FIND YOUR SECURITY CAREER
                </h2>
                
                {/* Search and Filter */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search positions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept === "All Departments" ? "all" : dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Job Listings */}
                <div className="space-y-6">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map(job => (
                      <div key={job.id} className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                            <div className="flex flex-wrap gap-4 mb-3">
                              <div className="flex items-center text-gray-600">
                                <MapPin className="w-4 h-4 mr-2" />
                                {job.location}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Briefcase className="w-4 h-4 mr-2" />
                                {job.type}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <DollarSign className="w-4 h-4 mr-2" />
                                {job.salary}
                              </div>
                              <div className="flex items-center text-gray-600">
                                <Clock className="w-4 h-4 mr-2" />
                                {job.experience}
                              </div>
                            </div>
                            <p className="text-gray-600 mb-4">{job.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.requirements.map((req, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                  {req}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-4 lg:mt-0 lg:ml-6">
                            <Button className="bg-red-600 hover:bg-red-700 text-white">
                              Apply Now <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
                      <p className="text-gray-600">Try adjusting your search criteria or check back later for new openings.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Application Process */}
              <div className="bg-gray-900 text-white rounded-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-12">OUR HIRING PROCESS</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                    <h3 className="text-xl font-bold mb-2">Application</h3>
                    <p className="text-gray-300">Submit your application and resume online</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                    <h3 className="text-xl font-bold mb-2">Phone Screening</h3>
                    <p className="text-gray-300">Brief interview with our recruitment team</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                    <h3 className="text-xl font-bold mb-2">In-Person Interview</h3>
                    <p className="text-gray-300">Meet with security managers and team leads</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                    <h3 className="text-xl font-bold mb-2">Training & Onboarding</h3>
                    <p className="text-gray-300">Complete training and join the ProForce1 team</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                MINIMUM REQUIREMENTS
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6 border border-gray-300 rounded-lg">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">BSIS Guard Card</h3>
                  <p className="text-gray-600">Current California security guard license</p>
                </div>

                <div className="text-center p-6 border border-gray-300 rounded-lg">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clean Background</h3>
                  <p className="text-gray-600">Pass comprehensive background investigation</p>
                </div>

                <div className="text-center p-6 border border-gray-300 rounded-lg">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">CPR Certified</h3>
                  <p className="text-gray-600">Current First Aid/CPR certification</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            READY TO PROTECT YOUR COMMUNITY?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Join Southern California's most trusted security team. Start your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3">
              View All Openings
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-red-700 font-bold px-8 py-3">
              Contact Recruitment
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}