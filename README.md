# Pedro Cordova — Portfolio

Senior Frontend Engineer portfolio built with **React**, **TypeScript** and **Tailwind CSS**.

## Stack

- Vite + React 18
- TypeScript
- Tailwind CSS (dark mode)
- i18next (English primary, Portuguese secondary)

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Structure

```text
src/
  assets/           # Resume PDFs
  components/
    layout/         # Navbar, Footer
    sections/       # Page sections
    ui/             # Shared UI primitives
  data/             # Experiences, cases, skills, education
  hooks/            # Theme + locale content
  i18n/             # Translations
  img/              # Profile image
  styles/           # Global CSS + Tailwind
  types/            # Shared types
```

## Content checklist

See [CHECKLIST.md](./CHECKLIST.md) for the migration and content progress tracker.

## Deploy

Configured for Netlify static hosting (`dist` output from `npm run build`).
