

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAxaI5dz5mYrhb2bsF7UDhTrSaekwejvPk",
  authDomain: "group-mem.firebaseapp.com",
  databaseURL: "https://group-mem-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "group-mem",
  storageBucket: "group-mem.firebasestorage.app",
  messagingSenderId: "401065598875",
  appId: "1:401065598875:web:bfb87918e09a7e9cc48b3e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);


