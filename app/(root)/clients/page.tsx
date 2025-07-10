import React from "react";
import Heroes from "../(home-components)/Heroes";
import Image from "next/image";
import { clientPhotos } from "../content";

export default function Clients() {
  return (
    <>
      <Heroes title="Our Clients" />
      <section className="py-16 bg-white text-gray-800">
        <div className="container">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {clientPhotos.map((item, index) => (
              <Image
                key={index}
                src={item}
                width={300}
                height={300}
                alt="saikindo clients"
                className="bg-white rounded-lg object-contain object-center h-24 w-full"
                priority
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
