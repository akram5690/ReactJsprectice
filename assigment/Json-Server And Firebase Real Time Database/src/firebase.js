// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuIGs8_tImd9X6_vij-YEeARpamOc7Ypg",
  authDomain: "product-page-8e867.firebaseapp.com",
  projectId: "product-page-8e867",
  storageBucket: "product-page-8e867.firebasestorage.app",
  messagingSenderId: "924875489931",
  appId: "1:924875489931:web:1fc57411c12b0b28604a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {db, auth}