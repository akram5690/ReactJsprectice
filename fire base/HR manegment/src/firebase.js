// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABOAw7cqF0XPH5WPsc33lxEkjrvht1T7w",
  authDomain: "hr-manegmnet.firebaseapp.com",
  projectId: "hr-manegmnet",
  storageBucket: "hr-manegmnet.firebasestorage.app",
  messagingSenderId: "749078834551",
  appId: "1:749078834551:web:8176a0fb331ffa776a0572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };