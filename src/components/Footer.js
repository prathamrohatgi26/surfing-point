import Link from 'next/link';
import { site, whatsappLink } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <p className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
              Surfing Point
            </p>
            <p className="text-gray-400 mb-6 text-lg leading-relaxed">
              Your trusted partner for all your service needs. We provide comprehensive solutions for travel ticketing, insurance, digital signature, passport services, online works, and websites for businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/#services" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300">
                <span>✈️</span> Travel
              </a>
              <a href="/#services" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300">
                <span>🛡️</span> Insurance
              </a>
              <a href="/#services" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300">
                <span>✍️</span> Digital Signature
              </a>
              <a href="/#services" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300">
                <span>📘</span> Passport
              </a>
              <a href="/#services" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300">
                <span>💻</span> Online Works
              </a>
              <Link href="/website-development" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-300">
                <span>🌐</span> Websites
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Our Services</h2>
            <ul className="space-y-3">
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Travel Ticketing</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Insurance Services</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Digital Signature</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Passport Services</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Online Works</a></li>
              <li><Link href="/website-development" className="text-gray-400 hover:text-white transition-colors">Website Development</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Contact Info</h2>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <a href={site.phone.href} className="hover:text-white transition-colors">{site.phone.display}</a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">💬</span>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp us</a>
              </div>
              <div className="flex items-center">
                <span className="mr-3">✉️</span>
                <a href={site.email.href} className="hover:text-white transition-colors break-all">{site.email.display}</a>
              </div>
              <div className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <div>{site.address.street},</div>
                  <div>{site.address.city}, {site.address.region},</div>
                  <div>{site.address.postalCode}</div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm sm:text-base mb-4 md:mb-0">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="/#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
