import {
  collection,
  onSnapshot,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";
import React from "react";
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { Message, SendMessage } from "../Index";
import { query } from "firebase/firestore";
import { db } from "../config/firsebase.config";
import bg from "../assets/chatbg.jpg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  overflow-y: scroll;
  height: 80vh;
  scroll-behavior: smooth;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const Chat = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages.reverse());
      scroll.current.scrollIntoView({ behavior: "smooth" });
    });
    return unsubscribe;
  }, []);

  const deleteMessage = async (messageId) => {
    try {
      const messageRef = doc(db, "messages", messageId);
      await deleteDoc(messageRef);
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };
  //new function
  const sendMessage = async (message) => {
    setIsSending(true);
    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
    setIsSending(false);
  };

  return (
    <>
      <Main style={{backgroundImage: `url(${bg})`}}>
        {messages &&
          messages.map((message) => {
            return (
              <Message
                key={message.id}
                message={message}
                deleteMessage={deleteMessage}
              />
            );
          })}
        {isSending && <div>loading...</div>}
        <span ref={scroll}></span>
      </Main>
      <SendMessage scroll={scroll} deleteMessage={deleteMessage} />
    </>
  );
};

export default Chat;
