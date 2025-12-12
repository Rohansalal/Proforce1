'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Shield, Target, Eye, Smartphone, UserCheck, ShieldCheck, 
  Headphones, CheckCircle2, MapPin, Clock, MessageSquare, PlayCircle 
} from 'lucide-react';
import { Button } from "@/components/ui/button";

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
          1. VIDEO HERO SECTION 
         ==================== */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/video-poster.jpg"
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            <source src="/AboutUS.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90" />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-red-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-2xl">
              <Shield className="w-3 h-3 fill-current" /> 
              Elite Security Operations
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-[1.1] drop-shadow-lg">
              A MODERN SECURITY FIRM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                BUILT ON RESULTS
              </span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ====================
          2. WHO WE ARE (Split Layout)
         ==================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-red-600/5 rounded-3xl transform -rotate-2"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <Image
                  src="/security-guard-patrol-vehicle-at-night.jpg" 
                  alt="ProForce1 Security Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur shadow-2xl p-6 rounded-xl border-l-4 border-red-600 max-w-xs hidden md:block">
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Established Standard</p>
                   <p className="text-2xl font-black text-slate-900">20+ Years</p>
                   <p className="text-sm font-medium text-slate-600">Of Operational Excellence</p>
                </div>
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
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Fully Licensed, Insured, & <br /><span className="text-red-600">Technology-Driven.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded by <strong>Sammy Ahmadi</strong>, a security veteran with two decades of field and management experience, ProForce1 has evolved into a premier partner for industries ranging from high-end retail to critical infrastructure.
                </p>
                <p>
                  We specialize in delivering customized security solutions backed by real-time GPS tracking, instant digital reporting, and a team of officers who are trained to be both guardians and ambassadors for your brand.
                </p>
              </div>

              <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-4">
                <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Serving All of California</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Los Angeles • Orange County • San Diego • Riverside • San Bernardino • Sacramento • San Francisco
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================
          3. THE PROFORCE DIFFERENCE
         ==================== */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              WHAT MAKES US <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">DIFFERENT</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We operate as a strategic partner, not just a vendor. Here is how we raise the bar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Smartphone className="w-8 h-8" />}
              title="Digital Transparency"
              desc="Clients know exactly what is happening on their property. GPS tracking and time-coded photos eliminate guesswork."
            />
            <FeatureCard 
              icon={<UserCheck className="w-8 h-8" />}
              title="Vetted Officers"
              desc="Fully BSIS licensed, background checked, and trained in de-escalation. Our officers represent you with respect."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8" />}
              title="Custom Protocols"
              desc="No cookie-cutter plans. We design specific post orders based on your site's unique risk factors."
            />
            <FeatureCard 
              icon={<Headphones className="w-8 h-8" />}
              title="24/7 Command"
              desc="You never have to wait for answers. Our dispatch team provides active monitoring and immediate support."
            />
          </div>
        </div>
      </section>

      {/* ====================
          4. VISION & PROMISE 
         ==================== */}
      <section className="py-24 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To redefine modern security by combining human professionalism with advanced technology, ensuring safety with total transparency, accountability, and consistent quality.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Promise</h3>
              <ul className="space-y-4">
                <PromiseItem icon={<Clock />} text="We show up on time, every time." />
                <PromiseItem icon={<MessageSquare />} text="We communicate clearly and proactively." />
                <PromiseItem icon={<ShieldCheck />} text="We protect your property as if it were our own." />
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================
          5. CLIENT SUCCESS (Fixed - Clear Image)
         ==================== */}
      <section className="bg-red-700 text-white overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          
          {/* Left: Image Side - REMOVED DARK OVERLAYS */}
          <div className="relative h-96 lg:h-auto w-full bg-slate-100">
            <Image
              src="/Guard.jpg" 
              alt="Professional ProForce1 Security Officer"
              fill
              className="object-cover" // Removed opacity and mix-blend for a clean look
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: Content Side */}
          <div className="p-12 lg:p-24 flex flex-col justify-center relative">
            {/* Decorative Quote Mark */}
            <div className="absolute top-12 left-12 text-red-800 opacity-30 pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 16.067 14.929 15.513C15.537 14.959 16.617 14.375 18.169 13.761C19.721 13.147 20.497 12.333 20.497 11.319C20.497 10.305 19.825 9.797 18.481 9.797L17.761 9.797C16.513 9.797 15.421 10.233 14.485 11.105C13.549 11.977 13.081 13.333 13.081 15.173L13.081 21L6.921 21L6.921 15.173C6.921 12.173 7.697 9.589 9.249 7.421C10.801 5.253 13.297 4.169 16.737 4.169L21 4.169L21 8.329L20.169 8.329C20.721 8.329 21.365 8.709 22.101 9.469C22.837 10.229 23.205 11.433 23.205 13.081C23.205 15.225 22.685 16.925 21.645 18.181C20.605 19.437 19.045 20.405 16.965 21.085L14.017 21Z" /></svg>
            </div>

            <h4 className="text-red-200 font-bold uppercase tracking-widest mb-6 text-sm relative z-10">
              Client Success Stories
            </h4>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-8 relative z-10">
              "ProForce1 is a best-in-class service provider distinguished by its unmatched commitment to quality."
            </h2>
            
            <p className="text-red-100 text-lg mb-8 leading-relaxed font-light relative z-10 border-l-2 border-red-400 pl-6">
              Their dedication demonstrated professionalism and efficiency during our complex renovation project. The consulting services alone were worth every penny.
            </p>
            
            <div className="relative z-10 mb-12">
              <p className="font-bold text-white text-lg">James Carter</p>
              <p className="text-red-200">Chief Operations Officer, TechPlaza</p>
            </div>

            <div className="relative z-10">
              <Button className="bg-white text-red-700 hover:bg-slate-100 font-bold px-8 py-6 rounded-sm w-full sm:w-auto shadow-lg transition-transform hover:-translate-y-1">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

// --- Helper Components for Clean Code ---

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-red-600/50 hover:bg-slate-800 transition-all duration-300">
    <div className="mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300 inline-block p-3 bg-red-600/10 rounded-xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

const PromiseItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
  <li className="flex items-center gap-4 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg">
    <div className="text-green-600 flex-shrink-0">
      {icon}
    </div>
    <span>{text}</span>
  </li>
);

export default AboutUs;