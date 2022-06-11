import React from "react";
import styled from "styled-components";

const Gallery = () => {
  return (
    <Container>
      <Darker>
        <Wrapper>
          <Top>Take A Snippet Of Our Gallery</Top>
          <ImageHold>
            <Img src="/gallery/g1.jpg" />
            <Info>Sound Gaming Environment</Info>
          </ImageHold>
          <ImageHold>
            <Img src="/gallery/g2.jpg" />
            <Info>Hub Like Your Home</Info>
          </ImageHold>
          <ImageHold>
            <Img src="/gallery/g3.jpg" />
            <Info>Sound Gaming Environment</Info>
          </ImageHold>
          <ImageHold>
            <Img src="/gallery/g4.jpg" />
            <Info>Smooth consoles</Info>
          </ImageHold>
        </Wrapper>
      </Darker>
    </Container>
  );
};

export default Gallery;

const Info = styled.div`
  color: white;
`;
const Img = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;
const ImageHold = styled.div`
  width: 80%;
  height: 500px;
  /* background-color: red; */
  border-radius: 5px;
  margin-bottom: 70px;
`;
const Top = styled.div`
  color: white;
  font-size: 35px;
  margin: 30px 0;
  font-weight: 600;
  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;
const Darker = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.878);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  height: 100%;
  min-height: 100%;
  width: 100%;
  background-image: url("/gallery/backgroundab.jpg");
  background-size: cover;
  background-position: center;
`;
