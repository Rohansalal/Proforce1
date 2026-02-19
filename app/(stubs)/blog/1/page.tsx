import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for School Security Blog
const blogData = {
  id: 1,
  title: "Securing the Future: Professional Security Solutions for Educational Institutions",
  excerpt: "Educational environments require a specialized, compassionate, yet firm approach to security. Discover how ProForce 1 partners with schools like South Bay Montessori to ensure a safe learning haven.",
  category: "Safety Guidelines",
  author: "Operations Manager",
  date: "2026-02-19",
  readTime: "6 min read",
  image: "/blogimage/School.jpeg"
};

export default function BlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Navigation / Breadcrumb */}
      <div className="mb-6">
        <Link href="/blog" className="text-red-600 hover:underline font-bold flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all blogs
        </Link>
      </div>

      {/* Header Section */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {blogData.category}
          </span>
          <span className="text-gray-500 text-sm font-medium">• {blogData.readTime}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
          {blogData.title}
        </h1>

        <div className="flex items-center text-gray-600 text-sm gap-4 border-b border-gray-100 pb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
              <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <p>By <span className="font-bold text-gray-900">{blogData.author}</span></p>
          </div>
          <time dateTime={blogData.date} className="font-medium">{new Date(blogData.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-[450px] mb-12 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
        <Image
          src={blogData.image}
          alt="ProForce 1 Security at South Bay Montessori"
          fill
          style={{ objectFit: 'cover' }}
          className="hover:scale-105 transition-transform duration-1000"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <p className="text-white text-sm italic">ProForce 1 personnel on-site at South Bay Montessori</p>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
        <p className="text-2xl font-semibold text-gray-800 mb-10 leading-snug">
          In an era where safety is paramount, educational institutions face unique challenges. Balancing an open, welcoming environment for children with the rigid protocols required for modern protection is a delicate task.
        </p>

        <p className="mb-8">
          At ProForce 1, we understand that school security is not just about perimeter defense; it's about peace of mind for parents, focused attention for students, and a secure workspace for educators. Our recent partnership with <strong>South Bay Montessori</strong> exemplifies our commitment to this mission.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">The ProForce 1 School Protection Protocol</h2>

        <p className="mb-6">
          Our approach to educational security is built on three core pillars: <strong>Visibility, Verification, and Vigilance.</strong>
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. High-Visibility Deterrence</h3>
        <p className="mb-6">
          The presence of professional, uniformed security personnel is the first line of defense. Our officers are trained to be approachable figures of safety within the school community while maintaining a commanding presence that deters unauthorized access.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Digital Verification & Reporting</h3>
        <p className="mb-6">
          Technology is a force multiplier. We utilize <strong>NFC (Near Field Communication)</strong> tagging across campuses. Officers must physically scan tags at every entry point, playground perimeter, and vulnerable area. This generates a real-time digital log that school administrators can review instantly, proving that every corner of the facility is being actively monitored.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Specialized Training for School Environments</h3>
        <p className="mb-8">
          Guarding a school is different from guarding a warehouse. Our school security teams undergo additional training in:
        </p>
        <ul className="list-disc pl-6 mb-8 space-y-3">
          <li><strong>De-escalation Techniques:</strong> Handling emotional situations with grace and professionalism.</li>
          <li><strong>Emergency Response:</strong> Coordinated protocols for swift action during critical incidents.</li>
          <li><strong>First Aid & CPR:</strong> Ensuring our guards are prepared for medical emergencies on campus.</li>
        </ul>

        {/* <div className="bg-red-50 border-l-4 border-red-600 p-8 md:p-10 my-12 rounded-r-xl">
          <h4 className="text-2xl font-bold text-red-900 mb-4 tracking-tight">A Partnership for Safety</h4>
          <p className="text-red-800 text-lg leading-relaxed mb-0">
            "Having ProForce 1 on site has transformed our daily operations. Knowing that our entrances are monitored by professionals who truly care about the safety of our children allows our teachers to focus on what they do best: teaching."
          </p>
          <p className="text-red-700 font-bold mt-4 uppercase tracking-wider text-sm">— School Administrator Perspective</p>
        </div> */}

        <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 tracking-tight">Conclusion</h2>
        <p className="mb-10">
          Investing in professional security is an investment in the future. By partnering with ProForce 1, educational institutions can ensure that their focus remains on learning, while we handle the complex task of protection.
        </p>

        <hr className="my-12 border-gray-100" />

        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-2xl font-bold mb-4">Secure Your Institution</h4>
            <p className="text-slate-400 text-lg mb-8">
              Interested in how ProForce 1 can enhance the safety of your school or campus?
              Contact our education security specialists for a comprehensive site assessment.
            </p>
            <Link href="/contact" className="inline-block bg-red-600 hover:bg-red-700 text-white font-black py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">
              Request a Consultation
            </Link>
          </div>
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}