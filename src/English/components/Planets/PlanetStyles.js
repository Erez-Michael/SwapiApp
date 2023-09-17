import styled from "styled-components";
import { Row } from "../../../GlobalStyles";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export const Spinner = styled.span`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
`;

export const ContainerTop = styled.div`
  position: relative;
  top: 35px;
  display: flex;
  justify-content: center;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 -3%;
  }
  @media screen and (max-width: 475px) {
    margin: 0 -3%;
  }
`;

export const StyledContentTopTwo = styled.div`
  font-size: 60px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 475px) {
    font-size: 40px;
  }
`;

export const StyledContentTopThree = styled.div`
  font-weight: bolder;
  font-size: xx-large;
  font-size: 60px;
  font-weight: 700;
  background-image: linear-gradient(45deg, #009966, #f3ec78);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 475px) {
    font-size: 40px;
    align-items: flex-start;
  }

  p {
    background-image: linear-gradient(45deg, #009966, #f3ec78);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 60px;
    font-weight: 700;
    margin-right: 10px;
    margin-left: 10px;
    @media screen and (max-width: 1024px) {
      font-size: 40px;
    }
    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
    @media screen and (max-width: 475px) {
      font-size: 20px;
    }
  }
`;
export const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  vertical-align: middle;
  position: relative;
  left: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding: 0 50px;
  animation: fadeIn 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ButtonContainer = styled(Row)`
  position: relative;
  cursor: pointer;

  & svg:hover {
    opacity: 0.8;
    transition: 0.25s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin-bottom: -30px;
    margin-top: 20px;
  }
`;
export const ButtonContainerTwo = styled(ButtonContainer)``;

export const ReviewSlider = styled(Slider)`
  width: 100%;
  margin-bottom: -15rem;

  .slick-track {
    display: flex;
    padding: 50px;
    gap: 3rem;
  }
  .slick-slide {
    display: flex;
    justify-content: center;
    outline: none;
  }
  .slick-list {
    overflow: hidden;
  }
  animation: fadeIn 3s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    margin: 0 -4% -12rem -4%;
  }
`;
export const ImageWrapper = styled(Link)`
  display: flex !important;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonWrapper = styled.div`
  z-index: 2;
  position: relative;
  bottom: 50%;
  border-radius: 10px;
  /* backdrop-filter: blur(3px); */
  text-shadow: rgb(50, 82, 114) 1px 0px 0px,
    rgb(50, 82, 114) 0.540302px 0.841471px 0px,
    rgb(50, 82, 114) -0.416147px 0.909297px 0px,
    rgb(50, 82, 114) -0.989992px 0.14112px 0px,
    rgb(50, 82, 114) -0.653644px -0.756802px 0px,
    rgb(50, 82, 114) 0.283662px -0.958924px 0px,
    rgb(50, 82, 114) 0.96017px -0.279415px 0px;
`;

export const CardButton = styled(Link)`
  /* border: solid red 2px; */
  display: flex;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  font-size: 1.5rem;
  padding: 2rem 2rem;
  color: #fff;
  cursor: pointer;

  font-weight: 600;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;
