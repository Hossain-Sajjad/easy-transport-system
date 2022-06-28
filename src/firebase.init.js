// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFyptyiq4GH0rxPQCftFY64QYMKts4UFA",
    authDomain: "easy-transport-system-8083e.firebaseapp.com",
    projectId: "easy-transport-system-8083e",
    storageBucket: "easy-transport-system-8083e.appspot.com",
    messagingSenderId: "891140470981",
    appId: "1:891140470981:web:5cce8e802a6f05223898ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;