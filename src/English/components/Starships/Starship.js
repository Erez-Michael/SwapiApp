import PageWrapper from "../../pages/PageWrapper";
import AboutHeader from "./AboutHeader";
import Navbar from "../Navbar/Navbar";
import StarshipContent  from "./StarshipContent";
import Footer from "../Footer/Footer";

const Starship = () => {
  return (
    <PageWrapper>
      <Navbar />
      <AboutHeader />
      <StarshipContent />
      <Footer />
    </PageWrapper>
  );
};

export default Starship;


