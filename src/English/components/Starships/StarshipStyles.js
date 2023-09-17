import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    margin: -8rem 0;
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
  padding-top: 0;
  @media screen and (max-width: 768px) {
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledMap = styled(motion.div)`
  max-width: 35vw;
  height: 50vh;
  padding-bottom: 0px;
  @media (max-width: 767px) {
    max-width: 80vw;
  }
`;

export const TopLine = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin: 1.3rem 0;
  color: #979797;
  text-align: center;
  @media screen and (max-width: 905px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled(motion.h2)`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ inverse }) => (inverse ? "#0c4577" : "white")};
  @media screen and (max-width: 905px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const Subtitle = styled(motion.p)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: TextWrapper;
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: ${({ inverse }) => (inverse ? "#6a6a6a" : "white")};
  @media screen and (max-width: 905px) {
    text-align: center;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }
`;
