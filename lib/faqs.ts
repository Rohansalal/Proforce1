export type FaqItem = Readonly<{
  question: string
  answer: string
}>

export const homepageFaqs = [
  {
    question: "What security services does ProForce 1 offer in California?",
    answer: "ProForce 1 offers armed and unarmed security guards, mobile patrol, event security, construction site security, fire watch, executive protection, and specialized coverage for hospitals, schools, and financial institutions. Every service is backed by BSIS-licensed officers and 24/7 dispatch support across California.",
  },
  {
    question: "Are ProForce 1's security guards licensed and insured?",
    answer: "Yes, all ProForce 1 security personnel are fully licensed under state PPO, bonded, and comprehensively insured beyond industry standards. This applies across every service line.",
  },
  {
    question: "How much does hiring a security guard company cost in California?",
    answer: "Security guard costs in California vary based on service type, coverage hours, and whether you need armed, unarmed, or specialized protection like executive or event security. Pricing is built around a custom threat assessment rather than a flat rate, since risk level differs significantly by industry and property type.",
  },
  {
    question: "How fast can ProForce 1 deploy security guards to a business?",
    answer: "ProForce 1 can typically deploy fully equipped officers to a site within hours, supported by 24/7 operations and localized dispatch teams across California. Faster emergency deployment is available for urgent situations like fire watch outages or active security incidents. Reach out to our dispatch line at (800) 779-7691 for time-sensitive placements.",
  },
  {
    question: "What is the difference between armed and unarmed security guards?",
    answer: "Armed security guards carry a firearm and hold additional BSIS firearm certification, typically used for high-risk environments like banks, jewelry stores, and executive protection. Unarmed guards focus on access control, patrols, and de-escalation for lower-risk settings like offices, retail, and residential communities. Compare armed security and unarmed security options to determine the right fit for your property.",
  },
  {
    question: "What training do ProForce 1 security officers receive?",
    answer: "ProForce 1 officers complete a rigorous training program beyond standard state licensing, covering conflict resolution, advanced first aid (CPR/AED), and tactical defensive driving. Specialized roles, such as executive protection or hospital security, receive additional industry-specific certification. View our services to see training requirements by service type.",
  },
  {
    question: "Does ProForce 1 provide customized security plans instead of standard packages?",
    answer: "Yes, ProForce 1 builds every security plan around a full threat assessment of the specific site rather than offering one-size-fits-all packages. This includes evaluating post orders, technology integration needs, and emergency response protocols unique to each property. Contact us to schedule a needs assessment for your business.",
  },
  {
    question: "What areas of California does ProForce 1 serve?",
    answer: "ProForce 1 serves businesses and properties across California, with its main office based in Anaheim and coverage extending throughout Orange County and the surrounding region. Services range from single-site guard placement to multi-location contracts for retail chains, healthcare systems, and corporate campuses.",
  },
] as const satisfies readonly FaqItem[]

