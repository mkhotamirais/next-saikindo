import Link from "next/link";
import React from "react";

export default function SectionAbout() {
  return (
    <section className="py-16 bg-primary/80">
      <div className="container grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="h2 mb-4">About Us</h2>
          <article className="space-y-3">
            <p>
              PT. Saikindo Surya Gumiwang is a company that professional and reliable in the field of cleaning and
              building maintenance, power service, FTTH material supply, uniform, and event organizers.
            </p>
            <p>
              PT. Saikindo Surya Gumiwang has a focus on delivering the right solution for all types of related needs
              building cleaning and maintenance, electrical service, provision FTTH materials, uniform, and event
              organizers.
            </p>
          </article>
          <Link href="/about" className="btn mt-4 inline-block !bg-white hover:!text-primary">
            More About Us
          </Link>
        </div>
        <div>
          <iframe
            width="auto"
            height="315"
            src="https://www.youtube.com/embed/sXFCwKD4JM4?si=26Alh2ezf1E1F2q2"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
            className="w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
