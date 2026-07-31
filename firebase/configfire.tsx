// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_d70FRirrLPAXyhBXmWKP7JlK-2pUZy4",
  authDomain: "proyectofinal-ec2d2.firebaseapp.com",
  projectId: "proyectofinal-ec2d2",
  storageBucket: "proyectofinal-ec2d2.firebasestorage.app",
  messagingSenderId: "536288115968",
  appId: "1:536288115968:web:d8ebf930c915423e85c7e5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);