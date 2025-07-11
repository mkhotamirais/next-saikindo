"use client";

import React from "react";

export default function SectionHero() {
  return (
    <section className="!bg-secondary-bg flex items-center justify-center text-white pt-32 pb-16">
      <div className="max-w-4xl mx-auto text-left md:text-center px-3 flex flex-col items-start md:items-center space-y-8">
        <h1 className="h1">Find the Perfect Uniform for Style and Function</h1>
        <p className="leading-relaxed text-gray-400">
          Discover our range of high-quality wear packs and shirts, thoughtfully designed to combine style, comfort, and
          functionality. Perfect for workouts, outdoor adventures, or casual wear, our collection ensures you stay
          confident and comfortable in every activity.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="#products" className="btn">
            Our Products
          </a>
          <a href="" className="btn !bg-transparent !text-white border border-primary !hover:text-primary">
            Profile Video
          </a>
        </div>
      </div>
    </section>
  );
}
