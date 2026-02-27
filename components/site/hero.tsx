"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
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
import { motion, AnimatePresence } from "framer-motion"

// --- Configuration ---
const SLIDE_DURATION = 5000 // 5 Seconds per slide

const slides = [
  {
    id: 1,
    videoSrc: "/hero/patrol-services.mp4",
    poster: "/hero/patrol-services.jpg",
    title: "Mobile Patrol",
    subtitle: "Mobile Security Patrols",
    description: "Highly-visible, proactive patrol units ensuring round-the-clock safety and rapid response for your California business or property.",
    link: "/services/mobile-patrol-security",
    icon: <ShieldCheck className="w-6 h-6" />,
    theme: "blue"
  },
  {
    id: 2,
    videoSrc: "/hero/armed-security.mp4",
    poster: "/hero/armed-security.jpg",
    title: "Armed Security",
    subtitle: "Armed Protection Guards",
    description: "Trained tactical personnel equipped to instantly neutralize threats and secure high-risk environments with absolute authority.",
    link: "/services/armed-security",
    icon: <Users className="w-6 h-6" />,
    theme: "red"
  },
  {
    id: 3,
    videoSrc: "/hero/construction-security.mp4",
    poster: "/hero/construction-security.jpg",
    title: "Construction Security",
    subtitle: "Construction Security",
    description: "Stop equipment theft and unauthorized access dead in its tracks with dedicated, strict monitoring for your active build projects.",
    link: "/services/construction-security",
    icon: <Building2 className="w-6 h-6" />,
    theme: "amber"
  },
  {
    id: 4,
    videoSrc: "/Services/fire-security/fire-watch1.mp4",
    poster: "/hero/fire-watch.jpg",
    title: "Fire Watch Security",
    subtitle: "Certified Fire Watch",
    description: "Ensure full NFPA compliance and protect your assets from catastrophe during system outages with strict 24/7 fire guard service.",
    link: "/services/fire-watch-security",
    icon: <Flame className="w-6 h-6" />,
    theme: "orange"
  }
]

