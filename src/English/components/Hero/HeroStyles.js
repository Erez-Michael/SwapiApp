import styled from "styled-components";
import { Button } from "../../../GlobalStyles";

export const HeroSection = styled.section`
  height: 100vh;
  overflow-y: hidden;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 35vh, 220px);

  @media screen and (max-width: 1268px) {
    height: 92vh;
  }
  @media screen and (max-width: 1024px) {
    height: 72vh;
  }
  @media screen and (max-width: 768px) {
    height: 62vh;
  }
  @media screen and (max-width: 640px) {
    height: 55vh;
  }
`;

export const HeroImage = styled.image`
  position: absolute;
  top: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-position: center;
    background-size: cover;
  }
  @media screen and (min-width: 1536px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    top: 80px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 2% 18%;
  @media screen and (max-width: 1024px) {
    top: -30%;
  }
  @media screen and (max-width: 768px) {
    top: -40%;
  }
  @media screen and (max-width: 640px) {
    top: -75%;
  }
  @media screen and (max-width: 425px) {
    top: -85%;
    padding: 0;
  }
`;

export const HeadingContainer = styled.div`
 margin: 180px auto 0 auto;
 padding: 1%;
 background: rgb(195,186,175);
 background: linear-gradient(90deg, rgba(195,186,175,0.05) 0%, rgba(195,186,175,0.3) 5%, rgba(195,186,175,1) 50%, rgba(195,186,175,0.3) 95%, rgba(195,186,175,0.05) 100%);
`;

export const HeroText = styled.p`
  font-size: clamp(0.9rem, 2.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: whitesmoke;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
  @media screen and (max-width: 640px) {
  }
`;

export const HeroButton = styled(Button)`
  color: black;
  &:before {
    background: #fff;
    height: 500%;
  }
  &:hover:before {
    height: 0%;
  }
  &:hover {
    color: white;
  }
`;
