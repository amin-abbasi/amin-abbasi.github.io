// src/utils/firebase.ts
import { configs } from "../constants/configs";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: configs.firebaseApiKey,
  authDomain: configs.firebaseAuthDomain,
  projectId: configs.firebaseProjectId,
  storageBucket: configs.firebaseStorageBucket,
  messagingSenderId: configs.firebaseMessagingSenderId,
  appId: configs.firebaseAppId,
  measurementId: configs.firebaseMeasurementId,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const fireStore = getFirestore(firebaseApp);

// Initialize analytics only on the client and if supported
export const analyticsPromise = typeof window !== 'undefined' 
  ? isSupported().then(supported => {
      if (supported) {
        const analytics = getAnalytics(firebaseApp);
        // Fix for GitHub Pages cookie rejection
        if (typeof (window as any).gtag === 'function') {
          (window as any).gtag('config', configs.firebaseMeasurementId, {
            cookie_domain: window.location.hostname,
            cookie_flags: 'SameSite=None;Secure'
          });
        }
        return analytics;
      }
      return null;
    })
  : Promise.resolve(null);
