import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BouncyText from '../../ui/BouncyText';
import CertificateModal from './CertificateModal';
import { HiOutlineAcademicCap, HiOutlineEye } from 'react-icons/hi';

const certifications = [
    {
        title: "JavaScript Intermediate",
        issuer: "HackerRank",
        date: "2024",
        url: "/certificates/javascript_intermediate certificate.pdf",
        color: "#F4C430"
    },
    {
        title: "Problem Solving Intermediate",
        issuer: "HackerRank",
        date: "2024",
        url: "/certificates/problem_solving_intermediate certificate.pdf",
        color: "#1A535C"
    },
    {
        title: "OCI Foundations",
        issuer: "Oracle",
        date: "2023",
        url: "/certificates/eCertificate Oracle.pdf",
        color: "#E85D4A"
    },
    {
        title: "Cloud Computing",
        issuer: "NPTEL",
        date: "2023",
        url: "/certificates/Cloud Computing.pdf",
        color: "#F4833D"
    },
    {
        title: "Responsive Web Design",
        issuer: "freeCodeCamp",
        date: "2023",
        url: "/certificates/freecodecamp.pdf",
        color: "#E8699A"
    },
    {
        title: "DSA Self Paced",
        issuer: "GeeksforGeeks",
        date: "2023",
        url: "/certificates/dsa cert.pdf",
        color: "#1A535C"
    }
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certifications" className="py-10 relative overflow-hidden bg-[#FAF7F0]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-black mb-5 text-text-primary">
                        <BouncyText text="My " />
                        <span className="highlight-pill-orange"><BouncyText text="Certifications" colorOffset={3} /></span>
                    </h2>
                    <div className="section-divider" />
                    <p className="max-w-xl mx-auto text-text-secondary font-medium text-lg mt-6">
                        Validation of my skills and continuous learning journey through industry-recognized certifications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-[2rem] p-8 border-[3px] border-[#1A1A1A] relative group"
                            style={{ boxShadow: `8px 8px 0px ${cert.color}` }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white border-2 border-black shadow-[3px 3px 0px #1A1A1A]"
                                    style={{ background: cert.color }}
                                >
                                    <HiOutlineAcademicCap size={24} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary opacity-50">
                                    {cert.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-black text-text-primary mb-2 uppercase tracking-tight leading-tight">
                                {cert.title}
                            </h3>
                            <p className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-8 opacity-70">
                                {cert.issuer}
                            </p>

                            <button
                                onClick={() => setSelectedCert(cert)}
                                className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-widest px-5 py-2.5 bg-white border-2 border-black rounded-xl transition-all hover:bg-black hover:text-white shadow-[4px 4px 0px #1A1A1A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                            >
                                <HiOutlineEye size={16} />
                                View Certificate
                            </button>

                            {/* Decorative element */}
                            <div
                                className="absolute bottom-4 right-4 w-12 h-12 rounded-full opacity-[0.03] group-hover:opacity-10 transition-opacity"
                                style={{ background: cert.color }}
                            />
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
