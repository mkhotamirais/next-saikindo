"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { logos as l } from "@/app/(root)/content";

const logoUrls = [l.logoSsg, l.logoUniform, l.logoEvent, l.logoPower];

export default function SectionAbout() {
  return (
    <section className="py-16 bg-primary-bg text-white">
      <div className="container grid lg:grid-cols-2 gap-8">
        <div className="relative order-2 lg:order-1">
          <Image
            src={"/images/about.jpg"}
            width={500}
            height={500}
            alt="building"
            className="object-cover object-center rounded-lg w-full h-72"
          />
          <div className="absolute top-5 flex">
            {logoUrls.map((url, i) => (
              <Image
                key={i}
                src={url}
                width={100}
                height={100}
                alt="saiki logo"
                className="z-10 w-16 h-16 rounded-full mx-2"
              />
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-4">
          <h2 className="h2">About Us</h2>
          <p>
            PT. Saikindo Surya Gumiwang is a company that professional and reliable in the field of cleaning and
            building maintenance, power service, FTTH material supply, uniform, and event organizers.
          </p>
          <p>
            PT. Saikindo Surya Gumiwang has a focus on delivering the right solution for all types of related needs
            building cleaning and maintenance, electrical service, provision FTTH materials, uniform, and event
            organizers.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/about" className="btn">
              More About Us
            </Link>
            <a href="" className="btn2">
              <FaPlay />
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
