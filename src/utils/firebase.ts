// src/firebase.ts
import { configs } from "constants/configs";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
