# 🚀 Ultra-Fast Personal Portfolio

A modern, high-impact personal portfolio website built with Astro island architecture, a vibrant visual design system, and the latest Tailwind CSS v4 engine. This project is designed to deliver outstanding performance, modular structure, and a polished developer experience.

## ✨ Why this project stands out

- Built with Astro for fast rendering and minimal JavaScript overhead
- Uses Tailwind CSS v4 with Vite integration for a modern styling workflow
- Structured around reusable components and clear separation of concerns
- Designed with strict TypeScript and maintainable code conventions in mind

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| Framework | Astro | Island-based architecture for fast, content-driven pages |
| Styling | Tailwind CSS v4 | Utility-first design system with the latest engine |
| Build Tooling | Vite | Fast local development and production builds |
| Language | TypeScript | Strict type safety and better maintainability |
| Formatting | Prettier + Astro/Tailwind plugins | Consistent code style and formatting |

## 🧱 Project Architecture

```text
.
├── public/                 # Static assets served directly
├── src/
│   ├── assets/             # Images and local media resources
│   ├── components/         # Reusable UI components
│   ├── config/             # Centralized portfolio data and constants
│   ├── layouts/            # Shared page layout wrappers
│   └── pages/              # Route-based entry points
├── astro.config.mjs        # Astro configuration with Tailwind + Vite
├── package.json            # Scripts, dependencies, and engine requirements
└── tsconfig.json           # Strict TypeScript configuration
```

## ▶️ Getting Started

1. Clone the repository:

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   If your environment prompts you to approve the esbuild install script, accept it so the native binary can be installed correctly.

3. Start the development server:

   ```bash
   npm run dev
   ```

   Open your browser at <http://localhost:4321>.

4. Build the project for production:

   ```bash
   npm run build
   ```

5. Preview the production build locally:

   ```bash
   npm run preview
   ```

## 📐 Core Guidelines

This project follows a strong set of engineering principles:

- Clean, readable, and maintainable code
- Modular components with clear responsibilities
- No magic values; content and configuration are kept intentional and centralized
- Strict TypeScript usage throughout the codebase
- Consistent formatting and developer-friendly structure

## 📄 License

This project is licensed under the MIT License.
