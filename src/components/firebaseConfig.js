import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmBwZY3BBiXv0AD9chwGSGtSFyaT6rulw",
  authDomain: "dream-11-grc.firebaseapp.com",
  databaseURL: "https://dream-11-grc-default-rtdb.firebaseio.com",
  projectId: "dream-11-grc",
  storageBucket: "dream-11-grc.appspot.com",
  messagingSenderId: "744876763502",
  appId: "1:744876763502:web:81523e7251b706500c397f"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};