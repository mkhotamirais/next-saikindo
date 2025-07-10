import "./style.css";
import type { Metadata } from "next";
import { PT_Sans, Josefin_Sans } from "next/font/google";
import Header from "./(home-components)/Header";
import Footer from "./(home-components)/Footer";
import { CustomAuthor } from "./types";
import m from "./meta.json";

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
  metadataBase: new URL(m.home.baseUrl),
  title: {
    absolute: "PT. Saikindo Surya Gumiwang - Uniform, Power, and Event Organizer in Bogor", // menimpa semua value yang lain
    default: "PT. Saikindo Surya Gumiwang", // default untuk page ini dan childnya
    template: "%s | PT. Saikindo Surya Gumiwang", // nilai dinamis tergantung childnya
  },
  description:
    "PT. Saikindo Surya Gumiwang offers professional services including custom uniform supply, power solutions, event organizing, and workplace health services in Bogor, Indonesia.",
  keywords: m.home.keywords,
  authors: [
    {
      name: m.home.name,
      role: "Company",
      url: m.home.baseUrl,
      image: "https://saikindo.co.id/logo.png",
      contact: {
        email: "office.saikindosg@gmail.com",
        phone: "+628111775774",
      },
      address: m.home.address,
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
  creator: m.home.name,
  publisher: m.home.name,
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
        <link rel="icon" href="/logos/ssg-logo-square-favicon.png" type="image/png" />
      </head>
      <body className={`${ptSans.variable} ${josefinSans.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
