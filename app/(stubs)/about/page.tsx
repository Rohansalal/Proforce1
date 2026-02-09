// // 'use client';

// // import { useState, useEffect, useRef } from 'react';
// // import Image from 'next/image';
// // import { motion } from 'framer-motion';
// // import { 
// //   Shield, Target, Eye, Smartphone, UserCheck, ShieldCheck, 
// //   Headphones, MapPin, Clock, MessageSquare 
// // } from 'lucide-react';
// // import { Button } from "@/components/ui/button";

// // // --- SUB-COMPONENT: Optimized Video Background ---
// // // Handles the "flash of black" by showing an image first, then fading the video in.
// // const HeroVideo = () => {
// //   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
// //   const videoRef = useRef<HTMLVideoElement>(null);

// //   useEffect(() => {
// //     // Ensure video plays even if low-power mode tried to stop it initially
// //     if (videoRef.current) {
// //         videoRef.current.play().catch(error => {
// //             console.log("Autoplay prevented:", error);
// //         });
// //     }
// //   }, []);

// //   return (
// //     <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
// //       {/* 1. Static Poster Image (Loads Instantly) */}
// //       {/* Ensure you have a 'video-poster.jpg' in public folder for best results */}
// //       <Image 
// //         src="/video-poster.jpg" // Fallback: create a screenshot of your video
// //         alt="Security Background"
// //         fill
// //         className="object-cover opacity-40 scale-105"
// //         priority // FORCE load this image first
// //       />

// //       {/* 2. The Video (Fades in when ready) */}
// //       <video
// //         ref={videoRef}
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //         preload="auto" // Critical for faster start
// //         onLoadedData={() => setIsVideoLoaded(true)} // Trigger fade-in
// //         className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ease-in-out ${
// //           isVideoLoaded ? 'opacity-40' : 'opacity-0'
// //         }`}
// //       >
// //         <source src="/AboutUS.mp4" type="video/mp4" />
// //         {/* Add webm source if available for better performance on Chrome/Android */}
// //         {/* <source src="/AboutUS.webm" type="video/webm" /> */}
// //       </video>

// //       {/* 3. Gradient Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90 z-10" />
// //     </div>
// //   );
// // };

// // const AboutUs: React.FC = () => {
  
// //   // --- Animation Config ---
// //   const fadeInUp = {
// //     hidden: { opacity: 0, y: 30 },
// //     // removed string-based 'ease' to satisfy Transition typing; keep duration only
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// //   };

// //   const staggerContainer = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.15 }
// //     }
// //   };

// //   return (
// //     <main className="min-h-screen bg-white font-sans selection:bg-red-500/30">
      
// //       {/* ====================
// //           1. VIDEO HERO SECTION 
// //          ==================== */}
// //       <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        
// //         {/* Optimized Video Component */}
// //         <HeroVideo />
        
// //         {/* Hero Content */}
// //         <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
// //           <motion.div 
// //             initial="hidden" 
// //             whileInView="visible" 
// //             viewport={{ once: true }} 
// //             variants={staggerContainer}
// //             className="max-w-4xl mx-auto"
// //           >
// //             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
// //               <Shield className="w-3 h-3 fill-current" /> 
// //               Elite Security Operations
// //             </motion.div>
            
// //             <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] drop-shadow-2xl">
// //               A MODERN SECURITY FIRM <br />
// //               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
// //                 BUILT ON RESULTS
// //               </span>
// //             </motion.h1>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ====================
// //           2. WHO WE ARE (Split Layout)
// //          ==================== */}
// //       <section className="py-24 bg-white">
// //         <div className="container mx-auto px-4 lg:px-8">
// //           <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
// //             {/* Image Side */}
// //             <motion.div 
// //               initial={{ opacity: 0, x: -30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="w-full lg:w-1/2 relative"
// //             >
// //               <div className="absolute -inset-4 bg-red-600/5 rounded-3xl transform -rotate-2"></div>
// //               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
// //                 <Image
// //                   src="/security-guard-patrol-vehicle-at-night.jpg" 
// //                   alt="ProForce1 Security Team"
// //                   width={800}
// //                   height={600}
// //                   className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
// //                   priority // Load this image fast as it's "above the fold" on some screens
// //                 />
                
