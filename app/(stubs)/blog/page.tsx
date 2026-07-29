"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowRight, CalendarDays, Clock, Filter, Search, ShieldCheck, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  formatBlogDate,
  getFeaturedBlogPosts,
  getSortedBlogPosts,
} from "@/lib/blog-posts"

const ITEMS_PER_PAGE = 8

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const blogPosts = useMemo(() => getSortedBlogPosts(), [])
  const featuredPosts = useMemo(() => getFeaturedBlogPosts().slice(0, 4), [])

  const categoryCounts = useMemo(() => {
    return BLOG_POSTS.reduce<Record<string, number>>((counts, post) => {
      counts[post.category] = (counts[post.category] ?? 0) + 1
      return counts
    }, {})
  }, [])

  const filteredPosts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()

    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search) ||
        post.excerpt.toLowerCase().includes(search) ||
        post.author.toLowerCase().includes(search) ||
        post.category.toLowerCase().includes(search)

      return matchesCategory && matchesSearch
    })
  }, [blogPosts, searchTerm, selectedCategory])

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / ITEMS_PER_PAGE))
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    document.getElementById("blog-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-28 pt-40 text-white">
        <video
          className="absolute inset-0 hidden h-full w-full select-none object-cover opacity-35 motion-reduce:hidden sm:block"
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/Services/retail/retail.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/35 via-slate-950/70 to-slate-950" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-red-100 backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-red-400" />
            ProForce1 security insights
          </div>
          <h1 className="mb-6 text-4xl font-black tracking-tight md:text-6xl">
            Field-tested guidance for safer properties.
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-200 md:text-xl">
            Explore practical security articles covering guard operations, event safety, patrol
            strategy, compliance, training, technology, and real-world response planning.
          </p>
        </div>
      </section>

      {featuredPosts.length > 0 && (
        <section className="-mt-14 bg-transparent px-4">
          <div className="relative z-20 mx-auto max-w-7xl">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-red-700">
                  Featured articles
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  Start with the latest priorities.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-slate-600">
                Curated reads for decision-makers who need clear security planning guidance.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {featuredPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 transition duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-2xl">
                    <div className="relative h-56 overflow-hidden bg-slate-200">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 90vw, 25vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-wide text-white shadow-lg">
                        Featured
                      </span>
                      <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-900">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {formatBlogDate(post.date)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mb-3 text-xl font-black leading-tight text-slate-950 transition-colors group-hover:text-red-700">
                        {post.title}
                      </h3>
                      <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                        <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500">
                          <User className="h-3.5 w-3.5" />
                          {post.author}
                        </span>
                        <ArrowRight className="h-4 w-4 text-red-700 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-16" id="blog-grid">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-red-700">
                    Article library
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-950">
                    {filteredPosts.length} security article{filteredPosts.length === 1 ? "" : "s"}
                  </h2>
                </div>

                <div className="relative w-full md:max-w-sm">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-100"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {paginatedPosts.length > 0 ? (
                  paginatedPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group block h-full">
                      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl">
                        <div className="relative h-52 overflow-hidden bg-slate-100">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 95vw, 45vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-500">
                            <span className="rounded-full bg-red-50 px-3 py-1 uppercase tracking-wide text-red-700">
                              {post.category}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {post.readTime}
                            </span>
                          </div>

                          <h3 className="mb-3 text-xl font-black leading-tight text-slate-950 transition-colors group-hover:text-red-700">
                            {post.title}
                          </h3>

                          <p className="mb-5 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
                            {post.excerpt}
                          </p>

                          <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-xs font-semibold text-slate-500">
                            <span>{post.author}</span>
                            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
                    <div className="mb-4 inline-flex rounded-full bg-slate-100 p-4">
                      <Search className="h-8 w-8 text-slate-400" />
                    </div>
                    <h3 className="mb-2 text-xl font-black text-slate-950">No articles found</h3>
                    <p className="text-slate-500">
                      We could not find any posts matching "{searchTerm}".
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedCategory("all")
                      }}
                      className="mt-5 font-black text-red-700 hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>

              {filteredPosts.length > ITEMS_PER_PAGE && (
                <div className="mt-14 flex justify-center">
                  <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Blog pagination">
                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-red-700 disabled:opacity-50"
                    >
                      Previous
                    </Button>

                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                      <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        variant={currentPage === page ? "default" : "ghost"}
                        className={
                          currentPage === page
                            ? "h-10 w-10 bg-red-600 p-0 text-white hover:bg-red-700"
                            : "h-10 w-10 p-0 text-slate-600 hover:bg-slate-100"
                        }
                        aria-current={currentPage === page ? "page" : undefined}
                      >
                        {page}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-red-700 disabled:opacity-50"
                    >
                      Next
                    </Button>
                  </nav>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-950">
                    Categories
                  </h3>
                  <Filter className="h-4 w-4 text-slate-400" />
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                      selectedCategory === "all"
                        ? "bg-red-50 font-black text-red-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    <span>All Topics</span>
                    <span>{BLOG_POSTS.length}</span>
                  </button>

                  {BLOG_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition ${
                        selectedCategory === category
                          ? "bg-red-50 font-black text-red-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                      }`}
                    >
                      <span>{category}</span>
                      <span>{categoryCounts[category] ?? 0}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl bg-slate-950 p-6 text-white shadow-xl">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-red-300">
                  Need guidance?
                </p>
                <h3 className="mb-3 text-2xl font-black leading-tight">
                  Turn security insight into a site plan.
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  Speak with ProForce1 about guard coverage, patrol strategy, event staffing, or
                  compliance-ready reporting.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-black text-white transition hover:bg-red-700"
                >
                  Request assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-600 px-4 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-black tracking-tight md:text-4xl">
            Ready to secure your people, property, and operations?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-red-50">
            Contact ProForce1 for a practical security assessment and a protection plan tailored
            to your risk profile.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 text-base font-black text-red-700 shadow-xl transition hover:-translate-y-1 hover:bg-slate-100"
            >
              Request assessment
            </Link>
            <Link
              href="tel:+18005550117"
              className="rounded-xl border-2 border-red-200 px-8 py-4 text-base font-black text-white transition hover:-translate-y-1 hover:bg-red-800"
            >
              Call 24/7 dispatch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
