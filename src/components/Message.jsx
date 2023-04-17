import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../config/firsebase.config";

const Messagediv = styled.div`
  display: flex;
  align-items: center;
  padding: 2.25rem;
  box-shadow: 0 0 10px #a4a4a489;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  .name {
    position: absolute;
    margin-bottom: 4rem;
    font-size: 0.7rem;
    color: #02a802;
  }
  button {
    padding: 4px 5px;
    margin-left: 1rem;
    border-radius: 1rem 1rem 0 1rem;
    outline: none;
    border: none;
    background: #ee1d1d9e;
    color: #ededed;
  }
  img {
    margin-right: 0.5rem;
    border-radius: 50%;
  }

  &.sent {
    margin-left: auto;
    color: #eaeaea;
    background: linear-gradient(45deg, #b11eb166, #317fd9);
    border-radius: 1rem 1rem 0 1rem;
    padding: 0.5rem 1rem;
    float: right;
    margin: 1rem;
    font-weight: 500;
  }

  &.received {
    margin-right: auto;
    background: rgb(93, 79, 128);
    background: linear-gradient(
      183deg,
      rgba(93, 79, 128, 1) 4%,
      rgba(188, 122, 255, 1) 89%
    );
    color: #eaeaea;
    border-radius: 1rem 1rem 1rem 0rem;
    padding: 0.5rem 1rem;
    float: left;
    margin: 1rem;
    font-weight: 500;
  }
`;

const Message = ({ message, deleteMessage }) => {
  const { text } = message;

  const messageClass =
    message.uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div>
      <Messagediv className={messageClass} messageClass={messageClass}>
        <img
          src={message.photo}
          alt=""
          width="20"
          height="20"
          className="avatar"
        />
        <p className="name">{message.name}</p>
        <p>{text}</p>
        <button onClick={() => deleteMessage(message.id)} >remove</button>
      </Messagediv>
    </div>
  );
};

export default Message;