// --- SUB-COMPONENT: Video Player ---
const VideoSlide = ({ src, poster, isActive, isPreloading, isFirst, posterColor, onVideoEnd, onDurationUpdate }: { src: string, poster: string, isActive: boolean, isPreloading: boolean, isFirst: boolean, posterColor: string, onVideoEnd: () => void, onDurationUpdate: (duration: number) => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasError, setHasError] = useState(false)
  const [shouldRender, setShouldRender] = useState(isActive || isPreloading)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Ensure checking for updates on props change
  useEffect(() => {
    if (isActive || isPreloading) setShouldRender(true)
  }, [isActive, isPreloading])

  useEffect(() => {
    if (!shouldRender) return

    const video = videoRef.current
    if (!video) return

    if (video.readyState >= 3) {
      setIsVideoLoaded(true)
    }

    if (isActive) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => console.warn(error))
      }
    } else {
      video.pause()
      video.currentTime = 0 // Reset time for next views
    }
  }, [isActive, shouldRender])

  // Timer fallback for error state
  useEffect(() => {
    if (hasError && isActive) {
      const timer = setTimeout(onVideoEnd, 5000) // Fallback to 5s if video cannot play
      onDurationUpdate(5000)
      return () => clearTimeout(timer)
    }
  }, [hasError, isActive, onVideoEnd, onDurationUpdate])

  const handleDuration = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const dur = e.currentTarget.duration
    if (dur && dur > 0 && dur !== Infinity) {
      onDurationUpdate(dur * 1000)
    }
  }

  if (hasError || !shouldRender) {
    if (!shouldRender) return null; // Massive DOM savings

    return (
      <div className={cn("absolute inset-0 w-full h-full transition-opacity duration-1000 will-change-transform", isActive ? "opacity-100 z-10" : "opacity-0 z-0", posterColor)}>
        {poster && (
          <Image
            src={poster}
            alt="Slide poster"
            fill
            className="object-cover opacity-100"
            sizes="(max-width: 768px) 100vw, 1vw"
            quality={60}
            priority={isFirst}
            fetchPriority={isFirst ? "high" : "auto"}
          />
        )}
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
      </div>
    )
  }

  return (
    <div className={cn(
      "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out will-change-transform",
      isActive ? "opacity-100 z-10" : "opacity-0 z-0"
    )}>
      {/* Uniform Overlay */}
      <div className="absolute inset-0 bg-slate-950/60 z-20" />

      {/* Poster Image (For subsequent slides or mobile) */}
      {!isFirst && (
        <Image
          src={poster}
          alt="Slide poster"
          fill
          sizes="(max-width: 768px) 100vw, 1vw"
          quality={40}
          className={cn(
            "object-cover transition-opacity duration-1000 z-0",
            isVideoLoaded ? "opacity-0" : "opacity-100"
          )}
          priority={false}
          fetchPriority="auto"
        />
      )}

      {/* Video (All Devices) */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 z-10",
          isVideoLoaded ? "opacity-100" : "opacity-0"
        )}
        muted
        playsInline
        preload="none" // STRICTLY DO NOT PRELOAD - Wait for .play() event to download data!
        {...(isFirst ? { fetchPriority: "high" } : {})}
        onCanPlay={() => setIsVideoLoaded(true)}
        onLoadedMetadata={handleDuration}
        onLoadedData={(e) => {
          setIsVideoLoaded(true)
          handleDuration(e)
        }}
        onEnded={onVideoEnd}
        onError={() => setHasError(true)}
      />
    </div>
  )
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [durations, setDurations] = useState<number[]>(slides.map(() => SLIDE_DURATION))
  const [allowVideos, setAllowVideos] = useState(false) // DELAY VIDEO MOUNTING

  // Delay the mounting of background videos by 1.5s to free up Main Thread
  useEffect(() => {
    const timer = setTimeout(() => setAllowVideos(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleDurationUpdate = useCallback((index: number, duration: number) => {
    setDurations((prev) => {
      if (prev[index] === duration) return prev
      const newDurations = [...prev]
      newDurations[index] = duration
      return newDurations
    })
  }, [])

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

  // Mobile Swipe Logic
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const onTouchEndHandler = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) nextSlide()
    if (distance < -50) prevSlide()
  }

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      // case "blue": return "bg-blue-600 shadow-blue-500/30"
      // case "red": return "bg-red-600 shadow-red-500/30"
      case "blue": return "bg-red-600 shadow-red-500/20"
      case "red": return "bg-red-600 shadow-red-500/20"
      case "amber": return "bg-red-600 shadow-red-500/20"
      case "orange": return "bg-red-600 shadow-red-500/20"
      default: return "bg-slate-600"
    }
  }

  const currentSlide = slides[activeIndex]

  return (
    <section
      className="relative h-[85dvh] w-full bg-slate-950 overflow-hidden"
      style={{ fontFamily: '"Inter", sans-serif' }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEndHandler}
    >
      {/* --- 0. STATIC LCP IMAGE ROOT (Guarantees pure HTML render without JS hydration blocking) --- */}
      <Image
        src={slides[0].poster}
        alt="Hero Background"
        fill
        priority
        sizes="100vw"
        quality={70}
        className={cn(
          "object-cover z-0 pointer-events-none",
          activeIndex !== 0 && "hidden"
        )}
      />

      {/* --- 1. VIDEO LAYER (Delayed by 1.5s to unblock TBT) --- */}
      {allowVideos && slides.map((slide, index) => {
        const nextIndex = (activeIndex + 1) % slides.length
        return (
          <VideoSlide
            key={slide.id}
            src={slide.videoSrc}
            poster={slide.poster}
            isActive={activeIndex === index}
            isPreloading={nextIndex === index}
            isFirst={index === 0}
            posterColor={getThemeStyles(slide.theme)}
            onVideoEnd={nextSlide}
            onDurationUpdate={(dur) => handleDurationUpdate(index, dur)}
          />
        )
      })}

      {/* Global Gradients (No Left Shade) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

      {/* --- 2. CONTENT LAYER --- */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center pb-32 pt-16 md:justify-center md:pb-0 px-6 md:px-12 lg:px-24 mx-auto">

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="max-w-4xl space-y-4 md:space-y-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.1 }
              },
              exit: { opacity: 0, x: -30, transition: { duration: 0.4 } }
            }}
          >

            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 20, stiffness: 100 } }
              }}
              className="flex items-center gap-2 md:gap-3"
            >
              <div className={cn("flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg text-white shadow-lg backdrop-blur-sm", getThemeStyles(currentSlide.theme))}>
                {/* Scale icon down on mobile */}
                <div className="scale-75 md:scale-100">{currentSlide.icon}</div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] md:text-sm font-bold tracking-widest text-white uppercase shadow-sm">
                <span className={cn("w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse", getThemeStyles(currentSlide.theme).split(" ")[0])} />
                {currentSlide.subtitle}
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } }
              }}
              className="relative z-50 text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tighter drop-shadow-2xl"
            >
              {currentSlide.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } }
              }}
              className="text-sm sm:text-base md:text-xl text-slate-200 font-medium leading-relaxed max-w-[280px] sm:max-w-md md:max-w-2xl drop-shadow-lg"
            >
              {currentSlide.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } }
              }}
              className="relative z-50 flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 w-full sm:w-auto"
            >
              <Button
                asChild
                className={cn(
                  "h-12 md:h-14 px-6 md:px-8 rounded-full text-sm md:text-base font-bold transition-all hover:scale-105 shadow-xl w-full sm:w-auto pointer-events-auto",
                  getThemeStyles(currentSlide.theme)
                )}
              >
                <Link href={currentSlide.link} className="flex items-center justify-center pointer-events-auto">
                  View Service <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 md:h-14 px-6 md:px-8 rounded-full text-sm md:text-base font-bold bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all w-full sm:w-auto pointer-events-auto"
              >
                <Link href={`${currentSlide.link}#quote-section`} className="flex items-center justify-center">
                  Request Quote
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* --- 3. DESKTOP NAVIGATION --- */}
      <div className="absolute bottom-12 right-12 z-30 hidden lg:flex flex-col items-end gap-6">
        <div className="flex gap-4">
          <Button size="icon" variant="ghost" onClick={prevSlide} aria-label="Previous slide" className="h-12 w-12 rounded-full border border-white/20 hover:bg-white hover:text-black text-white transition-all">
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="ghost" onClick={nextSlide} aria-label="Next slide" className="h-12 w-12 rounded-full border border-white/20 hover:bg-white hover:text-black text-white transition-all">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* --- 4. MOBILE NAVIGATION --- */}
      <div className="absolute bottom-6 left-5 right-5 z-30 flex lg:hidden flex-col gap-3">
        {/* Mobile Horizontal Progress */}
        <div className="flex gap-1.5 w-full">
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
                  className="absolute inset-0 bg-white animate-progress-horizontal"
                  style={{ animationDuration: `${durations[activeIndex]}ms` }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end items-center">
          <div className="flex gap-3">
            <Button size="icon" variant="ghost" onClick={prevSlide} aria-label="Previous slide" className="h-10 w-10 text-white rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" onClick={nextSlide} aria-label="Next slide" className="h-10 w-10 text-white rounded-full bg-white/10 backdrop-blur-md border border-white/10">
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

        .pause-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  )
}

export default Hero