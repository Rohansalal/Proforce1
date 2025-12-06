import ServiceTemplate from "@/components/site/service-template"

export default function ShoppingPage() {
  return (
    <ServiceTemplate
      title="Premium Shopping Experience in Orange County"
      intro="Discover an unparalleled shopping experience with our curated selection of premium products and exceptional customer service throughout Orange County."
      imagePath="/Services/shopping.jpg"
      bullets={[
        "Curated premium product selection",
        "Personal shopping assistance",
        "Home delivery service",
        "Gift wrapping & personalization",
        "VIP member benefits",
        "Price match guarantee"
      ]}
    >
      <h2>Exclusive Shopping Experience</h2>
      <p>
        Our premium shopping service offers a personalized approach to retail, bringing you the 
        finest products with exceptional service. Whether you're shopping for yourself or looking 
        for the perfect gift, we provide a seamless experience that saves you time and ensures 
        satisfaction with every purchase.
      </p>

      <h3>Our Shopping Services</h3>
      <ul>
        <li>Personal shopping consultations</li>
        <li>Gift selection and curation</li>
        <li>Home and office delivery</li>
        <li>Product sourcing and special orders</li>
        <li>Style and trend consultations</li>
        <li>Corporate gifting programs</li>
      </ul>

      <h3>Product Categories</h3>
      <p>
        We offer a wide range of premium products to meet all your shopping needs:
      </p>
      <ul>
        <li>Luxury fashion and accessories</li>
        <li>Home decor and furnishings</li>
        <li>Gourmet foods and gift baskets</li>
        <li>Electronics and gadgets</li>
        <li>Beauty and wellness products</li>
        <li>Children's toys and educational items</li>
      </ul>

      <h3>Why Choose Our Shopping Service</h3>
      <p>
        We take the stress out of shopping by providing expert guidance, quality assurance, 
        and convenience. Our team understands Orange County's unique shopping landscape and 
        has established relationships with premium suppliers and local artisans to bring you 
        the best products available.
      </p>

      <h3>Additional Benefits</h3>
      <ul>
        <li>Free local delivery within Orange County</li>
        <li>Flexible return and exchange policy</li>
        <li>Exclusive access to limited edition items</li>
        <li>Custom gift wrapping and messaging</li>
        <li>Same-day delivery options</li>
        <li>Personal shopper available by appointment</li>
      </ul>

      <h3>How It Works</h3>
      <p>
        Our shopping service is designed for your convenience. Simply contact us to schedule 
        a consultation, share your preferences and budget, and let our expert shoppers handle 
        the rest. We'll present you with curated options, make purchases on your behalf, and 
        arrange delivery at your convenience.
      </p>
    </ServiceTemplate>
  )
}