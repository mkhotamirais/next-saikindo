import Footer from "./(components)/Footer";
import Header from "./(components)/Header";
import "./style.css";
import type { Metadata } from "next";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });
import { Inter, Heebo } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Saikindo Event",
  description: "Description Saikindo Event",
};

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-saiki-event-favicon.png" type="image/png" />
      </head>
      <body
        className={`${inter.variable} ${heebo.variable} antialiased flex flex-col min-h-screen bg-slate-900 text-white font-inter`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
