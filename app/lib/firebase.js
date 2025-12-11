 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByTND8hHo7rnTPw_AQA3YlrFLpTZ5YfNM",
  authDomain: "oak-travel.firebaseapp.com",
  projectId: "oak-travel",
  storageBucket: "oak-travel.firebasestorage.app",
  messagingSenderId: "351149233170",
  appId: "1:351149233170:web:5ad669de7949a9369534cb",
  measurementId: "G-WZK49YP401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);