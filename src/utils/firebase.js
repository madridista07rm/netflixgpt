// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD2XpEqs1v20NhR2j8XfevEFY4QUsFmHw",
  authDomain: "netflix-gpt-510fd.firebaseapp.com",
  projectId: "netflix-gpt-510fd",
  storageBucket: "netflix-gpt-510fd.appspot.com",
  messagingSenderId: "930049481993",
  appId: "1:930049481993:web:874f4628b5d32af25387d8",
  measurementId: "G-GVMXFHG19K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();