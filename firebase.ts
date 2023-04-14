import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDha4mJ8j0ruhYjr9mlBGesnVA7-w_Ho7o",
  authDomain: "story-arc-cc231.firebaseapp.com",
  projectId: "story-arc-cc231",
  storageBucket: "story-arc-cc231.appspot.com",
  messagingSenderId: "479051008561",
  appId: "1:479051008561:web:ed1044da63da17c01b2310",
  measurementId: "G-XXWYCLL06D",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
