import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layer from "./layer";
import Layer2 from "../pages/layer2";
import Tournament from "../pages/Tournament";
import Header from "../Header/header";

const Home = () => {
  return (
    <Container>
      <Darker1>
        <Hero>
          <Darker>
            <Header />
            <Wrapper>
              <TextDiv>
                <Crush>CRUSH EVERY CHALLENGE</Crush>
                <Win>Compete with Players, Win and Earn</Win>
                <BtnHold>
                  <Signu to="/signup">Get Started</Signu>
                </BtnHold>
              </TextDiv>
            </Wrapper>
          </Darker>
        </Hero>
        <Layer />
        <Layer2 />
        <Tournament />
      </Darker1>
    </Container>
  );
};

export default Home;

const Darker1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.92);
`;
const Darker = styled.div`
  height: 100%;
  flex-direction: column;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Signu = styled(Link)`
  outline: none;
  text-decoration: none;
  height: 37px;
  width: 120px;
  background-color: #1ab34a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 3px;
  color: white;
  border: none;
  outline: none;
  font-size: 13px;
  :hover {
    cursor: pointer;
    transition: all 300ms;
    transform: scale(1.05);
    opacity: 0.8;
    font-weight: 500;
  }
`;
const BtnHold = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 120px;
    height: 40px;
    background-color: #6bed87;
    color: white;
    outline: none;
    border: none;
    border-radius: 10px;
    :hover {
      transition: all 500ms;
      cursor: pointer;
      background-color: white;
      color: #dc137a;
      border: 1px solid #dc137a;
      outline: none;
    }
  }
`;

const Crush = styled.div`
  color: whitesmoke;
  width: 500px;
  font-size: 70px;
  margin-top: 30px;
  font-weight: Bolder;
  text-align: center;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 90%;
    font-size: 50px;
  }
`;

const Win = styled.div`
  font-size: 18px;
  width: 300px;
  color: black;
  text-align: center;
  color: whitesmoke;
`;
const TextDiv = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  /* margin-bottom: 100px; */
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;
const Hero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("/gallery/background3.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
const Wrapper = styled.div`
  /* background-color: red; */
  width: 90;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  @media (max-width: 768px) {
    /* justify-content: center; */
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background-image: url("/gallery/hbg2.jpg");
  background-size: cover;
  background-position: center;
`;
