// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeryzi2iUUzgWmlpJiqR4CitbUqE1KcXk",
  authDomain: "swp-timeshare.firebaseapp.com",
  projectId: "swp-timeshare",
  storageBucket: "swp-timeshare.appspot.com",
  messagingSenderId: "122285275633",
  appId: "1:122285275633:web:acf59f915c4ca40d58ac50",
  measurementId: "G-06EL2X6QCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};