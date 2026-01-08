export default function About() {
  const features = [
    {
      icon: "⚡",
      title: "Fast & Reliable",
      description: "Quick processing and reliable service delivery for all your requirements."
    },
    {
      icon: "🎯", 
      title: "Expert Guidance",
      description: "Professional expertise and guidance throughout your service journey."
    },
    {
      icon: "🤝",
      title: "Customer Support", 
      description: "Dedicated customer support to assist you at every step of the process."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Surfing Point</span>?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are committed to providing exceptional service and support for all your needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl sm:text-5xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{feature.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-lg text-gray-700">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-2">10+</div>
              <div className="text-lg text-gray-700">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-lg text-gray-700">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
