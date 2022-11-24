// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRnj57pEV6jg7L8QQ7TDkbdtTK_MAuNmw",
  authDomain: "proyecto-react-brianschmid.firebaseapp.com",
  projectId: "proyecto-react-brianschmid",
  storageBucket: "proyecto-react-brianschmid.appspot.com",
  messagingSenderId: "670109094882",
  appId: "1:670109094882:web:a9132df115a8c24fab9fbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);