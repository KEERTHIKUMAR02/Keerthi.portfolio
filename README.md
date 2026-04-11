# Portfolio

A single-page portfolio site built with React and TypeScript. It presents navigation, hero, about, work samples, services, and a contact form with toast feedback.

## Technologies

### Front end

| Area | Technologies |
|------|----------------|
| **Core** | React 18, TypeScript, Vite |
| **Routing** | React Router DOM |
| **Styling** | Tailwind CSS, tailwindcss-animate, tailwind-merge, PostCSS, Autoprefixer |
| **UI & accessibility** | Radix UI primitives, shadcn-style components in `src/components/ui/` |
| **Icons** | Lucide React |
| **Forms & validation** | React Hook Form, Zod, `@hookform/resolvers` |
| **Data / async** | TanStack Query (React Query) |
| **Feedback** | Sonner, Radix Toast (custom `useToast` hook) |
| **Theming** | next-themes (e.g. theme-aware Sonner) |
| **Other UI** | cmdk, Vaul (drawer), Embla Carousel, react-day-picker, Recharts, react-resizable-panels, input-otp |
| **Analytics (optional)** | Vercel Speed Insights (`@vercel/speed-insights`) |

### Back end

There is **no custom server or API** in this repository. The production app is a **static SPA** (HTML, JS, CSS) produced by `npm run build`.

| Area | Technologies / services |
|------|-------------------------|
| **Contact & email** | [EmailJS](https://www.emailjs.com/) — sends mail from the browser via EmailJS’s hosted API (configured in `src/components/Contact.tsx`) |
| **Hosting** | Static hosting only (e.g. GitHub Pages via `gh-pages`, or any static file host) |

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (comes with Node)

## Getting started

```sh
git clone https://github.com/KEERTHIKUMAR02/Keerthi.portfolio.git
cd Keerthi.portfolio
npm install
npm run dev
```

The dev server listens on **port 8080** (see `vite.config.ts`). Open the URL shown in the terminal (for example `http://localhost:8080`).

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start Vite in development mode |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build then publish `dist/` with **gh-pages** |

## Project structure

```
src/
├── App.tsx              # Router, providers, global toasters
├── main.tsx             # Entry
├── pages/
│   ├── Index.tsx        # Home (all sections)
│   └── NotFound.tsx     # 404
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── Services.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/              # Shared UI primitives
├── hooks/               # e.g. use-mobile, use-toast
└── lib/utils.ts         # `cn()` class name helper
```

## Contact form (EmailJS)

Submissions are sent with [EmailJS](https://www.emailjs.com/). Service ID, template ID, and public key are configured in `src/components/Contact.tsx`. For production, consider moving these to environment variables (`import.meta.env`) and keeping keys out of version control if the repository is public.

## Deployment

- **GitHub Pages:** The repo includes `gh-pages` and a `deploy` script. If the site is served from a project URL (`https://<user>.github.io/<repo>/`), set Vite’s `base` in `vite.config.ts` to `'/<repo-name>/'` so assets resolve correctly.
- **Other hosts:** Run `npm run build` and upload the `dist/` folder, or connect the repo to your host’s static-site workflow.

## License

This project is private (`"private": true` in `package.json`). Adjust licensing here if you publish the source publicly.
