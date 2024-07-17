// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR5mqMr8jeUskRjXh1XY4r5y1bAtD7uCs",
  authDomain: "userdetaile.firebaseapp.com",
  projectId: "userdetaile",
  storageBucket: "userdetaile.appspot.com",
  messagingSenderId: "25639582214",
  appId: "1:25639582214:web:d9c4357e8807e69353a187",
  measurementId: "G-RDEPSG3R6W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();