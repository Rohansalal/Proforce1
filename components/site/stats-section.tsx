"use client"

import { useEffect, useState, useRef } from "react"

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