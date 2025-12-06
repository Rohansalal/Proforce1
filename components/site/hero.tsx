// "use client"

// import { useState, useEffect, useRef } from "react"
// import Image from "next/image"
// import { Shield, Users, Monitor, Flame, ChevronLeft, ChevronRight, Pause, Play, Target, Building, Star, Clock } from "lucide-react"
// import { cn } from "@/lib/utils"
// import { Button } from "../ui/button"

// interface HeroSlide {
//   id: number
//   imageSrc: string
//   title: string
//   description: string
//   buttonLink: string
//   icon: React.ReactNode
//   fallbackImage: string
//   color: string
// }

// const slides: HeroSlide[] = [
//   {
//     id: 1,
//     imageSrc: "/hero/patrol-services.jpg",
//     title: "Patrol Services",
//     description: "Round-the-clock mobile patrols to ensure the safety and security of your premises.",
//     buttonLink: "/services/patrol-services-orange-county",
//     icon: <Shield className="w-6 h-6 lg:w-8 lg:h-8" />,
//     fallbackImage: "https://images.unsplash.com/photo-1581579431537-3595ca6d1f8f?q=80&w=2070&auto=format&fit=crop",
//     color: "blue"
//   },
//   {
//     id: 2,
//     imageSrc: "/hero/armed-security.jpg",
//     title: "Armed Security",
//     description: "Highly-trained armed personnel for situations requiring an elevated level of security.",
//     buttonLink: "/services/armed-security",
//     icon: <Users className="w-6 h-6 lg:w-8 lg:h-8" />,
//     fallbackImage: "https://images.unsplash.com/photo-1586816871360-d2820a013b96?q=80&w=2070&auto=format&fit=crop",
//     color: "red"
//   },
//   {
//     id: 3,
//     imageSrc: "/hero/fire-watch.jpg",
//     title: "Fire Watch",
//     description: "NFPA-compliant fire watch services to protect your property during system outages.",
//     buttonLink: "/services/fire-watch-services",
//     icon: <Flame className="w-6 h-6 lg:w-8 lg:h-8" />,
//     fallbackImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
//     color: "orange"
//   },
//   {
//     id: 4,
//     imageSrc: "/hero/access-control.jpg",
//     title: "Access Control",
//     description: "State-of-the-art systems to manage and monitor entry to your facilities.",
//     buttonLink: "/services/executive-protection",
//     icon: <Monitor className="w-6 h-6 lg:w-8 lg:h-8" />,
//     fallbackImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2074&auto=format&fit=crop",
//     color: "emerald"
//   },
//   // Second Frame Slides
//   {
//     id: 5,
//     imageSrc: "/hero/executive-protection.jpg",
//     title: "Executive Protection",
//     description: "Professional VIP protection services for high-profile individuals and corporate executives.",
//     buttonLink: "/services/executive-protection",
//     icon: <Target className="w-6 h-6 lg:w-8 lg:h-8" />,
//     fallbackImage: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?q=80&w=2070&auto=format&fit=crop",
//     color: "purple"
//   },
//   {
//     id: 6,
//     imageSrc: "/hero/construction-security.jpg",
//     title: "Construction Security",
//     description: "Specialized security solutions for construction sites and ongoing projects.",
//     buttonLink: "/services/construction-security-orange-county",
//     icon: <Building className="w-6 h-6 lg:w-8 lg:h-8" />,
//     fallbackImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
//     color: "amber"
//   },
//   {
//     id: 7,
//     imageSrc: "/hero/event-security.jpg",
//     title: "Event Security",
//     description: "Comprehensive security planning and management for events of all sizes.",
//     buttonLink: "/services/event-security-orange-county",
//     icon: <Star className="w-6 h-6 lg:w-8 lg:h-8" />,
//     fallbackImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop",
//     color: "cyan"
//   },
//   {
//     id: 8,
//     imageSrc: "/hero/emergency-response.jpg",
//     title: "Emergency Response",
//     description: "24/7 rapid response teams ready to handle emergency situations.",
//     buttonLink: "/services/emergency-response",
//     icon: <Clock className="w-6 h-6 lg:w-8 lg:h-8" />,
//     fallbackImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
//     color: "rose"
//   },
// ]

// export function Hero() {
//   const [activeSlide, setActiveSlide] = useState(1)
//   const [currentFrame, setCurrentFrame] = useState(0)
//   const [isAutoPlay, setIsAutoPlay] = useState(true)
//   const [isTransitioning, setIsTransitioning] = useState(false)
//   const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())
//   const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
//   const [isInitialLoading, setIsInitialLoading] = useState(true)
  
//   const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
//   const slideIntervalRef = useRef<NodeJS.Timeout | null>(null)
//   const initialLoadRef = useRef<NodeJS.Timeout | null>(null)

//   // Get current slides based on frame
//   const currentSlides = currentFrame === 0 ? slides.slice(0, 4) : slides.slice(4, 8)

//   // Handle image error - fallback to Unsplash
//   const handleImageError = (id: number) => {
//     console.warn(`Image ${id} failed to load, using fallback`)
//     setImageErrors(prev => new Set(prev).add(id))
//   }

//   // Handle image load
//   const handleImageLoad = (id: number) => {
//     setLoadedImages(prev => {
//       const newSet = new Set(prev)
//       newSet.add(id)
//       return newSet
//     })
//   }

//   // Get image source with fallback
//   const getImageSrc = (slide: HeroSlide) => {
//     if (imageErrors.has(slide.id)) {
//       return slide.fallbackImage
//     }
//     return slide.imageSrc
//   }

//   // Auto-rotate frames (every 12 seconds)
//   useEffect(() => {
//     if (!isAutoPlay) {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current)
//       }
//       return
//     }

//     autoPlayRef.current = setInterval(() => {
//       handleNextFrame()
//     }, 12000) // 12 seconds for frame change

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current)
//       }
//     }
//   }, [isAutoPlay, currentFrame])

//   // Auto-rotate slides within frame (every 5 seconds)
//   useEffect(() => {
//     if (!isAutoPlay || isTransitioning) {
//       if (slideIntervalRef.current) {
//         clearInterval(slideIntervalRef.current)
//       }
//       return
//     }

//     slideIntervalRef.current = setInterval(() => {
//       const currentSlideIndex = currentSlides.findIndex(s => s.id === activeSlide)
//       const nextIndex = (currentSlideIndex + 1) % currentSlides.length
//       const nextSlide = currentSlides[nextIndex]
      
//       handleSlideChange(nextSlide.id)
//     }, 5000) // 5 seconds for slide change

//     return () => {
//       if (slideIntervalRef.current) {
//         clearInterval(slideIntervalRef.current)
//       }
//     }
//   }, [isAutoPlay, activeSlide, currentFrame, isTransitioning])

//   const handleSlideChange = (slideId: number) => {
//     if (isTransitioning || slideId === activeSlide) return
    
//     setIsTransitioning(true)
//     setActiveSlide(slideId)
    
//     setTimeout(() => {
//       setIsTransitioning(false)
//     }, 800)
//   }

//   const handleNextSlide = () => {
//     const currentSlideIndex = currentSlides.findIndex(s => s.id === activeSlide)
//     const nextIndex = (currentSlideIndex + 1) % currentSlides.length
//     const nextSlide = currentSlides[nextIndex]
//     handleSlideChange(nextSlide.id)
//   }

//   const handlePrevSlide = () => {
//     const currentSlideIndex = currentSlides.findIndex(s => s.id === activeSlide)
//     const prevIndex = (currentSlideIndex - 1 + currentSlides.length) % currentSlides.length
//     const prevSlide = currentSlides[prevIndex]
//     handleSlideChange(prevSlide.id)
//   }

//   const handleNextFrame = () => {
//     if (isTransitioning) return
    
//     setIsTransitioning(true)
//     const nextFrame = currentFrame === 0 ? 1 : 0
    
//     // Smooth transition to next frame
//     setTimeout(() => {
//       setCurrentFrame(nextFrame)
//       const firstSlide = nextFrame === 0 ? slides[0].id : slides[4].id
//       setActiveSlide(firstSlide)
      
//       setTimeout(() => {
//         setIsTransitioning(false)
//       }, 800)
//     }, 800)
//   }

//   const handlePrevFrame = () => {
//     if (isTransitioning) return
    
//     setIsTransitioning(true)
//     const prevFrame = currentFrame === 0 ? 1 : 0
    
