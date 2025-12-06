import ServiceTemplate from "@/components/site/service-template"

export default function FireWatchPage() {
  return (
    <ServiceTemplate
      title="Specialized Fire Watch Services in Orange County"
      intro="Professional fire watch services ensuring compliance with fire safety regulations and protecting your property from fire hazards throughout Orange County."
      imagePath="/Services/fire-watch.jpg"
      bullets={[
        "24/7 fire watch patrols",
        "Fire system monitoring",
        "Emergency evacuation planning",
        "Fire hazard identification",
        "Compliance documentation",
        "Rapid emergency response"
      ]}
    >
      <h2>Professional Fire Watch Solutions</h2>
      <p>
        Our specialized fire watch services provide essential protection when your regular fire
        protection systems are impaired or during high-risk operations. We ensure continuous
        monitoring and immediate response to potential fire hazards, helping maintain compliance
        with local fire regulations in Orange County.
      </p>

      <h3>Comprehensive Fire Watch Services</h3>
      <ul>
        <li>Regular facility patrols and inspections</li>
        <li>Fire hazard identification and reporting</li>
        <li>Maintenance of detailed fire watch logs</li>
        <li>Emergency evacuation coordination</li>
        <li>Fire department liaison services</li>
        <li>Hot work monitoring and supervision</li>
      </ul>

      <h3>Industries We Serve</h3>
      <p>
        We provide specialized fire watch services for various industries throughout Orange
        County, including:
      </p>
      <ul>
        <li>Construction sites and renovation projects</li>
        <li>Commercial buildings and offices</li>
        <li>Manufacturing facilities</li>
        <li>Healthcare facilities</li>
        <li>Educational institutions</li>
        <li>Special events and temporary structures</li>
      </ul>

      <h3>Why Choose Our Fire Watch Services</h3>
      <p>
        Our fire watch officers are thoroughly trained in fire safety protocols and emergency
        response procedures. We understand Orange County's fire safety regulations and ensure
        your property remains compliant while maintaining the highest level of fire safety
        protection.
      </p>

      <h3>Additional Benefits</h3>
      <ul>
        <li>Customized fire watch plans</li>
        <li>Detailed documentation and reporting</li>
        <li>Coordination with local fire authorities</li>
        <li>Regular updates and communication</li>
        <li>Quick deployment capabilities</li>
        <li>Experienced fire watch personnel</li>
      </ul>
    </ServiceTemplate>
  )
}
