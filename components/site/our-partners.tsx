"use client"

import { useState, useCallback } from "react"

export function OurPartners() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const partners = [
    // Slide 1
    [
      { 
        id: 1, 
        name: "Commercial Properties",
        src: "/partners/hiltron.jpg" // Add your image path
      },
      { 
        id: 2, 
        name: "Construction Sites",
        src: "/partners/AR-Mays.jpg" // Add your image path
      },
      { 
        id: 3, 
        name: "Industrial Facilities",
        src: "/partners/cvs.jpg" // Add your image path
      },
      { 
        id: 4, 
        name: "Retail Centers",
        src: "/partners/99.jpg" // Add your image path
      },
      { 
        id: 5, 
        name: "Warehouse & Logistics",
        src: "/partners/andy.jpg" // Add your image path
      },
    ],
    // Slide 2
    [
      { 
        id: 6, 
        name: "Healthcare Facilities",
        src: "/partners/auto-zone.jpg" // Add your image path
      },
      { 
        id: 7, 
        name: "Educational Institutions",
        src: "/partners/bank-of-america.jpg" // Add your image path
      },
      { 
        id: 8, 
        name: "Government Facilities",
        src: "/partners/costo.jpg" // Add your image path
      },
      { 
        id: 9, 
        name: "Financial Institutions",
        src: "/partners/flatiron.jpg" // Add your image path
      },
      { 
        id: 10, 
        name: "Technology Parks",
        src: "/partners/Hotel-Ir.jpg" // Add your image path
      },
    ],
    // Slide 3
    [
      { 
        id: 11, 
        name: "Hotel & Hospitality",
        src: "/partners/flatiron.jpg" // Add your image path
      },
      { 
        id: 12, 
        name: "Event Venues",
        src: "/partners/event-venues.jpg" // Add your image path
      },
      { 
        id: 13, 
        name: "Residential Complexes",
        src: "/partners/residential-complexes.jpg" // Add your image path
      },
      { 
        id: 14, 
        name: "Transportation Hubs",
        src: "/partners/transportation-hubs.jpg" // Add your image path
      },
      { 
        id: 15, 
        name: "Entertainment Centers",
        src: "/partners/entertainment-centers.jpg" // Add your image path
      },
    ]
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

 return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Trusted Security Partners
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Partners</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clients That Trust Our Professional Security Guard Services
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white shadow-2xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 z-20 group border border-gray-100"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white shadow-2xl rounded-full p-4 hover:bg-gray-50 transition-all duration-300 z-20 group border border-gray-100"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partners.map((slidePartners, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
                    {slidePartners.map((partner) => (
                      <div
                        key={partner.id}
                        className="group bg-transparent rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-0 relative overflow-hidden aspect-square"
                      >
                        {/* Main Image Container - No borders, full image */}
                        <div className="relative w-full h-full flex items-center justify-center">
                          
                          {/* Partner Image Container */}
                          <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl bg-white">
                            <img 
                              src={partner.src} 
                              alt={partner.name}
                              className="w-full h-full object-contain transition-all duration-700 group-hover:brightness-110 group-hover:scale-110 transform group-hover:translate-x-2"
                              onError={(e) => {
                                // Fallback if image fails to load
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.classList.remove('hidden');
                              }}
                            />
                            
                            {/* Fallback placeholder - shown only if image fails */}
                            <div className="hidden absolute inset-0 bg-gray-100 rounded-2xl flex items-center justify-center">
                              <div className="text-gray-400 text-center p-4">
                                <div className="text-2xl mb-2">🏢</div>
                                <div className="text-sm">{partner.name}</div>
                              </div>
                            </div>
                          </div>

                          {/* Shine Effect Overlay */}
                          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform skew-x-12 group-hover:animate-shine transition-all duration-1000 opacity-0 group-hover:opacity-100"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <div className="flex gap-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-red-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for shine animation */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}

export default OurPartners