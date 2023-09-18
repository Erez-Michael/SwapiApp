import styled from "styled-components";

export const Wrapper = styled.div`
  position:fixed;
  z-index: 999;
  height: fit-content;
  width: 400px;
  transform: rotate(314deg);
  display: flex;
  flex-direction: row;
  background: transparent;
  animation: fadeInAnimation ease 5s;
  animation-iteration-count: 1;
  animation-fill-mode: backwards;

  @media screen and (min-width: 1400px) {
    top: 62%;
    left: 30%;
  }
  @media screen and (min-width: 1280px) {
    top: 35%;
    left: 10%;
  }
  @media screen and (min-width: 1024px) {
    top: 45%;
    left: 10%;
  }

 
`;

export const Text = styled.div`
  color: rgb(253, 230, 31);
  background: transparent;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const Arrow = styled.div`
  transform: scale(1.5);
  background: transparent;
  color: rgb(253, 230, 31);
  margin-top: 13px;
  margin-left: 15px;
`;
