// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwiwQ5YmRLyFwRsK3cfvLJoFxKfAd2HkY",
  authDomain: "reactnativeproject-eec55.firebaseapp.com",
  databaseURL: "https://reactnativeproject-eec55-default-rtdb.firebaseio.com",
  projectId: "reactnativeproject-eec55",
  storageBucket: "reactnativeproject-eec55.appspot.com",
  messagingSenderId: "54677010753",
  appId: "1:54677010753:web:8679389121195cf6b309c0",
  measurementId: "G-FFC0V7T9KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };


