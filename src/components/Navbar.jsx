import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { SignIn } from "../Index";

const Nav = styled.nav`
`;



const Container = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  background-color: #edededb8;
  @media only screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;
        background-color: #edededb8;
    }



  .left {
    flex: 9;
    display: flex;

    img {
      width: 80px;
      object-fit: cover;
    }

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      li {
        padding: 0.5rem 0.6rem;
        font-size: 1rem;
        text-transform: capitalize;
        color: #ededed;
        cursor: pointer;
      }
    }
  }
  .right {
    flex: 1;

    button {
      outline: none;
      border: none;
      padding: 0.7rem 0.9rem;
      border-radius: 10px;
      font-size: 1rem;
      background: linear-gradient(45deg, #b11eb166, #317fd9);
      color: #fff;
      width: 150px;
      @media only screen and (max-width: 600px) {
        width: 100%;
        margin-bottom: 1rem;
        
    }
      cursor: pointer;
    }
  }
`;



const Navbar = () => {
  const [show,setShow] = useState(false);



  return (
    <Nav>
      <Container>
        <div className="left">
          <img src={Logo} alt="" />
        </div>
        <div className="right">
          <SignIn />
        </div>
      </Container>
    </Nav>
  );
};

export default Navbar;
