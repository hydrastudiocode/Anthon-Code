// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDdhdhc8lj2N9O6d6YMX5UgGvrCATcTFE0",
  authDomain: "anthon-fd7a0.firebaseapp.com",
  projectId: "anthon-fd7a0",
  storageBucket: "anthon-fd7a0.firebasestorage.app",
  messagingSenderId: "730851414350",
  appId: "1:730851414350:web:b52188592bcaa6b7358e1f",
  measurementId: "G-0Z983EDNRY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth, firebaseConfig };
