import ServiceTemplate from "@/components/site/service-template"

export default function UnarmedGuardPage() {
  return (
    <ServiceTemplate
      title="Professional Unarmed Security Guard Services"
      intro="A strong, visible, and highly trained security presence designed to protect property and maintain order while ensuring a welcoming environment for your employees and guests."
      imagePath="/Services/security-service.jpg"
      bullets={[
        "Protection without intimidation",
        "Customer-service focused officers",
        "Advanced de-escalation training",
        "GPS-tracked digital reporting",
        "Access control & visitor management",
        "24/7 Dispatch and support"
      ]}
    >
      <h2>Professional, Reliable, and Customer-Focused Protection</h2>
      <p>
        At Proforce 1 Protection Services, our unarmed security guards provide a strong, visible, and highly trained presence designed to protect your property, maintain order, and ensure a safe environment for employees, customers, residents, and visitors.
      </p>
      <p>
        With over <strong>20 years of security experience</strong> and more than a decade in business, we serve clients across California with dependable security solutions. Our unarmed officers combine professionalism and situational awareness to prevent problems before they occur.
      </p>
      <br />

      {/* --- ANALYSIS: THE WHY --- */}
      <h3><b>Why Choose Unarmed Security Guards?</b></h3>
      <p>
        Unarmed guards are the ideal solution for locations that need strong protection without the intimidation factor of armed officers. They provide a balanced approach that maintains a <strong>professional presence blending safety, hospitality, and control</strong>.
      </p>
      <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
        <li><strong>Deterrence:</strong> Visible presence prevents theft and vandalism.</li>
        <li><strong>Hospitality:</strong> Facilitates customer-friendly interactions.</li>
        <li><strong>De-escalation:</strong> Safely manages tense situations verbally.</li>
        <li><strong>Safety:</strong> Immediate response to hazards and emergencies.</li>
      </ul>
      <br />

      {/* --- ANALYSIS: SERVICES --- */}
      <h3><b>Our Unarmed Security Services</b></h3>
      <ul>
        <li><strong>✔ Access Control:</strong> Monitoring doors and gates, checking IDs, and logging visitors to ensure authorized entry only.</li>
        <li><strong>✔ Foot Patrol & Perimeter Monitoring:</strong> Continuous walking patrols of hallways, parking lots, and exterior areas to detect activity.</li>
        <li><strong>✔ Mobile Patrol Services:</strong> Randomized vehicle patrols to increase visibility for larger properties.</li>
        <li><strong>✔ Loss Prevention:</strong> Strong visibility in retail spaces to prevent shoplifting and employee theft.</li>
        <li><strong>✔ Lobby/Front Desk Security:</strong> Greeting guests and managing access in a professional manner.</li>
        <li><strong>✔ Parking Lot Control:</strong> Monitoring vehicles to deter break-ins and ensuring safe staff departures.</li>
        <li><strong>✔ Emergency Response:</strong> Immediate reaction to disturbances, medical issues, and property hazards.</li>
      </ul>
      <br />

      {/* --- ANALYSIS: TECHNOLOGY --- */}
      <h3><b>Advanced Accountability: Digital Reporting</b></h3>
      <p>
        Proforce 1 uses an advanced electronic reporting platform that gives you **full visibility of your site in real time**.
      </p>
      <ul>
        <li><strong>GPS-tracked patrol logs:</strong> Know exactly where guards are and when.</li>
        <li><strong>Time-stamped photos:</strong> Visual verification of every patrol check.</li>
        <li><strong>Detailed incident reports:</strong> Professional documentation of onsite issues.</li>
        <li><strong>Daily summaries:</strong> Automated reports delivered to your inbox daily.</li>
      </ul>
      <br />

      <h3><b>Industries We Serve</b></h3>
      <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
        <li>Corporate Offices & Government Buildings</li>
        <li>Retail Stores & Shopping Centers</li>
        <li>Hotels & Hospitality</li>
        <li>Residential Communities & Apartments</li>
        <li>Schools & Educational Facilities</li>
        <li>Warehouses & Industrial Sites</li>
      </ul>
      <br />

      <h3><b>Why Clients Trust Proforce 1</b></h3>
      <ul>
        <li>⭐ <strong>Experience:</strong> More than 20 years of industry experience.</li>
        <li>⭐ <strong>Reliability:</strong> Over a decade serving clients throughout California.</li>
        <li>⭐ <strong>Quality:</strong> Professional, trained, and licensed officers.</li>
        <li>⭐ <strong>Accountability:</strong> Advanced reporting technology.</li>
        <li>⭐ <strong>Support:</strong> Fast response and 24/7 customer support.</li>
      </ul>

      <hr className="my-8" />

      <h3>Request an Unarmed Security Proposal</h3>
      <p>
        Whether you need long-term coverage, temporary protection, or short-notice security, our team is ready to assist.
      </p>
      <ul>
        <li>📞 Call: 800-779-7691</li>
        <li>📧 Email: info@proforce1protection.com</li>
        <li>🌐 Website: www.proforce1protection.com</li>
      </ul>
    </ServiceTemplate>
  )
}