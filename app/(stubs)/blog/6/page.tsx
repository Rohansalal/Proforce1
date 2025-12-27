import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 6
const blogData = {
  id: 6,
  title: "New Security Technology Implementation at ProForce1",
  excerpt: "We are upgrading our arsenal. From body-worn cameras to cloud-based reporting, explore the new tech stack that is empowering our officers and transparent client reporting.",
  category: "Tech Update",
  author: "James Wilson",
  date: "2024-08-30",
  readTime: "5 min read",
  image: "/blogimage/security-tech-implementation.jpg" 
};

// Renamed to 'Page' for standard Next.js App Router compatibility
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
        {/* Note: Ensure the image exists in public/blogimage/security-tech-implementation.jpg */}
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
          At ProForce1, we believe that the best security comes from the marriage of human intuition and 
          digital precision. Over the last quarter, we have rolled out a comprehensive technology update 
          across all our deployment sites. This isn&apos;t just about gadgets; it&apos;s about accountability, 
          speed, and safety.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Body-Worn Cameras (BWC)</h3>
        <p className="mb-4">
          Transparency is our core value. We have equipped our lead supervisors and high-risk response 
          teams with the latest BWC units.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="bg-cyan-50 p-4 rounded-lg flex-1 border border-cyan-100">
                <strong>For the Client:</strong> Indisputable video evidence for liability claims or incident reviews.
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg flex-1 border border-cyan-100">
                <strong>For the Officer:</strong> A proven de-escalation tool. People behave better when they know they are being recorded.
            </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Cloud-Based Incident Reporting</h3>
        <p className="mb-4">
          Paper logs are obsolete. Our new proprietary mobile app allows guards to upload incident reports 
          instantly to the cloud.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Instant Notifications:</strong> Clients receive SMS/Email alerts the moment a serious incident is logged.</li>
            <li><strong>Media Attachment:</strong> Officers can attach photos and voice notes directly to the report for context.</li>
            <li><strong>Data Analytics:</strong> We can now track incident trends over time (e.g., &quot;Door A is found unlocked 20% of the time&quot;).</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Automated Guard Tour Systems</h3>
        <p className="mb-4">
          We have replaced traditional wand scanners with NFC-tag checkpoints. Officers scan tags placed 
          strategically around your property using their company smartphones. This data is fed into a 
          live dashboard, ensuring that patrols are completed on time, every time. If a checkpoint is 
          missed, our 24/7 dispatch is alerted immediately.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What This Means For You</h3>
        <p className="mb-4">
          This technology stack allows ProForce1 to provide a service that is verifiable and data-driven. 
          We don&apos;t just tell you your property is safe; we provide the metrics to prove it.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-lg mb-2">Want to see the tech in action?</h4>
          <p className="mb-4">
            Request a demo of our Client Portal and see how our technology keeps you connected to your security team.
          </p>
          <button className="bg-white text-cyan-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors shadow">
            Book a Tech Demo
          </button>
        </div>
      </div>
    </article>
  );
}