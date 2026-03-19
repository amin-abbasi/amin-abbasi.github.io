import App from './App';
import Home from './components/Home';
import Admin from './pages/Admin';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'admin', element: <Admin /> },
            { path: 'about', element: <About header="About" /> },
            { path: 'skills', element: <Skills header="Skills" /> },
            { path: 'education', element: <Education header="Education" /> },
            { path: 'experience', element: <Experience header="Experience" /> },
            { path: 'projects', element: <Projects header="Projects" /> },
        ],
    },
];
