"use client"

import { useState } from "react"
import { Search, Calendar, User, Clock, ArrowRight, Filter, Tag, ShieldAlert } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image" 
import Link from "next/link" // <--- 1. Import Link here

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    "All Topics",
    "Security Tips",
    "Industry News",
    "Company Updates",
    "Safety Guidelines",
    "Training Insights",
    "Event Security",
    "Technology"
  ]

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Security Measures Every Business Should Implement in 2024",
      excerpt: "Discover the essential security protocols that can protect your business from emerging threats and ensure comprehensive safety for your assets and personnel.",
      category: "Security Tips",
      author: "Marcus Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      featured: true,
      image: "/blogimage/business-security.jpg" 
    },
    {
      id: 2,
      title: "ProForce1 Expands Services to Northern California Markets",
      excerpt: "We're excited to announce our expansion into Northern California, bringing our premium security services to San Francisco, Sacramento, and surrounding areas.",
      category: "Company Updates",
      author: "Sarah Chen",
      date: "2024-01-12",
      readTime: "3 min read",
      featured: true,
      image: "/blogimage/expansion-map.jpg"
    },
    {
      id: 3,
      title: "The Future of Event Security: Technology and Training Integration",
      excerpt: "How modern technology combined with advanced training protocols is revolutionizing event security management and crowd control.",
      category: "Event Security",
      author: "David Rodriguez",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/blogimage/event-tech.jpg"
    },
    {
      id: 4,
      title: "Understanding BSIS Requirements: What Every Security Professional Needs to Know",
      excerpt: "A comprehensive guide to California's Bureau of Security and Investigative Services requirements and compliance standards.",
      category: "Training Insights",
      author: "Lisa Thompson",
      date: "2024-01-08",
      readTime: "6 min read",
      image: "/blog/training-class.jpg"
    },
    {
      id: 5,
      title: "Mobile Patrol Best Practices for Commercial Properties",
      excerpt: "Learn how effective mobile patrol strategies can significantly reduce security incidents and enhance property protection.",
      category: "Security Tips",
      author: "James Wilson",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "/blog/patrol-car.jpg"
    },
    {
      id: 6,
      title: "New Security Technology Implementation at ProForce1",
      excerpt: "How we're integrating cutting-edge surveillance and communication technology to enhance our security operations.",
      category: "Technology",
      author: "Michael Brown",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "/blog/cctv-tech.jpg"
    },
    {
      id: 7,
      title: "Winter Security Considerations for Construction Sites",
      excerpt: "Essential security measures to protect construction sites during winter months when visibility decreases and risks increase.",
      category: "Safety Guidelines",
      author: "Robert Martinez",
      date: "2023-12-28",
      readTime: "4 min read",
      image: "/blog/construction-site.jpg"
    },
    {
      id: 8,
      title: "The Psychology of Deterrence in Physical Security",
      excerpt: "Understanding how visible security measures and professional presence can prevent incidents before they occur.",
      category: "Security Tips",
      author: "Dr. Amanda Foster",
      date: "2023-12-22",
      readTime: "8 min read",
      image: "/blog/guard-post.jpg"
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* HEADER SECTION */}
      <section className="relative bg-slate-900 text-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            PROFORCE<span className="text-red-600">1</span> BLOG
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Expert analysis, operational updates, and safety strategies from Southern California's premier security provider.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-red-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">FEATURED ARTICLES</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                // <--- 2. WRAPPED FEATURED POST IN LINK
                <Link key={post.id} href={`/blog/${post.id}`} className="block h-full"> 
                    <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-red-100 transition-all duration-300 h-full flex flex-col">
                    <div className="h-64 relative overflow-hidden group-hover:opacity-90 transition-opacity shrink-0">
                        <Image 
                            src={post.image || `/gallery/team-briefing-1.jpg`}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded shadow-lg z-10">
                            Featured
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                    </div>

                    <div className="p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-4 mb-4 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        <span className="text-red-600 font-bold">{post.category}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                            {post.title}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">{post.excerpt}</p>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 overflow-hidden">
                                <User className="w-4 h-4" /> 
                            </div>
                            <div className="text-sm">
                                <p className="font-bold text-gray-900 leading-none">{post.author}</p>
                                <p className="text-gray-500 text-xs mt-1">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                            </div>
                        </div>
                        <span className="flex items-center text-sm font-bold text-red-600 group-hover:translate-x-1 transition-transform">
                            Read Now <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                        </div>
                    </div>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              
              {/* Search Bar - Mobile optimized */}
              <div className="lg:hidden mb-8">
                 <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none shadow-sm"
                    />
                  </div>
              </div>

              {/* Blog Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => (
                    // <--- 3. WRAPPED GRID POST IN LINK
                    <Link key={post.id} href={`/blog/${post.id}`} className="block h-full group">
                        <article className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-red-100 transition-all duration-300 h-full">
                        <div className="h-48 bg-slate-100 relative overflow-hidden group-hover:bg-slate-200 transition-colors shrink-0">
                            
                            <Image 
                                src={post.image || `/gallery/patrol-car.jpg`} 
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-3 text-xs">
                            <span className="font-bold text-red-600 uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="flex items-center text-gray-400 font-medium">
                                <Clock className="w-3 h-3 mr-1" />
                                {post.readTime}
                            </span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight cursor-pointer">
                            {post.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
                            {post.excerpt}
                            </p>
                            
                            <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                                <span className="text-xs font-medium text-gray-500">{post.author}</span>
                                <span className="text-xs text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                        </article>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                    <div className="inline-flex p-4 bg-gray-50 rounded-full mb-4">
                        <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-500">We couldn't find any posts matching "{searchTerm}"</p>
                    <button 
                        onClick={() => {setSearchTerm(""); setSelectedCategory("all")}}
                        className="mt-4 text-red-600 font-bold hover:underline"
                    >
                        Clear filters
                    </button>
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-16">
                <nav className="flex items-center gap-2">
                  <Button variant="outline" disabled className="border-gray-200 text-gray-400 px-4">
                    Previous
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-10 h-10 p-0 rounded-lg">
                    1
                  </Button>
                  <Button variant="ghost" className="text-gray-600 hover:bg-gray-100 w-10 h-10 p-0 rounded-lg">
                    2
                  </Button>
                  <Button variant="ghost" className="text-gray-600 hover:bg-gray-100 w-10 h-10 p-0 rounded-lg">
                    3
                  </Button>
                  <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-red-600 px-4">
                    Next
                  </Button>
                </nav>
              </div>
            </div>

            {/* Sidebar (Sticky) */}
            <aside className="lg:w-1/4 space-y-8">
              
              {/* Desktop Search */}
              <div className="hidden lg:block bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Search</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              {/* Categories Widget */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Categories</h3>
                    <Filter className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-1">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === "All Topics" ? "all" : category)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group ${
                        (selectedCategory === category || (selectedCategory === "all" && category === "All Topics"))
                          ? 'bg-red-50 text-red-700 font-bold' 
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <span>{category}</span>
                      {(selectedCategory === category || (selectedCategory === "all" && category === "All Topics")) && (
                        <div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <div className="bg-slate-900 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldAlert className="w-24 h-24 transform rotate-12" />
                </div>
                <h3 className="text-lg font-bold mb-2 relative z-10">Daily Intel</h3>
                <p className="text-slate-400 text-xs mb-4 relative z-10 leading-relaxed">
                  Get the latest security briefings and industry updates directly to your inbox.
                </p>
                <div className="space-y-3 relative z-10">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:border-red-500 outline-none"
                  />
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold">
                    Subscribe
                  </Button>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight">
            READY TO SECURE YOUR ASSETS?
          </h2>
          <p className="text-xl mb-10 text-red-100 max-w-2xl mx-auto leading-relaxed">
            Contact ProForce1 today for a comprehensive security assessment and a customized protection plan tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-700 hover:bg-slate-100 font-bold px-8 py-6 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all rounded-xl">
              Request Assessment
            </Button>
            <Button variant="outline" className="border-2 border-red-400 text-white hover:bg-red-800 hover:border-red-800 font-bold px-8 py-6 text-lg rounded-xl">
              Call 24/7 Dispatch
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}