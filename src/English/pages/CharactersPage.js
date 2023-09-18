import PageWrapper from "./PageWrapper";
import Navbar from "../components/Navbar/Navbar";
import AboutHeader from "../components/People/AboutHeader";
import CharactersContent from "../components/People/CharactersContent";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const CharactersPage = () => {
  return (
    <>
      <Navbar />
        <AboutHeader />
        <CharactersContent />
        <Footer />
    </>
  );
};

export default CharactersPage;
