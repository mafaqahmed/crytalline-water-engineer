import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocalBusiness, WithContext } from "schema-dts";
import "./globals.css";

import Navbar from "./components/Navbar";
import WhatsappButton from "./components/WhatsappButton";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

import constants from "./contants";

export const metadata: Metadata = {
  title: `${constants.metadata.businessName}: Crystal-Clear Water Treatment Solutions`,
  description: `**Get clean, safe, and reliable water with ${constants.metadata.businessName}.** We offer expert guidance on water treatment plant selection, complete customization, lifetime maintenance, and in-house manufacturing for high-quality, affordable plants. Ideal for businesses, residences, industries, and municipalities. Visit our website or contact us today for a free consultation.`,
  keywords:
    "water treatment, water treatment plant, water purification, water filtration, custom water treatment, water treatment plant maintenance, water treatment plant manufacturer",
};

const jsonLd: WithContext<LocalBusiness> = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rawalpindi",
    addressRegion: "Dheri Hassanabad, Rawalpindi",
    streetAddress: "First floor, Zafar Plaza near chaklala component hospital",
  },
  description: `Get clean, safe, and reliable water with ${constants.metadata.businessName}. We offer expert guidance on water treatment plant selection, complete customization, lifetime maintenance, and in-house manufacturing for high-quality, affordable plants. Ideal for businesses, residences, industries, and municipalities. Visit our website or contact us today for a free consultation.`,
  name: constants.metadata.businessName,
  telephone: constants.metadata.businessPhone,
  url: constants.metadata.businessUrl,
  openingHours: ["Mo-Sa 8:00-18:00"],
  areaServed: {
    "@type": "Country",
    name: "Pakistan",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Water Filteration Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Domestic and Industrial Water Filteration Plant",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Domestic Water Filteration Plant",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Industrial Water Filteration Plant",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Multimedia Filter Plant",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Multimedia Filter Plant",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Water Softner Plant",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Water Softner Plant",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Reverse Osmosis System Supplies and Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Reverse Osmosis System Supplies",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Reverse Osmosis System Services",
            },
          },
        ],
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
        />
        <Navbar />
        <Sidebar />
        <WhatsappButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
