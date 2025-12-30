'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, X, Camera, Filter, Maximize2, 
  ChevronRight, ShieldCheck, MapPin, Download
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { id } from 'date-fns/locale';

// --- 1. REUSED SUB-COMPONENT: Optimized Video Background ---
// Kept exactly the same to ensure visual consistency with other pages
const HeroVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.play().catch(error => {
            console.log("Autoplay prevented:", error);
        });
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
      <Image 
        src="/video-poster.jpg" 
        alt="Security Background"
        fill
        className="object-cover opacity-40 scale-105"
        priority 
      />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-1000 ease-in-out ${
          isVideoLoaded ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <source src="/AboutUS.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90 z-10" />
    </div>
  );
};

// --- MOCK DATA ---
const GALLERY_ITEMS = [
  { id: 1, type: 'image', category: 'Patrol', src: '/Services/mobile-partrol/WhatsApp Image 2025-12-04 at 9.22.25 AM (1).jpeg', title: 'Mobile Patrol Unit', location: 'Los Angeles, CA' },
  { id: 2, type: 'video', category: 'Events', src: '/hero/event-security.jpg', title: 'VIP Event Access', location: 'San Diego, CA' },
  { id: 3, type: 'image', category: 'Construction', src: '/hero/construction-security.jpg', title: 'Command security', location: 'Irvine, CA' },
  { id: 4, type: 'image', category: 'Patrol', src: '/hero/patrol-services.jpg', title: 'K-9 Unit Patrol', location: 'Sacramento, CA' },
  { id: 5, type: 'image', category: 'Team', src: '/gallery/team-meeting.jpg', title: 'Shift Briefing', location: 'San Francisco, CA' },
  { id: 6, type: 'image', category: 'Technology', src: '/Services/fire-security/bottom.jpeg', title: 'Aerial Surveillance', location: 'Riverside, CA' },
  { id: 7, type: 'image', category: 'Onsite', src: '/gallery/onsite.jpg', title: 'Crowd Control', location: 'Anaheim, CA' },
  { id: 8, type: 'image', category: 'Team', src: '/blogimage/expansion-map.jpg', title: 'Armed Officer', location: 'Beverly Hills, CA' },
  { id: 9, type: 'image', category: 'Fire', src: '/Services/fire-security/lower.jpeg', title: 'Emergency Response', location: 'Orange County, CA' },
  { id: 10, type: 'image', category: 'Events', src: '/hero/access-control.jpg', title: 'Armed Security', location: 'Beverly Hills, CA' },
  { id: 11, type: 'image', category: 'Security', src: '/blogimage/guard-post.jpg', title: 'Security Operations', location: 'Los Angeles, CA' },
  { id: 12, type: 'image', category: 'Security', src: '/gallery/command-center-1.jpg', title: 'Command Center', location: 'Los Angeles, CA' },
  { id: 13, type: 'image', category: 'onsite', src: '/Services/retail/herosection.jpeg', title: 'Shopping Security', location: 'Los Angeles, CA' },
  { id: 14, type: 'image', category: 'Security', src: '/Services/loss/footer.jpeg', title: 'Retail Security', location: 'Los Angeles, CA' },
  { id: 15, type: 'image', category: 'Security', src: '/Services/hospital-security/hospital.jpeg', title: 'Hospital Security', location: 'Los Angeles, CA' },
  { id: 16, type: 'image', category: 'Fire', src: '/hero/executive-protection.jpg', title: 'executive security', location: 'San Jose, CA' },
  { id: 17, type: 'image', category: 'Technology', src: '/Services/high-rise-building-security/footer.jpeg', title: 'Security Tech Setup', location: 'Fresno, CA' },
  { id: 18, type: 'image', category: 'Construction', src: '/Services/construction/WhatsApp Image 2025-12-04 at 9.29.40 AM (2).jpeg', title: 'Construction Site Security', location: 'Oakland, CA' },
  { id: 19, type: 'image', category: 'Patrol', src: '/gallery/patrol-car-night.jpg', title: 'Mobile Patrol Unit', location: 'Los Angeles, CA' },
  { id: 20, type: 'image', category: 'Events', src: '/hero/event-security.jpg', title: 'VIP Event Access', location: 'San Diego, CA' },

];

