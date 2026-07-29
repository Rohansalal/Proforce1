/**
 * Per-answer internal links transcribed from the client's FAQ content doc.
 *
 * The doc attached each link to the paragraph's trailing space
 * (`<a href="..."> </a>`), so the targets were never visible as anchor text
 * and none of them survived into the site. This map is the doc's intent made
 * explicit: it is authoritative for the answers it covers, and answers absent
 * here fall back to the phrase rules in `lib/faq-links.ts`.
 *
 * `anchor` is set only where the doc wrapped real words; otherwise the phrase
 * rules pick the wording for that destination.
 *
 * Generated from the source doc — 39 answers, 40 links.
 */

export type DocFaqLink = {
  href: string
  anchor?: string
}

export const DOC_FAQ_LINKS: Record<string, readonly DocFaqLink[]> = {
  // homepage
  "How fast can ProForce 1 deploy security guards to a business?": [{ href: "/contact" }],
  // homepage
  "What is the difference between armed and unarmed security guards?": [{ href: "/services/armed-security", anchor: "armed security" }, { href: "/services/unarmed-security", anchor: "unarmed security" }],
  // homepage
  "What training do ProForce 1 security officers receive?": [{ href: "/services", anchor: "View our services" }],
  // homepage
  "Does ProForce 1 provide customized security plans instead of standard packages?": [{ href: "/contact", anchor: "Contact us" }],
  // armed-security
  "What is a protective security officer and how is it different from a regular guard?": [{ href: "/services" }],
  // armed-security
  "How much does armed security cost in California?": [{ href: "/contact" }],
  // armed-security
  "What industries typically need an armed security officer?": [{ href: "/services", anchor: "service offerings" }],
  // armed-security
  "How fast can ProForce 1 deploy an armed security guard to my business?": [{ href: "/contact", anchor: "Contact our dispatch team" }],
  // unarmed-security
  "Are ProForce 1's unarmed security guards BSIS licensed?": [{ href: "/contact" }],
  // unarmed-security
  "Is 24 hour unarmed security guard coverage available in California?": [{ href: "/contact" }],
  // unarmed-security
  "How much do residential security guards cost in California?": [{ href: "/contact" }],
  // unarmed-security
  "Why do businesses choose unarmed security over armed guards?": [{ href: "/services", anchor: "Explore our services" }],
  // unarmed-security
  "How quickly can ProForce 1 deploy unarmed security guards?": [{ href: "/contact" }],
  // unarmed-security
  "What training do BSIS licensed unarmed security guards receive?": [{ href: "/contact", anchor: "Contact us" }],
  // construction-security
  "What does construction site security include?": [{ href: "/services" }],
  // construction-security
  "How does construction security monitoring prevent equipment and copper theft?": [{ href: "/contact" }],
  // construction-security
  "How much does construction site security cost in California?": [{ href: "/contact", anchor: "Contact us" }],
  // construction-security
  "Why do construction sites face higher security risks than other properties?": [{ href: "/services" }],
  // construction-security
  "How fast can ProForce 1 respond to an incident at a construction site?": [{ href: "/contact" }],
  // construction-security
  "What is included in construction security monitoring reports?": [{ href: "/contact" }],
  // event-security
  "What do wedding security guards actually do at a private event?": [{ href: "/contact" }],
  // event-security
  "How much do private party security guards cost in California?": [{ href: "/contact" }],
  // event-security
  "Is corporate event security in California different from standard event guarding?": [{ href: "/services" }],
  // event-security
  "What is included in VIP protection for events?": [{ href: "/contact" }],
  // event-security
  "Why do event organizers need professional security instead of relying on venue staff?": [{ href: "/services" }],
  // event-security
  "How fast can ProForce 1 respond to an incident during an event?": [{ href: "/contact" }],
  // fire-watch-security
  "What are fire watch services in California and when are they required?": [{ href: "/contact" }],
  // fire-watch-security
  "Is emergency fire watch same day service available in Anaheim?": [{ href: "/contact", anchor: "Contact us" }],
  // fire-watch-security
  "How much does fire watch security cost in California?": [{ href: "/contact" }],
  // fire-watch-security
  "Why do fire alarm or sprinkler outages require a fire watch officer instead of just staff supervision?": [{ href: "/services", anchor: "Explore our services" }],
  // fire-watch-security
  "What documentation does fire watch security Anaheim providers give to fire marshals?": [{ href: "/contact" }],
  // fire-watch-security
  "What industries commonly need fire watch security coverage?": [{ href: "/contact" }],
  // hospital-security
  "Are ProForce 1's hospital security guards HIPAA compliant?": [{ href: "/contact" }],
  // hospital-security
  "What compliance documentation do hospital security guards provide for Joint Commission audits?": [{ href: "/contact" }],
  // mobile-patrol-security
  "Why do shopping centers and apartment communities choose mobile patrol over stationed guards?": [{ href: "/services" }],
  // mobile-patrol-security
  "What is included in a mobile patrol digital reporting system?": [{ href: "/contact", anchor: "Contact us" }],
  // mobile-patrol-security
  "Can mobile patrol services handle lock-up and unlock duties for businesses?": [{ href: "/contact" }],
  // executive-protection
  "How does an executive protection officer differ from a standard bodyguard?": [{ href: "/services/unarmed-security", anchor: "unarmed security guard" }],
  // executive-protection
  "Why do public figures choose armed executive protection over general security officers?": [{ href: "/services/armed-security", anchor: "armed security officer" }],
}
