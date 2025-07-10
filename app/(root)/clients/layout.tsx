import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients Saikindo",
  description: "Description Clients Saikindo",
};

export default function ClientsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
