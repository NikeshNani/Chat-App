import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch initial messages
    axios.get("http://localhost:5000/messages").then((response) => {
      setMessages(response.data);
    });

    // Listen for incoming messages
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("message");
  }, []);

  const sendMessage = () => {
    if (newMessage.trim()) {
      socket.emit("sendMessage", newMessage);
      setNewMessage("");
    }
  };

  return (
    <>
      {messages.map((msg, index) => (
        <div key={index} className="message">
          {msg}
        </div>
      ))}
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </>
  );
};

export default ChatScreen;