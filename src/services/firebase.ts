import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC2JasGEes56uvpZR-TBIFMHw-KhmGKWjs",
  authDomain: "auth-99a2a.firebaseapp.com",
  projectId: "auth-99a2a",
  storageBucket: "auth-99a2a.appspot.com",
  messagingSenderId: "505545961744",
  appId: "1:505545961744:web:17f158b847fa9195daf595"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)