import { ViteReactSSG } from 'vite-react-ssg';
import './app/styles/index.css';
import { initI18n } from './core/i18n';
import reportWebVitals from './reportWebVitals';
import { routes } from './app/routes';

// Initialize i18n domain
initI18n();

export const createRoot = ViteReactSSG({ routes }, undefined, {
    getStyleCollector: async () => {
        const { default: ssrCollector } = await import('vite-react-ssg/style-collectors/styled-components');
        return ssrCollector();
    },
});

reportWebVitals();
