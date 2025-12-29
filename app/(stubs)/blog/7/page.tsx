import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 7
const blogData = {
  id: 7,
  title: "Winter Security Considerations for Construction Sites",
  excerpt: "Essential security measures to protect construction sites during winter months when visibility decreases and risks increase.",
  category: "Safety Guidelines",
  author: "Robert Martinez",
  date: "2023-12-28",
  readTime: "4 min read",
  image: "/blogimage/construction.jpeg" 
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
          <span className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/winter-construction-security.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-slate-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          Winter brings unique challenges to the construction industry. As daylight hours shrink and weather 
          conditions deteriorate, construction sites become increasingly vulnerable to theft, vandalism, 
          and accidents. Securing a site in December looks very different from securing it in July.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Combatting Reduced Visibility</h3>
        <p className="mb-4">
          Darkness is a thief&apos;s best friend. In winter, your site might be pitch black by 4:30 PM. 
          Standard lighting isn&apos;t enough.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Motion-Activated Floodlights:</strong> Install these at all entry points to startle intruders.</li>
            <li><strong>Perimeter Lighting:</strong> Ensure the fence line is visible from the street to aid passing police patrols.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Weather-Proofing Security Equipment</h3>
        <p className="mb-4">
          Cameras and sensors can fail in freezing temperatures or heavy rain. Ensure your surveillance gear 
          is rated for IP66 or higher (waterproof) and check lens heaters to prevent fogging or icing. 
          A blind camera is a useless camera.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Material Protection</h3>
        <p className="mb-4">
          With work often slowing down due to weather, expensive materials (copper, lumber, tools) may sit 
          idle for longer periods.
        </p>
        <div className="bg-slate-50 p-4 rounded border-l-4 border-slate-400 mb-4 text-sm">
          <strong>Tip:</strong> Use heavy-duty, lockable storage containers (Conex boxes) and place them 
          door-to-door or backed against a wall to physically prevent the doors from being opened during off-hours.
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Fire Watch Protocols</h3>
        <p className="mb-4">
          Winter often means portable heaters are in use on site. This drastically increases fire risk. 
          Security patrols must include checks for unplugged heaters and safe fuel storage at the end of every shift.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-slate-800 text-white p-6 rounded-lg shadow-lg">
          <h4 className="font-bold text-lg mb-2 text-slate-300">Worried about your site this winter?</h4>
          <p className="mb-4">
            ProForce1 specializes in construction site security. We operate in all weather conditions so your project stays safe.
          </p>
          <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Get a Winter Quote
          </button>
        </div>
      </div>
    </article>
  );
}