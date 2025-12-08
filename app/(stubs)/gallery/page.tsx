// "use client";

// import React, { useState, useRef, useEffect } from 'react';

// interface MediaItem {
//   id: number;
//   type: 'image' | 'video';
//   src: string;
//   title: string;
//   description: string;
//   category: 'surveillance' | 'patrol' | 'access' | 'technology' | 'team';
// }

// const SecurityGallery: React.FC = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);
//   const videoRefs = useRef<{[key: number]: HTMLVideoElement | null}>({});
//   const videoPlayState = useRef<{[key: number]: boolean}>({});

//   const mediaItems: MediaItem[] = [
//     {
//       id: 1,
//       type: 'image',
//       src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%231e293b"/><rect x="150" y="100" width="100" height="100" fill="%233b82f6" opacity="0.8"/><circle cx="200" cy="150" r="30" fill="%23ef4444"/><path d="M180,130 L220,130 L220,170 L180,170 Z" fill="none" stroke="%23ffffff" stroke-width="2"/></svg>',
//       title: 'Advanced Surveillance System',
//       description: '24/7 monitoring with AI-powered threat detection',
//       category: 'surveillance'
//     },
//     {
//       id: 2,
//       type: 'video',
//       src: '/videos/access-control.mp4',
//       title: 'Patrol Operations',
//       description: 'Our security teams in action across various locations',
//       category: 'patrol'
//     },
//     {
//       id: 3,
//       type: 'image',
//       src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%230f172a"/><rect x="100" y="50" width="200" height="200" rx="10" fill="%233b82f6" opacity="0.7"/><circle cx="200" cy="150" r="40" fill="%2310b981"/><path d="M180,140 L190,150 L220,120" fill="none" stroke="%23ffffff" stroke-width="3"/></svg>',
//       title: 'Access Control Solutions',
//       description: 'Secure entry systems with biometric verification',
//       category: 'access'
//     },
//     {
//       id: 4,
//       type: 'image',
//       src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%231e293b"/><rect x="50" y="50" width="300" height="200" fill="%234f46e5" opacity="0.8"/><circle cx="200" cy="150" r="60" fill="%23f59e0b"/><path d="M170,130 L230,130 L230,170 L170,170 Z" fill="%238b5cf6"/></svg>',
//       title: 'Security Technology Hub',
//       description: 'State-of-the-art command and control center',
//       category: 'technology'
//     },
//     {
//       id: 5,
//       type: 'video',
//       src: '/api/placeholder/400/300',
//       title: 'Team Training Session',
//       description: 'Continuous professional development for our guards',
//       category: 'team'
//     },
//     {
//       id: 6,
//       type: 'image',
//       src: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%230f172a"/><rect x="80" y="80" width="240" height="140" fill="%23ef4444" opacity="0.7"/><circle cx="200" cy="150" r="50" fill="%233b82f6"/><path d="M180,130 L220,130 L220,170 L180,170 Z" fill="%2310b981"/></svg>',
//       title: 'Emergency Response',
//       description: 'Rapid deployment teams for critical situations',
//       category: 'patrol'
//     }
//   ];

//   const categories = [
//     { id: 'all', name: 'All Media' },
//     { id: 'surveillance', name: 'Surveillance' },
//     { id: 'patrol', name: 'Patrol' },
//     { id: 'access', name: 'Access Control' },
//     { id: 'technology', name: 'Technology' },
//     { id: 'team', name: 'Our Team' }
//   ];

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const filteredMedia = activeFilter === 'all' 
//     ? mediaItems 
//     : mediaItems.filter(item => item.category === activeFilter);

//   const handleMediaClick = (media: MediaItem) => {
//     setSelectedMedia(media);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedMedia(null);
//   };

//   const handleVideoHover = async (id: number, isHovering: boolean) => {
//     const video = videoRefs.current[id];
//     if (!video) return;

//     try {
//       if (isHovering) {
//         videoPlayState.current[id] = true;
//         await video.play();
//       } else {
//         videoPlayState.current[id] = false;
//         video.pause();
//         video.currentTime = 0;
//       }
//     } catch (error) {
//       // Ignore play interruption errors
//       console.log('Video play/pause handled');
//     }
//   };

//   const getAnimationDelay = (index: number) => {
//     if (!isMounted) return {};
//     return { animationDelay: `${index * 100}ms` };
//   };

