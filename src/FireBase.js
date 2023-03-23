// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy3V7EGEfCoaoEHWjgpyCM9q2Cx1AGvhk",
    authDomain: "crud-rtk-34683.firebaseapp.com",
    databaseURL: "https://crud-rtk-34683-default-rtdb.firebaseio.com",
    projectId: "crud-rtk-34683",
    storageBucket: "crud-rtk-34683.appspot.com",
    messagingSenderId: "986427393967",
    appId: "1:986427393967:web:dff23c4d384d943c35d15a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore()