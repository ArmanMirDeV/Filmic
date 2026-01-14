import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Filmic - Movie Library",
  description:
    "A clean, cinematic movie library to discover, organize, and revisit your favorite films.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-base text-text-primary flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="pt-20 flex-grow w-full max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
