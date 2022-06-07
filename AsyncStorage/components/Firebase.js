import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYVr9G0bJQODRntx7zzV1bjSAZJfE1Tj0",
  authDomain: "async-firebase-rn.firebaseapp.com",
  databaseURL: "https://async-firebase-rn-default-rtdb.firebaseio.com",
  projectId: "async-firebase-rn",
  storageBucket: "async-firebase-rn.appspot.com",
  messagingSenderId: "887036592496",
  appId: "1:887036592496:web:41c176ded885f3ff9a4fb5",
  measurementId: "G-9YTZ3VW2N0",
};

initializeApp(firebaseConfig);

import { getDatabase, ref, onValue, set } from "firebase/database";

export const storeData = (userId, score) => {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);
  set(reference, {
    highscore: score,
  });
};

export const getData = (userId) => {
  const db = getDatabase();
  const reference = ref(db, "users/" + userId);
  onValue(reference, (snapshot) => {
    const highscore = snapshot.val().highscore;
    console.log("New high score: " + highscore);
  });
};
