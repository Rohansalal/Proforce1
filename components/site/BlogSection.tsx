"use client";

import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  commentCount?: number;
  author: string;
  image: string; // Added image property
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      date: "Feb 19, 2026",
      category: "Safety Guidelines",
      title: "Securing the Future: Professional School Security Solutions",
      excerpt: "Educational environments require a specialized approach. Discover how ProForce 1 partners with schools to ensure a safe learning haven for students.",
      author: "Operations Manager",
      image: "/blogimage/School.jpeg"
    },
    {
      id: 13,
      date: "Aug 29, 2025",
      category: "Personnel",
      title: "Security Culture: How Investing in Your Guards Strengthens Safety",
      excerpt: "When most people think of security, they picture surveillance cameras and access control. However, the human element remains the strongest deterrent against threats...",
      commentCount: 12,
      author: "Chief Operations Officer",
      image: "/blogimage/expansion-map.jpg" // Security guard image
    },
    {
      id: 14,
      date: "Aug 08, 2025",
      category: "Operations",
      title: "Tackling Today's Patrol Challenges: Modern Solutions",
      excerpt: "The world of on-ground patrol is changing fast. Security teams are facing new risks requiring GPS tracking and real-time digital reporting technology...",
      commentCount: 8,
      author: "Security Director",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1000&auto=format&fit=crop" // Tech/Patrol image
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Security Insights & <span className="text-red-600">News</span>
            </h2>
            <p className="text-lg text-slate-600">
              Expert analysis, operational updates, and safety strategies from the Proforce 1 team.
            </p>
          </div>
          <Link href="/blog" className="hidden md:flex items-center font-semibold text-slate-900 hover:text-red-600 transition-colors">
            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid gap-8 md:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.article
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
              }}
              key={post.id}
              className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  sizes="(max-width: 768px) 95vw, 30vw"
                  quality={50}
                />

                {/* Optional Overlay Gradient for text contrast if you ever overlay text */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                    {post.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-xs font-semibold">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-red-600 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Card Footer (Author & Read More) */}
              <div className="mt-auto px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center text-xs font-medium text-slate-500">
                  <User className="w-3 h-3 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center text-xs font-semibold text-slate-500 group-hover:text-red-600 transition-colors">
                  Read Article <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center md:hidden"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
          >
            View All Insights
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default BlogSection;