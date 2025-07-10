import Image from "next/image";
import React from "react";
import { clientPhotos } from "../content";
import Link from "next/link";

export default function SectionClients() {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container">
        <h2 className="h2 !text-gray-800 mb-8 text-center">Our Clients</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {clientPhotos.splice(0, 12).map((item, index) => (
            <Image
              key={index}
              src={item}
              width={300}
              height={300}
              alt="saikindo clients"
              className="bg-white rounded-lg object-contain object-center h-24 w-full"
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/clients" className="btn !py-3 !px-5">
            All Clients
          </Link>
        </div>
      </div>
    </section>
  );
}
