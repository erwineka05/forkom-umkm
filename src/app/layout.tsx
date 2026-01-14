import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import font Google bawaan Next.js
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Konfigurasi Font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Katalog UMKM Umbulmartani",
  description: "Wadah kolaborasi pelaku usaha mikro, kecil, dan menengah di Umbulmartani.",
  icons: {
    icon: '/images/icons/logo.png', // Ganti favicon disini
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.className} bg-white text-gray-600 antialiased flex flex-col min-h-screen`}>
        
        {/* Navbar (Header) */}
        <Navbar />

        {/* Konten Utama */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}