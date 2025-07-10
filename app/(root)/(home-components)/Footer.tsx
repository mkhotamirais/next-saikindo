import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { contacts as c } from "@/app/(root)/content";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaXTwitter, FaYoutube } from "react-icons/fa6";

const footerMenu = [
  {
    title: "Uniform",
    menus: [
      { label: "Portfolio", url: "#" },
      { label: "Our Clients", url: "#" },
      { label: "More Info", url: "#" },
    ],
  },
  {
    title: "Power",
    menus: [
      { label: "Maintenence", url: "#" },
      { label: "General Supply", url: "#" },
      { label: "Fiber Optic and Telecommunication", url: "#" },
    ],
  },
  {
    title: "Event Organizer",
    menus: [
      { label: "Booth Production", url: "#" },
      { label: "Backdrop", url: "#" },
      { label: "Outbond", url: "#" },
      { label: "Gathering", url: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="bg-primary-bg py-12">
        <div className="container grid lg:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Logo />
            <div className="text-sm space-y-3 mt-4">
              <a href={c.maps.url} className="flex hover:text-primary w-fit">
                <address>{c.maps.label}</address>
              </a>
              <a href={c.email.url} className="flex items-center gap-2 hover:text-primary w-fit">
                <FaEnvelope />
                {c.email.label}
              </a>
              <a href={c.wa_all.url} className="flex items-center gap-2 hover:text-primary w-fit">
                <FaWhatsapp />
                {c.wa_all.label}
              </a>
            </div>
          </div>
          <div className="col-span-3 grid md:grid-cols-3 gap-8">
            {footerMenu.map((item, index) => (
              <div key={index}>
                <h3 className="h3 mb-3">{item.title}</h3>
                <div className="">
                  {item.menus.map((menu, index) => (
                    <Link
                      key={index}
                      href={menu.url}
                      className="py-1 text-sm hover:text-primary text-gray-400 block w-fit"
                    >
                      {menu.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-secondary-bg py-4">
        <div className="container flex items-center justify-between">
          <p className="text-xs">Copyright &copy; 2023 PT. Saikindo Surya Gumiwang</p>
          <div className="flex items-center gap-4">
            <FaLinkedin />
            <FaYoutube />
            <FaInstagram />
            <FaXTwitter />
            <FaFacebook />
          </div>
        </div>
      </div>
    </footer>
  );
}
