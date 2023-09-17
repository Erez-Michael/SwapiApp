import React from "react";
import styled from "styled-components";

const ToolTip2 = (prop) => {
  const planet = prop.planet;

  return (
    <Wrapper
      
      style={{ top: `${prop.top - 100}px`, left: `${prop.left - 150}px` }}
    >
      <Diameter key={planet.diameter}>Diameter: {planet.diameter}</Diameter>
      <Climate key={planet.climate}>
        Climate: {planet.climate}
      </Climate>
      <Gravity key={planet.gravity}>Gravity: {planet.gravity}</Gravity>
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

const Diameter = styled.div`
  padding: 2% 0;
  width: fit-content;
  margin: auto;
  cursor: pointer;
  &:hover {
    color: rgb(253, 230, 30);
  }
`;
const Climate = styled(Diameter)``;
const Gravity = styled(Diameter)``;

export default ToolTip2;
