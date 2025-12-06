"use client"

import { useState } from "react"
import { MapPin, Navigation, Shield, Clock } from "lucide-react"

export function ServiceAreasMap() {
  const [selectedArea, setSelectedArea] = useState("orange-county")

  const serviceAreas = [
    {
      id: "orange-county",
      name: "Orange County",
      cities: ["Anaheim", "Santa Ana", "Irvine", "Huntington Beach", "Garden Grove", "Fullerton", "Orange", "Costa Mesa"],
      responseTime: "15 min",
      guards: "45+",
      color: "#dc2626"
    },
    {
      id: "los-angeles",
      name: "Los Angeles County", 
      cities: ["Los Angeles", "Long Beach", "Glendale", "Santa Clarita", "Torrance", "Pasadena", "Burbank", "Pomona"],
      responseTime: "20 min",
      guards: "85+",
      color: "#ef4444"
    },
    {
      id: "san-diego",
      name: "San Diego County",
      cities: ["San Diego", "Chula Vista", "Oceanside", "Escondido", "Carlsbad", "El Cajon", "Vista", "San Marcos"],
      responseTime: "25 min",
      guards: "35+",
      color: "#f87171"
    },
    {
      id: "riverside",
      name: "Riverside County",
      cities: ["Riverside", "Moreno Valley", "Corona", "Murrieta", "Temecula", "Jurupa Valley", "Hemet", "Perris"],
      responseTime: "30 min",
      guards: "28+",
      color: "#dc2626"
    },
    {
      id: "san-bernardino",
      name: "San Bernardino County",
      cities: ["San Bernardino", "Fontana", "Rancho Cucamonga", "Ontario", "Victorville", "Rialto", "Hesperia", "Chino"],
      responseTime: "35 min",
      guards: "32+",
      color: "#ef4444"
    },
    {
      id: "bay-area",
      name: "Bay Area",
      cities: ["San Francisco", "San Jose", "Oakland", "Fremont", "Santa Rosa", "Hayward", "Sunnyvale", "Concord"],
      responseTime: "45 min",
      guards: "55+",
      color: "#f87171"
    },
    {
      id: "central-valley",
      name: "Central Valley",
      cities: ["Sacramento", "Fresno", "Bakersfield", "Stockton", "Modesto", "Visalia", "Merced", "Clovis"],
      responseTime: "60 min",
      guards: "25+",
      color: "#dc2626"
    },
    {
      id: "coastal",
      name: "Coastal Regions",
      cities: ["Santa Barbara", "Ventura", "Oxnard", "San Luis Obispo", "Monterey", "Santa Cruz", "Salinas", "Ventura"],
      responseTime: "40 min",
      guards: "20+",
      color: "#ef4444"
    }
  ]

  const currentArea = serviceAreas.find(area => area.id === selectedArea)

  return (
    <section className="bg-white py-16 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SERVING ALL OF CALIFORNIA
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional security services deployed statewide with rapid response teams
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* California Map */}
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">CALIFORNIA SERVICE AREAS</h3>
              <div className="flex items-center text-sm text-gray-600">
                <Shield className="w-4 h-4 mr-1 text-red-600" />
                <span>Security Coverage</span>
              </div>
            </div>

            {/* Simplified California Map */}
            <div className="relative bg-blue-50 border border-gray-200 rounded-lg p-4">
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-auto"
              >
                {/* California Outline */}
                <path
                  d="M80,80 L120,60 L160,70 L200,80 L240,90 L280,100 L320,110 L340,130 L320,150 L300,170 L280,190 L260,210 L240,230 L220,250 L200,270 L180,250 L160,230 L140,210 L120,190 L100,170 L80,150 L60,130 L40,110 L60,90 Z"
                  fill="#f8fafc"
                  stroke="#cbd5e1"
                  strokeWidth="2"
                />

                {/* Service Area Markers */}
                {/* Orange County */}
                <circle 
                  cx="180" 
                  cy="180" 
                  r="12" 
                  fill={selectedArea === "orange-county" ? "#dc2626" : "#ef4444"}
                  stroke="#fff"
                  strokeWidth="2"
                  className="cursor-pointer hover:r-14 transition-all"
                  onClick={() => setSelectedArea("orange-county")}
                />
                
                {/* Los Angeles */}
                <circle 
                  cx="160" 
                  cy="150" 
                  r="14" 
                  fill={selectedArea === "los-angeles" ? "#dc2626" : "#ef4444"}
                  stroke="#fff"
                  strokeWidth="2"
                  className="cursor-pointer hover:r-16 transition-all"
                  onClick={() => setSelectedArea("los-angeles")}
                />
                
                {/* San Diego */}
                <circle 
                  cx="200" 
                  cy="220" 
                  r="10" 
                  fill={selectedArea === "san-diego" ? "#dc2626" : "#ef4444"}
                  stroke="#fff"
                  strokeWidth="2"
                  className="cursor-pointer hover:r-12 transition-all"
                  onClick={() => setSelectedArea("san-diego")}
                />
                
                {/* Riverside */}
                <circle 
                  cx="210" 
                  cy="160" 
                  r="10" 
                  fill={selectedArea === "riverside" ? "#dc2626" : "#ef4444"}
                  stroke="#fff"
                  strokeWidth="2"
                  className="cursor-pointer hover:r-12 transition-all"
                  onClick={() => setSelectedArea("riverside")}
                />
                
                {/* San Bernardino */}
                <circle 
                  cx="230" 
                  cy="140" 
                  r="11" 
                  fill={selectedArea === "san-bernardino" ? "#dc2626" : "#ef4444"}
                  stroke="#fff"
                  strokeWidth="2"
                  className="cursor-pointer hover:r-13 transition-all"
                  onClick={() => setSelectedArea("san-bernardino")}
                />
                
                {/* Bay Area */}
                <circle 
                  cx="120" 
                  cy="100" 
                  r="13" 
                  fill={selectedArea === "bay-area" ? "#dc2626" : "#ef4444"}
                  stroke="#fff"
                  strokeWidth="2"
                  className="cursor-pointer hover:r-15 transition-all"
                  onClick={() => setSelectedArea("bay-area")}
                />
                
                {/* Central Valley */}
                <circle 
                  cx="150" 
                  cy="120" 
                  r="11" 
                  fill={selectedArea === "central-valley" ? "#dc2626" : "#ef4444"}
                  stroke="#fff"
                  strokeWidth="2"
                  className="cursor-pointer hover:r-13 transition-all"
                  onClick={() => setSelectedArea("central-valley")}
                />
                
                {/* Coastal */}
                <circle 
                  cx="100" 
                  cy="140" 
                  r="9" 
                  fill={selectedArea === "coastal" ? "#dc2626" : "#ef4444"}
                  stroke="#fff"
                  strokeWidth="2"
                  className="cursor-pointer hover:r-11 transition-all"
                  onClick={() => setSelectedArea("coastal")}
                />

                {/* Area Labels */}
                <text x="185" y="185" textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="bold">OC</text>
                <text x="165" y="155" textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="bold">LA</text>
                <text x="205" y="225" textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="bold">SD</text>
                <text x="215" y="165" textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="bold">RV</text>
                <text x="235" y="145" textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="bold">SB</text>
                <text x="125" y="105" textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="bold">SF</text>
                <text x="155" y="125" textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="bold">CV</text>
                <text x="105" y="145" textAnchor="middle" fontSize="10" fill="#1f2937" fontWeight="bold">CO</text>
              </svg>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 border border-gray-200 shadow-sm">
                <div className="text-sm font-semibold text-gray-900 mb-2">Service Coverage</div>
                <div className="space-y-2">
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                    <span className="text-gray-700">Primary Service Area</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <span className="text-gray-700">Extended Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 flex items-center justify-center">
                <Navigation className="w-4 h-4 mr-2" />
                Click on any region for service details
              </p>
            </div>
          </div>

          {/* Area Details */}
          <div className="space-y-6">
            {currentArea && (
              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-red-600 mr-2" />
                    <h3 className="text-xl font-bold text-gray-900">{currentArea.name}</h3>
                  </div>
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: currentArea.color }}
                  ></div>
                </div>

                {/* Response Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                    <Clock className="w-5 h-5 text-red-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-gray-900">{currentArea.responseTime}</div>
                    <div className="text-xs text-gray-600">Avg Response</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                    <Shield className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-gray-900">{currentArea.guards}</div>
                    <div className="text-xs text-gray-600">Security Guards</div>
                  </div>
                </div>

                {/* Cities List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Cities We Serve:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentArea.cities.map((city, index) => (
                      <div key={city} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></div>
                        {city}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Services */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Available Services:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Armed Security
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Mobile Patrol
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Event Security
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Fire Watch
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Construction Security
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Emergency Response
                    </div>
                  </div>
                </div>

                <button className="w-full mt-4 bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  GET {currentArea.name} SECURITY QUOTE
                </button>
              </div>
            )}

            {/* Statewide Coverage */}
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-center">STATEWIDE COVERAGE</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">58+</div>
                  <div className="text-sm text-gray-300">Cities</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">300+</div>
                  <div className="text-sm text-gray-300">Security Guards</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-400 mb-1">24/7</div>
                  <div className="text-sm text-gray-300">Dispatch</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Regions Grid */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">ALL SERVICE REGIONS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <div
                key={area.id}
                className={`bg-white border rounded-lg p-4 text-center cursor-pointer transition-all ${
                  selectedArea === area.id 
                    ? 'border-red-500 bg-red-50 shadow-sm' 
                    : 'border-gray-300 hover:border-red-300 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedArea(area.id)}
              >
                <div className="font-semibold text-gray-900">{area.name}</div>
                <div className="text-sm text-gray-600 mt-1">{area.cities.length} Cities</div>
                <div className="text-xs text-red-600 font-medium mt-1">{area.responseTime} Response</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}