//     setTimeout(() => {
//       setCurrentFrame(prevFrame)
//       const firstSlide = prevFrame === 0 ? slides[0].id : slides[4].id
//       setActiveSlide(firstSlide)
      
//       setTimeout(() => {
//         setIsTransitioning(false)
//       }, 800)
//     }, 800)
//   }

//   const goToSlide = (id: number) => {
//     if (isTransitioning || id === activeSlide) return
    
//     // If slide is in different frame, switch frame first
//     const targetFrame = id <= 4 ? 0 : 1
//     if (targetFrame !== currentFrame) {
//       setIsTransitioning(true)
//       setTimeout(() => {
//         setCurrentFrame(targetFrame)
//         setActiveSlide(id)
//         setTimeout(() => {
//           setIsTransitioning(false)
//         }, 800)
//       }, 800)
//     } else {
//       handleSlideChange(id)
//     }
//   }

//   const toggleAutoPlay = () => {
//     setIsAutoPlay(!isAutoPlay)
//   }

//   // Check if all images are loaded or errored
//   useEffect(() => {
//     if (loadedImages.size + imageErrors.size === slides.length) {
//       if (initialLoadRef.current) {
//         clearTimeout(initialLoadRef.current)
//       }
//       initialLoadRef.current = setTimeout(() => {
//         setIsInitialLoading(false)
//       }, 500)
//     }
//   }, [loadedImages, imageErrors])

//   // Set initial loading timeout as fallback
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setIsInitialLoading(false)
//     }, 3000)
    
//     return () => {
//       if (timeout) clearTimeout(timeout)
//       if (initialLoadRef.current) clearTimeout(initialLoadRef.current)
//       if (autoPlayRef.current) clearInterval(autoPlayRef.current)
//       if (slideIntervalRef.current) clearInterval(slideIntervalRef.current)
//     }
//   }, [])

//   // Color mapping
//   const getColorClass = (color: string) => {
//     const colors: Record<string, string> = {
//       blue: "bg-blue-600",
//       red: "bg-red-600",
//       orange: "bg-orange-600",
//       emerald: "bg-emerald-600",
//       purple: "bg-purple-600",
//       amber: "bg-amber-600",
//       cyan: "bg-cyan-600",
//       rose: "bg-rose-600"
//     }
//     return colors[color] || "bg-blue-600"
//   }

//   const getLightColorClass = (color: string) => {
//     const colors: Record<string, string> = {
//       blue: "bg-blue-900/30",
//       red: "bg-red-900/30",
//       orange: "bg-orange-900/30",
//       emerald: "bg-emerald-900/30",
//       purple: "bg-purple-900/30",
//       amber: "bg-amber-900/30",
//       cyan: "bg-cyan-900/30",
//       rose: "bg-rose-900/30"
//     }
//     return colors[color] || "bg-blue-900/30"
//   }

//   return (
//     <section className="relative h-screen w-full bg-gray-900 overflow-hidden">
//       {/* Desktop Layout - 4 Panel Split Screen */}
//       <div className="hidden lg:block relative h-full w-full">
//         <div className={cn(
//           "relative h-full w-full transition-all duration-1000 ease-out",
//           isTransitioning ? "opacity-90" : "opacity-100"
//         )}>
//           <div className="flex h-full">
//             {currentSlides.map((slide) => {
//               const imageSrc = getImageSrc(slide)
//               const isActive = activeSlide === slide.id
//               const isImageLoaded = loadedImages.has(slide.id) || imageErrors.has(slide.id)
              
//               return (
//                 <div
//                   key={slide.id}
//                   onMouseEnter={() => !isTransitioning && setActiveSlide(slide.id)}
//                   className={cn(
//                     "relative h-full transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden group cursor-pointer",
//                     isActive ? "flex-[3]" : "flex-[1]",
//                     isTransitioning && "transition-all duration-1000"
//                   )}
//                   onClick={() => goToSlide(slide.id)}
//                 >
//                   {/* Background Image with smooth transition */}
//                   <div className="absolute inset-0 z-0">
//                     <div className="relative w-full h-full">
//                       <Image
//                         src={imageSrc}
//                         alt={slide.title}
//                         fill
//                         className={cn(
//                           "object-cover w-full h-full transition-all duration-1500 ease-out",
//                           isImageLoaded 
//                             ? isActive 
//                               ? "scale-110 opacity-90 blur-0" 
//                               : "scale-105 opacity-70 blur-[0.5px]" 
//                             : "opacity-0 scale-100",
//                           imageErrors.has(slide.id) && "object-cover"
//                         )}
//                         sizes="25vw"
//                         quality={90}
//                         onLoad={() => handleImageLoad(slide.id)}
//                         onError={() => handleImageError(slide.id)}
//                         unoptimized={imageErrors.has(slide.id)}
//                       />
                      
