import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9CGE_VfBP1R8iOpv_Jy1iNitE4yC8OFg",
  authDomain: "frontendcomplicated.firebaseapp.com",
  projectId: "frontendcomplicated",
  storageBucket: "frontendcomplicated.appspot.com",
  messagingSenderId: "366718450133",
  appId: "1:366718450133:web:7c83b627dc86ac9efb255c",
  measurementId: "G-XENL2FNRER",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
