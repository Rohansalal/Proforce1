import ServiceTemplate from "@/components/site/service-template"

export default function FireWatchPage() {
  return (
    <ServiceTemplate
      title="Reliable, Code-Compliant Fire Watch Security Services"
      intro="When fire systems fail, our fully trained officers provide continuous monitoring, fast reporting, and immediate emergency response to ensure 24/7 safety and compliance with Fire Marshal standards."
      imagePath="/Services/fire-watch.jpg"
      bullets={[
        "Code-compliant fire watch logs",
        "Immediate emergency response",
        "24/7 Short-notice deployment",
        "Construction & Hot-work monitoring",
        "GPS-tracked patrol verification",
        "Liaison with Fire Marshals"
      ]}
    >
      <h2>Reliable, Trained, and Code-Compliant Fire Watch Protection</h2>
      <p>
        When fire systems fail or a property becomes vulnerable to fire hazards, you need a professional fire watch team you can trust. At Proforce 1 Protection Services, we provide fully trained, dependable, and compliant Fire Watch Security Guards to ensure your site stays protected and meets all local and state fire safety requirements.
      </p>
      <p>
        With <strong>20+ years of experience</strong> in the security field and over a decade serving clients across California, our fire watch officers deliver continuous monitoring, fast reporting, and immediate emergency response to keep your property safe.
      </p>
      <br />

      {/* --- ANALYSIS: REQUIREMENTS --- */}
      <h3><b>When Is Fire Watch Required?</b></h3>
      <p>
        Fire watch is a mandatory safety measure required by the Fire Marshal or insurance providers when:
      </p>
      <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
        <li><strong>System Failure:</strong> Fire alarms or sprinklers are down.</li>
        <li><strong>Construction:</strong> Remodeling work disables protection systems.</li>
        <li><strong>Utilities Offline:</strong> Water supply to fire systems is cut off.</li>
        <li><strong>High Risk:</strong> "Hot-work" projects (welding, cutting) are active.</li>
        <li><strong>Mandates:</strong> A fire marshal orders on-site monitoring.</li>
      </ul>
      <br />

      {/* --- ANALYSIS: SERVICES --- */}
      <h3><b>Our Comprehensive Fire Watch Services</b></h3>
      <p>
        Our Fire Watch officers monitor your site without interruption to detect early signs of smoke, fire, or hazardous conditions.
      </p>
      <ul>
        <li><strong>✔ Continuous Patrol Monitoring:</strong> Routine patrols every 15 minutes checking for smoke, heat, sparks, and electrical hazards.</li>
        <li><strong>✔ Immediate Emergency Response:</strong> Calling 911, alerting management, and assisting in evacuation if a hazard is detected.</li>
        <li><strong>✔ Inspection-Ready Logs:</strong> Maintaining accurate, time-stamped logs available for Fire Marshal inspection.</li>
        <li><strong>✔ Construction & Hot Work:</strong> Specialized monitoring for new builds and welding projects to ensure OSHA compliance.</li>
        <li><strong>✔ 24/7 Availability:</strong> Capable of deploying on short notice, day or night.</li>
      </ul>
      <br />

      {/* --- ANALYSIS: COMPLIANCE --- */}
      <h3><b>Advanced Compliance: Digital Reporting</b></h3>
      <p>
        Compliance is the most critical part of Fire Watch. Proforce 1 uses an <strong>advanced digital reporting platform</strong> to give you complete oversight.
      </p>
      <ul>
        <li><strong>Real-time GPS tracking:</strong> Verifies that patrols are physically happening.</li>
        <li><strong>Time-stamped entries:</strong> Proof of continuous monitoring intervals.</li>
        <li><strong>Photo documentation:</strong> Visual evidence of hazards or site conditions.</li>
        <li><strong>Automated Summaries:</strong> Daily reports delivered to your email.</li>
      </ul>
      <br />

      <h3><b>Industries We Serve</b></h3>
      <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
        <li>Construction Sites & New Builds</li>
        <li>Commercial Buildings & Offices</li>
        <li>Apartments & HOA Communities</li>
        <li>Hotels & Hospitality</li>
        <li>Warehouses & Manufacturing</li>
        <li>Hospitals & Medical Centers</li>
      </ul>
      <br />

      <h3><b>Why Choose Proforce 1 for Fire Watch?</b></h3>
      <ul>
        <li>⭐ <strong>Experience:</strong> Over 20 years of security experience.</li>
        <li>⭐ <strong>Reliability:</strong> More than a decade serving California properties.</li>
        <li>⭐ <strong>Speed:</strong> Fast deployment — same-day or emergency coverage.</li>
        <li>⭐ <strong>Compliance:</strong> Fully compliant with Fire Marshal standards.</li>
        <li>⭐ <strong>Documentation:</strong> Detailed log reports required by inspectors.</li>
      </ul>

      <hr className="my-8" />

      <h3>Request Fire Watch Service Today</h3>
      <p>
        Need immediate coverage? We are available 24/7 to deploy to your site.
      </p>
      <ul>
        <li>📞 Call: 800-779-7691</li>
        <li>📧 Email: info@proforce1protection.com</li>
        <li>🌐 Website: www.proforce1protection.com</li>
      </ul>
    </ServiceTemplate>
  )
}