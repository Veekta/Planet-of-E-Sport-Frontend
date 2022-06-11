import React from "react";
import styled from "styled-components";

const layer = (props) => {
  return (
    <Container>
      <Wrapper>
        <Top>Games Available</Top>
        <CardHold>
          <Card>
            <img src="/gallery/deadpool.jpg" />
          </Card>
          <Card>
            <img src="/gallery/lego.jpg" />
          </Card>
          <Card>
            <img src="/gallery/nba.jpg" />
          </Card>
          <Card>
            <img src="/gallery/ninja.jpg" />
          </Card>
        </CardHold>
      </Wrapper>
    </Container>
  );
};

export default layer;

const Card = styled.div`
  height: 300px;
  width: 250px;
  border-radius: 15px;
  opacity: 0.9;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  margin-bottom: 30px;
  object-fit: contain;

  img {
    height: inherit;
    width: inherit;
    position: center;
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
const CardHold = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const Top = styled.div`
  color: black;
  margin: 20px 0;
  font-weight: 600;
  font-size: 18px;
  color: white;
`;
const Wrapper = styled.div`
  width: 80%;
  /* height: 100%; */
`;
const Container = styled.div`
  width: 100%;
  /* height: 400px; */
  display: flex;
  justify-content: center;
  border-top: 1px solid #1ab34a;
`;
