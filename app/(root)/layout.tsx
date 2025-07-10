import "./style.css";
import type { Metadata } from "next";
import { PT_Sans, Josefin_Sans } from "next/font/google";
import Header from "./(home-components)/Header";
import Footer from "./(home-components)/Footer";
import { CustomAuthor } from "./types";

// Importing fonts
const ptSans = PT_Sans({
  subsets: ["latin"],
  variable: "--font-pt-sans",
  display: "swap",
  weight: ["400", "700"],
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saikindo.co.id"),
  title: {
    absolute: "PT. Saikindo Surya Gumiwang - Uniform, Power, Event Organizer, and Health Services in Bogor", // menimpa semua value yang lain
    default: "PT. Saikindo Surya Gumiwang", // default untuk page ini dan childnya
    template: "%s | PT. Saikindo Surya Gumiwang", // nilai dinamis tergantung childnya
  },
  description:
    "PT. Saikindo Surya Gumiwang offers professional services including custom uniform supply, power solutions, event organizing, and workplace health services in Bogor, Indonesia.",
  keywords: [
    "saikindo",
    "uniform",
    "event",
    "power",
    "saikindo surya gumiwang",
    "uniform supplier Bogor",
    "custom uniforms",
    "professional uniforms Bogor",
    "power services Bogor",
    "electrical maintenance Bogor",
    "event organizer Bogor",
    "corporate event organizer",
    "health services Bogor",
    "workplace health and safety solutions",
    "industrial uniforms",
    "FTTH materials",
    "sustainable uniforms",
    "event management Bogor",
  ],
  authors: [
    {
      name: "PT. Saikindo Surya Gumiwang",
      role: "Company",
      url: "https://saikindo.co.id",
      image: "https://saikindo.co.id/logo.png",
      contact: {
        email: "office.saikindosg@gmail.com",
        phone: "+628111775774",
      },
      address: {
        street: "Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara",
        city: "Bogor",
        state: "West Java",
        country: "Indonesia",
      },
      socialProfiles: {
        facebook: "https://facebook.com/saikindo",
        linkedin: "https://linkedin.com/company/saikindo",
      },
      description: "PT. Saikindo Surya Gumiwang specializes in professional cleaning, maintenance, and FTTH services.",
    },
    {
      name: "Tamionweb",
      role: "Web Developer",
      url: "https://tamionweb.my.id",
      image: "https://tamionweb.my.id/logo.svg",
      bio: "I Built dynamic, responsive web applications and created seamless user experiences with efficient code.",
      skills: ["JavaScript", "React", "Next.js", "CSS", "SEO"],
      socialProfiles: {
        linkedin: "https://linkedin.com/in/mkhotami-rais/",
        github: "https://github.com/mkhotamirais",
      },
      contact: {
        email: "tami01.job@gmail.com",
      },
    },
  ] as CustomAuthor[],
  creator: "PT. Saikindo Surya Gumiwang",
  publisher: "PT. Saikindo Surya Gumiwang",
  openGraph: {
    title: "PT. Saikindo Surya Gumiwang - Quality Services You Can Trust",
    description: "Professional cleaning, maintenance, and FTTH services.",
    url: "https://saikindo.co.id",
    siteName: "Saikindo",
    images: [{ url: "/og-image.jpg", alt: "Saikindo" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/ssg-logo-square-32.png" type="image/png" />
      </head>
      <body className={`${ptSans.variable} ${josefinSans.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
