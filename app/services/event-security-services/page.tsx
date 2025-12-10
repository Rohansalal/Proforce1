import ServiceTemplate from "@/components/site/service-template"

export default function EventSecurityPage() {
  return (
    <ServiceTemplate
      title="Expert Event Security Services for Safe & Successful Events"
      intro="From intimate gatherings to large-scale conferences, our expert team ensures a safe, controlled, and organized environment so your event runs smoothly and stress-free."
      imagePath="/Services/event-security.jpg"
      bullets={[
        "Crowd management & guest safety",
        "Access control & credential verification",
        "VIP & executive protection",
        "Emergency response & medical support",
        "Real-time digital reporting",
        "Professional, customer-friendly officers"
      ]}
    >
      <h2>Expert Security Team for Safe, Successful, and Stress-Free Events</h2>
      <p>
        Hosting an event requires precision, planning, and professional protection. At Proforce 1 Protection Services, our Event Security Expert Team specializes in delivering safe, controlled, and organized environments for events of all sizes.
      </p>
      <p>
        With more than <strong>20 years of experience</strong> and over a decade serving clients across California, we provide reliable security that keeps your guests safe and your event running smoothly.
      </p>
      <br />

      {/* --- ANALYSIS: SKILLS --- */}
      <h3><b>Why Choose Proforce 1 for Event Security?</b></h3>
      <p>
        Our event security officers combine professionalism, situational awareness, and strong customer service to protect your event without disrupting the experience. We are trained to handle:
      </p>
      <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
        <li>Crowd Control & De-escalation</li>
        <li>VIP Handling & High-Profile Arrivals</li>
        <li>Risk Management & Theft Prevention</li>
        <li>Emergency Response & Medical Incidents</li>
      </ul>
      <br />

      {/* --- ANALYSIS: SERVICES --- */}
      <h3><b>Our Comprehensive Event Security Services</b></h3>
      <ul>
        <li><strong>✔ Access Control & Guest Screening:</strong> Managing check-in, ticket verification, and vendor logistics to ensure only authorized entry.</li>
        <li><strong>✔ Crowd Management:</strong> Guiding large groups safely, maintaining smooth flow, and keeping walkways clear.</li>
        <li><strong>✔ Armed & Unarmed Options:</strong> Tailored security levels for festivals, private parties, or corporate galas.</li>
        <li><strong>✔ Parking Lot Security:</strong> Ensuring safe vehicle movement and monitoring for theft or vandalism.</li>
        <li><strong>✔ First Aid Support:</strong> Trained officers responding immediately to medical incidents and safety hazards.</li>
        <li><strong>✔ VIP Protection:</strong> Discreet, professional protection for executives, celebrities, and families.</li>
      </ul>
      <br />

      {/* --- ANALYSIS: TECHNOLOGY --- */}
      <h3><b>Advanced Digital Reporting for Transparency</b></h3>
      <p>
        Proforce 1 uses an advanced digital security platform to ensure you have clear visibility into your event’s operations.
      </p>
      <ul>
        <li><strong>Live GPS tracking:</strong> Monitor officer locations in real-time.</li>
        <li><strong>Time-stamped photos:</strong> Visual updates of key areas.</li>
        <li><strong>Activity summaries:</strong> Delivered directly to you post-event.</li>
      </ul>
      <br />

      <h3><b>Events We Specialize In</b></h3>
      <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
        <li>Corporate Conferences & Networking Events</li>
        <li>Award Ceremonies & Galas</li>
        <li>Weddings, Private Parties & Celebrations</li>
        <li>Festivals, Concerts & Outdoor Events</li>
        <li>Hotel & Convention Center Events</li>
      </ul>
      <br />

      <h3><b>Why Our Event Team Stands Out</b></h3>
      <ul>
        <li>⭐ <strong>Experience:</strong> 20+ Years of Security Experience.</li>
        <li>⭐ <strong>Coverage:</strong> Statewide Coverage Across California.</li>
        <li>⭐ <strong>Quality:</strong> Professional, Trained, Customer-Friendly Officers.</li>
        <li>⭐ <strong>Flexibility:</strong> Complete Customization for Your Event Needs.</li>
        <li>⭐ <strong>Reliability:</strong> On-Time and Fully Communicative Team.</li>
      </ul>

      <hr className="my-8" />

      <h3>Request a Customized Event Security Quote</h3>
      <p>
        Whether you're planning a one-day event or a multi-day conference, our team is ready to support you with expert-level service.
      </p>
      <ul>
        <li>📞 Call: 800-779-7691</li>
        <li>📧 Email: info@proforce1protection.com</li>
        <li>🌐 Website: www.proforce1protection.com</li>
      </ul>
    </ServiceTemplate>
  )
}