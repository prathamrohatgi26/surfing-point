import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import WebDevelopment from '@/components/WebDevelopment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { site } from '@/lib/site';

export default function Home() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    "name": "Surfing Point",
    "description": "Professional travel ticketing, insurance services, digital signature solutions, passport applications, comprehensive online services, and website & landing page design for businesses in Meerut, Uttar Pradesh.",
    "knowsAbout": [
      "Travel ticketing",
      "Insurance",
      "Digital signature certificates",
      "Passport services",
      "Website design",
      "Landing page design",
      "Local SEO"
    ],
    "url": site.url,
    "telephone": site.phone.e164,
    "email": site.email.display,
    "image": `${site.url}/opengraph-image`,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": site.address.street,
      "addressLocality": site.address.city,
      "addressRegion": site.address.region,
      "postalCode": site.address.postalCode,
      "addressCountry": site.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": site.geo.latitude,
      "longitude": site.geo.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": site.hours.days,
        "opens": site.hours.opens,
        "closes": site.hours.closes
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
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website & Landing Page Development",
            "serviceType": "Website design and development",
            "description": "Professional, mobile-friendly websites and landing pages for businesses, with Google and local SEO setup, WhatsApp and call buttons, and domain and hosting setup.",
            "url": `${site.url}/website-development`,
            "areaServed": "Meerut, Uttar Pradesh"
          }
        }
      ]
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": site.url
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <main className="min-h-screen bg-gray-50">
        <Navigation />
        <Hero />
        <Services />
        <WebDevelopment showDetailsLink />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
