import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useChatbot } from './useChatbot';
import ChatIcon from './ChatIcon';
import ChatWindow from './ChatWindow';

const ChatBot = () => {
  const {
    messages,
    isOpen,
    isTyping,
    inputValue,
    hasInteracted,
    setInputValue,
    toggleChat,
    closeChat,
    sendMessage,
    clearMessages,
  } = useChatbot();

  return (
    <>
      {/* Chat window (renders above everything) */}
      <AnimatePresence>
        {isOpen && (
          <ChatWindow
            messages={messages}
            isTyping={isTyping}
            inputValue={inputValue}
            setInputValue={setInputValue}
            onSend={sendMessage}
            onClose={closeChat}
            onClear={clearMessages}
          />
        )}
      </AnimatePresence>

      {/* Floating Action Button — only show when chat is closed */}
      {!isOpen && (
        <div
          className="fixed bottom-6 right-5 z-[9999]"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <ChatIcon
            isOpen={isOpen}
            hasInteracted={hasInteracted}
            onClick={toggleChat}
          />
        </div>
      )}
    </>
  );
};

export default ChatBot;
