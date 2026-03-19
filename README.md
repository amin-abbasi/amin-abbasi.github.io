# Developer Portfolio

A modern, high-performance portfolio website built with **React**, **TypeScript**, and **Vite**, featuring **Static Site Generation (SSG)** for optimal SEO and performance.

## 🚀 Key Features

-   **⚡ Performance**: Built with Vite and pre-rendered with `vite-react-ssg` for near-instant page loads.
-   **🔍 SEO & ATS Optimized**: Full static HTML generation ensures your content is discoverable by search engines and ATS systems.
-   **🎨 Modern UI**: Premium design using `styled-components`, `framer-motion` (via `react-awesome-reveal`), and `react-bootstrap`.
-   **🌓 Dark Mode**: Built-in dark mode support that persists across sessions.
-   **📊 Analytics**: Privacy-focused, custom analytics implementation using **Firebase Firestore**.
-   **📱 Responsive**: Fully responsive design that looks great on all devices.
-   **⚙️ CI/CD**: Automatic deployment to GitHub Pages via GitHub Actions.

## 🛠️ Tech Stack

-   **Core**: [React 19](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **SSG**: [vite-react-ssg](https://github.com/antfu/vite-react-ssg)
-   **Styling**: [Styled Components](https://styled-components.com/), [Bootstrap](https://getbootstrap.com/)
-   **Analytics**: [Firebase Firestore](https://firebase.google.com/docs/firestore)
-   **Animations**: [React Awesome Reveal](https://github.com/dennismccollum/react-awesome-reveal)

## 📦 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm or pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/amin-abbasi/amin-abbasi.github.io.git
    cd amin-abbasi.github.io
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env.local` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Development

Run the development server:
```bash
npm run dev
```

### Build & Deploy

Pre-render the site for production:
```bash
npm run build
```

The build output will be in the `build/` directory.

## 📝 Configuration

All portfolio content is managed through JSON files in `src/assets/profile/`. You can easily customize the site by editing these files:
-   `home.json`: Hero section content
-   `about.json`: Personal bio and profile image
-   `skills.json`: Technical skills and categories
-   `experience.json`: Professional history
-   `projects.json`: Portfolio projects

## 🤝 Contributing

Forks and contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
