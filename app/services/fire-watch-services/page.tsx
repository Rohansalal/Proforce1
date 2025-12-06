// app/services/fire-watch-services/page.tsximport ServiceTemplate from "@/components/site/service-template"
import ServiceTemplate from "@/components/site/service-template"


export default function FireWatchServices() {
  return (
    <ServiceTemplate
      title="Fire Watch Services"
      intro="Professional fire watch services in Orange County to protect your property during fire system outages, construction, or high-risk periods. Our certified fire watch guards ensure compliance with fire codes and immediate emergency response."
      bullets={[
        "Certified fire watch personnel",
        "24/7 fire safety monitoring",
        "Compliance with local fire codes",
        "Emergency response coordination",
        "Detailed incident reporting"
      ]}
      imagePath="/services/fire-watch.jpg"
    >
      <div className="space-y-6">
        <h2>Comprehensive Fire Watch Protection</h2>
        
        <p>
          When your fire alarm or sprinkler systems are impaired, our fire watch services provide critical 
          protection. Our guards are trained to identify fire hazards, perform regular patrols, and maintain 
          detailed logs as required by fire departments.
        </p>

        <h3>Fire Watch Scenarios:</h3>
        
        <div className="grid gap-4">
          <div>
            <h4>System Maintenance</h4>
            <p>During fire alarm or sprinkler system repairs and testing.</p>
          </div>
          <div>
            <h4>Construction Projects</h4>
            <p>Hot work operations and building renovations requiring fire watch.</p>
          </div>
          <div>
            <h4>System Failure</h4>
            <p>Emergency coverage when fire protection systems are temporarily out of service.</p>
          </div>
          <div>
            <h4>Special Events</h4>
            <p>Large gatherings or events where fire safety requires additional monitoring.</p>
          </div>
        </div>

        <h3>Our Fire Watch Process</h3>
        <p>
          Our fire watch guards conduct regular patrols of the entire premises, paying special attention to 
          high-risk areas. They maintain constant communication capabilities and are trained in immediate 
          emergency response procedures, including evacuation coordination and fire department notification.
        </p>
      </div>
    </ServiceTemplate>
  )
}