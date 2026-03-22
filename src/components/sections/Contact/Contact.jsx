import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { SiLinkedin, SiWhatsapp, SiGithub } from 'react-icons/si';
import { useFormspree } from '../../../hooks/useFormspree';
import Button from '../../ui/Button';
import BouncyText from '../../ui/BouncyText';

const Contact = () => {
    const { sendMessage, submitting } = useFormspree();
    const [status, setStatus] = useState(null);
    const [hoverRating, setHoverRating] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '', rating: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await sendMessage(formData);
        if (result.success) {
            setStatus({
                type: 'success',
                message: 'Message sent successfully!',
            });
            setFormData({ name: '', email: '', message: '', rating: '' });
        } else {
            const errorText =
                result?.error?.text ||
                result?.error?.message ||
                result?.error?.statusText ||
                'Unknown error';
            const details = import.meta.env.DEV ? ` (${errorText})` : '';
            setStatus({
                type: 'error',
                message: `Something went wrong. Please try again.${details}`,
            });
        }
        setTimeout(() => setStatus(null), 5000);
    };

    return (
        <section id="contact" className="py-10 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black mb-5 text-text-primary heading-reveal-target">
                        <BouncyText text="Get In " />
                        <span className="highlight-pill-teal"><BouncyText text="Touch" colorOffset={7} /></span>
                    </h2>
                    <div className="section-divider" />
                </div>

                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
                    <motion.div
                        initial={false}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-display font-black text-text-primary mb-6">Let's build something <span className="text-accent-teal italic font-display">amazing</span> together</h3>
                        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
                            Have a project in mind or just want to chat about tech?
                            Feel free to reach out. I'm always open to new opportunities
                            and collaborations.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent-teal group-hover:bg-accent-teal group-hover:text-white shadow-soft transition-all duration-300">
                                    <HiOutlineMail size={24} />
                                </div>
                                <div>
                                    <p className="text-text-secondary text-[10px] font-black uppercase tracking-widest mb-1">Email Me</p>
                                    <a href="mailto:anujyadav992241@gmail.com" className="text-lg text-text-primary hover:text-accent-teal transition-colors font-bold font-display">
                                        anujyadav992241@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-white shadow-soft transition-all duration-300">
                                    <HiOutlineLocationMarker size={24} />
                                </div>
                                <div>
                                    <p className="text-text-secondary text-[10px] font-black uppercase tracking-widest mb-1">Location</p>
                                    <p className="text-lg text-text-primary font-bold font-display">India (Open to Remote)</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white shadow-soft transition-all duration-300">
                                    <SiWhatsapp size={24} />
                                </div>
                                <div>
                                    <p className="text-text-secondary text-[10px] font-black uppercase tracking-widest mb-1">WhatsApp</p>
                                    <a
                                        href="https://wa.me/919936992241"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-text-primary hover:text-[#25D366] transition-colors font-bold font-display"
                                    >
                                        +91 9936992241
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white shadow-soft transition-all duration-300">
                                    <SiLinkedin size={24} />
                                </div>
                                <div>
                                    <p className="text-text-secondary text-[10px] font-black uppercase tracking-widest mb-1">LinkedIn</p>
                                    <a
                                        href="https://linkedin.com/in/anuj-yadav-158a47298"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-text-primary hover:text-[#0A66C2] transition-colors font-bold font-display"
                                    >
                                        anuj-yadav-158a47298
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#24292F] group-hover:bg-[#24292F] group-hover:text-white shadow-soft transition-all duration-300">
                                    <SiGithub size={24} />
                                </div>
                                <div>
                                    <p className="text-text-secondary text-[10px] font-black uppercase tracking-widest mb-1">GitHub</p>
                                    <a
                                        href="https://github.com/anuj-yd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-text-primary hover:text-[#24292F] transition-colors font-bold font-display"
                                    >
                                        anuj-yd
                                    </a>
                                </div>
                            </div>

                        </div>

                    </motion.div>

                    <motion.div
                        initial={false}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card-premium border-black/5 scroll-fade-card"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-3">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-bg-primary border border-black/5 rounded-2xl px-5 py-4 text-text-primary focus:outline-none focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/5 transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-3">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-bg-primary border border-black/5 rounded-2xl px-5 py-4 text-text-primary focus:outline-none focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/5 transition-all"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-3">Message</label>
                                <textarea
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-bg-primary border border-black/5 rounded-2xl px-5 py-4 text-text-primary focus:outline-none focus:border-accent-teal focus:ring-4 focus:ring-accent-teal/5 transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-text-secondary mb-3">Rate This Portfolio</label>
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((value) => {
                                        const rating = hoverRating !== null ? hoverRating : (Number(formData.rating) || 0);
                                        const isFull = rating >= value;
                                        const isHalf = rating === value - 0.5;
                                        return (
                                            <div key={value} className="relative w-6 h-6">
                                                {/* Base filled (beige) */}
                                                <svg width="20" height="20" viewBox="0 0 24 24" className="absolute inset-0" fill="#E7D4B5">
                                                    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                                                </svg>

                                                {/* Fill layer */}
                                                {(isFull || isHalf) && (
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        className="absolute inset-0"
                                                        fill="#F4C430"
                                                        stroke="none"
                                                        style={isHalf ? { clipPath: 'inset(0 50% 0 0)' } : undefined}
                                                    >
                                                        <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
                                                    </svg>
                                                )}

                                                {/* Half click area */}
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, rating: String(value - 0.5) })}
                                                    onMouseEnter={() => setHoverRating(value - 0.5)}
                                                    onMouseLeave={() => setHoverRating(null)}
                                                    className="absolute left-0 top-0 h-full w-1/2 bg-transparent"
                                                    aria-label={`Rate ${value - 0.5} star`}
                                                />
                                                {/* Full click area */}
                                                <button
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, rating: String(value) })}
                                                    onMouseEnter={() => setHoverRating(value)}
                                                    onMouseLeave={() => setHoverRating(null)}
                                                    className="absolute right-0 top-0 h-full w-1/2 bg-transparent"
                                                    aria-label={`Rate ${value} star`}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="text-[11px] text-text-secondary mt-2">
                                    {formData.rating ? `Selected: ${formData.rating}/5` : 'Optional'}
                                </p>
                            </div>

                            <Button type="submit" disabled={submitting} className="w-full">
                                {submitting ? 'Sending...' : 'Send Message'}
                            </Button>

                            {status && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className={`text-center font-medium ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
                                >
                                    {status.message}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
