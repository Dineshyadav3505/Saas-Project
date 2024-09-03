import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import AdSense from "@/components/AdSense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF EDITOR",
  description: "PDF EDITOR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <head>
          <AdSense pId="ca-pub-9950312208283324" />
        </head>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
