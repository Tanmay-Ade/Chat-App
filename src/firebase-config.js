// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq57LBpI48Ahl_dYrvQtzRPdY1t0TTgPY",
  authDomain: "chatapp-7ac63.firebaseapp.com",
  projectId: "chatapp-7ac63",
  storageBucket: "chatapp-7ac63.appspot.com",
  messagingSenderId: "1023903589057",
  appId: "1:1023903589057:web:f4012d4869d2106efb2a40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

