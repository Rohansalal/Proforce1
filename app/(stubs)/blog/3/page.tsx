import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Data for Blog 3
const blogData = {
  id: 3,
  title: "The Future of Event Security: Technology and Training Integration",
  excerpt: "How AI, drones, and advanced surveillance are reshaping event safety, and why the human element remains the most critical puzzle piece.",
  category: "Industry Trends",
  author: "Elena Rodriguez",
  date: "2024-05-22",
  readTime: "6 min read",
  image: "/blogimage/event-tech.jpg" 
};

export default function BlogPostThree() {
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
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
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
        {/* Note: Ensure the image exists in public/blogimage/event-security-tech.jpg */}
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
        <p className="text-xl font-medium text-gray-800 mb-8 border-l-4 border-purple-500 pl-4 italic">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          Gone are the days when event security meant simply placing a few guards at the entrance. 
          As gatherings become larger and threats more complex, the industry is undergoing a massive 
          transformation. The secret to modern safety isn't just better gadgets—it's the seamless 
          integration of cutting-edge technology with highly trained professionals.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. AI and Predictive Analytics</h3>
        <p className="mb-4">
          Reactive security is no longer enough. Modern command centers are utilizing Artificial 
          Intelligence to monitor crowd density and behavior patterns in real-time. By analyzing live 
          video feeds, AI can flag potential bottlenecks or aggressive behavior before a physical 
          altercation occurs, allowing teams to de-escalate situations proactively.
        </p>
        

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Drone Surveillance for Large Venues</h3>
        <p className="mb-4">
          For outdoor festivals and sprawling corporate campuses, ground patrols have limitations. 
          Security drones provide a "eye in the sky," offering thermal imaging and rapid response 
          capabilities. They can reach a reported incident location in seconds, giving ground teams 
          vital situational awareness before they arrive on the scene.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Frictionless Access Control</h3>
        <p className="mb-4">
          Long lines are a security risk in themselves. New biometric scanners and NFC-enabled 
          passes allow for high-speed, contactless entry. This not only improves the guest experience 
          but also frees up security personnel to focus on behavioral analysis rather than ticket scanning.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. The Human Element: Bridging the Gap</h3>
        <p className="mb-4">
          Technology is useless without skilled operators. The most critical trend in 2024 is 
          <strong> hybrid training</strong>. Security officers are now being trained not just in 
          physical defense, but in cybersecurity awareness and digital tool usage.
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Digital Literacy:</strong> interpreting data from AI dashboards.</li>
            <li><strong>De-escalation:</strong> using soft skills effectively in high-stress environments.</li>
            <li><strong>Communication:</strong> coordinating via encrypted apps rather than just radios.</li>
        </ul>
        
        <hr className="my-10 border-gray-200"/>
        
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
          <h4 className="font-bold text-lg mb-2 text-purple-900">Planning a major event?</h4>
          <p className="text-purple-800">
            Don't leave safety to chance. Contact ProForce1 to learn how our integrated tech-and-human 
            security teams can protect your next event.
          </p>
        </div>
      </div>
    </article>
  );
}