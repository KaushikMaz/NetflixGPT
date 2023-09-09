import {getAuth} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxdKAbJhGwLLg9_p54tlkWJo7i5gY6bqQ",
  authDomain: "netflixgpt-20c2b.firebaseapp.com",
  projectId: "netflixgpt-20c2b",
  storageBucket: "netflixgpt-20c2b.appspot.com",
  messagingSenderId: "969540272093",
  appId: "1:969540272093:web:3ec5afd028c64bff440034",
  measurementId: "G-J4TN1LNDZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()

