import ServiceTemplate from "@/components/site/service-template"

export default function EventSecurityPage() {
  return (
    <ServiceTemplate
      title="Event Security Services in Orange County"
      intro="Professional event security services ensuring the safety and success of your events throughout Orange County, from corporate gatherings to large-scale public events."
      imagePath="/Services/event-security.jpg"
      bullets={[
        "Crowd management and control",
        "VIP protection services",
        "Access control and screening",
        "Emergency response planning",
        "Event staff coordination",
        "Risk assessment and management"
      ]}
    >
      <h2>Comprehensive Event Security Solutions</h2>
      <p>
        Our event security services are tailored to meet the unique requirements of various events
        in Orange County. We provide professional security personnel who are trained in crowd
        management, access control, and emergency response to ensure your event runs smoothly and
        safely.
      </p>

      <h3>Types of Events We Secure</h3>
      <ul>
        <li>Corporate events and conferences</li>
        <li>Music festivals and concerts</li>
        <li>Sporting events</li>
        <li>Trade shows and exhibitions</li>
        <li>Private parties and celebrations</li>
        <li>Public gatherings and community events</li>
      </ul>

      <h3>Event Security Services</h3>
      <p>
        Our comprehensive event security services include pre-event planning, on-site security
        management, and post-event reporting. We work closely with event organizers to develop
        and implement effective security strategies that enhance event safety while maintaining
        a welcoming atmosphere.
      </p>

      <h3>Key Security Features</h3>
      <ul>
        <li>Professional uniformed security officers</li>
        <li>Crowd control and management</li>
        <li>Ticket verification and access control</li>
        <li>Bag checks and security screening</li>
        <li>Emergency response coordination</li>
        <li>VIP security and escort services</li>
      </ul>

      <h3>Why Choose Our Event Security</h3>
      <p>
        With years of experience securing events throughout Orange County, our team understands
        the local venue landscape and security requirements. We provide trained, professional
        security officers who are experienced in handling various event scenarios while
        maintaining a positive guest experience. Our security planning ensures your event runs
        smoothly while keeping attendees safe and secure.
      </p>
    </ServiceTemplate>
  )
}