// //                 <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur shadow-2xl p-6 rounded-xl border-l-4 border-red-600 max-w-xs hidden md:block">
// //                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Established Standard</p>
// //                    <p className="text-2xl font-black text-slate-900">20+ Years</p>
// //                    <p className="text-sm font-medium text-slate-600">Of Operational Excellence</p>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Text Content */}
// //             <motion.div 
// //               initial={{ opacity: 0, x: 30 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.8 }}
// //               className="w-full lg:w-1/2"
// //             >
// //               <div className="flex items-center gap-3 mb-6">
// //                 <div className="w-12 h-1 bg-red-600"></div>
// //                 <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Who We Are</span>
// //               </div>
              
// //               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
// //                 Fully Licensed, Insured, & <br /><span className="text-red-600">Technology-Driven.</span>
// //               </h2>
              
// //               <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
// //                 <p>
// //                   Founded by <strong>Sammy Ahmadi</strong>, a security veteran with two decades of field and management experience, ProForce1 has evolved into a premier partner for industries ranging from high-end retail to critical infrastructure.
// //                 </p>
// //                 <p>
// //                   We specialize in delivering customized security solutions backed by real-time GPS tracking, instant digital reporting, and a team of officers who are trained to be both guardians and ambassadors for your brand.
// //                 </p>
// //               </div>

// //               <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-4">
// //                 <div className="p-3 bg-red-100 text-red-600 rounded-lg">
// //                   <MapPin className="w-6 h-6" />
// //                 </div>
// //                 <div>
// //                   <h4 className="font-bold text-slate-900 mb-1">Serving All of California</h4>
// //                   <p className="text-sm text-slate-500 leading-relaxed">
// //                     Los Angeles • Orange County • San Diego • Riverside • San Bernardino • Sacramento • San Francisco
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================
// //           3. THE PROFORCE DIFFERENCE
// //          ==================== */}
// //       <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
// //         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

// //         <div className="container mx-auto px-4 lg:px-8 relative z-10">
// //           <div className="text-center mb-20">
// //             <h2 className="text-3xl md:text-5xl font-black mb-6">
// //               WHAT MAKES US <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">DIFFERENT</span>
// //             </h2>
// //             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
// //               We operate as a strategic partner, not just a vendor. Here is how we raise the bar.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             <FeatureCard 
// //               icon={<Smartphone className="w-8 h-8" />}
// //               title="Digital Transparency"
// //               desc="Clients know exactly what is happening on their property. GPS tracking and time-coded photos eliminate guesswork."
// //             />
// //             <FeatureCard 
// //               icon={<UserCheck className="w-8 h-8" />}
// //               title="Vetted Officers"
// //               desc="Fully BSIS licensed, background checked, and trained in de-escalation. Our officers represent you with respect."
// //             />
// //             <FeatureCard 
// //               icon={<ShieldCheck className="w-8 h-8" />}
// //               title="Custom Protocols"
// //               desc="No cookie-cutter plans. We design specific post orders based on your site's unique risk factors."
// //             />
// //             <FeatureCard 
// //               icon={<Headphones className="w-8 h-8" />}
// //               title="24/7 Command"
// //               desc="You never have to wait for answers. Our dispatch team provides active monitoring and immediate support."
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================
// //           4. VISION & PROMISE 
// //          ==================== */}
// //       <section className="py-24 bg-slate-50 border-b border-gray-200">
// //         <div className="container mx-auto px-4 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
// //             <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
// //               <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
// //                 <Eye className="w-7 h-7" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
// //               <p className="text-slate-600 leading-relaxed">
// //                 To redefine modern security by combining human professionalism with advanced technology, ensuring safety with total transparency, accountability, and consistent quality.
// //               </p>
// //             </motion.div>

