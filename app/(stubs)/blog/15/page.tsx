import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 15
const blogData = {
  id: 15,
  title: "Why You Should Engage Early with Security Partners",
  excerpt: "Security shouldn't be an afterthought. Discover why bringing your security team into the conversation during the blueprint phase saves money and improves aesthetics.",
  category: "Strategic Planning",
  author: "Michael Ross",
  date: "2024-12-18",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
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
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/early-engagement-security.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-amber-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          Whether you are constructing a new building, planning a music festival, or renovating an office, 
          security is often the last item on the checklist. It&apos;s usually treated as a &quot;bolt-on&quot; addition 
          after the paint has dried. However, this retroactive approach is the most expensive and least 
          effective way to secure an asset.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. CPTED: Designing Safety In</h3>
        <p className="mb-4">
          Crime Prevention Through Environmental Design (CPTED) is a concept that works best at the blueprint stage. 
          If you engage a security partner early, we can influence the landscaping to eliminate hiding spots, 
          or suggest lighting placements that naturally deter crime without needing ugly cages or signs later.
        </p>
        <div className="bg-amber-50 p-4 rounded border border-amber-200 mb-4">
          <strong>Example:</strong> Planting thorny bushes under ground-floor windows is a natural barrier that 
          costs the same as non-thorny bushes but adds a layer of physical security.
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. The Cost of Retrofitting</h3>
        <p className="mb-4">
          Running cabling for CCTV cameras <em>after</em> the drywall is up and painted costs 3x to 5x more than running 
          it during the rough-in phase. By consulting with ProForce1 during the design phase, we can map out conduit 
          paths for cameras and access control panels, saving you thousands in labor costs later.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Operational Flow</h3>
        <p className="mb-4">
          For events or high-traffic buildings, security checkpoints can become bottlenecks that ruin the user experience. 
          When we are involved early, we can model crowd flow to ensure that security screening areas have enough 
          physical space to process people quickly, rather than shoving a metal detector into a narrow hallway 
          at the last minute.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Aesthetic Integration</h3>
        <p className="mb-4">
          Nobody wants their luxury lobby to look like a prison. Early engagement allows us to source security 
          hardware (turnstiles, cameras, card readers) that matches your architectural finish. We can hide sensors 
          inside door frames rather than mounting bulky boxes on the wall.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-amber-900 text-white p-6 rounded-lg shadow-xl">
          <h4 className="font-bold text-lg mb-2 text-amber-200">Starting a new project?</h4>
          <p className="mb-4">
            Bring ProForce1 to the table before you break ground. Our consulting team works alongside your 
            architects to build safety into the DNA of your project.
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition-colors shadow-lg">
            Book a Design Consultation
          </button>
        </div>
      </div>
    </article>
  );
}