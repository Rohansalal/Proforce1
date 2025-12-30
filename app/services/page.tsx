// // import Link from "next/link"

// // const services = [
// //   { href: "/services/armed-security", label: "Armed Security" },
// //   { href: "/services/construction-security-orange-county", label: "Construction Security Orange County" },
// //   { href: "/services/event-security-orange-county", label: "Event Security Orange County" },
// //   { href: "/services/specialized-fire-watch-orange-county", label: "Specialized Fire Watch Orange County" },
// //   { href: "/services/security-guard-orange-county", label: "Security Guard Orange County" },
// //   { href: "/services/patrol-services-orange-county", label: "Patrol Services Orange County" },
// //   { href: "/services/unarmed-guard-orange-county", label: "Unarmed Guard Orange County" },
// // ]

// // export default function ServicesIndex() {
// //   return (
// //     <main className="mx-auto max-w-7xl px-4 lg:px-8 py-10">
// //       <header className="text-center">
// //         <h1 className="text-3xl md:text-4xl font-semibold">Our Services</h1>
// //         <p className="mt-2 text-muted-foreground">
// //           Reliable protection tailored to your property, event, or business needs.
// //         </p>
// //       </header>

// //       <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
// //         {services.map((s) => (
// //           <Link key={s.href} href={s.href} className="rounded-md border p-6 hover:shadow-md transition">
// //             <img src="/security-service.jpg" alt="" className="w-full rounded mb-4" />
// //             <div className="font-medium">{s.label}</div>
// //             <div className="text-sm text-muted-foreground mt-1">Professional guards and clear reporting.</div>
// //           </Link>
// //         ))}
// //       </div>
// //     </main>
// //   )
// // }



// // "use client";
// // import { useState, useRef, useEffect } from "react";
// // import Link from "next/link";
// // import Image from "next/image";

