import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Saikindo",
  description: "Description about Saikindo",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
