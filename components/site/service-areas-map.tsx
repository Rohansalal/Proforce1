"use client"

import { useState, useEffect } from "react"
import { 
  Shield, 
  Clock, 
  Users, 
  ArrowRight, 
  Target, 
  Activity, 
  Wifi, 
  Lock,
  ChevronRight,
  Database
} from "lucide-react"

const scannerStyles = `
  @keyframes scan-line {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  .animate-scan {
    animation: scan-line 3s linear infinite;
  }
  .bg-grid-pattern {
    background-image: linear-gradient(to right, #1e293b 1px, transparent 1px),
                      linear-gradient(to bottom, #1e293b 1px, transparent 1px);
    background-size: 40px 40px;
  }
  @keyframes pulse-marker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  .animate-marker-pulse {
    animation: pulse-marker 2s ease-in-out infinite;
  }
`

export function ServiceAreasAdvanced() {
  const [selectedRegion, setSelectedRegion] = useState("northeast")
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const regions = [
    {
      id: "northeast",
      name: "North East Sector",
      subtext: "NY / NJ / PA / MA",
      hub: "New York HQ",
      responseTime: 12,
      capacity: 94,
      guards: 1240,
      status: "ELEVATED",
      coordinates: "40.7128° N, 74.0060° W",
      mapX: 75,
      mapY: 20
    },
    {
      id: "west-coast",
      name: "Pacific Division",
      subtext: "CA / OR / WA / NV",
      hub: "Los Angeles HQ",
      responseTime: 15,
      capacity: 88,
      guards: 980,
      status: "ACTIVE",
      coordinates: "34.0522° N, 118.2437° W",
      mapX: 15,
      mapY: 35
    },
    {
      id: "south",
      name: "Southern Command",
      subtext: "TX / FL / GA / LA",
      hub: "Houston HQ",
      responseTime: 18,
      capacity: 92,
      guards: 850,
      status: "ACTIVE",
      coordinates: "29.7604° N, 95.3698° W",
      mapX: 45,
      mapY: 65
    },
    {
      id: "midwest",
      name: "Central Territory",
      subtext: "IL / OH / MI / IN",
      hub: "Chicago HQ",
      responseTime: 22,
      capacity: 75,
      guards: 650,
      status: "STANDBY",
      coordinates: "41.8781° N, 87.6298° W",
      mapX: 55,
      mapY: 30
    },
    {
      id: "capital",
      name: "National Capital",
      subtext: "DC / VA / MD / DE",
      hub: "Washington D.C.",
      responseTime: 8,
      capacity: 98,
      guards: 1500,
      status: "MAXIMUM",
      coordinates: "38.9072° N, 77.0369° W",
      mapX: 73,
      mapY: 32
    }
  ]

  const activeData = regions.find(r => r.id === selectedRegion) || regions[0]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        const currentIndex = regions.findIndex(r => r.id === selectedRegion)
        const nextIndex = (currentIndex + 1) % regions.length
        setSelectedRegion(regions[nextIndex].id)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, selectedRegion])

  const getStatusColor = (status: string) => {
    switch(status) {
      case "MAXIMUM": return "text-red-500 animate-pulse"
      case "ELEVATED": return "text-orange-500"
      case "ACTIVE": return "text-green-500"
      case "STANDBY": return "text-yellow-500"
      default: return "text-slate-400"
    }
  }

  const getMarkerColor = (status: string) => {
    switch(status) {
      case "MAXIMUM": return "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"
      case "ELEVATED": return "bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]"
      case "ACTIVE": return "bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
      case "STANDBY": return "bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)]"
      default: return "bg-slate-400"
    }
  }

  return (
    <section className="bg-slate-950 py-24 border-t border-slate-800 overflow-hidden font-sans">
      <style>{scannerStyles}</style>
      
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <span className="text-red-600 font-bold tracking-[0.2em] text-xs uppercase">
                Live Operations Network
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              NATIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">DEFENSE GRID</span>
            </h2>
          </div>
          <div className="hidden md:block text-right mt-6 md:mt-0">
            <div className="text-xs font-mono text-slate-400 mb-1">SYSTEM STATUS</div>
            <div className="text-xl font-bold text-green-500 flex items-center justify-end gap-2">
              <Wifi className="w-5 h-5" />
              ONLINE
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch"
             onMouseEnter={() => setIsAutoPlaying(false)}
             onMouseLeave={() => setIsAutoPlaying(true)}>
          
          {/* LEFT: Region List */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {regions.map((region) => {
              const isActive = selectedRegion === region.id
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`
                    relative p-4 rounded-lg border text-left transition-all duration-300 group
                    ${isActive 
                      ? 'bg-slate-900 border-red-600 shadow-lg shadow-red-600/20 translate-x-2' 
                      : 'bg-slate-900/50 border-slate-700 hover:bg-slate-800 hover:border-slate-600'
                    }
                  `}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className={`text-xs font-bold tracking-wider mb-1 ${isActive ? 'text-red-500' : 'text-slate-400'}`}>
                        {region.hub.toUpperCase()}
                      </div>
                      <div className={`font-bold text-lg ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {region.name}
                      </div>
                      <div className={`text-xs mt-1 font-mono ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                        {region.subtext}
                      </div>
                    </div>
                    {isActive && <ChevronRight className="text-red-500 animate-pulse" />}
                  </div>
                  
                  {isActive && (
                    <div className="mt-3 w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-red-600 to-orange-500 h-full w-0 animate-[width_1s_ease-out_forwards]" style={{ width: '100%' }}></div>
                    </div>
                  )}
                </button>
              )
            })}

            {/* CTA Box */}
            <div className="mt-auto pt-6">
              <div className="p-4 bg-red-950/30 border border-red-900/50 rounded-lg">
                <h4 className="font-bold text-red-400 text-sm mb-1">Require Coverage?</h4>
                <p className="text-xs text-red-300/70 mb-3">Deployments available in all 50 states.</p>
                <button className="w-full py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-600/30">
                  INITIATE REQUEST
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: US Map Visualization */}
          <div className="lg:col-span-8 bg-slate-900 rounded-2xl overflow-hidden relative border border-slate-700 shadow-2xl flex flex-col min-h-[600px]">
            
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-slate-900 to-slate-950"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            
            {/* Top HUD */}
            <div className="relative z-10 flex justify-between items-center p-6 border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-500/10 rounded border border-red-500/30">
                  <Target className="text-red-500 w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-bold tracking-wide text-sm">{activeData.name.toUpperCase()}</div>
                  <div className="text-xs text-slate-400 font-mono">{activeData.coordinates}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                  <div className="text-xs text-slate-500 font-bold uppercase">Status</div>
                  <div className={`text-sm font-bold ${getStatusColor(activeData.status)}`}>
                    {activeData.status}
                  </div>
                </div>
                <div className="w-px h-8 bg-slate-700 hidden sm:block"></div>
                <div className="p-2 bg-slate-800 rounded-full">
                  <Lock className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative z-10 p-8 flex flex-col justify-center items-center">
              <svg viewBox="0 0 100 75" className="w-full h-full max-w-2xl" style={{ filter: 'drop-shadow(0 0 20px rgba(239, 68, 68, 0.1))' }}>
                {/* US Map Background */}
                <rect width="100" height="75" fill="#0f172a" opacity="0.5" />
                
                {/* Simplified US Continental Outline */}
                <path
                  d="M 20 15 L 25 12 L 28 13 L 30 11 L 32 12 L 33 10 L 35 11 L 36 13 L 38 12 L 40 13 L 42 12 L 44 13 L 46 12 L 48 13 L 50 12 L 52 13 L 54 12 L 56 14 L 58 13 L 60 15 L 62 14 L 64 16 L 66 15 L 68 17 L 70 16 L 72 18 L 75 20 L 77 22 L 78 25 L 80 28 L 82 32 L 83 36 L 82 40 L 80 43 L 78 45 L 76 46 L 74 45 L 72 47 L 70 46 L 68 48 L 66 47 L 64 49 L 62 48 L 60 50 L 58 49 L 56 51 L 54 50 L 52 52 L 50 51 L 48 53 L 46 52 L 44 54 L 42 53 L 40 55 L 38 54 L 36 56 L 34 55 L 32 57 L 30 56 L 28 58 L 26 57 L 24 59 L 22 58 L 20 60 L 18 59 L 16 61 L 14 60 L 12 62 L 10 60 L 8 58 L 6 56 L 5 52 L 4 48 L 3 44 L 2 40 L 1 36 L 2 32 L 3 28 L 4 24 L 5 20 L 8 18 L 12 16 L 16 14 Z"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="0.5"
                  opacity="0.6"
                />

                {/* Region Coverage Areas (Circles) */}
                {regions.map((region) => (
                  <g key={region.id}>
                    {/* Coverage radius */}
                    <circle
                      cx={region.mapX}
                      cy={region.mapY}
                      r="10"
                      fill={region.id === selectedRegion ? (region.status === "MAXIMUM" ? "#ef4444" : "#f97316") : "#64748b"}
                      opacity={region.id === selectedRegion ? 0.15 : 0.05}
                      className="transition-all duration-300"
                    />
                    
                    {/* Marker */}
                    <circle
                      cx={region.mapX}
                      cy={region.mapY}
                      r={region.id === selectedRegion ? 2.5 : 2}
                      className={`${getMarkerColor(region.status)} transition-all duration-300 cursor-pointer ${region.id === selectedRegion ? 'animate-marker-pulse' : ''}`}
                      onClick={() => setSelectedRegion(region.id)}
                    />
                    
                    {/* Label - Only show for active */}
                    {region.id === selectedRegion && (
                      <g>
                        <rect
                          x={region.mapX - 8}
                          y={region.mapY - 15}
                          width="16"
                          height="8"
                          fill="#0f172a"
                          stroke="#e11d48"
                          strokeWidth="0.3"
                          rx="1"
                        />
                        <text
                          x={region.mapX}
                          y={region.mapY - 9}
                          textAnchor="middle"
                          fontSize="2"
                          fill="#fca5a5"
                          fontWeight="bold"
                        >
                          {region.responseTime}m
                        </text>
                      </g>
                    )}
                  </g>
                ))}
              </svg>
            </div>

            {/* Bottom Stats */}
            <div className="relative z-10 border-t border-slate-700 bg-slate-900/60 p-6">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Response Time</div>
                  <div className="text-2xl font-bold text-red-500">{activeData.responseTime}m</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Active Units</div>
                  <div className="text-2xl font-bold text-green-500">{activeData.guards}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Capacity</div>
                  <div className="text-2xl font-bold text-blue-500">{activeData.capacity}%</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase mb-1">Uptime</div>
                  <div className="text-2xl font-bold text-emerald-500">100%</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}