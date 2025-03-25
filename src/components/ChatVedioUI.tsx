import React, { useState } from 'react';
import '../css/ChatVedioUI.css'; // Add custom styles here

const ChatUI: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (isVideoOpen) {
      setIsVideoOpen(false); // Close video popup if chat is opened
    }
  };

  const toggleVideo = () => {
    if (!isChatOpen) {
      setIsVideoOpen(!isVideoOpen); // Open video popup if chat is not open
    }
  };

  const endVideoCall = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="chat-ui-container">
      <div className="icon-container">
        {/* Chat Icon */}
        <button className="chat-icon" onClick={toggleChat}>
          💬
        </button>

        {/* Video Call Icon */}
        <button className="video-icon" onClick={toggleVideo}>
          📹
        </button>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h2>Chat Assistant</h2>
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

      {/* Video Call Window */}
      {!isChatOpen && isVideoOpen && (
        <div className="video-window">
          <div className="video-header">
            <h2>Video Call</h2>
            <button className="end-call-btn" onClick={endVideoCall}>
              End Call
            </button>
          </div>
          <div className="video-body">
            <p>Video call is in progress... (Placeholder for actual video integration).</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatUI;
