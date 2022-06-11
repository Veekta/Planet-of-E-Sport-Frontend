import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Header from "../Header/header";

const Home = () => {
  return (
    <Container>
      <Darker1></Darker1>
    </Container>
  );
};

export default Home;

const Darker1 = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.94);
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
