import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiHomeSmileFill } from "react-icons/ri";
import {
  FaLayerGroup,
  FaClipboardList,
  FaShoppingCart,
  FaBloggerB,
} from "react-icons/fa";
import { AiTwotoneSkin } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = ({ setToggle, toggle }) => {
  return (
    <Container>
      <Wrapper>
        <Navs
          to="/"
          onClick={() => {
            setToggle(false);
          }}
        >
          <RiHomeSmileFill />
          <span>Home</span>
        </Navs>
        <Navs
          onClick={() => {
            setToggle(false);
          }}
          to="/about"
        >
          <span>Tournament</span>
        </Navs>
        <Navs
          onClick={() => {
            setToggle(false);
          }}
          to="/signin"
        >
          <span>Login</span>
        </Navs>
        <Navs
          onClick={() => {
            setToggle(false);
          }}
          to="/gallery"
        >
          <span>Gallery</span>
        </Navs>
        <Navs
          onClick={() => {
            setToggle(false);
          }}
          to="/about"
        >
          <span>About</span>
        </Navs>
        <Signu to="/signup">Join</Signu>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

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

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: calc(100vh);
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  font-family: poppins;
  font-weight: 600;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Navs = styled(NavLink)`
  text-decoration: none;
  margin: 25px 0;
  color: #fff;
  display: flex;
  font-size: 20px;
  /* justify-content: center; */
  align-items: center;
  :hover {
    color: #1ab34a;
  }
  &.active {
    color: #1ab34a;
  }
  span {
    margin-left: 5px;
  }
`;
