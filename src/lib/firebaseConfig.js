// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,/* "AIzaSyDRzM3FJom32E1uMl-fKqDx0dVZP7iFHe8"*/
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,/*"web-2026-agosto.firebaseapp.com",*/
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, /*"web-2026-agosto",*/
  /*storageBucket: "web-2026-agosto.firebasestorage.app",
  messagingSenderId: "633506533688",*/
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,/*"1:633506533688:web:b91481bd6f9ea5952831cd",*/
  /*measurementId: "G-1VTBDV1BXN"*/
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

/*replicar un login 
 no tener archivos .env no tener string en las claves*/