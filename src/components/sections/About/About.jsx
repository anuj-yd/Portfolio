import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import Timeline from './Timeline';
import BouncyText from '../../ui/BouncyText';

const About = () => {
    const stats = [
        { label: 'Years of Experience', value: '3', suffix: '+' },
        { label: 'Projects Completed', value: '15', suffix: '+' },
        { label: 'DSA Problems', value: '700', suffix: '+' },
        { label: 'Technologies', value: '10', suffix: '+' },
    ];

    return (
        <section id="about" className="py-12 relative overflow-hidden">
            <div className="absolute top-12 left-10 w-48 h-48 bg-accent-teal/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-12 w-56 h-56 bg-accent-gold/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-5 heading-reveal-target">
                        <BouncyText text="About " />
                        <span className="highlight-pill-teal"><BouncyText text="Me" colorOffset={6} /></span>
                    </h2>
                    <div className="section-divider" />
                </div>

                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start"
                    >
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl font-display font-black mb-6 text-text-primary">
                                Passionate developer crafting <span className="text-accent-teal italic">digital experiences</span>
                            </h3>
                            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                                I am a MERN Stack Developer who builds full-stack applications with a strong
                                foundation in Data Structures and Algorithms. I work with React, Node.js,
                                Express, and MongoDB, and I focus on modular, scalable systems, secure APIs,
                                and smooth user experiences.
                            </p>
                            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                                I have delivered projects like a MERN mental health assessment platform,
                                a shortest-path visualizer using Dijkstra's algorithm, and a volunteer
                                management system with authentication and certificates. I enjoy solving
                                problems, learning fast, and turning ideas into reliable, production-ready products.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 justify-items-center">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className="bg-white rounded-full p-4 relative overflow-hidden group border-2 border-black aspect-square flex items-center justify-center w-40 h-40 md:w-44 md:h-44"
                                    style={{
                                        boxShadow: `8px 8px 0px ${['#F4833D', '#F4C430', '#1A535C', '#E8699A'][i % 4]}`,
                                    }}
                                >
                                    <div className="relative z-10 text-center">
                                        <div className="flex items-center justify-center gap-2 mb-2">
                                            <div
                                                className="w-2.5 h-2.5 rounded-full"
                                                style={{ background: ['#F4833D', '#F4C430', '#1A535C', '#E8699A'][i % 4] }}
                                            />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary">
                                                {stat.label.split(' ')[0]}
                                            </span>
                                        </div>
                                        <div className="flex items-baseline justify-center">
                                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                        </div>
                                        <p className="text-[11px] font-bold text-text-secondary mt-1 uppercase tracking-tighter opacity-70">
                                            {stat.label}
                                        </p>
                                    </div>
                                    <div
                                        className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-opacity"
                                        style={{ background: ['#F4833D', '#F4C430', '#1A535C', '#E8699A'][i % 4] }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-display font-black text-text-primary mb-4">
                            My Professional <span className="highlight-pill-orange">Journey</span>
                        </h3>
                        <p className="text-sm font-bold text-text-secondary uppercase tracking-[0.3em] opacity-40">Milestones & Growth</p>
                    </div>
                    <div className="mt-12">
                        <Timeline />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
