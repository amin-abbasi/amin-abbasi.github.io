// src/app/routes.tsx
import App from './App';
import Home from '@pages/Home/Home';
import Admin from '@pages/Admin/Admin';
import About from '@pages/About/About';
import Skills from '@pages/Skills/Skills';
import Education from '@pages/Education/Education';
import Experience from '@pages/Experience/Experience';
import Projects from '@pages/Projects/Projects';
import Contact from '@pages/Contact/Contact';
import CaseStudies from '@pages/CaseStudies/CaseStudies';
import NotFound from '@pages/NotFound/NotFound';

/**
 * Global Routing Map
 * Centralized route definitions for the Portfolio Hardening initiative.
 * Uses @pages alias for clean, modular imports.
 */
export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'admin', element: <Admin /> },
            { path: 'about', element: <About /> },
            { path: 'skills', element: <Skills /> },
            { path: 'education', element: <Education /> },
            { path: 'experience', element: <Experience /> },
            { path: 'projects', element: <Projects /> },
            { path: 'contact', element: <Contact /> },
            { path: 'case-studies', element: <CaseStudies /> },
            { path: '*', element: <NotFound /> },
        ],
    },
];
