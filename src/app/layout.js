import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://surfingpoint.com"),
  title: {
    default: "Surfing Point Meerut - Travel Ticketing, Insurance, Digital Signature & Passport Services",
    template: "%s | Surfing Point Meerut",
  },
  description: "Surfing Point Meerut - Your trusted partner for travel ticketing, insurance services, digital signature (DSC), passport applications, visa assistance, and all types of online works. Located at Ashok Ki Lath, Subhash Bazar, Meerut. Call +91 8979914623.",
  keywords: [
    "Surfing Point Meerut",
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
    title: "Surfing Point Meerut - Travel, Insurance, Digital Signature & Passport Services",
    description: "Professional travel ticketing, insurance, digital signature, passport services, and online works in Meerut. Your trusted partner for all service needs. Call +91 8979914623.",
    url: "https://surfingpoint.com",
    siteName: "Surfing Point",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surfing Point - Travel, Insurance, Digital Signature & Passport Services in Meerut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfing Point Meerut - Complete Service Solutions",
    description: "Travel ticketing, insurance, digital signature, passport services & online works in Meerut. Call +91 8979914623.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://surfingpoint.com",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Meerut",
    "geo.position": "28.9845;77.7064",
    "ICBM": "28.9845, 77.7064",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
