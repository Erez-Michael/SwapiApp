import PageWrapper from "../../pages/PageWrapper";
import AboutHeader from "./AboutHeader";
import Navbar from "../Navbar/Navbar";
import { CharactersContent } from "./CharactersContent";
import Footer from "../Footer/Footer";

const Characters = () => {
  return (
    <PageWrapper>
      <Navbar />
      <AboutHeader />
      <CharactersContent />
      <Footer />
    </PageWrapper>
  );
};

export default Characters;

