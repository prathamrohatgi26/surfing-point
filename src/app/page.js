import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Surfing Point",
    "description": "Professional travel ticketing, insurance services, digital signature solutions, passport applications, and comprehensive online services.",
    "url": "https://surfingpoint.com",
    "telephone": "8979914623",
    "email": "info@surfingpoint.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business District, Suite 456, Floor 3",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Travel Ticketing",
            "description": "Book flights, hotels, and travel packages with the best deals and reliable service."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Insurance Services",
            "description": "Comprehensive insurance solutions including health, auto, life, and business insurance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Signature",
            "description": "Secure and legally binding digital signature solutions for all your documents."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Passport Services",
            "description": "Complete passport application and renewal services with expert guidance."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Services",
            "description": "Comprehensive online services to handle all your digital needs efficiently."
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
