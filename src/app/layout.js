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
  title: "Surfing Point - Travel Ticketing, Insurance, Digital Signature & Passport Services",
  description: "Professional travel ticketing, insurance services, digital signature solutions, passport applications, and comprehensive online services. Visit Surfing Point for all your service needs with expert guidance and reliable support.",
  keywords: "travel ticketing, insurance services, digital signature, passport services, online services, travel booking, health insurance, auto insurance, document signing, visa assistance, business services",
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
    title: "Surfing Point - Complete Service Solutions",
    description: "Professional travel ticketing, insurance, digital signature, passport services, and online works. Your trusted partner for all service needs.",
    url: "https://surfingpoint.com",
    siteName: "Surfing Point",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surfing Point - Complete Service Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfing Point - Complete Service Solutions",
    description: "Professional travel ticketing, insurance, digital signature, passport services, and online works.",
    images: ["/twitter-image.jpg"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563eb",
  alternates: {
    canonical: "https://surfingpoint.com",
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
