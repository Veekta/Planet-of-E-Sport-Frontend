import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <LogoDiv>
            <img src="/gallery/logo.png" alt="" />
          </LogoDiv>
          <Text>
            <span>
              Planet of E-Sport is bringing Video games to the street of Nigeria
            </span>
          </Text>
        </Hold>
        <HoldText>
          <Text>
            <span>About Us</span>
          </Text>
          <Text>
            <span>About </span>
          </Text>
          <Text>
            <span>Terms</span>
          </Text>
        </HoldText>
        <HoldText>
          <Text>
            <span>Tournament</span>
          </Text>
          <Text>
            <span>Challenge </span>
          </Text>
        </HoldText>
        <HoldText>
          <Text>
            <span>Support</span>
          </Text>
          <Text>
            <span>Contact </span>
          </Text>
        </HoldText>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const HoldText = styled.div`
  height: 200px;
  width: 150px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;
const Text = styled.div`
  width: 200px;
  text-align: center;
  margin-top: 10px;
  span {
    font-size: 13px;
    color: white;
  }
`;
const LogoDiv = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: white;
  margin-top: 10px;
  img {
    height: inherit;
    width: inherit;
    border-radius: inherit;
  }
`;
const Hold = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  /* justify-content: space-between; */
  /* background-color: red; */
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* margin-top: 10px; */
  @media (max-width: 768px) {
    align-items: center;
  }
`;
const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.94);
  border-top: 1px solid #1ab34a;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
