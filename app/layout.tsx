import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomepageNavbar from "@/components/shared/HomepageNavbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veilcode Agency",
  description: "We help businesses design high-performing websites build scalable web applications, launch profitable, ad campaigns, and unlock insights through data analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="max-w-400 mx-auto">
          <HomepageNavbar />
          {children}
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
