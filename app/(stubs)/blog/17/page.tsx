import Image from "next/image"
import Link from "next/link"

const blogData = {
  id: 17,
  title: "Event Security",
  excerpt:
    "A strong event security plan starts before guests arrive. See how trained officers, access control, communication, and visible coverage keep conferences and gatherings running smoothly.",
  category: "Event Security",
  author: "Event Security Team",
  date: "2026-07-08",
  readTime: "5 min read",
  image: "/blogimage/event-security-deca.jpeg",
}

export default function EventSecurityBlogPost() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-6">
        <Link href="/blog" className="font-bold text-red-600 hover:underline">
          &larr; Back to all blogs
        </Link>
      </div>

      <header className="mb-8 text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="rounded bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800">
            {blogData.category}
          </span>
          <span className="text-sm text-gray-500">/ {blogData.readTime}</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">{blogData.title}</h1>

        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <p>
            By <span className="font-semibold text-gray-900">{blogData.author}</span>
          </p>
          <time dateTime={blogData.date}>{blogData.date}</time>
        </div>
      </header>

      <div className="relative mb-10 h-[430px] w-full overflow-hidden rounded-xl shadow-lg">
        <Image
          src={blogData.image}
          alt="ProForce1 event security team at a conference venue"
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="mb-8 border-l-4 border-red-500 pl-4 text-xl font-medium italic text-gray-800">
          {blogData.excerpt}
        </p>

        <p className="mb-6">
          Successful events depend on more than a good schedule and a polished venue. Guests,
          vendors, staff, and VIPs all move through the same environment, often at the same time.
          Professional event security keeps that movement organized, calm, and protected from the
          first arrival through the final exit.
        </p>

        <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
          1. Planning Starts Before the Doors Open
        </h3>
        <p className="mb-4">
          The strongest event coverage begins with a site walkthrough, post assignments, emergency
          routes, access points, credential rules, and communication channels. When officers know the
          venue layout and event flow in advance, they can prevent confusion before it becomes a
          safety concern.
        </p>

        <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
          2. Access Control Protects the Guest Experience
        </h3>
        <p className="mb-4">
          Entrances, registration areas, backstage corridors, loading docks, and restricted rooms all
          need clear control. Trained guards verify credentials, guide attendees, and stop
          unauthorized access without disrupting the professional tone of the event.
        </p>

        <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
          3. Visible Coverage Reduces Risk
        </h3>
        <p className="mb-4">
          A visible security team helps deter theft, disorderly behavior, and unwanted entry. Just as
          important, approachable officers give guests and staff a clear place to go when they need
          help, directions, or quick incident support.
        </p>

        <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
          4. Communication Keeps the Team Aligned
        </h3>
        <p className="mb-4">
          Events change quickly. Late arrivals, crowd surges, medical issues, vendor needs, and
          schedule changes require fast coordination. ProForce1 officers use clear reporting and
          dispatch communication so supervisors can make decisions with accurate information.
        </p>

        <div className="mb-6 rounded-lg border border-red-100 bg-red-50 p-5">
          <strong className="text-red-800">Operational note:</strong> Event security should feel
          steady, not intrusive. The goal is to protect the event while preserving the guest
          experience the organizer worked hard to create.
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="rounded-lg bg-slate-950 p-6 text-white shadow-xl">
          <h4 className="mb-2 text-lg font-bold text-red-200">Planning an upcoming event?</h4>
          <p className="mb-4">
            ProForce1 provides trained event security teams for conferences, private gatherings,
            corporate programs, school functions, and high-traffic venues.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-red-600 px-6 py-2 font-bold text-white transition hover:bg-red-700"
          >
            Request event security support
          </Link>
        </div>
      </div>
    </article>
  )
}
