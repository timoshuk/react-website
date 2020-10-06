import React from "react";
import HeroSection from "../../hero-section/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Products;
