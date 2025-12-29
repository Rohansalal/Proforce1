import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 12
const blogData = {
  id: 11,
  title: "Cold Weather Gear and Protocols for Overnight Guards",
  excerpt: "Hypothermia and fatigue are real threats to perimeter security. Learn the essential gear checklist and patrol protocols that keep officers warm, alert, and safe during freezing shifts.",
  category: "Safety Protocols",
  author: "Robert Martinez",
  date: "2024-11-12",
  readTime: "5 min read",
  image: "/blogimage/deescalation-training.jpg" 
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
          <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/cold-weather-gear.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-sky-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          Security doesn&apos;t stop when the temperature drops. In fact, equipment failure and forced entry attempts 
          often spike during extreme weather. However, a freezing guard is a distracted guard. To maintain peak 
          situational awareness during winter overnights, ProForce1 mandates specific gear standards and patrol protocols.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. The Layering System</h3>
        <p className="mb-4">
          A single heavy coat isn&apos;t enough. We train officers on the three-layer system to regulate body temperature 
          while moving between heated vehicles and freezing exteriors.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Base Layer:</strong> Moisture-wicking synthetic material (never cotton) to keep sweat off the skin.</li>
            <li><strong>Insulation Layer:</strong> Fleece or wool to trap heat.</li>
            <li><strong>Shell Layer:</strong> Windproof and waterproof outer shell to block the elements.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Protecting the Extremities</h3>
        <p className="mb-4">
          Frostbite strikes fingers, toes, and ears first.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-sky-50 p-4 border border-sky-200 rounded">
                <strong>Footwear:</strong> Insulated, waterproof tactical boots with wool socks are mandatory. Cold feet lead to reduced mobility.
            </div>
            <div className="bg-sky-50 p-4 border border-sky-200 rounded">
                <strong>Handwear:</strong> Officers use convertible mittens or tactical gloves that allow for dexterity (using radios/keys) without exposing skin.
            </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Modified Patrol Intervals</h3>
        <p className="mb-4">
          During sub-freezing conditions, the standard &quot;continuous patrol&quot; model is dangerous. We implement 
          <strong> micro-breaks</strong>. An officer might patrol for 45 minutes and then spend 15 minutes in a 
          heated checkpoint to raise their core temperature. This cycle prevents the gradual onset of hypothermia, 
          which causes confusion and slow reaction times.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. recognizing Hypothermia Signs</h3>
        <p className="mb-4">
          Every guard is trained to recognize the &quot;umbles&quot;—stumbles, mumbles, fumbles, and grumbles. 
          If a colleague starts slurring speech or fumbling with keys, it is a medical emergency, not clumsiness.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-sky-900 text-white p-6 rounded-lg shadow-xl">
          <h4 className="font-bold text-lg mb-2 text-sky-300">Winter is coming. Is your site ready?</h4>
          <p className="mb-4">
            Don&apos;t let the cold compromise your security. ProForce1 officers are equipped to handle the elements 
            so your assets stay protected 24/7/365.
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition-colors shadow-lg">
            Contact Us for Winter Rates
          </button>
        </div>
      </div>
    </article>
  );
}