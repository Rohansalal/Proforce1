"use client"

import { ShieldCheck, Clock4, BadgeCheck, PhoneCall, Building2, Award } from "lucide-react"

const items = [
  { icon: ShieldCheck, label: "Licensed • Bonded • Insured" },
  { icon: Clock4, label: "Rapid Response • 24/7 Dispatch" },
  { icon: Building2, label: "Orange County • Same‑Day Deployment" },
  { icon: Award, label: "BBB A+ • Trusted by Hundreds" },
  { icon: BadgeCheck, label: "Trained • Vetted • Professional" },
  { icon: PhoneCall, label: "Free Quote: (800) 000‑0000" },
]

export function TopAnalytics() {
  return (
    <div
      className="relative overflow-hidden bg-secondary text-secondary-foreground"
      role="region"
      aria-label="Company highlights and availability"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-2">
        {/* Duplicate track for seamless marquee */}
        <div className="flex items-center gap-8 whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex items-center gap-8 animate-marquee will-change-transform">
            {items.map((it, i) => (
              <li key={`a-${i}`} className="inline-flex items-center gap-2 text-sm">
                <it.icon size={16} aria-hidden className="text-primary" />
                <span className="font-medium">{it.label}</span>
              </li>
            ))}
          </ul>
          <ul aria-hidden className="flex items-center gap-8 animate-marquee will-change-transform">
            {items.map((it, i) => (
              <li key={`b-${i}`} className="inline-flex items-center gap-2 text-sm">
                <it.icon size={16} aria-hidden className="text-primary" />
                <span className="font-medium">{it.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopAnalytics
