# gas-vite-preact

A modern starter template for building **full-stack Google Apps Script applications** with a proper frontend workflow.  
Still a work-in-progress, but already set up with a clean DX for both frontend and backend development.

## Features
- **Preact + TailwindCSS** for a lightweight, modern UI  
- **Vite** for fast frontend development and bundling  
- **Vitest** for frontend unit tests  
- **TypeScript** throughout the project  
- **ESBuild** for compiling backend Apps Script code  
- **Separate DEV and PROD environments** using `.clasp.dev.json` and `.clasp.prod.json`  
- Clear separation between frontend and backend source code  
- `public/` passthrough for static assets and Apps Script manifest files

---

## Project Structure

### `src/client/`
All frontend code (Preact, TypeScript, Tailwind).  
Bundled by Vite into a **single HTML file** in `dist/client/index.html`

### `src/server/`
All backend Apps Script code.  
Built using ESBuild into: `dist/server`


### `public/`
Copied directly into `dist/` without transformation.  
Must contain your project's `appsscript.json`.  
(This repository includes an example that you should replace.)

---

## Quickstart (Basic)

These steps will be expanded later, but this is enough to get started:

1. Add your DEV Script ID to **`.clasp.dev.json`**
2. Add your PROD Script ID to **`.clasp.prod.json`**
3. Replace the example **`appsscript.json`** inside **`public/`** with your own
4. Deploy the project using:

**`npm run deploy:dev`** or **`npm run deploy:prod`**

## NPM Scripts Overview

This template includes a full set of scripts for development, linting, testing, and deployment.

### Development & Build

* **`npm run dev`**
  Start the Vite dev server.

* **`npm run build`**
  Build both the frontend (Vite) and backend (ESBuild).

* **`npm run build:client`**
  Build only the frontend bundle.

* **`npm run build:server`**
  Build only the backend Apps Script bundle.

* **`npm run build:push`**
  Build everything and push to the current Apps Script project via `clasp`.

### Preview

* **`npm run preview`**
  Preview the production frontend build locally using Vite’s preview server.

### CSS Tools

* **`npm run build:css:watch`**
  Tailwind CLI in watch mode.

  * Input: `src/input.css`
  * Output: `src/output.css`

### Linting & Formatting

* **`npm run lint`**
  Run ESLint on the `src` directory.

* **`npm run lint:fix`**
  Run ESLint with auto-fix.

* **`npm run prettier`**
  Check formatting with Prettier.

* **`npm run prettier:fix`**
  Auto-format files using Prettier.

* **`npm run format`**
  Run both `prettier:fix` and `lint:fix` together.

### Git Hooks

* **`npm run prepare`**
  Install Husky Git hooks.

### Testing

* **`npm run test`**
  Run Vitest in CI mode.

* **`npm run test:watch`**
  Run Vitest in watch mode.

### Deployment

* **`npm run deploy:dev`**

  * Format code
  * Run tests
  * Build frontend + backend
  * Copy `.clasp.dev.json` → `.clasp.json`
  * Push to DEV using `clasp push -f`

* **`npm run deploy:prod`**
  Same flow as above but uses `.clasp.prod.json`.

* **`npm run deploy`**
  Alias for `deploy:dev`.