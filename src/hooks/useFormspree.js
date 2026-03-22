import { useState } from 'react';

const resolveFormspreeEndpoint = () => {
    const explicitEndpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT || '').trim();
    if (explicitEndpoint) {
        return explicitEndpoint;
    }

    const formId = (import.meta.env.VITE_FORMSPREE_FORM_ID || '').trim();
    if (formId) {
        return `https://formspree.io/f/${formId}`;
    }

    return '';
};

export const useFormspree = () => {
    const [submitting, setSubmitting] = useState(false);

    const sendMessage = async (formState) => {
        const endpoint = resolveFormspreeEndpoint();
        if (!endpoint) {
            return {
                success: false,
                error: new Error('Form endpoint is not configured. Set VITE_FORMSPREE_ENDPOINT or VITE_FORMSPREE_FORM_ID.'),
            };
        }

        setSubmitting(true);
        try {
            const payload = new FormData();
            payload.append('name', formState.name);
            payload.append('email', formState.email);
            payload.append('_replyto', formState.email);
            payload.append('message', formState.message);
            payload.append('rating', formState.rating || 'Not provided');
            payload.append('_subject', 'New Contact Form Message');

            const response = await fetch(endpoint, {
                method: 'POST',
                body: payload,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                return { success: true };
            }

            let errorMessage = 'Oops! There was a problem submitting your form';
            try {
                const data = await response.json();
                if (data?.errors?.length) {
                    errorMessage = data.errors.map((err) => err.message).join(', ');
                }
            } catch {
                // Ignore JSON parse errors and fall back to a generic message.
            }

            return { success: false, error: new Error(errorMessage) };
        } catch (error) {
            console.error('Formspree submission failed:', error);
            return { success: false, error };
        } finally {
            setSubmitting(false);
        }
    };

    return { sendMessage, submitting };
};
