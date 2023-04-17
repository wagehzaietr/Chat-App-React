import React, { useEffect, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firsebase.config";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { GrMenu } from "react-icons/gr";
import {CgClose} from "react-icons/cg"

const LogoutBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  background-color: #e1e1e17a;
  cursor: pointer;
  position: sticky;

  .logodiv {
    flex: 1;
  }

  button {
    outline: none;
    border: none;
    padding: 0.7rem 0.9rem;
    border-radius: 10px;
    font-size: 1rem;
    background: linear-gradient(45deg, #b11eb166, #317fd9);
    color: #fff;
    width: 100px;
    cursor: pointer;
    margin-right: 1rem;
  }
`;

const Showbutton = styled.div`
  height: 100%;
  width: 150px;
  background-color: #edededb8;
  z-index: 999;
  position: fixed;
  transition: all 0.5s ease-in-out ;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};

  button {
    outline: none;
    border: none;
    padding: 0.7rem 0.9rem;
    border-radius: 10px;
    font-size: 1rem;
    background: linear-gradient(45deg, #b11eb166, #317fd9);
    color: #fff;
    width: 100px;
    cursor: pointer;
    margin-left: 1.5rem;
    margin-top: 1rem;
  }

`;

const Logout = () => {
  const [loading, setloading] = useState(false);
  const [show, setShow] = useState(false);


  const logout = async () => {
    await signOut(auth);
  };

  const handleMenu = () => {
    setShow(!show)
  }


  return (
    <>
      <LogoutBtn>
        <div className="logodiv">
          {show ? <CgClose size={30} onClick={handleMenu} /> : <GrMenu size={30} onClick={handleMenu} />}
        </div>
      </LogoutBtn>
      <Showbutton show={show}>
        <button onClick={logout}>Logout</button>
      </Showbutton>
    </>
  );
};

export default Logout;