//                       {/* Gradient overlay that fades in */}
//                       <div className={cn(
//                         "absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-1000",
//                         isActive ? "opacity-100" : "opacity-80"
//                       )} />
                      
//                       {/* Color overlay */}
//                       <div className={cn(
//                         "absolute inset-0 transition-all duration-1000",
//                         isActive ? "opacity-30" : "opacity-15",
//                         getLightColorClass(slide.color)
//                       )} />
                      
//                       {/* Loading shimmer */}
//                       {!isImageLoaded && (
//                         <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]" />
//                       )}
//                     </div>
//                   </div>

//                   {/* Content with smooth animations */}
//                   <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
//                     {/* Icon with bounce animation */}
//                     <div className={cn(
//                       "mb-6 transition-all duration-700 ease-out",
//                       isActive ? "scale-100 translate-y-0 opacity-100 animate-[bounce_2s_ease-in-out_infinite]" : "scale-90 translate-y-4 opacity-70"
//                     )}>
//                       <div className={cn(
//                         "inline-flex p-3 rounded-2xl backdrop-blur-sm border transition-all duration-500",
//                         isActive 
//                           ? "border-white/50 bg-white/20" 
//                           : "border-white/20 bg-black/20",
//                         "shadow-lg"
//                       )}>
//                         {slide.icon}
//                       </div>
//                     </div>
                    
//                     {/* Title with slide up animation */}
//                     <h2 className={cn(
//                       "text-2xl lg:text-4xl font-black uppercase tracking-tighter transition-all duration-700 ease-out",
//                       isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-70"
//                     )}>
//                       {slide.title}
//                     </h2>

//                     {/* Content that expands with fade-in */}
//                     <div
//                       className={cn(
//                         "transition-all duration-1000 ease-out overflow-hidden",
//                         isActive ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
//                       )}
//                     >
//                       <p className="text-sm lg:text-base max-w-sm leading-relaxed mb-8 text-white/90">
//                         {slide.description}
//                       </p>
//                       <Button 
//                         asChild 
//                         className={cn(
//                           "group relative overflow-hidden transition-all duration-500 transform",
//                           isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
//                           getColorClass(slide.color)
//                         )}
//                         size="lg"
//                       >
//                         <a href={slide.buttonLink}>
//                           <span className="relative z-10">Learn More</span>
//                           {/* Button shine effect */}
//                           <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
//                         </a>
//                       </Button>
//                     </div>
//                   </div>

//                   {/* Slide number indicator */}
//                   <div className="absolute top-4 right-4">
//                     <div className={cn(
//                       "relative text-3xl lg:text-4xl font-black select-none transition-all duration-500",
//                       isActive ? "text-white/30" : "text-white/10"
//                     )}>
//                       0{slide.id}
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>

//         {/* Simplified Controls - No FRAME box */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-20">
//           {/* Slide indicators */}
//           <div className="flex items-center gap-2 backdrop-blur-md bg-black/30 p-4 rounded-2xl border border-white/10">
//             {currentSlides.map((slide) => (
//               <button
//                 key={slide.id}
//                 onClick={() => goToSlide(slide.id)}
//                 className={cn(
//                   "w-2 h-2 rounded-full transition-all duration-300",
//                   activeSlide === slide.id 
//                     ? 'bg-white w-6' 
//                     : 'bg-white/50 hover:bg-white/70'
//                 )}
//                 disabled={isTransitioning}
//                 aria-label={`Go to slide ${slide.id}`}
//               />
//             ))}
//           </div>

