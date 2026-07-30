import type { Metadata } from "next"
import { buildPageMetadata } from "@/lib/seo"

export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 19,
    slug: "what-is-fire-watch-and-when-is-it-legally-required",
    title: "What Is Fire Watch and When Is It Legally Required in California?",
    excerpt:
      "Learn what a fire watch is, when California law requires one, and what happens if you skip it. Get compliant fire watch security today.",
    category: "Compliance & Licensing",
    author: "Security Operations Team",
    date: "2026-07-30",
    readTime: "6 min read",
    featured: true,
    image: "/blogimage/fire-watch.jpg",
  },
  {
    id: 18,
    slug: "armed-vs-unarmed-security-guards",
    title: "Armed vs. Unarmed Security Guards: Which Does Your Business Need?",
    excerpt:
      "Unarmed guards cover most day-to-day patrol, access control, and customer-facing roles, while armed guards suit high-risk, high-value operations. Here is how to decide which one your business actually needs.",
    category: "Security Tips",
    author: "Security Operations Team",
    date: "2026-07-24",
    readTime: "7 min read",
    featured: true,
    image: "/blogimage/guard-post.jpg",
  },
  {
    id: 17,
    slug: "event-security-planning-guide",
    title: "Event Security",
    excerpt:
      "A strong event security plan starts before guests arrive. See how trained officers, access control, communication, and visible coverage keep conferences and gatherings running smoothly.",
    category: "Event Security",
    author: "Event Security Team",
    date: "2026-07-08",
    readTime: "5 min read",
    featured: true,
    image: "/blogimage/event-security-deca.jpeg",
  },
  {
    id: 1,
    slug: "security-solutions-for-schools",
    title: "Securing the Future: Professional Security Solutions for Educational Institutions",
    excerpt:
      "Educational environments require a specialized, compassionate, yet firm approach to security. Discover how ProForce1 partners with schools to keep students, staff, and families protected.",
    category: "Safety Guidelines",
    author: "Operations Manager",
    date: "2026-02-19",
    readTime: "6 min read",
    featured: true,
    image: "/blogimage/School.jpeg",
  },
  {
    id: 13,
    slug: "security-culture-investing-in-your-guards",
    title: "Security Culture: How Investing in Your Guards Strengthens Safety",
    excerpt:
      "A strong security program starts with well-supported officers. Learn how training, supervision, communication, and retention improve safety outcomes for every site.",
    category: "Personnel",
    author: "Chief Operations Officer",
    date: "2025-08-29",
    readTime: "5 min read",
    featured: true,
    image: "/blogimage/guard-post.jpg",
  },
  {
    id: 15,
    slug: "engage-early-with-security-partners",
    title: "Why You Should Engage Early with Security Partners",
    excerpt:
      "Security should not be an afterthought. Discover why bringing your security partner into planning early saves money, reduces gaps, and improves site flow.",
    category: "Strategic Planning",
    author: "Michael Ross",
    date: "2024-12-18",
    readTime: "5 min read",
    featured: true,
    image: "/blogimage/business-security.jpg",
  },
  {
    id: 14,
    slug: "modern-patrol-challenges-and-solutions",
    title: "Tackling Today's Patrol Challenges: Modern Solutions",
    excerpt:
      "From guard fatigue to lack of accountability, traditional patrol models are changing. See how software, reporting, and field tools close the gaps.",
    category: "Industry Insights",
    author: "David Chen",
    date: "2024-12-05",
    readTime: "5 min read",
    image: "/blogimage/security-tech-implementation.jpg",
  },
  {
    id: 12,
    slug: "de-escalation-training-exercises",
    title: "Improving De-escalation: Training Exercises That Work",
    excerpt:
      "Practical scenario-based drills help officers strengthen communication, situational awareness, and safe resolution techniques before a conflict escalates.",
    category: "Training & Development",
    author: "Lisa Chang",
    date: "2024-11-28",
    readTime: "6 min read",
    image: "/blogimage/de-escalation-training.jpg",
  },
  {
    id: 11,
    slug: "cold-weather-protocols-for-overnight-guards",
    title: "Cold Weather Gear and Protocols for Overnight Guards",
    excerpt:
      "Recommendations for equipment, shift planning, and vehicle readiness that help overnight teams stay safe, alert, and operational in cold conditions.",
    category: "Safety Protocols",
    author: "Robert Martinez",
    date: "2024-11-12",
    readTime: "5 min read",
    image: "/blogimage/deescalation-training.jpg",
  },
  {
    id: 10,
    slug: "rapid-response-retail-loss-case-study",
    title: "Case Study: Rapid Response Averts Major Loss at Retail Campus",
    excerpt:
      "A real-world look at how coordinated guards, dispatch, and site procedures helped prevent major loss and minimize downtime for a retail client.",
    category: "Success Stories",
    author: "Sarah Jenkins",
    date: "2024-10-05",
    readTime: "5 min read",
    featured: true,
    image: "/blogimage/retail.jpeg",
  },
  {
    id: 9,
    slug: "ai-patrol-routing-and-incident-response",
    title: "How AI Is Shaping Patrol Routing and Incident Response",
    excerpt:
      "Explore practical AI-driven tools that optimize patrol patterns, identify risk signals, and accelerate response times while keeping officers informed.",
    category: "Technology Innovation",
    author: "Kenji Tanaka",
    date: "2024-09-15",
    readTime: "6 min read",
    image: "/blogimage/ai-patrol.jpg",
  },
  {
    id: 6,
    slug: "new-security-technology-implementation",
    title: "New Security Technology Implementation at ProForce1",
    excerpt:
      "From body-worn cameras to cloud-based reporting, see how ProForce1 uses modern tools to improve transparency and officer performance.",
    category: "Tech Update",
    author: "James Wilson",
    date: "2024-08-30",
    readTime: "5 min read",
    image: "/blogimage/security-tech-implementation.jpg",
  },
  {
    id: 5,
    slug: "mobile-patrol-best-practices",
    title: "Mobile Patrol Best Practices for Commercial Properties",
    excerpt:
      "Learn how effective mobile patrol strategies increase visibility, reduce security incidents, and improve protection for large commercial properties.",
    category: "Service Spotlight",
    author: "Michael Ross",
    date: "2024-07-08",
    readTime: "5 min read",
    image: "/blogimage/patrol-car.jpg",
  },
  {
    id: 4,
    slug: "understanding-bsis-requirements",
    title: "Understanding BSIS Requirements: What Every Security Professional Needs to Know",
    excerpt:
      "A practical guide to California Bureau of Security and Investigative Services licensing, training, and compliance expectations.",
    category: "Compliance & Licensing",
    author: "David Chen",
    date: "2024-06-15",
    readTime: "7 min read",
    image: "/blogimage/training-class.jpg",
  },
  {
    id: 3,
    slug: "future-of-event-security",
    title: "The Future of Event Security: Technology and Training Integration",
    excerpt:
      "How modern technology, advanced training, and strong field coordination are reshaping event safety and crowd control.",
    category: "Industry Trends",
    author: "Elena Rodriguez",
    date: "2024-05-22",
    readTime: "6 min read",
    featured: true,
    image: "/blogimage/event-tech.jpg",
  },
  {
    id: 2,
    slug: "proforce1-expands-northern-california",
    title: "ProForce1 Expands Services to Northern California Markets",
    excerpt:
      "ProForce1 expands into the Bay Area and Sacramento, bringing premium security solutions to new communities and business clients.",
    category: "Company News",
    author: "Sarah Jenkins",
    date: "2024-03-10",
    readTime: "4 min read",
    image: "/blogimage/expansion-map.jpg",
  },
  {
    id: 8,
    slug: "psychology-of-deterrence-physical-security",
    title: "The Psychology of Deterrence in Physical Security",
    excerpt:
      "Understand how visible security measures, professional presence, lighting, signage, and predictable coverage reduce incidents before they occur.",
    category: "Security Tips",
    author: "Dr. Amanda Foster",
    date: "2024-02-10",
    readTime: "8 min read",
    image: "/blogimage/guard-post.jpg",
  },
  {
    id: 16,
    slug: "top-security-measures-for-businesses",
    title: "Top 10 Security Measures Every Business Should Implement in 2024",
    excerpt:
      "Discover essential security protocols that help protect assets, employees, customers, and operations from common business threats.",
    category: "Security Tips",
    author: "Marcus Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/blogimage/Business.jpeg",
  },
  {
    id: 7,
    slug: "winter-security-for-construction-sites",
    title: "Winter Security Considerations for Construction Sites",
    excerpt:
      "Essential measures to protect construction sites during winter months when visibility decreases, weather changes, and after-hours risks increase.",
    category: "Safety Guidelines",
    author: "Robert Martinez",
    date: "2023-12-28",
    readTime: "4 min read",
    image: "/blogimage/construction.jpeg",
  },
]

export const BLOG_CATEGORIES = Array.from(new Set(BLOG_POSTS.map((post) => post.category))).sort()

export function getSortedBlogPosts() {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(`${b.date}T12:00:00`).getTime() - new Date(`${a.date}T12:00:00`).getTime(),
  )
}

export function getFeaturedBlogPosts() {
  return getSortedBlogPosts().filter((post) => post.featured)
}

export function getRecentBlogPosts(limit = 3) {
  return getSortedBlogPosts().slice(0, limit)
}

export function getBlogPostById(id: number) {
  return BLOG_POSTS.find((post) => post.id === id)
}

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug)
}

export function buildBlogPostMetadata(id: number): Metadata {
  const post = getBlogPostById(id)

  if (!post) return {}

  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: `${post.date}T12:00:00Z`,
  })
}

export function formatBlogDate(
  date: string,
  options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" },
) {
  return new Intl.DateTimeFormat("en-US", options).format(new Date(`${date}T12:00:00`))
}
