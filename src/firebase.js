// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUKrZLqd0CKXdwgEosUeWcWWO6YzMYv8A",
    authDomain: "contractee-e9e8f.firebaseapp.com",
    projectId: "contractee-e9e8f",
    storageBucket: "contractee-e9e8f.appspot.com",
    messagingSenderId: "347090736534",
    appId: "1:347090736534:web:4f8acf22f8d105575139b7",
    measurementId: "G-7Q0QC0EKV9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
