import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery Saikindo",
  description: "Description Gallery Saikindo",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
