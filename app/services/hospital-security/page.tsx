import ServiceTemplate from "@/components/site/service-template"

export default function HospitalSecurityPage() {
  return (
    <ServiceTemplate
      title="Hospital Security Services"
      intro="Specialized security solutions for healthcare facilities, ensuring a safe environment for patients, staff, and visitors while maintaining sensitive medical operations."
      imagePath="/Services/hospital-security.jpg"
      bullets={[
        "24/7 facility security coverage",
        "Emergency department security",
        "Patient and visitor management",
        "Access control and monitoring",
        "Crisis intervention",
        "HIPAA compliance support"
      ]}
    >
      <h2>Healthcare Facility Security Solutions</h2>
      <p>
        Our hospital security services are specifically designed to meet the unique challenges of
        healthcare environments. We understand the importance of maintaining a secure yet welcoming
        atmosphere while protecting sensitive areas, valuable medical equipment, and ensuring
        compliance with healthcare regulations.
      </p>

      <h3>Specialized Security Services</h3>
      <ul>
        <li>Emergency department security protocols</li>
        <li>Patient watch services</li>
        <li>Medication storage area protection</li>
        <li>Visitor screening and management</li>
        <li>De-escalation and crisis intervention</li>
        <li>Healthcare-specific security training</li>
      </ul>

      <h3>Why Choose Our Hospital Security Services</h3>
      <p>
        With extensive experience in healthcare security, our officers are specially trained in
        handling sensitive medical environments. We prioritize a balanced approach that maintains
        strict security protocols while ensuring patient care remains uncompromised. Our team is
        well-versed in healthcare regulations and best practices for medical facility security.
      </p>

      <h3>Additional Benefits</h3>
      <ul>
        <li>Customized security plans for different hospital departments</li>
        <li>Integration with hospital emergency response systems</li>
        <li>Regular security assessments and updates</li>
        <li>Coordination with local law enforcement and emergency services</li>
        <li>Detailed incident reporting and documentation</li>
      </ul>
    </ServiceTemplate>
  )
}