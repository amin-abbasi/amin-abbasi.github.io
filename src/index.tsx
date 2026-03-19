import { ViteReactSSG } from 'vite-react-ssg';

import './index.css';

import reportWebVitals from './reportWebVitals';
import { routes } from './routes';

export const createRoot = ViteReactSSG({ routes }, undefined, {
    getStyleCollector: async () => {
        const { default: ssrCollector } = await import('vite-react-ssg/style-collectors/styled-components');
        return ssrCollector();
    },
});

reportWebVitals();
