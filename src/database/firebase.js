import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnl68G2nYzrR98TQ-S2aVxVwxdLBvFtl0",
  authDomain: "vistex-community.firebaseapp.com",
  projectId: "vistex-community",
  storageBucket: "vistex-community.appspot.com",
  messagingSenderId: "183590857175",
  appId: "1:183590857175:web:5e7a220e4d894437210392",
  measurementId: "G-HWGZB9KCDK",
};

const app = initializeApp(firebaseConfig); //Initialize the firebase app

const database = getFirestore(app); //Initialize database/service
export const auth = getAuth(app); //Initialize Auth Service
export default database;
