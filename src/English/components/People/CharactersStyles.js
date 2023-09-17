import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin-bottom: 50px;
    margin-top: -10px;
  }
`;

export const ContentColumn = styled(motion.div)`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
 margin-top: 50px;
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  > img {
    width: 300px;
    margin-left: -3px;
  }
`;

export const ImgWrapper = styled(motion.div)`
  margin-bottom: -50px;
  display: flex;
  justify-content: "flex-end";
  max-height: 500px;
  justify-content: center;
  position: relative;
  z-index: -1;
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;


export const TopLine = styled(motion.div)`
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: #979797;
`;

export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  object-fit: cover;
  max-height: 700px;
  z-index: 1;
  
`;

export const Heading = styled(motion.h2)`
  margin-bottom: 24px;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 600;
  color: "#0c4577";
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;


export const Subtitle = styled(motion.p)`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: "#6a6a6a";
  @media screen and (max-width: 560px) {
    width: 85vw;
  }
  @media screen and (max-width: 375px) {
    width: 85vw;
  }
`;