// // // Service data with detailed information
// // const servicesData = [
// //   {
// //     id: 1,
// //     title: "High Rise Building Security",
// //     icon: "🏢",
// //     image: "/Services/high-rise-security.jpg",
// //     description: "Comprehensive security solutions for high-rise buildings.",
// //     features: ["24/7 Monitoring", "Access Control", "Emergency Response", "CCTV Surveillance"],
// //     stats: "98%",
// //     statsText: "Client Satisfaction",
// //     href: "/services/high-rise-building-security"
// //   },
// //   {
// //     id: 2,
// //     title: "Fire Watch Security",
// //     icon: "🔥",
// //     image: "/Services/fire-watch.jpg",
// //     description: "Professional fire watch services to protect your property.",
// //     features: ["Fire Safety Checks", "Emergency Protocols", "Regular Reporting", "Compliance Monitoring"],
// //     stats: "24/7",
// //     statsText: "Coverage",
// //     href: "/services/fire-watch-security"
// //   },
// //   {
// //     id: 3,
// //     title: "Hospital Security",
// //     icon: "🏥",
// //     image: "/Services/hospital-security.jpg",
// //     description: "Specialized security for healthcare facilities.",
// //     features: ["Patient Safety", "Access Control", "Emergency Response", "Visitor Management"],
// //     stats: "500+",
// //     statsText: "Facilities Protected",
// //     href: "/services/hospital-security"
// //   },
// //   {
// //     id: 4,
// //     title: "Shopping Center Security",
// //     icon: "🛍️",
// //     image: "/Services/shopping-center-security.jpg",
// //     description: "Retail security solutions for shopping centers.",
// //     features: ["Loss Prevention", "Crowd Management", "Parking Lot Patrol", "Incident Response"],
// //     stats: "1M+",
// //     statsText: "Daily Visitors",
// //     href: "/services/shopping-center-security"
// //   },
// //   {
// //     id: 5,
// //     title: "Financial Institution Security",
// //     icon: "🏦",
// //     image: "/Services/bank-security.jpg",
// //     description: "Financial institution security services.",
// //     features: ["Asset Protection", "Access Control", "Alarm Response", "Transaction Security"],
// //     stats: "100%",
// //     statsText: "Compliance",
// //     href: "/services/financial-institution-security"
// //   },
// //   {
// //     id: 6,
// //     title: "Event Security",
// //     icon: "🎫",
// //     image: "/Services/event-security.jpg",
// //     description: "Security for events of all sizes.",
// //     features: ["Crowd Control", "Access Management", "Emergency Planning", "VIP Protection"],
// //     stats: "5K+",
// //     statsText: "Events Secured",
// //     href: "/services/event-security"
// //   },
// //   {
// //     id: 7,
// //     title: "Construction Site Security",
// //     icon: "🚧",
// //     image: "/Services/construction-security.jpg",
// //     description: "Protection for construction sites and equipment.",
// //     features: ["Theft Prevention", "Access Control", "Equipment Monitoring", "Perimeter Security"],
// //     stats: "85%",
// //     statsText: "Theft Reduction",
// //     href: "/services/construction-security"
// //   },
// //   {
// //     id: 8,
// //     title: "Onsite Security 24/7",
// //     icon: "🏭",
// //     image: "/Services/factory-security.jpg",
// //     description: "Industrial facility security solutions.",
// //     features: ["Asset Protection", "Access Control", "Inventory Monitoring", "Safety Compliance"],
// //     stats: "99%",
// //     statsText: "Accuracy",
// //     href: "/services/on-site-security"
// //   },
// //   {
// //     id: 9,
// //     title: "Mobile Patrol",
// //     icon: "🚔",
// //     image: "/Services/vehicle-patrol.jpg",
// //     description: "Highly visible and proactive mobile patrol services.",
// //     features: ["Random Patrols", "Rapid Response", "Property Checks", "Incident Reporting"],
// //     stats: "15min",
// //     statsText: "Response Time",
// //     href: "/services/mobile-patrol-security"
// //   },
// //   {
// //     id: 10,
// //     title: "Loss Prevention Security",
// //     icon: "🛡️",
// //     image: "/Services/loss-prevention.jpg",
// //     description: "Retail loss prevention strategies.",
// //     features: ["Shoplifting Prevention", "Employee Training", "Inventory Control", "Investigation Services"],
// //     stats: "60%",
// //     statsText: "Loss Reduction",
// //     href: "/services/loss-prevention-security"
// //   },
// //   {
// //     id: 11,
// //     title: "Executive Protection",
// //     icon: "💼",
// //     image: "/Services/executive-protection.jpg",
// //     description: "Personal security for executives.",
// //     features: ["Risk Assessment", "Travel Security", "Threat Management", "Discreet Protection"],
// //     stats: "100%",
// //     statsText: "Safety Record",
// //     href: "/services/executive-protection"
// //   },
// //   {
// //     id: 12,
// //     title: "Bank Security",
// //     icon: "💪",
// //     image: "/Services/bodyguard-services.jpg",
// //     description: "Personal protection services.",
// //     features: ["Close Protection", "Risk Assessment", "Emergency Response", "Discretion"],
// //     stats: "24/7",
// //     statsText: "Protection",
// //     href: "/services/bank-security"
// //   },
// //   // {
// //   //   id: 13,
// //   //   title: "Vehicle Patrol",
// //   //   icon: "🚔",
// //   //   image: "/Services/vehicle-patrol.jpg",
// //   //   description: "Mobile security patrol services.",
// //   //   features: ["Regular Patrols", "Rapid Response", "Property Checks", "Incident Reporting"],
// //   //   stats: "15min",
// //   //   statsText: "Response Time",
// //   //   href: "/services/vehicle-patrol"
// //   // },
// //   // {
// //   //   id: 14,
// //   //   title: "Foot Patrol",
// //   //   icon: "🚶‍♂️",
// //   //   image: "/Services/foot-patrol.jpg",
// //   //   description: "On-foot security patrol services.",
// //   //   features: ["Detailed Inspection", "Access Control", "Visible Deterrent", "Community Engagement"],
// //   //   stats: "360°",
// //   //   statsText: "Coverage",
// //   //   href: "/services/foot-patrol"
// //   // },
// //   // {
// //   //   id: 15,
// //   //   title: "Religious Sites Security",
// //   //   icon: "⛪",
// //   //   image: "/Services/religious-security.jpg",
// //   //   description: "Security for places of worship.",
// //   //   features: ["Crowd Management", "Access Control", "Emergency Planning", "Community Relations"],
// //   //   stats: "100%",
// //   //   statsText: "Peace of Mind",
// //   //   href: "/services/religious-sites-security"
// //   // },
// //   {
// //     id: 16,
// //     title: "School / Campus Security",
// //     icon: "🎓",
// //     image: "/Services/campus-security.jpg",
// //     description: "Educational facility security.",
// //     features: ["Access Control", "Emergency Protocols", "Student Safety", "Visitor Management"],
// //     stats: "500+",
// //     statsText: "Schools Protected",
// //     href: "/services/school-campus-security"
// //   },
// //   {
// //     id: 17,
// //     title: "Unarmed Security",
// //     image: "/Services/transport-security.jpg",
// //     description: "Security for transportation hubs.",
// //     features: ["Crowd Control", "Baggage Screening", "Emergency Response", "Patrol Services"],
// //     stats: "1M+",
// //     statsText: "Travelers Daily",
// //     href: "/services/unarmed-security"
// //   },
// //   {
// //     id: 18,
// //     title: "Armed Security",
// //     image: "/Services/armed-security.jpg",
// //     description: "Licensed armed security personnel.",
// //     features: ["Threat Assessment", "Crisis Response", "Weapon Proficiency", "Legal Compliance"],
// //     stats: "100%",
// //     statsText: "Certified",
// //     href: "/services/armed-security"
// //   },
// //   {
// //     id: 19,
// //     title: "Hotel/Private Parties/Banquet Hall Security",
// //     icon: "🎉",
// //     image: "/Services/hotel-security.jpg",
// //     description: "Hospitality venue security.",
// //     features: ["Guest Safety", "Access Control", "Crowd Management", "Incident Response"],
// //     stats: "24/7",
// //     statsText: "Guest Protection",
// //     href: "/services/hotel-private-parties-security"
// //   } 
// // ];

// // // Fixed custom hook for intersection observer
// // const useScrollAnimation = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const elementRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.3 }
// //     );

// //     const currentElement = elementRef.current;
// //     if (currentElement) {
// //       observer.observe(currentElement);
// //     }

// //     return () => {
// //       if (currentElement) {
// //         observer.unobserve(currentElement);
// //       }
// //     };
// //   }, []);

// //   return { elementRef, isVisible };
// // };

// // export default function ServicesPage() {
// //   const heroAnimation = useScrollAnimation();
// //   const surveillanceAnimation = useScrollAnimation();

