import React from "react";
import Heroes from "../(home-components)/Heroes";
import { productsServices } from "../content";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";

export default function ProductsServices() {
  return (
    <>
      <Heroes title="Products & Services" />
      <section className="py-16 bg-tertiary-bg text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-4">
            {productsServices.map((item, index) => (
              <div key={index} className="flex flex-col justify-center items-center text-center space-y-3">
                <Image
                  src={item.image}
                  width={500}
                  height={500}
                  alt={item.title}
                  className="bg-white rounded-full p-4 object-cover object-center w-42 h-42"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
                <div className="flex gap-2 flex-col">
                  <Link href={item.href} className="btn !px-8">
                    Visit
                  </Link>
                  <a href="#" className="btn2">
                    <FaPlay />
                    Watch Video
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
