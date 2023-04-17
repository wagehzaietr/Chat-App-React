import React, { createContext, useEffect, useState, useContext } from "react";
import "./index.css";
import { AppStyle } from "./App.styled";
import { Chat, Home, SendMessage, Navbar, LogOut } from "./Index";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./config/firsebase.config";
import styled from "styled-components";



function App() {
  const [user] = useAuthState(auth);
  return (
    <AppStyle>
      {user ?  <LogOut/> : <Navbar/>}
      {user ? <Chat /> : <Home />}
    </AppStyle>
  );
}

export default App;