export const serviceFaqs = {
  "armed-security": [
    {
      question: "What is a protective security officer and how is it different from a regular guard?",
      answer: "A protective security officer is a trained professional who provides proactive threat deterrence, risk monitoring, and rapid response for high-value properties, not just basic site observation. ProForce 1's protective security officers hold California BSIS certification and receive ongoing training in de-escalation, situational awareness, and crisis management.",
    },
    {
      question: "How much does armed security cost in California?",
      answer: "Armed security in California typically costs more than unarmed guard services because officers require BSIS firearm certification, live-fire training, and higher insurance coverage. Exact pricing depends on your location, coverage hours, and risk level, whether it's a jewelry store, bank, or corporate office.",
    },
    {
      question: "Is an armed security guard legally required to be licensed in California?",
      answer: "Yes, every armed security guard in California must hold a valid BSIS (Bureau of Security and Investigative Services) license and firearm permit before carrying a weapon on duty. ProForce 1 maintains 100% licensed officers, all certified through California's BSIS Firearm Certification program with ongoing recertification.",
    },
    {
      question: "What industries typically need an armed security officer?",
      answer: "Businesses with high-value assets or elevated risk exposure, such as jewelry stores, banks, cannabis dispensaries, hotels, and construction sites, typically need an armed security officer. These environments benefit from visible deterrence and rapid threat response that unarmed staff cannot provide. See our full service offerings to match the right officer type to your industry.",
    },
    {
      question: "How fast can ProForce 1 deploy an armed security guard to my business?",
      answer: "ProForce 1 maintains a response time of under 5 minutes for active dispatch requests across California. This is supported by a 24/7 dispatch center and a network of licensed armed officers ready for immediate deployment. Contact our dispatch team directly at (800) 779-7691 for urgent placement.",
    },
    {
      question: "Why should I hire a private security officer instead of relying on cameras or alarms alone?",
      answer: "A private security officer provides an active, on-site deterrent and immediate physical response that cameras and alarms cannot replicate on their own. Technology alone can record an incident, but it cannot intervene, de-escalate, or protect people in real time. ProForce 1 pairs trained officers with real-time GPS tracking and digital reporting for full accountability.",
    },
    {
      question: "What training does an armed security guard complete before working in California?",
      answer: "An armed security guard in California must complete BSIS firearm certification, live-fire qualification, and state-mandated coursework before carrying a weapon on duty. ProForce 1 officers go further, with additional training in de-escalation, emergency response, and advanced situational awareness.",
    },
  ],
  "unarmed-security": [
    {
      question: "What do unarmed security guard services include?",
      answer: "Unarmed security guard services include access control, foot and vehicle patrols, loss prevention, visitor management, and emergency response, all without a firearm-present environment. ProForce 1's unarmed officers are trained in de-escalation and situational awareness, making them well-suited for customer-facing settings like retail, offices, and residential communities.",
    },
    {
      question: "Are ProForce 1's unarmed security guards BSIS licensed?",
      answer: "Yes, all ProForce 1 unarmed security guards are BSIS licensed, meeting California's state requirements for professional security personnel. This licensing covers background checks, training standards, and ongoing certification under the Bureau of Security and Investigative Services.",
    },
    {
      question: "Is 24 hour unarmed security guard coverage available in California?",
      answer: "Yes, ProForce 1 provides 24 hour unarmed security guard coverage across California, including nights, weekends, and holidays. Coverage can be scheduled as continuous shifts or rotated based on your property's risk profile and foot traffic patterns.",
    },
    {
      question: "How much do residential security guards cost in California?",
      answer: "Residential security guard costs in California vary based on coverage hours, patrol frequency, and whether you need a stationed guard or mobile patrol rounds. Apartment complexes and gated communities typically choose between full-time posts and scheduled patrol visits depending on budget and risk level.",
    },
    {
      question: "Why do businesses choose unarmed security over armed guards?",
      answer: "Businesses choose unarmed security when they want a strong deterrent presence without the intimidation factor that comes with firearms. This approach works well in customer-facing environments like retail stores, offices, and hospitality venues where a welcoming atmosphere matters as much as safety. Explore our services to see which guard type fits your property.",
    },
    {
      question: "How quickly can ProForce 1 deploy unarmed security guards?",
      answer: "ProForce 1 maintains a response time of under 5 minutes for active dispatch requests throughout California. This is backed by 24/7 support and a dispatch team ready to place licensed officers on short notice. Reach out to our dispatch line at (800) 779-7691 for urgent placement.",
    },
    {
      question: "What training do BSIS licensed unarmed security guards receive?",
      answer: "BSIS licensed unarmed security guards complete state-mandated coursework covering access control, emergency response, and legal powers of a security officer. ProForce 1 officers also receive additional training in conflict de-escalation, loss prevention, and use of real-time digital reporting tools like GPS-tracked patrol logs. Contact us to review training documentation for your assigned officers.",
    },
  ],
  "construction-security": [
    {
      question: "What does construction site security include?",
      answer: "Construction site security includes 24/7 on-site guards, mobile patrol rounds, access control at gates, and equipment protection for tools, materials, and heavy machinery. ProForce 1 combines these with GPS-tracked digital reporting so project managers can see patrol activity and incidents in real time.",
    },
    {
      question: "How does construction security monitoring prevent equipment and copper theft?",
      answer: "Construction security monitoring prevents equipment and copper theft through randomized mobile patrols, storage container checks, and continuous access control that limits who enters the site. Copper wiring, lumber, and heavy machinery are common theft targets, especially during inactive build phases when sites sit unattended.",
    },
    {
      question: "Is construction site night security necessary during inactive build phases?",
      answer: "Yes, construction site night security is necessary because most theft and vandalism on job sites occurs after dark and on weekends when crews are off-site. Unattended equipment, open trailers, and unsecured perimeters create high-risk windows that daytime supervision doesn't cover.",
    },
    {
      question: "How much does construction site security cost in California?",
      answer: "Construction site security costs in California vary based on coverage type, whether it's a stationed 24/7 guard, mobile patrol rounds, or weekend-only protection, and the size and risk level of the project. Larger sites with high-value equipment or copper materials typically require more frequent patrols or continuous on-site presence. Contact us for a custom proposal based on your project timeline.",
    },
    {
      question: "Why do construction sites face higher security risks than other properties?",
      answer: "Construction sites face higher security risks because they combine open, unsecured perimeters with high-value tools, machinery, and materials that are easy to move and resell. Added risks include trespassing, homeless encampments, vandalism, and liability exposure from unauthorized access after hours.",
    },
    {
      question: "How fast can ProForce 1 respond to an incident at a construction site?",
      answer: "ProForce 1 maintains a response time of under 15 minutes for incidents reported at construction sites across California. This is supported by mobile patrol units, GPS-tracked officer locations, and a 24/7 project support line.",
    },
    {
      question: "What is included in construction security monitoring reports?",
      answer: "Construction security monitoring reports include GPS-tracked patrol logs, time-stamped photos from each patrol, detailed incident documentation, and hazard or safety violation observations. Reports are delivered daily to your email and accessible through a project manager portal for full transparency.",
    },
  ],
  "event-security": [
    {
      question: "What do wedding security guards actually do at a private event?",
      answer: "Wedding security guards manage guest access, monitor unauthorized entry, and provide a discreet presence that keeps the celebration safe without disrupting the atmosphere. ProForce 1's officers also handle vendor and staff access control, parking oversight, and emergency response if a situation arises.",
    },
    {
      question: "How much do private party security guards cost in California?",
      answer: "Private party security guard costs in California depend on guest count, event duration, and whether you need armed, unarmed, or VIP-level protection. Smaller gatherings typically require fewer officers than large receptions or multi-day celebrations.",
    },
    {
      question: "Is corporate event security in California different from standard event guarding?",
      answer: "Yes, corporate event security in California typically includes additional layers like credential verification, executive arrival protection, and coordinated access control for conferences, award ceremonies, and networking events. ProForce 1 has secured conferences with 500+ attendees, using real-time GPS tracking and an event manager portal for full transparency.",
    },
    {
      question: "What is included in VIP protection for events?",
      answer: "VIP protection for events includes discreet close protection during arrival and departure, confidential movement coordination, and a security presence designed to avoid drawing attention. This service is used for celebrities, executives, and high-profile guests who need protection without disrupting the guest experience.",
    },
    {
      question: "Why do event organizers need professional security instead of relying on venue staff?",
      answer: "Event organizers need professional security because venue staff are not trained in crowd management, threat de-escalation, or emergency response the way licensed security officers are. Trained officers handle overcrowding prevention, medical incident response, and unauthorized access intervention as part of a coordinated safety plan.",
    },
    {
      question: "How fast can ProForce 1 respond to an incident during an event?",
      answer: "ProForce 1 maintains a response time of under 2 minutes for incidents occurring during an active event. This rapid response is supported by on-site officers, real-time GPS tracking, and a dedicated event manager portal for live status updates.",
    },
    {
      question: "What types of events does ProForce 1 provide security for in California?",
      answer: "ProForce 1 provides security for weddings, private parties, corporate conferences, festivals, concerts, trade shows, and VIP functions across California. Each event type receives a customized plan covering access control, crowd management, and emergency response based on guest count and risk level.",
    },
  ],
  "fire-watch-security": [
    {
      question: "What are fire watch services in California and when are they required?",
      answer: "Fire watch services in California are on-site monitoring provided when fire alarms, sprinklers, or other fire protection systems are down or compromised. They're also required during hot-work activities, construction that disables fire systems, or when a fire marshal mandates coverage as a condition of occupancy.",
    },
    {
      question: "How often do fire watch security guards patrol a property?",
      answer: "Fire watch security guards patrol a property every 15 minutes, checking for smoke, heat, sparks, and other early warning signs of fire. Each patrol is logged with time-stamped entries to meet California Fire Marshal documentation standards.",
    },
    {
      question: "Is emergency fire watch same day service available in Anaheim?",
      answer: "Yes, emergency fire watch same day service is available in Anaheim and across California, with 24/7 dispatch for urgent coverage needs. ProForce 1 has deployed fire watch officers within 2 hours of a system failure to keep properties compliant during active fire marshal inspections. Contact us at (800) 779-7691 for immediate placement.",
    },
    {
      question: "How much does fire watch security cost in California?",
      answer: "Fire watch security costs in California depend on coverage duration, patrol frequency, and whether the watch is for a system outage, construction hot-work, or an ongoing compliance requirement. Short-term emergency coverage is typically priced differently than scheduled multi-day watch assignments.",
    },
    {
      question: "Why do fire alarm or sprinkler outages require a fire watch officer instead of just staff supervision?",
      answer: "Fire alarm or sprinkler outages require a trained fire watch officer because regular staff aren't certified to detect early fire hazards, maintain compliant documentation, or respond correctly to an active emergency. A licensed officer provides continuous patrols, hazard logs, and immediate 911 notification if smoke or fire is detected. Explore our services to see the full scope of fire watch protection.",
    },
    {
      question: "What documentation does fire watch security Anaheim providers give to fire marshals?",
      answer: "Fire watch security providers in Anaheim supply time-stamped patrol logs, hazard detection records, and action-taken documentation formatted to meet fire marshal inspection standards. ProForce 1's reports also include GPS-tracked patrol data and photos of any hazards found during rounds.",
    },
    {
      question: "What industries commonly need fire watch security coverage?",
      answer: "Industries that commonly need fire watch security coverage include commercial buildings, hotels, construction sites, hospitals, and apartment complexes, especially during system outages or renovation work. Any property with an active fire code violation or disabled suppression system typically falls under this requirement.",
    },
  ],
  "hospital-security": [
    {
      question: "What do hospital security guards in California actually handle on-site?",
      answer: "Hospital security guards in California handle emergency department protection, patient wander prevention, workplace violence response, and access control for restricted areas like narcotics storage. ProForce 1's officers are also trained in de-escalation and crisis intervention specific to healthcare settings.",
    },
    {
      question: "What is behavioral health security and why does it require specialized training?",
      answer: "Behavioral health security involves protecting psychiatric and crisis units where standard security tactics can escalate rather than resolve a situation. Officers assigned to these units receive training in therapeutic communication, suicide and self-harm prevention, and code response support, going beyond general security protocols.",
    },
    {
      question: "How does workplace violence prevention healthcare security work in hospitals?",
      answer: "Workplace violence prevention in healthcare security combines staff assault response protocols, agitated visitor de-escalation, and documented incident tracking to reduce risk to medical personnel. ProForce 1's programs align with Joint Commission standards and include monthly security assessment reporting for hospital administrators.",
    },
    {
      question: "Are ProForce 1's hospital security guards HIPAA compliant?",
      answer: "ProForce 1's hospital security guards operate under HIPAA-aware protocols, meaning officers are trained to protect patient privacy during access control, incident response, and visitor management. This includes restricting information exposure during behavioral health calls and narcotics area monitoring.",
    },
    {
      question: "Why do emergency rooms need dedicated security officers instead of general facility guards?",
      answer: "Emergency rooms need dedicated security officers because ED environments involve higher rates of violent incidents, weapon screening needs, and rapid-response demands that general facility guards aren't trained to handle. ProForce 1 maintains an emergency response time under 60 seconds specifically for these high-acuity settings.",
    },
    {
      question: "How much does hospital security cost in California?",
      answer: "Hospital security costs in California vary based on facility size, unit type (general, ED, or behavioral health), and required coverage hours. Specialized units like behavioral health or narcotics storage typically require additional training tiers that affect pricing.",
    },
    {
      question: "What compliance documentation do hospital security guards provide for Joint Commission audits?",
      answer: "Hospital security guards provide incident reports, patient wander and elopement documentation, and restraint or seclusion reporting formatted to meet Joint Commission accreditation standards. ProForce 1 also delivers monthly security assessment reports so administrators can track workplace violence trends over time.",
    },
  ],
  "mobile-patrol-security": [
    {
      question: "What do mobile patrol services in California actually include?",
      answer: "Mobile patrol services in California include randomized vehicle patrols, on-foot property inspections, lock-up and unlock services, and 24/7 alarm response. ProForce 1 pairs each patrol with GPS-tracked digital reporting so property owners get time-stamped visit records.",
    },
    {
      question: "How much do mobile patrol security services cost in California?",
      answer: "Mobile patrol security service costs in California depend on patrol frequency, property size, and whether you need nightly checks, hourly rounds, or a fully customized schedule. This model is typically more cost-effective than a full-time on-site guard, making it common for properties without 24/7 staffing needs.",
    },
    {
      question: "Is mobile patrol security effective for deterring crime compared to on-site guards?",
      answer: "Yes, mobile patrol security is effective at deterring crime because randomized, unpredictable patrol timing makes it harder for criminals to anticipate when a property is unmonitored. Marked patrol vehicles combined with on-foot inspections of perimeters, parking areas, and dark zones create consistent visible deterrence.",
    },
    {
      question: "How fast do mobile patrol units respond to an alarm activation?",
      answer: "Mobile patrol units respond to alarm activations in under 15 minutes across ProForce 1's California service area. Response includes a full property investigation, incident documentation, and digital reporting delivered to the property owner.",
    },
    {
      question: "Why do shopping centers and apartment communities choose mobile patrol over stationed guards?",
      answer: "Shopping centers and apartment communities choose mobile patrol because it covers larger properties at multiple points throughout the day without the cost of a continuously stationed officer. This works well for common areas, parking structures, and perimeter zones where full-time presence isn't required but visibility still matters.",
    },
    {
      question: "What is included in a mobile patrol digital reporting system?",
      answer: "A mobile patrol digital reporting system includes GPS-tracked patrol logs, time-stamped photos and videos, incident documentation, and daily reports delivered each morning. ProForce 1's platform gives property managers full transparency into every patrol conducted on their site. Contact us to request a sample report before signing up.",
    },
    {
      question: "Can mobile patrol services handle lock-up and unlock duties for businesses?",
      answer: "Yes, mobile patrol services can handle lock-up and unlock duties, including gate and access point security, office or store closing procedures, and secure opening for business hours. This is commonly bundled with routine patrol checks for commercial properties needing consistent opening and closing coverage.",
    },
  ],
  "high-rise-building-security": [
    {
      question: "What does high-rise building security in California typically include?",
      answer: "High-rise building security in California includes perimeter defense, strict access control, tactical officer presence, and 24/7 control center monitoring for facilities like corporate towers, government buildings, and critical infrastructure sites. This coverage integrates CCTV, biometric access monitoring, and rapid lockdown protocols to protect against unauthorized entry and elevated threat scenarios. ProForce 1 has secured 50+ high-risk sites across California with a crisis response time under 1 minute.",
    },
    {
      question: "How are high-risk building security officers different from standard security guards?",
      answer: "High-risk building security officers differ from standard guards by having military or law enforcement backgrounds, tactical firearms training, and mastery in conflict de-escalation and crisis intervention. These officers operate under a strict command structure and are trained specifically for hostile engagements, active shooter response, and building lockdown execution. This level of training is typically reserved for government buildings, data centers, and corporate headquarters facing elevated threat levels.",
    },
    {
      question: "Why do critical infrastructure facilities need specialized security instead of general guarding?",
      answer: "Critical infrastructure facilities need specialized security because they face targeted risks like espionage, sabotage, civil unrest, and coordinated attacks that standard security measures aren't designed to counter. Facilities such as data centers, research labs, and embassies require hardened perimeters, counter-surveillance detection, and integrated threat intelligence to prevent breaches before they escalate. ProForce 1 maintains 100% vetted staff with rigorous background checks and psychological screening for these environments.",
    },
    {
      question: "Is 24/7 monitoring included in high-rise and high-risk building security coverage?",
      answer: "Yes, 24/7 monitoring is included and covers CCTV oversight, alarm verification, real-time threat intelligence, and continuous communications through a central control center. This constant overwatch allows security teams to detect intrusion attempts, verify alarms, and coordinate rapid response before an incident escalates. ProForce 1's operations center provides continuous intel monitoring alongside AI-powered video analytics for facilities requiring round-the-clock protection.",
    },
    {
      question: "What emergency response protocols are in place for high-risk building security incidents?",
      answer: "Emergency response protocols for high-risk building security include active shooter response plans, building lockdown execution, mass evacuation management, and direct law enforcement liaison during a crisis. Teams are drilled on emergency scenarios to maintain calm, effective leadership under pressure, with medical emergency triage included as part of the response plan. ProForce 1 delivers crisis response in under 1 minute for facilities requiring this level of readiness.",
    },
  ],
  "loss-prevention-security": [
    {
      question: "What do loss prevention officers in California actually do?",
      answer: "Loss prevention officers in California identify theft vulnerabilities, conduct visible deterrence and discreet plainclothes surveillance, and apprehend shoplifters using legally compliant procedures. ProForce 1's LP officers are certified specialists who also handle documentation and civil demand recovery to help retailers recoup losses. Businesses seeking a full loss prevention plan can request a coverage assessment for their store type.",
    },
    {
      question: "How much shrinkage reduction can retail loss prevention security actually deliver?",
      answer: "Retail loss prevention security can deliver an average shrinkage reduction of 30%+ when officers combine physical deterrence with data-driven theft pattern analysis. Results vary by industry and store type, but professional LP services typically provide a 3:1 return on investment through reduced theft and recovered losses. Retailers can request a shrinkage analysis to estimate potential savings for their specific location.",
    },
    {
      question: "Is plainclothes loss prevention more effective than uniformed security for stopping shoplifting?",
      answer: "Plainclothes loss prevention is more effective for identifying discreet theft and organized retail crime because officers blend in with shoppers to observe behavior without tipping off offenders. Uniformed officers, by contrast, provide visible deterrence that discourages opportunistic theft before it starts. Most retailers benefit from a combined approach, using both officer types depending on store layout and theft risk.",
    },
    {
      question: "Why do warehouses and distribution centers need loss prevention security?",
      answer: "Warehouses and distribution centers need loss prevention security because they face risks like vendor theft, receiving and shipping discrepancies, and employee theft that standard retail-focused guarding doesn't address. These facilities require inventory control audits, receiving checks, and high-risk merchandise protection tailored to bulk storage environments. Facility managers can request a shrinkage analysis specific to warehouse and distribution operations.",
    },
    {
      question: "How do loss prevention officers handle employee theft investigations legally?",
      answer: "Loss prevention officers handle employee theft investigations through internal investigation protocols, point-of-sale exception monitoring, and cash handling audits, all conducted within legal compliance guidelines. This approach also includes whistleblower protection programs designed to maintain employee trust while identifying internal theft patterns. Businesses concerned about internal shrinkage can request a program tailored to employee theft prevention.",
    },
  ],
  "executive-protection": [
    {
      question: "What does executive protection security actually include?",
      answer: "Executive protection security includes close personal protection, secure transportation, residential security, and advance threat intelligence coordinated by former military and law enforcement agents. ProForce 1's coverage extends to travel logistics, counter-surveillance, and medical support, giving high-profile clients continuous protection with minimal lifestyle disruption. Clients can request a private consultation to scope coverage for their specific risk profile.",
    },
    {
      question: "How does an executive protection officer differ from a standard bodyguard?",
      answer: "An executive protection officer differs from a standard bodyguard through advanced training in threat assessment, defensive driving, medical emergency response, and crisis extraction protocols. ProForce 1's officers hold military, law enforcement, or special operations backgrounds and are certified in TCCC, CPR, and First Aid for high-pressure scenarios. Clients seeking a lower-profile presence for general property protection can also consider an unarmed security guard for less complex situations.",
    },
    {
      question: "Is armed executive protection necessary for high-net-worth individuals?",
      answer: "Armed executive protection is necessary when a client's threat assessment identifies elevated risks such as kidnap and ransom exposure, stalking, or targeted attacks. ProForce 1 evaluates each client's public profile, travel patterns, and known threats before recommending armed versus unarmed coverage. A vulnerability assessment through a private consultation determines the appropriate protection level for each situation.",
    },
    {
      question: "Why do corporate executives need close protection during business travel?",
      answer: "Corporate executives need close protection during business travel because transportation and public appearances represent the highest-risk moments for exposure to targeted threats or corporate espionage. ProForce 1 secures every leg of travel with route diversification, armored vehicle coordination, and airport tarmac access logistics. Executives with recurring travel schedules can request ongoing coverage through a private consultation.",
    },
    {
      question: "What is included in advance work for executive protection details?",
      answer: "Advance work for executive protection details includes route surveys, venue security assessments, medical facility mapping, and real-time threat tracking completed before the client arrives. ProForce 1's operations center handles all logistics and encrypted communications so a principal's schedule proceeds without interruption. This planning phase is typically scoped as part of a full protection detail request.",
    },
    {
      question: "How quickly can ProForce 1 deploy an executive protection team?",
      answer: "ProForce 1 can deploy executive protection teams on short notice for urgent or unplanned security needs, with teams available for immediate assignments. This rapid deployment capability supports last-minute travel, sudden threat escalations, or unplanned public appearances. Clients needing immediate coverage should contact the 24/7 EP operations line directly.",
    },
    {
      question: "Why do public figures choose armed executive protection over general security officers?",
      answer: "Public figures choose armed executive protection over general security officers because celebrity and high-profile status carries elevated risks like stalking, harassment, and targeted attacks that standard guarding doesn't address. These details require close protection agents trained in crisis response and active threat neutralization rather than a general armed security officer posted at a fixed location. Public figures can request a threat assessment to determine the right protection tier for their exposure level.",
    },
  ],
  "school-campus-security": [
    {
      question: "What do school and campus security guards in California actually do?",
      answer: "School and campus security guards in California manage entry control, visitor screening, student wellness checks, and emergency response coordination for K-12 schools, private institutions, and college campuses. ProForce 1's officers are trained to balance safety protocols with positive student interactions, protecting over 150 schools across the state. Districts can request a security consultation to scope coverage for their campus type.",
    },
    {
      question: "How are school security officers trained differently from general security guards?",
      answer: "School security officers are trained differently through youth-focused programs covering conflict de-escalation, bullying prevention, and positive behavior support strategies, alongside standard security protocols. ProForce 1 officers also complete school-specific emergency training, including active shooter response and lockdown procedures developed in coordination with school administrators. Schools can request documentation of officer certifications before finalizing a security proposal.",
    },
    {
      question: "Is armed or unarmed security more common for K-12 campus protection in California?",
      answer: "Unarmed security is more common for day-to-day K-12 campus protection in California, focusing on access control, visitor management, and behavioral intervention rather than weapon-based deterrence. Coverage decisions depend on district policy, campus size, and specific risk assessments conducted for each school. Districts can request a proposal outlining the appropriate coverage level for their campus.",
    },
    {
      question: "Why do schools need dedicated emergency response protocols instead of relying on general staff training?",
      answer: "Schools need dedicated emergency response protocols because incidents like lockdowns, active threats, and medical emergencies require officers trained specifically in school-based crisis coordination with first responders. ProForce 1 officers are certified in active shooter response, evacuation planning, and shelter-in-place procedures tailored to educational facilities. Administrators can request an emergency response assessment as part of a full security proposal.",
    },
    {
      question: "What is included in school event and extracurricular security coverage?",
      answer: "School event and extracurricular security coverage includes crowd management for athletic events, dance and social event protection, field trip coordination, and graduation ceremony security. These assignments require specialized crowd control training distinct from daily campus patrol duties. Schools planning large gatherings can request event-specific staffing through a security consultation.",
    },
  ],
  "bank-security": [
    {
      question: "Do banks in California legally need armed security guards?",
      answer: "California does not universally mandate armed guards at every bank, but most branches, credit unions, and cash-handling institutions use them to meet insurer requirements and deter robbery. ProForce 1 provides both armed and unarmed BSIS-licensed bank officers and can help you determine the right coverage level based on branch location, foot traffic, and cash exposure. Request a branch security assessment to scope the appropriate officer type.",
    },
    {
      question: "What do bank security guards actually do beyond standing at the door?",
      answer: "Bank security guards manage lobby access, monitor for suspicious activity, screen visitors, respond to alarms, and provide a visible deterrent against robbery and fraud. ProForce 1 officers are also trained in formal cash-handling escort, opening and closing procedures, and coordinating with local law enforcement during incidents. See our bank security service to review the full scope of branch protection.",
    },
    {
      question: "How much does bank security cost in California?",
      answer: "Bank security costs in California depend on whether officers are armed, the number of coverage hours, and the branch's risk profile, so pricing is built around a site-specific assessment rather than a flat rate. Armed coverage carries higher rates than unarmed because of firearm certification and insurance requirements. Contact us for a custom quote based on your branch network and coverage needs.",
    },
    {
      question: "Can ProForce 1 secure ATMs and cash transports, not just branch lobbies?",
      answer: "Yes, ProForce 1 protects ATMs, night-deposit areas, vault rooms, and cash-in-transit escorts in addition to branch lobbies. Officers are trained to maintain visible deterrence at exposed ATM locations and to follow strict protocols during cash movements. Request a proposal covering your full footprint of branches, ATMs, and transport points.",
    },
    {
      question: "Are ProForce 1's bank security guards licensed and insured?",
      answer: "Yes, every ProForce 1 bank security officer is licensed under California BSIS, bonded, and comprehensively insured, with armed officers holding additional firearm certification. This ensures your institution meets both regulatory and insurer expectations for guarded premises. Ask for documentation of licensing and insurance before finalizing your bank security agreement.",
    },
  ],
  "financial-institutions-security": [
    {
      question: "What types of financial institutions does ProForce 1 protect?",
      answer: "ProForce 1 protects banks, credit unions, investment firms, wealth-management offices, mortgage lenders, and other financial institutions across California. Each assignment is scoped around the institution's cash exposure, client-facing risk, and compliance obligations rather than a one-size-fits-all package. Request a security consultation to match coverage to your institution type.",
    },
    {
      question: "How is financial institution security different from standard commercial security?",
      answer: "Financial institution security requires officers trained specifically in robbery deterrence, fraud awareness, confidential-information handling, and regulatory-sensitive environments, beyond general commercial guarding. ProForce 1 officers understand the discretion and client-experience standards expected in financial settings while maintaining strong physical security. See our financial institutions security service for the full scope.",
    },
    {
      question: "Do credit unions and investment firms need armed or unarmed guards?",
      answer: "The choice between armed and unarmed guards for credit unions and investment firms depends on cash exposure, location risk, and internal policy, and many institutions use a mix of both. ProForce 1 conducts a threat assessment to recommend the appropriate coverage, whether it's visible armed deterrence at a cash-heavy branch or unarmed lobby and concierge officers at a wealth-management office. Compare armed security and unarmed security options with our team.",
    },
    {
      question: "Can security officers help with regulatory and compliance requirements?",
      answer: "Yes, ProForce 1 officers support compliance by maintaining detailed incident and activity logs, following documented post orders, and coordinating with your risk and audit teams. While guards do not replace your internal compliance function, their reporting provides the documentation many insurers and regulators expect for guarded premises. Contact us to align officer post orders with your compliance requirements.",
    },
    {
      question: "How quickly can ProForce 1 deploy officers to a financial institution?",
      answer: "ProForce 1 can typically deploy trained officers to a financial institution within hours, supported by 24/7 dispatch and localized staffing across California. Faster emergency placement is available for urgent situations such as a recent incident or heightened threat. Call our dispatch line at (800) 779-7691 for time-sensitive coverage.",
    },
  ],
  "shopping-center-security": [
    {
      question: "What does shopping center security include?",
      answer: "Shopping center security includes foot and vehicle patrols, parking-lot monitoring, crowd and loitering management, tenant support, and emergency response across common areas. ProForce 1 tailors coverage to the center's size, tenant mix, and hours, from a single lifestyle plaza to a regional mall. Request a walkthrough to scope patrol routes and staffing for your property.",
    },
    {
      question: "How does security reduce theft and liability at a shopping center?",
      answer: "Security reduces theft and liability by providing visible deterrence, responding quickly to incidents, documenting hazards, and discouraging loitering and vehicle break-ins in parking areas. Consistent patrols and clear incident reporting also help limit slip-and-fall and negligent-security liability exposure for property managers. See our shopping center security service to review coverage options.",
    },
    {
      question: "Do you provide both foot patrol and vehicle patrol for large centers?",
      answer: "Yes, ProForce 1 provides both foot patrol for storefronts and common areas and marked vehicle patrol for large parking fields and perimeter coverage. Combining both ensures rapid response across sprawling centers where a single walking post cannot cover the full footprint. Request a proposal outlining the right patrol mix for your center's layout.",
    },
    {
      question: "Can guards handle parking lots and after-hours coverage?",
      answer: "Yes, ProForce 1 officers handle parking-lot patrols, lot-clearing at closing, and dedicated after-hours and overnight coverage to protect vacant common areas and tenant storefronts. Coverage can be scheduled around peak retail hours, seasonal traffic, and center closing times. Contact us to build a schedule around your center's operating hours.",
    },
    {
      question: "Are shopping center guards licensed and insured in California?",
      answer: "Yes, all ProForce 1 shopping center officers are BSIS-licensed, bonded, and fully insured, meeting the requirements property managers and their insurers expect. Documentation of licensing and coverage is available on request. Ask for certificates of insurance when finalizing your shopping center security agreement.",
    },
  ],
  "retail-centers-security": [
    {
      question: "What is retail security and how does it protect my store?",
      answer: "Retail security protects your store through visible deterrence, customer and staff safety, incident response, and shoplifting prevention on the sales floor and at exits. ProForce 1 officers can work uniformed for deterrence or in plain clothes for loss prevention, depending on your store format. Request a retail security consultation to determine the right approach for your location.",
    },
    {
      question: "How do retail security guards prevent shoplifting and shrinkage?",
      answer: "Retail security guards prevent shoplifting and shrinkage by monitoring high-theft areas, deterring organized retail crime, observing point-of-sale and fitting-room activity, and documenting incidents for prosecution. ProForce 1 also offers dedicated loss-prevention officers trained in lawful apprehension and evidence handling. See our loss prevention security service for specialized shrinkage control.",
    },
    {
      question: "Do you offer uniformed or plain-clothes (loss prevention) retail officers?",
      answer: "ProForce 1 offers both uniformed officers for visible deterrence and plain-clothes loss-prevention agents who blend in to detect theft as it happens. Many retailers use a combination, pairing a uniformed presence at entrances with covert floor coverage. Contact us to design the right uniformed and plain-clothes mix for your store.",
    },
    {
      question: "Can ProForce 1 cover multiple retail locations under one contract?",
      answer: "Yes, ProForce 1 provides multi-location retail coverage under a single contract, with consistent post orders, centralized reporting, and coordinated scheduling across all sites. This gives retail chains uniform standards and one point of accountability instead of managing separate vendors per store. Request a multi-site proposal for your retail portfolio.",
    },
    {
      question: "How much does retail security cost in California?",
      answer: "Retail security costs in California depend on store size, hours of coverage, and whether you need uniformed guards, loss-prevention agents, or both, so pricing is quoted per assessment. Peak-season, holiday, and high-shrinkage locations may require adjusted staffing. Contact us for a custom quote based on your store format and coverage hours.",
    },
  ],
  "on-site-security": [
    {
      question: "What is on-site (static) security and when do I need it?",
      answer: "On-site or static security places dedicated officers at a fixed post to control access, monitor the property, and respond immediately to incidents. It is ideal for facilities that need a constant, visible presence, such as corporate campuses, warehouses, gated entries, and construction sites. Request an assessment to see whether a static post fits your property's risk profile.",
    },
    {
      question: "How is on-site security different from mobile patrol?",
      answer: "On-site security stations officers permanently at your property for continuous coverage, while mobile patrol visits multiple sites on a rotating schedule for periodic checks. Static posts suit locations that need immediate, always-present response, whereas patrol is a cost-effective option for properties needing intermittent visibility. Compare on-site security and mobile patrol with our team to choose the right model.",
    },
    {
      question: "What types of facilities use on-site security guards?",
      answer: "Facilities that use on-site security guards include corporate offices, manufacturing plants, warehouses, data centers, gated communities, construction sites, and educational campuses. Any property with fixed access points, valuable assets, or steady foot traffic benefits from a dedicated post. See our full service offerings to match on-site coverage to your facility type.",
    },
    {
      question: "Can on-site guards manage access control and visitor screening?",
      answer: "Yes, on-site officers manage access control, visitor sign-in and screening, credential checks, and gate or lobby operations as part of their post orders. They can also integrate with your existing badge, camera, and access-control systems. Contact us to define access-control procedures tailored to your facility.",
    },
    {
      question: "Are on-site security officers available 24/7?",
      answer: "Yes, ProForce 1 provides on-site officers around the clock, including overnight, weekend, and holiday coverage, backed by 24/7 dispatch and supervision. Shifts are scheduled to give continuous protection without gaps at post changes. Request a staffing plan that covers your facility's full operating and after-hours schedule.",
    },
  ],
  "factories-storage-security": [
    {
      question: "What does factory and warehouse security involve?",
      answer: "Factory and warehouse security involves access control at gates and docks, perimeter patrols, inventory and equipment protection, visitor and contractor screening, and safety-hazard monitoring. ProForce 1 tailors coverage to industrial layouts where high-value inventory and complex operations create unique risks. Request a facility walkthrough to scope patrol routes and access points.",
    },
    {
      question: "How do security guards prevent inventory theft and shrinkage at warehouses?",
      answer: "Security guards prevent inventory theft and shrinkage by monitoring loading docks, verifying shipments against manifests, controlling employee and contractor access, and maintaining a visible deterrent across storage areas. Detailed activity logs also help identify internal-theft patterns and support investigations. See our loss prevention security service for deeper shrinkage control.",
    },
    {
      question: "Can guards manage loading docks, gates, and truck traffic?",
      answer: "Yes, ProForce 1 officers manage loading-dock activity, gate access, truck check-in, and yard traffic to keep shipping and receiving orderly and secure. Controlling these choke points reduces theft, unauthorized access, and delivery disputes. Contact us to define dock and gate procedures for your facility.",
    },
    {
      question: "Do you provide fire watch and safety compliance for industrial sites?",
      answer: "Yes, ProForce 1 provides fire watch and safety-compliance support for industrial sites, including monitoring during system outages, hot-work operations, and hazardous-material handling. Officers document rounds and coordinate with your safety team to help meet insurer and code requirements. See our fire watch security service for compliance-focused coverage.",
    },
    {
      question: "Are your industrial security officers trained for warehouse environments?",
      answer: "Yes, ProForce 1 officers assigned to factories and warehouses receive training specific to industrial environments, including dock safety, equipment awareness, access control, and emergency response around machinery. This ensures they protect assets while supporting operational efficiency and compliance. Request officer certifications as part of your industrial security proposal.",
    },
  ],
} as const satisfies Record<string, readonly FaqItem[]>