//           {/* Navigation and Auto-play */}
//           <div className="flex items-center gap-2 backdrop-blur-md bg-black/30 p-4 rounded-2xl border border-white/10">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={handlePrevSlide}
//               className={cn(
//                 "rounded-full transition-all duration-300 hover:scale-110",
//                 "bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md"
//               )}
//               disabled={isTransitioning}
//               aria-label="Previous slide"
//             >
//               <ChevronLeft size={20} />
//             </Button>
            
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleAutoPlay}
//               className={cn(
//                 "rounded-full transition-all duration-300 hover:scale-110",
//                 "bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md"
//               )}
//               title={isAutoPlay ? "Pause rotation" : "Play rotation"}
//             >
//               {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
//             </Button>
            
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={handleNextSlide}
//               className={cn(
//                 "rounded-full transition-all duration-300 hover:scale-110",
//                 "bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md"
//               )}
//               disabled={isTransitioning}
//               aria-label="Next slide"
//             >
//               <ChevronRight size={20} />
//             </Button>
//           </div>

//           {/* Current slide indicator */}
//           <div className="backdrop-blur-md bg-black/30 p-3 rounded-xl border border-white/10">
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-white/70">Slide</span>
//               <span className="text-sm text-white font-medium">
//                 {activeSlide} <span className="text-white/50">/</span> {slides.length}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Frame toggle - minimal */}
//         <div className="absolute bottom-8 right-8 z-20">
//           <div className="flex items-center gap-2 backdrop-blur-md bg-black/30 p-2 rounded-xl border border-white/10">
//             <button
//               onClick={handlePrevFrame}
//               className={cn(
//                 "px-3 py-1 text-xs text-white/70 hover:text-white transition-colors",
//                 isTransitioning && "opacity-50 cursor-not-allowed"
//               )}
//               disabled={isTransitioning}
//             >
//               Frame {currentFrame + 1 === 1 ? 2 : 1}
//             </button>
//             <div className="w-px h-4 bg-white/20" />
//             <button
//               onClick={handleNextFrame}
//               className={cn(
//                 "px-3 py-1 text-xs text-white/70 hover:text-white transition-colors",
//                 isTransitioning && "opacity-50 cursor-not-allowed"
//               )}
//               disabled={isTransitioning}
//             >
//               Frame {currentFrame + 1}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Layout - Carousel */}
//       <div className="lg:hidden relative h-screen w-full overflow-hidden">
//         {/* Slides Container */}
//         <div className="relative h-full w-full">
//           {slides.map((slide) => {
//             const imageSrc = getImageSrc(slide)
//             const isActive = activeSlide === slide.id
//             const isImageLoaded = loadedImages.has(slide.id) || imageErrors.has(slide.id)
            
//             return (
//               <div
//                 key={slide.id}
//                 className={cn(
//                   "absolute inset-0 transition-all duration-700 ease-out",
//                   isActive 
//                     ? "opacity-100 translate-x-0 z-10" 
//                     : "opacity-0 translate-x-full z-0"
//                 )}
//               >
//                 <div className="absolute inset-0 z-0">
//                   <Image
//                     src={imageSrc}
//                     alt={slide.title}
//                     fill
//                     className={cn(
//                       "object-cover w-full h-full transition-all duration-1000 ease-out",
//                       isImageLoaded ? "opacity-80" : "opacity-0"
//                     )}
//                     sizes="100vw"
//                     quality={85}
//                     onLoad={() => handleImageLoad(slide.id)}
//                     onError={() => handleImageError(slide.id)}
//                     unoptimized={imageErrors.has(slide.id)}
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
//                   <div className={cn(
//                     "absolute inset-0 opacity-30",
//                     getLightColorClass(slide.color)
//                   )} />
//                 </div>

//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
//                   <div className="mb-6 animate-[bounce_2s_ease-in-out_infinite]">
//                     <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
//                       {slide.icon}
//                     </div>
//                   </div>
                  
//                   <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 animate-fade-in">
//                     {slide.title}
//                   </h2>

//                   <p className="text-lg leading-relaxed mb-8 max-w-md text-white/90 animate-fade-in animate-delay-100">
//                     {slide.description}
//                   </p>
                  
