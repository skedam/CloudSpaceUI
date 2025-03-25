import React, { useState } from "react";
import { TopNavigation } from "@cloudscape-design/components";
import SearchWithFilter from "../SearchWithFilter"; // Correctly importing the SearchWithFilter component
import ChatBotPopup from "../ChatVedioUI"; // Adjust the import path
import '@cloudscape-design/global-styles/index.css';

const Topbar: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); 
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = (message: string) => {
    console.log("User sent message:", message);
    // Add your message handling logic here
  };
  const openChat = () => setIsChatOpen(true); // Open chat widget
  const closeChat = () => setIsChatOpen(false); // Close chat widget

  const profileActions = [
    { id: "profile", text: "Profile" },
    { id: "preferences", text: "Preferences" },
    { id: "security", text: "Security" },
    { id: "signout", text: "Sign out" },
  ];

  return (
    <>
      <TopNavigation
        identity={{
          href: "/",
          title: "HealthScribe",
          logo: { src: "vite.svg", alt: "Logo" },
        }}
        search={
          <div style={{ marginRight: "-432px" }}>
            <SearchWithFilter />
          </div>
          
        }
        utilities={[
          {
            type: "button",
            iconName: "notification",
            ariaLabel: "Notifications",
            badge: true,
          },
          {
            type: "button",
            iconName: "contact", // Chat icon
            ariaLabel: "Chat",
            onClick: toggleChat, // Open chat widget
          },
          { type: "button", iconName: "link", ariaLabel: "Link 2" },
          { type: "button", iconName: "link", ariaLabel: "Link 3" },
          {
            type: "menu-dropdown",
            text: "a Kedam",
            description: "a@example.com",
            iconName: "user-profile",
            items: profileActions,
          },
        ]}
        i18nStrings={{ navigationAriaLabel: "Top navigation" }}
        navigation={[
          { type: "link", text: "Home", href: "/" },
          { type: "link", text: "Tools", href: "/tools" },
        ]}
      />
 {/* Chat Box */}
      {isChatOpen && (
        <div className="chat-popup-container">
          <ChatBotPopup />
        </div>
      )}
    </>
  );
};

export default Topbar;
