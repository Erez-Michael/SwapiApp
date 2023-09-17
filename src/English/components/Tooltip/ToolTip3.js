import React from "react";
import styled from "styled-components";

const ToolTip3 = (prop) => {
  const starship = prop.starship;

  return (
    <Wrapper
      style={{ top: `${prop.top - 150}px`, left: `${prop.left - 350}px` }}
    >
      <Cargo key={starship.cargo_capacity}>
        Height: {starship.cargo_capacity}
      </Cargo>
      <Length key={starship.length}>Length: {starship.length}</Length>
      <Manufacturer key={starship.manufacturer}>
        Manufacturer: {starship.manufacturer}
      </Manufacturer>
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

const Cargo = styled.div`
  padding: 2% 0;
  width: fit-content;
  margin: auto;
  cursor: pointer;
  &:hover {
    color: rgb(253, 230, 30);
  }
`;
const Length = styled(Cargo)``;
const Manufacturer = styled(Cargo)``;

export default ToolTip3;
