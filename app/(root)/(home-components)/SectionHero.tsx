"use client";

import React from "react";
import { HeroFlipText } from "./HeroFlipText";
import Carousel from "@/components/Carousel";
import Link from "next/link";

const carouselData = [
  { label: "", description: "", image: "/images/carousel1.jpg" },
  { label: "", description: "", image: "/images/carousel2.jpg" },
  { label: "", description: "", image: "/images/carousel3.jpg" },
  { label: "", description: "", image: "/images/carousel4.jpg" },
  { label: "", description: "", image: "/images/carousel5.jpg" },
  { label: "", description: "", image: "/images/carousel6.jpg" },
];

export default function SectionHero() {
  return (
    <section className="py-16 relative bg-secondary-bg text-white">
      <div className="absolute left-20 top-20 size-36 rounded-full bg-primary opacity-20 blur-3xl"></div>
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="space-y-4 text-left md:text-center lg:text-left">
          <h1 className="font-josefin-sans text-4xl lg:text-5xl font-bold">
            Your Complete Solution for
            <span className="text-primary">
              <HeroFlipText />
            </span>
          </h1>
          <p>
            We focus on delivering the right solutions for all types of related needs, including building cleaning and
            maintenance, electrical services, FTTH material provision, uniforms, and event organization.
          </p>
          <Link href="/products" className="btn !py-3 !px-5 !text-base inline-block">
            Our Products
          </Link>
        </div>

        <div className="relative w-full h-72 lg:h-80">
          <Carousel carouselData={carouselData} />
        </div>
      </div>
    </section>
  );
}