// //             <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
// //               <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
// //                 <Target className="w-7 h-7" />
// //               </div>
// //               <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Promise</h3>
// //               <ul className="space-y-4">
// //                 <PromiseItem icon={<Clock />} text="We show up on time, every time." />
// //                 <PromiseItem icon={<MessageSquare />} text="We communicate clearly and proactively." />
// //                 <PromiseItem icon={<ShieldCheck />} text="We protect your property as if it were our own." />
// //               </ul>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ====================
// //           5. CLIENT SUCCESS
// //          ==================== */}
// //       <section className="bg-red-700 text-white overflow-hidden">
// //         <div className="grid lg:grid-cols-2 min-h-[500px]">
          
// //           {/* Left: Image Side */}
// //           <div className="relative h-96 lg:h-auto w-full bg-slate-100">
// //             <Image
// //               src="/Guard.jpg" 
// //               alt="Professional ProForce1 Security Officer"
// //               fill
// //               className="object-cover" 
// //               sizes="(max-width: 1024px) 100vw, 50vw"
// //             />
// //           </div>

// //           {/* Right: Content Side */}
// //           <div className="p-12 lg:p-24 flex flex-col justify-center relative">
// //             {/* Decorative Quote Mark */}
// //             <div className="absolute top-12 left-12 text-red-800 opacity-30 pointer-events-none">
// //               <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.067 14.929 15.513C15.537 14.959 16.617 14.375 18.169 13.761C19.721 13.147 20.497 12.333 20.497 11.319C20.497 10.305 19.825 9.797 18.481 9.797L17.761 9.797C16.513 9.797 15.421 10.233 14.485 11.105C13.549 11.977 13.081 13.333 13.081 15.173L13.081 21L6.921 21L6.921 15.173C6.921 12.173 7.697 9.589 9.249 7.421C10.801 5.253 13.297 4.169 16.737 4.169L21 4.169L21 8.329L20.169 8.329C20.721 8.329 21.365 8.709 22.101 9.469C22.837 10.229 23.205 11.433 23.205 13.081C23.205 15.225 22.685 16.925 21.645 18.181C20.605 19.437 19.045 20.405 16.965 21.085L14.017 21Z" /></svg>
// //             </div>

// //             <h4 className="text-red-200 font-bold uppercase tracking-widest mb-6 text-sm relative z-10">
// //               Client Success Stories
// //             </h4>
            
// //             <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-8 relative z-10">
// //               "ProForce1 is a best-in-class service provider distinguished by its unmatched commitment to quality."
// //             </h2>
            
// //             <p className="text-red-100 text-lg mb-8 leading-relaxed font-light relative z-10 border-l-2 border-red-400 pl-6">
// //               Their dedication demonstrated professionalism and efficiency during our complex renovation project. The consulting services alone were worth every penny.
// //             </p>
            
// //             <div className="relative z-10 mb-12">
// //               <p className="font-bold text-white text-lg">James Carter</p>
// //               <p className="text-red-200">Chief Operations Officer, TechPlaza</p>
// //             </div>

// //             <div className="relative z-10">
// //               <Button className="bg-white text-red-700 hover:bg-slate-100 font-bold px-8 py-6 rounded-sm w-full sm:w-auto shadow-lg transition-transform hover:-translate-y-1">
// //                 Get In Touch
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //     </main>
// //   );
// // };

// // // --- Helper Components for Clean Code ---

// // const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
// //   <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-600/50 hover:bg-slate-800 transition-all duration-300">
// //     <div className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 inline-block p-3 bg-red-600/10 rounded-xl">
// //       {icon}
// //     </div>
// //     <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
// //     <p className="text-slate-400 text-sm leading-relaxed">
// //       {desc}
// //     </p>
// //   </div>
// // );

