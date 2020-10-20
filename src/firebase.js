import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5PHPzmDqAeoYWDlop8cJVL97ad4PWVjk",
  authDomain: "paylo-clone.firebaseapp.com",
  databaseURL: "https://paylo-clone.firebaseio.com",
  projectId: "paylo-clone",
  storageBucket: "paylo-clone.appspot.com",
  messagingSenderId: "670059705040",
  appId: "1:670059705040:web:a5886e19b1eea374a4e4d5",
  measurementId: "G-BRTNCDJWYW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const getServerTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, provider, getServerTimestamp };
export default db;
