/**
 * Internal linking for FAQ answers.
 *
 * FAQ copy in `lib/faqs.ts` was written with call-to-action closing sentences
 * ("See our bank security service...", "Compare armed security and unarmed
 * security options...") that were never actually linked. Rather than hand-
 * annotating 116 answers, we keep the answer strings as plain text — so the
 * FAQPage JSON-LD stays byte-identical to what users read — and resolve links
 * at render time from the rule table below.
 *
 * Guardrails that keep this from turning into keyword spam:
 *   1. At most MAX_LINKS_PER_ANSWER links per answer, all with distinct targets.
 *   2. Service pages outrank /contact, which outranks the phone number, so a
 *      list-style answer links the service it names rather than a generic CTA.
 *   3. Matches inside the closing CTA sentence win ties — that is where the
 *      copy was written to be clicked.
 *   4. Self-links are dropped by the caller passing `currentPath`.
 *
 * Services we have not built a page for (residential, warehouse, jewelry,
 * dispensary, hotel, HOA, data center) point at the closest existing service
 * page so the anchor still passes equity instead of 404ing.
 */

import { DOC_FAQ_LINKS } from "@/lib/faq-doc-links"

export type FaqLinkRule = {
  phrase: string
  href: string
  /** Only used when an answer would otherwise end up with no link at all. */
  fallback?: true
}

const MAX_LINKS_PER_ANSWER = 2