const CATEGORIES = ['All', 'Patrol', 'Events', 'Technology', 'Team'];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  // Filter Logic
  const filteredItems = activeCategory === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  // --- Animation Config ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-red-500/30">
      
      {/* ====================
          1. HERO SECTION (Consistent Design)
          ==================== */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        <HeroVideo />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
              <Camera className="w-3 h-3 fill-current" /> 
              Media & Evidence
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] drop-shadow-2xl">
              OPERATIONS IN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                ACTION
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Transparency is key. Explore our fleet, technology, and officers in the field protecting assets across California.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ====================
          2. GALLERY SECTION
          ==================== */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-1 bg-red-600"></div>
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Our Portfolio</h2>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
               {CATEGORIES.map((cat) => (
                 <button
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                     activeCategory === cat 
                       ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/20' 
                       : 'bg-white text-slate-600 border-slate-200 hover:border-red-600/30 hover:text-red-600'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                     // "Different Approach": Using span for visual interest
                     item.id === 1 || item.id === 6 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Card Container - mimic FeatureCard style but for images */}
                  <div className="h-full w-full relative bg-slate-900 border border-slate-200 group-hover:border-red-600/50 transition-colors duration-500">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                       <div className="flex items-center justify-between">
                         <div>
                           <div className="text-red-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                             {item.type === 'video' ? <Play className="w-3 h-3 fill-current" /> : <Camera className="w-3 h-3" />}
                             {item.category}
                           </div>
                           <h3 className="text-white font-bold text-lg md:text-xl">{item.title}</h3>
                           <div className="flex items-center gap-1 text-slate-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                              <MapPin className="w-3 h-3" /> {item.location}
                           </div>
                         </div>
                         
                         <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                           <Maximize2 className="w-5 h-5" />
                         </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ====================
          3. LIGHTBOX MODAL
          ==================== */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/60 to-transparent">
                 <span className="text-white/80 font-mono text-sm border border-white/20 px-3 py-1 rounded-full bg-black/20">
                    ProForce1 // {selectedItem.category}
                 </span>
                 <button 
                   onClick={() => setSelectedItem(null)}
                   className="p-2 bg-white/10 hover:bg-red-600 rounded-full text-white transition-colors"
                 >
                   <X className="w-5 h-5" />
                 </button>
              </div>

              {/* Content */}
              <div className="aspect-video w-full bg-black relative flex items-center justify-center">
                 {selectedItem.type === 'video' ? (
                   <div className="w-full h-full flex items-center justify-center bg-slate-800">
                     <Play className="w-20 h-20 text-white/50" />
                     {/* Video Player would go here */}
                     <span className="absolute bottom-4 text-white text-sm">Video Preview</span>
                   </div>
                 ) : (
                   <Image
                     src={selectedItem.src}
                     alt={selectedItem.title}
                     fill
                     className="object-contain"
                   />
                 )}
              </div>

              {/* Footer */}
              <div className="p-8 bg-slate-900">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
                    <p className="text-slate-400">Captured in {selectedItem.location}</p>
                  </div>
                  <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 gap-2">
                    <Download className="w-4 h-4" /> Download Asset
                  </Button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ====================
          4. CTA SECTION (Reused Style)
          ==================== */}
      <section className="relative bg-slate-950 text-white border-t border-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <div className="w-16 h-16 mx-auto bg-red-600/10 rounded-2xl flex items-center justify-center mb-8 text-red-600 border border-red-600/20">
               <ShieldCheck className="w-8 h-8" />
             </div>
             
             <h2 className="text-3xl md:text-5xl font-black mb-6">
               Need Customized Security?
             </h2>
             <p className="text-slate-400 text-lg mb-10 leading-relaxed">
               Our gallery shows our capabilities, but our service defines our reputation. Contact us to discuss a tailored security plan for your property.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 rounded-lg shadow-lg shadow-red-900/20 text-lg">
                   Request a Quote
                </Button>
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 px-8 py-6 rounded-lg text-lg flex items-center gap-2">
                   View Client Testimonials <ChevronRight className="w-4 h-4" />
                </Button>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Gallery;

// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Play, X, Camera, Filter, Maximize2, 
//   ChevronRight, ShieldCheck, MapPin, Download
// } from 'lucide-react';
// import { Button } from "@/components/ui/button";

// // --- 1. FIXED: Optimized Video Background ---
// const HeroVideo = () => {
//   const [isVideoLoaded, setIsVideoLoaded] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play().catch(error => {
//         console.log("Autoplay prevented:", error);
//       });
//     }
//   }, []);

//   return (
//     <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
//       {/* FALLBACK IMAGE */}
//       <Image 
//         src="/video-poster.jpg" 
//         alt="Security Background"
//         fill
//         className="object-cover opacity-50"
//         priority 
//       />

//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="metadata"
//         onLoadedData={() => setIsVideoLoaded(true)}
//         className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//           isVideoLoaded ? 'opacity-60' : 'opacity-0'
//         }`}
//       >
//         <source src="/AboutUS.mp4" type="video/mp4" />
//       </video>

//       <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90 z-10" />
//     </div>
//   );
// };

// // --- FIXED: Simplified and corrected GALLERY_ITEMS ---
// // Using placeholder images for demonstration
// // Replace these with your actual image paths
// const GALLERY_ITEMS = [
//   // Images - Make sure these paths exist in your public folder
//   { id: 1, type: 'image', category: 'Patrol', src: '/images/patrol-car.jpg', title: 'Mobile Patrol Unit', location: 'Los Angeles, CA' },
//   { id: 2, type: 'image', category: 'Events', src: '/images/event-security.jpg', title: 'VIP Event Access', location: 'San Diego, CA' },
//   { id: 3, type: 'image', category: 'Construction', src: '/images/construction.jpg', title: 'Command Security', location: 'Irvine, CA' },
//   { id: 4, type: 'image', category: 'Patrol', src: '/images/k9-unit.jpg', title: 'K-9 Unit Patrol', location: 'Sacramento, CA' },
//   { id: 5, type: 'image', category: 'Team', src: '/images/team.jpg', title: 'Shift Briefing', location: 'San Francisco, CA' },
//   { id: 6, type: 'video', category: 'Technology', src: '/videos/patrol-demo.mp4', thumbnail: '/images/video-thumb-1.jpg', title: 'Aerial Surveillance', location: 'Riverside, CA' },
//   { id: 7, type: 'image', category: 'Onsite', src: '/images/crowd-control.jpg', title: 'Crowd Control', location: 'Anaheim, CA' },
//   { id: 8, type: 'image', category: 'Team', src: '/images/armed-officer.jpg', title: 'Armed Officer', location: 'Beverly Hills, CA' },
//   { id: 9, type: 'video', category: 'Events', src: '/videos/emergency-response.mp4', thumbnail: '/images/video-thumb-2.jpg', title: 'Emergency Response', location: 'Orange County, CA' },
//   { id: 10, type: 'video', category: 'Events', src: '/videos/armed-security.mp4', thumbnail: '/images/video-thumb-3.jpg', title: 'Armed Security', location: 'Beverly Hills, CA' },
//   { id: 11, type: 'video', category: 'Security', src: '/videos/security.mp4', thumbnail: '/images/video-thumb-4.jpg', title: 'Security Operations', location: 'Los Angeles, CA' },
//   { id: 12, type: 'image', category: 'Security', src: '/images/command-center.jpg', title: 'Command Center', location: 'Los Angeles, CA' },
//   { id: 13, type: 'image', category: 'Security', src: '/images/shopping.jpg', title: 'Shopping Security', location: 'Los Angeles, CA' },
//   { id: 14, type: 'image', category: 'Security', src: '/images/retail.jpg', title: 'Retail Security', location: 'Los Angeles, CA' },
//   { id: 15, type: 'image', category: 'Security', src: '/images/hospital.jpg', title: 'Hospital Security', location: 'Los Angeles, CA' },
// ];

// const CATEGORIES = ['All', 'Patrol', 'Events', 'Security', 'Team', 'Technology', 'Construction', 'Onsite'];

// // Placeholder image component for broken images
// const PlaceholderImage = ({ className = "" }) => (
//   <div className={`bg-gradient-to-br from-slate-800 to-slate-900 ${className} flex items-center justify-center`}>
//     <Camera className="w-12 h-12 text-slate-600" />
//   </div>
// );

// const Gallery: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [selectedItem, setSelectedItem] = useState<any>(null);
//   const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

//   const filteredItems = activeCategory === 'All' 
//     ? GALLERY_ITEMS 
//     : GALLERY_ITEMS.filter(item => item.category === activeCategory);

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const handleImageError = (id: number) => {
//     setImageErrors(prev => new Set(prev).add(id));
//   };

//   return (
//     <main className="min-h-screen bg-slate-50 font-sans selection:bg-red-500/30">
      
//       {/* HERO SECTION */}
//       <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
//         <HeroVideo />
        
//         <div className="container mx-auto px-4 lg:px-8 relative z-20 text-center">
//           <motion.div 
//             initial="hidden" 
//             whileInView="visible" 
//             viewport={{ once: true }} 
//             className="max-w-4xl mx-auto"
//           >
//             <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
//               <Camera className="w-3 h-3" /> 
//               Media & Evidence
//             </motion.div>
            
//             <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] drop-shadow-2xl">
//               OPERATIONS IN <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
//                 ACTION
//               </span>
//             </motion.h1>

//             <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
//               Transparency is key. Explore our fleet, technology, and officers in the field protecting assets across California.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* GALLERY SECTION - FIXED */}
//       <section className="py-20 bg-slate-50">
//         <div className="container mx-auto px-4 lg:px-8">
          
//           {/* Filter Bar */}
//           <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-1 bg-red-600"></div>
//               <div>
//                 <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wide">Our Portfolio</h2>
//                 <p className="text-slate-600 text-sm mt-1">
//                   {filteredItems.length} items in {activeCategory === 'All' ? 'all categories' : activeCategory}
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 justify-center">
//               {CATEGORIES.map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={() => setActiveCategory(cat)}
//                   className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
//                     activeCategory === cat 
//                       ? 'bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/20' 
//                       : 'bg-white text-slate-600 border-slate-200 hover:border-red-600/30 hover:text-red-600'
//                   }`}
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Grid Layout - FIXED WITH ERROR HANDLING */}
//           {filteredItems.length === 0 ? (
//             <div className="text-center py-20">
//               <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-slate-700">No items found</h3>
//               <p className="text-slate-500 mt-2">Try selecting a different category</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {filteredItems.map((item) => {
//                 // Determine what to show: thumbnail for videos, image for images
//                 const showPlaceholder = imageErrors.has(item.id);
//                 const imageSrc = item.type === 'video' ? (item.thumbnail || '/images/video-thumbnail.jpg') : item.src;

//                 return (
//                   <div
//                     key={item.id}
//                     className={`group relative overflow-hidden rounded-xl cursor-pointer bg-white border border-slate-200 hover:border-red-600/50 transition-all duration-300 shadow-md hover:shadow-xl ${
//                       item.id === 1 || item.id === 6 ? 'lg:col-span-2' : ''
//                     }`}
//                     onClick={() => setSelectedItem(item)}
//                   >
//                     {/* Media Container */}
//                     <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
//                       {showPlaceholder ? (
//                         <PlaceholderImage className="w-full h-full" />
//                       ) : (
//                         <>
//                           {/* Video Play Icon Overlay */}
//                           {item.type === 'video' && (
//                             <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 group-hover:bg-black/30 transition-colors">
//                               <div className="w-14 h-14 bg-red-600/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
//                                 <Play className="w-6 h-6 text-white fill-current ml-1" />
//                               </div>
//                             </div>
//                           )}
                          
//                           {/* Image - Fixed with proper error handling */}
//                           <Image
//                             src={imageSrc}
//                             alt={item.title}
//                             fill
//                             className="object-cover transition-transform duration-700 group-hover:scale-110"
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                             onError={() => handleImageError(item.id)}
//                           />
//                         </>
//                       )}
//                     </div>

//                     {/* Info Overlay */}
//                     <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
//                       <div className="flex items-start justify-between">
//                         <div>
//                           <div className="flex items-center gap-2 mb-1">
//                             <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded ${
//                               item.type === 'video' 
//                                 ? 'bg-blue-600/20 text-blue-600' 
//                                 : 'bg-red-600/20 text-red-600'
//                             }`}>
//                               {item.type === 'video' ? (
//                                 <>
//                                   <Play className="w-3 h-3" />
//                                   Video
//                                 </>
//                               ) : (
//                                 <>
//                                   <Camera className="w-3 h-3" />
//                                   Photo
//                                 </>
//                               )}
//                             </span>
//                             <span className="text-xs text-white/80 bg-black/40 px-2 py-1 rounded">
//                               {item.category}
//                             </span>
//                           </div>
//                           <h3 className="text-white font-bold text-lg line-clamp-1">{item.title}</h3>
//                           <div className="flex items-center gap-1 text-white/70 text-sm mt-1">
//                             <MapPin className="w-3 h-3" />
//                             {item.location}
//                           </div>
//                         </div>
//                         <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
//                           <Maximize2 className="w-4 h-4" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* LIGHTBOX MODAL */}
//       <AnimatePresence>
//         {selectedItem && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
//             onClick={() => setSelectedItem(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               className="relative w-full max-w-6xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Header */}
//               <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-gradient-to-b from-black/80 to-transparent">
//                 <div className="flex items-center gap-3">
//                   <span className="text-white/80 font-medium text-sm">
//                     {selectedItem.category}
//                   </span>
//                   <span className="text-white/60 text-sm">
//                     {selectedItem.type === 'video' ? 'Video' : 'Image'}
//                   </span>
//                 </div>
//                 <button 
//                   onClick={() => setSelectedItem(null)}
//                   className="p-2 bg-white/10 hover:bg-red-600 rounded-full text-white transition-colors"
//                 >
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>

//               {/* Content */}
//               <div className="w-full bg-black relative aspect-video">
//                 {selectedItem.type === 'video' ? (
//                   <video 
//                     key={selectedItem.src}
//                     className="w-full h-full object-contain"
//                     controls
//                     autoPlay
//                     playsInline
//                   >
//                     <source src={selectedItem.src} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 ) : (
//                   <Image
//                     src={selectedItem.src}
//                     alt={selectedItem.title}
//                     fill
//                     className="object-contain"
//                     sizes="100vw"
//                     onError={() => handleImageError(selectedItem.id)}
//                   />
//                 )}
//               </div>

//               {/* Footer */}
//               <div className="p-6 bg-slate-900 border-t border-slate-800">
//                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//                   <div>
//                     <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
//                     <div className="flex items-center gap-2 text-slate-400">
//                       <MapPin className="w-4 h-4" />
//                       <span>{selectedItem.location}</span>
//                     </div>
//                   </div>
//                   <Button 
//                     variant="outline" 
//                     className="border-slate-700 text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 gap-2"
//                     onClick={() => {
//                       // Create download link
//                       const link = document.createElement('a');
//                       link.href = selectedItem.src;
//                       link.download = selectedItem.title.replace(/\s+/g, '-').toLowerCase() + 
//                                       (selectedItem.type === 'video' ? '.mp4' : '.jpg');
//                       link.click();
//                     }}
//                   >
//                     <Download className="w-4 h-4" /> Download
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* CTA SECTION */}
//       <section className="relative bg-slate-950 text-white border-t border-slate-800 overflow-hidden">
//         <div className="absolute inset-0 opacity-10" style={{ 
//           backgroundImage: 'radial-gradient(#ef4444 1px, transparent 1px)', 
//           backgroundSize: '40px 40px' 
//         }}></div>
        
//         <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="w-16 h-16 mx-auto bg-red-600/10 rounded-2xl flex items-center justify-center mb-8 text-red-600 border border-red-600/20">
//               <ShieldCheck className="w-8 h-8" />
//             </div>
            
//             <h2 className="text-3xl md:text-5xl font-black mb-6">
//               Need Customized Security?
//             </h2>
//             <p className="text-slate-400 text-lg mb-10 leading-relaxed">
//               Our gallery shows our capabilities, but our service defines our reputation. 
//               Contact us to discuss a tailored security plan for your property.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 rounded-lg shadow-lg shadow-red-900/20 text-lg">
//                 Request a Quote
//               </Button>
//               <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800 px-8 py-6 rounded-lg text-lg flex items-center gap-2">
//                 View Client Testimonials <ChevronRight className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Gallery;