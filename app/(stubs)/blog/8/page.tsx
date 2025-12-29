import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 8
const blogData = {
  id: 8,
  title: "The Psychology of Deterrence in Physical Security",
  excerpt: "Understanding how visible security measures and professional presence can prevent incidents before they occur.",
  category: "Security Tips",
  author: "Dr. Amanda Foster",
  date: "2024-02-10", 
  readTime: "8 min read",
  image: "/blogimage/guard-post.jpg" 
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
          <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/psychology-of-security.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-indigo-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          Security is often thought of as physical barriers: fences, locks, and guards. However, the most 
          effective security takes place in the mind of the potential offender. This concept is known as 
          <strong> Rational Choice Theory</strong>. Before committing a crime, an offender weighs the risks 
          against the rewards. Our goal is to tip that scale.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. The Broken Windows Theory</h3>
        <p className="mb-4">
          This criminological theory suggests that visible signs of disorder (broken windows, graffiti, litter) 
          encourage further crime. It signals that &quot;no one cares&quot; and &quot;no one is watching.&quot;
        </p>
        <p className="mb-4">
          <strong>Application:</strong> A clean, well-lit, and well-maintained property is inherently safer. 
          It signals active management and vigilance.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. The Uniform Effect</h3>
        <p className="mb-4">
          Why do we wear uniforms? It&apos;s not just for identification. A crisp, professional uniform conveys 
          authority and competence. An offender sees a guard in a sloppy uniform and thinks, &quot;They are lazy, 
          I can get past them.&quot; They see a guard in a professional uniform and think, &quot;They are disciplined, 
          I should go elsewhere.&quot;
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Natural Surveillance (CPTED)</h3>
        <p className="mb-4">
          Crime Prevention Through Environmental Design (CPTED) relies on psychology. By trimming hedges 
          and using open fencing, we create &quot;natural surveillance.&quot; Criminals feel exposed. If they feel 
          like they can be seen by neighbors or passersby, the psychological pressure usually forces them to abort.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Signage as a Warning</h3>
        <p className="mb-4">
          Simple signs like &quot;Under 24/7 Surveillance&quot; or &quot;K-9 Patrol&quot; act as psychological barriers. 
          Even if a dog isn&apos;t currently present, the <em>threat</em> of the dog creates fear. Fear is a potent deterrent.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
          <h4 className="font-bold text-lg mb-2 text-indigo-900">Security is more than just muscle.</h4>
          <p className="text-indigo-800">
            At ProForce1, our officers are trained in the psychology of presence. We stop threats before 
            they happen by projecting authority and awareness.
          </p>
        </div>
      </div>
    </article>
  );
}