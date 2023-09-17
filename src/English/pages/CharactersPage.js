import React from "react";
import Characters from "../components/People/Characters";

const CharactersPage = () => {

  const styles = {
    "overflow-y": "hidden",
    "min-width":"100%"
  }
  return <Characters styles={ styles} />;
};

export default CharactersPage;

