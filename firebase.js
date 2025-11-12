import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6ekkuC9VBoXcRDYcR7IWaiJjvcAIJSyA",
  authDomain: "week-3-1a.firebaseapp.com",
  projectId: "week-3-1a",
  storageBucket: "week-3-1a.firebasestorage.app",
  messagingSenderId: "275315204938",
  appId: "1:275315204938:web:39727bc128744afa81d7b3",
  measurementId: "G-E4H27HTR53",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
