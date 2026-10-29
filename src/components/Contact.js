import { site, fullAddress } from '@/lib/site';
import WhatsApp from '@/components/WhatsApp';

export default function Contact() {
  const contactInfo = [
    {
      icon: "📞",
      title: "Phone",
      value: site.phone.display,
      link: site.phone.href
    },
    {
      icon: "✉️", 
      title: "Email",
      value: site.email.display,
      link: site.email.href
    },
    {
      icon: "📍",
      title: "Address", 
      value: fullAddress,
      link: site.mapsUrl
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-linear-to-br from-gray-800 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">Touch</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to get started? Contact us today for all your service needs.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-indigo-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl h-[220px] p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl mb-6">{info.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    target={info.title === "Address" ? "_blank" : undefined}
                    rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <div className="break-words">{info.value}</div>
                  </a>
                ) : (
                  <p className="text-gray-300">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <WhatsApp />
      </div>
    </section>
  );
}
