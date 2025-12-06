import ServiceTemplate from "@/components/site/service-template"

export default function PatrolServicesPage() {
  return (
    <ServiceTemplate
      title="Security Patrol Services in Orange County"
      intro="Professional mobile patrol services providing active security monitoring and rapid response throughout Orange County."
      imagePath="/Services/foot-patrol.jpg"
      bullets={[
        "24/7 mobile patrol coverage",
        "Random patrol patterns",
        "Vehicle and foot patrols",
        "Property inspections",
        "Incident response and reporting",
        "Lock/unlock services"
      ]}
    >
      <h2>Comprehensive Patrol Security Solutions</h2>
      <p>
        Our security patrol services provide active monitoring and rapid response capabilities
        across Orange County. Our trained patrol officers conduct regular property checks,
        respond to incidents, and maintain a visible security presence to deter criminal
        activity.
      </p>

      <h3>Types of Patrol Services</h3>
      <ul>
        <li>Vehicle patrol with marked security vehicles</li>
        <li>Foot patrol for detailed property inspection</li>
        <li>Bicycle patrol for medium-sized properties</li>
        <li>Random patrol patterns for unpredictability</li>
        <li>Scheduled check-points and inspections</li>
        <li>Emergency response patrols</li>
      </ul>

      <h3>Key Security Features</h3>
      <ul>
        <li>GPS-tracked patrol vehicles</li>
        <li>Digital patrol tracking and reporting</li>
        <li>Property inspection documentation</li>
        <li>Immediate incident response</li>
        <li>Lock and unlock services</li>
        <li>Alarm response and verification</li>
      </ul>

      <h3>Industries We Serve</h3>
      <p>
        Our patrol services are customized for various property types throughout Orange County:
      </p>
      <ul>
        <li>Commercial and industrial properties</li>
        <li>Retail centers and shopping malls</li>
        <li>Residential communities and HOAs</li>
        <li>Construction sites</li>
        <li>Educational facilities</li>
        <li>Medical complexes</li>
      </ul>

      <h3>Why Choose Our Patrol Services</h3>
      <p>
        With extensive coverage throughout Orange County, our patrol services provide reliable,
        professional security monitoring and rapid response capabilities. Our patrol officers
        are thoroughly trained, properly equipped, and supported by advanced tracking and
        reporting systems to ensure effective security coverage for your property.
      </p>
    </ServiceTemplate>
  )
}