import ServiceTemplate from "@/components/site/service-template"

export default function SecurityGuardPage() {
  return (
    <ServiceTemplate
      title="Professional Security Guard Services in Orange County"
      intro="Reliable and professional security guard services tailored to protect your property, assets, and people throughout Orange County."
      imagePath="/Services/security-service.jpg"
      bullets={[
        "Trained and certified security officers",
        "24/7 security coverage",
        "Custom security solutions",
        "Regular patrol services",
        "Incident reporting and documentation",
        "Emergency response protocols"
      ]}
    >
      <h2>Comprehensive Security Guard Services</h2>
      <p>
        Our professional security guard services in Orange County provide comprehensive
        protection for businesses, properties, and events. We deliver customized security
        solutions with highly trained officers who are committed to maintaining the safety
        and security of your premises.
      </p>

      <h3>Our Security Services</h3>
      <ul>
        <li>Static security guards</li>
        <li>Mobile patrol units</li>
        <li>Access control management</li>
        <li>CCTV monitoring</li>
        <li>Emergency response</li>
        <li>Special event security</li>
      </ul>

      <h3>Industries We Serve</h3>
      <p>
        We provide specialized security guard services across various sectors in Orange County:
      </p>
      <ul>
        <li>Commercial properties and office buildings</li>
        <li>Retail establishments and shopping centers</li>
        <li>Industrial facilities and warehouses</li>
        <li>Educational institutions</li>
        <li>Healthcare facilities</li>
        <li>Residential communities</li>
      </ul>

      <h3>Professional Security Personnel</h3>
      <p>
        All our security guards are:
      </p>
      <ul>
        <li>Licensed and certified</li>
        <li>Thoroughly background checked</li>
        <li>Professionally trained</li>
        <li>Regularly evaluated and supervised</li>
        <li>Customer service oriented</li>
        <li>Equipped with latest security technology</li>
      </ul>

      <h3>Why Choose Our Security Guards</h3>
      <p>
        With extensive experience in Orange County, our security guards understand local
        security challenges and requirements. We provide reliable, professional, and
        courteous security services that help maintain a safe environment while presenting
        a professional image for your business or property.
      </p>
    </ServiceTemplate>
  )
}
