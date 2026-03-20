import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { motion } from 'framer-motion';
import { SiLinkedin, SiGithub, SiWhatsapp } from 'react-icons/si';
import FixedMarquee from '../../ui/FixedMarquee';
import BouncyText from '../../ui/BouncyText';


gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
    const titleRef = useRef(null);
    const greetRef = useRef(null);
    const imgRef = useRef(null);
    const taglineRef = useRef(null);
    const statsRef = useRef(null);
    const btnsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Greeting text fade in
            gsap.from(greetRef.current, {
                y: 30, opacity: 0, duration: 1.0, ease: 'power4.out', delay: 1.1
            });
            // Avatar pop in
            gsap.from(imgRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 1.2,
                ease: 'elastic.out(1, 0.75)',
                delay: 1.3
            });

            // Internal reveals for buttons and badges (reliable alternative to ScrollTrigger at top)
            gsap.to([taglineRef.current, statsRef.current, btnsRef.current], {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power4.out',
                delay: 1.5
            });

        });
        return () => ctx.revert();
    }, []);

    const firstName = "Anuj";
    const lastName = "Yadav";

    return (
        <section id="home" className="relative bg-bg-primary overflow-hidden pt-20 pb-0" style={{ minHeight: 'auto' }}>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">

                    {/* ───── LEFT: Name + Greeting ───── */}
                    <div className="order-2 lg:order-1">

                        {/* Greeting in handwriting */}
                        <span
                            ref={greetRef}
                            style={{
                                fontFamily: "'Caveat', cursive",
                                fontSize: "2rem",
                                color: "#4A4A4A",
                                display: "block",
                                marginBottom: "4px"
                            }}
                        >
                            Hi! I Am —
                        </span>

                        {/* Sticker name - two lines */}
                        <h1
                            ref={titleRef}
                            className="font-display font-extrabold leading-[0.9] mb-6"
                            style={{
                                fontSize: "clamp(3.5rem, 7vw, 6rem)",
                                color: "#1A1A1A",
                                textShadow: "4px 5px 0px rgba(26,83,92,0.25)",
                            }}
                        >
                            <div className="overflow-hidden h-[1.1em]">
                                <BouncyText text={firstName} />
                            </div>
                            <div className="overflow-hidden h-[1.1em] -mt-2">
                                <BouncyText text={lastName} colorOffset={firstName.length} />
                            </div>
                        </h1>

                        {/* Short description (between name and icons) */}
                        <p className="text-base md:text-lg text-text-secondary font-medium leading-relaxed mb-6 max-w-xl">
                            <span className="block">I build scalable and efficient software solutions backed by strong data structure fundamentals.</span>
                            <span className="block">Focused on clean architecture, performance optimization, and solving real-world problems.</span>
                        </p>

                        {/* Social Icons - Below Name with gap */}
                        <div className="flex gap-4 mb-6">
                            {[
                                { Icon: SiLinkedin, href: "https://linkedin.com/in/anuj-yadav-158a47298" },
                                { Icon: SiGithub, href: "https://github.com/anuj-yd" },
                                { Icon: SiWhatsapp, href: "https://wa.me/919936992241" },
                            ].map(({ Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-text-secondary border-2 border-black"
                                    style={{ boxShadow: "2px 2px 0 #1A1A1A" }}
                                    whileHover={{ y: -5, boxShadow: "4px 4px 0 #1A535C" }}
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Tagline sticker */}
                        <div
                            ref={taglineRef}
                            className="inline-block mb-6"
                            style={{
                                background: "#E85D4A",
                                color: "#fff",
                                padding: "0.5rem 1.2rem",
                                border: "2px solid #1A1A1A",
                                boxShadow: "3px 3px 0 #1A1A1A",
                                borderRadius: "0.4rem",
                                fontFamily: "'Caveat', cursive",
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                transform: "rotate(-1.5deg)",
                                opacity: 0 // Start hidden for internal gsap
                            }}
                        >
                            Open to Work! 🚀
                        </div>

                        {/* Exp row */}
                        <div ref={statsRef} className="flex items-baseline gap-3 mb-6" style={{ opacity: 0 }}>
                            <span className="text-5xl font-display font-black text-text-primary">01+</span>
                            <div className="text-xs uppercase tracking-widest font-black text-text-secondary leading-tight">YEARS<br />EXPERIENCE</div>
                        </div>

                        {/* CTAs */}
                        <div ref={btnsRef} className="flex gap-4 flex-wrap" style={{ opacity: 0 }}>
                            <motion.a href="#projects" whileHover={{ x: -3, y: -3 }} className="btn-primary text-sm">
                                See My Work
                            </motion.a>
                            <motion.a href="#contact" whileHover={{ x: -3, y: -3 }} className="btn-coral text-sm">
                                Hire Me →
                            </motion.a>
                        </div>
                    </div>

                    {/* ───── RIGHT: Real Photo ───── */}
                    <div className="order-1 lg:order-2 flex justify-end pr-4 mt-12 lg:mt-12">
                        <div ref={imgRef} className="relative">
                            {/* Spinning dashed ring */}
                            <div className="absolute -inset-8 border-4 border-dashed border-accent-gold rounded-full animate-spin-slow opacity-70 pointer-events-none" />

                            {/* Rotating blob bg */}
                            <div className="absolute -inset-4 bg-accent-orange/15 rounded-full animate-blob pointer-events-none" />

                            {/* Offset shadow - circular */}
                            <div
                                className="absolute inset-0 rounded-full pointer-events-none"
                                style={{
                                    background: "#1A535C",
                                    transform: "translate(10px, 10px)"
                                }}
                            />

                            {/* Photo Frame - Circle */}
                            <div
                                className="relative overflow-hidden bg-white"
                                style={{
                                    width: "500px",
                                    height: "500px",
                                    borderRadius: "50%",
                                    border: "5px solid #1A1A1A",
                                }}
                            >
                                <img
                                    src="/assets/anuj.png"
                                    alt="Anuj Yadav"
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        e.target.src = "https://api.dicebear.com/7.x/avataaars/svg?seed=AnujYadav&backgroundColor=FAF7F0&mouth=smile&eyes=squint&eyebrows=raisedExcited&hair=shortFlat&hairColor=2c1b18&skinColor=ae5d29&clothingColor=262e33&clothing=blazerAndTie";
                                    }}
                                />
                                {/* Corner brackets - FlowFest style */}
                                {[
                                    "top-2 left-2",
                                    "top-2 right-2 rotate-90",
                                    "bottom-2 right-2 rotate-180",
                                    "bottom-2 left-2 -rotate-90"
                                ].map((pos, i) => (
                                    <svg key={i} width="28" height="28" className={`absolute ${pos}`} viewBox="0 0 22 22" fill="none">
                                        <path d="M3 18V3H18" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ))}
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-16 h-16 bg-accent-gold rounded-full flex items-center justify-center text-3xl"
                                style={{ border: "3px solid #1A1A1A", boxShadow: "3px 3px 0 #1A1A1A" }}
                                animate={{ rotate: [0, 12, -12, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                👨‍💻
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-8 -right-14 bg-white px-5 py-3 hidden md:block"
                                style={{
                                    border: "2.5px solid #1A1A1A",
                                    boxShadow: "4px 4px 0 #E85D4A",
                                    borderRadius: "0.75rem",
                                    transform: "rotate(3deg)"
                                }}
                                whileHover={{ rotate: 0 }}
                            >
                                <div style={{ fontFamily: "'Caveat', cursive", fontSize: "1rem", color: "#1A535C", fontWeight: 600, lineHeight: 1 }}>Creative</div>
                                <div className="text-base font-black text-text-primary leading-none">Developer.</div>
                            </motion.div>

                            <motion.div
                                className="absolute -left-10 top-6 bg-accent-coral text-white px-4 py-2 text-xs font-black uppercase tracking-wider hidden md:block"
                                style={{ border: "2px solid #1A1A1A", boxShadow: "3px 3px 0 #1A1A1A", borderRadius: "0.5rem", transform: "rotate(-6deg)" }}
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 2.5, repeat: Infinity }}
                            >
                                MERN Stack ⚡
                            </motion.div>
                        </div>
                    </div>

                    {/* ───── RIGHT: Statement + Stats ───── */}
                    <div className="lg:col-span-4 order-3 text-right" data-reveal="right">
                        <p className="text-xl md:text-2xl text-text-secondary max-w-xs ml-auto mb-4 leading-relaxed">
                            I build{" "}
                            <span className="highlight-pill">seamlessly scalable</span>
                            {" "}digital experiences and{" "}
                            <span className="highlight-pill-teal">I love what I do.</span>
                        </p>
                    </div>

                </div>
            </div>

            <FixedMarquee />
        </section>

    );
};

export default Hero;
