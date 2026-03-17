import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/* Retro frame corner brackets */
const FrameCorner = ({ className }) => (
    <svg
        width="18" height="18" viewBox="0 0 18 18" fill="none"
        className={`absolute ${className}`}
        aria-hidden="true"
    >
        <path d="M2 14V2H14" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -8, rotate: -0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="card-retro !p-0 overflow-hidden group relative flex flex-col h-full"
        >
            {/* Frame corners */}
            <FrameCorner className="top-2.5 left-2.5" />
            <FrameCorner className="top-2.5 right-2.5 rotate-90" />
            <FrameCorner className="bottom-2.5 right-2.5 rotate-180" />
            <FrameCorner className="bottom-2.5 left-2.5 -rotate-90" />

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category tag on image */}
                <div
                    className="absolute top-3 left-3 bg-accent-gold text-text-primary text-[10px] font-black uppercase tracking-widest px-3 py-1"
                    style={{ border: "1.5px solid #1A1A1A", borderRadius: "0.3rem", boxShadow: "2px 2px 0px #1A1A1A" }}
                >
                    Project
                </div>
            </div>

            {/* Content */}
            <div className="p-7 flex flex-col flex-grow">
                <h3
                    className="text-xl font-black mb-3 text-text-primary group-hover:text-accent-teal transition-colors"
                    style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
                >
                    {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-5 line-clamp-3 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded bg-bg-primary text-accent-teal"
                            style={{ border: "1.5px solid #1A535C" }}
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 border-t-2 border-black/5 pt-5">
                    <motion.a
                        whileHover={{ x: -2, y: -2 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-text-primary px-4 py-2 rounded"
                        style={{ border: "2px solid #1A1A1A", boxShadow: "2px 2px 0px #1A535C" }}
                    >
                        <FaGithub size={14} /> Code
                    </motion.a>
                    <motion.a
                        whileHover={{ x: -2, y: -2 }}
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white px-4 py-2 rounded bg-accent-coral"
                        style={{ border: "2px solid #1A1A1A", boxShadow: "2px 2px 0px #1A1A1A" }}
                    >
                        <FaExternalLinkAlt size={12} /> Live
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
