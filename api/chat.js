import { profile } from '../src/data/profile.js';

const DEFAULT_MODEL = 'gemini-1.5-flash';

const buildSystemPrompt = (data) => `You are Anuj's portfolio assistant.
Answer only using the provided portfolio data. If something is not in the data, say you don't have that information.
Use the portfolio's social links (GitHub, LinkedIn) and resume URL when users ask for contact, profiles, or resume.
Match the user's language and tone (e.g., Hindi, Hinglish, or English) and answer in a direct, conversational way.
Be concise, friendly, and professional. Prefer bullet points when listing.

PORTFOLIO_DATA:
${JSON.stringify(data)}`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Missing GEMINI_API_KEY' });
    return;
  }

  const { message } = req.body || {};
  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'Message is required' });
    return;
  }

  const model = process.env.GEMINI_MODEL || DEFAULT_MODEL;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        role: 'user',
        parts: [{ text: buildSystemPrompt(profile) }],
      },
      {
        role: 'user',
        parts: [{ text: message }],
      },
    ],
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 512,
    },
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!response.ok || !text) {
      res.status(500).json({ error: 'Gemini request failed', details: data });
      return;
    }

    res.status(200).json({ reply: text });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error?.message });
  }
}
