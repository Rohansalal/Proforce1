import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 11
const blogData = {
  id: 10,
  title: "Case Study: Rapid Response Averts Major Loss at Retail Campus",
  excerpt: "Real-world proof of our protocols in action. See how a coordinated effort between our monitoring center and on-site patrol saved a client over $50,000 in potential damages.",
  category: "Success Stories",
  author: "Sarah Jenkins",
  date: "2024-10-05",
  readTime: "5 min read",
  image: "/blogimage/retail.jpeg" 
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
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/retail-case-study.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-emerald-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          At ProForce1, we often talk about deterrence and prevention, but sometimes the threat is imminent. 
          Last month, one of our largest clients—a luxury retail campus in the Bay Area—faced a coordinated 
          break-in attempt. This case study details exactly how our systems worked to stop the crime in progress.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Scenario</h3>
        <p className="mb-4">
          <strong>Time:</strong> 03:15 AM<br/>
          <strong>Location:</strong> Electronics Retailer, North Quadrant
        </p>
        <p className="mb-4">
          Under cover of darkness, a vehicle breached the outer perimeter fence. Three individuals approached 
          the rear loading dock of a high-value electronics store, equipped with pry bars and glass-cutting tools. 
          Their target was an inventory cage containing approximately $50,000 worth of new merchandise.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Phase 1: Detection (03:16 AM)</h3>
        <p className="mb-4">
          Our perimeter AI analytics detected unusual motion near the fence line. Unlike a simple motion sensor 
          that might be tripped by a stray cat, the AI identified &quot;Human&quot; and &quot;Vehicle&quot; classifications. 
          An alert was instantly sent to our 24/7 Command Center.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Phase 2: Verification (03:17 AM)</h3>
        <p className="mb-4">
          Within 60 seconds, a remote monitoring agent verified the feed. Seeing the tools in hand, the agent 
          immediately initiated a <strong>Priority 1 Dispatch</strong> to our on-site mobile patrol unit, 
          which was patrolling the South Quadrant at the time.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Phase 3: Interception (03:19 AM)</h3>
        <p className="mb-4">
          The Mobile Patrol officer arrived on the scene in under two minutes from the dispatch call. 
          Utilizing high-intensity spotlights and the vehicle&apos;s PA system, the officer announced their presence.
        </p>
        <div className="bg-emerald-50 p-4 rounded border-l-4 border-emerald-400 mb-4 text-sm">
          <strong>Result:</strong> Upon seeing the marked unit and realizing they had lost the element of surprise, 
          the suspects immediately abandoned the attempt, fleeing the scene before making entry into the building.
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Aftermath</h3>
        <p className="mb-4">
          Police arrived 12 minutes later to take a report. Had the client relied solely on a standard alarm system 
          (which usually only triggers <em>after</em> a door is broken), the suspects would have been inside 
          and gone before law enforcement arrived.
        </p>
        <p className="mb-4">
          Because of the combination of <strong>Smart Detection + Rapid Human Response</strong>, the client suffered:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2 font-semibold text-emerald-800">
            <li>$0 in stolen merchandise.</li>
            <li>$0 in property damage to the building structure.</li>
            <li>Zero downtime for business operations the next morning.</li>
        </ul>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-emerald-900 text-white p-6 rounded-lg shadow-xl">
          <h4 className="font-bold text-lg mb-2 text-emerald-300">Don&apos;t wait for a loss to upgrade your security.</h4>
          <p className="mb-4">
            This outcome wasn&apos;t luck; it was design. Contact ProForce1 to implement this same level of protection for your business.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded transition-colors shadow-lg">
            Request a Security Audit
          </button>
        </div>
      </div>
    </article>
  );
}