export default function Services() {
  const services = [
    {
      icon: "✈️",
      title: "Travel Ticketing",
      description: "Book flights, hotels, and travel packages with the best deals and reliable service.",
      features: [
        "Domestic & International flights",
        "Hotel reservations", 
        "Travel packages",
        "24/7 customer support"
      ],
      color: "blue"
    },
    {
      icon: "🛡️",
      title: "All Kinds of Insurance",
      description: "Comprehensive insurance solutions to protect what matters most to you.",
      features: [
        "Health insurance",
        "Auto insurance",
        "Life insurance", 
        "Business insurance"
      ],
      color: "green"
    },
    {
      icon: "✍️",
      title: "Digital Signature",
      description: "Secure and legally binding digital signature solutions for all your documents.",
      features: [
        "Document signing",
        "Legal compliance",
        "Secure storage",
        "Quick processing"
      ],
      color: "purple"
    },
    {
      icon: "📘",
      title: "Passport Services",
      description: "Complete passport application and renewal services with expert guidance.",
      features: [
        "New passport applications",
        "Passport renewals",
        "Visa assistance",
        "Document verification"
      ],
      color: "orange"
    },
    {
      icon: "💻",
      title: "All Types of Online Works",
      description: "Comprehensive online services to handle all your digital needs efficiently.",
      features: [
        "Government services",
        "Document processing",
        "Online applications",
        "Digital solutions"
      ],
      color: "teal"
    },
    {
      icon: "🔧",
      title: "Additional Services",
      description: "We offer a wide range of additional services to meet all your requirements.",
      features: [
        "Document attestation",
        "Legal consultations",
        "Business registrations",
        "Custom solutions"
      ],
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-50 to-blue-100 border-blue-200",
      green: "from-green-50 to-green-100 border-green-200", 
      purple: "from-purple-50 to-purple-100 border-purple-200",
      orange: "from-orange-50 to-orange-100 border-orange-200",
      teal: "from-teal-50 to-teal-100 border-teal-200",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-200"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Services</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive solutions for all your service needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(service.color)} border border-opacity-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className="text-5xl mb-6 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-700 mb-6 text-center leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
