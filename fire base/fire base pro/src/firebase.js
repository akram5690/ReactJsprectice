// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD96dZ6w48IicUd2VBQ9LU9P8MjdMIvELg",
  authDomain: "hr-management-c96a9.firebaseapp.com",
  projectId: "hr-management-c96a9",
  storageBucket: "hr-management-c96a9.firebasestorage.app",
  messagingSenderId: "10052737110",
  appId: "1:10052737110:web:4b4448b2b48f65c60b83f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;