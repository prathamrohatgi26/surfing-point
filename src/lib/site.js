// Single source of truth for business details used across the site, metadata and JSON-LD.
export const site = {
  name: "Surfing Point",
  url: "https://www.surfingpoint.in",
  phone: {
    display: "+91 8979914623",
    href: "tel:+918979914623",
    e164: "+918979914623",
  },
  email: {
    display: "surfingpointmeerut@gmail.com",
    href: "mailto:surfingpointmeerut@gmail.com",
  },
  whatsapp: {
    number: "918979914623",
    defaultMessage: "Hi Surfing Point, I'd like to know more about your services.",
  },
  address: {
    street: "Ashok Ki Lath, Subhash Bazar",
    city: "Meerut",
    region: "Uttar Pradesh",
    postalCode: "250002",
    country: "IN",
  },
  mapsUrl: "https://maps.app.goo.gl/QHQmF5MB3FRYUYxG9",
  geo: { latitude: "28.9845", longitude: "77.7064" },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "19:00",
    display: "Mon–Sat, 9 AM – 7 PM",
  },
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export function whatsappLink(message = site.whatsapp.defaultMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