export const FAQ_LINK_RULES: readonly FaqLinkRule[] = [
  // --- Named service pages, longest phrasing first ---
  { phrase: "financial institutions security service", href: "/services/financial-institutions-security" },
  { phrase: "shopping center security service", href: "/services/shopping-center-security" },
  { phrase: "loss prevention security service", href: "/services/loss-prevention-security" },
  { phrase: "fire watch security service", href: "/services/fire-watch-security" },
  { phrase: "bank security service", href: "/services/bank-security" },

  // --- Services overview ---
  { phrase: "full service offerings", href: "/services" },
  { phrase: "our services", href: "/services" },

  // --- Core service keywords ---
  { phrase: "high-rise building security", href: "/services/high-rise-building-security" },
  { phrase: "financial institution security", href: "/services/financial-institutions-security" },
  { phrase: "construction site security", href: "/services/construction-security" },
  { phrase: "armed executive protection", href: "/services/executive-protection" },
  { phrase: "school and campus security", href: "/services/school-campus-security" },
  { phrase: "unarmed security guards", href: "/services/unarmed-security" },
  { phrase: "unarmed security guard", href: "/services/unarmed-security" },
  { phrase: "armed security guards", href: "/services/armed-security" },
  { phrase: "armed security guard", href: "/services/armed-security" },
  { phrase: "school campus security", href: "/services/school-campus-security" },
  { phrase: "executive protection", href: "/services/executive-protection" },
  { phrase: "retail loss prevention", href: "/services/loss-prevention-security" },
  { phrase: "construction security", href: "/services/construction-security" },
  { phrase: "unarmed security", href: "/services/unarmed-security" },
  { phrase: "hospital security", href: "/services/hospital-security" },
  { phrase: "shopping center", href: "/services/shopping-center-security" },
  { phrase: "shopping centers", href: "/services/shopping-center-security" },
  { phrase: "loss prevention", href: "/services/loss-prevention-security" },
  { phrase: "armed security", href: "/services/armed-security" },
  { phrase: "school security", href: "/services/school-campus-security" },
  { phrase: "VIP-level protection", href: "/services/executive-protection" },
  { phrase: "on-site security", href: "/services/on-site-security" },
  { phrase: "mobile patrols", href: "/services/mobile-patrol-security" },
  { phrase: "mobile patrol", href: "/services/mobile-patrol-security" },
  { phrase: "VIP protection", href: "/services/executive-protection" },
  { phrase: "access control", href: "/services/on-site-security" },
  { phrase: "on-site guards", href: "/services/on-site-security" },
  { phrase: "on-site guard", href: "/services/on-site-security" },
  { phrase: "event security", href: "/services/event-security" },
  { phrase: "construction", href: "/services/construction-security" },
  { phrase: "retail security", href: "/services/retail-centers-security" },
  { phrase: "bank security", href: "/services/bank-security" },
  { phrase: "fire watch", href: "/services/fire-watch-security" },

  // --- Industry nouns that map onto an existing service page ---
  { phrase: "warehouses and distribution centers", href: "/services/factories-storage-security" },
  { phrase: "residential security guards", href: "/services/unarmed-security" },
  { phrase: "distribution centers", href: "/services/factories-storage-security" },
  { phrase: "cannabis dispensaries", href: "/services/armed-security" },
  { phrase: "apartment communities", href: "/services/mobile-patrol-security" },
  { phrase: "apartment complexes", href: "/services/mobile-patrol-security" },
  { phrase: "gated communities", href: "/services/mobile-patrol-security" },
  { phrase: "manufacturing plants", href: "/services/factories-storage-security" },
  { phrase: "jewelry stores", href: "/services/armed-security" },
  { phrase: "jewelry store", href: "/services/armed-security" },
  { phrase: "data centers", href: "/services/high-rise-building-security" },
  { phrase: "retail stores", href: "/services/retail-centers-security" },
  { phrase: "credit unions", href: "/services/financial-institutions-security" },
  { phrase: "corporate towers", href: "/services/high-rise-building-security" },
  { phrase: "warehouses", href: "/services/factories-storage-security" },
  { phrase: "warehouse", href: "/services/factories-storage-security" },
  { phrase: "commercial properties", href: "/services/on-site-security" },
  { phrase: "hospitals", href: "/services/hospital-security" },
  { phrase: "vandalism", href: "/services/loss-prevention-security" },
  { phrase: "weddings", href: "/services/event-security" },
  { phrase: "schools", href: "/services/school-campus-security" },
  { phrase: "banks", href: "/services/bank-security" },

  // --- Contact / dispatch CTAs ---
  { phrase: "(800) 779-7691", href: "tel:+18007797691" },
  { phrase: "emergency response assessment", href: "/contact" },
  { phrase: "branch security assessment", href: "/contact" },
  { phrase: "security consultation", href: "/contact" },
  { phrase: "officer certifications", href: "/contact" },
  { phrase: "private consultation", href: "/contact" },
  { phrase: "facility walkthrough", href: "/contact" },
  { phrase: "multi-site proposal", href: "/contact" },
  { phrase: "shrinkage analysis", href: "/contact" },
  { phrase: "coverage assessment", href: "/contact" },
  { phrase: "threat assessment", href: "/contact" },
  { phrase: "needs assessment", href: "/contact" },
  { phrase: "custom proposal", href: "/contact" },
  { phrase: "staffing plan", href: "/contact" },
  { phrase: "custom quote", href: "/contact" },
  { phrase: "sample report", href: "/contact" },
  { phrase: "walkthrough", href: "/contact" },
  { phrase: "Contact us", href: "/contact" },
  { phrase: "consultation", href: "/contact" },
  { phrase: "proposal", href: "/contact" },
  { phrase: "assessment", href: "/contact" },
  { phrase: "quote", href: "/contact" },

  // --- Supporting blog articles. These carry the FAQs on a service page whose
  //     only service mention is the page itself (and so self-suppresses). ---
  { phrase: "armed and unarmed", href: "/blog/armed-vs-unarmed-security-guards" },
  { phrase: "Bureau of Security and Investigative Services", href: "/blog/understanding-bsis-requirements" },
  { phrase: "crowd management", href: "/blog/event-security-planning-guide" },
  { phrase: "crowd control", href: "/blog/event-security-planning-guide" },
  { phrase: "de-escalation", href: "/blog/de-escalation-training-exercises" },
  { phrase: "deterrence", href: "/blog/psychology-of-deterrence-physical-security" },
  { phrase: "GPS-tracked", href: "/blog/mobile-patrol-best-practices" },
  { phrase: "patrol checks", href: "/blog/mobile-patrol-best-practices" },
  { phrase: "BSIS", href: "/blog/understanding-bsis-requirements" },

  // --- Last resort so no answer is left without an internal link ---
  { phrase: "security officers", href: "/services", fallback: true },
  { phrase: "security guards", href: "/services", fallback: true },
  { phrase: "security guard", href: "/services", fallback: true },
  { phrase: "ProForce 1", href: "/about", fallback: true },
  { phrase: "officers", href: "/services", fallback: true },
  { phrase: "training", href: "/blog/security-culture-investing-in-your-guards", fallback: true },
]

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/** Only add \b where the phrase edge is a word character — "(800)…" must not get one. */
function withBoundaries(phrase: string) {
  const escaped = escapeRegExp(phrase)
  const lead = /^\w/.test(phrase) ? "\\b" : ""
  const tail = /\w$/.test(phrase) ? "\\b" : ""
  return `${lead}${escaped}${tail}`
}

