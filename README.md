# 🚀 Modern "Architect" Portfolio & Analytics Engine (v14.0.0)

A premium, high-performance portfolio ecosystem designed for **Lead Engineers and Software Architects**. This is not just a resume; it's a strategic platform built with **React 19**, **TypeScript**, and **Vite**, featuring a high-fidelity **Interactive Skill Orbit** and a **Business-ROI narrative**.

---

## 🏛️ The "Architect" Strategy
Most portfolios focus on "what" was built. This platform is architected to showcase **"why"** it was built and the **"business value"** it delivered. It replaces standard feature lists with a leadership-first narrative focusing on:
- **Velocity**: Accelerating time-to-market.
- **ROI**: Reducing infrastructure spend and operational risk.
- **Scale**: Managing high-stakes, 24/7 distributed systems.

---

## ✨ Features for Forks
-   **🧬 Data-Driven Skill Orbit**: Customize a complex node-graph via a single `skills.json`. No SVG/Canvas math required.
-   **⚡ SSG Engine**: Pre-rendered with `vite-react-ssg` for perfect SEO & ATS readability.
-   **📊 Analytics Suite**: Private `/admin` dashboard powered by Firebase to track UTMs, unique hits, and project engagement.
-   **🌓 Professional Theming**: Highly-curated "Blueprint" styles that adapt accent colors for maximum contrast in Light/Dark modes.
-   **🌐 Global Localization**: Full i18n support (English/Turkish) with professional-grade terminology.

---

## 📦 Developer Quick Start

### 1. Prerequisites
- **Node.js**: v18.0.0+
- **pnpm**: (Recommended) `npm install -g pnpm`

### 2. Fork & Installation
1.  **Fork** this repo to your GitHub account.
2.  Clone and install:
    ```bash
    git clone https://github.com/YOUR_USERNAME/your-portfolio.git
    cd your-portfolio
    pnpm install
    ```

### 3. Personalization (The JSON-Only Path)
This project is **100% JSON-driven**. You rarely need to touch `.tsx` files. 

| File Path | What to Change |
| :--- | :--- |
| `src/assets/locales/en/resume/about.json` | High-level mission, Leadership pillars, and Testimonials. |
| `src/assets/locales/en/resume/experiences.json` | Metrics-first job history (Focus on ROI leading bullets). |
| `src/assets/locales/en/resume/caseStudies.json` | Deep-dives into technical problems and architectural decisions. |
| `src/assets/locales/en/resume/skills.json` | Define nodes and relationships for the Interactive Graph. |

---

## 🧬 Customizing the Skill Graph
The **Skill Orbit** (`src/pages/Skills/components/SkillGraph.tsx`) is the crown jewel of this portfolio. It is populated by `skills.json`:
1.  **Skill Groups**: Pill-shaped central nodes (e.g., "Architecture", "Fintech").
2.  **Tech Nodes**: Circular orbiting icons (e.g., "Node.js", "Docker").
3.  **Relationships**: Simply list `techIds` inside a group to draw dynamic, theme-aware connection lines.

---

## 🎨 Theme Customization
To change the primary branding or accent colors:
1.  Navigate to `src/app/theme/themes.ts`.
2.  Modify the `accentColor` token:
    - **Light Mode**: Recommended dark/professional shade (e.g., `#0070ba`).
    - **Dark Mode**: Recommended vibrant/tech-heavy shade (e.g., `#00a0ff`).
3.  The interactive graph and all blueprint elements will automatically synchronize with your new palette.

---

## 📂 Project Structure
```text
src/
├── app/            # Global state, theme definitions, and app constants
├── assets/         # Images and localized JSON content (The Data Layer)
├── components/     # Reusable UI components (NavBar, Footer, etc.)
├── core/           # Interfaces, Types, and shared Logic
├── pages/          # Individual page views (Home, Experience, Skills, Admin)
│   └── Skills/     # High-fidelity SVG/Motion Graph implementation
└── main.tsx        # App entry and SSG configuration
```

---

## 📊 Setting up Analytics (Firebase)
1.  Create a project at [Firebase Console](https://console.firebase.google.com/).
2.  Enable **Firestore Database**.
3.  Add your credentials to `.env.local`:
    ```env
    VITE_FIREBASE_API_KEY=xxx
    VITE_FIREBASE_PROJECT_ID=xxx
    # ... (see .env.example)
    ```
4.  Set Firestore rules to allow creates (for logging) but restrict reads (for your `/admin` dashboard).

---

## 🔐 Securing your Admin Dashboard
The `/admin` analytics view is protected by **BCrypt**.
1.  Generate a hash of your desired password.
2.  Update `ADMIN_HASH` in `src/app/pages/Admin.tsx`:
    ```typescript
    const ADMIN_HASH = '$2b$10$YourHash...';
    ```

---

## 🚀 Automated Deployment
Push to your `master` branch to trigger the **GitHub Actions** workflow. It will:
1.  Check for linting errors.
2.  Run the SSG build.
3.  Deploy a perfect, static site to the `gh-pages` branch.

---

## 📋 Technology Stack
- **Engine**: React 19, TypeScript, Vite 6
- **Animation**: Framer Motion
- **Styling**: Styled Components, React Bootstrap
- **SSG**: vite-react-ssg
- **Persistence**: Firebase Firestore

---

## 📄 License
MIT License - © 2026 Amin Abbasi
*Built for the high-fidelity professional.*
