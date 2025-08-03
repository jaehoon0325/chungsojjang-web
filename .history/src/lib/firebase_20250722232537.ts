// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE", // TODO: API 키를 여기에 추가해주세요
  authDomain: "chungsojjang.firebaseapp.com",
  projectId: "chungsojjang",
  storageBucket: "chungsojjang.appspot.com",
  messagingSenderId: "915745818093",
  appId: "1:915745818093:web:b10fbb8403a1bef3f053e4",
  measurementId: "G-XXXXXXXXXX" // TODO: 측정 ID를 여기에 추가해주세요 (선택사항)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (브라우저 환경에서만)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app; 