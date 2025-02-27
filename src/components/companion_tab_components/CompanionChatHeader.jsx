// src/components/companion_tab_components/CompanionChatHeader.jsx
import React from 'react';
import './CompanionChatHeader.css';

const CompanionChatHeader = () => {
  return (
    <div className="companion-chat-header">
      <img src="https://assets.api.uizard.io/api/cdn/stream/11a1a79c-9d9a-40b6-a7d7-5b2d1e6b4f70.png" alt="Eva" className="avatar" />
      <span className="header-text">Chat with companion</span>
      <span className="close-icon">⨯</span>
    </div>
  );
};

export default CompanionChatHeader;