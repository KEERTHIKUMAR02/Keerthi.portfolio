# Portfolio Project Analysis

## Overview
This is a React + TypeScript portfolio website built with Vite, Tailwind CSS, and a custom UI wrapper layer. It is structured as a single-page application with a home route and a fallback 404 page.

## Key Technologies
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI via custom wrappers
- React Router DOM
- EmailJS for contact form sending
- Sonner and Radix Toast for notifications
- `@tanstack/react-query` for app-level query provider
- `class-variance-authority` + `clsx` + `tailwind-merge`

## Entry Points
- `src/main.tsx` — mounts `<App />` into the DOM using ReactDOM's `createRoot`.
- `src/App.tsx` — wraps the app with `QueryClientProvider`, `TooltipProvider`, `Toaster`, and `BrowserRouter`.

## Routing
- `/` mapped to `src/pages/Index.tsx`
- `*` mapped to `src/pages/NotFound.tsx`

## Page Structure
### `src/pages/Index.tsx`
- Composes the homepage using these section components:
  - `Navigation`
  - `Hero`
  - `About`
  - `Portfolio`
  - `Services`
  - `Contact`
  - `Footer`

### `src/pages/NotFound.tsx`
- Uses `useLocation()` to log invalid route attempts.
- Renders a styled 404 page with a link back home.

## Components
### `src/components/Navigation.tsx`
- Responsive sticky navbar.
- Smooth scrolls to section anchors.
- Mobile menu toggles open/close.

### `src/components/Hero.tsx`
- Hero section with headline, summary, CTA buttons, and profile image.
- Includes a `Download CV` action.
- **Bug:** `handleResumeClick()` opens a new tab but also throws `Error('Function not implemented.')`, which will break the app flow.
- Uses `Button` from `src/components/ui/button.tsx`.

### `src/components/About.tsx`
- About section with profile visuals and cards for Education, Passion, and Goal.
- Uses decorative background elements and responsive layout.

### `src/components/Portfolio.tsx`
- Portfolio card grid with stateful selection.
- Supports YouTube video modals and image gallery modals.
- Includes project metadata and external links.
- Has helper `extractYoutubeID()` for robust YouTube ID extraction.
- Uses placeholder images and a local video asset path.
- Contains a project object with a `link: "null"` string for one entry, which may be a data placeholder.

### `src/components/Services.tsx`
- Service cards with icons and descriptions.
- Includes a CTA button that scrolls to contact section.

### `src/components/Contact.tsx`
- Contact form built with local state.
- Sends messages through EmailJS with hard-coded service/template/public key.
- Uses `useToast()` for toast notifications.
- Includes contact info cards for email and phone.

### `src/components/Footer.tsx`
- Footer with quick links, contact info, and a copyright notice.
- Scroll buttons reuse page anchor navigation.

## Hooks / State
### `src/hooks/use-mobile.tsx`
- Detects mobile viewport using `window.matchMedia`.
- Returns a boolean for mobile state.

### `src/hooks/use-toast.ts`
- Custom toast state manager.
- Maintains shared toast state inside a singleton-like listener system.
- Exposes `useToast()`, `toast()`, and `dismiss()`.
- Supports different toast variants and manual removal.

## Utility
### `src/lib/utils.ts`
- `cn(...)` helper combining `clsx` and `tailwind-merge`.

## UI Wrapper Library
The folder `src/components/ui/` contains a set of custom wrapper components around Radix UI primitives and UI libraries.

### Notable custom wrappers
- `button.tsx` — styled button component with `class-variance-authority` variant system.
- `tooltip.tsx` — Radix Tooltip wrapper with default animation and styling.
- `toast.tsx` — Radix Toast wrapper with variant support.
- `toaster.tsx` — renders toasts from `useToast()`.
- `sonner.tsx` — Sonner toast component using `next-themes` for theme-aware toast styling.

### Purpose
- This folder provides reusable UI components with consistent Tailwind styling.
- Most files in `src/components/ui/` are wrappers for Radix primitives, giving them app-wide default classes and theme behavior.

## Styling and Configuration
### `tailwind.config.ts`
- Configures Tailwind with custom theme colors tied to CSS variables.
- Enables `darkMode` as class-based.
- Extends animations, border radius values, and container options.
- Adds `tailwindcss-animate` plugin.

### `src/index.css`
- Defines CSS custom properties for color tokens and dark mode.
- Includes base Tailwind layers and a reusable `.bg-grid-pattern` background pattern.

### `src/App.css`
- Contains leftover starter styles from Vite.
- Not imported by current application code, so it is effectively unused.

### `vite.config.ts`
- Uses `@vitejs/plugin-react-swc` for React compilation.
- Sets an alias `@` to `./src`.
- Adds `lovable-tagger` plugin only in development mode.
- Configures host `::` and port `8080`.

## Dependencies and Tooling
### Major runtime dependencies
- `react`, `react-dom`, `react-router-dom`
- `@tanstack/react-query`
- `tailwind-merge`, `clsx`, `class-variance-authority`
- `@radix-ui/react-*` primitives
- `sonner`, `lucide-react`, `emailjs/browser`
- `next-themes` for theme-aware components

### Dev dependencies
- `vite`, `typescript`, `eslint`, `@tailwindcss/typography`, `@vitejs/plugin-react-swc`

## Observations and Recommendations
- `Hero.tsx` has a broken resume button handler that will throw an exception after opening the link.
- `Contact.tsx` embeds EmailJS credentials directly in source, which is a security risk.
- `App.css` appears unused and could be removed if not needed.
- `tailwind.config.ts` includes content patterns that cover `./app/**/*`, but the repo uses `src/`, so the config is broader than required.
- `Portfolio.tsx` uses some placeholder image URLs and may need real assets for production.

## Summary
This project is a portfolio landing page built as a modern React SPA with reusable UI patterns and a custom toast system. The design is heavily Tailwind-driven, with Radix UI wrappers providing accessible primitives. The main logic lives in the homepage sections and the toast/contact flow, while `src/components/ui/` serves as the foundational component library.