// //   return (
// //     <div className="min-h-screen bg-white overflow-hidden">
// //       {/* Hero Section */}
// //       <section className="relative bg-gray-50 py-16 lg:py-24">
// //         <div ref={heroAnimation.elementRef} className="mx-auto max-w-7xl px-4 lg:px-8">
// //           <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
// //             heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// //           }`}>
// //             {/* Left Side - Big Number */}
// //             <div className="text-center lg:text-left">
// //               <div className="text-7xl lg:text-8xl font-bold text-orange-600 mb-4 animate-pulse-slow">
// //                 6,000+
// //               </div>
// //               <div className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
// //                 Highly skilled, licensed and trained operational staff
// //               </div>
// //             </div>

// //             {/* Right Side - Content */}
// //             <div className="space-y-6">
// //               <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up">
// //                 On-site security isn't just about standing around, it's about protecting your people, 
// //                 your property, and your reputation. And nobody does it better than we do.
// //               </p>

// //               <div className="border-l-4 border-orange-500 pl-6 py-2 animate-slide-in-right">
// //                 <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
// //                   When We're There,<br />
// //                   You Feel It.
// //                 </h2>
// //                 <p className="text-gray-600 leading-relaxed">
// //                   Our Security Service Officers are fully licensed, highly trained, and incredibly professional. 
// //                   They're a strong, reassuring presence for your team and guests, and a serious deterrent for 
// //                   anyone thinking of causing trouble.
// //                 </p>
// //               </div>

// //               <p className="text-gray-600 leading-relaxed animate-fade-in-up">
// //                 Whether you need full-site coverage or just want to strengthen your current setup, we deliver. 
// //                 Fast, flexible, and rock solid. When we're on your site, you know your people and your business 
// //                 are in the best hands possible. Total protection. No excuses. Just results.
// //               </p>

// //               <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-in">
// //                 Learn More
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Smart Surveillance Section */}
// //       <section className="py-16 lg:py-24 bg-white">
// //         <div ref={surveillanceAnimation.elementRef} className="mx-auto max-w-7xl px-4 lg:px-8">
// //           <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
// //             surveillanceAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// //           }`}>
// //             {/* Left Side - Content */}
// //             <div className="space-y-6">
// //               <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 animate-typewriter">
// //                 Smart Surveillance
// //               </h1>
// //               <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up">
// //                 When an alarm is triggered or unusual activity is seen on CCTV, our team at our Cloud Operations Center respond immediately. They assist in the situation and take the necessary steps to keep your site secure.
// //               </p>

// //               <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 animate-slide-in-left">
// //                 Reliable protection with peace of mind
// //               </h2>
// //               <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up">
// //                 That might mean having a warning through the camera system or sending a reliable response team to investigate. They will conduct emergency services and guide them to the location.
// //               </p>
// //               <p className="text-lg text-gray-600 leading-relaxed animate-fade-in-up">
// //                 We also respond to alerts from worker devices and trackers on valuable assets. Every alert is taken seriously. Your safety is our responsibility.
// //               </p>
// //             </div>

// //             {/* Right Side - Learn More Cards */}
// //             <div className="space-y-6">
// //               {[
// //                 { title: "24/7 Monitoring", desc: "Continuous surveillance with immediate response to any security breach." },
// //                 { title: "Cloud Operations", desc: "Advanced cloud-based monitoring with real-time alerts and reporting." },
// //                 { title: "Rapid Response", desc: "Immediate dispatch of security teams for any emergency situation." }
// //               ].map((card, index) => (
// //                 <div 
// //                   key={index}
// //                   className="border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white hover:border-orange-300 animate-card-float"
// //                   style={{ animationDelay: `${index * 200}ms` }}
// //                 >
// //                   <h3 className="text-xl font-semibold mb-3 text-gray-800">{card.title}</h3>
// //                   <p className="text-gray-600 mb-4">{card.desc}</p>
// //                   <button className="text-orange-600 font-semibold hover:text-orange-800 transition-all duration-300 transform hover:translate-x-2 flex items-center group">
// //                     Learn More 
// //                     <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Individual Service Sections */}
// //       {servicesData.map((service, index) => (
// //         <AnimatedServiceSection 
// //           key={service.id} 
// //           service={service} 
// //           reverse={index % 2 === 1} 
// //           index={index}
// //         />
// //       ))}

// //       {/* Call to Action Section */}
// //       <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
// //         <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
// //           <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-pulse">
// //             Ready to Secure Your Property?
// //           </h2>
// //           <p className="text-xl lg:text-2xl mb-8 opacity-90">
// //             Contact us today for a free security assessment and quote
// //           </p>
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg">
// //               Get Free Quote
// //             </button>
// //             <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:scale-105 text-lg">
// //               Call Now: (800) 779-7691
// //             </button>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // // Animated Service Section Component
// // function AnimatedServiceSection({ service, reverse = false, index }: { service: any, reverse?: boolean, index: number }) {
// //   const { elementRef, isVisible } = useScrollAnimation();

// //   return (
// //     <section ref={elementRef} className={`min-h-screen flex ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
// //       <div className={`flex flex-col lg:flex-row w-full ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        
// //         {/* Image Side - Full Height & Width with Animation */}
// //         <div className="lg:w-1/2 relative">
// //           <div className={`relative h-96 lg:h-full min-h-[400px] lg:min-h-screen transition-all duration-1000 transform ${
// //             isVisible 
// //               ? 'opacity-100 translate-x-0 scale-100' 
// //               : reverse 
// //                 ? 'opacity-0 translate-x-20 scale-95' 
// //                 : 'opacity-0 -translate-x-20 scale-95'
// //           }`}>
// //             <Image
// //               src={service.image}
// //               alt={service.title}
// //               fill
// //               sizes="(max-width: 1024px) 100vw, 50vw"
// //               className="object-cover transition-transform duration-700 hover:scale-105"
// //               priority={index <= 2}
// //               quality={85}
// //             />
// //             {/* Animated Stats Overlay */}
// //             <div className={`absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm p-4 lg:p-6 rounded-lg shadow-xl border border-gray-200 transition-all duration-700 ${
// //               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
// //             }`}>
// //               <div className="text-2xl lg:text-4xl font-bold text-orange-600 transform transition-all duration-500 hover:scale-110">
// //                 {service.stats}
// //               </div>
// //               <div className="text-xs lg:text-sm text-gray-600 mt-1 font-medium">
// //                 {service.statsText}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Content Side with Animation */}
// //         <div className="lg:w-1/2 flex items-center justify-center py-12 lg:py-0">
// //           <div className={`w-full max-w-2xl mx-auto px-6 lg:px-12 xl:px-16 space-y-6 lg:space-y-8 transition-all duration-1000 transform ${
// //             isVisible 
// //               ? 'opacity-100 translate-x-0' 
// //               : reverse 
// //                 ? 'opacity-0 -translate-x-20' 
// //                 : 'opacity-0 translate-x-20'
// //           }`}>
// //             <div className="flex items-center mb-6 transform transition-all duration-700 hover:translate-x-2">
// //               <span className="text-4xl lg:text-5xl mr-4 transform transition-all duration-500 hover:scale-110">
// //                 {service.icon}
// //               </span>
// //               <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 leading-tight">
// //                 {service.title}
// //               </h2>
// //             </div>
            
// //             <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
// //               {service.description}
// //             </p>

// //             <div className="border-l-4 border-orange-500 pl-6 py-3 transform transition-all duration-700 hover:border-orange-600 hover:translate-x-1">
// //               <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 leading-tight">
// //                 Comprehensive Protection<br />
// //                 <span className="text-orange-600">Tailored to Your Needs</span>
// //               </h3>
// //               <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
// //                 Our specialized approach ensures that every aspect of your security needs is covered 
// //                 with precision and professionalism.
// //               </p>
// //             </div>

// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
// //               {service.features && service.features.map((feature: string, featureIndex: number) => (
// //                 <div 
// //                   key={featureIndex} 
// //                   className={`flex items-start transform transition-all duration-500 ${
// //                     isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
// //                   }`}
// //                   style={{ transitionDelay: `${featureIndex * 100 + 300}ms` }}
// //                 >
// //                   <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1 transform transition-all duration-300 hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
// //                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// //                   </svg>
// //                   <span className="text-lg lg:text-xl text-gray-700 font-medium transform transition-all duration-300 hover:translate-x-1">
// //                     {feature}
// //                   </span>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="flex flex-col sm:flex-row gap-4 pt-8">
// //               <Link 
// //                 href={service.href}
// //                 className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-center text-lg shadow-lg group"
// //               >
// //                 <span className="flex items-center justify-center">
// //                   Learn More
// //                   <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
// //                 </span>
// //               </Link>
// //               <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:scale-105 group">
// //                 <span className="flex items-center justify-center">
// //                   Get Quote
// //                   <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
// //                 </span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";
// import { useState, useRef, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// // ==========================================
// // 1. DATA CONFIGURATION
// // ==========================================
// const servicesData = [
//   {
//     id: 1,
//     title: "High Rise Building Security",
//     image: "/Services/high-rise-security.jpg",
//     description: "Comprehensive security solutions for high-rise buildings tailored to unique structural requirements.",
//     features: ["24/7 Monitoring", "Access Control", "Emergency Response", "CCTV Surveillance"],
//     stats: "98%",
//     statsText: "Client Satisfaction",
//     href: "/services/high-rise-building-security"
//   },
//   {
//     id: 2,
//     title: "Fire Watch Security",
//     image: "/Services/fire-watch.jpg",
//     description: "Professional and compliant fire watch services to protect your property and assets around the clock.",
//     features: ["Fire Safety Checks", "Emergency Protocols", "Regular Reporting", "Compliance Monitoring"],
//     stats: "24/7",
//     statsText: "Coverage",
//     href: "/services/fire-watch-security"
//   },
//   {
//     id: 3,
//     title: "Hospital Security",
//     image: "/Services/hospital-security.jpg",
//     description: "Specialized security environments for healthcare facilities, ensuring safety for patients and staff.",
//     features: ["Patient Safety", "Access Control", "Emergency Response", "Visitor Management"],
//     stats: "500+",
//     statsText: "Facilities Protected",
//     href: "/services/hospital-security"
//   },
//   {
//     id: 4,
//     title: "Shopping Center Security",
//     image: "/Services/retail/herosection.jpeg",
//     description: "Dynamic retail security solutions designed for busy shopping centers and malls.",
//     features: ["Loss Prevention", "Crowd Management", "Parking Lot Patrol", "Incident Response"],
//     stats: "1M+",
//     statsText: "Daily Visitors",
//     href: "/services/shopping-center-security"
//   },
//   {
//     id: 5,
//     title: "Financial Institution Security",
//     image: "/Services/bank-security.jpg",
//     description: "High-level security services for banks and financial institutions, protecting assets and transactions.",
//     features: ["Asset Protection", "Access Control", "Alarm Response", "Transaction Security"],
//     stats: "100%",
//     statsText: "Compliance",
//     href: "/services/financial-institutions-security"
//   },
//   {
//     id: 6,
//     title: "Event Security",
//     image: "/Services/event-security/event.jpeg",
//     description: "Scalable security solutions for events of all sizes, from private gatherings to large concerts.",
//     features: ["Crowd Control", "Access Management", "Emergency Planning", "VIP Protection"],
//     stats: "5K+",
//     statsText: "Events Secured",
//     href: "/services/event-security"
//   },
//   {
//     id: 7,
//     title: "Construction Site Security",
//     image: "/Services/construction/construction.jpeg",
//     description: "Robust protection for active construction sites, securing valuable materials and heavy equipment.",
//     features: ["Theft Prevention", "Access Control", "Equipment Monitoring", "Perimeter Security"],
//     stats: "85%",
//     statsText: "Theft Reduction",
//     href: "/services/construction-security"
//   },
//   {
//     id: 8,
//     title: "Onsite Security 24/7",
//     image: "/Services/onsite-security/onsite.jpg",
//     description: "Industrial facility security solutions providing continuous presence and monitoring.",
//     features: ["Asset Protection", "Access Control", "Inventory Monitoring", "Safety Compliance"],
//     stats: "99%",
//     statsText: "Accuracy",
//     href: "/services/on-site-security"
//   },
//   {
//     id: 9,
//     title: "Mobile Patrol",
//     image: "/Services/mobile-partrol/mobile.jpg",
//     description: "Highly visible and proactive mobile patrol services covering large areas efficiently.",
//     features: ["Random Patrols", "Rapid Response", "Property Checks", "Incident Reporting"],
//     stats: "15min",
//     statsText: "Response Time",
//     href: "/services/mobile-patrol-security"
//   },
//   {
//     id: 10,
//     title: "Loss Prevention Security",
//     image: "/Services/loss-prevention.jpg",
//     description: "Strategic retail loss prevention focused on reducing shrinkage and improving profitability.",
//     features: ["Shoplifting Prevention", "Employee Training", "Inventory Control", "Investigation Services"],
//     stats: "60%",
//     statsText: "Loss Reduction",
//     href: "/services/loss-prevention-security"
//   },
//   {
//     id: 11,
//     title: "Executive Protection",
//     image: "/Services/executive-protection.jpg",
//     description: "Professional personal security services for executives, dignitaries, and high-profile individuals.",
//     features: ["Risk Assessment", "Travel Security", "Threat Management", "Discreet Protection"],
//     stats: "100%",
//     statsText: "Safety Record",
//     href: "/services/executive-protection"
//   },
// //  {
// //     id: 12,
// //     title: "Bodyguard Services",
// //     image: "/Services/bodyguard-services.jpg",
// //     description: "Personal protection services offering highly trained personnel for individual safety.",
// //     features: ["Close Protection", "Risk Assessment", "Emergency Response", "Discretion"],
// //     stats: "24/7",
// //     statsText: "Protection",
// //     href: "/services/bank-security"
// //   },
//   {
//     id: 16,
//     title: "School / Campus Security",
//     image: "/Services/campus-security.jpg",
//     description: "Creating safe educational environments for students, faculty, and staff on campuses.",
//     features: ["Access Control", "Emergency Protocols", "Student Safety", "Visitor Management"],
//     stats: "500+",
//     statsText: "Schools Protected",
//     href: "/services/school-campus-security"
//   },
//   {
//     id: 17,
//     title: "Unarmed Security",
//     image: "/Services/transport-security.jpg",
//     description: "Professional unarmed security services tailored for transportation hubs and public spaces.",
//     features: ["Crowd Control", "Baggage Screening", "Emergency Response", "Patrol Services"],
//     stats: "1M+",
//     statsText: "Travelers Daily",
//     href: "/services/unarmed-security"
//   },
//   {
//     id: 18,
//     title: "Armed Security",
//     image: "/Services/armed-security.jpg",
//     description: "Highly trained, licensed armed security personnel for high-risk situations and locations.",
//     features: ["Threat Assessment", "Crisis Response", "Weapon Proficiency", "Legal Compliance"],
//     stats: "100%",
//     statsText: "Certified",
//     href: "/services/armed-security"
//   },
// ];

// // ==========================================
// // 2. HOOKS
// // ==========================================
// const useScrollAnimation = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 } 
//     );

//     const currentElement = elementRef.current;
//     if (currentElement) {
//       observer.observe(currentElement);
//     }

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, []);

//   return { elementRef, isVisible };
// };

// // ==========================================
// // 3. MAIN COMPONENT
// // ==========================================
// export default function ServicesPage() {
//   const heroAnimation = useScrollAnimation();
//   const surveillanceAnimation = useScrollAnimation();

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
      
//       {/* ------------------------
//         HERO SECTION (VIDEO BG)
//         ------------------------
//       */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Video Background */}
//         <div className="absolute inset-0 z-0">
//           <video 
//             autoPlay 
//             loop 
//             muted 
//             playsInline 
//             className="w-full h-full object-cover"
//             // REPLACE THIS PATH WITH YOUR ACTUAL VIDEO
//             src="/service.mp4" 
//           >
//             <source src="/videos/hero-video.mp4" type="video/mp4" />
//           </video>
//           {/* Dark Overlay for Text Readability */}
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>

