// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxC2_W1eE2K7nLpdokQQLIqZm07puqkfQ",
  authDomain: "a9-real-estate.firebaseapp.com",
  projectId: "a9-real-estate",
  storageBucket: "a9-real-estate.appspot.com",
  messagingSenderId: "592529918350",
  appId: "1:592529918350:web:48e2049a266e0e6cdafcdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app