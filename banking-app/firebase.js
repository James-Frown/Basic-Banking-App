// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX6e1Fu95DPKJA8IfkDNgcAI4VY1IY-34",
  authDomain: "my-bank-aae12.firebaseapp.com",
  projectId: "my-bank-aae12",
  storageBucket: "my-bank-aae12.appspot.com",
  messagingSenderId: "738978513152",
  appId: "1:738978513152:web:fa3df39b9751adff7033e5",
  measurementId: "G-KR9RW1NZMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);