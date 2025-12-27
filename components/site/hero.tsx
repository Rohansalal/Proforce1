"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { 
  ShieldCheck, 
  Users, 
  Flame, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Building2
} from "lucide-react"
import { cn } from "@/lib/utils" 
import { Button } from "@/components/ui/button"

// --- Configuration ---
const SLIDE_DURATION = 5000 // 5 Seconds per slide

const slides = [
  {
    id: 1,
    videoSrc: "/hero/patrol-services1.mp4", 
    title: "Mobile Patrol",
    subtitle: "Deterrence & Response",
    description: "High-visibility patrol units providing round-the-clock deterrence and rapid response for your properties.",
    link: "/services/mobile-patrol-security",
    icon: <ShieldCheck className="w-6 h-6" />,
    theme: "blue"
  },
  {
    id: 2,
    videoSrc: "/hero/armed-security.mp4",
    title: "Armed Protection",
    subtitle: "Elite Tactical Units",
    description: "Elite, highly-trained armed personnel for high-risk environments requiring elevated security measures.",
    link: "/services/armed-security",
    icon: <Users className="w-6 h-6" />,
    theme: "red"
  },
  {
    id: 3,
    videoSrc: "/hero/construction-security.mp4",
    title: "Construction",
    subtitle: "Site Integrity",
    description: "Specialized site security preventing theft, vandalism, and unauthorized access to your projects.",
    link: "/services/construction-security",
    icon: <Building2 className="w-6 h-6" />,
    theme: "amber"
  },
  {
    id: 4,
    videoSrc: "/hero/fire-watch.mp4",
    title: "Fire Watch",
    subtitle: "NFPA Compliance",
    description: "NFPA-compliant fire watch services ensuring compliance and safety during system outages.",
    link: "/services/fire-watch-security",
    icon: <Flame className="w-6 h-6" />,
    theme: "orange"
  }
]

// --- SUB-COMPONENT: Video Player ---
const VideoLayer = ({ src, isActive, posterColor }: { src: string, isActive: boolean, posterColor: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (isActive) {
      video.currentTime = 0 
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Auto-play was prevented by the browser:", error)
        })
      }
    } else {
      video.pause()
    }
  }, [isActive])

  if (hasError) {
    return <div className={cn("absolute inset-0 w-full h-full", posterColor)} />
  }

  return (
    <div className={cn(
      "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
    )}>
      {/* Uniform Overlay (No Left Shade) */}
      <div className="absolute inset-0 bg-slate-950/60 z-10" />
      
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted 
        loop 
        playsInline 
        preload="auto"
        onError={() => setHasError(true)}
      />
    </div>
  )
}

