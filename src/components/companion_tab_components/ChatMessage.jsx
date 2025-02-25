// src/components/home_tab_components/ChatMessage.jsx
import React from 'react';
import './ChatMessage.css';

const ChatMessage = ({ isBot, text, avatar }) => {
  return (
    <div className={`chat-message ${isBot ? 'bot-message' : 'user-message'}`}>
      {isBot && avatar && <img src={avatar} alt="Bot Avatar" className="message-avatar" />}
      <div className="message-bubble">
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;