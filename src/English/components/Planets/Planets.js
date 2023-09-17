import React, { useState } from "react";
import PageWrapper from "../../pages/PageWrapper";
import Navbar from "../Navbar/Navbar";
import AboutHeader from "./AboutHeader";
import PlanetsContent from "./PlanetsContent";
import Footer from "../Footer/Footer";

const Planets = () => {
  return (
    <PageWrapper>
      <Navbar />
      <AboutHeader />
      <PlanetsContent />
      <Footer />
    </PageWrapper>
  );
};

export default Planets;
