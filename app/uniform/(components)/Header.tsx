"use client";

import React, { useState } from "react";
import LogoUniform from "./LogoUniform";
import { FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Home", url: "/uniform" },
  { label: "Products", url: "/uniform/products" },
  { label: "Clients", url: "/clients" },
  { label: "More Info", url: "/uniform/more-info" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <header className="h-18 fixed top-0 left-0 right-0 w-full z-40 backdrop-blur bg-black/80 text-white">
        <div className="container flex items-center justify-between">
          <LogoUniform />
          <nav className="hidden md:flex">
            {menu.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                className={`${pathName === item.url ? "text-primary" : ""} px-3 py-2 text-gray-400 hover:text-primary`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a href="#" className="btn hidden md:flex">
            Contact Us
          </a>
          <button
            type="button"
            className="p-3 text-xl flex md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="menu"
          >
            <FaBars />
          </button>
        </div>
      </header>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        } bg-black/50 text-white fixed inset-0 z-50 transition-all duration-300`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } bg-primary-bg absolute h-full top-0 bottom-0 right-0 w-64 ease-in-out transition-transform duration-300`}
        >
          <div className="p-3">
            <div className="flex items-start justify-between">
              <LogoUniform />
              <button type="button" className="p-2 text-lg" onClick={() => setIsOpen(false)} aria-label="close menu">
                <FaXmark />
              </button>
            </div>
            <nav className="flex flex-col p-3 mt-4">
              {menu.map((item, i) => (
                <Link
                  key={i}
                  href={item.url}
                  className={`${
                    pathName === item.url ? "text-primary" : ""
                  } px-3 py-2 text-gray-500 hover:text-primary transition-all border-b`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
