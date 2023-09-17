import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

// Scroll to top button
import ScrollTop from "./Buttons/ScrollTop";
//

import Home from "./English/pages/Home";
import CharactersPage from "./English/pages/CharactersPage";
import PlanetPage from "./English/pages/PlanetPage";
import StarshipPage from "./English/pages/StarshipPage";

//////////////////////////////////////////////////

const App = () => {


  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/planets" element={<PlanetPage />} />
        <Route path="/starships" element={<StarshipPage />} />
      </Routes>
      <ScrollTop />
    </BrowserRouter>
  );
};

export default App;