//   return (
//     <section className="relative py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
//       <div className="absolute top-0 left-0 w-72 h-72 bg-white-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent mb-4">
//             Security Operations Gallery
//           </h2>
//           <p className="text-xl text-slate-300 max-w-3xl mx-auto">
//             Explore our comprehensive security solutions through images and videos showcasing our technology, team, and operations
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveFilter(category.id)}
//               className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
//                 activeFilter === category.id
//                   ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/25'
//                   : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 backdrop-blur-sm'
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
//           {filteredMedia.map((item, index) => (
//             <div
//               key={item.id}
//               className={`group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 transform hover:-translate-y-2 security-gallery-item ${
//                 isMounted ? 'animate-fade-in-up' : ''
//               }`}
//               style={getAnimationDelay(index)}
//               onMouseEnter={() => item.type === 'video' && handleVideoHover(item.id, true)}
//               onMouseLeave={() => item.type === 'video' && handleVideoHover(item.id, false)}
//               onClick={() => handleMediaClick(item)}
//             >
//               {/* Media Container */}
//               <div className="relative aspect-video overflow-hidden bg-slate-900">
//                 {item.type === 'image' ? (
//                   <img
//                     src={item.src}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                 ) : (
//                   <video
//                     ref={el => {
//                       videoRefs.current[item.id] = el;
//                     }}
//                     muted
//                     loop
//                     playsInline
//                     className="w-full h-full object-cover"
//                     poster="/api/placeholder/400/300"
//                     preload="metadata"
//                   >
//                     <source src={item.src} type="video/mp4" />
//                   </video>
//                 )}
                
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
//                     <p className="text-slate-300 text-sm">{item.description}</p>
//                   </div>
//                 </div>

//                 {/* Play Button for Videos */}
//                 {item.type === 'video' && (
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 bg-orange-600/90 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
//                       <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M8 5v14l11-7z"/>
//                       </svg>
//                     </div>
//                   </div>
//                 )}

//                 {/* Category Badge */}
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full capitalize">
//                     {item.category}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-16">
//           <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
//             <h3 className="text-2xl font-bold text-white mb-4">Ready to Secure Your Premises?</h3>
//             <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
//               Contact us today for a comprehensive security assessment and customized protection plan.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4">
//               <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
//                 Request Consultation
//               </button>
//               <button className="px-8 py-3 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
//                 View All Services
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && selectedMedia && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//           <div className="relative max-w-4xl w-full bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 z-10 w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white transition-colors duration-200"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
            
//             <div className="relative aspect-video bg-slate-900">
//               {selectedMedia.type === 'image' ? (
//                 <img
//                   src={selectedMedia.src}
//                   alt={selectedMedia.title}
//                   className="w-full h-full object-contain"
//                 />
//               ) : (
//                 <video
//                   controls
//                   autoPlay
//                   className="w-full h-full object-contain"
//                 >
//                   <source src={selectedMedia.src} type="video/mp4" />
//                 </video>
//               )}
//             </div>
            
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.title}</h3>
//               <p className="text-slate-300 mb-4">{selectedMedia.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="px-3 py-1 bg-orange-600 text-white text-sm font-medium rounded-full capitalize">
//                   {selectedMedia.category}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default SecurityGallery;



"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, X, Play, ShieldCheck, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

// --- Configuration Data ---
// NOTE: Ensure these files exist in your folder: /public/gallery/
const categories = ["All", "Patrol", "Events", "K-9 Unit", "Technology", "Training"]

type GalleryItem = {
  id: number
  type: 'image' | 'video'
  src: string
  category: string
  title: string
  size: 'small' | 'large' | 'tall'
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    src: "/gallery/patrol-car-night.jpg", // Make sure this file exists in public/gallery folder
    category: "Patrol",
    title: "Night Patrol Unit",
    size: "large"
  },
  {
    id: 2,
    type: 'video', 
    src: "/gallery/videos/access-control.mp4", // Example video file
    category: "Technology",
    title: "Aerial Surveillance",
    size: "small"
  },
  {
    id: 3,
    type: 'image',
    src: "/gallery/command-center-1.jpg",
    category: "K-9 Unit",
    title: "K-9 Detection Team",
    size: "tall"
  },
  {
    id: 4,
    type: 'image',
    src: "/gallery/command-center-1.jpg",
    category: "Technology",
    title: "Command Center Ops",
    size: "small"
  },
  {
    id: 5,
    type: 'video',
    src: "/gallery/videos/patrol-demo.mp4",
    category: "Training",
    title: "Tactical Defense",
    size: "large"
  },
  {
    id: 6,
    type: 'video',
    src: "/gallery/videos/fire-watch.mp4",
    category: "Patrol",
    title: "Perimeter Check",
    size: "small"
  },
]

