import React, { useEffect, useState } from 'react';
import { profile } from '../../../data/profile';
import BouncyText from '../../ui/BouncyText';

const Achievements = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const achievements = profile.achievements || [];

    useEffect(() => {
        if (achievements.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % achievements.length);
        }, 3200);

        return () => clearInterval(interval);
    }, [activeIndex, achievements.length]);

    const getAchievement = (offset) =>
        achievements[(activeIndex + offset) % achievements.length];

    return (
        <section id="achievements" className="py-10 relative overflow-hidden bg-bg-secondary/30">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-5 text-text-primary heading-reveal-target">
                        <BouncyText text="Key " />
                        <span className="highlight-pill-pink"><BouncyText text="Achievements" colorOffset={4} /></span>
                    </h2>
                    <div className="section-divider" />
                </div>

                {achievements.length > 0 && (
                    <div className="flex justify-center">
                        <div className="relative ach-stack w-full max-w-3xl">
                            {[1, 2].map((offset) => {
                                const item = getAchievement(offset);
                                if (!item) return null;
                                return (
                                    <div
                                        key={`${item.title}-${offset}`}
                                        className="ach-slide card-retro scroll-fade-card !p-0 overflow-hidden"
                                        style={{
                                            zIndex: 3 - offset,
                                            transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.04})`,
                                            opacity: 1 - offset * 0.15
                                        }}
                                    >
                                        <div className="p-8 md:p-10">
                                            <div className="flex items-center justify-between mb-6">
                                                <span className="text-xs font-black uppercase tracking-[0.3em] text-text-secondary">
                                                    Achievement {((activeIndex + offset) % achievements.length) + 1} / {achievements.length}
                                                </span>
                                                <span className="retro-badge">{item.date}</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-display font-black text-text-primary mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-secondary text-base leading-relaxed font-medium max-w-2xl">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}

                            {(() => {
                                const item = getAchievement(0);
                                if (!item) return null;
                                return (
                                    <div
                                        key={`${item.title}-${activeIndex}`}
                                        className="ach-slide card-retro scroll-fade-card !p-0 overflow-hidden fade-in-tr"
                                        style={{ zIndex: 3 }}
                                    >
                                        <div className="p-8 md:p-10">
                                            <div className="flex items-center justify-between mb-6">
                                                <span className="text-xs font-black uppercase tracking-[0.3em] text-text-secondary">
                                                    Achievement {((activeIndex) % achievements.length) + 1} / {achievements.length}
                                                </span>
                                                <span className="retro-badge">{item.date}</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-display font-black text-text-primary mb-4">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-secondary text-base leading-relaxed font-medium max-w-2xl">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Achievements;