//         {/* Hero Content */}
//         <div ref={heroAnimation.elementRef} className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 text-center">
//           <div className={`space-y-6 transition-all duration-1000 transform ${
//             heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>
            
            
//             <h1 className="text-5xl lg:text-8xl font-bold text-white mb-6 leading-tight">
//               When We're There,<br />
//               <span className="text-orange-500">
//                 You Feel It.
//               </span>
//             </h1>


//             {/* <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
//               <button className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
//                 Explore Services
//               </button>
//               <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-lg">
//                 Get a Quote
//               </button>
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* ------------------------
//         SMART SURVEILLANCE
//         ------------------------
//       */}
//       <section className="py-24 bg-gray-50">
//         <div ref={surveillanceAnimation.elementRef} className="mx-auto max-w-7xl px-4 lg:px-8">
//           <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
//             surveillanceAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//           }`}>
//             <div className="space-y-8">
//               <div>
//                 <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Technology Driven</h4>
//                 <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                   Smart Surveillance & <br />Cloud Operations
//                 </h1>
//               </div>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 When an alarm is triggered or unusual activity is seen on CCTV, our team at our Cloud Operations Center respond immediately. We also respond to alerts from worker devices and trackers on valuable assets.
//               </p>
//             </div>

//             <div className="grid gap-6">
//               {[
//                 { title: "24/7 Monitoring", desc: "Continuous surveillance with immediate response." },
//                 { title: "Cloud Operations", desc: "Advanced cloud-based monitoring with real-time alerts." },
//                 { title: "Rapid Response", desc: "Immediate dispatch of security teams." }
//               ].map((card, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border-l-4 border-transparent hover:border-orange-500 transition-all duration-300 cursor-pointer"
//                 >
//                   <h3 className="text-xl font-bold text-gray-900 mb-1">{card.title}</h3>
//                   <p className="text-gray-500">{card.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ------------------------
//         SERVICE LIST LOOP
//         ------------------------
//       */}
//       <div className="bg-white">
//         {servicesData.map((service, index) => (
//           <AnimatedServiceSection 
//             key={service.id} 
//             service={service} 
//             reverse={index % 2 === 1} 
//             index={index}
//           />
//         ))}
//       </div>

//       {/* ------------------------
//         CTA SECTION
//         ------------------------
//       */}
//       <section className="py-24 bg-gray-900 relative">
//         <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
//           <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">
//             Ready to Secure Your Property?
//           </h2>
//           <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
//             Contact us today for a free security assessment. Our team is standing by 24/7.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="bg-orange-600 text-white px-12 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all duration-300 text-lg">
//               Get Free Quote
//             </button>
//             <button className="border-2 border-gray-600 text-white px-12 py-4 rounded-lg font-bold hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg">
//               Call Now: (800) 779-7691
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// // ==========================================
// // 4. ANIMATED COMPONENT (MATCHING UPLOADED IMAGE STYLE)
// // ==========================================
// function AnimatedServiceSection({ service, reverse = false, index }: { service: any, reverse?: boolean, index: number }) {
//   const { elementRef, isVisible } = useScrollAnimation();

//   return (
//     <section ref={elementRef} className={`py-12 lg:py-20 overflow-hidden ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">
//         <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
//           {/* === IMAGE SIDE === 
//               Matches the style of the image with the overlay card 
//           */}
//           <div className="w-full lg:w-1/2 relative group">
//             {/* Large Image Container */}
//             <div className={`relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 transform ${
//               isVisible 
//                 ? 'opacity-100 translate-x-0' 
//                 : reverse 
//                   ? 'opacity-0 translate-x-20' 
//                   : 'opacity-0 -translate-x-20'
//             }`}>
//               <Image
//                 src={service.image}
//                 alt={service.title}
//                 fill
//                 sizes="(max-width: 1024px) 100vw, 50vw"
//                 className="object-cover transition-transform duration-700 group-hover:scale-105"
//                 quality={90}
//               />
              
//               {/* Optional: Dark overlay on image for depth */}
//               <div className="absolute inset-0 bg-black/10"></div>

//               {/* === THE FLOATING STATS CARD (From your screenshot) === */}
//               <div className={`absolute bottom-8 left-0 z-20 transition-all duration-700 delay-300 ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               }`}>
//                  <div className="bg-white p-6 rounded-r-xl shadow-2xl border-l-[6px] border-orange-500 min-w-[200px]">
//                   <div className="text-4xl font-extrabold text-gray-900 leading-none mb-1">
//                     {service.stats}
//                   </div>
//                   <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">
//                     {service.statsText}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* === CONTENT SIDE === */}
//           <div className="w-full lg:w-1/2">
//             <div className={`space-y-6 transition-all duration-1000 transform ${
//               isVisible 
//                 ? 'opacity-100 translate-y-0' 
//                 : 'opacity-0 translate-y-10'
//             }`}>
              
//               <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                 {service.title}
//               </h2>
              
//               <p className="text-lg text-gray-600 leading-relaxed font-medium">
//                 {service.description}
//               </p>

