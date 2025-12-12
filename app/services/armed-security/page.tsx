"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { 
  Shield, Target, Zap, Lock, CheckCircle2, 
  BarChart3, Smartphone, FileText, 
  Phone, Mail, Users, Lightbulb, Award, Eye, Briefcase
} from "lucide-react"
import { Button } from "@/components/ui/button"

// --- ASSETS CONFIGURATION ---
const IMAGES = {
  // Use a transparent PNG of the guard for best results in the new Hero layout
  guardIso: "/Services/guard-isolated.png", 
  agent: "/Services/agent-smiling.jpg", 
  pattern: "https://www.transparenttextures.com/patterns/carbon-fibre.png"
}

export default function ArmedGuardPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); 

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-red-100 selection:text-red-900">
      
      {/* =========================================
          1. HERO SECTION (Matched to Image 1)
      ========================================= */}
      <section className="relative min-h-[85vh] bg-[#0B1221] flex items-center overflow-hidden pt-20">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1221] via-[#111827] to-[#1e293b] z-0" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 h-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Left: Text Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl text-left pt-12 lg:pt-0"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/10 rounded text-white text-[10px] font-bold tracking-widest uppercase mb-6">
                <Shield className="w-3 h-3 text-red-500 fill-current" />
                ProForce1 Security
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight uppercase">
                Unmatched <br />
                <span className="text-white">Security Solutions</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-slate-300 mb-8 max-w-lg font-light leading-relaxed border-l-4 border-red-600 pl-6">
                Elevating Safety Through Technology & Expertise. <br />
                Professional armed protection for high-value environments.
              </motion.p>
              
              <motion.div variants={fadeInUp}>
                <Button className="bg-[#D9232D] hover:bg-red-700 text-white h-14 px-10 text-sm font-bold uppercase tracking-widest rounded-sm shadow-xl transition-transform hover:scale-105">
                  Contact Now
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Guard Image (Parallax) */}
            <motion.div 
              style={{ y: y1 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block h-full min-h-[600px] w-full"
            >
              {/* Note: Ensure this image is a cutout (PNG) of a guard for the effect */}
              <Image 
                src={IMAGES.guardIso} // Replace with your guard cutout
                alt="Armed Guard" 
                fill 
                className="object-contain object-bottom scale-110 translate-y-10"
                priority 
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Swoosh Divider (The White Curve) */}
        <div className="absolute bottom-0 left-0 w-full leading-none z-20">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[80px] md:h-[120px] fill-white block">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" opacity=".25"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V120H0Z" opacity=".5"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V120H0Z"></path>
            </svg>
        </div>
      </section>

      {/* =========================================
          2. CORE VALUE MODEL (Ribbon Layout)
      ========================================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">
              Our Core Value Model
            </h2>
            <div className="w-16 h-1 bg-[#D9232D] mx-auto" />
          </div>

          <div className="relative max-w-6xl mx-auto pt-10">
            {/* The Ribbon SVG Connector Background */}
            <div className="absolute top-[80px] left-0 w-full hidden md:block -z-10">
                <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-[60px]">
                    {/* Ribbon 1: Blue to Purple */}
                    <path d="M100,50 C200,50 200,50 350,50" stroke="#0B1221" strokeWidth="8" fill="none" className="opacity-80" />
                    {/* Ribbon 2: Purple to Red */}
                    <path d="M350,50 C500,50 500,50 600,50" stroke="#581c87" strokeWidth="8" fill="none" className="opacity-80" />
                    {/* Ribbon 3: Red to Light Red */}
                    <path d="M600,50 C750,50 750,50 900,50" stroke="#D9232D" strokeWidth="8" fill="none" className="opacity-80" />
                </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <CoreValueCircle 
                icon={<Users className="w-8 h-8" />} 
                title="Client Focus" 
                desc="Tailored solutions." 
                color="border-[#0B1221] text-[#0B1221]"
              />
              <CoreValueCircle 
                icon={<Lightbulb className="w-8 h-8" />} 
                title="Innovation" 
                desc="Predictive protection." 
                color="border-purple-900 text-purple-900"
              />
              <CoreValueCircle 
                icon={<Shield className="w-8 h-8" />} 
                title="Integrity" 
                desc="Ethical conduct." 
                color="border-[#D9232D] text-[#D9232D]"
              />
              <CoreValueCircle 
                icon={<Award className="w-8 h-8" />} 
                title="Excellence" 
                desc="Superior performance." 
                color="border-red-500 text-red-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. HISTORY (Diagonal Arrow)
      ========================================= */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
              A History of Excellence
            </h2>
            <div className="w-16 h-1 bg-[#D9232D] mx-auto" />
          </div>

          {/* Desktop Arrow Graphic */}
          <div className="relative max-w-5xl mx-auto h-[500px] hidden md:block">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" fill="none">
               <defs>
                 <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                   <polygon points="0 0, 8 3, 0 6" fill="#D9232D" />
                 </marker>
               </defs>
               
               {/* Red Rising Arrow */}
               <motion.path 
                 d="M50,450 L950,50"
                 stroke="#D9232D" 
                 strokeWidth="8" 
                 markerEnd="url(#arrowhead)"
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
               />
            </svg>

            {/* Points */}
            <HistoryPoint x="10%" y="84%" year="2010" title="FOUNDED" desc="ProForce1 established." delay={0.2} />
            <HistoryPoint x="30%" y="65%" year="2013" title="EXPANSION" desc="Armed division launch." delay={0.4} />
            <HistoryPoint x="50%" y="46%" year="2016" title="TECH" desc="GPS reporting integrated." delay={0.6} />
            <HistoryPoint x="70%" y="28%" year="2019" title="GROWTH" desc="Statewide coverage." delay={0.8} />
            <HistoryPoint x="90%" y="10%" year="PRESENT" title="FUTURE" desc="AI-Driven security." delay={1.0} />
          </div>

          {/* Mobile Fallback */}
          <div className="md:hidden space-y-8 text-left max-w-sm mx-auto border-l-4 border-[#D9232D] pl-6">
             {[2010, 2013, 2016, 2019, 2024].map((year, i) => (
                <div key={i} className="relative">
                   <div className="absolute -left-[34px] top-1 w-4 h-4 bg-[#D9232D] rounded-full border-2 border-white" />
                   <div className="text-2xl font-black text-slate-400">{year}</div>
                   <div className="text-lg font-bold text-[#D9232D] uppercase">Milestone</div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* =========================================
          4. TECH & CONTACT (Keeping Dark/Split)
      ========================================= */}
      <section className="py-24 bg-[#0B1221] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase">Tech-Driven Security</h2>
            <div className="w-16 h-1 bg-[#D9232D] mx-auto mb-6" />
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We leverage real-time technology to transform traditional guarding into intelligent, performance-driven operations.
            </p>
          </div>

          {/* Dashboard Mockup */}
          <div className="bg-[#111827] border border-slate-700 rounded-xl p-6 shadow-2xl max-w-4xl mx-auto">
             <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-4">
                <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-slate-500 font-mono text-xs">pf1_command_center.exe</div>
             </div>
             <div className="grid grid-cols-3 gap-4 h-40 items-end">
                {[40, 70, 50, 90, 60, 80, 50, 95, 75, 45, 85, 65].map((h, i) => (
                   <div key={i} style={{ height: `${h}%` }} className="bg-[#D9232D]/80 rounded-t w-full"></div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-24 bg-white">
         <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto bg-slate-50 rounded-2xl shadow-xl overflow-hidden border border-slate-200">
               <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto bg-slate-900">
                     <Image src={IMAGES.agent} alt="Contact Agent" fill className="object-cover opacity-60" />
                     <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center text-white">
                           <h3 className="text-3xl font-bold mb-2">Need Protection?</h3>
                           <div className="flex items-center justify-center gap-2 text-xl font-bold text-[#D9232D]">
                              <Phone className="w-5 h-5" /> (800) 779-7691
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="p-8 lg:p-12">
                     <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase">Get A Quote</h3>
                     <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                           <input type="text" placeholder="Name" className="w-full p-3 bg-white border border-slate-300 rounded-sm focus:border-[#D9232D] outline-none" />
                           <input type="text" placeholder="Phone" className="w-full p-3 bg-white border border-slate-300 rounded-sm focus:border-[#D9232D] outline-none" />
                        </div>
                        <input type="email" placeholder="Email" className="w-full p-3 bg-white border border-slate-300 rounded-sm focus:border-[#D9232D] outline-none" />
                        <Button className="w-full bg-[#D9232D] hover:bg-red-800 text-white font-bold py-6 uppercase tracking-widest rounded-sm">
                           Submit Request
                        </Button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </main>
  )
}

// --- SUB COMPONENTS (Styled to match Image) ---

function CoreValueCircle({ icon, title, desc, color }: any) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center text-center group relative z-10">
      <div className={`w-32 h-32 rounded-full bg-white border-[8px] ${color} flex items-center justify-center shadow-xl mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm max-w-[180px]">{desc}</p>
    </motion.div>
  )
}

function HistoryPoint({ x, y, year, title, desc, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="absolute transform -translate-x-1/2"
      style={{ left: x, top: y }}
    >
      <div className="flex flex-col items-center">
         <div className="w-6 h-6 bg-[#D9232D] rounded-full border-4 border-white shadow-lg relative z-10"></div>
         <div className="mt-4 bg-white p-3 rounded shadow-lg border-l-4 border-[#D9232D] w-40 text-left">
            <div className="text-lg font-black text-slate-900 leading-none">{year}</div>
            <div className="text-[10px] font-bold text-[#D9232D] uppercase">{title}</div>
            <div className="text-[10px] text-slate-500 leading-tight mt-1">{desc}</div>
         </div>
      </div>
    </motion.div>
  )
}