import React from "react";
import HeroSection from "../../hero-section/HeroSection";
import { homeObjOne, homeObjThree } from "./Data";
import Pricing from "../../pricing/Pricing";

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
