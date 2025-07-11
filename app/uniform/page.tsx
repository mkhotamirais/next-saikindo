import React from "react";
import SectionHero from "./(components)/SectionHero";
import SectionProducts from "./(components)/SectionProducts";
import SectionAbout from "./(components)/SectionAbout";
import SectionClients from "./(components)/SectionClients";

export default function Uniform() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionProducts />
      <SectionClients />
    </>
  );
}
