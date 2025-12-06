"use client";

import React, { useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  commentCount?: number;
  author?: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      date: "Aug 29",
      title: "Security Culture: How Investing in Your Guards Strengthens...",
      excerpt: "When most people think of security, they picture surveillance cameras, access control...",
      commentCount: 25
    },
    {
      id: 2,
      date: "Aug 8",
      title: "Tackling Today's Patrol Challenges: What Security Teams Are...",
      excerpt: "The world of on-ground patrol is changing, and fast. Security teams are facing new risks...",
      commentCount: 30
    },
    {
      id: 3,
      date: "Aug 1",
      title: "Why You Should Engage Early with Security Partners in...",
      excerpt: "By Good Guard Security When organizations begin planning for a new physical security provide...",
      commentCount: 26
    }
  ];

  // Removed client-only visibility effect to prevent hydration mismatch

  return (
    <section className="relative py-16 bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our latest blogs</h2>
          <p className="text-gray-600">Insights and updates from our security experts</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2 hover:shadow-lg transition"
            >
              <div className="text-xs font-semibold text-primary mb-1">{post.date}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-gray-700 mb-2 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                {post.commentCount && (
                  <span className="inline-flex items-center gap-1"><span>💬</span>{post.commentCount}</span>
                )}
                {post.author && (
                  <span>By {post.author}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow hover:bg-primary/90 transition">
            View All Blog Posts
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;