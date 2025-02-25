// src/components/home_tab_components/CompanionChatHeader.jsx
import React from 'react';
import './CompanionChatHeader.css';

const CompanionChatHeader = () => {
  return (
    <div className="companion-chat-header">
      <img src="https://assets.api.uizard.io/api/cdn/stream/11a1a79c-9d9a-40b6-a7d7-5b2d1e6b4f70.png" alt="Eva" className="chat-header-avatar" />
      <span className="chat-header-title">Chat with Companion</span>
      <span className="chat-header-close">⨯</span>
    </div>
  );
};

export default CompanionChatHeader;