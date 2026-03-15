# SparkPay - Global Neobank Landing Page

## Overview
A visually rich React + Vite landing page for SparkPay, a fictional onchain global neobank. Features animated phone mockups, parallax mouse effects, scroll-based animations, and multiple sections showcasing the product.

## Tech Stack
- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **Icons:** Lucide React
- **Animation:** Motion (Framer Motion)
- **AI:** @google/genai (Gemini API)
- **Package Manager:** npm

## Project Structure
```
/
├── attached_assets/   # Brand assets (logo source)
├── public/
│   └── favicon.png    # Browser tab favicon
├── src/
│   ├── App.tsx        # Main application component (single-page layout)
│   ├── main.tsx       # React entry point
│   └── index.css      # Global styles
├── index.html         # HTML entry point (favicon + title configured)
├── vite.config.ts     # Vite configuration (port 5000, allowedHosts: true)
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Development
- **Dev server:** `npm run dev` → runs on `0.0.0.0:5000`
- **Build:** `npm run build` → outputs to `dist/`
- **Lint:** `npm run lint`

## Environment Variables
- `GEMINI_API_KEY` — Required for Gemini AI features (set via Replit Secrets)

## Deployment
- **Type:** Static site
- **Build command:** `npm run build`
- **Public directory:** `dist`

## Key Configuration
- Vite is configured with `host: '0.0.0.0'`, `port: 5000`, and `allowedHosts: true` for Replit proxy compatibility.
