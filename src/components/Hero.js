export default function Hero() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Main Heading with Enhanced Styling */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Surfing Point
              </span>
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          {/* Enhanced Description */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Your trusted partner for{" "}
            <span className="font-semibold text-blue-600">travel ticketing</span>,{" "}
            <span className="font-semibold text-indigo-600">insurance services</span>,{" "}
            <span className="font-semibold text-purple-600">digital signature</span>,{" "}
            <span className="font-semibold text-green-600">passport services</span>, and{" "}
            <span className="font-semibold text-orange-600">all types of online works</span>.
          </p>

          {/* Enhanced Address Section */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 sm:p-10 mb-12 max-w-4xl mx-auto shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">📍</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Visit Us</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <div className="text-gray-700 text-lg sm:text-xl">
                  <p className="text-2xl font-bold text-gray-900 mb-3">Surfing Point</p>
                  <p className="mb-2">Ashok Ki Lath, Subhash Bazar,</p>
                  <p className="mb-2">Meerut, Uttar Pradesh,</p>
                  <p className="mb-4">250002</p>
                </div>
              </div>
              
              <div className="text-left">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    <a href="tel:+918979914623" className="text-blue-600 font-bold text-lg sm:text-xl hover:text-blue-800 transition-colors">+91 8979914623</a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✉️</span>
                    <a href="mailto:surfingpointmeerut@gmail.com" className="text-blue-600 font-bold text-lg sm:text-xl">
                      surfingpointmeerut@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <a 
                href="https://maps.app.goo.gl/QHQmF5MB3FRYUYxG9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                <span className="text-2xl">🗺️</span>
                Take me there
              </a>
              <p className="text-gray-600 mt-3 text-sm sm:text-base">Click to open in Google Maps</p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-indigo-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-100 rounded-full opacity-25 animate-pulse delay-2000"></div>
    </section>
  );
}
