import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container>
      <Darker>
        <Wrapper>
          <Top>Login</Top>
          <InputHold>
            Email
            <input />
          </InputHold>
          <InputHold>
            Password
            <input />
          </InputHold>
          <Button>
            <button>Sign In</button>
          </Button>
          <Bottom>
            Don't have an account?{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <span>Sign up</span>
            </Link>
          </Bottom>
        </Wrapper>
      </Darker>
    </Container>
  );
};

export default SignUp;
const Bottom = styled.div`
  margin-top: 5px;
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: 400;
  span {
    margin-left: 5px;
    color: #1ab34a;
  }
`;
const Button = styled.div`
  margin-left: 15px;
  height: 40px;
  width: 91%;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  button {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 0;
    background-color: #1ab34a;
    color: white;
    font-size: 15px;
  }
`;
const InputHold = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  font-weight: 300;
  font-size: 12px;
  width: 90%;
  margin-left: 15px;
  margin-top: 5px;
  input {
    width: 100%;
    margin-top: 5px;
    height: 32px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: inherit;
    border: 1px solid #1ab34a;
    color: white;
  }
`;

const Top = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 500;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
const Wrapper = styled.div`
  height: 300px;
  width: 380px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const Darker = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  background-color: red;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url("/gallery/background2.jpg");
  background-size: cover;
  background-position: center;
`;
