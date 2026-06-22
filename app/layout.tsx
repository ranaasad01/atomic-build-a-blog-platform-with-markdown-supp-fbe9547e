import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Inkwell — A Modern Blog Platform",
    template: "%s | Inkwell",
  },
  description:
    "Inkwell is a clean, minimal blog platform with full markdown support, syntax highlighting, and tag-based browsing.",
  keywords: ["blog", "markdown", "writing", "articles", "technology"],
  authors: [{ name: "Inkwell Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inkwell.blog",
    siteName: "Inkwell",
    title: "Inkwell — A Modern Blog Platform",
    description:
      "Inkwell is a clean, minimal blog platform with full markdown support, syntax highlighting, and tag-based browsing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkwell — A Modern Blog Platform",
    description:
      "Inkwell is a clean, minimal blog platform with full markdown support, syntax highlighting, and tag-based browsing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}