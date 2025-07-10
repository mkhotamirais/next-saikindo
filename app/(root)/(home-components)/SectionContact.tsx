"use client";

import Link from "next/link";
import React from "react";
import { FaPaperPlane, FaWhatsapp } from "react-icons/fa6";
import { contacts as c } from "@/app/(root)/content";

const contactMenu = [
  { title: "Uniform", href: c.wa_uniform.url, label: c.wa_uniform.label },
  { title: "Power", href: c.wa_power.url, label: c.wa_power.label },
  { title: "Event Organier", href: c.wa_event.url, label: c.wa_event.label },
];

export default function SectionContact() {
  return (
    <section className="bg-[url('/images/about.jpg')] bg-cover bg-center bg-fixed bg-transparent">
      <div className="bg-gradient-to-t from-black/80 to-black/20 py-16">
        <div className="container">
          <div>
            <h2 className="h2 text-center mb-8">Contact Us</h2>
          </div>
          <p className="text-center text-white">
            You can contact us directly via email at{" "}
            <Link href={c.email.url} className="text-primary">
              {c.email.label}
            </Link>
            , fill out the form below, or get in touch with us through WhatsApp.
          </p>
          <div className="flex flex-col lg:flex-row gap-2 mt-8">
            <div className="flex-1">
              <form className="border rounded-lg p-4 space-y-3 h-full bg-white/70">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" placeholder="Your Name" className="input" />
                  <input type="email" placeholder="Your Email" className="input" />
                </div>
                <input type="text" placeholder="Subject" className="input" />
                <textarea rows={4} placeholder="Message" className="w-full border rounded border-gray-500" />
                <button type="submit" className="btn flex gap-2 items-center">
                  <FaPaperPlane className="mr-2" />
                  Submit
                </button>
              </form>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row gap-2">
              <div className="flex-1 flex flex-col justify-evenly border rounded-lg p-3 text-center bg-white/70">
                {contactMenu.map((item, i) => (
                  <div key={i} className="mb-1">
                    <h3 className="font-josefin text-lg font-semibold mb-2">{item.title}</h3>
                    <button type="button" className="px-0">
                      <Link href={item.href} className="flex items-center gap-2 hover:underline">
                        <FaWhatsapp size={20} />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex-1 border rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7837369608883!2d106.8144100744145!3d-6.548967364019989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5cefbdcff11%3A0x8478b2957beb67a9!2sPT%20SAIKINDO%20SURYA%20GUMIWANG!5e0!3m2!1sen!2sid!4v1726520845525!5m2!1sen!2sid"
                  width="200"
                  height="200"
                  className="w-full h-48 sm:h-full"
                  // style="border:0;"
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
