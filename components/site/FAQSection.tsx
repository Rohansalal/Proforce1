"use client";

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you handle emergency situations?",
      answer: "We maintain a 24/7 Global Command Center and rapid response teams. Our protocols are integrated with local law enforcement to handle medical, fire, and security emergencies efficiently and calmly."
    },
    {
      question: "What kind of training do your guards receive?",
      answer: "Beyond standard licensing, our guards undergo a rigorous 6-week boot camp covering conflict resolution, advanced first aid (CPR/AED), surveillance systems, and tactical defensive driving."
    },
    {
      question: "Can you provide security for large events?",
      answer: "Yes. We specialize in high-capacity crowd control, VIP pathing, and perimeter security for gatherings ranging from corporate galas to stadium-sized events, ensuring safety for all attendees."
    },
    {
      question: "Do you offer customized security plans?",
      answer: "Absolutely. We reject 'one-size-fits-all.' We conduct a full threat assessment of your specific site to build a tailored security strategy that fits your operational needs and budget."
    }
  ];

  // --- STRONGER ANIMATION SETTINGS ---
  
  // Stagger container for the FAQ list
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Slower ripple effect (0.2s between each item)
      },
    },
  };

  // Individual FAQ Item Animation (Slide Up + Bounce)
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 }, // Start lower (50px) and slightly smaller
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        duration: 0.8 
      }
    },
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* --- LEFT COLUMN: ANIMATED TEXT --- */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-24">
              
              {/* Badge: Slides in from LEFT */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }} // Waits until 50% is visible
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/50 border border-red-200 text-red-700 text-xs font-bold tracking-widest uppercase mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                FAQ
              </motion.div>
              
              {/* Heading: Slides UP heavily */}
              <motion.h2 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-6"
              >
                What sets our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
                  approach apart?
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-500 font-light leading-relaxed mb-8 max-w-md"
              >
                We believe transparency builds trust. Here are the answers to the most frequent questions our clients ask before partnering with us.
              </motion.p>

              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="hidden lg:inline-flex items-center text-sm font-bold text-slate-900 hover:text-red-600 transition-colors group"
              >
                Have a different question?
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CASCADING FAQ CARDS --- */}
          <div className="lg:col-span-7">
            <motion.div 
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of list is visible
              className="space-y-4"
            >
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                
                return (
                  <motion.div 
                    key={index} 
                    variants={itemVariants} // Uses the bouncy spring animation
                    className={`group rounded-2xl border transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen 
                        ? 'bg-white border-red-100 shadow-xl shadow-red-900/5' 
                        : 'bg-white border-slate-200 hover:border-red-200 hover:bg-slate-50'
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex items-start justify-between w-full p-6 md:p-8 text-left focus:outline-none"
                    >
                      <span className={`text-lg md:text-xl font-bold transition-colors duration-300 pr-8 leading-snug ${
                        isOpen ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'
                      }`}>
                        {faq.question}
                      </span>
                      
                      <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-slate-100 text-slate-500 group-hover:bg-red-50 group-hover:text-red-600'
                      }`}>
                        {isOpen ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 md:px-8 pb-8">
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FAQSection;