"use client"

import { ArrowRight, Calendar, Clock, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { formatBlogDate, getRecentBlogPosts } from "@/lib/blog-posts"

export default function BlogSection() {
  const blogPosts = getRecentBlogPosts(3)

  return (
    <section className="border-t border-slate-100 bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-red-600">
              Security intelligence
            </p>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Professional insights from the ProForce1 field team.
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Practical guidance, operational updates, and safety strategies for properties, schools,
              events, and business teams.
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-900 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 md:flex"
          >
            View all articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid gap-8 md:grid-cols-3"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
              key={post.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl"
            >
              <Link href={`/blog/${post.slug}`} className="relative block h-56 overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 95vw, 30vw"
                  quality={60}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-70" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-black uppercase tracking-wide text-red-700 shadow-sm">
                  {post.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatBlogDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-black leading-snug text-slate-950 transition-colors group-hover:text-red-700">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-500">
                    <User className="h-3.5 w-3.5" />
                    {post.author}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-black uppercase tracking-wide text-red-700"
                  >
                    Read <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-800 transition hover:bg-slate-50"
          >
            View all insights
          </Link>
        </div>
      </div>
    </section>
  )
}
