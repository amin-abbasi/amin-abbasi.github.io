# 🚀 Modern Developer Portfolio & Analytics Engine

A premium, high-performance portfolio website built with **React 19**, **TypeScript**, and **Vite**. Features **Static Site Generation (SSG)** for perfect SEO and a built-in **Admin Analytics Dashboard** powered by Firebase.

---

## ✨ Features

-   **⚡ Extreme Performance**: Pre-rendered with `vite-react-ssg` for near-instant loads and a 100/100 Lighthouse potential.
-   **🔍 SEO & ATS Ready**: Full static HTML generation ensures your resume and projects are readable by search engines and Applicant Tracking Systems.
-   **📊 Analytics Engine**: A private dashboard (`/admin`) to track hits, unique visitors, top countries, and traffic sources using **Firebase Firestore**.
-   **🎯 UTM & Event Tracking**: Automatic capture of UTM tags for marketing and "virtual page view" tracking for project clicks.
-   **🌐 Multi-Language (i18n)**: High-fidelity support for English and Turkish (extendable via simple JSON).
-   **🌓 Smart Dark Mode**: Persistent theme support with a blocking script to prevent "dark mode flashes" on load.
-   **🛠️ JSON-Driven Content**: Update your entire portfolio without touching React code.

---

## 🛠️ Tech Stack

-   **Frontend**: [React 19](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite 6](https://vitejs.dev/)
-   **SSG**: [vite-react-ssg](https://github.com/antfu/vite-react-ssg)
-   **Database/Analytics**: [Firebase Firestore](https://firebase.google.com/docs/firestore)
-   **Styling**: [Styled Components](https://styled-components.com/), [React Bootstrap](https://react-bootstrap.github.io/)
-   **Internationalization**: [i18next](https://www.i18next.com/)

---

## 📦 Quick Start for Forks

### 1. Prerequisites
-   **Node.js**: v18.0.0 or higher
-   **pnpm**: (Highly Recommended) `npm install -g pnpm`

### 2. Fork & Installation
1.  **Fork** this repository to your own account.
2.  Clone your fork:
    ```bash
    git clone https://github.com/YOUR_USERNAME/your-portfolio-repo.git
    cd your-portfolio-repo
    ```
3.  Install dependencies:
    ```bash
    pnpm install
    ```

### 3. Environment Configuration
Create a `.env.local` file in the root directory:
```env
# Firebase Credentials (Required for Analytics & Admin)
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
```

### 4. Run Locally
```bash
pnpm dev
```
Visit `http://localhost:5173` to see your portfolio in action.

---

## 🔐 The Admin Engine

The portfolio includes a professional analytics dashboard accessible at `/admin`. This is secured using **BCrypt** hashing.

### How to Change the Admin Password
1.  Generate a new BCrypt hash for your desired password (use any [online generator](https://www.browserling.com/tools/bcrypt) or local utility).
2.  Open `src/app/pages/Admin.tsx`.
3.  Replace the `ADMIN_HASH` constant (line 8) with your new hash:
    ```typescript
    const ADMIN_HASH = '$2b$10$YourNewHashGoesHere...';
    ```
4.  Commit and push your changes.

---

## 🛠️ Content Customization Guide

This portfolio is strictly JSON-driven. You rarely need to touch the `.tsx` files to change your personal details.

### JSON File Mapping
All content is located in `src/assets/locales/{en|tr}/resume/`:

| Section | JSON File | Description |
| :--- | :--- | :--- |
| **Hero & About** | `about.json` | Name, roles, intro text, and testimonials. |
| **Experience** | `experiences.json` | Work history, roles, and tech stacks. |
| **Projects** | `projects.json` | Case studies, GitHub links, and tech used. |
| **Skills** | `skills.json` | Categorized technical skills and icons. |
| **Studies** | `studies.json` | Education, certifications, and courses. |

### Global Styling & Colors
To change the primary accent color or background themes:
1.  Open `src/theme/themes.ts`.
2.  Update the `accentColor` and `background` tokens in the `lightTheme` and `darkTheme` objects.

---

## 📊 Firebase Setup (Optional for Analytics)

If you want the **Analytics Engine** and **Contact Tracking** to work, you must set up a Firebase Project:

1.  Create a project at [Firebase Console](https://console.firebase.google.com/).
2.  Enable **Firestore Database**.
3.  **Firestore Rules**: Set your rules to allow creates (for analytics logging) but restrict reads (for admin view):
    ```js
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /page_views/{view} {
          allow create: if true;
          allow read: if true; // Ideally restricted by your Auth/IP!
        }
      }
    }
    ```
4.  Copy your Web App credentials into your environment variables.

---

## 🚀 Deployment (GitHub Pages)

Deployment is fully automated via **GitHub Actions**.

### 1. Enable GitHub Pages
In your GitHub repo settings: **Settings > Pages > Build and deployment**, set Source to **GitHub Actions**.

### 2. Configure Repository Secrets
To allow the build to include your Firebase credentials, go to **Settings > Secrets and variables > Actions** and add:
-   `VITE_FIREBASE_PROJECT_ID`
-   ... (Add all other `VITE_FIREBASE_*` variables from your `.env.local`)

### 3. Automatic Deploy
Every push to the `master` branch will trigger a build and deploy to the `gh-pages` branch.

---

## 📄 License
MIT License - © 2026 Amin Abbasi

---
*Created with focus on high-fidelity architecture and performance.*
