// app/services/armed-guard/page.tsx
import ServiceTemplate from "@/components/site/service-template"

export default function ArmedGuardPage() {
  return (
    <ServiceTemplate
      title="Professional Armed Security Guard Services"
      intro="The highest level of protection for high-value assets and sensitive environments, backed by unmatched training, discipline, and over 20 years of field experience."
      imagePath="/Services/foot-patrol.jpg"
      bullets={[
        "BSIS Firearm Certified Officers",
        "High-value asset protection",
        "Advanced de-escalation training",
        "Real-time GPS tracking & reporting",
        "Rapid response to critical threats",
        "Customized security planning"
      ]}
    >
      <h2>Professional Protection Backed by Training, Precision, and Experience</h2>
      <p>
        At Proforce 1 Protection Services, our Armed Security Division is built to protect high-value properties, sensitive environments, and businesses that require the <strong>highest level of security presence</strong>.
      </p>
      <p>
        With over <strong>20 years of field experience</strong> and more than a decade in business, we provide unmatched professionalism, rapid response, and strong deterrence against threats. Our armed officers are not just guards — they are highly trained security professionals prepared to protect clients, customers, and assets with discipline, confidence, and sound judgment.
      </p>
      <br></br>
      
      {/* --- ANALYSIS: TRAINING (TRUST FACTOR) --- */}
      <h3><b>Why Choose Our Armed Security Guards?</b></h3>
      <p>
        Armed security requires a higher standard of responsibility. We ensure every armed officer is prepared mentally and physically to handle critical situations safely and professionally.
      </p>
      <p>All armed personnel undergo rigorous training including:</p>
      <ul>
        <li><strong>✔ California BSIS Firearm Certification:</strong> Full licensing and legal compliance.</li>
        <li><strong>✔ Ongoing Live-Fire Training:</strong> Ensuring precision and safety skills remain sharp.</li>
        <li><strong>✔ De-escalation & Conflict Resolution:</strong> Training to resolve issues verbally whenever possible.</li>
        <li><strong>✔ Emergency Response:</strong> Crisis management instruction for active shooter or high-threat scenarios.</li>
        <li><strong>✔ Advanced Situational Awareness:</strong> Proactive threat detection before incidents occur.</li>
      </ul>
       <br />
      {/* --- ANALYSIS: DETERRENCE (USE CASES) --- */}
      <h3><b>Visible Deterrence & High-Value Protection</b></h3>
      <p>
        Armed guards provide immediate, visible deterrence against theft, robbery, and aggression. Our officers are trained to maintain a <strong>calm, respectful, and customer-friendly posture</strong> while remaining vigilant at all times.
      </p>
      <p>We specialize in protecting high-risk and high-value environments such as:</p>
     <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
       <li>Jewelry Stores & Luxury Retailers</li>
      <li>Banks & Financial Institutions</li>
      <li>Hotels & Hospitality Venues</li>
      <li>Cannabis Facilities & Dispensaries</li>
     </ul><br></br>

      {/* --- ANALYSIS: TECHNOLOGY (ACCOUNTABILITY) --- */}
      <h3><b>Real-Time Digital Reporting & GPS Tracking</b></h3>
      <p>
        We believe in total transparency. Proforce 1 uses the latest security technology to keep you fully informed. Every armed officer is supported by our advanced reporting platform featuring:
      </p>
      <ul >
        <li><strong>Real-time GPS tracking:</strong> Verify guard location instantly.</li>
        <li><strong>Time-stamped photos:</strong> Visual evidence of patrols and incidents.</li>
        <li><strong>Detailed Incident Reports:</strong> Full documentation of any security events.</li>
        <li><strong>Live Updates:</strong> Activity summaries delivered directly to your email inbox.</li>
      </ul>
      <br></br>

      {/* --- ANALYSIS: RESPONSE (EMERGENCY) --- */}
      <h3><b>Rapid Response & Emergency Readiness</b></h3>
      <p>
        In critical moments, split-second decisions matter. Our armed officers are trained to react immediately to:
      </p>
      <ul style={{ listStyleType: 'square', marginLeft: 20 }}>
        <li>Threats against life or property</li>
        <li>Robbery risks and theft attempts</li>
        <li>Unruly or aggressive individuals</li>
        <li>Trespassing and unauthorized access</li>
      </ul>
         <br></br>

      <h3><b>Why Clients Trust Proforce 1 Protection Services</b></h3>
      <ul>
        <li>⭐ <strong>Expertise:</strong> 20+ Years of Security Expertise.</li>
        <li>⭐ <strong>History:</strong> Over a Decade Serving California Businesses.</li>
        <li>⭐ <strong>Personnel:</strong> Professional, Dependable, Fully Licensed Officers.</li>
        <li>⭐ <strong>Transparency:</strong> Advanced Technology for Reporting & GPS.</li>
        <li>⭐ <strong>Service:</strong> Strong Communication & Client-Focused Service.</li>
      </ul>

      <hr className="my-8" />

      <h3>Get a Free Security Quote Today</h3>
      <p>
        Whether you need long-term security, temporary armed coverage, or emergency protection, our team is ready to assist 24/7.
      </p>
      <ul>
        <li>📞 Call: 800-779-7691</li>
        <li>📧 Email: info@proforce1protection.com</li>
        <li>🌐 Website: www.proforce1protection.com</li>
      </ul>
    </ServiceTemplate>
  )
}