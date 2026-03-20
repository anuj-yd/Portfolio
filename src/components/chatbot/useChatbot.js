import { useState, useCallback } from 'react';
import { profile } from '../../data/profile';
import { findAnswer } from './matcher';

const INITIAL_MESSAGE = {
  id: 1,
  text: `Hi! I'm Anuj's virtual assistant. I can answer questions about his skills, projects, education, certifications, and more!\n\nWhat would you like to know?`,
  sender: 'bot',
  timestamp: new Date()
};

export const useChatbot = () => {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);

  const openChat = useCallback(() => {
    setIsOpen(true);
    setHasInteracted(true);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => {
      if (!prev) setHasInteracted(true);
      return !prev;
    });
  }, []);

  const sendMessage = useCallback(async (userMessage) => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    const userMsg = {
      id: Date.now(),
      text: trimmedMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const minDelay = 700 + Math.random() * 600;
    const delayPromise = new Promise(resolve => setTimeout(resolve, minDelay));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmedMessage })
      });
      const data = await response.json();

      await delayPromise;

      const botReply = response.ok && data?.reply
        ? data.reply
        : findAnswer(trimmedMessage, profile);

      const botMsg = {
        id: Date.now() + 1,
        text: botReply,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      await delayPromise;
      const fallbackReply = findAnswer(trimmedMessage, profile);
      const botMsg = {
        id: Date.now() + 1,
        text: fallbackReply,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([INITIAL_MESSAGE]);
  }, []);

  return {
    messages,
    isOpen,
    isTyping,
    inputValue,
    hasInteracted,
    setInputValue,
    openChat,
    closeChat,
    toggleChat,
    sendMessage,
    clearMessages
  };
};
