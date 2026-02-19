import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Surfing Point",
    "description": "Professional travel ticketing, insurance services, digital signature solutions, passport applications, and comprehensive online services in Meerut, Uttar Pradesh.",
    "url": "https://surfingpoint.com",
    "telephone": "+918979914623",
    "email": "surfingpointmeerut@gmail.com",
    "image": "https://surfingpoint.com/og-image.jpg",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ashok Ki Lath, Subhash Bazar",
      "addressLocality": "Meerut",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "250002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.9845",
      "longitude": "77.7064"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "areaServed": {
      "@type": "City",
      "name": "Meerut"
    },
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Travel Ticketing",
            "description": "Book flights, hotels, and travel packages with the best deals and reliable service.",
            "areaServed": "Meerut, Uttar Pradesh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Insurance Services",
            "description": "Comprehensive insurance solutions including health, auto, life, and business insurance.",
            "areaServed": "Meerut, Uttar Pradesh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Signature",
            "description": "Secure and legally binding digital signature solutions for all your documents.",
            "areaServed": "Meerut, Uttar Pradesh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Passport Services",
            "description": "Complete passport application and renewal services with expert guidance.",
            "areaServed": "Meerut, Uttar Pradesh"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Online Services",
            "description": "Comprehensive online services to handle all your digital needs efficiently.",
            "areaServed": "Meerut, Uttar Pradesh"
          }
        }
      ]
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Surfing Point offer in Meerut?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Surfing Point offers travel ticketing (domestic & international flights, hotels, travel packages), all kinds of insurance (health, auto, life, business), digital signature solutions, passport services (new applications, renewals, visa assistance), and all types of online works including government services and document processing."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Surfing Point located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Surfing Point is located at Ashok Ki Lath, Subhash Bazar, Meerut, Uttar Pradesh 250002."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Surfing Point?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Surfing Point by calling +91 8979914623 or emailing surfingpointmeerut@gmail.com. You can also visit our office at Ashok Ki Lath, Subhash Bazar, Meerut."
        }
      },
      {
        "@type": "Question",
        "name": "Does Surfing Point help with passport applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Surfing Point provides complete passport services including new passport applications, passport renewals, visa assistance, and document verification."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get digital signature services at Surfing Point?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Surfing Point offers secure and legally binding digital signature solutions including document signing, legal compliance, secure storage, and quick processing."
        }
      }
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://surfingpoint.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
