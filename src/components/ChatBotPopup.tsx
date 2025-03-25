import React, { useState } from 'react';
import '../css/chat.css'; // Add custom styles here

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-ui-container">
      {/* Chat Icon */}
      <button className="chat-icon" onClick={toggleChat}>
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h2>Chatbot Assistant</h2>
            <button className="close-btn" onClick={toggleChat}>
              ✖
            </button>
          </div>
          <div className="chat-body">
            <p>Welcome! How can I assist you today?</p>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
            />
            <button className="send-btn">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
