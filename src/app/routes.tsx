import { lazy } from 'react';
import App from './App';
import Home from '@pages/Home/Home';

const Admin = lazy(() => import('@pages/Admin/Admin'));
const About = lazy(() => import('@pages/About/About'));
const Skills = lazy(() => import('@pages/Skills/Skills'));
const Education = lazy(() => import('@pages/Education/Education'));
const Experience = lazy(() => import('@pages/Experience/Experience'));
const Projects = lazy(() => import('@pages/Projects/Projects'));
const Contact = lazy(() => import('@pages/Contact/Contact'));
const CaseStudies = lazy(() => import('@pages/CaseStudies/CaseStudies'));
const NotFound = lazy(() => import('@pages/NotFound/NotFound'));

/**
 * Global Routing Map
 * Centralized route definitions for the Portfolio Hardening initiative.
 * Uses @pages alias for clean, modular imports.
 * Optimized with React.lazy for code splitting.
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
