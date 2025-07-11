import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "More Uniform Info Saikindo",
  description: "Description More Uniform Info Saikindo",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
