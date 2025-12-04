export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Surfing Point
            </h3>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Your trusted partner for all your service needs. We provide comprehensive solutions for travel ticketing, insurance, digital signature, passport services, and online works.
            </p>
            <div className="flex space-x-4">
              <a href="tel:8979914623" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Phone</span>
                📞
              </a>
              <a href="mailto:info@surfingpoint.com" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                ✉️
              </a>
              <a href="https://maps.app.goo.gl/QHQmF5MB3FRYUYxG9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Location</span>
                📍
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Travel Ticketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Insurance Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Signature</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Passport Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Online Works</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <a href="tel:8979914623" className="hover:text-white transition-colors">8979914623</a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <a href="mailto:info@surfingpoint.com" className="hover:text-white transition-colors">info@surfingpoint.com</a>
              </div>
              <div className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <div>
                  <div>Ashok Ki Lath, Subhash Bazar,</div>
                  <div>Meerut, Uttar Pradesh,</div>
                  <div>250002</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm sm:text-base mb-4 md:mb-0">
              © 2024 Surfing Point. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
