// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBR4tSenldlqq7hxs6uBoGdi-WTLKrTOeo",
  authDomain: "autorization-vjezba.firebaseapp.com",
  projectId: "autorization-vjezba",
  storageBucket: "autorization-vjezba.appspot.com",
  messagingSenderId: "557003642548",
  appId: "1:557003642548:web:07dce1bbc93dacfd4029e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);