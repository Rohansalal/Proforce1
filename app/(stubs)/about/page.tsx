'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Target, 
  Eye, 
  Smartphone, 
  UserCheck, 
  ShieldCheck, 
  Headphones, 
  CheckCircle2, 
  Award,
  MapPin,
  Clock,
  MessageSquare
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const AboutUs: React.FC = () => {
  
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans selection:bg-red-500/30">
      
      {/* ====================
          HERO SECTION 
         ==================== */}
      <section className="relative bg-slate-900 text-white pt-40 pb-24 overflow-hidden">
        {/* Tech Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/30 rounded-full text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
              <Shield className="w-3 h-3" /> Experience • Integrity • Innovation
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
              A MODERN SECURITY COMPANY <br />
              <span className="text-red-600">BUILT ON RESULTS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              Welcome to ProForce1 Protection Services. We believe safety is more than a service; it’s a responsibility. With over 20 years of professional experience, we protect people, property, and peace of mind with uncompromising quality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-red-900/20">
                View Our Services
              </Button>
              <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg font-bold rounded-xl">
                Contact Leadership
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================
          WHO WE ARE (Intro)
         ==================== */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-slate-900 rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  {/* Replace with your actual image path */}
                  <Image
                    src="/gallery/team-briefing-1.jpg" 
                    alt="ProForce1 Security Team"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur shadow-lg p-4 rounded-xl border border-gray-100 max-w-xs">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-full text-red-600">
                            <Award className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase">Founded by Experts</p>
                            <p className="text-sm font-bold text-gray-900">20+ Years Experience</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-1 bg-red-600"></div>
                <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Who We Are</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Fully Licensed, Insured, & <span className="text-red-600">Technology-Driven</span>
              </h2>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded by <strong>Sammy Ahmadi</strong>, a security expert with two decades of field and management experience, ProForce1 has grown into a trusted partner for dozens of industries—from construction and hospitality to retail centers and private events.
              </p>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We specialize in delivering customized security solutions backed by modern technology, real-time communication, and a team of highly trained officers ready to respond at a moment’s notice.
              </p>

              <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-red-600 mb-8">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-600" /> Serving All of California
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Los Angeles • Orange County • San Diego • Riverside • San Bernardino • Sacramento • San Jose • Oakland • San Francisco
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================
          WHAT MAKES US DIFFERENT
         ==================== */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us <span className="text-red-600">Different</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We run our operations like a professional service partner — not just a vendor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Modern Approach */}
            <div className="group p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-red-600 hover:bg-slate-800/80 transition-all duration-300">
                <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Modern Approach</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Advanced digital tools for transparency. Clients know exactly what is happening on their property with zero guesswork.
                </p>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-red-600"/> GPS & Time-coded Photos</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-red-600"/> Instant Email Reports</li>
                </ul>
            </div>

            {/* Card 2: Professional Officers */}
            <div className="group p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-red-600 hover:bg-slate-800/80 transition-all duration-300">
                <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                    <UserCheck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Officers</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Fully BSIS licensed, background checked, and trained in de-escalation. Our officers represent your business with respect.
                </p>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-red-600"/> Customer-Service Oriented</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-red-600"/> Supported by Field Mgmt</li>
                </ul>
            </div>

            {/* Card 3: Custom Solutions */}
            <div className="group p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-red-600 hover:bg-slate-800/80 transition-all duration-300">
                <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customized Solutions</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    No two properties are the same. We design solutions based on risk level, foot traffic, layout, and safety concerns.
                </p>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-red-600"/> Tailored to your needs</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-red-600"/> Armed, Unarmed, Patrol</li>
                </ul>
            </div>

            {/* Card 4: Communication */}
            <div className="group p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:border-red-600 hover:bg-slate-800/80 transition-all duration-300">
                <div className="mb-6 p-4 bg-slate-900 rounded-xl inline-block group-hover:scale-110 transition-transform">
                    <Headphones className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Active Communication</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Clients never have to wonder what’s happening. We provide 24/7 dispatch and direct communication with management.
                </p>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-red-600"/> Immediate Incident Alerts</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-red-600"/> Daily Activity Summaries</li>
                </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ====================
          VISION & PROMISE 
         ==================== */}
      <section className="py-20 bg-slate-50 border-y border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                viewport={{ once: true }}
                className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-200"
            >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                    To redefine what modern security looks like by combining human professionalism with advanced technology, ensuring safety with transparency, accountability, and consistent quality.
                </p>
            </motion.div>

            {/* Promise */}
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                className="bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-gray-200"
            >
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Promise to You</h3>
                <ul className="space-y-4">
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                        <Clock className="w-5 h-5 text-green-600 flex-shrink-0" /> We show up on time.
                    </li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                        <MessageSquare className="w-5 h-5 text-green-600 flex-shrink-0" /> We communicate clearly.
                    </li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                        <UserCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> We act professionally.
                    </li>
                    <li className="flex items-center gap-4 text-slate-700 font-medium">
                        <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" /> We protect your property as if it were our own.
                    </li>
                </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ====================
          CLOSING CTA
         ==================== */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                THE FUTURE OF SECURITY, <span className="text-red-600">DELIVERED TODAY</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                Whether you manage a commercial plaza, a construction site, a hotel, a corporate building, or a private event — ProForce1 Protection Services is equipped to provide the protection you need, the professionalism you expect, and the peace of mind you deserve.
            </p>
            <div className="flex justify-center">
                <Button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl transition-all hover:-translate-y-1">
                    Get Your Free Quote
                </Button>
            </div>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;