const RULES_BY_PHRASE = new Map(
  FAQ_LINK_RULES.map((rule) => [rule.phrase.toLowerCase(), rule])
)

// Longest phrase first so "unarmed security guard" beats "unarmed security" at
// the same start position; the regex engine then takes the leftmost match.
const MATCHER = new RegExp(
  [...FAQ_LINK_RULES]
    .sort((a, b) => b.phrase.length - a.phrase.length)
    .map((rule) => withBoundaries(rule.phrase))
    .join("|"),
  "gi"
)

/** Service pages are the links worth having; blog, then CTA, then phone. */
function rank(href: string) {
  if (href.startsWith("/services")) return 0
  if (href.startsWith("/blog")) return 1
  if (href === "/contact") return 2
  return 3
}

export type FaqAnswerSegment = {
  text: string
  href?: string
}

export type FaqCta = {
  href: string
  label: string
}

export type LinkedFaqAnswer = {
  segments: FaqAnswerSegment[]
  /** Doc-specified destinations with no phrase to anchor to, shown after the answer. */
  ctas: FaqCta[]
}

const CTA_LABELS: Record<string, string> = {
  "/contact": "Contact us",
  "/services": "View our services",
  "/about": "About ProForce 1",
}

function ctaLabel(href: string) {
  if (CTA_LABELS[href]) return CTA_LABELS[href]
  const slug = href.split("/").pop() ?? ""
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
}

/**
 * Extra wording accepted when placing a doc-specified link inline. Broader than
 * the general rules because here we already know the destination is correct —
 * we are only choosing which words carry it.
 */
const DOC_ANCHOR_FALLBACKS: Record<string, readonly string[]> = {
  "/contact": [
    "Contact our dispatch team",
    "Contact us",
    "dispatch line",
    "dispatch team",
    "custom proposal",
    "custom quote",
    "consultation",
    "walkthrough",
    "assessment",
    "proposal",
    "quote",
  ],
  "/services": [
    "Explore our services",
    "View our services",
    "full service offerings",
    "service offerings",
    "our services",
  ],
}

type Candidate = {
  start: number
  end: number
  text: string
  href: string
  inCta: boolean
  fallback: boolean
}

function findCandidates(answer: string, currentPath?: string): Candidate[] {
  const sentences = answer.split(/(?<=\.)\s+/)
  const lastSentence = sentences[sentences.length - 1] ?? ""
  // Measured from the end so it stays exact regardless of the separator.
  const ctaStart = answer.length - lastSentence.length

  const candidates: Candidate[] = []

  MATCHER.lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = MATCHER.exec(answer)) !== null) {
    const rule = RULES_BY_PHRASE.get(match[0].toLowerCase())
    if (!rule || rule.href === currentPath) continue

    candidates.push({
      start: match.index,
      end: match.index + match[0].length,
      text: match[0],
      href: rule.href,
      inCta: match.index >= ctaStart,
      fallback: rule.fallback === true,
    })
  }

  return candidates
}

/**
 * Locates `phrase` in the answer, preferring the closing CTA sentence — that is
 * where the doc attached its links, and where a link reads as a call to action
 * rather than a mid-paragraph distraction.
 */
function findPhrase(answer: string, phrase: string, ctaStart: number) {
  const re = new RegExp(withBoundaries(phrase), "gi")
  let first: { start: number; end: number; text: string } | null = null
  let match: RegExpExecArray | null

  while ((match = re.exec(answer)) !== null) {
    const hit = { start: match.index, end: match.index + match[0].length, text: match[0] }
    if (hit.start >= ctaStart) return hit
    if (!first) first = hit
  }

  return first
}

/**
 * Builds the links the content doc specifies for this answer.
 *
 * Where the doc wrapped real words we use that anchor verbatim; where it only
 * tagged the paragraph's trailing space we pick wording for that destination
 * from the phrase rules.
 */
