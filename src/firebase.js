import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqsT2PZwd-01Ftgu8B3U5ALerQvZt6WYk",
  authDomain: "ogury-fdd42.firebaseapp.com",
  projectId: "ogury-fdd42",
  storageBucket: "ogury-fdd42.firebasestorage.app",
  messagingSenderId: "83570011303",
  appId: "1:83570011303:web:f1ecaeb62cee97211fff82",
  measurementId: "G-L36GWJ0B6D",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// 서비스 export
export const auth = getAuth(app);
export const db = getFirestore(app);
