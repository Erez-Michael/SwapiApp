import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Logo/Logo";
import {
  NavbarContainer,
  NavbarInnerContainer,
  StyledLogo,
  RightContainer,
  NavLink,
  OpenLinksButton,
  NavbarExtendedContainer,
  NavbarLinkExtendedOne,
  NavbarLinkExtendedTwo,
  NavbarLinkExtendedThree,
  NavbarLinkExtendedFour,
} from "./NavbarStyles";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const closeNavbar = () => {
    setExtendNavbar(false);
  };

  // When the user scrolls down 50px from the top of the document, resize logo
 

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <StyledLogo>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
        </StyledLogo>

        <RightContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/planets">Planets</NavLink>
          <NavLink to="/starships">Starships</NavLink>
          <OpenLinksButton
            onClick={() => {
              setExtendNavbar((current) => !current);
            }}
          >
            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
          </OpenLinksButton>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtendedOne onMenuItemSelect={closeNavbar} to="/">
            Home
          </NavbarLinkExtendedOne>
          <NavbarLinkExtendedTwo to="/characters">Characters</NavbarLinkExtendedTwo>
          <NavbarLinkExtendedThree to="/planets">
            Planets
          </NavbarLinkExtendedThree>
          <NavbarLinkExtendedFour to="/starships">
            Starships
          </NavbarLinkExtendedFour>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
