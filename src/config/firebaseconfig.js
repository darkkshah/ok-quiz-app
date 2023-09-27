// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI5SPKKeZa0iE4gA-V4jO12NP4mzFwCXM",
  authDomain: "reactquizapp-001.firebaseapp.com",
  projectId: "reactquizapp-001",
  storageBucket: "reactquizapp-001.appspot.com",
  messagingSenderId: "334757788346",
  appId: "1:334757788346:web:ef7785a18d89e303c1a083",
  measurementId: "G-1283QYQ4GJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);