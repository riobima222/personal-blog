// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc8Kunrq9BrdhlWNc5HcyRxdvSO0YTHZg",
  authDomain: "personal---blog.firebaseapp.com",
  projectId: "personal---blog",
  storageBucket: "personal---blog.appspot.com",
  messagingSenderId: "976837503169",
  appId: "1:976837503169:web:362a13ce687cd338bf4c40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
