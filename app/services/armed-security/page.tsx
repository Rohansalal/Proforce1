import ServiceTemplate from "@/components/site/service-template"

export default function ArmedSecurityPage() {
  return (
    <ServiceTemplate
      title="Armed Security Services"
      intro="Professional armed security services providing the highest level of protection for high-risk environments and valuable assets."
      imagePath="/Services/armed-security.jpg"
      bullets={[
        "Highly trained and licensed armed officers",
        "Risk assessment and security planning",
        "Emergency response capabilities",
        "Asset protection and transport",
        "Tactical response team",
        "24/7 armed security coverage"
      ]}
    >
      <h2>Professional Armed Security Solutions</h2>
      <p>
        Our armed security services provide an elite level of protection for situations that
        require enhanced security measures. Each armed security officer is extensively trained,
        properly licensed, and regularly evaluated to ensure the highest standards of
        professionalism and tactical readiness.
      </p>

      <h3>Specialized Armed Security Services</h3>
      <ul>
        <li>High-value asset protection</li>
        <li>Executive protection services</li>
        <li>Financial institution security</li>
        <li>High-risk facility protection</li>
        <li>Armed transport services</li>
        <li>Emergency response teams</li>
      </ul>

      <h3>Our Armed Security Officers</h3>
      <p>
        All our armed security officers undergo rigorous training beyond standard security
        certification. This includes:
      </p>
      <ul>
        <li>Advanced firearms training and certification</li>
        <li>Tactical response and situation assessment</li>
        <li>De-escalation techniques</li>
        <li>Emergency medical response</li>
        <li>Legal use of force training</li>
        <li>Regular physical fitness assessments</li>
      </ul>

      <h3>Industries Served</h3>
      <ul>
        <li>Banking and financial institutions</li>
        <li>Government facilities</li>
        <li>High-value retail locations</li>
        <li>Critical infrastructure</li>
        <li>Corporate headquarters</li>
        <li>Special events requiring armed security</li>
      </ul>
    </ServiceTemplate>
  )
}
