// "use client";

// import React, { useState, useEffect } from 'react';

// interface BlogPost {
//   id: number;
//   date: string;
//   title: string;
//   excerpt: string;
//   commentCount?: number;
//   author?: string;
// }

// const BlogSection: React.FC = () => {
//   const blogPosts: BlogPost[] = [
//     {
//       id: 1,
//       date: "Aug 29",
//       title: "Security Culture: How Investing in Your Guards Strengthens...",
//       excerpt: "When most people think of security, they picture surveillance cameras, access control...",
//       commentCount: 25
//     },
//     {
//       id: 2,
//       date: "Aug 8",
//       title: "Tackling Today's Patrol Challenges: What Security Teams Are...",
//       excerpt: "The world of on-ground patrol is changing, and fast. Security teams are facing new risks...",
//       commentCount: 30
//     },
//     {
//       id: 3,
//       date: "Aug 1",
//       title: "Why You Should Engage Early with Security Partners in...",
//       excerpt: "By Good Guard Security When organizations begin planning for a new physical security provide...",
//       commentCount: 26
//     }
//   ];

//   // Removed client-only visibility effect to prevent hydration mismatch

//   return (
//     <section className="relative py-16 bg-gray-50">
//       <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 pointer-events-none" />
//       <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
//         <div className="mb-10 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Our latest blogs</h2>
//           <p className="text-gray-600">Insights and updates from our security experts</p>
//         </div>
//         <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
//           {blogPosts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 hover:shadow-lg transition"
//             >
//               <div className="text-xs font-semibold text-primary mb-1">{post.date}</div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{post.title}</h3>
//               <p className="text-sm text-gray-700 mb-2 line-clamp-3">{post.excerpt}</p>
//               <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
//                 {post.commentCount && (
//                   <span className="inline-flex items-center gap-1"><span>💬</span>{post.commentCount}</span>
//                 )}
//                 {post.author && (
//                   <span>By {post.author}</span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="mt-10 text-center">
//           <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow hover:bg-primary/90 transition">
//             View All Blog Posts
//             <span className="text-lg">→</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;


"use client";

import React from 'react';
import { Calendar, MessageCircle, User, ArrowRight, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  commentCount?: number;
  author: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      date: "Aug 29, 2025",
      category: "Personnel",
      title: "Security Culture: How Investing in Your Guards Strengthens Safety",
      excerpt: "When most people think of security, they picture surveillance cameras and access control. However, the human element remains the strongest deterrent against threats...",
      commentCount: 12,
      author: "Chief Operations Officer"
    },
    {
      id: 2,
      date: "Aug 08, 2025",
      category: "Operations",
      title: "Tackling Today's Patrol Challenges: Modern Solutions",
      excerpt: "The world of on-ground patrol is changing fast. Security teams are facing new risks requiring GPS tracking and real-time digital reporting technology...",
      commentCount: 8,
      author: "Security Director"
    },
    {
      id: 3,
      date: "Aug 01, 2025",
      category: "Strategy",
      title: "Why You Should Engage Early with Security Partners",
      excerpt: "When organizations begin planning for a new physical security provider, timing is everything. Early engagement prevents gaps in coverage and ensures compliance...",
      commentCount: 5,
      author: "Risk Analyst"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
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
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              {/* Card Header (Category & Date) */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                    {post.category}
                  </span>
                  <div className="flex items-center text-slate-400 text-xs font-medium">
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
                <div className="flex items-center text-xs font-medium text-slate-400 group-hover:text-red-600 transition-colors">
                  Read Article <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/blog"
            className="inline-flex items-center justify-center w-full px-6 py-3 border border-slate-300 rounded-lg text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
          >
            View All Insights
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;