//               {/* Bullet Points - Orange Dots Style */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 pt-2">
//                 {service.features && service.features.map((feature: string, featureIndex: number) => (
//                   <div key={featureIndex} className="flex items-center space-x-3">
//                     {/* The Orange Dot */}
//                     <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
//                     <span className="text-gray-700 font-semibold text-base">
//                       {feature}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {/* The "Learn More" Link Style */}
//               <div className="pt-6">
//                 <Link 
//                   href={service.href}
//                   className="inline-flex items-center text-orange-600 font-bold text-lg hover:text-orange-700 transition-colors group"
//                 >
//                   <span className="border-b border-orange-300 group-hover:border-orange-600 pb-0.5">
//                     Learn more about {service.title}
//                   </span>
//                   <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </Link>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// 1. DATA CONFIGURATION
// ==========================================
const servicesData = [
  {
    id: 1,
    title: "High Rise Building Security",
    image: "/Services/high-rise-security.jpg",
    description: "Comprehensive security solutions for high-rise buildings tailored to unique structural requirements.",
    features: ["24/7 Monitoring", "Access Control", "Emergency Response", "CCTV Surveillance"],
    stats: "98%",
    statsText: "Client Satisfaction",
    href: "/services/high-rise-building-security"
  },
  {
    id: 2,
    title: "Fire Watch Security",
    image: "/Services/fire-watch.jpg",
    description: "Professional and compliant fire watch services to protect your property and assets around the clock.",
    features: ["Fire Safety Checks", "Emergency Protocols", "Regular Reporting", "Compliance Monitoring"],
    stats: "24/7",
    statsText: "Coverage",
    href: "/services/fire-watch-security"
  },
  {
    id: 3,
    title: "Hospital Security",
    image: "/Services/hospital-security.jpg",
    description: "Specialized security environments for healthcare facilities, ensuring safety for patients and staff.",
    features: ["Patient Safety", "Access Control", "Emergency Response", "Visitor Management"],
    stats: "500+",
    statsText: "Facilities Protected",
    href: "/services/hospital-security"
  },
  {
    id: 4,
    title: "Shopping Center Security",
    image: "/Services/retail/herosection.jpeg",
    description: "Dynamic retail security solutions designed for busy shopping centers and malls.",
    features: ["Loss Prevention", "Crowd Management", "Parking Lot Patrol", "Incident Response"],
    stats: "1M+",
    statsText: "Daily Visitors",
    href: "/services/shopping-center-security"
  },
  {
    id: 5,
    title: "Financial Institution Security",
    image: "/Services/bank-security.jpg",
    description: "High-level security services for banks and financial institutions, protecting assets and transactions.",
    features: ["Asset Protection", "Access Control", "Alarm Response", "Transaction Security"],
    stats: "100%",
    statsText: "Compliance",
    href: "/services/financial-institutions-security"
  },
  {
    id: 6,
    title: "Event Security",
    image: "/Services/event-security/event.jpeg",
    description: "Scalable security solutions for events of all sizes, from private gatherings to large concerts.",
    features: ["Crowd Control", "Access Management", "Emergency Planning", "VIP Protection"],
    stats: "5K+",
    statsText: "Events Secured",
    href: "/services/event-security"
  },
  {
    id: 7,
    title: "Construction Site Security",
    image: "/Services/construction/construction.jpeg",
    description: "Robust protection for active construction sites, securing valuable materials and heavy equipment.",
    features: ["Theft Prevention", "Access Control", "Equipment Monitoring", "Perimeter Security"],
    stats: "85%",
    statsText: "Theft Reduction",
    href: "/services/construction-security"
  },
  {
    id: 8,
    title: "Onsite Security 24/7",
    image: "/Services/onsite-security/onsite.jpg",
    description: "Industrial facility security solutions providing continuous presence and monitoring.",
    features: ["Asset Protection", "Access Control", "Inventory Monitoring", "Safety Compliance"],
    stats: "99%",
    statsText: "Accuracy",
    href: "/services/on-site-security"
  },
  {
    id: 9,
    title: "Mobile Patrol",
    image: "/Services/mobile-partrol/mobile.jpg",
    description: "Highly visible and proactive mobile patrol services covering large areas efficiently.",
    features: ["Random Patrols", "Rapid Response", "Property Checks", "Incident Reporting"],
    stats: "15min",
    statsText: "Response Time",
    href: "/services/mobile-patrol-security"
  },
  {
    id: 10,
    title: "Loss Prevention Security",
    image: "/Services/loss-prevention.jpg",
    description: "Strategic retail loss prevention focused on reducing shrinkage and improving profitability.",
    features: ["Shoplifting Prevention", "Employee Training", "Inventory Control", "Investigation Services"],
    stats: "60%",
    statsText: "Loss Reduction",
    href: "/services/loss-prevention-security"
  },
  {
    id: 11,
    title: "Executive Protection",
    image: "/Services/executive-protection.jpg",
    description: "Professional personal security services for executives, dignitaries, and high-profile individuals.",
    features: ["Risk Assessment", "Travel Security", "Threat Management", "Discreet Protection"],
    stats: "100%",
    statsText: "Safety Record",
    href: "/services/executive-protection"
  },
  {
    id: 16,
    title: "School / Campus Security",
    image: "/Services/campus-security.jpg",
    description: "Creating safe educational environments for students, faculty, and staff on campuses.",
    features: ["Access Control", "Emergency Protocols", "Student Safety", "Visitor Management"],
    stats: "500+",
    statsText: "Schools Protected",
    href: "/services/school-campus-security"
  },
  {
    id: 17,
    title: "Unarmed Security",
    image: "/Services/transport-security.jpg",
    description: "Professional unarmed security services tailored for transportation hubs and public spaces.",
    features: ["Crowd Control", "Baggage Screening", "Emergency Response", "Patrol Services"],
    stats: "1M+",
    statsText: "Travelers Daily",
    href: "/services/unarmed-security"
  },
  {
    id: 18,
    title: "Armed Security",
    image: "/Services/armed-security.jpg",
    description: "Highly trained, licensed armed security personnel for high-risk situations and locations.",
    features: ["Threat Assessment", "Crisis Response", "Weapon Proficiency", "Legal Compliance"],
    stats: "100%",
    statsText: "Certified",
    href: "/services/armed-security"
  },
];