//                   <Button 
//                     asChild 
//                     className={cn(
//                       "w-full sm:w-auto animate-fade-in animate-delay-200",
//                       getColorClass(slide.color)
//                     )}
//                     size="lg"
//                   >
//                     <a href={slide.buttonLink}>Learn More</a>
//                   </Button>
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//         {/* Mobile Controls */}
//         <div className="absolute bottom-8 left-0 right-0 px-6 z-20">
//           <div className="backdrop-blur-xl bg-black/40 rounded-2xl p-4 border border-white/10 shadow-2xl">
//             {/* Slide indicators */}
//             <div className="flex items-center justify-center gap-2 mb-4">
//               {slides.map((slide) => (
//                 <button
//                   key={slide.id}
//                   onClick={() => goToSlide(slide.id)}
//                   className={cn(
//                     "w-2 h-2 rounded-full transition-all duration-300",
//                     activeSlide === slide.id 
//                       ? 'bg-white w-6' 
//                       : 'bg-white/50 hover:bg-white/70'
//                   )}
//                   disabled={isTransitioning}
//                   aria-label={`Go to slide ${slide.id}`}
//                 />
//               ))}
//             </div>
            
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={toggleAutoPlay}
//                   className="rounded-full bg-white/10 hover:bg-white/20 text-white"
//                   title={isAutoPlay ? "Pause" : "Play"}
//                 >
//                   {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
//                 </Button>
//                 <span className="text-sm text-white/80">
//                   {activeSlide} / {slides.length}
//                 </span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={handlePrevSlide}
//                   className="rounded-full bg-white/10 hover:bg-white/20 text-white"
//                   disabled={isTransitioning}
//                 >
//                   <ChevronLeft size={24} />
//                 </Button>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={handleNextSlide}
//                   className="rounded-full bg-white/10 hover:bg-white/20 text-white"
//                   disabled={isTransitioning}
//                 >
//                   <ChevronRight size={24} />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Loading Overlay */}
//       {isInitialLoading && (
//         <div className="absolute inset-0 flex items-center justify-center z-30 bg-gray-900">
//           <div className="text-center space-y-6">
//             {/* Animated spinner */}
//             <div className="relative w-20 h-20 mx-auto">
//               <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
//               <div className="absolute inset-0 border-4 border-t-white border-transparent rounded-full animate-spin" />
//             </div>
            
//             <div className="space-y-3">
//               <p className="text-white text-lg font-semibold">
//                 Loading Security Services
//               </p>
//               <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
//                   style={{
//                     width: `${((loadedImages.size + imageErrors.size) / slides.length) * 100}%`
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add Tailwind animations to globals.css or tailwind.config.js */}
//       <style jsx global>{`
//         @keyframes shimmer {
//           0% { background-position: -200% 0; }
//           100% { background-position: 200% 0; }
//         }
        
//         @keyframes bounce {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }
        
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   )
// }

// export default Hero

"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Users, Flame, ChevronLeft, ChevronRight, ArrowRight, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

// --- Configuration ---
const SLIDE_DURATION = 6000

