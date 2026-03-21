import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../../../data/profile';
import ProjectCard from './ProjectCard';
import ProjectCaseStudyModal from './ProjectCaseStudyModal';
import BouncyText from '../../ui/BouncyText';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-10 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-5 text-text-primary heading-reveal-target">
                        <BouncyText text="Featured " />
                        <span className="highlight-pill-pink"><BouncyText text="Projects" colorOffset={9} /></span>
                    </h2>
                    <div className="section-divider" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {profile.projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: "power3.out", delay: i * 0.1 }}
                        >
                            <ProjectCard project={project} onCaseStudy={() => setSelectedProject(project)} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="https://github.com/anuj-yd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-wider px-6 py-3"
                        style={{
                            border: "2px solid #1A1A1A",
                            borderRadius: "0.5rem",
                            boxShadow: "3px 3px 0px #1A535C"
                        }}
                    >
                        See more on GitHub →
                    </a>
                </motion.div>
            </div>

            <ProjectCaseStudyModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
};

export default Projects;
