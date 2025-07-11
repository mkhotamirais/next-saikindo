import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Uniform Saikindo",
  description: "Description Products Uniform Saikindo",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
