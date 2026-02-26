"use client"

import Image from "next/image"
import { motion } from "framer-motion"

// Flattened data structure for continuous loop
const partners = [
  { id: 1, name: "Hilton", src: "/partners/hiltron.jpg" },
  { id: 2, name: "AR Mays", src: "/partners/AR-Mays.jpg" },
  { id: 3, name: "CVS Pharmacy", src: "/partners/cvs.jpg" },
  { id: 4, name: "99 Cents", src: "/partners/99.jpg" },
  { id: 5, name: "Andy Logistics", src: "/partners/andy.jpg" },
  { id: 6, name: "AutoZone", src: "/partners/auto-zone.jpg" },
  { id: 7, name: "Bank of America", src: "/partners/bank-of-america.jpg" },
  { id: 8, name: "Costco", src: "/partners/costo.jpg" },
  { id: 9, name: "Flatiron", src: "/partners/flatiron.jpg" },
  { id: 10, name: "Hotel IR", src: "/partners/Hotel-Ir.jpg" },
  { id: 11, name: "City Orange", src: "/partners/ornageofcity1.png" },
  { id: 12, name: "Motel6", src: "/partners/motel6.png" },
  { id: 13, name: "cropped-afc ", src: "/partners/cropped-afc-logo.png" },
  { id: 14, name: "Placentia", src: "/partners/Document.png" },
  { id: 15, name: "REMAX", src: "/partners/Remaxlogo.png" },
  { id: 16, name: "Sheraton Garden Grove", src: "/partners/SHERATON GARDEN GROVE .png" },
  { id: 17, name: "Hoag urgent cares", src: "/partners/hoga.png" },
]

export function OurPartners() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-red-600 font-mono text-sm tracking-widest uppercase mb-4 block">Trusted Globally</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 font-serif">
            Our Valued <span className="italic text-red-700">Partners</span>
          </h2>
        </motion.div>
      </div>

      {/* INFINITE SCROLL CONTAINER 
          We duplicate the list to create a seamless loop.
      */}
      <div className="relative w-full overflow-hidden">

        {/* Gradient Masks for Fade Effect */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-20" />

        {/* Scrolling Track Using Framer Motion */}
        <div className="flex w-full group">
          <motion.div
            className="flex gap-12 md:gap-24 px-6 md:px-12 w-max"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            style={{ willChange: "transform" }}
          >
            {/* First Set */}
            <div className="flex items-center gap-12 md:gap-24">
              {partners.map((partner) => (
                <PartnerLogo key={`a-${partner.id}`} partner={partner} />
              ))}
            </div>
            {/* Duplicate Set (Immediate Follow-up) */}
            <div className="flex items-center gap-12 md:gap-24">
              {partners.map((partner) => (
                <PartnerLogo key={`b-${partner.id}`} partner={partner} />
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

function PartnerLogo({ partner }: { partner: { name: string, src: string } }) {
  return (
    <div className="relative w-24 h-16 md:w-48 md:h-32 flex-shrink-0 group cursor-pointer">
      <div className="relative w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out transform group-hover:scale-110">
        <Image
          src={partner.src}
          alt={partner.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100px, 200px"
          quality={40}
        />
      </div>
    </div>
  )
}

export default OurPartners