export const servicesOverviewFaqs = [
  {
    question: "How much do security guard services cost in California?",
    answer: "Security guard costs in California depend on the service type, coverage hours, and whether you need armed, unarmed, or specialized officers, so ProForce 1 quotes each contract from a site-specific assessment rather than a flat hourly rate. This ensures you pay for coverage matched to your actual risk level. Contact us for a custom quote based on your property and schedule.",
  },
  {
    question: "How quickly can ProForce 1 deploy security guards?",
    answer: "ProForce 1 can typically deploy fully equipped officers within hours, backed by 24/7 dispatch and localized staffing teams across California. Faster emergency deployment is available for urgent needs such as fire watch outages or active incidents. Call our dispatch line at (800) 779-7691 for time-sensitive placements.",
  },
  {
    question: "Are ProForce 1's security guards licensed and insured?",
    answer: "Yes, all ProForce 1 officers are licensed under California BSIS, bonded, and comprehensively insured, with armed officers holding additional firearm certification. This applies across every service line, from event security to executive protection. Ask for documentation of licensing and insurance before finalizing any agreement.",
  },
  {
    question: "What areas of California does ProForce 1 serve?",
    answer: "ProForce 1 serves businesses and properties across California, with its main office in Anaheim and coverage throughout Orange County and the surrounding region. Assignments range from single-site placements to multi-location contracts for retail, healthcare, and corporate clients. Contact us to confirm coverage for your location.",
  },
  {
    question: "Should I choose armed or unarmed security guards?",
    answer: "The choice depends on your risk level: armed guards suit high-value or higher-threat environments like banks and jewelry stores, while unarmed guards fit access control, patrols, and de-escalation at offices, retail, and residential sites. ProForce 1 conducts a threat assessment to recommend the right mix. Compare armed security and unarmed security options with our team.",
  },
  {
    question: "Is there a minimum contract, or can I hire guards for a single day or event?",
    answer: "ProForce 1 offers both ongoing contracts and short-term coverage, including single-day and event staffing for concerts, weddings, and corporate functions. Minimums depend on the service and staffing required, which we confirm during your assessment. Request a quote for either one-time or recurring coverage.",
  },
] as const satisfies readonly FaqItem[]
