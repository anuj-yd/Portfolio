import React from 'react';
import { motion } from 'framer-motion';

const HOVER_COLORS = ['#E85D4A', '#F4833D', '#F4C430', '#1A535C', '#E8699A'];

const BouncyText = ({ text = '', className = '', style = {}, as: Tag = 'span', colorOffset = 0 }) => {
    const characters = text.split('');

    return (
        <Tag className={`inline-flex flex-wrap ${className}`} style={{ ...style }}>
            {characters.map((char, i) => (
                <motion.span
                    key={i}
                    style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                    whileHover={{
                        y: -15,
                        scale: 1.2,
                        color: HOVER_COLORS[(colorOffset + i) % HOVER_COLORS.length],
                        transition: {
                            type: 'spring',
                            stiffness: 800,
                            damping: 10,
                            mass: 0.5
                        },
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </Tag>
    );
};

export default BouncyText;
