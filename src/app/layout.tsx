import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nectar",
  description:
    "Integrity Drives Innovation Builds Trust Lasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full bg-gradient-to-br from-sky-50 via-blue-100 to-cyan-100 antialiased`}
      >
        <div className="h-20"></div>
        <Navbar />
        {children}
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
