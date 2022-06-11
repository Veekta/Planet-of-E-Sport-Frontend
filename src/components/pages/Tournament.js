import React from "react";
import styled from "styled-components";

const Tournament = () => {
  return (
    <Container>
      <Top>Tournament</Top>

      <Wrapper>
        <Card>
          <Content>
            <Image>
              <img src="/gallery/fifa.jpg" />
            </Image>
            <Text>
              <span>FIFA SERIES</span>
              <Time>14 May, 2022 | 2pm WAT</Time>
              <button>Register</button>
            </Text>
          </Content>
        </Card>
        <Card>
          <Content>
            <Image>
              <img src="/gallery/fifa.jpg" />
            </Image>
            <Text>
              <span>FIFA SERIES</span>
              <Time>14 May, 2022 | 2pm WAT</Time>
              <button>Register</button>
            </Text>
          </Content>
        </Card>
        <Card>
          <Content>
            <Image>
              <img src="/gallery/fifa.jpg" />
            </Image>
            <Text>
              <span>FIFA SERIES</span>
              <Time>14 May, 2022 | 2pm WAT</Time>
              <button>Register</button>
            </Text>
          </Content>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Tournament;

const Time = styled.div``;
const Text = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  button {
    margin-top: 10px;
    width: 70px;
    height: 30px;
    border: none;
    background-color: #1ab34a;
    color: white;
    border-radius: 5px;
  }

  /* background-color: orange; */
  span {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;
const Image = styled.div`
  height: 100%;
  width: 40%;
  background-color: gold;
  margin-right: 10px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: center;
  }
`;
const Content = styled.div`
  height: 85%;
  width: 90%;
  /* background-color: orange; */
  display: flex;
  /* justify-content: space-between; */
`;
const Card = styled.div`
  width: 350px;
  height: 150px;
  background-color: #bac2bc;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
const Top = styled.div`
  width: 80%;
  color: black;
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 600;
  color: white;
  font-size: 18px;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;
const Container = styled.div`
  width: 100%;
  /* background-color: #e9edea; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
