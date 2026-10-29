import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Surfing Point Meerut | Travel, Insurance, DSC & Websites",
    template: "%s | Surfing Point Meerut",
  },
  description: "Travel tickets, insurance, digital signature (DSC), passport help, online works and business websites in Subhash Bazar, Meerut. Call +91 8979914623.",
  keywords: [
    "Surfing Point Meerut",
    "website development Meerut",
    "landing page design Meerut",
    "business website Meerut",
    "website design Meerut",
    "web designer Meerut",
    "website designing company Meerut",
    "website for small business Meerut",
    "landing page for business",
    "mobile friendly website design",
    "travel ticketing Meerut",
    "flight booking Meerut",
    "insurance services Meerut",
    "health insurance Meerut",
    "auto insurance Meerut",
    "life insurance Meerut",
    "digital signature Meerut",
    "DSC Meerut",
    "passport services Meerut",
    "passport application Meerut",
    "visa assistance Meerut",
    "online services Meerut",
    "document attestation Meerut",
    "business registration Meerut",
    "travel agent Meerut",
    "insurance agent Meerut",
    "Subhash Bazar Meerut services",
    "online works Meerut",
    "government services Meerut",
  ],
  authors: [{ name: "Surfing Point" }],
  creator: "Surfing Point",
  publisher: "Surfing Point",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Surfing Point Meerut - Travel, Insurance, DSC, Passport & Website Design",
    description: "Professional travel ticketing, insurance, digital signature, passport services, online works, and website & landing page design for businesses in Meerut. Your trusted partner for all service needs. Call +91 8979914623.",
    url: site.url,
    siteName: "Surfing Point",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfing Point Meerut - Travel, Insurance, DSC, Passport & Website Design",
    description: "Travel ticketing, insurance, digital signature, passport services, online works & business websites in Meerut. Call +91 8979914623.",
  },
  alternates: {
    canonical: site.url,
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Meerut",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    "ICBM": `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