export default function Gallery() {
  const [filter, setFilter] = useState("All")
  const [selectedMedia, setSelectedMedia] = useState<GalleryItem | null>(null)

  const filteredItems = galleryItems.filter(
    (item) => filter === "All" || item.category === filter
  )

  return (
    <section className="py-12 bg-white min-h-screen relative overflow-hidden">
      
      {/* Page Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ 
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* --- HERO HEADER WITH BACKGROUND IMAGE --- */}
        <div className="relative w-full rounded-3xl overflow-hidden mb-16 shadow-2xl">
            
            {/* 1. The Background Image for the Header */}
            {/* Replace '/gallery/header-bg.jpg' with your actual image path */}
            <div className="absolute inset-0">
                <img 
                    src="/gallery/security-operations-bg.jpg" 
                    alt="Security Operations Background" 
                    className="w-full h-full object-cover"
                />
                {/* 2. Dark Gradient Overlay (Crucial for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40" />
            </div>

            {/* 3. The Header Content */}
            <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 bg-red-600 rounded-lg">
                            <ShieldCheck className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-bold tracking-widest text-red-500 uppercase bg-black/50 px-3 py-1 rounded-full border border-white/10">
                            Operational Visuals
                        </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                        MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">GALLERY</span>
                    </h2>
                    
                    <p className="text-slate-300 mt-6 text-lg leading-relaxed max-w-lg">
                        Explore our operations. From advanced surveillance technology to our specialized K-9 units, witness the standards we uphold.
                    </p>
                </div>

                {/* Filter Buttons (Inside the Hero Image) */}
                <div className="hidden md:flex flex-col items-end gap-3">
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Filter Categories</span>
                    <div className="flex flex-wrap gap-2 justify-end max-w-md">
                        {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                            "px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 border border-white/10 backdrop-blur-md",
                            filter === cat
                                ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-900/50"
                                : "bg-black/40 text-slate-300 hover:bg-white/10 hover:text-white"
                            )}
                        >
                            {cat}
                        </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Mobile Filter (Shown only on small screens below the image) */}
        <div className="md:hidden w-full mb-8">
            <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="w-full bg-slate-100 border-2 border-slate-200 text-slate-900 pl-12 pr-4 py-4 rounded-xl font-bold focus:outline-none focus:border-red-600 appearance-none"
                >
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>
        </div>

        {/* --- Gallery Grid --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
                key={item.id}
                className={cn(
                  "relative group rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500",
                  item.size === "large" && "md:col-span-2",
                  item.size === "tall" && "md:row-span-2"
                )}
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === 'video' ? (
                  <div className="relative w-full h-full bg-slate-100">
                    <video 
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      muted
                      loop
                      playsInline
                      autoPlay 
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg">
                        <Play className="w-5 h-5 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-slate-200">
                    <img
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}
                
                {/* Overlay & Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    <div>
                      <span className="inline-block px-2 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider rounded mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl font-bold leading-none">{item.title}</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- Lightbox Modal --- */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm"
              onClick={() => setSelectedMedia(null)}
            >
              <div 
                className="relative w-full max-w-6xl h-auto max-h-[90vh] bg-black rounded-xl overflow-hidden shadow-2xl flex flex-col" 
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-red-600 rounded-full text-white transition-colors border border-white/20"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative w-full h-[60vh] md:h-[75vh] bg-black flex items-center justify-center">
                  {selectedMedia.type === 'video' ? (
                    <video 
                      src={selectedMedia.src}
                      className="w-full h-full object-contain"
                      controls
                      autoPlay
                    />
                  ) : (
                    <img
                      src={selectedMedia.src}
                      alt={selectedMedia.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                <div className="p-6 bg-white border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{selectedMedia.title}</h3>
                      <p className="text-slate-500 mt-1">Category: {selectedMedia.category}</p>
                    </div>
                    <button className="hidden md:block px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-red-600 transition-colors">
                      Contact About This Service
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}