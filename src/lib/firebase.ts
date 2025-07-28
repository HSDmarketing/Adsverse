
import { initializeApp, getApp, getApps } from 'firebase/app';

const firebaseConfig = {
  "projectId": "stellarbrand",
  "appId": "1:913230651327:web:fec77021bd7751e9078b0a",
  "storageBucket": "stellarbrand.firebasestorage.app",
  "apiKey": "AIzaSyBK0IxDbkJ3DAgpXmsYxu3cW-V-2fD9lS8",
  "authDomain": "stellarbrand.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "913230651327"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export { app };