// // const PromiseItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
// //   <li className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg">
// //     <div className="text-green-600 flex-shrink-0">
// //       {icon}
// //     </div>
// //     <span>{text}</span>
// //   </li>
// // );

// // export default AboutUs;

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { 
//   Shield, Target, Eye, Smartphone, UserCheck, ShieldCheck, 
//   Headphones, MapPin, Clock, MessageSquare, Phone, Mail, Globe, CheckCircle2
// } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// // --- SUB-COMPONENT: Optimized Video Background ---
// const HeroVideo = () => {
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//         videoRef.current.play().catch(error => {
//             console.log("Autoplay prevented:", error);
//         });
//     }
//   }, []);

//   return (
//     <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
//       <Image 
//         src="/video-poster.jpg" 
//         alt="Security Background"
//         fill
//         className="object-cover opacity-40 scale-105"
//         priority 
//       />
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//         onLoadedData={() => setIsVideoLoaded(true)}
//         className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ease-in-out ${
//           isVideoLoaded ? 'opacity-40' : 'opacity-0'
//         }`}
//       >
//         <source src="/AboutUS.mp4" type="video/mp4" />
//       </video>
//       <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90 z-10" />
//     </div>
//   );
// };

// const AboutUs: React.FC = () => {
  
//   // --- Animation Config ---
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white font-sans selection:bg-red-500/30">
      
//       {/* ====================
//           1. HERO SECTION 
//           ==================== */}
//       <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
//         <HeroVideo />
        
//         <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
//           <motion.div 
//             initial="hidden" 
//             whileInView="visible" 
//             viewport={{ once: true }} 
//             variants={staggerContainer}
//             className="max-w-5xl mx-auto"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
//               <Shield className="w-3 h-3 fill-current" /> 
//               Proforce 1 Protection Services
//             </motion.div>
            
//             <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] drop-shadow-2xl">
//               BUILT ON EXPERIENCE, <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
//                 INTEGRITY & INNOVATION
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//               Safety is more than a service; it’s a responsibility. With over 20 years of experience, we protect people, property, and peace of mind with uncompromising quality.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ====================
//           2. WHO WE ARE (Split Layout)
//           ==================== */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
            
//             {/* Image Side */}
//             <motion.div 
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="w-full lg:w-1/2 relative sticky top-24"
//             >
//               <div className="absolute -inset-4 bg-red-600/5 rounded-3xl transform -rotate-2"></div>
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
//                 <Image
//                   src="/security-guard-patrol-vehicle-at-night.jpg" 
//                   alt="ProForce1 Security Team"
//                   width={800}
//                   height={600}
//                   className="w-full h-auto object-cover  transition-all duration-700"
//                 />

//               </div>
//             </motion.div>

//             {/* Text Content */}
//             <motion.div 
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="w-full lg:w-1/2"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-12 h-1 bg-red-600"></div>
//                 <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Who We Are</span>
//               </div>
              
//               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
//                 Fully Licensed, Insured, & <span className="text-red-600">Technology-Driven.</span>
//               </h2>
              
//               <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
//                 <p>
//                   Proforce 1 Protection Services serves clients throughout the entire state of California. From small businesses to large corporate operations, our mission has always remained the same: <strong>To protect people, property, and peace of mind with uncompromising quality.</strong>
//                 </p>
//                 <p>
//                   We have grown into a trusted partner for dozens of industries, from construction and hospitality to retail centers, luxury brands, and private events. We specialize in delivering customized security solutions backed by modern technology, real-time communication, and a team of highly trained officers ready to respond at a moment’s notice.
//                 </p>
//               </div>

//               {/* Service Areas */}
//               <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-100">
//                 <div className="flex items-center gap-2 mb-4">
//                   <MapPin className="text-red-600 w-5 h-5" />
//                   <h4 className="font-bold text-slate-900">Serving All of California</h4>
//                 </div>
//                 <div className="flex flex-wrap gap-2">
//                   {['Los Angeles', 'Orange County', 'San Diego', 'Riverside', 'San Bernardino', 'Sacramento', 'San Jose', 'Oakland', 'San Francisco'].map((city) => (
//                     <span key={city} className="text-xs font-semibold bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600">
//                       {city}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* ====================
//           3. WHAT MAKES US DIFFERENT
//           ==================== */}
//       <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

//         <div className="container mx-auto px-4 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-5xl font-black mb-6">
//               WHAT MAKES US <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">DIFFERENT</span>
//             </h2>
//             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
//               We operate as a professional service partner — not just a vendor.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
//             {/* Feature 1 */}
//             <FeatureCard 
//               icon={<Smartphone className="w-8 h-8" />}
//               title="Modern Approach"
//               desc="We use advanced digital tools to elevate transparency. Every visit and patrol is documented with:"
//               list={['GPS Stamps', 'Time-coded Photos', 'Digital Activity Logs', 'Instant Email Reports']}
//             />

//             {/* Feature 2 */}
//             <FeatureCard 
//               icon={<UserCheck className="w-8 h-8" />}
//               title="Professional Officers"
//               desc="We take pride in supplying officers who represent your business with respect. Our team is:"
//               list={['Fully BSIS Licensed', 'Background Checked', 'Trained in De-escalation', 'Uniformed & Professional']}
//             />

//             {/* Feature 3 */}
//             <FeatureCard 
//               icon={<ShieldCheck className="w-8 h-8" />}
//               title="Customized Solutions"
//               desc="No two properties are the same. We design solutions based on risk, traffic, and layout."
//               list={['Armed or Unarmed', 'Mobile Patrol Units', 'Event Security', 'Fire Watch Services']}
//             />

//             {/* Feature 4 */}
//             <FeatureCard 
//               icon={<Headphones className="w-8 h-8" />}
//               title="Real-Time Comms"
//               desc="Clients never have to wonder what’s happening. We provide immediate notifications."
//               list={['24/7 Dispatch', 'Direct Mgmt Access', 'Daily Summaries', 'Fast Response']}
//             />
//           </div>
//         </div>
//       </section>

//       {/* ====================
//           4. VISION & PROMISE 
//           ==================== */}
//       <section className="py-24 bg-slate-50 border-b border-gray-200">
//         <div className="container mx-auto px-4 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
//             <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-center">
//               <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
//                 <Eye className="w-7 h-7" />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
//               <p className="text-slate-600 leading-relaxed text-lg">
//                 To redefine what modern security looks like by combining human professionalism with advanced technology, ensuring safety with transparency, accountability, and consistent quality.
//               </p>
//             </motion.div>

//             <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
//               <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
//                 <Target className="w-7 h-7" />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Promise to You</h3>
//               <div className="space-y-4">
//                 <PromiseItem icon={<Clock />} text="We show up on time" />
//                 <PromiseItem icon={<MessageSquare />} text="We communicate clearly" />
//                 <PromiseItem icon={<UserCheck />} text="We act professionally" />
//                 <PromiseItem icon={<CheckCircle2 />} text="We solve problems" />
//                 <PromiseItem icon={<ShieldCheck />} text="We protect your property as if it were our own" />
//               </div>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* ====================
//           5. THE FUTURE / CTA
//           ==================== */}
//       <section className="relative bg-red-700 text-white overflow-hidden">
//         <div className="grid lg:grid-cols-2 min-h-[500px]">
          
//           {/* Left: Image Side */}
//           <div className="relative h-80 lg:h-auto w-full bg-slate-900">
//             <Image
//               src="/Guard.jpg" 
//               alt="Professional ProForce1 Security Officer"
//               fill
//               className="object-cover opacity-80" 
//               sizes="(max-width: 1024px) 100vw, 50vw"
//             />
//              <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply"></div>
//           </div>

//           {/* Right: Content Side */}
//           <div className="p-12 lg:p-24 flex flex-col justify-center relative">
//             <h4 className="text-red-200 font-bold uppercase tracking-widest mb-4 text-sm relative z-10">
//               Ready to serve
//             </h4>
            
//             <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-6 relative z-10">
//               The Future of Security, <br/> Delivered Today.
//             </h2>
            
//             <p className="text-red-50 text-lg mb-10 leading-relaxed font-light relative z-10 max-w-lg">
//               Whether you manage a commercial plaza, a construction site, a hotel, or a private event — Proforce 1 Protection Services is equipped to provide the protection you need and the professionalism you expect.
//             </p>
            
//             <div className="relative z-10 space-y-4">
//               <div className="text-xl font-bold mb-4">Let’s Protect What Matters Most</div>
              
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <a href="tel:(800) 779-7691">
//                     <Button className="bg-white text-red-700 hover:bg-slate-100 font-bold px-6 py-6 rounded-md shadow-lg flex items-center gap-2 w-full sm:w-auto">
//                         <Phone className="w-5 h-5" /> (800) 779-7691
//                     </Button>
//                 </a>
//                 <a href="mailto:info@proforce1protection.com">
//                     <Button variant="outline" className="border-2 border-red-200 text-red-900 bg-transparent hover:bg-red-800 hover:text-white font-bold px-6 py-6 rounded-md flex items-center gap-2 w-full sm:w-auto">
//                         <Mail className="w-5 h-5" /> Email Us
//                     </Button>
//                 </a>
//               </div>

//               <div className="mt-6 flex items-center gap-2 text-red-200 text-sm">
//                 <Globe className="w-4 h-4" /> www.proforce1protection.com
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// };

// // --- Helper Components ---

// const FeatureCard = ({ icon, title, desc, list }: { icon: React.ReactNode, title: string, desc: string, list?: string[] }) => (
//   <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-600/50 hover:bg-slate-800 transition-all duration-300 flex flex-col h-full">
//     <div className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 inline-block p-3 bg-red-600/10 rounded-xl w-fit">
//       {icon}
//     </div>
//     <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
//     <p className="text-slate-400 text-sm leading-relaxed mb-4">
//       {desc}
//     </p>
//     {list && (
//       <ul className="mt-auto space-y-2">
//         {list.map((item, i) => (
//           <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
//             <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
//             {item}
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );

