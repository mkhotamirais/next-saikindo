import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Services Saikindo",
  description: "Description Products Services Saikindo",
};

export default function ProductsServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
