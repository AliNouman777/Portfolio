import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDBtkLh1z2cKEMnjMPcRZ1NWZOn7sl78yA",
  authDomain: "ali-portfoilo.firebaseapp.com",
  projectId: "ali-portfoilo",
  storageBucket: "ali-portfoilo.appspot.com",
  messagingSenderId: "192852935423",
  appId: "1:192852935423:web:7c59ba7badc917649cc2ca",
  measurementId: "G-HQ82HQZE2Y"
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);
export const db=getFirestore()