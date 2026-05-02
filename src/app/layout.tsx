import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Armor Bright — Permanent Roofline Lighting",
  description:
    "Premium permanent roofline lighting. Hidden by day. Brilliant by night. Millions of colors, 50+ scenes, app-controlled.",
  metadataBase: new URL("https://armorbright.com"),
  openGraph: {
    title: "Armor Bright — Permanent Roofline Lighting",
    description:
      "Hidden by day. Brilliant by night. Premium permanent roofline lighting designed for luxury homes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Loader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
