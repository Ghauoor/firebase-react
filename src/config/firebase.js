import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDNrZC6Y5671-a3eDjhAGwfhSjLZB7YGWg",
  authDomain: "learn-firebase-4fb00.firebaseapp.com",
  projectId: "learn-firebase-4fb00",
  storageBucket: "learn-firebase-4fb00.appspot.com",
  messagingSenderId: "55860702000",
  appId: "1:55860702000:web:a0ef1588efdd295c1bb6f5",
  measurementId: "G-6GH39NX2KG",
  databaseURL: "https://learn-firebase-4fb00-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
