import styled from "styled-components";
import { Link, NavLink as BaseNavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  z-index: 999 !important;
  opacity: 0.85;
  position: fixed;
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background: #272b30;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    height: 120px;
  }

  @media screen and (min-width: 891px) {
    font-size: 10px;
  }

  @media screen and (max-width: 640px) {
    background:#272B30;
    );
  }
`;

export const NavbarInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 10% 0 10%;
  @media screen and (max-width: 1024px) {
    margin-top: 15px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;

export const StyledLogo = styled.div`
  z-index: 9 !important;
`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  `;

export const NavLink = styled(BaseNavLink)`
  color: whitesmoke;
  font-size: 1rem;
  text-decoration: none;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    background-image: linear-gradient(45deg, #f3ec78, #fde61f);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    transition: all 0.2s ease-in-out;
    transform: scale(1.09);
  }
  &.active {
    background-image: linear-gradient(45deg, #fdb731, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: 900;
    font-size: 1.2rem;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
export const OpenLinksButton = styled.button`
  width: 80px;
  background: none;
  border: none;
  color: whitesmoke;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  height: 60vh;
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items: center;
  margin-top: 10%;
  overflow-y: hidden;
  z-index: 9 !important;
`;

export const MenuLink = ({ children, onMenuItemSelect, to, className }) => {
  const onClick = () => {
    onMenuItemSelect();
  };
  return (
    <Link to={to} onClick={onClick} className={className}>
      {children}
    </Link>
  );
};

export const NavbarLinkExtendedOne = styled(MenuLink)`
  color: whitesmoke;
  font-size: large;
  text-decoration: none;
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  height: ${(props) => (props.extendNavbar ? "100vh" : "fit-content")};
  @media screen and (min-width: 1024px) {
    display: none;
  }
  animation-duration: 0.4s;
  animation-name: slideInLeft;

  @keyframes slideInLeft {
    from {
      transform: translate3d(-250%, 0, 0);
      visibility: visible;
    }
  }
  :hover {
    background-image: linear-gradient(45deg, #fdb731, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    transition: all 0.2s ease-in-out;
    transform: scale(1.09);
  }
  &.active {
    background-image: linear-gradient(45deg, #fdb731, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: 900;
    font-size: 1.2rem;
  }
`;

export const NavbarLinkExtendedTwo = styled(MenuLink)`
  color: whitesmoke;
  font-size: large;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  height: ${(props) => (props.extendNavbar ? "100vh" : "fit-content")};
  @media screen and (min-width: 1024px) {
    display: none;
  }
  animation-duration: 0.6s;
  animation-name: slideInRight;

  @keyframes slideInRight {
    from {
      transform: translate3d(250%, 0, 0);
      visibility: visible;
    }
  }
  :hover {
    background-image: linear-gradient(45deg, #fdb731, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    transition: all 0.2s ease-in-out;
    transform: scale(1.09);
  }
  &.active {
    background-image: linear-gradient(45deg, #fdb731, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-weight: 900;
    font-size: 1.2rem;
  }
`;

export const NavbarLinkExtendedThree = styled(NavbarLinkExtendedOne)`
  animation-duration: 0.8s;
`;
export const NavbarLinkExtendedFour = styled(NavbarLinkExtendedTwo)`
  animation-duration: 1s;
`;
export const NavbarLinkExtendedFive = styled(NavbarLinkExtendedOne)`
  animation-duration: 1.2s;
`;
export const NavbarLinkExtendedSix = styled(NavbarLinkExtendedTwo)`
  animation-duration: 1.4s;
`;
