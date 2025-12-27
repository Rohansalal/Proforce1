import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 5
const blogData = {
  id: 5,
  title: "Mobile Patrol Best Practices for Commercial Properties",
  excerpt: "Static guards aren't always the answer. Learn how mobile patrols provide cost-effective, high-visibility deterrence for sprawling commercial lots.",
  category: "Service Spotlight",
  author: "Michael Ross",
  date: "2024-07-08",
  readTime: "5 min read",
  image: "/blogimage/mobile-patrol.jpg" 
};

// We name the component 'Page' to follow standard Next.js conventions
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
          <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/mobile-patrol.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-red-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          For many businesses&mdash;especially those with large parking lots, construction sites, or multiple 
          buildings&mdash;hiring a standing guard for every corner is financially impossible. This is where 
          <strong> Mobile Patrol Services</strong> shine. However, driving a car around a lot isn&apos;t enough. 
          Effective patrolling is a science.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. The Principle of Unpredictability</h3>
        <p className="mb-4">
          Criminals watch patterns. If your security vehicle passes by exactly at 10:00 PM and 2:00 AM 
          every night, thieves will simply plan their break-in for 12:00 AM. 
        </p>
        <p className="mb-4">
          <strong>Best Practice:</strong> We utilize randomized patrol routes and staggered timing. 
          The goal is to create a &quot;zones of uncertainty&quot; for potential intruders&mdash;they never know 
          when a patrol car might turn the corner.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. High-Visibility vs. Stealth</h3>
        <p className="mb-4">
          There is a debate between &quot;stealth&quot; patrols and &quot;marked&quot; vehicles. For commercial properties, 
          <strong> deterrence is key</strong>. 
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Lighting:</strong> Using amber overhead lights while patrolling parking lots signals presence.</li>
            <li><strong>Markings:</strong> Clearly reflective graphics on vehicles deter loitering immediately.</li>
            <li><strong>Dismounts:</strong> The driver must not stay in the car. Checking doors physically (handle shaking) is mandatory.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. GPS Reporting & Geofencing</h3>
        <p className="mb-4">
          How do you know the patrol actually happened? Modern best practices require digital transparency. 
          ProForce1 vehicles are equipped with GPS tracking that logs:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
             <div className="bg-gray-50 p-4 border rounded">
                <span className="font-bold text-red-600 block mb-1">Route Replay</span>
                Exact path taken by the vehicle on the property.
             </div>
             <div className="bg-gray-50 p-4 border rounded">
                <span className="font-bold text-red-600 block mb-1">Dwell Time</span>
                How long the officer spent at specific checkpoints.
             </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Integrated Alarm Response</h3>
        <p className="mb-4">
          Mobile patrols are most effective when paired with an alarm system. Instead of the police 
          (who may be delayed by non-emergency calls), a mobile patrol unit already in the area 
          can respond to a tripped sensor in minutes, verifying if it is a false alarm or a real threat.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-red-50 p-6 rounded-lg border border-red-100">
          <h4 className="font-bold text-lg mb-2 text-red-900">Is your lot vulnerable at night?</h4>
          <p className="text-red-800">
            Secure your perimeter without breaking the budget. Contact ProForce1 to schedule a 
            site assessment for our Mobile Patrol units.
          </p>
        </div>
      </div>
    </article>
  );
}