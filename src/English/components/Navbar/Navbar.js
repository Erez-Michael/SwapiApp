import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
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
  NavbarLinkExtendedFive,
  NavbarLinkExtendedSix,
} from "./NavbarStyles";

const Header = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const closeNavbar = () => {
    setExtendNavbar(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // When the user scrolls down 50px from the top of the document, resize logo
 

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <StyledLogo>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo  />
          </Link>
        </StyledLogo>

        <RightContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink
            to={
              "https://www.linkedin.com/in/mordechai-ludmer-ing-m-ing-39a1a312/"
            }
          >
            <BsLinkedin
              size={16}
              style={{
                fill: isHovering ? "#009966" : "whitesmoke",
                transition: isHovering ? "all 0.2s ease-in-out" : "",
                transform: isHovering ? "scale(1.09)" : "",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </NavLink>
          <NavLink to="/accueil">FR</NavLink>
          <NavLink to="/">EN</NavLink>
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
          <NavbarLinkExtendedTwo to="/about">About</NavbarLinkExtendedTwo>
          <NavbarLinkExtendedThree to="/projects">
            Projects
          </NavbarLinkExtendedThree>
          <NavbarLinkExtendedFour to="/contact">Contact</NavbarLinkExtendedFour>
          <NavbarLinkExtendedFive to="/accueil">
            Français
          </NavbarLinkExtendedFive>
          <NavbarLinkExtendedSix to="/">English</NavbarLinkExtendedSix>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Header;
