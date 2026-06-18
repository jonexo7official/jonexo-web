import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAw3AjAdMX20kD6BVkM_nfJeaku5SFNr8o",
  authDomain: "jonexo-fc.firebaseapp.com",
  projectId: "jonexo-fc",
  storageBucket: "jonexo-fc.firebasestorage.app",
  messagingSenderId: "599267907841",
  appId: "1:599267907841:web:5222475d6065c4f2e12300",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);