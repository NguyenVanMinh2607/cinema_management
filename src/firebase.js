// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCkXxBEgADmpF-AOOBBzUk7Gs8tNx5PKw",
  authDomain: "cinemamanagement-1f102.firebaseapp.com",
  projectId: "cinemamanagement-1f102",
  storageBucket: "cinemamanagement-1f102.appspot.com",
  messagingSenderId: "829394360531",
  appId: "1:829394360531:web:4fc64fa39a7ae561141c26",
  measurementId: "G-5WEMSDME78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logOut = () => {
  return signOut(auth);
};
