import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useEmailJS = () => {
    const [submitting, setSubmitting] = useState(false);

    const sendEmail = async (formData) => {
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
                import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
            );

            setSubmitting(false);
            return { success: true, response };
        } catch (error) {
            setSubmitting(false);
            return { success: false, error };
        }
    };

    return { sendEmail, submitting };
};
