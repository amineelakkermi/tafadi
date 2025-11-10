import type { Metadata } from "next";
import { Cairo, Poppins } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/ContactIcons";
import { headers } from "next/headers";

export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
})

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})


export const metadata: Metadata = {
  title: "تفادي",
  description: "نظام تفادي لحماية متجرك من الطلبات الغير جادة بسهولة وذكاء",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieHeader = (await headers()).get("cookie") || "";
  const cookieLocale = cookieHeader
    .split("; ")
    .find((c) => c.startsWith("locale="))
    ?.split("=")[1];
  const locale = cookieLocale === "en" ? "en" : "ar";
  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontClass = locale === "en" ? poppins.className : cairo.className


  return (
    <html lang={locale} dir={dir}>
      <body className={`${fontClass} ${cairo.variable} antialiased`}>
        <Navbar locale={locale} />
        {children}
        <WhatsappButton />
        <Footer locale={locale} />
      </body>
    </html>
  );
}