const slides = [
  {
    id: 1,
    // This path looks for: public/hero/patrol-services.jpg
    imageSrc: "/hero/patrol-services.jpg", 
    title: "Mobile Patrol",
    description: "High-visibility patrol units providing round-the-clock deterrence and rapid response for your properties.",
    link: "/services/mobile-patrol",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "blue"
  },
  {
    id: 2,
    imageSrc: "/hero/armed-security.jpg",
    title: "Armed Protection",
    description: "Elite, highly-trained armed personnel for high-risk environments requiring elevated security measures.",
    link: "/services/armed-security",
    icon: <Users className="w-6 h-6" />,
    color: "red"
  },
  {
    id: 3,
    imageSrc: "/hero/construction-security.jpg",
    title: "Construction",
    description: "Specialized site security preventing theft, vandalism, and unauthorized access to your projects.",
    link: "/services/construction-security",
    icon: <Building2 className="w-6 h-6" />,
    color: "amber"
  },
  {
    id: 4,
    imageSrc: "/hero/fire-watch.jpg",
    title: "Fire Watch",
    description: "NFPA-compliant fire watch services ensuring compliance and safety during system outages.",
    link: "/services/fire-watch",
    icon: <Flame className="w-6 h-6" />,
    color: "orange"
  }
]

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // --- Auto Play Logic ---
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (isHovering) return 
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [nextSlide, isHovering])

  // --- Helper for Colors ---
  const getHighlightColor = (color: string) => {
    const map: Record<string, string> = {
      blue: "bg-blue-600",
      red: "bg-red-600",
      amber: "bg-amber-600",
      orange: "bg-orange-600",
    }
    return map[color] || "bg-slate-600"
  }

  return (
    <section 
      className="relative h-[100dvh] w-full bg-slate-950 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* --- DESKTOP VIEW (Accordion) --- */}
      <div className="hidden lg:flex w-full h-full">
        {slides.map((slide, index) => {
          const isActive = activeIndex === index
          return (
            <div
              key={slide.id}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden border-r border-white/5 last:border-r-0 group",
                isActive ? "flex-[4]" : "flex-[1] hover:flex-[1.2]"
              )}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={slide.imageSrc} // FIXED: Points to local folder now
                  alt={slide.title}
                  fill
                  // Priority loads the first image immediately (fixes "loading late" issue)
                  priority={index === 0} 
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={cn(
                    "object-cover transition-transform duration-1000",
                    isActive ? "scale-105" : "scale-125 saturate-50 opacity-60 group-hover:scale-110 group-hover:opacity-80"
                  )}
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/90 transition-opacity duration-500",
                  isActive ? "opacity-100" : "opacity-80"
                )} />
              </div>

              {/* Inactive State Label (Vertical Text) */}
              <div className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-10",
                isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-200"
              )}>
                <h3 className="text-2xl font-bold text-white/80 uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                  {slide.title}
                </h3>
              </div>

              {/* Active Content */}
              <div className={cn(
                "absolute inset-0 z-20 flex flex-col justify-end p-12 transition-all duration-700",
                isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}>
                <div className="max-w-xl space-y-6">
                  {/* Icon & Label */}
                  <div className="flex items-center gap-3">
                    <div className={cn("p-3 rounded-lg text-white", getHighlightColor(slide.color))}>
                      {slide.icon}
                    </div>
                    <span className={cn("text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white")}>
                      ProForce 1 Security
                    </span>
                  </div>

                  <h2 className="text-5xl md:text-6xl font-black text-white uppercase leading-[0.9]">
                    {slide.title}
                  </h2>
                  
                  <p className="text-lg text-slate-300 leading-relaxed max-w-md">
                    {slide.description}
                  </p>

                  <div className="pt-4">
                    <Button asChild size="lg" className={cn("rounded-full px-8 h-12 text-base font-bold transition-all hover:scale-105", getHighlightColor(slide.color))}>
                      <Link href={slide.link}>
                        View Details <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* --- MOBILE VIEW (Carousel) --- */}
      <div className="lg:hidden relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
             <Image
              src={slide.imageSrc} // FIXED: Points to local folder
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90" />
            
            <div className="absolute inset-0 flex flex-col justify-end p-6 pb-24 z-20">
               <div className={cn("self-start p-3 rounded-lg text-white mb-4", getHighlightColor(slide.color))}>
                  {slide.icon}
               </div>
               <h2 className="text-4xl font-black text-white uppercase mb-2">{slide.title}</h2>
               <p className="text-slate-300 text-sm mb-6 line-clamp-3">{slide.description}</p>
               <Button asChild className={cn("w-full font-bold", getHighlightColor(slide.color))}>
                  <Link href={slide.link}>Explore Service</Link>
               </Button>
            </div>
          </div>
        ))}

        {/* Mobile Navigation Controls */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-between items-center px-6">
           <div className="flex gap-2">
             {slides.map((_, idx) => (
               <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === activeIndex ? "w-8 bg-white" : "w-2 bg-white/30"
                )}
               />
             ))}
           </div>
           <div className="flex gap-2">
             <Button size="icon" variant="outline" className="h-10 w-10 rounded-full border-white/20 bg-black/20 text-white hover:bg-white hover:text-black" onClick={prevSlide}>
               <ChevronLeft className="h-4 w-4" />
             </Button>
             <Button size="icon" variant="outline" className="h-10 w-10 rounded-full border-white/20 bg-black/20 text-white hover:bg-white hover:text-black" onClick={nextSlide}>
               <ChevronRight className="h-4 w-4" />
             </Button>
           </div>
        </div>
      </div>

    </section>
  )
}

export default Hero