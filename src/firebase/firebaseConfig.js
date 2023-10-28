// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6fy3sTC4lt2SMTx6yAOztlG8tb9Lv5F0",
  authDomain: "chat-ec4b2.firebaseapp.com",
  projectId: "chat-ec4b2",
  storageBucket: "chat-ec4b2.appspot.com",
  messagingSenderId: "843090305915",
  appId: "1:843090305915:web:1a63faa5324ceac4a353de",
  measurementId: "G-MV5ZGYTMM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
