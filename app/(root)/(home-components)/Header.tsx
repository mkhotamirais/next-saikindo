"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaWhatsapp, FaXmark } from "react-icons/fa6";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Products & Services", url: "/products-services" },
  { label: "Clients", url: "/clients" },
  { label: "Gallery", url: "/gallery" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <header className="h-16 sticky top-0 z-50 bg-primary-bg text-white">
        <div className="container flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center">
            {menu.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className={`${
                  item.url === pathName ? "text-primary" : ""
                } font-josefin-sans px-3 py-2 text-sm hover:text-primary`}
              >
                {item.label}
              </Link>
            ))}
            <a href="#" className="btn ml-4 flex items-center gap-2">
              <FaWhatsapp className="text-xl" />
              Contact Us
            </a>
          </nav>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="btn-icon flex md:hidden text-primary"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </header>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        style={{ overflow: "hidden" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        className="relative flex md:hidden z-50"
      >
        <nav className="flex flex-col w-full p-2 border-b border-gray-500 bg-secondary-bg text-white text-sm">
          {menu.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              onClick={() => setIsOpen(false)}
              className={`${
                item.url === pathName ? "text-primary" : ""
              } font-josefin-sans w-full hover:text-primary hover:bg-charcoal py-2 px-3 rounded-md`}
            >
              {item.label}
            </Link>
          ))}
          <a href="#" className="btn flex items-center justify-center mt-4 gap-2">
            <FaWhatsapp className="text-xl" />
            Contact Us
          </a>
        </nav>
      </motion.div>
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}
