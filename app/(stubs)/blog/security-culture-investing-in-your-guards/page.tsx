import Image from "next/image"
import Link from "next/link"
import { buildBlogPostMetadata } from "@/lib/blog-posts"

export const metadata = buildBlogPostMetadata(13)

const blogData = {
  id: 13,
  title: "Security Culture: How Investing in Your Guards Strengthens Safety",
  excerpt:
    "A strong security program starts with well-supported officers. Learn how training, supervision, communication, and retention improve safety outcomes for every site.",
  category: "Personnel",
  author: "Chief Operations Officer",
  date: "2025-08-29",
  readTime: "5 min read",
  image: "/blogimage/guard-post.jpg",
}

export default function Page() {
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

      <div className="relative mb-10 h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
        <Image
          src={blogData.image}
          alt={blogData.title}
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
          Security is often measured by patrol logs, incident reports, and response times. Those
          numbers matter, but the strongest programs are built before the first report is written.
          They begin with the culture surrounding the officers who represent the property every
          hour of the day.
        </p>

        <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
          1. Training Creates Consistent Judgment
        </h3>
        <p className="mb-4">
          Professional guards need more than a post order binder. They need scenario-based
          training, de-escalation practice, customer service expectations, radio discipline, and
          clear escalation standards. When training is consistent, decision-making becomes more
          consistent too.
        </p>

        <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
          2. Supervision Keeps Standards Alive
        </h3>
        <p className="mb-4">
          Field supervisors turn a written security plan into daily behavior. Site visits, coaching,
          uniform checks, report reviews, and quick feedback loops help officers stay aligned with
          the client&apos;s expectations instead of drifting into habits that weaken coverage.
        </p>

        <div className="mb-6 rounded-lg border border-red-100 bg-red-50 p-5">
          <strong className="text-red-800">Operational note:</strong> Strong supervision also gives
          clients a cleaner audit trail. Issues are corrected early, before they become recurring
          incidents or service complaints.
        </div>

        <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
          3. Retention Improves Site Knowledge
        </h3>
        <p className="mb-4">
          Experienced officers learn the normal rhythm of a property: staff patterns, delivery
          routines, access points, blind spots, and recurring friction points. Retaining reliable
          guards protects that institutional knowledge and improves threat recognition.
        </p>

        <h3 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
          4. Communication Builds Client Confidence
        </h3>
        <p className="mb-4">
          Officers should know what to report, when to escalate, and how to document incidents in
          a way that is useful to managers. Clear communication makes security feel visible,
          accountable, and integrated with the broader property team.
        </p>

        <hr className="my-10 border-gray-200" />

        <div className="rounded-lg bg-slate-950 p-6 text-white shadow-xl">
          <h4 className="mb-2 text-lg font-bold text-red-200">Build a stronger guard program</h4>
          <p className="mb-4">
            ProForce1 combines trained officers, field supervision, and practical reporting to
            support reliable coverage across schools, events, businesses, and residential sites.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-red-600 px-6 py-2 font-bold text-white transition hover:bg-red-700"
          >
            Request a security assessment
          </Link>
        </div>
      </div>
    </article>
  )
}
