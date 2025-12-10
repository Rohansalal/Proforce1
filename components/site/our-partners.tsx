"use client"

import Image from "next/image"

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
]

export function OurPartners() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="text-center">
          <span className="text-red-600 font-mono text-sm tracking-widest uppercase mb-4 block">Trusted Globally</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6 font-serif">
            Our Valued <span className="italic text-red-700">Partners</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            We are proud to protect the assets and personnel of these industry leaders.
          </p>
        </div>
      </div>

      {/* INFINITE SCROLL CONTAINER 
          We duplicate the list to create a seamless loop.
      */}
      <div className="relative w-full overflow-hidden">
        
        {/* Gradient Masks for Fade Effect */}
        <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-20" />

        {/* Scrolling Track */}
        <div className="flex w-max animate-scroll hover:pause">
          {/* First Set */}
          <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
            {partners.map((partner) => (
              <PartnerLogo key={`a-${partner.id}`} partner={partner} />
            ))}
          </div>
          {/* Duplicate Set (Immediate Follow-up) */}
          <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
            {partners.map((partner) => (
              <PartnerLogo key={`b-${partner.id}`} partner={partner} />
            ))}
          </div>
        </div>

      </div>

      {/* Global Style for Animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite; /* Adjusted for 0.5 speed feel */
        }
        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

function PartnerLogo({ partner }: { partner: { name: string, src: string } }) {
  return (
    <div className="relative w-32 h-24 md:w-48 md:h-32 flex-shrink-0 group cursor-pointer">
      <div className="relative w-full h-full flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:scale-110">
        <Image
          src={partner.src}
          alt={partner.name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 150px, 200px"
        />
      </div>
    </div>
  )
}

export default OurPartners