import Link from 'next/link';
import Navigation from '@/components/Navigation';
import WebDevelopment from '@/components/WebDevelopment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { site, whatsappLink } from '@/lib/site';

const pageUrl = `${site.url}/website-development`;
const title = "Website & Landing Page Design in Meerut";
const description = "Mobile-friendly websites and landing pages for Meerut businesses, with Google & local SEO, WhatsApp buttons and domain setup. Call +91 8979914623.";

export const metadata = {
  // Absolute: the layout template would append "| Surfing Point Meerut" and repeat "Meerut".
  title: { absolute: `${title} | Surfing Point` },
  description,
  keywords: [
    "website design Meerut",
    "website development Meerut",
    "web designer Meerut",
    "website designing company Meerut",
    "landing page design Meerut",
    "business website Meerut",
    "website for small business Meerut",
    "mobile friendly website design",
    "local SEO Meerut",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${title} | Surfing Point`,
    description,
    url: pageUrl,
    siteName: "Surfing Point",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | Surfing Point`,
    description: "Professional, mobile-friendly websites and landing pages for businesses in Meerut. Call +91 8979914623.",
  },
};

const businessTypes = [
  { icon: "🛍️", label: "Shops & showrooms" },
  { icon: "🩺", label: "Clinics & doctors" },
  { icon: "🎓", label: "Coaching centres & schools" },
  { icon: "🍽️", label: "Restaurants & cafés" },
  { icon: "🏠", label: "Real estate & builders" },
  { icon: "💼", label: "CAs, lawyers & consultants" },
  { icon: "💇", label: "Salons, spas & gyms" },
  { icon: "🔧", label: "Local service businesses" },
];

const faqs = [
  {
    question: "Does Surfing Point build websites for businesses in Meerut?",
    answer: "Yes. Surfing Point designs and builds websites and landing pages for businesses in Meerut and beyond, from our office at Ashok Ki Lath, Subhash Bazar."
  },
  {
    question: "What is the difference between a landing page and a business website?",
    answer: "A landing page is a single, focused page that explains what you offer and gets customers to call or message you. A business website has multiple pages, such as home, services, about and contact, for businesses that want to show more."
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Yes. Every website we build is mobile-friendly and looks good on phones, tablets and computers."
  },
  {
    question: "Will customers be able to find my business on Google?",
    answer: "We set up every website for Google Search and local SEO so customers in Meerut and nearby can find your business on Google Search and Google Maps."
  },
  {
    question: "Can customers contact me directly from the website?",
    answer: "Yes. We add one-tap WhatsApp chat, call and directions buttons so enquiries come straight to your phone."
  },
  {
    question: "Do you help with the domain name and hosting?",
    answer: "Yes. We help you get your own .com or .in domain and take your website live."
  },
  {
    question: "How do I get started?",
    answer: `Message us on WhatsApp or call ${site.phone.display}. Tell us about your business and we will design your website and share it with you for review before it goes live.`
  },
];

export default function WebsiteDevelopmentPage() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    "name": "Website & Landing Page Design",
    "serviceType": "Website design and development",
    "description": description,
    "url": pageUrl,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#business`,
      "name": site.name,
      "url": site.url,
      "telephone": site.phone.e164,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": site.address.street,
        "addressLocality": site.address.city,
        "addressRegion": site.address.region,
        "postalCode": site.address.postalCode,
        "addressCountry": site.address.country
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Meerut" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Services",
      "itemListElement": [
        "Landing pages",
        "Business websites",
        "Mobile-friendly design",
        "Google & local SEO setup",
        "WhatsApp & call buttons",
        "Domain & hosting setup"
      ].map((name) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": name }
      }))
    }
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Website Development",
        "item": pageUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
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

        {/* Page hero */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-indigo-50">
          <div className="max-w-7xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm sm:text-base text-gray-600">
              <ol className="flex justify-center items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-gray-900 font-medium">Website Development</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Website & Landing Page Design in{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Meerut
              </span>
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              Professional, mobile-friendly websites that help customers find your business on Google and contact you on WhatsApp or by phone.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={whatsappLink("Hi Surfing Point, I'd like a website / landing page for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-green-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="text-2xl">💬</span>
                Get Your Website
              </a>
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="text-2xl">📞</span>
                Call {site.phone.display}
              </a>
            </div>
          </div>
        </section>

        <WebDevelopment variant="page" />

        {/* Who we build for */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Websites for <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Every Business</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Whether you run a shop in Subhash Bazar or a clinic across town, we build a website that fits your business.
              </p>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {businessTypes.map((type) => (
                <div
                  key={type.label}
                  className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <p className="font-semibold text-gray-900">{type.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Questions</span>
              </h2>
              <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto"></div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <summary className="flex justify-between items-center gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-lg sm:text-xl font-semibold text-gray-900">
                    {faq.question}
                    <span className="text-blue-600 text-2xl transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </main>
    </>
  );
}
