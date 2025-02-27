// src/components/companion_tab_components/ChatInput.jsx
import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  // Sample suggestions based on the screenshot (expandable based on input)
  const suggestionOptions = [
    'What type of dress are you looking for...',
    'Are you shopping for a specific occasion...',
    'Do you have a favorite brand or design...',
    'How much would you like to spend?',
  ];

  // Filter suggestions based on user input (simple keyword matching for dresses or beauty products)
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.toLowerCase().includes('dress') || value.toLowerCase().includes('beauty')) {
      const filteredSuggestions = suggestionOptions.filter(suggestion =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions.length > 0 ? filteredSuggestions : suggestionOptions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput('');
      setSuggestions([]); // Clear suggestions after sending
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]); // Clear suggestions after selection
    onSend(suggestion); // Send the suggestion as a message, triggering Eva’s response
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-input-container">
      <div className="chat-input-wrapper">
        {isFocused && suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <span className="suggestion-icon">Q</span>
                {suggestion}
              </div>
            ))}
          </div>
        )}
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Message companion"
          className="chat-input"
        />
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatInput;