# Copilot AI Agent Instructions for `company-web`

## Project Overview
- **Framework:** Next.js 12 (TypeScript, React 18)
- **Structure:**
  - `pages/` — Next.js page routes and API endpoints
    - `index.tsx`: Main landing page
    - `api/hello.ts`: Example API route
    - `_app.tsx`: Custom App component for global setup
  - `styles/` — CSS modules and global styles
  - `public/` — Static assets (not shown, but standard for Next.js)
- **Config:**
  - `next.config.js`: Next.js config (strict mode, SWC minify)
  - `tsconfig.json`: TypeScript config (strict, noEmit)
  - `package.json`: Scripts, dependencies, Node 16.x required

## Key Workflows
- **Development:**
  - Start dev server: `npm run dev` (or `yarn dev`)
  - Hot reloads on file changes
- **Build:**
  - Production build: `npm run build`
  - Start prod server: `npm run start`
- **API Routes:**
  - Any file in `pages/api/` is served as `/api/*` endpoint
  - Example: `pages/api/hello.ts` → `/api/hello`

## Conventions & Patterns
- **Pages:**
  - Each `.tsx` file in `pages/` becomes a route
  - Use React functional components and TypeScript types
- **Styling:**
  - Use CSS modules for component styles (e.g., `Home.module.css`)
  - Use `globals.css` for global styles
- **TypeScript:**
  - Strict mode enabled; all files should be typed
- **No custom server or advanced routing** (as of current structure)

## Integration & Dependencies
- **External:**
  - Only core Next.js, React, and TypeScript dependencies
  - No custom middleware, state management, or API integrations present
- **Node version:** 16.x (see `package.json`)

## Examples
- To add a new page: create `pages/about.tsx` → accessible at `/about`
- To add an API route: create `pages/api/foo.ts` → accessible at `/api/foo`
- To use styles: import from `../styles/YourStyle.module.css`

## References
- See `README.md` for getting started and deployment links
- See Next.js docs: https://nextjs.org/docs

---

**Update this file if you introduce new conventions, workflows, or architectural changes.**
