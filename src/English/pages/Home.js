import React from "react";
import PageWrapper from "./PageWrapper";
import { Content } from "../components/Content/Content";
import { ContentTwo } from "../components/Content/ContentTwo";
import { ContentThree } from "../components/Content/ContentThree";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";



const Home = () => {

  return (
    <PageWrapper >
      <Navbar />
      <Hero />
      <Content {...heroOne} />
      <ContentTwo {...heroTwo} />
      <ContentThree {...heroThree} />
      <Footer />
    </PageWrapper>
  );
};



export default Home;
