import React from "react";
import Heroes from "../(home-components)/Heroes";
import Image from "next/image";
import { activityPhotos } from "../content";

export default function Gallery() {
  return (
    <>
      <Heroes title="Gallery" />
      <section className="relative py-16 bg-tertiary-bg text-white overflow-hidden">
        <div className="absolute -left-10 top-10 size-100 rounded-lg bg-primary opacity-10 rotate-45 z-0"></div>
        <div className="relative container z-10">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {activityPhotos.map((item, index) => (
              <Image
                key={index}
                src={item}
                width={500}
                height={500}
                alt="building"
                className="bg-white rounded-lg object-cover object-center h-48 w-full"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
