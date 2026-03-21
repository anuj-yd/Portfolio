import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

const Section = ({ title, items, text }) => (
    <div className="space-y-2">
        <h4 className="text-xs font-black uppercase tracking-[0.25em] text-text-secondary">
            {title}
        </h4>
        {text ? (
            <p className="text-sm text-text-primary leading-relaxed">{text}</p>
        ) : (
            <ul className="text-sm text-text-primary leading-relaxed list-disc pl-5">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        )}
    </div>
);

const ProjectCaseStudyModal = ({ isOpen, onClose, project }) => {
    if (!project) return null;

    const { caseStudy } = project;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative bg-white w-full max-w-4xl h-[82vh] sm:h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-black shadow-[12px_12px_0px_#1A535C] flex flex-col"
                    >
                        <div className="flex items-center justify-between p-5 border-b-2 border-black/10 bg-bg-primary">
                            <div>
                                <h3 className="text-xl font-black text-text-primary uppercase tracking-wider">
                                    {project.title}
                                </h3>
                                <p className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em]">
                                    Project Autopsy
                                </p>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center text-text-primary hover:bg-accent-coral hover:text-white transition-all shadow-[2px_2px_0px_#1A1A1A]"
                                aria-label="Close"
                            >
                                <HiX size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-auto p-6 md:p-8 space-y-8">
                            <Section title="Problem" text={caseStudy.problem} />
                            <Section title="Constraints" items={caseStudy.constraints} />
                            <Section title="Architecture" items={caseStudy.architecture} />
                            <Section title="Tradeoffs" items={caseStudy.tradeoffs} />
                            <Section title="Results" items={caseStudy.results} />
                        </div>

                        <div className="p-4 text-center bg-white border-t-2 border-black/10">
                            <p className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em]">
                                Deep Dive Summary
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectCaseStudyModal;
