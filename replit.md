# SparkPay - Global Neobank Landing Page + Dashboard

## Overview
A visually rich React + Vite single-page marketing site for SparkPay, a fictional onchain global neobank. Features animated phone mockups, parallax mouse effects, scroll-based animations with Framer Motion, and multiple sections showcasing the product. Includes a full dashboard SPA at `/app` with client-side routing via React Router.

## Tech Stack
- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS v4 (via @tailwindcss/vite plugin)
- **Icons:** Lucide React
- **Animation:** Framer Motion (scroll-triggered section transitions, phone float animations, dashboard page transitions)
- **Routing:** React Router v7 (BrowserRouter, client-side navigation)
- **Package Manager:** npm

## Project Structure
```
/
├── attached_assets/   # Brand assets (logo sources - not served by web server)
├── public/
│   ├── favicon.png
│   ├── bitcoin-orange.avif, bitcoin-black.avif
│   ├── ethereum-coin.avif, ethereum-purple.avif, ethereum-coin-3d.avif
│   ├── gold-dollar.avif, gold-rectangle.avif
│   ├── solana-3d.avif
│   ├── chain-network.avif, lock-icon.avif
│   └── (avif coin/asset images for bento grid)
├── src/
│   ├── App.tsx            # Landing page (single-page marketing layout)
│   ├── main.tsx           # React entry point with BrowserRouter + route config
│   ├── index.css          # Global styles + CSS keyframe animations
│   └── dashboard/
│       ├── DashboardLayout.tsx   # Sidebar, header, bottom tabs, AnimatePresence
│       └── pages/
│           ├── DashboardHome.tsx  # Balance, assets, quick actions, activity, chart
│           ├── CardsPage.tsx      # Card UI, freeze/CVV toggles, spending limits
│           ├── EarnPage.tsx       # USDC/USDT/SOL yield vaults, expandable deposit
│           ├── InvestPage.tsx     # Portfolio, SVG chart, holdings table
│           ├── BorrowPage.tsx     # FiScore, loan eligibility, collateral
│           └── SettingsPage.tsx   # Profile, 2FA toggle, sessions, exports
├── index.html         # HTML entry point (full SEO meta tags, OG, Twitter cards, structured data)
├── vite.config.ts     # Vite configuration (port 5000, allowedHosts: true)
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Routing
- `/` - Landing page (marketing site)
- `/app` - Dashboard home (balance overview, assets, activity)
- `/app/cards` - Cards management
- `/app/earn` - Yield vaults
- `/app/invest` - Investment portfolio
- `/app/borrow` - Loans and FiScore
- `/app/settings` - Profile and security settings
- "Launch App" buttons use React Router `<Link>` for zero-reload navigation

## Sections (in order)
1. **Hero** - Phone mockup with parallax mouse tracking + float animation
2. **Overview** (id="overview") - Scroll-reveal text + fingerprint scanner
3. **Product** (id="product") - Earn/Dashboard phone mockup (Solana, SOL, USDC)
4. **How It Works** (id="how-it-works") - Spend section with card + transactions
5. **Security** (id="security") - Investment portfolio phone mockup
6. **Borrow** - Who SparkPay is built for
7. **Features** (id="features") - Bento grid with real asset logos
8. **Our Tech** (id="tech") - Technology stats (<1s, 65k+ TPS, 256-bit, $0.00)
9. **Roadmap** (id="roadmap") - Q1-Q4 2026 timeline with scroll-animated lines
10. **CTA** - Call to action with gradient glow
11. **Final CTA & Footer** - Phone + card illustration, footer with X link

## Dashboard Design System
- Background: `#05050a`
- Cards: `#0f0f13` with `#1e293b/50` borders
- Inner panels: `#111424` with `#1e293b` borders
- Gradient accent: `#9b51e0` to `#f27a33`
- Success green: `#00e676`
- Font: Inter
- Icons: lucide-react

## Navbar
- Fixed position with backdrop blur
- Links to all sections with smooth scroll
- "Launch App" CTA button (React Router Link to /app)
- Responsive mobile hamburger menu with Framer Motion animation
- Links: Overview, Product, How It Works, Security, Features, Our Tech, Roadmap

## Partners
- Visa, Mastercard, Solana logos

## Footer
- 2026 SparkPay Inc. All rights reserved
- X (Twitter) social link: https://x.com/SparkPayX

## Phone Animations
- Hero: `animate-phone-float-hero` (3D rotation + float)
- Section 3 & 4: `animate-phone-float-left` (vertical float)
- Section 5 & 6: `animate-phone-float` (3D rotation + float)

## Development
- **Dev server:** `npm run dev` - runs on `0.0.0.0:5000`
- **Build:** `npm run build` - outputs to `dist/`
- **Lint:** `npm run lint`

## Deployment
- **Type:** Static site
- **Build command:** `npm run build`
- **Public directory:** `dist`

## Key Configuration
- Vite is configured with `host: '0.0.0.0'`, `port: 5000`, and `allowedHosts: true` for Replit proxy compatibility.
- `vite.config.ts` has `watch.ignored` patterns to prevent constant reloads from Replit internal files.
- avif files are served from `/public/` directory (not imported via Vite alias).
- Domain: `get-spark.xyz` (canonical, OG, structured data in index.html)
