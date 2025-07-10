"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { activityPhotos } from "../content";

export default function SectionActivities() {
  return (
    <section className="relative py-16 bg-gray-300 !text-gray-800 overflow-hidden">
      <div className="absolute -left-10 top-10 size-100 rounded-lg bg-primary opacity-10 rotate-45 z-0"></div>
      <div className="relative container z-10">
        <h2 className="h2 !text-gray-800 mb-8 text-center">Our Activities</h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {activityPhotos.slice(0, 12).map((item, index) => (
            <Image
              key={index}
              src={item}
              width={500}
              height={500}
              alt="saikindo activities"
              className="bg-white rounded-lg object-cover object-center h-48 w-full"
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/gallery" className="btn !py-3 !px-5">
            All Activities
          </Link>
        </div>
      </div>
    </section>
  );
}
