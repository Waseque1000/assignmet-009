// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU5aE01w6eteZnenHQB5FnP8C6rJZcG0s",
  authDomain: "assignment-009-cfd88.firebaseapp.com",
  projectId: "assignment-009-cfd88",
  storageBucket: "assignment-009-cfd88.firebasestorage.app",
  messagingSenderId: "87045680259",
  appId: "1:87045680259:web:9e9b1152d36a2a5d13ffb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
