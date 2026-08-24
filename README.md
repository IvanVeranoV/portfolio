# Iván Verano Peña | Portfolio

Personal portfolio for Iván Verano Peña, Java developer focused on software development with AI and DevSecOps. It is a static Astro site with a responsive, vibrant interface and centralized portfolio data.

## Features

- Fixed navigation bar with links to every portfolio section.
- Hero section with contact, LinkedIn and GitHub links.
- Featured project section with repository and live demo links.
- Skill categories with client-side filtering.
- Fixed-height, independently scrollable experience and education timelines.
- Responsive layout and reduced-motion support.
- Theme and component styles centralized in `src/styles/global.css`.

## Featured Project

**Event Horizon** is a local event countdown application with import and export support.

- Live demo: <https://cuenta-atras-eventos.vercel.app>
- Repository: <https://github.com/IvanVeranoV/CuentaAtrasEventos>

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| Framework | Astro |
| Styling | Tailwind CSS v4 and centralized CSS components |
| Build tool | Vite |
| Language | TypeScript and Astro templates |
| Formatting | Prettier with Astro and Tailwind plugins |

## Project Structure

```text
.
├── public/                 # Public assets and favicon files
├── src/
│   ├── components/
│   │   └── Navbar.astro    # Fixed portfolio navigation
│   ├── config/
│   │   └── constants.ts    # Profile, project, skill, work and education data
│   ├── layouts/
│   │   └── Layout.astro    # Shared HTML shell and global styles
│   ├── pages/
│   │   └── index.astro     # Portfolio page and skill filter behavior
│   └── styles/
│       └── global.css      # Theme, component styles and responsive rules
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Getting Started

Requirements: Node.js `>=22.12.0` and npm.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open <http://localhost:4321> in a browser.

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Format source files:

```bash
npx prettier --plugin=prettier-plugin-astro --write src
```

## Content Management

Profile content is kept in `src/config/constants.ts`. Update the exported profile, social links, projects, skills, experience and education collections there. Visual theme values and reusable component styles belong in `src/styles/global.css`; page templates should primarily define structure and content flow.
