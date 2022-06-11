import React from "react";
import styled from "styled-components";
import { BiGame } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { MdGamepad } from "react-icons/md";

const layer2 = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Icon>
            <BiGame color="#1ab34a" size="60" />
          </Icon>
          <Text>
            Providing perfert gaming experience for our clienrroviding perfert
            gaming experience for our clienrroviding perfert gaming experience
            for our clien
          </Text>
        </Card>
        <Card>
          <Icon>
            <FaGamepad color="#1ab34a" size="60" />
          </Icon>
          <Text>
            Providing perfert gaming experience for our clientroviding perfert
            gaming experience for our clienrroviding perfert gaming experience
            for our clienr
          </Text>
        </Card>
        <Card>
          <Icon>
            <MdGamepad color="#1ab34a" size="60" />
          </Icon>
          <Text>
            Providing perfert gaming experience for our clienr roviding perfert
            gaming experience for our clienrroviding perfert gaming experience
            for our clienr
          </Text>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default layer2;

const Text = styled.div`
  width: 250px;
  font-size: 13px;
  text-align: center;
  color: white;
  font-weight: 300;
`;
const Icon = styled.div``;
const Card = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  /* background-color: red; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px 15px;
`;
const Wrapper = styled.div`
  width: 80%;
  /* background-color: #e9edea; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 768px) {
  }
`;
const Container = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center;
  /* border-bottom: 1px solid black; */
  /* border-top: 1px solid black; */
`;
