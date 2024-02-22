import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import WhatsappButton from "./components/WhatsappButton";
import Sidebar from "./components/Sidebar";

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
      <body className={inter.className + " bg-white"}>
        <Navbar />
        <Sidebar />
        <WhatsappButton />
        {children}
      </body>
    </html>
  );
}
