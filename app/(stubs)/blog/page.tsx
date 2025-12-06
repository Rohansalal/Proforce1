"use client"

import { useState } from "react"
import { Search, Calendar, User, Clock, ArrowRight, Filter, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      image: "/blog/security-measures-2024.jpg",
      featured: true
    },
    {
      id: 2,
      title: "ProForce1 Expands Services to Northern California Markets",
      excerpt: "We're excited to announce our expansion into Northern California, bringing our premium security services to San Francisco, Sacramento, and surrounding areas.",
      category: "Company Updates",
      author: "Sarah Chen",
      date: "2024-01-12",
      readTime: "3 min read",
      image: "/blog/norcal-expansion.jpg",
      featured: true
    },
    {
      id: 3,
      title: "The Future of Event Security: Technology and Training Integration",
      excerpt: "How modern technology combined with advanced training protocols is revolutionizing event security management and crowd control.",
      category: "Event Security",
      author: "David Rodriguez",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/blog/event-security-future.jpg"
    },
    {
      id: 4,
      title: "Understanding BSIS Requirements: What Every Security Professional Needs to Know",
      excerpt: "A comprehensive guide to California's Bureau of Security and Investigative Services requirements and compliance standards.",
      category: "Training Insights",
      author: "Lisa Thompson",
      date: "2024-01-08",
      readTime: "6 min read",
      image: "/blog/bsis-requirements.jpg"
    },
    {
      id: 5,
      title: "Mobile Patrol Best Practices for Commercial Properties",
      excerpt: "Learn how effective mobile patrol strategies can significantly reduce security incidents and enhance property protection.",
      category: "Security Tips",
      author: "James Wilson",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "/blog/mobile-patrol-practices.jpg"
    },
    {
      id: 6,
      title: "New Security Technology Implementation at ProForce1",
      excerpt: "How we're integrating cutting-edge surveillance and communication technology to enhance our security operations.",
      category: "Technology",
      author: "Michael Brown",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "/blog/security-technology.jpg"
    },
    {
      id: 7,
      title: "Winter Security Considerations for Construction Sites",
      excerpt: "Essential security measures to protect construction sites during winter months when visibility decreases and risks increase.",
      category: "Safety Guidelines",
      author: "Robert Martinez",
      date: "2023-12-28",
      readTime: "4 min read",
      image: "/blog/winter-construction-security.jpg"
    },
    {
      id: 8,
      title: "The Psychology of Deterrence in Physical Security",
      excerpt: "Understanding how visible security measures and professional presence can prevent incidents before they occur.",
      category: "Security Tips",
      author: "Dr. Amanda Foster",
      date: "2023-12-22",
      readTime: "8 min read",
      image: "/blog/psychology-deterrence.jpg"
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
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            PROFORCE1 SECURITY BLOG
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Expert insights, security tips, and industry updates from Southern California's premier security provider.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">FEATURED ARTICLES</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <div key={post.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center">
                    <Tag className="w-12 h-12 text-white opacity-20" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                        <Calendar className="w-4 h-4 ml-3 mr-1" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>
                      <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Search and Filter */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none"
                    >
                      {categories.map(category => (
                        <option key={category} value={category === "All Topics" ? "all" : category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => (
                    <article key={post.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                        <Tag className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                          <div className="flex items-center text-sm text-gray-500">
                            <div className="flex items-center mr-4">
                              <User className="w-4 h-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </div>
                          </div>
                          
                          <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 text-sm">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
                  </div>
                )}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                  <Button variant="outline" disabled className="border-gray-300 text-gray-400">
                    Previous
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    1
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    2
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    3
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Next
                  </Button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="space-y-6">
                {/* Categories Widget */}
                <div className="bg-white border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">CATEGORIES</h3>
                  <ul className="space-y-2">
                    {categories.filter(cat => cat !== "All Topics").map(category => (
                      <li key={category}>
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            selectedCategory === category 
                              ? 'bg-red-100 text-red-700 font-medium' 
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts Widget */}
                <div className="bg-white border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">RECENT POSTS</h3>
                  <ul className="space-y-4">
                    {blogPosts.slice(0, 3).map(post => (
                      <li key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-semibold text-gray-900 hover:text-red-600 transition-colors cursor-pointer text-sm mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gray-900 text-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">SECURITY INSIGHTS</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Get the latest security tips and industry updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm"
                    />
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-sm">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            NEED PROFESSIONAL SECURITY SOLUTIONS?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Contact ProForce1 for comprehensive security assessments and customized protection plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-3">
              Request Assessment
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-red-700 font-bold px-8 py-3">
              Call 24/7 Dispatch
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}