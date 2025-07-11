import React from "react";
import Heroes from "../(components)/Heroes";

export default function MoreInfo() {
  return (
    <>
      <Heroes title="More Info" />
      <section className="py-12">
        <div className="container">
          <article className="space-y-4 leading-relaxed max-w-2xl">
            <div>
              <h2 className="h2 mb-2">Design Example</h2>
              <p>
                Explore various design samples, including modern, minimalist, and creative layouts, to find inspiration
                for your project. Each example showcases versatility and attention to detail, helping you choose the
                perfect style.
              </p>
            </div>
            <div>
              <h2 className="h2 mb-2">How to Order</h2>
              <p>
                Learn the step-by-step process to place an order, from choosing your design to completing the payment,
                ensuring a seamless experience. We provide detailed guidance to make the process quick and hassle-free.
              </p>
            </div>
            <div>
              <h2 className="h2 mb-2">Material</h2>
              <p>
                Discover the range of materials available, from premium quality fabrics to eco-friendly options,
                ensuring durability and style. Each material is carefully selected to meet the highest standards of
                quality and comfort.
              </p>
            </div>
            <div>
              <h2 className="h2 mb-2">Standard Size</h2>
              <p>
                Check the standard dimensions and available sizes for various products, ensuring they meet your specific
                requirements. Our sizing guidelines help you find the perfect fit for your project.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
