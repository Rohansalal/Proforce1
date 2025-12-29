import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 10
const blogData = {
  id: 9,
  title: "How AI Is Shaping Patrol Routing and Incident Response",
  excerpt: "Gone are the days of static routes. Discover how artificial intelligence uses data to predict threats, optimize patrol paths in real-time, and shave critical seconds off incident response times.",
  category: "Technology Innovation",
  author: "Kenji Tanaka",
  date: "2024-09-15",
  readTime: "6 min read",
  image: "/blogimage/ai-patrol.jpg" 
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Navigation / Breadcrumb */}
      <div className="mb-6">
        <Link href="/blog" className="text-blue-600 hover:underline">
          &larr; Back to all blogs
        </Link>
      </div>

      {/* Header Section */}
      <header className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-cyan-100 text-cyan-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {blogData.category}
          </span>
          <span className="text-gray-500 text-sm">• {blogData.readTime}</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {blogData.title}
        </h1>

        <div className="flex items-center justify-center text-gray-600 text-sm gap-4">
          <p>By <span className="font-semibold text-gray-900">{blogData.author}</span></p>
          <time dateTime={blogData.date}>{blogData.date}</time>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
        {/* Note: Ensure the image exists in public/blogimage/ai-patrol-routing.jpg */}
        <Image 
          src={blogData.image}
          alt={blogData.title}
          fill
          style={{ objectFit: 'cover' }}
          className="hover:scale-105 transition-transform duration-700"
          priority
        />
      </div>

      {/* Main Content Body */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-cyan-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          For decades, security patrols relied on routine. A guard would drive the same perimeter fence, check 
          the same doors in the same order, at roughly the same times. While better than nothing, this predictability 
          is a vulnerability that sophisticated criminals exploit. Today, Artificial Intelligence (AI) is shattering 
          that routine, transforming patrols from static observation into dynamic, predictive defense mechanisms.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Moving from Reactive to Predictive</h3>
        <p className="mb-4">
          Traditional security reacts to alarms. AI-driven security anticipates them. By feeding historical data 
          into machine learning algorithms—such as past incident reports, local crime statistics, weather patterns, 
          and even the time of sunset—AI generates "heat maps" of potential risk.
        </p>
        <p className="mb-4">
          Instead of driving in circles, the AI directs patrol units to hang out in high-risk zones <em>before</em> 
          something happens. The mere presence of a patrol car in a predicted hotspot is often enough to deter crime entirely.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Dynamic, Real-Time Re-routing</h3>
        <p className="mb-4">
          What happens when an incident occurs across town? In the past, dispatch would radio the nearest car. 
          Today, the AI system analyzes the entire fleet&apos;s positions, current traffic conditions, and officer 
          skill sets instantly.
        </p>
        <div className="bg-cyan-50 p-4 rounded border border-cyan-200 mb-4">
          It doesn&apos;t just send the closest car; it re-optimizes the routes of <em>every other vehicle</em> 
          to ensure the rest of the city isn&apos;t left vulnerable while the incident is being handled.
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. The Human-in-the-Loop</h3>
        <p className="mb-4">
          It is crucial to understand that AI is not replacing human security officers; it is a "force multiplier." 
          AI handles the complex math of logistics and probability, freeing up the human officer to do what computers 
          cannot: use judgment, de-escalate tense situations, and provide a reassuring human presence.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Seconds Matter</h3>
        <p className="mb-4">
          In security, response time is everything. By ensuring patrol units are already positioned near likely 
          threat areas, AI can shave critical minutes off response times. Those minutes are often the difference 
          between preventing a break-in and just filing a report after the fact.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl bg-[url('/patterns/circuit-board.png')] bg-blend-overlay">
          <h4 className="font-bold text-lg mb-2 text-cyan-400">Is your security stuck in the past?</h4>
          <p className="mb-4">
            ProForce1 is integrating smart technologies to provide faster, smarter protection. Contact us 
            today to learn about our tech-enhanced patrol services.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition-colors shadow-lg shadow-cyan-500/50">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </article>
  );
}