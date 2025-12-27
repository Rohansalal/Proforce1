import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 4
const blogData = {
  id: 4,
  title: "Understanding BSIS Requirements: What Every Security Professional Needs to Know",
  excerpt: "Navigating the California Bureau of Security and Investigative Services regulations can be complex. Here is your essential guide to licensing and compliance.",
  category: "Compliance & Licensing",
  author: "David Chen",
  date: "2024-06-15",
  readTime: "7 min read",
  image: "/blogimage/bsis-requirements.jpg" 
};

// Explicitly defining the component function
export default function BlogPostFour() {
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
          <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/bsis-requirements.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-orange-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          For security professionals in California, the Bureau of Security and Investigative Services (BSIS) 
          is the ultimate authority. Whether you are an aspiring guard looking to get your start or a 
          company owner ensuring your team is legal, understanding these requirements is non-negotiable. 
          Failure to comply can result in steep fines and license revocation.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. The &quot;Guard Card&quot;: Phase 1 Training</h3>
        <p className="mb-4">
          Before you can even wear a uniform, you must complete the initial <strong>8-hour Power to Arrest 
          and Weapons of Mass Destruction (WMD)</strong> training. This is the foundation of the BSIS 
          security guard card.
        </p>
        <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-400 mb-4 text-sm">
          <strong>Note:</strong> You cannot legally stand post until your application has been processed 
          and approved by the BSIS, which includes a DOJ/FBI background check.
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. The 32-Hour Requirement (Phase 2 & 3)</h3>
        <p className="mb-4">
          Many new guards make the mistake of thinking the 8-hour course is the end. It is just the beginning. 
          BSIS mandates an additional <strong>32 hours of education</strong> within the first six months of employment:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>First 30 Days:</strong> 16 hours of mandatory courses (e.g., Communication, Liability, Observation).</li>
            <li><strong>First 6 Months:</strong> 16 hours of elective courses (e.g., Officer Safety, Evacuation Procedures).</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Annual Refresher Training</h3>
        <p className="mb-4">
          Security is a perishable skill. To maintain a valid license, every security guard must complete 
          <strong> 8 hours of continuing education (CE) annually</strong>. This ensures that officers remain 
          updated on new laws, safety protocols, and de-escalation techniques.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Exposed Firearm Permit</h3>
        <p className="mb-4">
          Carrying a firearm requires a separate, rigorous permit. This involves a psychological assessment, 
          classroom training, and range qualification. Furthermore, permit holders must requalify on the 
          range four times every two years (every 4-6 months) to keep the permit active.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Compliance Matters</h3>
        <p className="mb-4">
          Beyond the legal necessity, rigorous adherence to BSIS standards raises the profile of the 
          entire industry. It ensures that when a client hires a security firm, they are getting 
          professionals who know the law, know their limits, and know how to keep people safe.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl">
          <h4 className="font-bold text-lg mb-2 text-orange-400">Looking for BSIS Certified Training?</h4>
          <p className="mb-4">
            ProForce1 offers comprehensive training modules to help your team stay compliant with all 
            state regulations.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors">
            View Training Schedule
          </button>
        </div>
      </div>
    </article>
  );
}