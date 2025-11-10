import type { Metadata } from "next";
import { Cairo } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactIcons from "@/components/ContactIcons";

export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "تفادي",
  description: "نظام تفادي لحماية متجرك من الطلبات الغير جادة بسهولة وذكاء",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${cairo.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ContactIcons />
        <Footer />
      </body>
    </html>
  );
}
