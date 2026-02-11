import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 13
const blogData = {
  id: 12,
  title: "Improving De-escalation: Training Exercises That Work",
  excerpt: "The best weapon a security officer has is their voice. Explore the specific role-playing scenarios and 'Verbal Judo' techniques we use to train officers to diffuse volatility without physical force.",
  category: "Training &amp; Development",
  author: "Lisa Chang",
  date: "2024-11-28",
  readTime: "6 min read",
  image: "/blogimage/de-escalation-training.jpg" 
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
          <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/de-escalation-training.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-rose-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          In the security industry, a physical altercation is often viewed as a failure of strategy. 
          While officers must be trained in self-defense, the ultimate goal is to never have to use it. 
          At ProForce1, we emphasize that the most powerful tool on an officer&apos;s belt isn&apos;t the pepper spray or the baton—it&apos;s 
          their ability to communicate.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. The &quot;Verbal Judo&quot; Simulation</h3>
        <p className="mb-4">
          Based on the classic techniques developed by Dr. George Thompson, this exercise teaches officers to use 
          words to redirect aggression.
        </p>
        <p className="mb-4">
          <strong>The Drill:</strong> Instructors act as verbally abusive subjects, shouting insults and refusing 
          instructions. The trainee must maintain a &quot;professional face,&quot; ignore the insults, and loop the conversation 
          back to the goal (e.g., &quot;I understand you&apos;re upset, sir, but I still need you to step away from the door so we can help you.&quot;).
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Proxemics and Stance Workshops</h3>
        <p className="mb-4">
          Body language speaks louder than words. If an officer says &quot;calm down&quot; while clenching their fists and 
          puffing their chest, they are sending a mixed signal that escalates tension.
        </p>
        <div className="bg-rose-50 p-4 rounded border border-rose-200 mb-4">
          <strong>Key Technique:</strong> We train the &quot;Interview Stance.&quot; Standing at a 45-degree angle with hands 
          open and visible (above the waist). This is non-threatening to the subject but allows the officer to react 
          quickly if attacked.
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. The &quot;Why?&quot; Loop Exercise</h3>
        <p className="mb-4">
          Often, people become aggressive because they feel unheard. This exercise focuses on active listening. 
          Trainees are paired up; one acts as a distressed customer who has been denied entry. The officer must 
          ask open-ended questions to uncover the root cause of the distress rather than just repeating &quot;It&apos;s policy.&quot;
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. High-Stress Decision Making</h3>
        <p className="mb-4">
          It is easy to be calm in a classroom. It is harder when your heart rate is 140 BPM. We use physical 
          exercises (burpees or sprints) to elevate the trainee&apos;s heart rate immediately before a role-play scenario. 
          This simulates the adrenaline dump of a real confrontation, forcing the officer to find their calm voice 
          despite physiological stress.
        </p>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl">
          <h4 className="font-bold text-lg mb-2 text-rose-300">Better Training = Lower Liability</h4>
          <p className="mb-4">
            Security officers who know how to de-escalate reduce injury risks and legal liability for business owners. 
            Choose a provider that prioritizes brains over brawn.
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded transition-colors shadow-lg">
            Ask About Our Training Standards
          </button>
        </div>
      </div>
    </article>
  );
}