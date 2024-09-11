// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCLDEskzuYC_0zT49x7R4ZygoJ90Neue0M",
  authDomain: "react-ecommerce-9eedd.firebaseapp.com",
  projectId: "react-ecommerce-9eedd",
  storageBucket: "react-ecommerce-9eedd.appspot.com",
  messagingSenderId: "307960123158",
  appId: "1:307960123158:web:f86b00b4aafaba626fca37",
  measurementId: "G-NSM659NTK4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { auth, db, storage };