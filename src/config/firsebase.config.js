// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuEyH1RTuueorBnbDIJsAcH7jUZZ7N1y4",
  authDomain: "react-chatapp-ce59f.firebaseapp.com",
  projectId: "react-chatapp-ce59f",
  storageBucket: "react-chatapp-ce59f.appspot.com",
  messagingSenderId: "867399295672",
  appId: "1:867399295672:web:dfdf271af2763345634a4d",
  measurementId: "G-ZZ7L5GL5LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);