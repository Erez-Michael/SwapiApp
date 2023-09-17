import React from "react";
import styled from "styled-components";

const ToolTip = (prop) => {
  const character = prop.person;

  return (
    <Wrapper  style={{ top: `${prop.top -100}px`, left: `${prop.left -150}px` }}>
      <Height key={character.height}>Height: {character.height}</Height>
      <EyeColor key={character.eye_color}>
        Eye Color: {character.eye_color}
      </EyeColor>
      <Mass key={character.mass}>Mass: {character.mass}</Mass>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  pointer-events: none;
  border-radius: 2rem;
  padding: 2rem;
  z-index: 9;
  position: fixed;
  background-color: rgba(39, 43, 48, 0.9);
`;

const Name = styled.div`
  padding: 2% 0;
  width: fit-content;
  margin: auto;
  cursor: pointer;
  &:hover {
    color: rgb(253, 230, 30);
  }
`;
const Height = styled(Name)``;
const EyeColor = styled(Name)``;
const Mass = styled(Name)``;

export default ToolTip;
