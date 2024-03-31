
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiw7igwQA01fYhjosH1kICTBQLya1hDEo",
  authDomain: "email-password-context-a-e9ba9.firebaseapp.com",
  projectId: "email-password-context-a-e9ba9",
  storageBucket: "email-password-context-a-e9ba9.appspot.com",
  messagingSenderId: "817603453919",
  appId: "1:817603453919:web:8dc84d10c249e8ab311a6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth