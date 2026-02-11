import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 14
const blogData = {
  id: 14,
  title: "Tackling Today's Patrol Challenges: Modern Solutions",
  excerpt: "From guard fatigue to lack of accountability, traditional patrolling models are failing. Discover the modern software and hardware solutions that are closing the gaps.",
  category: "Industry Insights",
  author: "David Chen",
  date: "2024-12-05",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1000&auto=format&fit=crop" 
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
          <span className="bg-violet-100 text-violet-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/modern-patrol-solutions.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-violet-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          The security industry is facing a crisis of efficiency. As crime becomes more opportunistic and clients 
          demand higher transparency, the &quot;old ways&quot; of patrolling—paper logs, predictable routes, and unsupervised 
          night shifts—are no longer sufficient. Here are the three biggest challenges facing patrols today, 
          and the modern solutions ProForce1 utilizes to solve them.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Challenge 1: The &quot;Did They Check It?&quot; Problem</h3>
        <p className="mb-4">
          <strong>The Issue:</strong> A client comes in on Monday morning to find a door propped open. The guard&apos;s 
          paper log says the door was checked at 2:00 AM. Who is telling the truth? Without proof, trust erodes.
        </p>
        <div className="bg-violet-50 p-4 rounded border border-violet-200 mb-4">
          <strong>The Solution: NFC Tagging.</strong> We place small Near Field Communication chips on critical doors. 
          The officer <em>must</em> physically tap their phone to the chip to register the check. No tap means no check. 
          The data is immutable and timestamped.
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Challenge 2: Alert Fatigue &amp; Burnout</h3>
        <p className="mb-4">
          <strong>The Issue:</strong> Security officers often work long, monotonous hours. Staring at a bank of 
          silent monitors or walking the same empty hallway for 8 hours leads to &quot;alert fatigue,&quot; where the brain 
          stops registering potential threats.
        </p>
        <p className="mb-4">
          <strong>The Solution: Gamified Workflows.</strong> Our patrol apps break the shift into interactive missions. 
          Instead of &quot;patrol the lot,&quot; the task is &quot;Find and scan these 5 perimeter points within 15 minutes.&quot; 
          This keeps the brain engaged and active.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Challenge 3: The Lone Worker Risk</h3>
        <p className="mb-4">
          <strong>The Issue:</strong> An officer patrolling a remote construction site at 3 AM slips on ice or 
          confronts an intruder. If they can&apos;t reach their radio, no one knows they are in trouble.
        </p>
        <p className="mb-4">
          <strong>The Solution: Bio-Metric Monitoring.</strong> Modern wearables can detect a sudden fall (Man Down alert) 
          or a spike in heart rate associated with stress. These devices automatically trigger a Priority 1 alarm 
          to dispatch, broadcasting the officer&apos;s exact GPS coordinates even if they are unconscious.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white p-6 rounded-lg shadow-xl">
          <h4 className="font-bold text-lg mb-2 text-violet-100">Upgrade to Smart Security</h4>
          <p className="mb-4">
            Is your current security provider still using paper logs? It&apos;s time for an update. 
            ProForce1 uses technology to guarantee accountability.
          </p>
          <button className="bg-white text-violet-700 font-bold py-2 px-6 rounded-full transition-colors shadow-lg hover:bg-gray-100">
            See Our Tech Stack
          </button>
        </div>
      </div>
    </article>
  );
}