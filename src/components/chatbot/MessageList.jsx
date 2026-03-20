import React, { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';

const MessageList = ({ messages, isTyping }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div
      className="flex-1 overflow-y-auto px-3 pt-3 pb-1"
      style={{ scrollbarWidth: 'thin', scrollbarColor: '#1A535C #FAF7F0' }}
    >
      {messages.map((msg, index) => (
        <MessageBubble key={msg.id} message={msg} index={index} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} />
    </div>
  );
};

export default MessageList;
