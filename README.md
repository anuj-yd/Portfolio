# Anuj Yadav • Portfolio

A modern, animated, and responsive developer portfolio built with React + Vite. It showcases projects, skills, certifications, DSA stats, and a Gemini-powered chatbot that answers based on portfolio data.

## What’s Inside

- Hero, About, Skills, Projects, DSA, Achievements, Certifications, Resume, Contact
- Floating chatbot with Gemini API (serverless)
- Theme toggle (light/dark)
- Rich motion and interactive UI

## Live Demo

Deployed URL: `https://anuj-yd.vercel.app`

## Screenshots

### Home

![Home](image.png)

The hero section introduces the portfolio with a bold headline, animated accents, and quick visual context about the developer. It’s designed to feel energetic and immediately communicate the tech-forward style of the site.

## Tech Stack

- React 19, Vite
- Tailwind CSS v4, Styled Components
- Framer Motion, GSAP, Anime.js, Lottie
- Recharts, react-scroll, react-icons
- EmailJS for contact form

## Quick Start

```bash
git clone https://github.com/anuj-yd/portfolio.git
cd portfolio
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the project root:

```env
# EmailJS
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=

# Gemini (serverless)
GEMINI_API_KEY=
GEMINI_MODEL=gemini-1.5-flash
```

## Gemini Chatbot (Vercel Serverless)

This project uses a Vercel serverless function for Gemini:

- `api/chat.js` handles the request
- Portfolio data is injected server-side
- Frontend calls `/api/chat`

When deploying on Vercel, add `GEMINI_API_KEY` in Project Settings → Environment Variables and redeploy.

## EmailJS Template Variables

The contact form sends these fields:

```text
to_email
from_name
from_email
message
reply_to
rating
```

## EmailJS Production Setup

To ensure the contact form works in production:

1. Add your domain to EmailJS → Service → `Allowed Domains`
2. Set the following env vars in your hosting provider and redeploy:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
3. Keep the EmailJS template variables exactly as listed above

## Project Structure

```text
src/
+-- components/
¦   +-- chatbot/
¦   +-- layout/
¦   +-- sections/
¦   +-- ui/
+-- data/
+-- hooks/
+-- App.jsx
+-- main.jsx
api/
+-- chat.js
public/
```

## Customization

Update content in:

- `src/data/profile.js`
- `src/data/projects.json`
- `src/data/skills.json`
- `src/data/achievements.json`
- `src/data/dsa-stats.json`

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Author

Anuj Yadav
- GitHub: https://github.com/anuj-yd
- LinkedIn: https://linkedin.com/in/anuj-yd

## License

MIT
