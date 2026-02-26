'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play, X, Camera, Maximize2,
  ShieldCheck, MapPin, Phone
} from 'lucide-react';
import { Button } from "@/components/ui/button";

// --- 1. REUSED SUB-COMPONENT: Optimized Video Background ---
const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-105 opacity-40 transition-opacity duration-700"
      >
        <source src="/AboutUs.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/50 to-slate-900/90 z-10" />
    </div>
  );
};

// --- MOCK DATA ---
const GALLERY_ITEMS = [
  { id: 1, type: 'image', category: 'Patrol', src: '/Services/mobile-partrol/WhatsApp Image 2025-12-04 at 9.22.25 AM (1).jpeg', title: 'Mobile Patrol Unit', location: 'Los Angeles, CA' },
  { id: 2, type: 'image', category: 'Events', src: '/Services/event-security/event.jpeg', title: 'VIP Event Access', location: 'San Diego, CA' },
  { id: 3, type: 'image', category: 'Construction', src: '/hero/construction-security.jpg', title: 'Command security', location: 'Irvine, CA' },
  { id: 4, type: 'image', category: 'Patrol', src: '/gallery/k-9.png', title: 'K-9 Unit Patrol', location: 'Sacramento, CA' },
  { id: 5, type: 'image', category: 'Team', src: '/gallery/team-meeting.jpg', title: 'Shift Briefing', location: 'San Francisco, CA' },
  { id: 6, type: 'image', category: 'Technology', src: '/Services/fire-security/bottom.jpeg', title: 'Aerial Surveillance', location: 'Riverside, CA' },
  { id: 7, type: 'image', category: 'Onsite', src: '/gallery/onsite.jpg', title: 'Crowd Control', location: 'Anaheim, CA' },
  { id: 8, type: 'image', category: 'Team', src: '/blogimage/expansion-map.jpg', title: 'Armed Officer', location: 'Beverly Hills, CA' },
  { id: 9, type: 'image', category: 'Fire', src: '/Services/fire-security/lower.jpeg', title: 'Emergency Response', location: 'Orange County, CA' },
  { id: 10, type: 'image', category: 'Events', src: '/hero/access-control.jpg', title: 'Armed Security', location: 'Beverly Hills, CA' },
  { id: 11, type: 'image', category: 'Security', src: '/blogimage/guard-post.jpg', title: 'Security Operations', location: 'Los Angeles, CA' },
  { id: 12, type: 'image', category: 'Security', src: '/gallery/command-center-1.jpg', title: 'Command Center', location: 'Los Angeles, CA' },
  { id: 13, type: 'image', category: 'Onsite', src: '/Services/retail/herosection.jpeg', title: 'Shopping Security', location: 'Los Angeles, CA' },
  { id: 14, type: 'image', category: 'Security', src: '/Services/loss/footer.jpeg', title: 'Retail Security', location: 'Los Angeles, CA' },
  { id: 15, type: 'image', category: 'Security', src: '/Services/hospital-security/hospital.jpeg', title: 'Hospital Security', location: 'Los Angeles, CA' },
  { id: 16, type: 'image', category: 'Fire', src: '/gallery/executive security.png', title: 'executive security', location: 'San Jose, CA' },
  { id: 17, type: 'image', category: 'Technology', src: '/Services/high-rise-building-security/footer.jpeg', title: 'Security Tech Setup', location: 'Fresno, CA' },
  { id: 18, type: 'image', category: 'Construction', src: '/Services/construction/WhatsApp Image 2025-12-04 at 9.29.40 AM (2).jpeg', title: 'Construction Site Security', location: 'Oakland, CA' },
  { id: 19, type: 'image', category: 'Patrol', src: '/gallery/mobile partol unit.jpeg', title: 'Mobile Patrol Unit', location: 'Los Angeles, CA' },
  { id: 20, type: 'image', category: 'Events', src: '/gallery/VIP.png', title: 'VIP Event Access', location: 'San Diego, CA' },
];

const CATEGORIES = ['All', 'Patrol', 'Events', 'Construction', 'Fire', 'Technology', 'Team', 'Security', 'Onsite'];

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
      <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
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
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === cat
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
                  {/* REMOVED DOWNLOAD ASSET BUTTON HERE */}
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
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 rounded-lg shadow-lg shadow-red-900/20 text-lg"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/contact';
                  }
                }}
              >
                Request a Quote
              </Button>

              {/* MODIFIED BUTTON: Changed from Testimonials to Phone Number */}
              <Button
                variant="ghost"
                className="text-slate-300 hover:text-white hover:bg-slate-800 px-8 py-6 rounded-lg text-lg flex items-center gap-2"
                onClick={() => window.location.href = 'tel:8007797691'}
              >
                <Phone className="w-5 h-5" /> (800) 779-7691
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Gallery;
