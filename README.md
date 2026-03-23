# 🚀 Modern Developer Portfolio & Analytics Engine

A premium, high-performance portfolio website built with **React**, **TypeScript**, and **Vite**. Features **Static Site Generation (SSG)** for perfect SEO and a built-in **Admin Analytics Dashboard**.

---

## ✨ Key Features

-   **⚡ Extreme Performance**: Pre-rendered with `vite-react-ssg` for near-instant loads and a 100/100 Lighthouse potential.
-   **🔍 SEO & ATS Ready**: Full static HTML generation ensures your resume and projects are readable by search engines and Applicant Tracking Systems.
-   **📊 Admin Analytics Dashboard**: A private dashboard (`/admin`) to track hits, unique visitors, top countries, and traffic sources using **Firebase Firestore**.
-   **🎯 UTM & Event Tracking**: Automatic capture of UTM tags for marketing and "virtual page view" tracking for project clicks.
-   **🌐 Multi-Language (i18n)**: Built-in support for English and Turkish (easy to add more via JSON).
-   **🌓 Smart Dark Mode**: Persistent theme support with a blocking script to prevent "dark mode flashes" on load.
-   **🛠️ JSON-Driven Content**: Update your entire portfolio without touching a single line of React code.

---

## 🛠️ Tech Stack

-   **Frontend**: [React 19](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
-   **SSG**: [vite-react-ssg](https://github.com/antfu/vite-react-ssg)
-   **Database/Analytics**: [Firebase Firestore](https://firebase.google.com/docs/firestore)
-   **Styling**: [Styled Components](https://styled-components.com/), [React Bootstrap](https://react-bootstrap.github.io/)
-   **Internationalization**: [i18next](https://www.i18next.com/)

---

## 📦 Getting Started

### 1. Prerequisites
-   Node.js (v18+)
-   pnpm (recommended) or npm

### 2. Installation
```bash
git clone https://github.com/amin-abbasi/amin-abbasi.github.io.git
cd amin-abbasi.github.io
pnpm install
```

### 3. Environment Setup
Create a `.env.local` file and add your Firebase project credentials:
```env
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_FIREBASE_MEASUREMENT_ID=...
```

---

## 🛠️ How to Customize & Fork

### 1. Update Portfolio Content
All content is strictly managed through JSON files in `src/assets/locales/`. 
-   **English**: `src/assets/locales/en/resume/`
-   **Turkish**: `src/assets/locales/tr/resume/`

Edit the `.json` files (e.g., `about.json`, `projects.json`) to add your own data.

### 2. Change Styling & Theme
Colors and theme constants are located in `src/theme/themes.ts`. You can change the `accentColor` or background colors there to globally update the site's look.

### 3. Setup Analytics Dashboard
1. Create a Firebase project.
2. Enable **Firestore Database**.
3. Set your Firestore Rules to allow public writes but restricted reads (or use your own auth):
   ```js
   match /page_views/{doc=**} {
     allow create: if true;
     allow read: if true; // In production, restrict this to your IP or Auth!
   }
   ```
4. Visit `/admin` to see your traffic data.

### 4. Deploy to GitHub Pages
The project includes a GitHub Action in `.github/workflows/deploy.yml`. When you push to `master`, it automatically builds and deploys to your `gh-pages` branch.

---

## 📈 UTM Tracking Tips
To track where your visitors come from, share your links with UTM tags:
`https://your-domain.com/?utm_source=linkedin&utm_medium=social`

These will automatically appear in your Admin Dashboard's **"Sources"** and **"Pages"** charts!

---

## 🤝 Contributing
Forks are welcome! If you find a bug or have a feature request, please open an issue.

## 📄 License
MIT License - © 2026 Amin Abbasi
