import ServiceTemplate from "@/components/site/service-template"

export default function HighRiseBuildingSecurityPage() {
  return (
    <ServiceTemplate
      title="High Rise Building Security Services"
      intro="Professional security solutions tailored for high-rise buildings, ensuring comprehensive protection for tenants, visitors, and property."
      imagePath="/Services/high-rise-security.jpg"
      bullets={[
        "24/7 lobby security and access control",
        "CCTV monitoring and surveillance",
        "Emergency response protocols",
        "Tenant and visitor management",
        "Parking garage security patrols",
        "Package and delivery management"
      ]}
    >
      <h2>Comprehensive High-Rise Security Solutions</h2>
      <p>
        Our high-rise building security services are designed to address the unique challenges of
        securing vertical communities and commercial towers. We provide a seamless blend of
        professional security personnel, advanced technology, and proven protocols to ensure the
        safety and security of your property.
      </p>

      <h3>Key Security Features</h3>
      <ul>
        <li>Professional uniformed security officers</li>
        <li>Advanced access control systems</li>
        <li>24/7 monitoring and rapid response</li>
        <li>Customized security protocols</li>
        <li>Regular security assessments</li>
        <li>Detailed incident reporting</li>
      </ul>

      <h3>Why Choose Our High-Rise Security Services</h3>
      <p>
        With years of experience in high-rise security, our team understands the complexities of
        managing multi-story building security. We provide trained officers who are specifically
        prepared for high-rise environments, ensuring professional service that enhances your
        property's security and reputation.
      </p>
    </ServiceTemplate>
  )
}