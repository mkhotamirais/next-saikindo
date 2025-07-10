import React from "react";
import SectionHero from "./(home-components)/SectionHero";
import SectionAbout from "./(home-components)/SectionAbout";
import SectionProductsServices from "./(home-components)/SectionProductsServices";
import SectionActivities from "./(home-components)/SectionActivities";
import SectionClients from "./(home-components)/SectionClients";
import SectionContact from "./(home-components)/SectionContact";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionAbout />
      <SectionProductsServices />
      <SectionActivities />
      <SectionClients />
      <SectionContact />
    </>
  );
}
