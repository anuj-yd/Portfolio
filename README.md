# Interactive Developer Portfolio

A dynamic, fully responsive, and highly animated personal portfolio website to showcase projects, skills, certifications, and coding achievements.

> Tip: Replace the preview image with a real screenshot.

![Portfolio Preview](/public/vite.svg)

## Highlights

- Modern stack: React 19, Vite, Tailwind CSS v4
- Rich motion: Framer Motion, GSAP, Anime.js
- Custom UI: animated cursor, smooth scrolling, page transitions
- Sections: Hero, About, Skills, Projects, DSA, Certifications, Contact
- Chatbot: floating CV assistant that answers portfolio questions
- Contact form: EmailJS integration

## Tech Stack

- Framework: React
- Build tool: Vite
- Styling: Tailwind CSS, Styled Components
- Animations: Framer Motion, GSAP, Anime.js, Lottie
- Icons: React Icons, Lucide
- Charts: Recharts
- Utilities: react-scroll, clsx
- Email: @emailjs/browser

## Project Structure

```text
src/
+-- animations/        # Reusable animation variants
+-- assets/            # Static files, images, icons
+-- components/        # React components
¦   +-- chatbot/       # Floating CV chatbot
¦   +-- layout/        # Navbar, transitions
¦   +-- sections/      # Hero, About, Skills, Projects, DSA, Contact
¦   +-- ui/            # Reusable UI elements
+-- data/              # JSON content (projects, skills, achievements, DSA stats)
+-- hooks/             # Custom hooks
+-- styles/            # Global stylesheets
+-- utils/             # Helpers
+-- App.jsx            # Main app
+-- main.jsx           # Entry point
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (ships with Node.js)

### Installation

```bash
git clone https://github.com/anuj-yd/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run Locally

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## NPM Commands

These are the scripts used in this project (from `package.json`):

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Lint the codebase
```

## Customization

Update content in `src/data/`:

- `projects.json` for projects
- `skills.json` for skills
- `dsa-stats.json` for competitive programming stats
- `achievements.json` for milestones
- `profile.js` for personal details and certifications

## Author

Anuj Yadav
- GitHub: https://github.com/anuj-yd
- Contact: via the portfolio form

## License

MIT License
