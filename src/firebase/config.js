
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAHLivFiqTbZq-XXG6D98fXe3rR6vPjXxc",
  authDomain: "proyecto-final-reactjs-mgmg.firebaseapp.com",
  projectId: "proyecto-final-reactjs-mgmg",
  storageBucket: "proyecto-final-reactjs-mgmg.appspot.com",
  messagingSenderId: "253910989504",
  appId: "1:253910989504:web:4bdd699ff6df41d05ecb25"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)