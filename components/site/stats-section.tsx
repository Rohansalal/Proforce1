"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { k: 1000, label: "Events Served", suffix: "+" },
    { k: 460, label: "Qualified Staff", suffix: "" },
    { k: 2, label: "Our Locations", suffix: "" },
    { k: 550, label: "Areas Serving", suffix: "+" },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounts(stats.map(stat => Math.floor(progress * stat.k)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats])

  return (
    <section ref={sectionRef} className="bg-slate-950 text-white border-t border-white/10 relative overflow-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8 py-10 md:py-14 grid gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 15 }
              }
            }}
            key={stat.label}
            className="text-center group"
          >
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 tracking-tighter mb-2 group-hover:scale-110 transition-transform duration-500">
              {counts[index]}
              {stat.suffix}
            </div>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}