import styled from "styled-components";

const Logo = ({ className }) => {
   window.onscroll = function () {
     scrollFunction();
   };

   const scrollFunction = () => {
     if (
       document.body.scrollTop > 50 ||
       document.documentElement.scrollTop > 50
     ) {
       document.getElementById("logo").style.scale = "0.6";
     } else {
       document.getElementById("logo").style.scale= "1.2";
     }
  };
  
  
  const style = {
    transition:"1s"
  }

  return (
    <>
      <Container id="logo" style={style} className={className}>
        <Wrapper className="logo">
          <img src="https://res.cloudinary.com/dhcrarc6f/image/upload/v1694905948/pngwing.com_10_wddjwi.png" />
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  z-index: 999 !important;
  font-weight: 900;
cursor: crosshair;
  
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  @media screen and (max-width: 767px) {
    transform: scale(0.7);
  }
 img {
  height: 60px;
 }
`;


export default Logo;
