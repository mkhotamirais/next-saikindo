import "./style.css";
import type { Metadata } from "next";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
