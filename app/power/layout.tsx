import "./style.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "A simple Next.js application",
};

export default function PowerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo-saiki-power-favicon.png" type="image/png" />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
