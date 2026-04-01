import App from './App';
import Home from '../components/Home';
import Admin from './pages/Admin';
import About from '../features/about/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../features/experience/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import CaseStudies from '../components/CaseStudies';
import NotFound from './pages/NotFound';

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
