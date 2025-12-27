import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 1
const blogData = {
  id: 1,
  title: "Top 10 Security Measures Every Business Should Implement in 2024",
  excerpt: "Discover the essential security protocols that can protect your business from emerging threats and ensure comprehensive safety for your assets and personnel.",
  category: "Security Tips",
  author: "Marcus Johnson",
  date: "2024-01-15",
  readTime: "5 min read",
  image: "/blogimage/business-security.jpg" 
};

export default function BlogPost() {
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
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/business-security.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-blue-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          As we step into 2024, the security landscape is evolving faster than ever. 
          From cyber threats to physical breaches, businesses must stay ahead of the curve. 
          Here are the top 10 security measures Marcus Johnson recommends for this year.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Conduct a Comprehensive Risk Assessment</h3>
        <p className="mb-4">
          Before buying expensive hardware, understand your vulnerabilities. Identifying weak points 
          in both your physical premises and digital network is the foundation of a solid security strategy.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Upgrade Access Control Systems</h3>
        <p className="mb-4">
          Move away from traditional keys. Smart cards, biometrics, and mobile credentials allow you 
          to track who enters sensitive areas and revoke access instantly if an employee leaves.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Implement Zero Trust Cybersecurity</h3>
        <p className="mb-4">
          "Never trust, always verify." Ensure that every user and device trying to access resources 
          on your network is verified, regardless of whether they are inside or outside the network perimeter.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Regular Employee Training</h3>
        <p className="mb-4">
          Human error remains the leading cause of security breaches. Regular training on recognizing 
          phishing emails and following physical security protocols is non-negotiable.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Install High-Definition Surveillance</h3>
        <p className="mb-4">
          Modern IP cameras with AI analytics can detect unusual behavior and alert security teams 
          in real-time, rather than just recording a crime for later viewing.
        </p>
        
        {/* (Content shortened for brevity - add points 6-10 as needed) */}
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-bold text-lg mb-2">Need help securing your business?</h4>
          <p>Contact our expert team today for a free consultation on implementing these 2024 standards.</p>
        </div>
      </div>
    </article>
  );
}