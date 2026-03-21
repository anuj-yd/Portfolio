import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useEmailJS = () => {
    const [submitting, setSubmitting] = useState(false);

    const sendEmail = async (formData) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            return {
                success: false,
                error: new Error('Email service is not configured.'),
            };
        }

        setSubmitting(true);
        try {
            const templateParams = {
                to_email: 'anujyadav992241@gmail.com',
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                reply_to: formData.email,
                rating: formData.rating || 'Not provided'
            };

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            setSubmitting(false);
            return { success: true, response };
        } catch (error) {
            console.error('EmailJS send failed:', error);
            setSubmitting(false);
            return { success: false, error };
        }
    };

    return { sendEmail, submitting };
};
