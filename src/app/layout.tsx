import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import WhatsappButton from "./components/WhatsappButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crystaline Water Engineers: Crystal-Clear Water Treatment Solutions",
  description:
    "**Get clean, safe, and reliable water with Crystaline Water Engineers.** We offer expert guidance on water treatment plant selection, complete customization, lifetime maintenance, and in-house manufacturing for high-quality, affordable plants. Ideal for businesses, residences, industries, and municipalities. Visit our website or contact us today for a free consultation.",
  keywords:
    "water treatment, water treatment plant, water purification, water filtration, custom water treatment, water treatment plant maintenance, water treatment plant manufacturer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto md:max-w-[85%] my-10">
          <Navbar />
          <WhatsappButton />
          {children}
        </div>
      </body>
    </html>
  );
}