function docCandidates(
  question: string,
  answer: string,
  currentPath?: string
): { inline: Candidate[]; ctas: FaqCta[] } | null {
  const spec = DOC_FAQ_LINKS[question]
  if (!spec?.length) return null

  const sentences = answer.split(/(?<=\.)\s+/)
  const ctaStart = answer.length - (sentences[sentences.length - 1] ?? "").length

  const inline: Candidate[] = []
  const ctas: FaqCta[] = []

  for (const target of spec) {
    if (target.href === currentPath) continue

    const phrases = target.anchor
      ? [target.anchor]
      : [
          ...(DOC_ANCHOR_FALLBACKS[target.href] ?? []),
          ...FAQ_LINK_RULES.filter((rule) => rule.href === target.href && !rule.fallback)
            .map((rule) => rule.phrase)
            .sort((a, b) => b.length - a.length),
        ]

    let placed = false
    for (const phrase of phrases) {
      const hit = findPhrase(answer, phrase, ctaStart)
      if (!hit) continue
      // Never overlap a link already placed for this answer.
      if (inline.some((c) => hit.start < c.end && c.start < hit.end)) continue

      inline.push({
        start: hit.start,
        end: hit.end,
        text: hit.text,
        href: target.href,
        inCta: hit.start >= ctaStart,
        fallback: false,
      })
      placed = true
      break
    }

    // The doc hung this link on the paragraph's trailing space, and the copy
    // gives us nothing to wrap — surface it as a CTA after the answer instead.
    if (!placed && !ctas.some((c) => c.href === target.href)) {
      ctas.push({ href: target.href, label: ctaLabel(target.href) })
    }
  }

  return inline.length || ctas.length ? { inline, ctas } : null
}

function toSegments(answer: string, chosen: Candidate[]): FaqAnswerSegment[] {
  const segments: FaqAnswerSegment[] = []
  let cursor = 0

  for (const link of [...chosen].sort((a, b) => a.start - b.start)) {
    if (link.start > cursor) segments.push({ text: answer.slice(cursor, link.start) })
    segments.push({ text: link.text, href: link.href })
    cursor = link.end
  }

  if (cursor < answer.length) segments.push({ text: answer.slice(cursor) })

  return segments
}

/**
 * Links a whole FAQ list at once.
 *
 * `sectionUse` tracks how often each target has already been linked in this
 * section and demotes repeats, so a page whose every answer says "BSIS" spreads
 * across several destinations instead of printing the same link seven times.
 * It is a soft penalty, not an exclusion — every answer still gets a link.
 *
 * `currentPath` suppresses self-links: an FAQ on /services/bank-security should
 * not link "bank security service" back to the page you are reading.
 */
export function linkifyFaqAnswers(
  faqs: readonly { question: string; answer: string }[],
  currentPath?: string
): LinkedFaqAnswer[] {
  const sectionUse = new Map<string, number>()

  return faqs.map(({ question, answer }) => {
    // The content doc is authoritative wherever it specifies links.
    const fromDoc = docCandidates(question, answer, currentPath)
    if (fromDoc) {
      for (const link of fromDoc.inline) {
        sectionUse.set(link.href, (sectionUse.get(link.href) ?? 0) + 1)
      }
      return { segments: toSegments(answer, fromDoc.inline), ctas: fromDoc.ctas }
    }

    const candidates = findCandidates(answer, currentPath)

    const byPreference = (a: Candidate, b: Candidate) =>
      rank(a.href) - rank(b.href) ||
      (sectionUse.get(a.href) ?? 0) - (sectionUse.get(b.href) ?? 0) ||
      Number(b.inCta) - Number(a.inCta) ||
      a.start - b.start

    const chosen: Candidate[] = []
    const usedHrefs = new Set<string>()

    const take = (pool: Candidate[], limit: number) => {
      for (const candidate of [...pool].sort(byPreference)) {
        if (chosen.length >= limit) break
        if (usedHrefs.has(candidate.href)) continue
        // Never let a link overlap one already chosen.
        if (chosen.some((c) => candidate.start < c.end && c.start < candidate.end)) continue

        usedHrefs.add(candidate.href)
        chosen.push(candidate)
      }
    }

    take(
      candidates.filter((c) => !c.fallback),
      MAX_LINKS_PER_ANSWER
    )

    // Only reach for "ProForce 1" / "security guards" if nothing better matched.
    if (chosen.length === 0) {
      take(
        candidates.filter((c) => c.fallback),
        1
      )
    }

    for (const link of chosen) sectionUse.set(link.href, (sectionUse.get(link.href) ?? 0) + 1)

    return { segments: toSegments(answer, chosen), ctas: [] }
  })
}

/** Single-answer convenience wrapper around {@link linkifyFaqAnswers}. */
export function linkifyFaqAnswer(
  faq: { question: string; answer: string },
  currentPath?: string
): LinkedFaqAnswer {
  return linkifyFaqAnswers([faq], currentPath)[0]
}
