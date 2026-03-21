import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps children with a FlowFest-style colored wipe page transition.
 * On mount: teal panel wipes off from right, revealing content.
 * Provides a useScrollReveal hook via data-reveal attributes.
 */
const PageTransition = ({ children }) => {
    const panelRef = useRef(null);

    useEffect(() => {
        // Page enter: wipe off
        const tl = gsap.timeline();
        tl.set(panelRef.current, { scaleX: 1, transformOrigin: 'left center' })
            .to(panelRef.current, {
                scaleX: 0,
                duration: 1.2,
                ease: 'power4.inOut',
                transformOrigin: 'right center',
            });

        // Stagger reveal for ALL elements with data-reveal
        const revealEls = document.querySelectorAll('[data-reveal]');
        revealEls.forEach((el, i) => {
            const dir = el.getAttribute('data-reveal') || 'up';
            const fromVars =
                dir === 'up' ? { y: 80, opacity: 0 }
                    : dir === 'left' ? { x: -80, opacity: 0 }
                        : dir === 'right' ? { x: 80, opacity: 0 }
                            : { scale: 0.8, opacity: 0 };

            gsap.from(el, {
                ...fromVars,
                duration: 1.2,
                ease: 'power4.out',
                delay: i * 0.05,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 92%',
                    toggleActions: 'play none none none',
                },
            });
        });

        // Heading reveal: apply tracking-in-expand-fwd-top on scroll for main headings only
        const headingEls = document.querySelectorAll('.heading-reveal-target');
        headingEls.forEach((el) => {
            el.classList.add('heading-reveal');
            ScrollTrigger.create({
                trigger: el,
                start: 'top 92%',
                onEnter: () => el.classList.add('heading-reveal-active'),
                once: true,
            });
        });

        // Card fade animation: re-trigger on scroll up/down
        const fadeCards = document.querySelectorAll('.scroll-fade-card');
        fadeCards.forEach((el) => {
            const playFade = () => {
                el.classList.remove('fade-in-top');
                void el.offsetWidth;
                el.classList.add('fade-in-top');
            };

            ScrollTrigger.create({
                trigger: el,
                start: 'top 92%',
                onEnter: playFade,
                onEnterBack: playFade,
                onLeave: () => el.classList.remove('fade-in-top'),
                onLeaveBack: () => el.classList.remove('fade-in-top'),
            });
        });

        // Ensure all triggers are calculated correctly after elements are rendered
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 500);

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Wipe panel */}
            <div
                ref={panelRef}
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: '#1A535C',
                    zIndex: 9998,
                    transformOrigin: 'left center',
                }}
            />
            {children}
        </div>
    );
};

export default PageTransition;
