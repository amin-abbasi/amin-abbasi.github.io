import { configs } from '../constants/configs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { UAParser } from 'ua-parser-js';
import { analyticsPromise } from '../utils/firebase';
import { logEvent } from 'firebase/analytics';

const getVisitorId = () => {
    if (typeof window === 'undefined') return 'SSR';
    let id = localStorage.getItem('visitor_id');
    if (!id) {
        id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        localStorage.setItem('visitor_id', id);
    }
    return id;
};

export const trackEvent = async (customPath?: string) => {
    try {
        const visitorId = getVisitorId();
        const path = customPath || (typeof window !== 'undefined' ? window.location.pathname + window.location.search : '/');

        // 1. Official Firebase Analytics SDK
        const analytics = await analyticsPromise;
        if (analytics) {
            logEvent(analytics, 'page_view', {
                page_path: path,
                visitor_id: visitorId,
            });
        }

        // 2. Custom Firestore REST Analytics
        let country = 'Unknown';
        try {
            const response = await fetch('https://get.geojs.io/v1/ip/country.json');
            if (response.ok) {
                const text = await response.text();
                if (text) {
                    const data = JSON.parse(text);
                    country = data.name || data.country || 'Unknown';
                }
            }
        } catch (e) {
            // Silently fallback for IP lookup to keep console clean
            console.warn('Analytics IP lookup skipped:', e instanceof Error ? e.message : 'Service unavailable');
        }

        const parser = new UAParser();
        const result = parser.getResult();

        const pageView = {
            fields: {
                path: { stringValue: path },
                visitor_id: { stringValue: visitorId },
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

export const useAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        if (typeof window !== 'undefined' && (configs.isProduction || isLocal)) {
            // Wait for full window load to prioritize 3D assets and initial paint
            const handleLoad = () => {
                const timer = setTimeout(() => {
                    trackEvent();
                }, 2000); // Small additional buffer
                return () => clearTimeout(timer);
            };

            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
                return () => window.removeEventListener('load', handleLoad);
            }
        }
    }, [location]);
};
