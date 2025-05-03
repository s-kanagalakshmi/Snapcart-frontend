// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGbDJKOTTOFlRS8jJzO15rAHS4Sy2Cq_M",
  authDomain: "snapcart-7e105.firebaseapp.com",
  projectId: "snapcart-7e105",
  storageBucket: "snapcart-7e105.firebasestorage.app",
  messagingSenderId: "87613011485",
  appId: "1:87613011485:web:1314562abab02bbff4b8f4",
  measurementId: "G-ZJPLKEMRBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);