// const PromiseItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
//   <div className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
//     <div className="text-green-600 flex-shrink-0">
//       {icon}
//     </div>
//     <span>{text}</span>
//   </div>
// );

// export default AboutUs;


'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Shield, Target, Eye, Smartphone, UserCheck, ShieldCheck, 
  Headphones, MapPin, Clock, MessageSquare, Phone, Mail, Globe, CheckCircle2, Award, Star
} from 'lucide-react';
import { Button } from "@/components/ui/button";

// --- SUB-COMPONENT: Optimized Video Background ---
const HeroVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Autoplay was prevented:", error);
        });
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
      <Image 
        src="/security-guard-patrol-vehicle-at-night.jpg" 
        alt="Security Background"
        fill
        className="object-cover opacity-40 scale-105"
        priority 
      />
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ease-in-out ${
          isVideoLoaded ? 'opacity-40' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="/AboutUS.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90 z-10" />
    </div>
  );
};

const AboutUs: React.FC = () => {
  
  // --- Animation Config ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-red-500/30">
      
      {/* ====================
          1. HERO SECTION 
          ==================== */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        {/* Inline hero video (plays AboutUs.mp4) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
          <Image 
        src="/video-poster.jpg"
        alt="Security Background"
        fill
        className="object-cover opacity-40 scale-105"
        priority
          />
          <video
        className="absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ease-in-out opacity-40"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
          >
        <source src="/AboutUs.mp4" type="video/mp4" />
        Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90 z-10" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
          <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
          >
        {/* UPDATED: Badge now highlights the award */}
        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 backdrop-blur-md border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
          <Award className="w-3 h-3 fill-current" /> 
          Voted Best of BusinessRate 2025
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] drop-shadow-2xl">
          BUILT ON EXPERIENCE, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
            INTEGRITY & INNOVATION
          </span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Safety is more than a service; it’s a responsibility. With over 20 years of experience, we protect people, property, and peace of mind with uncompromising quality.
        </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ====================
          2. WHO WE ARE (Split Layout)
          ==================== */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-red-600/5 rounded-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/security-guard-patrol-vehicle-at-night.jpg" 
                  alt="ProForce1 Security Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-all duration-700"
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-red-600"></div>
                <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Who We Are</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Fully Licensed, Insured, & <span className="text-red-600">Technology-Driven.</span>
              </h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Proforce 1 Protection Services serves clients throughout the entire state of California. From small businesses to large corporate operations, our mission has always remained the same: <strong>To protect people, property, and peace of mind with uncompromising quality.</strong>
                </p>
                <p>
                  We have grown into a trusted partner for dozens of industries, from construction and hospitality to retail centers. We specialize in delivering customized security solutions backed by real-time communication.
                </p>
              </div>

              {/* Service Areas */}
              <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="text-red-600 w-5 h-5" />
                  <h4 className="font-bold text-slate-900">Serving All of California</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Los Angeles', 'Orange County', 'San Diego', 'Riverside', 'San Bernardino', 'Sacramento', 'San Francisco'].map((city) => (
                    <span key={city} className="text-xs font-semibold bg-white border border-slate-200 px-3 py-1 rounded-full text-slate-600">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================
          NEW SECTION: AWARD SPOTLIGHT 
          (Inserted here to validate "Who We Are")
          ==================== */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/20 blur-[100px] rounded-full"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left: Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-900/30 border border-yellow-600/30 text-yellow-500 text-xs font-bold uppercase tracking-wider mb-6">
                <Star className="w-3 h-3 fill-current" /> Excellence Recognized
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Awarded <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">Best of 2025</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                We are honored to be recognized by <strong>BusinessRate</strong> as the premier Security Guard Service in Anaheim. This award reflects our unwavering commitment to professionalism, rapid response times, and client satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">Top Rated</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Local Services</div>
                 </div>
                 <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="text-2xl font-bold text-white mb-1">Ranked #1</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Reliability</div>
                 </div>
              </div>
            </motion.div>

            {/* Right: The Plaque Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:w-5/12 relative group"
            >
              {/* Glow Effect behind the plaque */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              {/* The Image Container */}
              <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-2xl bg-black">
                <Image 
                  // 🔴 IMPORTANT: Rename your uploaded image to 'award-plaque.jpg' and put in public folder
                  src="/award-plaque.jpg" 
                  alt="Proforce 1 Best of BusinessRate 2025 Award"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ====================
          3. WHAT MAKES US DIFFERENT
          ==================== */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              WHAT MAKES US <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">DIFFERENT</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We operate as a professional service partner — not just a vendor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1 */}
            <FeatureCard 
              icon={<Smartphone className="w-8 h-8" />}
              title="Modern Approach"
              desc="We use advanced digital tools to elevate transparency. Every visit and patrol is documented with:"
              list={['GPS Stamps', 'Time-coded Photos', 'Digital Activity Logs', 'Instant Email Reports']}
            />

            {/* Feature 2 */}
            <FeatureCard 
              icon={<UserCheck className="w-8 h-8" />}
              title="Professional Officers"
              desc="We take pride in supplying officers who represent your business with respect. Our team is:"
              list={['Fully BSIS Licensed', 'Background Checked', 'Trained in De-escalation', 'Uniformed & Professional']}
            />

            {/* Feature 3 */}
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Customized Solutions"
              desc="No two properties are the same. We design solutions based on risk, traffic, and layout."
              list={['Armed or Unarmed', 'Mobile Patrol Units', 'Event Security', 'Fire Watch Services']}
            />

            {/* Feature 4 */}
            <FeatureCard 
              icon={<Headphones className="w-8 h-8" />}
              title="Real-Time Comms"
              desc="Clients never have to wonder what’s happening. We provide immediate notifications."
              list={['24/7 Dispatch', 'Direct Mgmt Access', 'Daily Summaries', 'Fast Response']}
            />
          </div>
        </div>
      </section>

      {/* ====================
          4. VISION & PROMISE 
          ==================== */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-center">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                To redefine what modern security looks like by combining human professionalism with advanced technology, ensuring safety with transparency, accountability, and consistent quality.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Promise to You</h3>
              <div className="space-y-4">
                <PromiseItem icon={<Clock />} text="We show up on time" />
                <PromiseItem icon={<MessageSquare />} text="We communicate clearly" />
                <PromiseItem icon={<UserCheck />} text="We act professionally" />
                <PromiseItem icon={<CheckCircle2 />} text="We solve problems" />
                <PromiseItem icon={<ShieldCheck />} text="We protect your property as if it were our own" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ====================
          5. THE FUTURE / CTA
          ==================== */}
      <section className="relative bg-red-700 text-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          
          {/* Left: Image Side */}
          <div className="relative h-80 lg:h-auto w-full bg-slate-900">
            <Image
              src="/Guard.jpg" 
              alt="Professional ProForce1 Security Officer"
              fill
              className="object-cover opacity-80" 
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
             <div className="absolute inset-0 bg-red-900/30 mix-blend-multiply"></div>
          </div>

          {/* Right: Content Side */}
          <div className="p-12 lg:p-24 flex flex-col justify-center relative">
            <h4 className="text-red-200 font-bold uppercase tracking-widest mb-4 text-sm relative z-10">
              Ready to serve
            </h4>
            
            <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-6 relative z-10">
              The Future of Security, <br/> Delivered Today.
            </h2>
            
            <p className="text-red-50 text-lg mb-10 leading-relaxed font-light relative z-10 max-w-lg">
              Whether you manage a commercial plaza, a construction site, a hotel, or a private event — Proforce 1 Protection Services is equipped to provide the protection you need and the professionalism you expect.
            </p>
            
            <div className="relative z-10 space-y-4">
              <div className="text-xl font-bold mb-4">Let’s Protect What Matters Most</div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:(800) 779-7691">
                    <Button className="bg-white text-red-700 hover:bg-slate-100 font-bold px-6 py-6 rounded-md shadow-lg flex items-center gap-2 w-full sm:w-auto">
                        <Phone className="w-5 h-5" /> (800) 779-7691
                    </Button>
                </a>
                <a href="mailto:info@proforce1protection.com">
                    <Button variant="outline" className="border-2 border-red-200 text-red-900 bg-transparent hover:bg-red-800 hover:text-white font-bold px-6 py-6 rounded-md flex items-center gap-2 w-full sm:w-auto">
                        <Mail className="w-5 h-5" /> Email Us
                    </Button>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-red-200 text-sm">
                <Globe className="w-4 h-4" /> www.proforce1protection.com
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

// --- Helper Components ---

const FeatureCard = ({ icon, title, desc, list }: { icon: React.ReactNode, title: string, desc: string, list?: string[] }) => (
  <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-600/50 hover:bg-slate-800 transition-all duration-300 flex flex-col h-full">
    <div className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 inline-block p-3 bg-red-600/10 rounded-xl w-fit">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-4">
      {desc}
    </p>
    {list && (
      <ul className="mt-auto space-y-2">
        {list.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const PromiseItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <div className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
    <div className="text-green-600 flex-shrink-0">
      {icon}
    </div>  
    <span>{text}</span>
  </div>
);

export default AboutUs;