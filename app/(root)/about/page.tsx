"use client";

import React from "react";
import Heroes from "../(home-components)/Heroes";

export default function About() {
  return (
    <>
      <Heroes title="About Us" />
      <section className="py-16 bg-tertiary-bg">
        <div className="container">
          <article className="max-w-3xl space-y-8 text-white leading-relaxed">
            <div>
              <h2 className="h2 mb-3">Introduction</h2>
              <div className="space-y-3">
                <p>
                  PT. Saikindo Surya Gumiwang is a company that professional and reliable in the field of cleaning and
                  building maintenance, power service, FTTH material supply, uniform, and event organizers.
                </p>
                <p>
                  PT. Saikindo Surya Gumiwang has a focus on delivering the right solution for all types of related
                  needs building cleaning and maintenance, electrical service, provision FTTH materials, uniform, and
                  event organizers.
                </p>
                <p>
                  Our commitment is to provide the best service and high quality for customers. In addition, we are also
                  very paying attention to quality and safety in providing FTTH materials and power services are needed.
                  In carrying out the cleaning and maintenance of the building, weusing modern and up-to-date equipment
                  make it more effective and efficient.In providing event organizer services, we are also very trusted
                  and very attentive to detail and quality inevery event they organize. In meeting needscustomers, we
                  always hide good cooperation with customers and up hold deep humanity every action is taken.
                </p>
                <p>
                  With all these things, PT. Saikindo Surya Gumiwang It is hoped that it will be the right choice for
                  all people who need the best solution in the field of cleaning andbuilding maintenance, electrical
                  service, provision of FTTH materials, uniform,and event organizers
                </p>
              </div>
            </div>
            <div>
              <h2 className="h2 mb-3">Vision</h2>
              <p>
                To become a leading company in the field of services and provision that provides the best solutions for
                customer needs
              </p>
            </div>
            <div>
              <h2 className="h2 mb-3">Mission</h2>
              <p>
                Providing high quality services and innovative solutions to meet customer needs effectively and
                efficiently by prioritizing customer satisfaction and improving the welfare of the companyʼs employees.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