// --- MAIN COMPONENT ---
export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  
  // Touch Handling State
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  
  // Navigation Logic
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  // *** RESTORED: Auto-Play Timer (5 Seconds) ***
  useEffect(() => {
    if (isHovering) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }
    timerRef.current = setInterval(nextSlide, SLIDE_DURATION)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [nextSlide, isHovering])

  // Mobile Swipe Logic
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsHovering(true)
  }
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const onTouchEndHandler = () => {
    setIsHovering(false)
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) nextSlide()
    if (distance < -50) prevSlide()
  }

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case "blue": return "bg-blue-600 shadow-blue-500/30"
      case "red": return "bg-red-600 shadow-red-500/30"
      case "amber": return "bg-amber-600 shadow-amber-500/30"
      case "orange": return "bg-orange-600 shadow-orange-500/30"
      default: return "bg-slate-600"
    }
  }

  const currentSlide = slides[activeIndex]

  return (
    <section 
      className="relative h-[100dvh] w-full bg-slate-950 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      {/* --- 1. VIDEO LAYER --- */}
      {slides.map((slide, index) => (
        <VideoLayer 
          key={slide.id}
          src={slide.videoSrc}
          isActive={activeIndex === index}
          posterColor={getThemeStyles(slide.theme)} 
        />
      ))}

      {/* Global Gradients (No Left Shade) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

      {/* --- 2. CONTENT LAYER --- */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end pb-24 md:justify-center md:pb-0 px-6 md:px-12 lg:px-24 max-w-[1800px] mx-auto">
        
        <div key={activeIndex} className="max-w-4xl space-y-6 animate-in fade-in slide-in-from-left-4 duration-700 fill-mode-forwards">
          
          {/* Badge */}
          <div className="flex items-center gap-3">
            <div className={cn("flex items-center justify-center w-10 h-10 rounded-lg text-white shadow-lg backdrop-blur-sm", getThemeStyles(currentSlide.theme))}>
              {currentSlide.icon}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs md:text-sm font-bold tracking-widest text-white uppercase shadow-sm">
              <span className={cn("w-2 h-2 rounded-full animate-pulse", getThemeStyles(currentSlide.theme).split(" ")[0])} />
              {currentSlide.subtitle}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter drop-shadow-2xl">
            {currentSlide.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl drop-shadow-lg">
            {currentSlide.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              asChild 
              size="lg" 
              className={cn(
                "h-14 px-8 rounded-full text-base font-bold transition-all hover:scale-105 shadow-xl", 
                getThemeStyles(currentSlide.theme)
              )}
            >
              <Link href={currentSlide.link}>
                View Service <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 rounded-full text-base font-bold bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all"
            >
              <Link href="/contact">
                Request Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* --- 3. DESKTOP NAVIGATION --- */}
      <div className="absolute bottom-12 right-12 z-30 hidden lg:flex flex-col items-end gap-6">
        <div className="font-mono text-2xl font-bold text-white tracking-widest opacity-90">
          0{activeIndex + 1} <span className="text-white/40 text-lg">/ 0{slides.length}</span>
        </div>

        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="group relative h-20 w-3 flex flex-col justify-end overflow-hidden focus:outline-none transition-all"
            >
              <div className={cn(
                "w-1.5 rounded-full transition-all duration-500 mx-auto",
                idx === activeIndex ? "h-full bg-white/20" : "h-3 bg-white/40 hover:bg-white/80"
              )}>
                 {/* Desktop Vertical Progress Bar */}
                 {idx === activeIndex && !isHovering && (
                  <div 
                    className="absolute bottom-0 left-0 right-0 bg-white w-full animate-progress-vertical"
                    style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                  />
                 )}
                 {idx === activeIndex && isHovering && (
                   <div className="absolute inset-0 bg-white w-full" />
                 )}
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <Button size="icon" variant="ghost" onClick={prevSlide} className="h-12 w-12 rounded-full border border-white/20 hover:bg-white hover:text-black text-white transition-all">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="ghost" onClick={nextSlide} className="h-12 w-12 rounded-full border border-white/20 hover:bg-white hover:text-black text-white transition-all">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* --- 4. MOBILE NAVIGATION --- */}
      <div className="absolute bottom-6 left-6 right-6 z-30 flex lg:hidden flex-col gap-4">
        {/* Mobile Horizontal Progress */}
        <div className="flex gap-2 w-full">
          {slides.map((_, idx) => (
            <div 
              key={idx} 
              className={cn(
                "h-1 rounded-full bg-white/20 transition-all duration-300 relative overflow-hidden",
                idx === activeIndex ? "flex-1" : "w-2"
              )}
            >
              {idx === activeIndex && (
                <div 
                  className={cn("absolute inset-0 bg-white", !isHovering && "animate-progress-horizontal")}
                  style={{ animationDuration: `${SLIDE_DURATION}ms` }}
                />
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
            <span className="text-white/70 text-sm font-mono tracking-widest">
              0{activeIndex + 1} / 0{slides.length}
            </span>
            <div className="flex gap-3">
                <Button size="icon" variant="ghost" onClick={prevSlide} className="h-10 w-10 text-white rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                    <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" onClick={nextSlide} className="h-10 w-10 text-white rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
        </div>
      </div>

      {/* CSS Keyframes for Timer Animation */}
      <style jsx global>{`
        @keyframes progress-horizontal {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress-horizontal {
          animation-name: progress-horizontal;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        @keyframes progress-vertical {
          from { height: 0%; }
          to { height: 100%; }
        }
        .animate-progress-vertical {
          animation-name: progress-vertical;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  )
}

export default Hero