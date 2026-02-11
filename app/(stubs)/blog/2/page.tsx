import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 2
const blogData = {
  id: 2,
  title: "ProForce1 Expands Services to Northern California Markets",
  excerpt: "We are proud to announce our strategic expansion into the Bay Area and Sacramento, bringing top-tier security solutions to new communities.",
  category: "Company News",
  author: "Sarah Jenkins",
  date: "2024-03-10",
  readTime: "4 min read",
  image: "/blogimage/expansion-map.jpg" 
};

export default function BlogPostTwo() {
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
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/norcal-expansion.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-green-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          Growth is more than just increasing numbers; it’s about extending safety to new communities. 
          ProForce1 is thrilled to officially announce the opening of our new regional operations covering 
          the Greater Bay Area and Sacramento regions. This move comes in response to the increasing demand 
          for reliable, professional security services in Northern California.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Meeting the Demand in the Tech Hub</h3>
        <p className="mb-4">
          The San Francisco Bay Area is the heart of global innovation. With this expansion, ProForce1 
          is dedicated to protecting the assets, intellectual property, and personnel of the region's 
          growing tech sector. Our specialized corporate campus security teams are trained to blend 
          seamlessly into professional environments while maintaining rigorous safety standards.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Retail &amp; Commercial Security Solutions</h3>
        <p className="mb-4">
          From luxury retail in Union Square to commercial centers in Sacramento, loss prevention 
          and asset protection remain critical issues. Our expansion team brings:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Advanced Loss Prevention:</strong> Strategies to minimize shrinkage and theft.</li>
            <li><strong>24/7 Mobile Patrols:</strong> High-visibility vehicles to deter criminal activity.</li>
            <li><strong>Customer Service Oriented Officers:</strong> Security that enhances the customer experience.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Local Hiring &amp; Community Engagement</h3>
        <p className="mb-4">
          We believe in local expertise. As part of this expansion, ProForce1 is committed to hiring 
          over 200 security professionals from the Northern California region over the next year. 
          We are not just bringing a service; we are creating jobs and building relationships with 
          local law enforcement and community leaders.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Message from our CEO</h3>
        <blockquote className="bg-gray-100 p-4 border-l-4 border-gray-500 italic mb-4">
          "Northern California represents a diverse and dynamic landscape. We are honored to bring 
          the ProForce1 standard of integrity and vigilance to these vibrant communities."
        </blockquote>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
          <h4 className="font-bold text-lg mb-2 text-green-900">Located in Northern California?</h4>
          <p className="text-green-800">
            If your business is based in the Bay Area or Sacramento, reach out today to discuss 
            how our new regional team can secure your operations.
          </p>
        </div>
      </div>
    </article>
  );
}