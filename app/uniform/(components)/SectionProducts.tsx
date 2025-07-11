"use client";

import Link from "next/link";
import React, { useState } from "react";
import { productMenu } from "../content";
import Image from "next/image";
import { transformUrlPath } from "@/lib/utils";

export default function SectionProducts() {
  const [isLoading, setIsLoading] = useState(true);

  const updatedProductMenu = productMenu
    .map((item) => ({
      ...item,
      href: transformUrlPath(item.href),
    }))
    .filter((item) => item.href)
    .slice(0, 12);

  return (
    <section id="products" className="py-16 scroll-mt-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="h2">Products</h2>
          <Link href="/uniform/products" className="text-yellow-600 hover:underline text-sm">
            All Products
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-8">
          {updatedProductMenu.map((item, i) => (
            <figure key={i} className={`${isLoading ? "animate-pulse" : ""}`}>
              <Image
                src={item.href ?? ""}
                alt={item.label ?? ""}
                width={600}
                height={600}
                className="w-full h-full rounded"
                placeholder="blur"
                blurDataURL="/logos/logo-saiki-uniform-fit.png"
                onLoad={() => setIsLoading(false)}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
