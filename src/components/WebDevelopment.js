import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';

// `variant="page"` is used on /website-development, where the page hero already covers the main heading.
export default function WebDevelopment({ showDetailsLink = false, variant = "home" }) {
  const offerings = [
    {
      icon: "🚀",
      title: "Landing Pages",
      description: "A single, focused page that tells customers what you do and gets them to call or message you."
    },
    {
      icon: "🏪",
      title: "Business Websites",
      description: "Multi-page websites for shops, clinics, coaching centres, offices and service businesses."
    },
    {
      icon: "📱",
      title: "Mobile-Friendly Design",
      description: "Fast, clean layouts that look great on every phone, tablet and computer."
    },
    {
      icon: "📍",
      title: "Google & Local SEO",
      description: "Set up so customers in Meerut and nearby can find you on Google Search and Maps."
    },
    {
      icon: "💬",
      title: "WhatsApp & Call Buttons",
      description: "One-tap WhatsApp chat, call and directions buttons so enquiries come straight to you."
    },
    {
      icon: "🌐",
      title: "Domain & Hosting Setup",
      description: "We help you get your own .com / .in domain and take your website live."
    }
  ];

  const steps = [
    { title: "Tell us about your business", description: "Share your services, photos and contact details." },
    { title: "We design & build", description: "We create your website and share it with you for review." },
    { title: "Go live", description: "Your website goes online and starts bringing in customers." }
  ];

  return (
    <section id="websites" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          {variant === "page" ? (
            <>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                What&apos;s <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Included</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Everything your business needs to get found online and turn visitors into customers
              </p>
            </>
          ) : (
            <>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Websites & <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Landing Pages</span> for Your Business
              </h2>
              <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Website design in Meerut — take your business online with a professional website that brings in new customers
              </p>
            </>
          )}
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="bg-linear-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{offering.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{offering.title}</h3>
              <p className="text-gray-700 leading-relaxed">{offering.description}</p>
            </div>
          ))}
        </div>

        {showDetailsLink && (
          <div className="text-center mt-10">
            <Link
              href="/website-development"
              className="inline-block text-blue-600 font-semibold text-lg hover:text-indigo-600 hover:translate-x-1 transition-all duration-300"
            >
              See full details on our website design service →
            </Link>
          </div>
        )}

        {/* How it works + CTA */}
        <div className="mt-16 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-white">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-10">How It Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

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
              className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-50 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span className="text-2xl">📞</span>
              Call {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
