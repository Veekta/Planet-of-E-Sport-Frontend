import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import SideNav from "../Header/sideNav";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleChange = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <LogoDiv to="/">
            <img src="/gallery/logo.png" alt="logo" />
          </LogoDiv>
          <Navigation>
            <NavLink to="/gallery">
              <Nav>Gallery</Nav>
            </NavLink>
            <Nav>Tournament</Nav>
            <Nav>About Us</Nav>
          </Navigation>
          <BtnHold>
            <Signi to="signin">Log In</Signi>
            <Signu to="/signup">Join</Signu>
          </BtnHold>
          <Bugga>
            {toggle ? (
              <GiCancel size="30" onClick={ToggleChange} color="white" />
            ) : (
              <GiHamburgerMenu size="30" onClick={ToggleChange} color="white" />
            )}
          </Bugga>
        </Wrapper>
      </Container>
      {toggle ? <SideNav setToggle={setToggle} toggle={toggle} /> : null}
    </>
  );
};

export default Header;

const Bugga = styled.div`
  z-index: 1;
  @media (min-width: 770px) {
    display: none;
  }
`;
const Signi = styled(Link)`
  outline: none;
  text-decoration: none;
  height: 35px;
  width: 80px;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 500;
  border: none;
  outline: none;
  :hover {
    cursor: pointer;
    transition: all 300ms;
    transform: scale(1.05);
    /* border-radius: 3px; */
    opacity: 0.8;
    font-weight: 500;
  }
`;
const Signu = styled(Link)`
  outline: none;
  text-decoration: none;
  height: 33px;
  width: 90px;
  background-color: #1ab34a;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  /* color: white; */
  border: none;
  outline: none;
  font-weight: 500;
  color: white;
  font-size: 15px;
  :hover {
    cursor: pointer;
    transition: all 300ms;
    transform: scale(1.05);
    opacity: 0.8;
    font-weight: 500;
  }
`;
// const Signi = styled.div``;
const BtnHold = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
  button {
    width: 120px;
    height: 40px;
    /* background-color: #1ab34a; */
    color: white;
    outline: none;
    border: none;
    border-radius: 10px;
    :hover {
      transition: all 350ms;
      cursor: pointer;
      background-color: white;
      color: #dc137a;
      border: 1px solid #dc137a;
      outline: none;
    }
  }
`;
const Nav = styled.div`
  font-size: 14px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  :hover {
    cursor: pointer;
    transition: all 300ms;
    transform: scale(1.05);
    opacity: 0.8;
    font-weight: 500;
  }
`;
const Navigation = styled.div`
  display: flex;
  width: 300px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;
const LogoDiv = styled(Link)`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: white;
  /* background-color: white; */
  img {
    height: inherit;
    width: inherit;
    border-radius: inherit;
  }
`;
const Container = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
