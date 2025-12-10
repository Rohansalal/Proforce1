"use client"

import { useEffect, useState, useRef } from "react"

export function StatsSection() {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const stats = [
    { k: 1000, label: "Events Served", suffix: "+" },
    { k:460, label: "Qualified Staff", suffix: "" },
    { k: 2, label: "Our Locations", suffix: "" },
    { k:550, label: "Areas Serving", suffix: "+" },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          
          stats.forEach((stat, index) => {
            let current = 0
            const target = stat.k
            const increment = target / 50
            const duration = 2000
            const stepTime = duration / 50

            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setCounts(prev => {
                const newCounts = [...prev]
                newCounts[index] = Math.floor(current)
                return newCounts
              })
            }, stepTime)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated, stats])

  return (
    <section ref={sectionRef} className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-red-400">
              {counts[index]}
              {stat.suffix}
            </div>
            <div className="text-lg opacity-90 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}