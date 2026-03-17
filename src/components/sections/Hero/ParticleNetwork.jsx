import React, { useEffect, useRef } from 'react';
import { animate, random } from 'animejs';

const ParticleNetwork = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const particleCount = 40;
        const particles = [];

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute rounded-full bg-neon-cyan/20 blur-[1px]';
            const size = random(1, 5);
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${random(0, 100)}%`;
            particle.style.top = `${random(0, 100)}%`;
            container.appendChild(particle);
            particles.push(particle);
        }

        // Animate particles
        animate(particles, {
            x: () => [0, random(-100, 100)],
            y: () => [0, random(-100, 100)],
            scale: () => [Math.random(), Math.random() + 0.5],
            opacity: [0.1, 0.4],
            duration: () => random(3000, 8000),
            delay: () => random(0, 2000),
            loop: true,
            direction: 'alternate',
            ease: 'inOutQuad'
        });

        // Add some "shooting stars" or larger glowing orbs
        const glowOrbs = [];
        for (let i = 0; i < 3; i++) {
            const orb = document.createElement('div');
            orb.className = 'absolute rounded-full bg-neon-purple/10 blur-[40px]';
            const size = random(100, 300);
            orb.style.width = `${size}px`;
            orb.style.height = `${size}px`;
            orb.style.left = `${random(0, 100)}%`;
            orb.style.top = `${random(0, 100)}%`;
            container.appendChild(orb);
            glowOrbs.push(orb);
        }

        animate(glowOrbs, {
            x: () => [0, random(-200, 200)],
            y: () => [0, random(-200, 200)],
            duration: () => random(10000, 20000),
            loop: true,
            direction: 'alternate',
            ease: 'linear'
        });

        return () => {
            // Cleanup: remove elements if component unmounts
            if (container) {
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 z-[-10] overflow-hidden pointer-events-none"
            aria-hidden="true"
        />
    );
};

export default ParticleNetwork;
