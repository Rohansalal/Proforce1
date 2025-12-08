import ServiceTemplate from "@/components/site/service-template"

export default function ConstructionSecurityPage() {
  return (
    <ServiceTemplate
      title="Construction Site Security Services: Protecting Your Investment"
      intro="Construction sites face high risks of theft and vandalism. We provide a strong visible presence, rapid response, and full accountability to safeguard your project, equipment, and timeline."
      imagePath="/Services/construction-security.jpg"
      bullets={[
        "Theft & vandalism deterrence",
        "24/7 Gate monitoring & access control",
        "Tool & heavy equipment protection",
        "GPS-tracked patrol logs",
        "Fire watch & hazard detection",
        "After-hours & weekend coverage"
      ]}
    >
      <h2>Protecting Your Project, Your People, and Your Investment</h2>
      <p>
        Construction sites face some of the highest security risks of any industry — including theft, vandalism, trespassing, equipment damage, and liability exposure. At Proforce 1 Protection Services, we bring over <strong>20 years of security experience</strong> and more than a decade of trusted service across California to safeguard projects of every size.
      </p>
      <p>
        Whether you need overnight security, 24/7 coverage, or mobile patrol checks, our team is trained to protect your site from groundbreaking to completion.
      </p>
      <br />

      {/* --- ANALYSIS: THE RISK --- */}
      <h3><b>Why Construction Sites Need Professional Security</b></h3>
      <p>
        With valuable equipment and open-access areas, construction locations are high-risk targets. We actively mitigate these specific threats:
      </p>
      <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
        <li><strong>Theft Prevention:</strong> Protecting expensive tools, copper, lumber, and heavy machinery.</li>
        <li><strong>Liability Reduction:</strong> Preventing unauthorized access minimizes injury lawsuits.</li>
        <li><strong>Vandalism Control:</strong> Stopping graffiti and property damage that delays timelines.</li>
        <li><strong>Safety Hazards:</strong> Identifying fires, leaks, or homeless encampments immediately.</li>
      </ul>
      <br />

      {/* --- ANALYSIS: SERVICES --- */}
      <h3><b>Our Construction Security Services</b></h3>
      <ul>
        <li><strong>✔ Access Control & Gate Monitoring:</strong> Verifying all personnel entering/exiting to ensure only authorized workers and vendors have access.</li>
        <li><strong>✔ Tool & Equipment Protection:</strong> Focused guarding of storage containers, fuel tanks, heavy machinery, and high-value materials.</li>
        <li><strong>✔ Mobile Patrol Services:</strong> Randomized vehicle patrols with full perimeter checks to keep criminals guessing.</li>
        <li><strong>✔ Fire Watch Services:</strong> Strict protocols to meet safety requirements when sprinkler systems are not yet active.</li>
        <li><strong>✔ After-Hours Coverage:</strong> Full protection during nights and weekends when theft risk is highest.</li>
      </ul>
      <br />

      {/* --- ANALYSIS: ACCOUNTABILITY --- */}
      <h3><b>Site Transparency: Advanced Digital Reporting</b></h3>
      <p>
        Proforce 1 uses a state-of-the-art digital reporting platform, giving you **real-time visibility** of your site’s security, even when you aren't there.
      </p>
      <ul>
        <li><strong>GPS-tracked patrol logs:</strong> Proof that guards are actively walking the perimeter.</li>
        <li><strong>Time-stamped photos:</strong> Visual verification of secured gates and equipment.</li>
        <li><strong>Hazard Observations:</strong> Early reporting of safety issues or maintenance needs.</li>
        <li><strong>Daily Activity Summaries:</strong> Reports delivered directly to your email every morning.</li>
      </ul>
      <br />

      <h3><b>Industries & Projects We Cover</b></h3>
      <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
        <li>Residential Developments & High-Rise Buildings</li>
        <li>Commercial Construction & Office Parks</li>
        <li>Infrastructure & Public Works</li>
        <li>Industrial & Warehouse Construction</li>
        <li>Demolition Sites</li>
        <li>Renovation and Expansion Projects</li>
      </ul>
      <br />

      <h3><b>Why Choose Proforce 1?</b></h3>
      <ul>
        <li>⭐ <strong>Experience:</strong> 20+ years of industry security experience.</li>
        <li>⭐ <strong>Reliability:</strong> More than a decade protecting sites across California.</li>
        <li>⭐ <strong>Quality:</strong> Highly trained, licensed, uniformed officers.</li>
        <li>⭐ <strong>Communication:</strong> Strong coordination with site supervisors & PMs.</li>
        <li>⭐ <strong>Flexibility:</strong> Customized plans based on your project timeline.</li>
      </ul>

      <hr className="my-8" />

      <h3>Request a Free Project Proposal</h3>
      <p>
        Whether you need short-term coverage or a long-term security partner, we’re ready to support your project.
      </p>
      <ul>
        <li>📞 Call: 800-779-7691</li>
        <li>📧 Email: info@proforce1protection.com</li>
        <li>🌐 Website: www.proforce1protection.com</li>
      </ul>
    </ServiceTemplate>
  )
}