"use client";

import { transformUrlPath } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { productMenu } from "../content";
import Image from "next/image";

const dataPerPage = 12;

const updatedProductMenu = productMenu
  .map((item) => ({
    ...item,
    href: transformUrlPath(item.href),
  }))
  .filter((item) => item.href);

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);

  const cats = Array.from(new Set(productMenu.map((item) => item.cat)));
  const [selectedCat, setSelectedCat] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData =
    selectedCat === "all" ? updatedProductMenu : updatedProductMenu.filter((item) => item.cat === selectedCat);

  const totalPages = Math.ceil(filteredData.length / dataPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * dataPerPage, currentPage * dataPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCat(cat);
    setCurrentPage(1); // reset ke halaman pertama saat ganti kategori
  };

  return (
    <>
      <section className="bg-[url('https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center text-white">
        <div className="bg-gradient-to-b from-black/50 to-black/50 pt-32 pb-12">
          <div className="container grid lg:grid-cols-2 gap-8 place-items-center">
            <div className="max-w-lg mx-auto space-y-6 flex flex-col items-start text-left sm:items-center sm:text-center lg:text-left lg:items-start">
              <h1 className="h1">
                Our Uniform Stock is Always <span className="text-primary">Ready to Order</span>
              </h1>
              <div className="flex flex-col lg:flex-row w-fit text-center gap-2">
                <a href="#" className="btn inline-block">
                  Order Now
                </a>
                <Link
                  href="/uniform/more-info"
                  className="btn inline-block !bg-transparent border !border-primary !text-primary"
                >
                  How to Order
                </Link>
              </div>
            </div>
            <div className="h-64 rounded overflow-hidden">
              <h2 className="text-2xl font-semibold mb-4 text-center">Here are our {cats.length} uniform categories</h2>
              <div className="flex pb-12 items-center flex-col gap-2 h-64 w-full overflow-y-scroll">
                <button
                  type="button"
                  className="w-full sm:w-72 border rounded-full py-2 px-3 border-primary text-primary hover:bg-primary hover:text-gray-800 transition-all"
                  onClick={() => handleCategoryChange("all")}
                >
                  All
                </button>
                {cats.map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`${
                      selectedCat === item ? "bg-gradient-to-tr from-primary via-primary/50 to-primary" : ""
                    } w-full sm:w-72 border rounded-full py-2 px-3 border-primary text-primary hover:bg-primary hover:text-gray-800 transition-all`}
                    onClick={() => handleCategoryChange(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="h2 capitalize mb-6">
            <span className="text-yellow-600">{selectedCat === "all" ? "All Products" : selectedCat}</span> Uniforms
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {paginatedData.map((item, i) => (
              <figure key={i} className={`${isLoading ? "animate-pulse" : ""} rounded shadow-lg`}>
                <Image
                  src={item.href ?? ""}
                  alt={item.label ?? ""}
                  width={300}
                  height={300}
                  className="w-full h-full"
                  placeholder="blur"
                  blurDataURL="/logos/logo-saiki-uniform.jpg"
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                />
              </figure>
            ))}
          </div>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center items-center gap-2">
              <button
                type="button"
                className="btn px-4 py-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === i + 1 ? "bg-primary text-white" : "hover:bg-primary hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                className="btn px-4 py-2"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
