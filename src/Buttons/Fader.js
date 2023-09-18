import React, { useState, useEffect } from "react";
import { Wrapper, Text, Arrow } from "./FaderStyles";
const FADE_INTERVAL_ONE = 600;
const WORD_CHANGE_INTERVAL_ONE = FADE_INTERVAL_ONE * 1;
const ARROW = ["⤵", ""];

const Fader = () => {
  const [fadeProp, setFadeProp] = useState({ fade: "fade-in" });
  const [Order, setOrder] = useState(0);

  // WORD ONE /////////////////////////

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp.fade === "fade-in"
        ? setFadeProp({ fade: "fade-out" })
        : setFadeProp({ fade: "fade-in" });
    }, FADE_INTERVAL_ONE);

    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setOrder((prevWordOrder) => (prevWordOrder + 1) % ARROW.length);
    }, WORD_CHANGE_INTERVAL_ONE);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <Wrapper>
      <Text>Click To Navigate</Text>
      <Arrow className={fadeProp.fade}>{ARROW[Order]}</Arrow>
    </Wrapper>
  );
};

export default Fader;
