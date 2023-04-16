import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { GoogleButton } from "react-google-button";
import { auth, provider } from "../config/firsebase.config";
import { signInWithPopup } from "firebase/auth";
import Logout from "./LogOut";
import styled from "styled-components";

const Wrapper = styled.div`
  .btn {
    @media only screen and (max-width: 600px) {
      transform: scale(.7);
    }
  }
`;

const signIn = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      {user ? (
        <Logout />
      ) : (
        <GoogleButton className="btn" onClick={signInWithGoogle} />
      )}
    </Wrapper>
  );
};

export default signIn;
