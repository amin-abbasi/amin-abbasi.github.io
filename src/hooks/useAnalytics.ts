import { configs } from 'constants/configs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UAParser } from 'ua-parser-js';

export const useAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        const trackPageView = async () => {
            try {
                // Fetch country from free IPAPI
                let country = 'Unknown';
                try {
                    const response = await fetch('https://ipapi.co/json/');
                    const data = await response.json();
                    country = data.country_name || 'Unknown';
                } catch (e) {
                    console.error('IPAPI error:', e);
                }

                const parser = new UAParser();
                const result = parser.getResult();

                // Firestore REST API expects this format
                const pageView = {
                    fields: {
                        path: { stringValue: location.pathname + location.search },
                        created_at: { stringValue: new Date().toISOString() },
                        country: { stringValue: country },
                        browser: { stringValue: result.browser.name || 'Unknown' },
                        os: { stringValue: result.os.name || 'Unknown' },
                        device: { stringValue: result.device.type || 'Desktop' },
                        referrer: { stringValue: document.referrer || 'Direct' },
                        screen_resolution: { stringValue: `${window.screen.width}x${window.screen.height}` },
                        language: { stringValue: navigator.language },
                    }
                };

                const projectId = configs.firebaseProjectId;
                if (!projectId) return;

                await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/page_views`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(pageView),
                });
            } catch (error) {
                if (typeof window !== 'undefined') {
                    console.error('Analytics error:', error);
                }
            }
        };

        if (typeof window !== 'undefined' && configs.isProduction) {
            trackPageView();
        }
    }, [location]);
};
