import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../config/firsebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {FiSend} from 'react-icons/fi'

const Form = styled.form`
  height: 3.5rem;
  width: 100%;
  max-width: 728px;
  display: flex;
  font-size: 1.25rem;
  position: sticky;
  bottom: 0;
  @media only screen and (max-width: 768px) {
    padding-right:.2rem;
    }

  .input {
    width: 100%;
    font-size: 1.25rem;
    padding: 0.75rem;
    background: #cacaca9b;
    color: #2a2a2a;
    outline: none;
    border: none;
    box-shadow: 0 -3px 10px #50505049;
    &:focus {
      color: #313131;
      transition: all 0.3s ease-in-out;
    }
  }

  button {
    background: linear-gradient(45deg, #b11eb166, #317fd9);
    color: #eaeaea;
    width: 20%;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: 0 -3px 10px #50505098;
    @media only screen and (max-width: 768px) {
      border-radius: 50%;
      .send{
        width: 1.5rem;
      }
    }
    &:hover {
      background: linear-gradient(20deg, #b11eb166, #317fd9);
      transition: 0.3s ease-in-out;
      color: #fff;
    }
  }
`;

const sendMessage = ({ deleteMessage, scroll }) => {
  const [inputMsg, setInputmsg] = useState("");

  //send message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (inputMsg === "") {
      alert("please enter message");
      return;
    }
    const { uid, photoURL, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: inputMsg,
      name: displayName,
      photo: photoURL,
      uid,
      timestamp: serverTimestamp(),
    });
    setInputmsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Form action="" className="send-message" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type your message"
          className="input"
          onChange={(e) => setInputmsg(e.target.value)}
          value={inputMsg}
          required
        />
        <button type="submit" className="send-button" disabled={!inputMsg}>
          <FiSend size={30} className="send"/>
        </button>
      </Form>
    </>
  );
};

export default sendMessage;
