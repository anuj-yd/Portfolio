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

      {/* Floating Action Buttons — only show when chat is closed */}
      {!isOpen && (
        <div
          className="fixed bottom-6 right-5 z-[9999] flex flex-col items-end gap-3"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <button
            type="button"
            onClick={() => {
              const home = document.getElementById('home');
              if (home) {
                home.scrollIntoView({ behavior: 'smooth', block: 'start' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center cursor-pointer overflow-hidden bg-white"
            style={{
              boxShadow: '4px 4px 0px #1A1A1A',
            }}
            aria-label="Back to top"
            title="Back to top"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A535C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </button>

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