// ==========================================
// 2. HOOKS
// ==========================================
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } 
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { elementRef, isVisible };
};

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function ServicesPage() {
  const heroAnimation = useScrollAnimation();
  const surveillanceAnimation = useScrollAnimation();

  // Video Switching Logic
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      
      {/* ------------------------
        HERO SECTION (AUTO SWITCHING VIDEOS)
        ------------------------
      */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        
        {/* === VIDEO 1 === */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          currentVideoIndex === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            {/* REPLACE WITH YOUR FIRST VIDEO PATH */}
            <source src="/service.mp4" type="video/mp4" />
          </video>
        </div>

        {/* === VIDEO 2 === */}
        <div className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
          currentVideoIndex === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            {/* REPLACE WITH YOUR SECOND VIDEO PATH */}
            <source src="/Services/fire-security/fire-watch.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark Overlay (Always on top of videos) */}
        <div className="absolute inset-0 bg-black/60 z-20"></div>

        {/* Hero Content */}
        <div ref={heroAnimation.elementRef} className="relative z-30 w-full max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className={`space-y-6 transition-all duration-1000 transform ${
            heroAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h1 className="text-5xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              When We're There,<br />
              <span className="text-orange-500">
                You Feel It.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* ------------------------
        SMART SURVEILLANCE
        ------------------------
      */}
      <section className="py-24 bg-gray-50">
        <div ref={surveillanceAnimation.elementRef} className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            surveillanceAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-8">
              <div>
                <h4 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-2">Technology Driven</h4>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Smart Surveillance & <br />Cloud Operations
                </h1>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                When an alarm is triggered or unusual activity is seen on CCTV, our team at our Cloud Operations Center respond immediately. We also respond to alerts from worker devices and trackers on valuable assets.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { title: "24/7 Monitoring", desc: "Continuous surveillance with immediate response." },
                { title: "Cloud Operations", desc: "Advanced cloud-based monitoring with real-time alerts." },
                { title: "Rapid Response", desc: "Immediate dispatch of security teams." }
              ].map((card, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border-l-4 border-transparent hover:border-orange-500 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-gray-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------
        SERVICE LIST LOOP
        ------------------------
      */}
      <div className="bg-white">
        {servicesData.map((service, index) => (
          <AnimatedServiceSection 
            key={service.id} 
            service={service} 
            reverse={index % 2 === 1} 
            index={index}
          />
        ))}
      </div>

      {/* ------------------------
        CTA SECTION
        ------------------------
      */}
      <section className="py-24 bg-gray-900 relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Contact us today for a free security assessment. Our team is standing by 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-orange-600 text-white px-12 py-4 rounded-lg font-bold hover:bg-orange-700 transition-all duration-300 text-lg">
              Get Free Quote
            </button>
            <button className="border-2 border-gray-600 text-white px-12 py-4 rounded-lg font-bold hover:border-white hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg">
              Call Now: (800) 779-7691
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// 4. ANIMATED COMPONENT (MATCHING UPLOADED IMAGE STYLE)
// ==========================================
function AnimatedServiceSection({ service, reverse = false, index }: { service: any, reverse?: boolean, index: number }) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section ref={elementRef} className={`py-12 lg:py-20 overflow-hidden ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* === IMAGE SIDE === 
              Matches the style of the image with the overlay card 
          */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Large Image Container */}
            <div className={`relative h-[400px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : reverse 
                  ? 'opacity-0 translate-x-20' 
                  : 'opacity-0 -translate-x-20'
            }`}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={90}
              />
              
              {/* Optional: Dark overlay on image for depth */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* === THE FLOATING STATS CARD === */}
              <div className={`absolute bottom-8 left-0 z-20 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                  <div className="bg-white p-6 rounded-r-xl shadow-2xl border-l-[6px] border-orange-500 min-w-[200px]">
                  <div className="text-4xl font-extrabold text-gray-900 leading-none mb-1">
                    {service.stats}
                  </div>
                  <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">
                    {service.statsText}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* === CONTENT SIDE === */}
          <div className="w-full lg:w-1/2">
            <div className={`space-y-6 transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {service.title}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                {service.description}
              </p>

              {/* Bullet Points - Orange Dots Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 pt-2">
                {service.features && service.features.map((feature: string, featureIndex: number) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    {/* The Orange Dot */}
                    <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                    <span className="text-gray-700 font-semibold text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* The "Learn More" Link Style */}
              <div className="pt-6">
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-orange-600 font-bold text-lg hover:text-orange-700 transition-colors group"
                >
                  <span className="border-b border-orange-300 group-hover:border-orange-600 pb-0.5">
                    Learn more about {service.title}
                  </span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}