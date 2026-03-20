import React from 'react';
import { motion } from 'framer-motion';

const TypingIndicator = () => {
  return (
    <div className="flex items-start gap-2 mb-3">
      {/* Bot avatar */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border-2 border-black overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A535C 0%, #F4C430 100%)' }}
      >
        <img src="/assets/anuj.png" alt="Anuj" className="w-full h-full object-cover" />
      </div>

      {/* Typing dots bubble */}
      <div
        className="flex items-center gap-1.5 px-4 py-3 rounded-2xl rounded-tl-sm border-2 border-black"
        style={{
          background: '#FFFFFF',
          boxShadow: '2px 2px 0px #1A1A1A',
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block w-2 h-2 rounded-full"
            style={{ backgroundColor: '#1A535C' }}
            animate={{
              y: [0, -6, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.15,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TypingIndicator;
