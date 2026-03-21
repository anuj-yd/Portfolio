import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BouncyText from '../../ui/BouncyText';
import CertificateModal from './CertificateModal';
import { HiOutlineAcademicCap, HiOutlineEye } from 'react-icons/hi';

import { profile } from '../../../data/profile';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certifications" className="py-10 relative overflow-hidden bg-bg-secondary/30">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-5 text-text-primary heading-reveal-target">
                        <BouncyText text="Key " />
                        <span className="highlight-pill-pink"><BouncyText text="Certifications" colorOffset={4} className="text-white" /></span>
                    </h2>
                    <div className="section-divider" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profile.certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative h-[420px] sm:h-[470px] group [perspective:1200px] scroll-fade-card"
                        >
                            <div className="cert-flip-card">
                                {/* Front */}
                                <div
                                    className="cert-face bg-white rounded-[2rem] p-0 border-[3px] border-[#1A1A1A] relative flex flex-col overflow-hidden"
                                    style={{ boxShadow: `8px 8px 0px ${cert.color}` }}
                                >
                                    {cert.thumbnail && (
                                        <div className="h-1/2 bg-white">
                                            <img
                                                src={cert.thumbnail}
                                                alt={`${cert.title} thumbnail`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-4">
                                            <div
                                                className="w-11 h-11 rounded-2xl flex items-center justify-center text-white border-2 border-black shadow-[3px 3px 0px #1A1A1A]"
                                                style={{ background: cert.color }}
                                            >
                                                <HiOutlineAcademicCap size={22} />
                                            </div>
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary opacity-50">
                                                {cert.date}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-black text-text-primary mb-2 uppercase tracking-tight leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-xs font-bold text-text-secondary uppercase tracking-widest opacity-70">
                                            {cert.issuer}
                                        </p>
                                        {cert.description && (
                                            <p className="mt-3 text-xs font-medium text-text-secondary leading-relaxed line-clamp-3">
                                                {cert.description}
                                            </p>
                                        )}
                                    </div>

                                    <div
                                        className="absolute bottom-4 right-4 w-12 h-12 rounded-full opacity-[0.03] transition-opacity"
                                        style={{ background: cert.color }}
                                    />

                                </div>

                                {/* Back */}
                                <div
                                    className="cert-face cert-back rounded-[2rem] p-8 border-[3px] border-[#1A1A1A] text-text-primary flex flex-col"
                                    style={{
                                        background: `linear-gradient(135deg, ${cert.color}26 0%, ${cert.color}10 60%, #ffffff 120%)`,
                                        boxShadow: `8px 8px 0px #1A1A1A`,
                                    }}
                                >
                                    <div>
                                        <h3 className="text-xl font-black mb-2 uppercase tracking-tight">{cert.title}</h3>
                                        <div className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-5">
                                            Issued By
                                        </div>
                                        <div className="text-lg font-black mb-4">{cert.issuer}</div>
                                        <div className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-2">
                                            Date
                                        </div>
                                        <div className="text-sm font-bold">{cert.date}</div>
                                    </div>

                                    <button
                                        onClick={() => setSelectedCert(cert)}
                                        className="w-full mt-auto inline-flex items-center justify-center gap-2 font-black text-xs uppercase tracking-widest px-5 py-3 bg-white text-black border-2 border-black rounded-xl shadow-[4px 4px 0px #000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                                    >
                                        <HiOutlineEye size={16} />
                                        View Certificate
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <CertificateModal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                certUrl={selectedCert?.url}
                certTitle={selectedCert?.title}
            />
        </section>
    );
};

export default Certifications;
