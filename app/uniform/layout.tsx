import "./style.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Saikindo Uniform - Seragam Saikindo",
  description: "Description Saikindo Uniform",
};

export default function UniformLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-saiki-uniform-favicon.png" type="image/png" />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
